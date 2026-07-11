import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Heatmap from './pages/Heatmap';
import Criminals from './pages/Criminals';
import CriminalProfile from './pages/CriminalProfile';
import Reports from './pages/Reports';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/heatmap" element={<Heatmap />} />
        <Route path="/criminals" element={<Criminals />} />
        <Route path="/criminal-profile" element={<CriminalProfile />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </HashRouter>
  );
}
