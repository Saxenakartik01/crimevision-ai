import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, BrainCircuit, Map, BarChart3, ArrowRight, Activity, Lock, Radio } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import { dashboardKPIs, alerts, news, aiInsights } from '../data/mockData';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [value]);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const triggers: ScrollTrigger[] = [];
    gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((el) => {
      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => gsap.fromTo(el, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }),
        once: true,
      });
      triggers.push(st);
    });

    gsap.fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.2 });
    gsap.fromTo('.hero-subtitle', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.5 });
    gsap.fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.8 });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden bg-cv-bg text-slate-100">
      <div className="animated-grid absolute inset-0 z-0 opacity-40" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.18),transparent_50%)]" />

      <nav className="relative z-20 flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg shadow-blue-500/30">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">Crime<span className="text-blue-400">Vision</span> AI</span>
        </div>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#dashboard" className="transition hover:text-white">Dashboard</a>
          <a href="#ai" className="transition hover:text-white">AI Engine</a>
          <Link to="/dashboard" className="btn-primary rounded-full px-5 py-2.5 text-white">Launch Dashboard</Link>
        </div>
      </nav>

      <section className="relative z-10 px-6 pb-20 pt-10 md:px-12 md:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div style={{ transform: `translate(${mouse.x * -0.3}px, ${mouse.y * -0.3}px)` }}>
            <div className="hero-subtitle mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300">
              <Radio className="h-3.5 w-3.5 animate-pulse" /> National Police Intelligence Platform
            </div>
            <h1 className="hero-title text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              AI-Powered <br />
              <span className="text-gradient glow-text">Crime Command</span>
            </h1>
            <p className="hero-subtitle mt-6 max-w-lg text-lg leading-relaxed text-slate-400">
              Transform fragmented crime records into actionable intelligence. Predict hotspots, track repeat offenders, and command your force with enterprise-grade AI analytics.
            </p>
            <div className="hero-cta mt-8 flex flex-wrap gap-4">
              <Link to="/dashboard" className="btn-primary flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-white">
                Launch Dashboard <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/analytics" className="rounded-xl border border-cv-panel-border/50 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 backdrop-blur transition hover:bg-white/10">
                View Analytics
              </Link>
            </div>
            <div className="mt-10 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-white"><AnimatedCounter value={12483} /></p>
                <p className="text-xs uppercase tracking-wider text-slate-500">Cases Analyzed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white"><AnimatedCounter value={7842} /></p>
                <p className="text-xs uppercase tracking-wider text-slate-500">Cases Solved</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white"><AnimatedCounter value={92} suffix="%" /></p>
                <p className="text-xs uppercase tracking-wider text-slate-500">Prediction Accuracy</p>
              </div>
            </div>
          </div>

          <div className="relative" style={{ transform: `translate(${mouse.x * 0.2}px, ${mouse.y * 0.2}px)` }}>
            <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />
            <Hero3D />
            <img
              src="/assets/images/hero-banner.jpg"
              alt="AI Command Center"
              className="absolute -bottom-10 -right-10 hidden w-64 rounded-2xl border border-cv-panel-border/40 shadow-2xl shadow-blue-900/30 lg:block floating"
            />
          </div>
        </div>
      </section>

      <section className="gsap-reveal relative z-10 px-6 py-16 md:px-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dashboardKPIs.slice(0, 8).map((kpi, i) => (
            <div key={i} className="glass-card rounded-2xl p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{kpi.label}</p>
              <p className="mt-2 text-3xl font-bold text-white">{kpi.value.toLocaleString()}</p>
              <p className={`mt-1 text-xs font-medium ${kpi.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {kpi.change} vs last month
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="gsap-reveal relative z-10 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Intelligence <span className="text-gradient">Capabilities</span></h2>
          <p className="mt-4 text-slate-400">A full-stack AI platform designed for national law enforcement agencies.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Map, title: 'Crime Heatmap', desc: 'Interactive India & UP maps with glowing hotspots and AI recommendations.' },
            { icon: BrainCircuit, title: 'Pattern Detection', desc: 'Neural networks uncover repeat offender patterns and crime clusters.' },
            { icon: BarChart3, title: 'Predictive Analytics', desc: 'Forecast incidents, risk scores, and resource allocation needs.' },
            { icon: Activity, title: 'Live Tracking', desc: 'Simulated GPS tracking of high-risk suspects with movement paths.' },
            { icon: Lock, title: 'Criminal Network', desc: 'Visualize gang relationships, contacts, and vehicle ownership graphs.' },
            { icon: Shield, title: 'Enterprise Reports', desc: 'Generate district, monthly, yearly, and officer-level reports.' },
          ].map((f, i) => (
            <div key={i} className="gsap-reveal group rounded-2xl glass-card p-6 transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ai" className="gsap-reveal relative z-10 px-6 py-16 md:px-12">
        <div className="rounded-3xl border border-cv-panel-border/40 bg-gradient-to-br from-blue-900/20 to-violet-900/20 p-8 md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">AI Insights <span className="text-gradient">Engine</span></h2>
              <p className="mt-4 text-slate-400">Natural-language summaries and smart recommendations generated in real-time from your data.</p>
              <div className="mt-6 space-y-3">
                {aiInsights.slice(0, 4).map((insight, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-cv-panel-border/30 bg-black/20 p-3">
                    <BrainCircuit className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-400" />
                    <p className="text-sm text-slate-300">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/assets/images/ai-risk.jpg" alt="AI Risk Analysis" className="rounded-2xl border border-cv-panel-border/40 shadow-2xl" />
              <div className="absolute -bottom-4 -left-4 rounded-xl glass-card p-4">
                <p className="text-xs uppercase tracking-wider text-slate-500">Prediction Accuracy</p>
                <p className="text-2xl font-bold text-white">92.4%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gsap-reveal relative z-10 px-6 py-16 md:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white"><Activity className="h-5 w-5 text-red-400" /> Latest Alerts</h3>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between rounded-xl border border-cv-panel-border/30 bg-black/20 p-3">
                  <div>
                    <p className="text-sm font-medium text-slate-200">{alert.message}</p>
                    <p className="text-xs text-slate-500">{alert.area} • {alert.time}</p>
                  </div>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${alert.type === 'Critical' ? 'bg-red-500/15 text-red-400' : alert.type === 'Warning' ? 'bg-amber-500/15 text-amber-400' : 'bg-blue-500/15 text-blue-400'}`}>{alert.type}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white"><Radio className="h-5 w-5 text-blue-400" /> AI News Feed</h3>
            <div className="space-y-3">
              {news.map((n, i) => (
                <div key={i} className="rounded-xl border border-cv-panel-border/30 bg-black/20 p-3 text-sm text-slate-300 transition hover:bg-white/5">
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-cv-panel-border/30 px-6 py-8 text-center text-xs text-slate-500 md:px-12">
        <p>CrimeVision AI — Frontend Prototype for Hackathon Demonstration. All data is simulated.</p>
        <p className="mt-2">Built with React, Vite, Tailwind, Three.js, Chart.js & GSAP.</p>
      </footer>
    </div>
  );
}
