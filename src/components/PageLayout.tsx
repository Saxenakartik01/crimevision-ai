import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ParticleBackground from './ParticleBackground';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-cv-bg text-slate-100">
      <ParticleBackground />
      <div className="animated-grid fixed inset-0 z-0 opacity-30" />
      <Sidebar />
      <Navbar />
      <main className="relative z-10 min-h-screen pt-24 pb-10 md:pl-64 md:pt-24">
        <div className="page-transition px-4 md:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
