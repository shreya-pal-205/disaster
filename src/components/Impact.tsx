import React from 'react';
import { TrendingUp, Heart, Globe, Award } from 'lucide-react';

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Creating Lasting Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            By integrating disaster preparedness into education, we're building a safer, 
            more resilient India one school at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
            <div className="text-gray-600">Students Trained</div>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
            <div className="text-gray-600">Schools Protected</div>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-fit mx-auto mb-4">
              <Globe className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">15</div>
            <div className="text-gray-600">States Covered</div>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 p-4 rounded-full w-fit mx-auto mb-4">
              <Award className="h-8 w-8 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Why Disaster Preparedness Education Matters
          </h3>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
            When disaster strikes, proper preparation can mean the difference between life and death. 
            By empowering young people with essential knowledge and skills, we're not just making 
            campuses safer—we're contributing to a more disaster-resilient society.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3">Lives Saved</h4>
              <p className="text-blue-100">Proper training reduces panic and chaos, leading to better outcomes during actual emergencies.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3">Community Resilience</h4>
              <p className="text-blue-100">Students become ambassadors of safety, spreading knowledge to families and communities.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3">Cultural Change</h4>
              <p className="text-blue-100">Integrating safety into education creates a culture of preparedness across generations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;