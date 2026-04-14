import { useEffect, useState } from 'react';

interface WelcomeSplashProps {
  onComplete: () => void;
}

export default function WelcomeSplash({ onComplete }: WelcomeSplashProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Step 0: Initial Mount (Start Entrance)
    // Step 1: Welcome appears
    const t1 = setTimeout(() => setStep(1), 500);
    // Step 2: "by" and Name appears
    const t2 = setTimeout(() => setStep(2), 1200);
    // Step 3: Start exit animation
    const t3 = setTimeout(() => setIsVisible(false), 3000);
    // Finally: Cleanup component
    const t4 = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (!isVisible && step === 3) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-1000 ease-in-out ${
        isVisible ? 'bg-slate-900/40 backdrop-blur-2xl' : 'bg-transparent backdrop-blur-0 pointer-events-none'
      }`}
    >
      <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
        <div className="flex justify-center mb-8">
          <div className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white p-1 shadow-2xl transition-all duration-1000 transform ${step >= 1 ? 'scale-100 rotate-0' : 'scale-50 rotate-12 opacity-0'}`}>
            <img src="/logo1.jpg" alt="Logo" className="w-full h-full object-contain rounded-2xl" />
          </div>
        </div>

        <h1 
          className={`text-4xl md:text-7xl font-black text-white tracking-[0.2em] mb-4 transition-all duration-1000 transform ${
            step >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          WELCOME
        </h1>
        
        <div 
          className={`flex flex-col items-center gap-2 transition-all duration-1000 delay-300 transform ${
            step >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <span className="text-white/60 font-semibold tracking-widest text-xs uppercase">by</span>
          <h2 className="text-3xl md:text-6xl font-black text-yellow-400 tracking-tighter drop-shadow-2xl uppercase">
            Advocate P. Ramamoorthi
          </h2>
        </div>

        {/* Subtle glass glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 rounded-full blur-[160px] animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
