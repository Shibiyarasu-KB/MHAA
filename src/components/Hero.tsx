
import { Users, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full pt-6 pb-2 text-center">
      {/* Profile Image Placeholder - Stay centered */}
      <div className="flex justify-center mb-4 px-4">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white/40 backdrop-blur-sm border-2 border-white shadow-xl flex items-center justify-center p-1 relative">
          <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
            <img src="/logo1.jpg" alt="MHAA Logo" className="w-full h-full object-contain" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center shadow-md border border-white">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Name and Title - Stay centered */}
      <div className="space-y-1 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700 px-4">
        <h1 className="text-2xl md:text-4xl font-black text-yellow-500 tracking-tight drop-shadow-sm uppercase leading-tight">
          P. RAMAMOORTHI
        </h1>
        <h2 className="text-sm md:text-lg font-bold text-gray-800 tracking-wide">
          Contestant for Junior EC Member
        </h2>
      </div>

      {/* Side-by-Side Layout Container - CONTROLLED HEIGHT */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-0 mb-12 px-4 lg:px-8">
        
        {/* Left Col: Campaign Poster - SLIGHTLY LARGER */}
        <div className="lg:w-[35%] animate-in fade-in slide-in-from-left-8 duration-1000">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
            <img 
              src="/poster.jpeg" 
              alt="P. Ramamoorthi Campaign Poster" 
              className="w-full h-auto max-h-[500px] block"
            />
          </div>
        </div>

        {/* Right Col: Message Box - ADJUSTED HEIGHT */}
        <div className="lg:w-[65%] animate-in fade-in slide-in-from-right-8 duration-1000 bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-white ml-8 h-[500px]">
          <div className="h-full relative overflow-y-auto custom-scrollbar">
            <div className="p-6 md:p-8 text-left relative h-full flex flex-col items-start">
              {/* Subtle accent line */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-500"></div>
              
              <div className="space-y-4 text-gray-700 text-xs md:text-sm leading-relaxed font-medium max-w-2xl px-2">
                <p className="text-xl md:text-2xl font-black text-gray-900 mb-4 tracking-tight">Dear Advocate,</p>
                
                <p>
                  Greetings from <strong className="text-blue-700">Adv. P. Ramamoorthi</strong> (Madras High Court).
                </p>
                
                <p className="py-3 px-4 bg-gray-50 rounded-xl border-l-4 border-blue-600 my-4 text-gray-600 italic shadow-sm">
                  Madras High Court Advocates Association Election on <strong className="text-gray-900">29th April 2026</strong>.
                </p>
                
                <p>
                  I humbly request your valuable support by extending your valuable vote to 
                  <strong className="text-gray-900 border-b-2 border-yellow-400 pb-0.5 ml-1">P. Ramamoorthi</strong>, 
                  contesting for <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg font-bold">Junior EC Member</span>.
                </p>
                
                <p className="pt-4 font-bold text-gray-900 text-base md:text-lg">
                  Your kind support will be highly appreciated.
                </p>
                
                <div className="pt-8 border-t border-gray-100 flex flex-col gap-1 mt-6">
                  <span className="text-[11px] text-gray-400 uppercase font-black tracking-[0.2em] italic">Regards,</span>
                  <span className="text-xl font-black text-blue-900 tracking-tight">Adv. P. Ramamoorthi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition to Members List */}
      <div className="flex flex-col items-center gap-2.5 animate-in fade-in duration-1000 delay-300">
        <div className="flex items-center justify-center gap-2.5 text-gray-900">
          <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center">
            <Users className="w-5 h-5 text-yellow-600" />
          </div>
          <h3 className="text-xl md:text-2xl font-black tracking-tight uppercase">Members List</h3>
        </div>
      </div>
    </div>
  );
}
