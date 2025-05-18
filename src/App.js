import './App.css';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients/Patients';
import Appointments from './components/Appointments/Appointments';
import Campaigns from './components/Campaigns';
import Reports from './components/Reports';
import Settings from './components/Settings';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App nature-bg">
        <header className="App-header">
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
