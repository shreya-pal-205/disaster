import React, { useState } from 'react';
import { AlertTriangle, MapPin, Clock, Bell, Thermometer, Cloud, Zap } from 'lucide-react';

const RegionalAlerts = () => {
  const [selectedRegion, setSelectedRegion] = useState('Delhi');

  const regions = [
    'Delhi', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore', 'Hyderabad', 
    'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kochi', 'Guwahati'
  ];

  const alerts = {
    'Delhi': [
      {
        id: 1,
        type: 'Heat Wave',
        severity: 'High',
        icon: Thermometer,
        color: 'bg-red-500',
        message: 'Extreme heat wave conditions expected. Temperature may reach 47°C.',
        time: '2 hours ago',
        actions: ['Stay indoors during peak hours', 'Increase water intake', 'Avoid outdoor activities']
      },
      {
        id: 2,
        type: 'Air Quality',
        severity: 'Moderate',
        icon: Cloud,
        color: 'bg-yellow-500',
        message: 'Air quality index at 180. Sensitive groups should limit outdoor exposure.',
        time: '4 hours ago',
        actions: ['Use air purifiers', 'Wear N95 masks outdoors', 'Keep windows closed']
      }
    ],
    'Mumbai': [
      {
        id: 3,
        type: 'Heavy Rainfall',
        severity: 'High',
        icon: Cloud,
        color: 'bg-blue-500',
        message: 'Heavy to very heavy rainfall expected in next 24 hours.',
        time: '1 hour ago',
        actions: ['Avoid waterlogged areas', 'Keep emergency supplies ready', 'Monitor weather updates']
      },
      {
        id: 4,
        type: 'Flood Warning',
        severity: 'Critical',
        icon: AlertTriangle,
        color: 'bg-red-600',
        message: 'Flood warning issued for low-lying areas. Immediate evacuation advised.',
        time: '30 minutes ago',
        actions: ['Evacuate to higher ground', 'Contact emergency services', 'Follow official instructions']
      }
    ],
    'Chennai': [
      {
        id: 5,
        type: 'Cyclone Alert',
        severity: 'High',
        icon: Zap,
        color: 'bg-purple-500',
        message: 'Cyclone approaching coast. Wind speeds up to 120 km/h expected.',
        time: '3 hours ago',
        actions: ['Secure loose objects', 'Stock emergency supplies', 'Stay away from windows']
      }
    ]
  };

  const currentAlerts = alerts[selectedRegion] || [];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'text-red-600 bg-red-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-green-600 bg-green-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Regional Disaster Alerts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time disaster alerts and safety information specific to your region. 
            Stay informed and prepared with localized emergency updates.
          </p>
        </div>

        {/* Region Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-black mb-4 flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-orange-400" />
            Select Your Region
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedRegion === region
                    ? 'bg-orange-400 text-black'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Current Alerts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
            <Bell className="h-6 w-6 mr-2 text-red-500" />
            Active Alerts for {selectedRegion}
          </h2>
          
          {currentAlerts.length > 0 ? (
            <div className="space-y-4">
              {currentAlerts.map((alert) => {
                const IconComponent = alert.icon;
                return (
                  <div key={alert.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className={`${alert.color} h-1`}></div>
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`${alert.color} p-2 rounded-lg mr-4`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-black">{alert.type}</h3>
                            <div className="flex items-center mt-1">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getSeverityColor(alert.severity)}`}>
                                {alert.severity}
                              </span>
                              <div className="flex items-center ml-3 text-sm text-gray-500">
                                <Clock className="h-4 w-4 mr-1" />
                                {alert.time}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4 text-lg">{alert.message}</p>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-black mb-2">Recommended Actions:</h4>
                        <ul className="space-y-1">
                          {alert.actions.map((action, index) => (
                            <li key={index} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                              {action}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Bell className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">No Active Alerts</h3>
              <p className="text-gray-600">There are currently no disaster alerts for {selectedRegion}. Stay prepared!</p>
            </div>
          )}
        </div>

        {/* Emergency Preparedness Tips */}
        <div className="bg-black text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Emergency Preparedness Tips for {selectedRegion}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-400 mb-2">Before Disaster</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Create emergency plan</li>
                <li>• Prepare emergency kit</li>
                <li>• Know evacuation routes</li>
                <li>• Stay informed</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-red-400 mb-2">During Disaster</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Stay calm and alert</li>
                <li>• Follow official instructions</li>
                <li>• Use emergency contacts</li>
                <li>• Avoid dangerous areas</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-500 mb-2">After Disaster</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Check for injuries</li>
                <li>• Assess damage safely</li>
                <li>• Contact family/friends</li>
                <li>• Follow recovery guidelines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalAlerts;