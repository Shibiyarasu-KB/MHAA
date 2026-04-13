import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number | null;
  loading: boolean;
}

export default function SearchBar({ value, onChange, resultCount, loading }: SearchBarProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by name or enrollment number..."
          className="w-full pl-12 pr-12 py-4 text-base bg-white border border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400 text-gray-800"
          autoComplete="off"
          spellCheck={false}
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {value.trim().length > 0 && !loading && (
        <p className="mt-3 text-sm text-gray-500 pl-1">
          {resultCount === 0
            ? 'No results found'
            : `${resultCount} result${resultCount !== 1 ? 's' : ''} found`}
        </p>
      )}

      {loading && (
        <p className="mt-3 text-sm text-gray-400 pl-1 animate-pulse">Loading directory...</p>
      )}
    </div>
  );
}
