import { NextResponse } from 'next/server';
import { checkRateLimit } from '@/lib/rateLimit';
import { MOCK_BREACHES } from '@/lib/mockData';

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    

    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please wait a minute.' }, { status: 429 });
    }

    const body = await request.json();
    const { email } = body;


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const apiKey = process.env.HIBP_API_KEY;
    const useMockData = process.env.USE_MOCK_DATA === 'true';


    if (useMockData || !apiKey) {
      console.log("⚠️ Using Mock Data for Hackathon Demo");
      

      await new Promise(resolve => setTimeout(resolve, 1500));

      const lowerEmail = email.toLowerCase();


      if (lowerEmail.includes("facebook")) {
        return NextResponse.json({ 
          status: 'pwned', 
          breaches: MOCK_BREACHES.filter(b => b.Name === "Facebook") 
        });
      }

      if (lowerEmail.includes("uber")) {
        return NextResponse.json({ 
          status: 'pwned', 
          breaches: MOCK_BREACHES.filter(b => b.Name === "Uber") 
        });
      }

      if (lowerEmail.includes("linkedin")) {
        return NextResponse.json({ 
          status: 'pwned', 
          breaches: MOCK_BREACHES.filter(b => b.Name === "LinkedIn") 
        });
      }


      return NextResponse.json({ status: 'pwned', breaches: MOCK_BREACHES.slice(0, 3) });
    }


    const res = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${email}?truncateResponse=false`, {
      method: 'GET',
      headers: {
        'hibp-api-key': apiKey,
        'user-agent': 'BreachWatch-Hackathon',
      },
    });

    if (res.status === 404) {
      return NextResponse.json({ status: 'clean', breaches: [] });
    }

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch external data' }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ status: 'pwned', breaches: data });

  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}