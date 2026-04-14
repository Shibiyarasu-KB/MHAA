import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number | null;
  loading: boolean;
}

export default function SearchBar({ value, onChange, resultCount, loading }: SearchBarProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-2 mb-4 text-center flex flex-col items-center">
      <div className="relative w-full max-w-md flex items-center">
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search name or enrollment id..."
            className="w-full pl-11 pr-11 py-3 text-sm bg-white border border-transparent shadow-xl shadow-gray-200/50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400 text-gray-800 font-medium"
            autoComplete="off"
            spellCheck={false}
          />
          {value && (
            <button
              onClick={() => onChange('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-gray-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      <div className="h-6 mt-3">
        {value.trim().length > 0 && !loading && (
          <p className="text-sm font-semibold text-gray-500 animate-in fade-in slide-in-from-top-1 duration-300">
            {resultCount === 0
              ? 'No matching members found'
              : `${(resultCount ?? 0).toLocaleString()} matching member${resultCount !== 1 ? 's' : ''}`}
          </p>
        )}

        {loading && (
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
             <div className="w-3 h-3 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
             <span>Searching...</span>
          </div>
        )}
      </div>
    </div>
  );
}
