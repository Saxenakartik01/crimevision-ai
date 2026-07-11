import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PageLayout from '../components/PageLayout';
import { criminalProfile, networkNodes, networkLinks } from '../data/mockData';
import { ShieldAlert, Phone, Calendar, AlertTriangle, Navigation, Users, BrainCircuit } from 'lucide-react';

function NetworkGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [nodes] = useState(() => {
    const width = 600;
    const height = 320;
    const angleStep = (2 * Math.PI) / networkNodes.length;
    return networkNodes.map((n, i) => ({
      ...n,
      x: width / 2 + Math.cos(i * angleStep) * 120,
      y: height / 2 + Math.sin(i * angleStep) * 120,
    }));
  });

  return (
    <svg ref={svgRef} viewBox="0 0 600 320" className="h-full w-full">
      {networkLinks.map((link, i) => {
        const source = nodes.find((n) => n.id === link.source);
        const target = nodes.find((n) => n.id === link.target);
        if (!source || !target) return null;
        return (
          <line
            key={i}
            x1={source.x}
            y1={source.y}
            x2={target.x}
            y2={target.y}
            stroke="#6366f1"
            strokeWidth={Math.max(1, link.value / 2)}
            className="network-line"
            opacity={0.6}
          />
        );
      })}
      {nodes.map((node) => (
        <g key={node.id}>
          <circle
            cx={node.x}
            cy={node.y}
            r={node.group === 'target' ? 22 : node.risk > 60 ? 14 : 10}
            fill={node.group === 'target' ? '#ef4444' : node.group === 'gang' ? '#f59e0b' : node.group === 'associate' ? '#3b82f6' : '#8b5cf6'}
            stroke="#0b1020"
            strokeWidth={2}
            className="pulse-glow"
          />
          <text x={node.x} y={node.y + (node.group === 'target' ? 38 : 26)} textAnchor="middle" fill="#cbd5e1" fontSize={10}>
            {node.id.length > 18 ? node.id.slice(0, 18) + '...' : node.id}
          </text>
        </g>
      ))}
    </svg>
  );
}

const personIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="width:16px;height:16px;border-radius:50%;background:#ef4444;box-shadow:0 0 12px #ef4444;border:2px solid white;"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

