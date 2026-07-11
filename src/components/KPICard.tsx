import { TrendingUp, TrendingDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface KPICardProps {
  label: string;
  value: number;
  change: string;
  trend: 'up' | 'down';
  isScore?: boolean;
  suffix?: string;
  icon?: React.ReactNode;
  delay?: number;
}

export default function KPICard({ label, value, change, trend, isScore, suffix = '', icon, delay = 0 }: KPICardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 1500;
      const start = performance.now();
      const animate = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(value * eased));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl glass-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold text-white">
            {isScore ? count : count.toLocaleString()}
            {suffix}
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs font-medium">
            {trend === 'up' ? (
              <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-rose-400" />
            )}
            <span className={trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}>{change}</span>
            <span className="text-slate-500">vs last month</span>
          </div>
        </div>
        {icon && <div className="rounded-xl bg-white/5 p-2.5 text-blue-400">{icon}</div>}
      </div>
    </div>
  );
}
