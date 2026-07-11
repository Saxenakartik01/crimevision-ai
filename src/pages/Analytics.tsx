import PageLayout from '../components/PageLayout';
import BarChart from '../components/charts/BarChart';
import RadarChart from '../components/charts/RadarChart';
import LineChart from '../components/charts/LineChart';
import PieChart from '../components/charts/PieChart';
import { monthlyCrimeData, crimeDistributionData, cityComparisonData, radarData } from '../data/mockData';

export default function Analytics() {
  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Crime <span className="text-gradient">Analytics</span></h1>
        <p className="text-sm text-slate-400">Deep-dive statistical analysis and predictive indicators</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-2xl p-5">
          <h3 className="mb-4 text-lg font-bold text-white">Monthly Crime vs Solved Cases</h3>
          <div className="chart-container">
            <LineChart labels={monthlyCrimeData.labels} datasets={monthlyCrimeData.datasets} />
          </div>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="mb-4 text-lg font-bold text-white">Crime Distribution by Type</h3>
          <div className="chart-container">
            <PieChart labels={crimeDistributionData.labels} data={crimeDistributionData.data} />
          </div>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="mb-4 text-lg font-bold text-white">City Risk Comparison</h3>
          <div className="chart-container">
            <BarChart labels={cityComparisonData.labels} data={cityComparisonData.data} label="Risk Score" />
          </div>
        </div>
        <div className="glass-card rounded-2xl p-5">
          <h3 className="mb-4 text-lg font-bold text-white">Police Capability Radar</h3>
          <div className="chart-container">
            <RadarChart labels={radarData.labels} data={radarData.data} />
          </div>
        </div>
      </div>

      <div className="mt-6 glass-card rounded-2xl p-6">
        <h3 className="mb-4 text-lg font-bold text-white">AI Prediction Summary</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-cv-panel-border/30 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">Next 7 Days Prediction</p>
            <p className="mt-2 text-2xl font-bold text-white">+14.2%</p>
            <p className="text-xs text-slate-400">Incident probability in Delhi NCR</p>
          </div>
          <div className="rounded-xl border border-cv-panel-border/30 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">Hotspot Confidence</p>
            <p className="mt-2 text-2xl font-bold text-white">91.7%</p>
            <p className="text-xs text-slate-400">For Noida Metro corridor</p>
          </div>
          <div className="rounded-xl border border-cv-panel-border/30 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-500">Repeat Offender Risk</p>
            <p className="mt-2 text-2xl font-bold text-white">High</p>
            <p className="text-xs text-slate-400">23 active persons of interest</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