export default function CriminalProfile() {
  const [risk, setRisk] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setRisk(Math.floor(criminalProfile.risk * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Criminal <span className="text-gradient">Profile</span></h1>
        <p className="text-sm text-slate-400">FIR {criminalProfile.fir} • {criminalProfile.station}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card rounded-2xl p-6 lg:col-span-1">
          <div className="relative mx-auto h-64 w-56 overflow-hidden rounded-2xl border-2 border-cv-panel-border/40">
            <img src={criminalProfile.image} alt={criminalProfile.name} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-xl font-bold text-white">{criminalProfile.name}</p>
              <p className="text-xs text-slate-300">Alias: {criminalProfile.alias}</p>
            </div>
            <span className="absolute right-3 top-3 rounded-full bg-red-500/90 px-2 py-1 text-xs font-bold text-white">{criminalProfile.status}</span>
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <p className="flex justify-between"><span className="text-slate-500">Age</span> <span className="text-slate-200">{criminalProfile.age}</span></p>
            <p className="flex justify-between"><span className="text-slate-500">Gender</span> <span className="text-slate-200">{criminalProfile.gender}</span></p>
            <p className="flex justify-between"><span className="text-slate-500">Height</span> <span className="text-slate-200">{criminalProfile.height}</span></p>
            <p className="flex justify-between"><span className="text-slate-500">Build</span> <span className="text-slate-200">{criminalProfile.build}</span></p>
            <p className="flex justify-between"><span className="text-slate-500">Crime</span> <span className="text-blue-300">{criminalProfile.crime}</span></p>
            <p className="flex justify-between"><span className="text-slate-500">Area</span> <span className="text-slate-200">{criminalProfile.area}</span></p>
            <p className="flex justify-between"><span className="text-slate-500">Last Seen</span> <span className="text-amber-300">{criminalProfile.lastSeen}</span></p>
          </div>

          <div className="mt-6 rounded-xl border border-cv-panel-border/30 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">AI Risk Meter</p>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold text-red-400">{risk}</span>
              <span className="mb-1 text-sm text-slate-400">/100</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-500 via-amber-500 to-red-500 transition-all duration-1000" style={{ width: `${risk}%` }} />
            </div>
            <p className="mt-2 text-xs text-red-400">Extreme risk — apprehension recommended</p>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="glass-card rounded-2xl p-5">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white"><Calendar className="h-5 w-5 text-blue-400" /> Crime History Timeline</h3>
            <div className="relative space-y-6 pl-6 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-gradient-to-b from-blue-500 to-violet-500">
              {criminalProfile.history.map((h, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-6 top-1 h-3.5 w-3.5 rounded-full border-2 border-cv-bg bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                  <p className="text-xs text-slate-500">{h.date}</p>
                  <p className="text-sm font-medium text-slate-200">{h.event}</p>
                  <p className="text-xs text-slate-400">{h.outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="glass-card rounded-2xl p-5">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white"><Users className="h-5 w-5 text-violet-400" /> Known Associates</h3>
              <div className="space-y-3">
                {criminalProfile.associates.map((a, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-cv-panel-border/30 bg-black/20 p-3">
                    <div>
                      <p className="text-sm font-medium text-slate-200">{a.name}</p>
                      <p className="text-xs text-slate-500">{a.relation}</p>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${a.risk >= 80 ? 'bg-red-500/15 text-red-400' : 'bg-amber-500/15 text-amber-400'}`}>{a.risk}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white"><BrainCircuit className="h-5 w-5 text-emerald-400" /> AI Prediction</h3>
              <p className="text-sm leading-relaxed text-slate-300">{criminalProfile.prediction}</p>
              <div className="mt-4 rounded-xl border border-cv-panel-border/30 bg-violet-500/10 p-3">
                <p className="text-xs uppercase tracking-wider text-violet-300">Confidence</p>
                <p className="text-2xl font-bold text-white">87%</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white"><Navigation className="h-5 w-5 text-red-400" /> Live Tracking Demo</h3>
            <div className="grid gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <MapContainer center={[criminalProfile.lat, criminalProfile.lng]} zoom={13} className="h-[320px] w-full rounded-xl">
                  <TileLayer
                    attribution='&copy; CARTO'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                  />
                  <Polyline
                    positions={criminalProfile.movementPath.map((p) => [p.lat, p.lng])}
                    color="#3b82f6"
                    weight={4}
                    dashArray="6 6"
                  />
                  <Marker position={[criminalProfile.lat, criminalProfile.lng]} icon={personIcon}>
                    <Popup>{criminalProfile.name} — Last known location</Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div className="space-y-3 text-sm">
                <div className="rounded-xl border border-cv-panel-border/30 bg-black/20 p-3">
                  <p className="text-xs text-slate-500">Latitude</p>
                  <p className="font-mono text-slate-200">{criminalProfile.lat.toFixed(4)}° N</p>
                </div>
                <div className="rounded-xl border border-cv-panel-border/30 bg-black/20 p-3">
                  <p className="text-xs text-slate-500">Longitude</p>
                  <p className="font-mono text-slate-200">{criminalProfile.lng.toFixed(4)}° E</p>
                </div>
                <div className="rounded-xl border border-cv-panel-border/30 bg-black/20 p-3">
                  <p className="text-xs text-slate-500">Signal Source</p>
                  <p className="flex items-center gap-1 text-slate-200"><Phone className="h-3 w-3" /> +91-98XXX-44112</p>
                </div>
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3">
                  <p className="flex items-center gap-1 text-xs font-semibold text-red-400"><AlertTriangle className="h-3.5 w-3.5" /> Movement Detected</p>
                  <p className="mt-1 text-xs text-slate-400">Suspect moved 1.2 km in last 4 hours.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white"><ShieldAlert className="h-5 w-5 text-amber-400" /> Criminal Network</h3>
            <div className="h-[320px] w-full rounded-xl border border-cv-panel-border/30 bg-black/20 p-3">
              <NetworkGraph />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
