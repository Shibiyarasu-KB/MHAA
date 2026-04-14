
import { Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="w-full pt-6 pb-2 text-center">
      {/* Profile Image Placeholder - Stay centered */}
      <div className="flex justify-center mb-4 px-4">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white/40 backdrop-blur-sm border-2 border-white shadow-xl flex items-center justify-center p-1 relative">
          <div className="w-full h-full rounded-xl bg-white flex items-center justify-center overflow-hidden">
            <img
              src="/profile_photo.jpeg"
              alt="Advocate P. Ramamoorthi Profile"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-yellow-400 rounded-lg flex items-center justify-center shadow-md border border-white">
            <Zap className="w-4 h-4 text-white fill-white" />
          </div>
        </div>
      </div>

      {/* Name and Title - Stay centered */}
      <div className="space-y-2 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700 px-4">
        <h1 className="text-2xl md:text-4xl font-black text-yellow-500 tracking-tight drop-shadow-sm uppercase leading-tight">
          P. RAMAMOORTHI
        </h1>
        <div className="flex flex-col gap-1">
          <span className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest">
            Contestant for
          </span>
          <h2 className="text-sm md:text-lg font-bold text-gray-800 tracking-wide uppercase">
            Junior EC Member
          </h2>
        </div>
      </div>

      {/* Stacked Layout Container */}
      <div className="max-w-4xl mx-auto px-4 mb-12 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">

        {/* Campaign Poster */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            src="/pooter2.jpeg"
            alt="P. Ramamoorthi Campaign Poster"
            className="w-full h-auto block"
          />
        </div>

        {/* Premium Message Content */}
        <div className="max-w-3xl mx-auto px-6 py-10 rounded-[2.5rem] bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl shadow-blue-900/5 relative overflow-hidden group hover:bg-white/50 transition-colors duration-700">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all group-hover:bg-yellow-400/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/5 rounded-full -ml-16 -mb-16 blur-3xl transition-all group-hover:bg-blue-400/10" />

          <div className="relative z-10 text-center space-y-5">
            <p className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Dear <span className="text-blue-600">Advocates</span>,
            </p>

            <div className="text-gray-700 text-sm md:text-lg leading-relaxed font-medium space-y-4 max-w-2xl mx-auto">
              <p className="opacity-90">
                Greetings from <strong className="text-blue-700 border-b-2 border-blue-100">Advocate P. Ramamoorthi</strong> (Madras High Court).
              </p>

              <p className="bg-white/60 py-4 px-6 rounded-2xl border border-white shadow-sm inline-block">
                For the MHAA Election on <strong className="text-blue-900 underline decoration-yellow-400 decoration-2 underline-offset-4">29th April 2026</strong>,
                I humbly request your support for <strong className="text-gray-900">Advocate P. Ramamoorthi</strong>, contesting for:<br />
                <span className="inline-block bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-md mt-3 whitespace-nowrap">
                  Junior EC Member
                </span>
              </p>

              <p className="text-lg md:text-xl font-bold text-gray-900 tracking-wide underline decoration-blue-500/20 underline-offset-8">
                Your kind support will be highly appreciated.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-900/5 flex flex-col items-center gap-2">
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-gray-400 uppercase font-black tracking-[0.4em] italic mb-1">With Warm Regards,</span>
                <span className="text-2xl md:text-3xl font-black text-blue-950 tracking-tighter">Advocate P. Ramamoorthi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
