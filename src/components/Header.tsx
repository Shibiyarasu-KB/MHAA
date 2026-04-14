import { Search, X, MessageSquare, Users } from 'lucide-react';

interface HeaderProps {
  query: string;
  onQueryChange: (value: string) => void;
  loading: boolean;
  onContactClick: () => void;
}

export default function Header({ query, onQueryChange, loading, onContactClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
      <div className="w-full px-4 py-2.5">
        <div className="flex items-center justify-between gap-2 md:gap-4">
          {/* Left: Logo Only */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src="/logo1.jpg" alt="MHAA Logo" className="w-8 h-8 md:w-9 md:h-9 object-contain rounded-full shadow-sm" />
            <span className="hidden lg:block text-[10px] font-black text-blue-600 tracking-widest uppercase opacity-40">MHAA</span>
          </div>

          {/* Right Most: [Text] [Search] [Contact] */}
          <div className="flex-1 flex items-center justify-end gap-2 md:gap-4">
            
            {/* 1. All Member List Text */}
            <div className="flex-shrink-0 hidden md:flex items-center gap-2.5 px-3 py-1.5 bg-gray-50/50 rounded-xl border border-gray-100/50">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm">
                <Users className="w-3.5 h-3.5 text-blue-500" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-[9px] font-black text-blue-600 tracking-widest uppercase leading-none mb-0.5 opacity-80">Directory</span>
                <span className="text-[11px] font-black text-gray-900 tracking-tight uppercase leading-none whitespace-nowrap">All Members List</span>
              </div>
            </div>

            {/* 2. Search Bar */}
            <div className="relative w-full max-w-[140px] md:max-w-[280px] group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-3 md:w-3.5 h-3 md:h-3.5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Search..."
                className="w-full pl-8 md:pl-9 pr-8 py-1.5 md:py-2 text-[10px] md:text-sm bg-gray-50 border border-transparent rounded-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all placeholder-gray-400 text-gray-800 font-medium"
                autoComplete="off"
                spellCheck={false}
              />
              {loading && (
                <div className="absolute inset-y-0 right-8 flex items-center">
                  <div className="w-2.5 h-2.5 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin" />
                </div>
              )}
              {query && (
                <button
                  onClick={() => onQueryChange('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-300 hover:text-gray-500 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* 3. Contact Button */}
            <button
              onClick={onContactClick}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-full text-[10px] md:text-xs font-bold hover:bg-blue-700 transition-all active:scale-95 flex-shrink-0 shadow-md shadow-blue-200"
              title="Contact for queries"
            >
              <MessageSquare className="w-3 h-3 md:w-3.5 md:h-3.5" />
              <span className="hidden sm:inline italic">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
