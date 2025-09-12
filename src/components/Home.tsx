import React from 'react';
import { Shield, AlertTriangle, Users, BookOpen, Zap, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-red-500 p-4 rounded-full">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Disaster-Ready
              <span className="text-orange-400"> Schools</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital platform for disaster preparedness education using cutting-edge 
              WebAR technology, interactive modules, and real-time safety training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors shadow-lg">
                Start Learning
              </button>
              <button className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-400 hover:text-black transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              The Critical Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Indian educational institutions face significant gaps in disaster preparedness, 
              putting millions of students and staff at risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
              <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold text-black mb-3">Paper-Only Guidelines</h3>
              <p className="text-gray-600">Emergency protocols exist on paper but lack structured implementation and practical training.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
              <Globe className="h-8 w-8 text-yellow-600 mb-4" />
              <h3 className="text-lg font-semibold text-black mb-3">No Localized Awareness</h3>
              <p className="text-gray-600">Students unaware of region-specific disaster response protocols and local emergency procedures.</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-400">
              <Users className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-lg font-semibold text-black mb-3">Infrequent Drills</h3>
              <p className="text-gray-600">Manual drills are rare and poorly coordinated, failing to instill practical preparedness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Our Digital Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive platform combining WebAR technology, interactive learning, 
              and real-time safety training for complete disaster preparedness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold text-black mb-3">Interactive Modules</h3>
              <p className="text-gray-600">Comprehensive disaster education with region-specific protocols and emergency procedures.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Zap className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold text-black mb-3">WebAR Virtual Drills</h3>
              <p className="text-gray-600">Immersive augmented reality training simulations for realistic disaster scenarios.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-8 w-8 text-yellow-600 mb-4" />
              <h3 className="text-lg font-semibold text-black mb-3">Emergency Network</h3>
              <p className="text-gray-600">Real-time communication tools and comprehensive emergency contact directories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Creating Real Impact</h2>
            <p className="text-xl text-gray-300">Building a disaster-resilient society through education</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">50K+</div>
              <div className="text-gray-300">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">200+</div>
              <div className="text-gray-300">Schools Protected</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">15</div>
              <div className="text-gray-300">States Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;