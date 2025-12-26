'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'

export default function MenteesPage() {
  const [filterLevel, setFilterLevel] = useState('all')

  const mentees = [
    { 
      id: 1, 
      name: 'Tanya Davis', 
      email: 'tanya@email.com',
      level: 'Gold',
      startDate: '2024-09-15',
      progress: 75,
      modulesCompleted: 9,
      totalModules: 12,
      nextCall: '2024-12-28 2:00 PM',
      earnings: 0,
      status: 'Active'
    },
    { 
      id: 2, 
      name: 'Robert King', 
      email: 'robert@email.com',
      level: 'Platinum',
      startDate: '2024-06-01',
      progress: 92,
      modulesCompleted: 11,
      totalModules: 12,
      nextCall: '2024-12-30 11:00 AM',
      earnings: 4500,
      status: 'Active'
    },
    { 
      id: 3, 
      name: 'Lisa Martinez', 
      email: 'lisa@email.com',
      level: 'Silver',
      startDate: '2024-11-01',
      progress: 42,
      modulesCompleted: 5,
      totalModules: 12,
      nextCall: '2024-12-27 3:30 PM',
      earnings: 0,
      status: 'Active'
    },
    { 
      id: 4, 
      name: 'David Wilson', 
      email: 'david@email.com',
      level: 'Platinum',
      startDate: '2024-03-15',
      progress: 100,
      modulesCompleted: 12,
      totalModules: 12,
      nextCall: '-',
      earnings: 12800,
      status: 'Graduated'
    },
    { 
      id: 5, 
      name: 'Michelle Brown', 
      email: 'michelle@email.com',
      level: 'Gold',
      startDate: '2024-10-01',
      progress: 58,
      modulesCompleted: 7,
      totalModules: 12,
      nextCall: '2024-12-29 10:00 AM',
      earnings: 1200,
      status: 'Active'
    },
  ]

  const modules = [
    { id: 1, name: 'Credit Fundamentals', duration: '2 weeks' },
    { id: 2, name: 'Understanding Credit Reports', duration: '1 week' },
    { id: 3, name: 'Dispute Strategy Mastery', duration: '3 weeks' },
    { id: 4, name: 'Business Credit Building', duration: '2 weeks' },
    { id: 5, name: 'Client Acquisition', duration: '2 weeks' },
    { id: 6, name: 'Pricing & Packaging', duration: '1 week' },
    { id: 7, name: 'Software & Tools', duration: '1 week' },
    { id: 8, name: 'Legal Compliance', duration: '2 weeks' },
    { id: 9, name: 'Funding Partners', duration: '2 weeks' },
    { id: 10, name: 'Automation Setup', duration: '1 week' },
    { id: 11, name: 'Marketing & Branding', duration: '2 weeks' },
    { id: 12, name: 'Scaling Your Business', duration: '2 weeks' },
  ]

  const filteredMentees = filterLevel === 'all' 
    ? mentees 
    : mentees.filter(m => m.level.toLowerCase() === filterLevel)

  return (
    <DashboardLayout activePage="mentees">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">🎓 Mentorship Program</h1>
          <p className="text-gray-400 mt-1">Train the next generation of Credit Repair Specialists</p>
        </div>
        <button className="bg-accent-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
          + Enroll Mentee
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-gradient-to-br from-accent-gold/20 to-yellow-600/10 rounded-xl p-4 border border-accent-gold/30">
          <p className="text-accent-gold text-sm">Active Mentees</p>
          <p className="text-2xl font-bold text-white mt-1">{mentees.filter(m => m.status === 'Active').length}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-4 border border-green-500/30">
          <p className="text-green-400 text-sm">Graduated</p>
          <p className="text-2xl font-bold text-white mt-1">{mentees.filter(m => m.status === 'Graduated').length}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-4 border border-purple-500/30">
          <p className="text-purple-400 text-sm">Avg Progress</p>
          <p className="text-2xl font-bold text-white mt-1">{Math.round(mentees.reduce((sum, m) => sum + m.progress, 0) / mentees.length)}%</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-4 border border-blue-500/30">
          <p className="text-blue-400 text-sm">Mentee Revenue</p>
          <p className="text-2xl font-bold text-white mt-1">${mentees.reduce((sum, m) => sum + m.earnings, 0).toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/10 rounded-xl p-4 border border-pink-500/30">
          <p className="text-pink-400 text-sm">Calls This Week</p>
          <p className="text-2xl font-bold text-white mt-1">8</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {['all', 'platinum', 'gold', 'silver'].map((level) => (
          <button 
            key={level}
            onClick={() => setFilterLevel(level)}
            className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
              filterLevel === level 
                ? 'bg-accent-gold text-black' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      <div className="flex gap-6">
        {/* Mentees List */}
        <div className="flex-1">
          <div className="space-y-4">
            {filteredMentees.map((mentee) => (
              <div key={mentee.id} className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-accent-gold transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold text-xl font-bold">
                      {mentee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{mentee.name}</h3>
                      <p className="text-gray-400">{mentee.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      mentee.level === 'Platinum' ? 'bg-purple-500/20 text-purple-400' :
                      mentee.level === 'Gold' ? 'bg-accent-gold/20 text-accent-gold' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {mentee.level}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      mentee.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {mentee.status}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Course Progress</span>
                    <span className="text-white">{mentee.modulesCompleted}/{mentee.totalModules} modules ({mentee.progress}%)</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        mentee.progress === 100 ? 'bg-green-500' :
                        mentee.progress >= 75 ? 'bg-accent-gold' :
                        mentee.progress >= 50 ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}
                      style={{ width: `${mentee.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-400">Start Date</p>
                    <p className="text-white">{mentee.startDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Next Call</p>
                    <p className="text-white">{mentee.nextCall}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Their Revenue</p>
                    <p className="text-accent-gold font-bold">${mentee.earnings.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Modules */}
        <div className="w-80 flex-shrink-0">
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-4">
            <h3 className="text-white font-bold mb-4">📚 Course Modules</h3>
            <div className="space-y-2">
              {modules.map((module) => (
                <div key={module.id} className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold text-sm">
                    {module.id}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{module.name}</p>
                    <p className="text-gray-400 text-xs">{module.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
