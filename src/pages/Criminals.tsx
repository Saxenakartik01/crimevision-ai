import { useState } from 'react';
import { Search, Filter, ShieldAlert } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import CriminalCard from '../components/CriminalCard';
import { criminals } from '../data/mockData';

export default function Criminals() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = criminals.filter((c) => {
    const matchesQuery = c.name.toLowerCase().includes(query.toLowerCase()) || c.crime.toLowerCase().includes(query.toLowerCase()) || c.area.toLowerCase().includes(query.toLowerCase());
    const matchesFilter = filter === 'All' || c.crime === filter || (filter === 'High Risk' && c.risk >= 80) || (filter === 'Repeat' && c.repeat);
    return matchesQuery && matchesFilter;
  });

  const crimes = ['All', ...Array.from(new Set(criminals.map((c) => c.crime))), 'High Risk', 'Repeat'];

  return (
    <PageLayout>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Criminal <span className="text-gradient">Records</span></h1>
          <p className="text-sm text-slate-400">{criminals.length} persons of interest in database</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name, crime, area..."
              className="w-full rounded-xl border border-cv-panel-border/40 bg-[#0b1020] py-2.5 pl-10 pr-4 text-sm text-slate-200 outline-none focus:border-blue-500/60"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full appearance-none rounded-xl border border-cv-panel-border/40 bg-[#0b1020] py-2.5 pl-10 pr-8 text-sm text-slate-200 outline-none focus:border-blue-500/60"
            >
              {crimes.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2 rounded-xl border border-cv-panel-border/30 bg-amber-500/10 p-3 text-sm text-amber-300">
        <ShieldAlert className="h-5 w-5" />
        <span>AI has flagged {criminals.filter(c => c.risk >= 85).length} high-risk individuals requiring immediate attention.</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((criminal) => (
          <CriminalCard key={criminal.id} criminal={criminal} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-2xl glass-card p-10 text-center text-slate-500">
          <p>No records match your search criteria.</p>
        </div>
      )}
    </PageLayout>
  );
}
