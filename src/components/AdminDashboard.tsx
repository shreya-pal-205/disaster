import React, { useState } from 'react';
import { BarChart3, Users, AlertTriangle, CheckCircle, TrendingUp, Calendar, Download, Settings } from 'lucide-react';

const AdminDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('This Month');
  const [selectedSchool, setSelectedSchool] = useState('All Schools');

  const timeframes = ['This Week', 'This Month', 'This Quarter', 'This Year'];
  const schools = ['All Schools', 'Delhi Public School', 'Mumbai International', 'Bangalore Academy', 'Chennai High School'];

  const stats = {
    totalStudents: 15420,
    completedTraining: 12890,
    activeDrills: 45,
    safetyScore: 87,
    monthlyGrowth: 12.5,
    weeklyDrills: 156
  };

  const schoolPerformance = [
    { name: 'Delhi Public School', students: 2500, completed: 2350, score: 94, drills: 28 },
    { name: 'Mumbai International', students: 3200, completed: 2880, score: 90, drills: 32 },
    { name: 'Bangalore Academy', students: 2800, completed: 2380, score: 85, drills: 25 },
    { name: 'Chennai High School', students: 2100, completed: 1890, score: 90, drills: 22 },
    { name: 'Hyderabad Public', students: 1900, completed: 1520, score: 80, drills: 18 },
    { name: 'Pune International', students: 2920, completed: 2340, score: 80, drills: 24 }
  ];

  const recentActivities = [
    { id: 1, type: 'drill', school: 'Delhi Public School', activity: 'Fire evacuation drill completed', time: '2 hours ago', status: 'success' },
    { id: 2, type: 'training', school: 'Mumbai International', activity: 'Earthquake safety module completed by 150 students', time: '4 hours ago', status: 'success' },
    { id: 3, type: 'alert', school: 'Bangalore Academy', activity: 'Low participation in flood safety training', time: '6 hours ago', status: 'warning' },
    { id: 4, type: 'drill', school: 'Chennai High School', activity: 'Cyclone shelter drill scheduled', time: '8 hours ago', status: 'info' },
    { id: 5, type: 'achievement', school: 'Hyderabad Public', activity: 'Achieved 90% completion rate in fire safety', time: '1 day ago', status: 'success' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'drill': return AlertTriangle;
      case 'training': return Users;
      case 'alert': return AlertTriangle;
      case 'achievement': return CheckCircle;
      default: return AlertTriangle;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'info': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Admin Dashboard</h1>
            <p className="text-xl text-gray-600">Monitor disaster preparedness across all institutions</p>
          </div>
          <div className="flex gap-3">
            <select 
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {timeframes.map(tf => (
                <option key={tf} value={tf}>{tf}</option>
              ))}
            </select>
            <select 
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {schools.map(school => (
                <option key={school} value={school}>{school}</option>
              ))}
            </select>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-blue-500" />
              <span className="text-sm text-green-600 font-medium">+{stats.monthlyGrowth}%</span>
            </div>
            <div className="text-2xl font-bold text-black mb-1">{stats.totalStudents.toLocaleString()}</div>
            <div className="text-gray-600">Total Students</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <span className="text-sm text-gray-500">{Math.round((stats.completedTraining / stats.totalStudents) * 100)}%</span>
            </div>
            <div className="text-2xl font-bold text-black mb-1">{stats.completedTraining.toLocaleString()}</div>
            <div className="text-gray-600">Completed Training</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="h-8 w-8 text-orange-400" />
              <span className="text-sm text-blue-600 font-medium">+{stats.weeklyDrills} this week</span>
            </div>
            <div className="text-2xl font-bold text-black mb-1">{stats.activeDrills}</div>
            <div className="text-gray-600">Active Drills</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="h-8 w-8 text-red-500" />
              <span className={`text-sm font-medium ${stats.safetyScore >= 85 ? 'text-green-600' : stats.safetyScore >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                {stats.safetyScore >= 85 ? 'Excellent' : stats.safetyScore >= 70 ? 'Good' : 'Needs Improvement'}
              </span>
            </div>
            <div className="text-2xl font-bold text-black mb-1">{stats.safetyScore}%</div>
            <div className="text-gray-600">Safety Score</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* School Performance */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-black">School Performance</h2>
                <button className="text-gray-500 hover:text-gray-700">
                  <Settings className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-4">
                {schoolPerformance.map((school, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-black">{school.name}</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-gray-600">{school.students} students</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          school.score >= 90 ? 'bg-green-100 text-green-800' :
                          school.score >= 80 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {school.score}% score
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Completion Rate</div>
                        <div className="font-semibold text-black">
                          {Math.round((school.completed / school.students) * 100)}%
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{ width: `${(school.completed / school.students) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-gray-600">Students Trained</div>
                        <div className="font-semibold text-black">{school.completed.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Drills Completed</div>
                        <div className="font-semibold text-black">{school.drills}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-black mb-6">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const IconComponent = getActivityIcon(activity.type);
                  return (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-full ${getStatusColor(activity.status)}`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-black">{activity.school}</div>
                        <div className="text-sm text-gray-600 mt-1">{activity.activity}</div>
                        <div className="text-xs text-gray-500 mt-1">{activity.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-black text-white rounded-xl p-6 mt-6">
              <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-left">
                  Schedule Emergency Drill
                </button>
                <button className="w-full bg-orange-400 text-black px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors text-left">
                  Send Safety Alert
                </button>
                <button className="w-full bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors text-left">
                  Generate Report
                </button>
                <button className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors text-left">
                  Manage Users
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
          <h2 className="text-xl font-bold text-black mb-6">Training Progress Over Time</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <div className="text-gray-600">Interactive chart showing training progress trends</div>
              <div className="text-sm text-gray-500 mt-1">Chart visualization would be implemented here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;