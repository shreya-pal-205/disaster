import React, { useState } from 'react';
import { Play, Camera, Smartphone, Users, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const VirtualDrills = () => {
  const [selectedDrill, setSelectedDrill] = useState(null);
  const [isARActive, setIsARActive] = useState(false);

  const drills = [
    {
      id: 1,
      title: 'Earthquake Drop, Cover, Hold',
      description: 'Practice the essential earthquake safety technique using WebAR',
      duration: '10 mins',
      difficulty: 'Beginner',
      participants: 2500,
      type: 'Earthquake',
      arFeatures: ['3D Environment', 'Motion Tracking', 'Real-time Feedback'],
      steps: [
        'Position yourself in a safe location',
        'Drop to hands and knees',
        'Take cover under desk/table',
        'Hold on and protect head/neck',
        'Wait for shaking to stop'
      ],
      color: 'bg-red-500'
    },
    {
      id: 2,
      title: 'Fire Evacuation Drill',
      description: 'Navigate through smoke-filled corridors using AR guidance',
      duration: '15 mins',
      difficulty: 'Intermediate',
      participants: 1800,
      type: 'Fire',
      arFeatures: ['Smoke Simulation', 'Exit Route Guidance', 'Heat Detection'],
      steps: [
        'Activate fire alarm',
        'Check door temperature',
        'Stay low to avoid smoke',
        'Follow exit signs',
        'Proceed to assembly point'
      ],
      color: 'bg-orange-400'
    },
    {
      id: 3,
      title: 'Flood Evacuation Training',
      description: 'Learn water safety and evacuation procedures with AR simulation',
      duration: '12 mins',
      difficulty: 'Intermediate',
      participants: 1200,
      type: 'Flood',
      arFeatures: ['Water Level Simulation', 'Current Visualization', 'Safe Route Planning'],
      steps: [
        'Assess water depth',
        'Identify safe routes',
        'Move to higher ground',
        'Avoid electrical hazards',
        'Signal for help if needed'
      ],
      color: 'bg-blue-500'
    },
    {
      id: 4,
      title: 'Cyclone Shelter Drill',
      description: 'Practice taking shelter during high winds with AR wind simulation',
      duration: '8 mins',
      difficulty: 'Beginner',
      participants: 900,
      type: 'Cyclone',
      arFeatures: ['Wind Visualization', 'Debris Simulation', 'Shelter Assessment'],
      steps: [
        'Monitor weather alerts',
        'Secure loose objects',
        'Move to interior room',
        'Stay away from windows',
        'Wait for all-clear signal'
      ],
      color: 'bg-purple-500'
    }
  ];

  const startARDrill = (drill) => {
    setSelectedDrill(drill);
    setIsARActive(true);
  };

  const stopARDrill = () => {
    setIsARActive(false);
    setSelectedDrill(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Virtual Disaster Drills</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience realistic disaster scenarios through cutting-edge WebAR technology. 
            Practice emergency procedures in a safe, controlled virtual environment.
          </p>
        </div>

        {/* AR Technology Info */}
        <div className="bg-black text-white rounded-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Camera className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">WebAR Technology</h3>
              <p className="text-gray-300">No app download required. Use your device's camera for immersive AR experience.</p>
            </div>
            <div className="text-center">
              <Smartphone className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Cross-Platform</h3>
              <p className="text-gray-300">Works on smartphones, tablets, and computers with camera access.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Multi-User Support</h3>
              <p className="text-gray-300">Practice drills individually or with your entire class simultaneously.</p>
            </div>
          </div>
        </div>

        {/* Drill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {drills.map((drill) => (
            <div key={drill.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`${drill.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${drill.color} p-2 rounded-lg`}>
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    drill.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {drill.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-black mb-3">{drill.title}</h3>
                <p className="text-gray-600 mb-4">{drill.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {drill.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {drill.participants} completed
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-black mb-2">AR Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {drill.arFeatures.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-md">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => startARDrill(drill)}
                    className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
                  >
                    <Camera className="h-4 w-4 mr-2" />
                    Start AR Drill
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AR Drill Interface Popup */}
        {isARActive && selectedDrill && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-black">AR Drill: {selectedDrill.title}</h2>
                  <button 
                    onClick={stopARDrill}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    End Drill
                  </button>
                </div>

                {/* Embedded MyWebAR 3D AR Scene */}
                <div className="bg-gray-900 rounded-lg overflow-hidden mb-6">
                  <iframe
                    src="https://mywebar.com/p/Project_1_67rth7nydh"
                    title="MyWebAR Drill"
                    className="w-full h-[500px] border-0"
                    allow="camera; microphone; gyroscope; accelerometer; fullscreen"
                  />
                </div>

                {/* Drill Steps & AR Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-black mb-4">Drill Steps:</h3>
                    <div className="space-y-3">
                      {selectedDrill.steps.map((step, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="bg-orange-400 text-black w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-black mb-4">AR Features Active:</h3>
                    <div className="space-y-3">
                      {selectedDrill.arFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                    <span className="text-yellow-800 font-semibold">Safety Note:</span>
                  </div>
                  <p className="text-yellow-700 mt-1">
                    This is a virtual drill for training purposes. In a real emergency, follow your institution's official emergency procedures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Tutorials Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-6">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {drills.slice(0, 3).map((drill) => (
              <div key={drill.id} className="bg-gray-100 rounded-lg overflow-hidden">
                <div className="bg-gray-300 h-32 flex items-center justify-center">
                  <Play className="h-12 w-12 text-gray-600" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-black mb-2">{drill.title} Tutorial</h3>
                  <p className="text-sm text-gray-600 mb-3">Learn the basics before starting the AR drill</p>
                  <button className="w-full bg-orange-400 text-black px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors">
                    Watch Tutorial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualDrills;
