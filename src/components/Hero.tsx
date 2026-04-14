
import { Users, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto px-4 pt-6 pb-2 text-center">
      {/* Profile Image Placeholder */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white/40 backdrop-blur-sm border-2 border-white shadow-xl flex items-center justify-center p-1 relative">
          <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
            <img src="/logo1.jpg" alt="MHAA Logo" className="w-full h-full object-contain" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center shadow-md border border-white">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Name and Title */}
      <div className="space-y-1 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700">
        <h1 className="text-2xl md:text-4xl font-black text-yellow-500 tracking-tight drop-shadow-sm uppercase leading-tight">
          RAMAMOORTHI
        </h1>
        <h2 className="text-sm md:text-lg font-bold text-gray-800 tracking-wide">
          Contestant for President
        </h2>
      </div>

      {/* Flash News Box */}
      <div className="max-w-lg mx-auto mb-5 overflow-hidden rounded-xl bg-gradient-to-br from-white-600 to-white-700 shadow-xl p-px">
        <div className="bg-white/5 backdrop-blur-md rounded-[11px] p-4 md:p-5 text-left relative overflow-hidden">

          <p className="text-dark-grey text-xs md:text-base leading-relaxed font-medium">
            ராமமூர்த்தி, சென்னை உயர்நீதிமன்றத்தின் தலைமை நீதிபதி மாண்புமிகு நீதியரசர் சஞ்சய் வி.கங்காபூர்வாலா அவர்களுக்கு வழங்கிய வரவேற்பு உரையின் போது முக்கிய கோரிக்கைகளை முன்வைத்தார். அதில்,
          </p>
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
