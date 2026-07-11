import { MapPin, ShieldAlert, Clock, FileText, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CriminalCardProps {
  criminal: {
    id: number;
    name: string;
    age: number;
    gender: string;
    crime: string;
    area: string;
    station: string;
    risk: number;
    repeat: boolean;
    lastSeen: string;
    fir: string;
    status: string;
    image: string;
    lat: number;
    lng: number;
  };
}

export default function CriminalCard({ criminal }: CriminalCardProps) {
  const riskClass = criminal.risk >= 80 ? 'risk-high' : criminal.risk >= 60 ? 'risk-med' : 'risk-low';

  return (
    <div className="group relative overflow-hidden rounded-2xl glass-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative flex gap-4">
        <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-xl border border-cv-panel-border/40">
          <img src={criminal.image} alt={criminal.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className={`absolute bottom-1 left-1 text-[10px] font-bold ${riskClass}`}>{criminal.risk}%</span>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-slate-100">{criminal.name}</h3>
              <p className="text-xs text-slate-500">{criminal.age} yrs • {criminal.gender}</p>
            </div>
            {criminal.repeat && (
              <span className="flex items-center gap-1 rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] font-semibold text-red-400">
                <ShieldAlert className="h-3 w-3" /> Repeat
              </span>
            )}
          </div>
          <p className="mt-1 text-sm font-medium text-blue-300">{criminal.crime}</p>
          <div className="mt-2 space-y-1 text-xs text-slate-400">
            <p className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {criminal.area}</p>
            <p className="flex items-center gap-1"><Clock className="h-3 w-3" /> {criminal.lastSeen}</p>
            <p className="flex items-center gap-1"><FileText className="h-3 w-3" /> {criminal.fir}</p>
          </div>
          <div className="mt-3 flex gap-2">
            <Link
              to="/criminal-profile"
              className="flex-1 rounded-lg bg-blue-600/20 py-1.5 text-center text-xs font-semibold text-blue-300 transition hover:bg-blue-600/30"
            >
              View Profile
            </Link>
            <button className="flex items-center justify-center gap-1 rounded-lg bg-violet-600/20 px-3 py-1.5 text-xs font-semibold text-violet-300 transition hover:bg-violet-600/30">
              <Navigation className="h-3 w-3" /> Track
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
