import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface LineChartProps {
  labels: string[];
  datasets: { label: string; data: number[]; color?: string }[];
}

export default function LineChart({ labels, datasets }: LineChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const gradients = datasets.map((ds, i) => {
      const gradient = ctx.createLinearGradient(0, 0, 0, 260);
      const color = ds.color || (i === 0 ? '#3b82f6' : '#8b5cf6');
      gradient.addColorStop(0, `${color}50`);
      gradient.addColorStop(1, `${color}05`);
      return gradient;
    });

    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: datasets.map((ds, i) => ({
          label: ds.label,
          data: ds.data,
          borderColor: ds.color || (i === 0 ? '#3b82f6' : '#8b5cf6'),
          backgroundColor: gradients[i],
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          pointBackgroundColor: '#0b1020',
          pointBorderColor: ds.color || (i === 0 ? '#3b82f6' : '#8b5cf6'),
          pointBorderWidth: 2,
          pointRadius: 3,
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#94a3b8', font: { size: 11 } } },
        },
        scales: {
          x: { grid: { color: 'rgba(99,102,241,0.08)' }, ticks: { color: '#64748b', font: { size: 11 } } },
          y: { grid: { color: 'rgba(99,102,241,0.08)' }, ticks: { color: '#64748b', font: { size: 11 } } },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, [labels, datasets]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
