import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PageLayout from '../components/PageLayout';
import { cityData } from '../data/mockData';
import { MapPin, TrendingUp, ShieldAlert, BrainCircuit } from 'lucide-react';

function getMarkerColor(risk: number) {
  if (risk >= 80) return '#ef4444';
  if (risk >= 65) return '#f59e0b';
  return '#3b82f6';
}

function createPulsingIcon(risk: number) {
  const color = getMarkerColor(risk);
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="position:relative;width:28px;height:28px;">
        <span style="position:absolute;inset:0;border-radius:50%;background:${color};opacity:0.35;animation:markerPulse 1.8s ease-out infinite;"></span>
        <span style="position:absolute;inset:4px;border-radius:50%;background:${color};box-shadow:0 0 12px ${color};border:2px solid white;"></span>
      </div>
    `,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

function MapController({ center }: { center: [number, number] }) {
  const map = useMap();
  map.flyTo(center, 10, { duration: 1.2 });
  return null;
}

export default function Heatmap() {
  const [selected, setSelected] = useState(cityData[0]);
  const [center, setCenter] = useState<[number, number]>([cityData[0].lat, cityData[0].lng]);

  const handleCityClick = (city: typeof cityData[0]) => {
    setSelected(city);
    setCenter([city.lat, city.lng]);
  };

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Crime <span className="text-gradient">Heatmap</span></h1>
        <p className="text-sm text-slate-400">Interactive intelligence map with AI hotspot detection</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-card rounded-2xl p-1 lg:col-span-2">
          <MapContainer center={[26.8467, 80.9462]} zoom={6} className="h-[520px] w-full rounded-xl" style={{ background: '#0b1020' }}>
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <MapController center={center} />
            {cityData.map((city) => (
              <Marker
                key={city.name}
                position={[city.lat, city.lng]}
                icon={createPulsingIcon(city.risk)}
                eventHandlers={{ click: () => handleCityClick(city) }}
              >
                <Popup className="!bg-[#0b1020] !text-slate-100">
                  <div className="min-w-[200px]">
                    <h4 className="font-bold text-slate-900">{city.name}</h4>
                    <p className="text-sm text-slate-800">Risk Score: {city.risk}/100</p>
                    <p className="text-sm text-slate-800">Total FIR: {city.crimes}</p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        <div className="space-y-4">
          <div className="glass-card rounded-2xl p-5">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white">City Intelligence</h3>
            </div>
            <div className="space-y-2">
              {cityData.map((city) => (
                <button
                  key={city.name}
                  onClick={() => handleCityClick(city)}
                  className={`flex w-full items-center justify-between rounded-xl border p-3 text-left transition ${
                    selected.name === city.name
                      ? 'border-blue-500/50 bg-blue-500/10'
                      : 'border-cv-panel-border/30 bg-black/20 hover:bg-white/5'
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{city.name}</p>
                    <p className="text-xs text-slate-500">{city.crimes.toLocaleString()} FIRs</p>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${city.risk >= 80 ? 'bg-red-500/15 text-red-400' : city.risk >= 65 ? 'bg-amber-500/15 text-amber-400' : 'bg-blue-500/15 text-blue-400'}`}>
                    {city.risk}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <div className="mb-4 flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 text-red-400" />
              <h3 className="text-lg font-bold text-white">{selected.name} Details</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-cv-panel-border/30 bg-black/20 p-3">
                <p className="text-xs text-slate-500">Total FIR</p>
                <p className="font-bold text-white">{selected.crimes.toLocaleString()}</p>
              </div>
              <div className="rounded-lg border border-cv-panel-border/30 bg-black/20 p-3">
                <p className="text-xs text-slate-500">Solved</p>
                <p className="font-bold text-emerald-400">{selected.solved.toLocaleString()}</p>
              </div>
              <div className="rounded-lg border border-cv-panel-border/30 bg-black/20 p-3">
                <p className="text-xs text-slate-500">Pending</p>
                <p className="font-bold text-amber-400">{selected.pending.toLocaleString()}</p>
              </div>
              <div className="rounded-lg border border-cv-panel-border/30 bg-black/20 p-3">
                <p className="text-xs text-slate-500">Risk Score</p>
                <p className={`font-bold ${selected.risk >= 80 ? 'text-red-400' : selected.risk >= 65 ? 'text-amber-400' : 'text-blue-400'}`}>{selected.risk}/100</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex justify-between text-slate-300"><span>Bike Theft</span> <span className="text-white">{selected.breakdown.bikeTheft}</span></p>
              <p className="flex justify-between text-slate-300"><span>Phone Snatching</span> <span className="text-white">{selected.breakdown.phoneSnatching}</span></p>
              <p className="flex justify-between text-slate-300"><span>Robbery</span> <span className="text-white">{selected.breakdown.robbery}</span></p>
              <p className="flex justify-between text-slate-300"><span>Cyber Crime</span> <span className="text-white">{selected.breakdown.cyberCrime}</span></p>
              <p className="flex justify-between text-slate-300"><span>Fraud</span> <span className="text-white">{selected.breakdown.fraud}</span></p>
              <p className="flex justify-between text-slate-300"><span>Vehicle Theft</span> <span className="text-white">{selected.breakdown.vehicleTheft}</span></p>
            </div>
            <div className="mt-4 rounded-xl border border-cv-panel-border/30 bg-violet-500/10 p-3">
              <div className="mb-1 flex items-center gap-2">
                <BrainCircuit className="h-4 w-4 text-violet-400" />
                <span className="text-xs font-semibold text-violet-300">AI Recommendation</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-300">{selected.recommendation}</p>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
              <TrendingUp className="h-3.5 w-3.5" /> Trend: <span className={selected.trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}>{selected.trend}</span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
