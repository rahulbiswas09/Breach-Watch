'use client';
import { useState } from 'react';

export default function PasswordCheck() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState<any>(null);

  const checkPassword = async (pass: string) => {
    setPassword(pass);
    if (pass.length === 0) {
      setResult(null);
      return;
    }

    try {
      const res = await fetch('/api/password', {
        method: 'POST',
        body: JSON.stringify({ password: pass }),
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Password check failed", error);
    }
  };

  const getColor = (score: number) => {
    if (score === 0) return 'bg-red-600';
    if (score === 1) return 'bg-orange-500';
    if (score === 2) return 'bg-yellow-400';
    if (score === 3) return 'bg-blue-400';
    return 'bg-green-500';
  };

  return (
    <div className="card-glass mt-8">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-blue-400">🔐</span> Password Strength Analyzer
      </h2>
      
      <input
        type="password"
        placeholder="Type a password to test..."
        className="w-full p-4 rounded-full text-lg text-white focus:outline-none transition-all glow-input mb-6"
        value={password}
        onChange={(e) => checkPassword(e.target.value)}
      />

      {result && (
        <div className="animate-fade-in-up">
          <div className="flex justify-between text-base text-blue-200 mb-2 font-medium">
            <span>Strength Score</span>
            <span>{result.score}/4</span>
          </div>
          
          <div className="h-3 w-full bg-slate-700/50 rounded-full overflow-hidden mb-4 p-0.5">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${getColor(result.score)} shadow-[0_0_10px_rgba(0,176,255,0.5)]`} 
              style={{ width: `${(result.score + 1) * 20}%` }}
            />
          </div>

          <p className="text-lg text-blue-100 mb-2">
            <span className="font-bold text-blue-400">Verdict:</span> {result.feedback}
          </p>
          <p className="text-sm text-blue-300">
            Estimated time to crack: <span className="font-mono text-blue-200">{result.crack_time}</span>
          </p>
        </div>
      )}
    </div>
  );
}