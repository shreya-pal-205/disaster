import React, { useState } from 'react';
import { Phone, MapPin, Clock, Plus, Search, AlertTriangle, Users } from 'lucide-react';

const EmergencyContacts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddContact, setShowAddContact] = useState(false);

  const categories = ['All', 'Emergency Services', 'Medical', 'School Staff', 'Local Authorities', 'Utilities'];

  const contacts = [
    {
      id: 1,
      name: 'National Emergency Helpline',
      number: '112',
      category: 'Emergency Services',
      type: 'National',
      available: '24/7',
      description: 'Single emergency number for all emergencies',
      priority: 'Critical'
    },
    {
      id: 2,
      name: 'Fire Department',
      number: '101',
      category: 'Emergency Services',
      type: 'Local',
      available: '24/7',
      description: 'Fire emergencies and rescue operations',
      priority: 'Critical'
    },
    {
      id: 3,
      name: 'Police Emergency',
      number: '100',
      category: 'Emergency Services',
      type: 'Local',
      available: '24/7',
      description: 'Police emergency and crime reporting',
      priority: 'Critical'
    },
    {
      id: 4,
      name: 'Ambulance Service',
      number: '108',
      category: 'Medical',
      type: 'National',
      available: '24/7',
      description: 'Medical emergency and ambulance service',
      priority: 'Critical'
    },
    {
      id: 5,
      name: 'Principal - Dr. Rajesh Kumar',
      number: '+91 98765 43210',
      category: 'School Staff',
      type: 'School',
      available: '8 AM - 6 PM',
      description: 'School Principal - Primary emergency contact',
      priority: 'High'
    },
    {
      id: 6,
      name: 'Vice Principal - Mrs. Priya Sharma',
      number: '+91 98765 43211',
      category: 'School Staff',
      type: 'School',
      available: '8 AM - 6 PM',
      description: 'Vice Principal - Secondary emergency contact',
      priority: 'High'
    },
    {
      id: 7,
      name: 'School Nurse - Ms. Anita Patel',
      number: '+91 98765 43212',
      category: 'Medical',
      type: 'School',
      available: '8 AM - 4 PM',
      description: 'School medical officer and first aid',
      priority: 'High'
    },
    {
      id: 8,
      name: 'District Collector Office',
      number: '+91 11 2345 6789',
      category: 'Local Authorities',
      type: 'Government',
      available: '10 AM - 5 PM',
      description: 'District administration and disaster management',
      priority: 'Medium'
    },
    {
      id: 9,
      name: 'Electricity Board Emergency',
      number: '1912',
      category: 'Utilities',
      type: 'Local',
      available: '24/7',
      description: 'Power outage and electrical emergencies',
      priority: 'Medium'
    },
    {
      id: 10,
      name: 'Gas Emergency Helpline',
      number: '1906',
      category: 'Utilities',
      type: 'National',
      available: '24/7',
      description: 'Gas leak and LPG emergencies',
      priority: 'High'
    }
  ];

  const filteredContacts = contacts.filter(contact => {
    const matchesCategory = selectedCategory === 'All' || contact.category === selectedCategory;
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.number.includes(searchTerm) ||
                         contact.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'National': return '🇮🇳';
      case 'Local': return '🏢';
      case 'School': return '🏫';
      case 'Government': return '🏛️';
      default: return '📞';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Emergency Contact Directory</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quick access to all essential emergency contacts. Keep these numbers handy 
            and know who to call in different emergency situations.
          </p>
        </div>

        {/* Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-red-500 text-white p-6 rounded-xl">
            <Phone className="h-8 w-8 mb-3" />
            <h3 className="text-lg font-bold mb-2">Emergency: 112</h3>
            <p className="text-red-100">Single number for all emergencies</p>
            <button className="mt-3 bg-white text-red-500 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Call Now
            </button>
          </div>
          <div className="bg-orange-400 text-black p-6 rounded-xl">
            <AlertTriangle className="h-8 w-8 mb-3" />
            <h3 className="text-lg font-bold mb-2">Medical: 108</h3>
            <p className="text-orange-800">Ambulance and medical emergency</p>
            <button className="mt-3 bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Call Now
            </button>
          </div>
          <div className="bg-yellow-500 text-black p-6 rounded-xl">
            <Users className="h-8 w-8 mb-3" />
            <h3 className="text-lg font-bold mb-2">School Emergency</h3>
            <p className="text-yellow-800">Contact school administration</p>
            <button className="mt-3 bg-white text-yellow-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-50 transition-colors">
              View Contacts
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowAddContact(true)}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Contact
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContacts.map((contact) => (
            <div key={contact.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">{getTypeIcon(contact.type)}</div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(contact.priority)}`}>
                    {contact.priority}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black mb-2">{contact.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{contact.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="font-mono text-black">{contact.number}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{contact.available}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{contact.type}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredContacts.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No contacts found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Add Contact Modal */}
        {showAddContact && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <h2 className="text-xl font-bold text-black mb-4">Add Emergency Contact</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    {categories.slice(1).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" rows="3"></textarea>
                </div>
                <div className="flex gap-3 pt-4">
                  <button type="submit" className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
                    Add Contact
                  </button>
                  <button 
                    type="button"
                    onClick={() => setShowAddContact(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Emergency Instructions */}
        <div className="bg-black text-white rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6">Emergency Calling Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-red-400 mb-3">Before Calling</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Stay calm and assess the situation</li>
                <li>• Ensure your own safety first</li>
                <li>• Gather essential information</li>
                <li>• Have your location ready</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-orange-400 mb-3">During the Call</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Speak clearly and slowly</li>
                <li>• Provide exact location</li>
                <li>• Describe the emergency</li>
                <li>• Follow operator instructions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-500 mb-3">After Calling</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Stay on the line if instructed</li>
                <li>• Keep the area clear for responders</li>
                <li>• Provide assistance if safe to do so</li>
                <li>• Document the incident</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContacts;