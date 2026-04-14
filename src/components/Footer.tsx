import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto border-t border-gray-100 bg-white py-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Branding */}
        <div className="flex items-center gap-3 mb-4 select-none">
          <img src="/logo1.jpg" alt="MHAA Logo" className="w-10 h-10 object-contain rounded-full border border-gray-100" />
          <div className="text-left">
            <span className="block text-gray-900 font-black text-sm uppercase leading-tight">Right to Serve By Advocate - P.Ramamoorthi</span>

          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400 mb-8 max-w-xs leading-relaxed">
          © {new Date().getFullYear()} Madras High Court Advocates Association.<br />
          All rights reserved.
        </p>

        {/* Simple Back to Top */}
        <button
          onClick={scrollToTop}
          className="group flex flex-col items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-blue-600 transition-all uppercase tracking-[0.2em]"
        >
          <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-blue-100 group-hover:bg-blue-50 transition-all">
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </div>
          <span>Back to top</span>
        </button>
      </div>
    </footer>
  );
}

