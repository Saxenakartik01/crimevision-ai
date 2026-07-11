import { useState } from 'react';
import { FileText, Download, Calendar, Building2, User, BarChart3, Shield } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import { officers } from '../data/mockData';

const reportTypes = [
  { id: 'crime', title: 'Crime Report', icon: FileText, desc: 'Comprehensive crime incident report across all districts.' },
  { id: 'district', title: 'District Report', icon: Building2, desc: 'District-wise crime statistics and trend analysis.' },
  { id: 'monthly', title: 'Monthly Report', icon: Calendar, desc: 'Month-over-month crime comparison and KPI summary.' },
  { id: 'yearly', title: 'Yearly Report', icon: BarChart3, desc: 'Annual crime review and predictive forecasting.' },
  { id: 'officer', title: 'Officer Report', icon: User, desc: 'Case-load and performance summary by officer.' },
];

export default function Reports() {
  const [active, setActive] = useState('crime');

  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Intelligence <span className="text-gradient">Reports</span></h1>
        <p className="text-sm text-slate-400">Generate and export police intelligence documents</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-1">
          {reportTypes.map((r) => (
            <button
              key={r.id}
              onClick={() => setActive(r.id)}
              className={`flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition ${
                active === r.id
                  ? 'border-blue-500/50 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                  : 'border-cv-panel-border/30 bg-black/20 hover:bg-white/5'
              }`}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-400">
                <r.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">{r.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{r.desc}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-6 lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">{reportTypes.find((r) => r.id === active)?.title}</h2>
              <p className="text-xs text-slate-500">Generated on {new Date().toLocaleDateString()} • Demo Only</p>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-xl bg-red-500/15 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/25">
                <Download className="h-4 w-4" /> PDF
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-emerald-500/15 px-4 py-2 text-sm font-semibold text-emerald-400 transition hover:bg-emerald-500/25">
                <Download className="h-4 w-4" /> CSV
              </button>
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-cv-panel-border/30 bg-black/20 p-5">
            <div className="flex items-center gap-3 border-b border-cv-panel-border/30 pb-4">
              <Shield className="h-8 w-8 text-blue-400" />
              <div>
                <p className="font-bold text-white">CrimeVision AI — {reportTypes.find((r) => r.id === active)?.title}</p>
                <p className="text-xs text-slate-500">National Police Intelligence Platform • Classification: Internal Use</p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-cv-panel-border/30 bg-black/20 p-3">
                <p className="text-xs text-slate-500">Total Cases</p>
                <p className="text-xl font-bold text-white">12,483</p>
              </div>
              <div className="rounded-lg border border-cv-panel-border/30 bg-black/20 p-3">
                <p className="text-xs text-slate-500">Solved Cases</p>
                <p className="text-xl font-bold text-emerald-400">7,842</p>
              </div>
              <div className="rounded-lg border border-cv-panel-border/30 bg-black/20 p-3">
                <p className="text-xs text-slate-500">Pending Cases</p>
                <p className="text-xl font-bold text-amber-400">4,641</p>
              </div>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-bold text-slate-200">Key Findings</h4>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-400">
                <li>Cyber crime reports increased by 28.6% month-over-month, primarily UPI and OTP fraud.</li>
                <li>Delhi remains the highest-risk district with a risk score of 86/100.</li>
                <li>Vehicle theft cases show 14.2% upward trend in NCR industrial belt.</li>
                <li>Repeat offender flagged in 14 active robbery cases across Agra.</li>
                <li>AI recommends 18% additional weekend patrol staffing in hotspot zones.</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-bold text-slate-200">Officer Summary</h4>
              <div className="space-y-2">
                {officers.map((o, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border border-cv-panel-border/30 bg-black/20 p-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-xs font-bold text-white">
                        {o.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-slate-200">{o.name}</p>
                        <p className="text-xs text-slate-500">{o.role} • {o.station}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-blue-300">{o.cases} cases</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-dashed border-cv-panel-border/40 bg-black/10 p-4 text-center text-xs text-slate-500">
              This is a demo export. In production, CrimeVision AI generates authenticated PDF/CSV documents with digital signatures and audit trails.
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
