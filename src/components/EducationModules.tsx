import React, { useState } from 'react';
import { BookOpen, Play, CheckCircle, Clock, Users, AlertTriangle } from 'lucide-react';

const EducationModules = () => {
  const [selectedModule, setSelectedModule] = useState(null);

  const modules = [
    {
      id: 1,
      title: 'Earthquake Safety Fundamentals',
      description: 'Learn essential earthquake preparedness and response techniques',
      duration: '45 mins',
      level: 'Beginner',
      participants: 1250,
      topics: ['Drop, Cover, Hold', 'Building Safety', 'Evacuation Routes', 'Post-Earthquake Actions'],
      color: 'bg-red-500'
    },
    {
      id: 2,
      title: 'Flood Emergency Response',
      description: 'Comprehensive flood safety and evacuation procedures',
      duration: '35 mins',
      level: 'Intermediate',
      participants: 890,
      topics: ['Water Safety', 'Evacuation Planning', 'Emergency Supplies', 'Communication'],
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Fire Safety & Prevention',
      description: 'Fire prevention, detection, and emergency evacuation',
      duration: '40 mins',
      level: 'Beginner',
      participants: 2100,
      topics: ['Fire Triangle', 'Extinguisher Types', 'Evacuation Routes', 'Smoke Safety'],
      color: 'bg-orange-400'
    },
    {
      id: 4,
      title: 'Cyclone Preparedness',
      description: 'Coastal region cyclone safety and preparation',
      duration: '50 mins',
      level: 'Advanced',
      participants: 650,
      topics: ['Weather Monitoring', 'Shelter Preparation', 'Emergency Kits', 'Recovery'],
      color: 'bg-purple-500'
    },
    {
      id: 5,
      title: 'First Aid Basics',
      description: 'Essential first aid skills for emergency situations',
      duration: '60 mins',
      level: 'Beginner',
      participants: 1800,
      topics: ['CPR Basics', 'Wound Care', 'Shock Treatment', 'Emergency Calling'],
      color: 'bg-green-500'
    },
    {
      id: 6,
      title: 'School Emergency Planning',
      description: 'Comprehensive school-wide emergency response planning',
      duration: '75 mins',
      level: 'Advanced',
      participants: 420,
      topics: ['Risk Assessment', 'Communication Plans', 'Evacuation Procedures', 'Recovery'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Disaster Education Modules</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive interactive learning modules covering all aspects of disaster preparedness and emergency response.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div key={module.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className={`${module.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="h-8 w-8 text-gray-600" />
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    module.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    module.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {module.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-3">{module.title}</h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {module.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {module.participants} enrolled
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-black mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button 
                    className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
                    onClick={() => setSelectedModule(module)}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Start Module
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Module Detail Modal */}
        {selectedModule && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-black">{selectedModule.title}</h2>
                  <button 
                    onClick={() => setSelectedModule(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="mb-6">
                  <div className="bg-gray-100 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-black mb-2">Module Overview</h3>
                    <p className="text-gray-600">{selectedModule.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-semibold text-black">{selectedModule.duration}</div>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="text-sm text-gray-600">Level</div>
                      <div className="font-semibold text-black">{selectedModule.level}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Learning Objectives:</h4>
                    <ul className="space-y-2">
                      {selectedModule.topics.map((topic, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors">
                    Begin Learning
                  </button>
                  <button 
                    onClick={() => setSelectedModule(null)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationModules;