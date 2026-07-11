import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface PieChartProps {
  labels: string[];
  data: number[];
}

export default function PieChart({ labels, data }: PieChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(canvasRef.current, {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: [
            '#3b82f6', '#8b5cf6', '#06b6d4', '#f472b6', '#fbbf24', '#34d399', '#f87171', '#a78bfa',
          ],
          borderColor: '#0b1020',
          borderWidth: 2,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
          legend: { position: 'right', labels: { color: '#94a3b8', font: { size: 11 }, boxWidth: 12 } },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, [labels, data]);

  return <canvas ref={canvasRef} className="h-full w-full" />;
}
