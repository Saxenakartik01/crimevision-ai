import { useState } from 'react';
import { Search, Bell, User, Menu, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [search, setSearch] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-30 border-b border-cv-panel-border/40 bg-[#080c18]/80 backdrop-blur-xl md:left-64">
      <div className="flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-lg p-2 text-slate-300 hover:bg-white/10">
            <Menu className="h-6 w-6" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-violet-600">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-white">Crime<span className="text-blue-400">Vision</span></span>
          </Link>
        </div>

        <div className="hidden flex-1 md:block">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search FIR, criminal, area..."
              className="w-full rounded-xl border border-cv-panel-border/40 bg-[#0b1020] py-2.5 pl-10 pr-4 text-sm text-slate-200 outline-none ring-blue-500/30 transition focus:border-blue-500/60 focus:ring-2"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative rounded-xl p-2.5 text-slate-400 transition hover:bg-white/5 hover:text-slate-200">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]" />
          </button>
          <div className="flex items-center gap-3 rounded-xl border border-cv-panel-border/40 bg-[#0b1020] px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="hidden md:block">
              <p className="text-xs font-semibold text-slate-200">DCP A. Rao</p>
              <p className="text-[10px] text-slate-500">Delhi HQ</p>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-cv-panel-border/40 bg-[#080c18]/95 px-4 py-3 md:hidden">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-xl border border-cv-panel-border/40 bg-[#0b1020] py-2 pl-10 pr-4 text-sm text-slate-200 outline-none"
            />
          </div>
          <div className="space-y-1 text-sm text-slate-300">
            <Link to="/dashboard" className="block rounded-lg px-3 py-2 hover:bg-white/5">Dashboard</Link>
            <Link to="/analytics" className="block rounded-lg px-3 py-2 hover:bg-white/5">Analytics</Link>
            <Link to="/heatmap" className="block rounded-lg px-3 py-2 hover:bg-white/5">Crime Map</Link>
            <Link to="/criminals" className="block rounded-lg px-3 py-2 hover:bg-white/5">Criminals</Link>
            <Link to="/reports" className="block rounded-lg px-3 py-2 hover:bg-white/5">Reports</Link>
          </div>
        </div>
      )}
    </header>
  );
}
