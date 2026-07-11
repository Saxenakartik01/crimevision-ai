import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface BarChartProps {
  labels: string[];
  data: number[];
  label?: string;
}

export default function BarChart({ labels, data, label = 'Value' }: BarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, 260);
    gradient.addColorStop(0, '#8b5cf6');
    gradient.addColorStop(1, '#3b82f6');

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label,
          data,
          backgroundColor: gradient,
          borderRadius: 6,
          borderSkipped: false,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: { grid: { display: false }, ticks: { color: '#64748b', font: { size: 11 } } },
          y: { grid: { color: 'rgba(99,102,241,0.08)' }, ticks: { color: '#64748b', font: { size: 11 } } },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, [labels, data, label]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
