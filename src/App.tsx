import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import EducationModules from './components/EducationModules';
import RegionalAlerts from './components/RegionalAlerts';
import VirtualDrills from './components/VirtualDrills';
import SafetyGames from './components/SafetyGames';
import EmergencyContacts from './components/EmergencyContacts';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'modules':
        return <EducationModules />;
      case 'alerts':
        return <RegionalAlerts />;
      case 'drills':
        return <VirtualDrills />;
      case 'games':
        return <SafetyGames />;
      case 'contacts':
        return <EmergencyContacts />;
      case 'dashboard':
        return <AdminDashboard />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderActiveSection()}
    </div>
  );
}

export default App;