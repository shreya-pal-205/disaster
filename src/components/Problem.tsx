import React from 'react';
import { AlertCircle, FileX, MapPin, Calendar } from 'lucide-react';

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Critical Challenge We Face
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indian educational institutions are largely unprepared for natural disasters, 
            putting millions of students and staff at risk during emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-red-50 p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Reality</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FileX className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Paper-Only Guidelines</h4>
                    <p className="text-gray-600">Emergency protocols exist on paper but lack structured implementation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">No Localized Awareness</h4>
                    <p className="text-gray-600">Students unaware of region-specific disaster response protocols</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Infrequent Drills</h4>
                    <p className="text-gray-600">Manual drills are rare and poorly coordinated when they occur</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-2xl">
            <AlertCircle className="h-12 w-12 text-red-600 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Consequences</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Panic and chaos during actual emergencies
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Potentially fatal outcomes due to lack of preparedness
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Inadequate response to region-specific disasters
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                Missed opportunity to build a disaster-resilient society
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;