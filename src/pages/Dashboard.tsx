import { useEffect, useRef, useState } from 'react';
import { Activity, Bike, Smartphone, AlertTriangle, Laptop, CreditCard, Car, UserX, ShieldAlert, CheckCircle2, Clock, Gauge, TrendingUp, BrainCircuit, MapPin } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import KPICard from '../components/KPICard';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';
import { dashboardKPIs, monthlyCrimeData, crimeDistributionData, aiInsights, alerts } from '../data/mockData';

const icons = [Activity, Bike, Smartphone, AlertTriangle, Laptop, CreditCard, Car, UserX, ShieldAlert, CheckCircle2, Clock, Gauge, TrendingUp, TrendingUp];

export default function Dashboard() {
  const [currentInsight, setCurrentInsight] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentInsight((prev) => (prev + 1) % aiInsights.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentInsight]);

  return (
    <PageLayout>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Command <span className="text-gradient">Dashboard</span></h1>
          <p className="text-sm text-slate-400">Real-time intelligence overview • Last updated 2 minutes ago</p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-xl border border-cv-panel-border/40 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10">Export PDF</button>
          <button className="btn-primary rounded-xl px-4 py-2 text-sm font-semibold text-white">Refresh Data</button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {dashboardKPIs.map((kpi, i) => (
          <KPICard key={i} label={kpi.label} value={kpi.value} change={kpi.change} trend={kpi.trend as 'up' | 'down'} isScore={kpi.isScore} suffix={kpi.suffix} icon={<span className="scale-90">{(() => {
            const Icon = icons[i] || Activity;
            return <Icon className="h-5 w-5" />;
          })()}</span>} delay={i * 80} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 glass-card rounded-2xl p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Monthly Crime Trends</h3>
            <span className="rounded-full bg-blue-500/15 px-2.5 py-1 text-xs font-semibold text-blue-400">2024 YTD</span>
          </div>
          <div className="chart-container">
            <LineChart labels={monthlyCrimeData.labels} datasets={monthlyCrimeData.datasets} />
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5">
          <h3 className="mb-4 text-lg font-bold text-white">Crime Distribution</h3>
          <div className="chart-container">
            <PieChart labels={crimeDistributionData.labels} data={crimeDistributionData.data} />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="glass-card rounded-2xl p-5 lg:col-span-2">
          <div className="mb-4 flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-violet-400" />
            <h3 className="text-lg font-bold text-white">AI Insights Engine</h3>
          </div>
          <div className="relative min-h-[180px] overflow-hidden rounded-xl border border-cv-panel-border/30 bg-black/20 p-5">
            <div ref={scrollRef} className="absolute inset-0 p-5">
              <p className="text-xl font-medium leading-relaxed text-slate-200 transition-all duration-500">
                “{aiInsights[currentInsight]}”
              </p>
              <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">Insight {currentInsight + 1} of {aiInsights.length}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300"
                style={{ width: `${((currentInsight + 1) / aiInsights.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-5">
          <div className="mb-4 flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-400" />
            <h3 className="text-lg font-bold text-white">Live Alerts</h3>
          </div>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start gap-3 rounded-xl border border-cv-panel-border/30 bg-black/20 p-3 transition hover:bg-white/5">
                <span className={`mt-0.5 h-2 w-2 flex-shrink-0 rounded-full ${alert.type === 'Critical' ? 'bg-red-500 shadow-[0_0_8px_#ef4444]' : alert.type === 'Warning' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                <div>
                  <p className="text-sm font-medium text-slate-200">{alert.message}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><MapPin className="h-3 w-3" /> {alert.area} • {alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
