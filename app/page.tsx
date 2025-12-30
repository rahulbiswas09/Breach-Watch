
'use client';
import { useState } from 'react';
import PasswordCheck from './components/PasswordCheck';

export default function Home() {
  const [email, setEmail] = useState('');
  const [breaches, setBreaches] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSearched(false);
    setError('');
    setBreaches([]);

    try {
      const res = await fetch('/api/breach', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        setError(data.error || 'Something went wrong');
      } else {
        if (data.breaches) {
          setBreaches(data.breaches);
        }
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-6 md:p-12 font-sans min-h-screen">
      <div className="max-w-3xl w-full space-y-12">
        

        <header className="text-center space-y-6 animate-fade-in-up">
          <div className="inline-block p-3 px-6 rounded-full bg-blue-950/50 border border-blue-400/50 text-blue-300 text-sm font-mono tracking-widest uppercase shadow-sm">
            SYSTEM STATUS: ONLINE
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-[0_0_10px_rgba(0,176,255,0.6)]">
            BREACH WATCH
          </h1>
          <p className="text-xl text-blue-100 font-medium">
            Scan the dark web. Secure your identity.
          </p>
        </header>


        <form onSubmit={handleSearch} className="relative group animate-fade-in-up delay-100">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              required
              placeholder="Enter email address (e.g., user@example.com)"
              className="flex-1 p-5 rounded-full text-lg text-white focus:outline-none transition-all glow-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit"
              disabled={loading}
              className="glow-button min-w-40"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-3 h-3 bg-white rounded-full animate-bounce"></span>
                  <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-75"></span>
                  <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></span>
                </span>
              ) : 'SCAN NOW'}
            </button>
          </div>
        </form>


        {error && (
            <div className="p-5 mb-8 bg-red-950/50 border border-red-500/50 text-red-200 rounded-xl text-center animate-fade-in-up">
                ❌ {error}
            </div>
        )}


        {searched && !error && (
          <div className="space-y-6 mb-16 animate-fade-in-up delay-200">
            {breaches.length > 0 ? (
              <div className="card-glass">
                <div className="p-5 bg-red-950/30 border border-red-500/30 rounded-xl text-red-200 text-center font-bold text-lg mb-6">
                  ⚠️ WARNING: {breaches.length} Data Breaches Found
                </div>
                
                <div className="space-y-6">
                  {breaches.map((breach, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-6 items-start border-b border-blue-400/20 pb-6 last:border-0">

                      <div className="w-16 h-16 shrink-0 bg-white rounded-xl p-2 flex items-center justify-center shadow-md">
                          {breach.LogoPath ? (
                              <img src={breach.LogoPath} alt={breach.Name} className="w-full h-full object-contain" />
                          ) : (
                              <span className="text-slate-900 font-bold text-2xl">!</span>
                          )}
                      </div>
                      

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                          <h3 className="font-bold text-white text-2xl">{breach.Name}</h3>
                          <span className="text-sm font-mono text-blue-300 bg-blue-950/50 px-3 py-1 rounded-full mt-2 md:mt-0">{breach.BreachDate}</span>
                        </div>
                        <p className="text-base text-blue-100 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: breach.Description }} />
                        
                        <div className="flex flex-wrap gap-3">
                          {breach.DataClasses.map((item: string, i: number) => (
                            <span key={i} className="px-3 py-1.5 bg-blue-950/60 text-blue-300 text-xs rounded-full border border-blue-400/30 font-mono">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-10 bg-green-950/50 border border-green-500/50 rounded-xl text-green-400 text-center card-glass">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2">Safe & Clean</h3>
                <p className="text-green-300/90 text-lg">No breaches found for this email address.</p>
              </div>
            )}
          </div>
        )}


        <div className="border-t border-blue-400/30 pt-12 animate-fade-in-up delay-300">
          <PasswordCheck />
        </div>

      </div>
    </main>
  );
}