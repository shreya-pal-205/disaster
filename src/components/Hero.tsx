import React from 'react';
import { Shield, AlertTriangle, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-full">
              <Shield className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Building Safer Schools
            <span className="text-blue-600"> Across India</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering educational institutions with comprehensive disaster preparedness education 
            through interactive digital tools and localized training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Watch Demo
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <AlertTriangle className="h-8 w-8 text-orange-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Crisis Ready</h3>
              <p className="text-gray-600">Prepare for earthquakes, floods, and fires with region-specific protocols</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-8 w-8 text-green-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Impact</h3>
              <p className="text-gray-600">Training millions of students and staff across Indian institutions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="h-8 w-8 text-purple-500 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Learning</h3>
              <p className="text-gray-600">Gamified modules and virtual drills for engaging education</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;