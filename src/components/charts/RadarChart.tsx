import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface RadarChartProps {
  labels: string[];
  data: number[];
}

export default function RadarChart({ labels, data }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: 'radar',
      data: {
        labels,
        datasets: [{
          label: 'Performance',
          data,
          backgroundColor: 'rgba(139, 92, 246, 0.25)',
          borderColor: '#8b5cf6',
          pointBackgroundColor: '#3b82f6',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#8b5cf6',
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          r: {
            angleLines: { color: 'rgba(99,102,241,0.15)' },
            grid: { color: 'rgba(99,102,241,0.12)' },
            pointLabels: { color: '#94a3b8', font: { size: 11 } },
            ticks: { display: false, backdropColor: 'transparent' },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, [labels, data]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
