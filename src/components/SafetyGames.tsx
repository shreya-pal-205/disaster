import React, { useState } from 'react';
import { Gamepad2, Trophy, Star, Users, Clock, Play, Target } from 'lucide-react';

const SafetyGames = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [userScore, setUserScore] = useState(0);

  const games = [
    {
      id: 1,
      title: 'Earthquake Escape Challenge',
      description: 'Navigate through a shaking building and find the safest exit route',
      type: 'Action',
      difficulty: 'Medium',
      players: 15420,
      rating: 4.8,
      duration: '5-10 mins',
      points: 500,
      badges: ['Quick Thinker', 'Safety Expert', 'Earthquake Hero'],
      color: 'bg-red-500',
      image: '🏢'
    },
    {
      id: 2,
      title: 'Fire Safety Quiz Master',
      description: 'Test your fire safety knowledge with interactive questions',
      type: 'Quiz',
      difficulty: 'Easy',
      players: 22100,
      rating: 4.9,
      duration: '3-5 mins',
      points: 300,
      badges: ['Fire Expert', 'Quick Learner', 'Safety Champion'],
      color: 'bg-orange-400',
      image: '🔥'
    },
    {
      id: 3,
      title: 'Flood Rescue Mission',
      description: 'Help evacuate people safely during a flood emergency',
      type: 'Strategy',
      difficulty: 'Hard',
      players: 8900,
      rating: 4.7,
      duration: '10-15 mins',
      points: 750,
      badges: ['Rescue Hero', 'Strategic Thinker', 'Flood Expert'],
      color: 'bg-blue-500',
      image: '🌊'
    },
    {
      id: 4,
      title: 'Emergency Kit Builder',
      description: 'Build the perfect emergency kit for different disaster scenarios',
      type: 'Puzzle',
      difficulty: 'Medium',
      players: 12300,
      rating: 4.6,
      duration: '7-12 mins',
      points: 400,
      badges: ['Prepared Citizen', 'Kit Master', 'Planning Pro'],
      color: 'bg-green-500',
      image: '🎒'
    },
    {
      id: 5,
      title: 'Cyclone Shelter Simulator',
      description: 'Make critical decisions during a cyclone to keep everyone safe',
      type: 'Simulation',
      difficulty: 'Hard',
      players: 6700,
      rating: 4.8,
      duration: '8-15 mins',
      points: 600,
      badges: ['Storm Survivor', 'Decision Maker', 'Cyclone Expert'],
      color: 'bg-purple-500',
      image: '🌪️'
    },
    {
      id: 6,
      title: 'First Aid Hero',
      description: 'Practice life-saving first aid techniques in emergency situations',
      type: 'Educational',
      difficulty: 'Medium',
      players: 18500,
      rating: 4.9,
      duration: '6-10 mins',
      points: 450,
      badges: ['Life Saver', 'Medical Helper', 'First Aid Expert'],
      color: 'bg-pink-500',
      image: '🏥'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Arjun Sharma', school: 'Delhi Public School', points: 15420 },
    { rank: 2, name: 'Priya Patel', school: 'Mumbai International', points: 14890 },
    { rank: 3, name: 'Rahul Kumar', school: 'Bangalore Academy', points: 14200 },
    { rank: 4, name: 'Sneha Reddy', school: 'Chennai High School', points: 13750 },
    { rank: 5, name: 'Vikram Singh', school: 'Jaipur Public School', points: 13200 }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const playGame = (game) => {
    setSelectedGame(game);
    // Simulate game completion after 3 seconds
    setTimeout(() => {
      const earnedPoints = Math.floor(Math.random() * game.points) + 100;
      setUserScore(prev => prev + earnedPoints);
      alert(`Game completed! You earned ${earnedPoints} points!`);
      setSelectedGame(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Safety Learning Games</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn disaster preparedness through engaging games and challenges. 
            Earn points, unlock badges, and compete with students across India!
          </p>
        </div>

        {/* User Stats */}
        <div className="bg-black text-white rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{userScore}</div>
              <div className="text-gray-300">Total Points</div>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-gray-300">Badges Earned</div>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">8</div>
              <div className="text-gray-300">Games Completed</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">#47</div>
              <div className="text-gray-300">Global Rank</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Games Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-black mb-6">Available Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {games.map((game) => (
                <div key={game.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`${game.color} h-2`}></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{game.image}</div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{game.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-black mb-2">{game.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{game.description}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className={`px-2 py-1 rounded-full ${getDifficultyColor(game.difficulty)}`}>
                        {game.difficulty}
                      </span>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {game.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {game.players.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">
                        <span className="text-gray-600">Earn up to </span>
                        <span className="font-bold text-orange-400">{game.points} points</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-xs text-gray-600 mb-1">Badges Available:</div>
                      <div className="flex flex-wrap gap-1">
                        {game.badges.slice(0, 2).map((badge, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            {badge}
                          </span>
                        ))}
                        {game.badges.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            +{game.badges.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    <button 
                      onClick={() => playGame(game)}
                      className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Play Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Leaderboard</h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-4">
                {leaderboard.map((player) => (
                  <div key={player.rank} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                        player.rank === 1 ? 'bg-yellow-500 text-white' :
                        player.rank === 2 ? 'bg-gray-400 text-white' :
                        player.rank === 3 ? 'bg-orange-600 text-white' :
                        'bg-gray-200 text-gray-700'
                      }`}>
                        {player.rank}
                      </div>
                      <div>
                        <div className="font-semibold text-black text-sm">{player.name}</div>
                        <div className="text-xs text-gray-600">{player.school}</div>
                      </div>
                    </div>
                    <div className="text-sm font-bold text-orange-400">
                      {player.points.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Showcase */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-lg font-bold text-black mb-4">Recent Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center p-2 bg-yellow-50 rounded-lg">
                  <Trophy className="h-6 w-6 text-yellow-500 mr-3" />
                  <div>
                    <div className="text-sm font-semibold text-black">Fire Expert</div>
                    <div className="text-xs text-gray-600">Completed Fire Safety Quiz</div>
                  </div>
                </div>
                <div className="flex items-center p-2 bg-red-50 rounded-lg">
                  <Star className="h-6 w-6 text-red-500 mr-3" />
                  <div>
                    <div className="text-sm font-semibold text-black">Earthquake Hero</div>
                    <div className="text-xs text-gray-600">Perfect score in Escape Challenge</div>
                  </div>
                </div>
                <div className="flex items-center p-2 bg-blue-50 rounded-lg">
                  <Target className="h-6 w-6 text-blue-500 mr-3" />
                  <div>
                    <div className="text-sm font-semibold text-black">Quick Learner</div>
                    <div className="text-xs text-gray-600">Completed 5 games this week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Playing Modal */}
        {selectedGame && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
              <div className="text-center">
                <div className="text-6xl mb-4">{selectedGame.image}</div>
                <h3 className="text-xl font-bold text-black mb-2">Playing: {selectedGame.title}</h3>
                <p className="text-gray-600 mb-6">Game in progress...</p>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafetyGames;