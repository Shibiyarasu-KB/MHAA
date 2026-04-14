import { useState, useEffect, useMemo, useCallback } from 'react';
import { MessageSquare } from 'lucide-react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MemberCard from './components/MemberCard';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Hero from './components/Hero';
import WelcomeSplash from './components/WelcomeSplash';
import { Member } from './types';

export default function App() {
  const [members, setMembers] = useState<Member[]>([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    sessionStorage.setItem('welcome_shown', 'true');
  };

  useEffect(() => {
    const cached = sessionStorage.getItem('members_cache');
    if (cached) {
      try {
        setMembers(JSON.parse(cached));
        setLoading(false);
        return;
      } catch {
        sessionStorage.removeItem('members_cache');
      }
    }

    fetch('./members.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load directory');
        return res.json();
      })
      .then((data: Member[]) => {
        const parsed = data.filter((m) => m.serial && m.serial !== 'S.No');
        setMembers(parsed);
        sessionStorage.setItem('members_cache', JSON.stringify(parsed));
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return members.filter(
      (m) =>
        (m.name || '').toLowerCase().includes(q) ||
        (m.enrollmentNo || '').toLowerCase().includes(q)
    );
  }, [query, members]);

  const showResults = query.trim().length > 0;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        
        <SearchBar
          value={query}
          onChange={handleQueryChange}
          resultCount={showResults ? results.length : null}
          loading={loading}
        />

        <div className="flex justify-center -mt-2 mb-6">
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-full text-xs font-bold border border-gray-200 hover:border-blue-300 hover:text-blue-600 shadow-sm transition-all active:scale-95 group"
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-500 group-hover:scale-110 transition-transform" />
            <span>Contact for queries</span>
          </button>
        </div>

        {error && (
          <div className="max-w-4xl mx-auto px-4 pb-6">
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
              {error}
            </div>
          </div>
        )}

        {showResults && (
          <section className="max-w-4xl mx-auto px-4 pb-10">
            {results.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <p className="text-gray-500 font-medium">No matches found</p>
                <p className="text-gray-400 text-sm mt-1">Try a different name or enrollment number</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {results.map((member, idx) => (
                  <MemberCard
                    key={`${member.enrollmentNo}-${idx}`}
                    member={member}
                    query={query.trim()}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {!showResults && !loading && members.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 pb-10 flex flex-col items-center justify-center py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">
              Search from <span className="font-semibold text-gray-700">{members.length.toLocaleString()}</span> members
            </p>
          </div>
        )}
      </main>

      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {showWelcome && <WelcomeSplash onComplete={handleWelcomeComplete} />}
    </div>
  );
}
