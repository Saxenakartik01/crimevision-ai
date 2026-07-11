import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Map,
  Users,
  FileText,
  Shield,
  BrainCircuit,
  Bell,
  Settings,
  LogOut,
} from 'lucide-react';

const links = [
  { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/heatmap', label: 'Crime Map', icon: Map },
  { to: '/criminals', label: 'Criminals', icon: Users },
  { to: '/criminal-profile', label: 'Profile Demo', icon: Shield },
  { to: '/reports', label: 'Reports', icon: FileText },
];

export default function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col justify-between border-r border-cv-panel-border/40 bg-[#080c18]/95 backdrop-blur-xl md:flex">
      <div>
        <div className="flex h-20 items-center gap-3 border-b border-cv-panel-border/30 px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg shadow-blue-500/30">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white">
              Crime<span className="text-blue-400">Vision</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-400">AI Intelligence</p>
          </div>
        </div>

        <nav className="space-y-1 p-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={`group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                isActive(link.to)
                  ? 'bg-gradient-to-r from-blue-600/20 to-violet-600/20 text-blue-100 shadow-[0_0_20px_rgba(59,130,246,0.25)]'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
              }`}
            >
              <link.icon className={`h-5 w-5 ${isActive(link.to) ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
              {link.label}
              {isActive(link.to) && (
                <span className="ml-auto h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mx-4 mt-4 rounded-2xl border border-cv-panel-border/30 bg-gradient-to-br from-blue-900/20 to-violet-900/20 p-4">
          <div className="mb-3 flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-violet-400" />
            <span className="text-xs font-semibold text-slate-200">AI Assistant</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            Pattern engine is learning from 12,483 records. 3 new hotspots identified today.
          </p>
        </div>
      </div>

      <div className="border-t border-cv-panel-border/30 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-slate-200">
          <Bell className="h-5 w-5" /> Notifications
        </button>
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-slate-200">
          <Settings className="h-5 w-5" /> Settings
        </button>
        <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10">
          <LogOut className="h-5 w-5" /> Logout
        </button>
      </div>
    </aside>
  );
}
