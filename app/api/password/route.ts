import { NextResponse } from 'next/server';
import zxcvbn from 'zxcvbn';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ error: 'Password is required' }, { status: 400 });
    }


    const result = zxcvbn(password);


    return NextResponse.json({
      score: result.score, 
      crack_time: result.crack_times_display.offline_slow_hashing_1e4_per_second,
      feedback: result.feedback.warning || "Good job! This is a strong password.",
      suggestions: result.feedback.suggestions
    });

  } catch (error) {
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 });
  }
}