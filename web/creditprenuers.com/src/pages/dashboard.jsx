'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token || !userData) {
      router.push('/signin')
      return
    }

    setUser(JSON.parse(userData))
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/signin')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-gold"></div>
      </div>
    )
  }

  const stats = [
    { label: 'Total Contacts', value: '247', change: '+12%', icon: '👥' },
    { label: 'Active Clients', value: '89', change: '+8%', icon: '✅' },
    { label: 'Revenue MTD', value: '$12,450', change: '+23%', icon: '💰' },
    { label: 'Pending Funding', value: '34', change: '+5%', icon: '📋' },
  ]

  const recentActivity = [
    { action: 'New lead submitted', name: 'Marcus Johnson', time: '2 mins ago' },
    { action: 'Funding approved', name: 'Keisha Williams', time: '15 mins ago' },
    { action: 'eBook purchased', name: 'Darnell Brown', time: '1 hour ago' },
    { action: 'Mentorship signup', name: 'Tanya Davis', time: '3 hours ago' },
    { action: 'Credit score update', name: 'Jerome Smith', time: '5 hours ago' },
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Top Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-4">
              <div className="bg-gray-900 rounded-lg p-2">
                <img src="/images/logo.png" alt="CreditPreneurs" className="h-8 w-auto" />
              </div>
              <span className="text-white font-bold text-lg">Command Center</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Welcome, {user?.firstName}</span>
              <button
                onClick={handleLogout}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 min-h-[calc(100vh-64px)] border-r border-gray-700">
          <nav className="p-4 space-y-2">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-accent-gold text-black rounded-lg font-medium">
              <span>📊</span> Dashboard
            </Link>
            <Link href="/dashboard/contacts" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <span>👥</span> Contacts
            </Link>
            <Link href="/dashboard/funding" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <span>💳</span> Funding
            </Link>
            <Link href="/dashboard/pipelines" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <span>📈</span> Pipelines
            </Link>
            <Link href="/dashboard/documents" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <span>📁</span> Documents
            </Link>
            <Link href="/dashboard/automation" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <span>⚡</span> Automation
            </Link>
            <Link href="/dashboard/communication" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <span>💬</span> Communication
            </Link>
            <Link href="/dashboard/billing" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <span>💵</span> Billing
            </Link>
            
            <div className="border-t border-gray-700 my-4"></div>
            
            <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors">
              <span>⚙️</span> Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 mt-1">Welcome to your MBOCC Command Center</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{stat.icon}</span>
                  <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                </div>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
                    <div>
                      <p className="text-white font-medium">{activity.action}</p>
                      <p className="text-gray-400 text-sm">{activity.name}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-6 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <span className="text-3xl mb-2">➕</span>
                  <span className="text-white font-medium">Add Contact</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <span className="text-3xl mb-2">📝</span>
                  <span className="text-white font-medium">New Application</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <span className="text-3xl mb-2">📧</span>
                  <span className="text-white font-medium">Send Campaign</span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  <span className="text-3xl mb-2">📊</span>
                  <span className="text-white font-medium">View Reports</span>
                </button>
              </div>
            </div>
          </div>

          {/* Pipeline Overview */}
          <div className="mt-8 bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">Pipeline Overview</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {[
                { stage: 'New Lead', count: 23, color: 'bg-red-500' },
                { stage: 'Consultation', count: 15, color: 'bg-orange-500' },
                { stage: 'Onboarding', count: 18, color: 'bg-yellow-500' },
                { stage: 'Credit Analysis', count: 12, color: 'bg-green-500' },
                { stage: 'Dispute Progress', count: 8, color: 'bg-blue-500' },
                { stage: 'Funding Ready', count: 5, color: 'bg-purple-500' },
                { stage: 'Funded', count: 34, color: 'bg-accent-gold' },
              ].map((pipeline, index) => (
                <div key={index} className="flex-shrink-0 w-40 bg-gray-700 rounded-lg p-4">
                  <div className={`w-3 h-3 rounded-full ${pipeline.color} mb-3`}></div>
                  <p className="text-white font-medium text-sm">{pipeline.stage}</p>
                  <p className="text-2xl font-bold text-white mt-1">{pipeline.count}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
