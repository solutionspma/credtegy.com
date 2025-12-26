'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'

export default function FundingPage() {
  const [selectedTab, setSelectedTab] = useState('active')

  const fundingOptions = [
    { id: 1, name: 'Business Line of Credit', provider: 'BlueVine', minScore: 650, amount: '$5K - $250K', apr: '15-78%', term: 'Revolving', speed: '24 hrs' },
    { id: 2, name: 'SBA Loan', provider: 'Lendio', minScore: 680, amount: '$50K - $5M', apr: '5-13%', term: '10-25 yrs', speed: '2-3 weeks' },
    { id: 3, name: 'Business Credit Card', provider: 'Nav', minScore: 650, amount: '$1K - $50K', apr: '13-26%', term: 'Revolving', speed: 'Instant' },
    { id: 4, name: 'Equipment Financing', provider: 'Balboa Capital', minScore: 600, amount: '$5K - $500K', apr: '8-30%', term: '2-7 yrs', speed: '1-3 days' },
    { id: 5, name: 'Invoice Factoring', provider: 'Fundbox', minScore: 500, amount: '$1K - $100K', apr: '10-79%', term: '12-24 wks', speed: '24 hrs' },
    { id: 6, name: 'Merchant Cash Advance', provider: 'Credibly', minScore: 500, amount: '$5K - $400K', apr: '20-250%', term: '3-18 mo', speed: 'Same day' },
  ]

  const clientApplications = [
    { id: 1, client: 'Jerome Smith', type: 'Business Line of Credit', amount: '$75,000', status: 'Approved', date: '2024-12-20' },
    { id: 2, client: 'Keisha Williams', type: 'Equipment Financing', amount: '$45,000', status: 'Pending', date: '2024-12-24' },
    { id: 3, client: 'Lisa Martinez', type: 'SBA Loan', amount: '$150,000', status: 'Under Review', date: '2024-12-22' },
    { id: 4, client: 'David Wilson', type: 'Business Credit Card', amount: '$25,000', status: 'Approved', date: '2024-12-18' },
  ]

  return (
    <DashboardLayout activePage="funding">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">💰 Funding Marketplace</h1>
          <p className="text-gray-400 mt-1">Connect clients with the right funding options</p>
        </div>
        <button className="bg-accent-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
          + New Application
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-5 border border-green-500/30">
          <p className="text-green-400 text-sm font-medium">Total Funded</p>
          <p className="text-3xl font-bold text-white mt-1">$1.2M</p>
          <p className="text-green-400 text-sm mt-2">↑ 24% this month</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-5 border border-blue-500/30">
          <p className="text-blue-400 text-sm font-medium">Active Applications</p>
          <p className="text-3xl font-bold text-white mt-1">18</p>
          <p className="text-blue-400 text-sm mt-2">6 pending approval</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-5 border border-purple-500/30">
          <p className="text-purple-400 text-sm font-medium">Approval Rate</p>
          <p className="text-3xl font-bold text-white mt-1">72%</p>
          <p className="text-purple-400 text-sm mt-2">Above industry avg</p>
        </div>
        <div className="bg-gradient-to-br from-accent-gold/20 to-yellow-600/10 rounded-xl p-5 border border-accent-gold/30">
          <p className="text-accent-gold text-sm font-medium">Avg Funding Time</p>
          <p className="text-3xl font-bold text-white mt-1">4.2 days</p>
          <p className="text-accent-gold text-sm mt-2">↓ 2 days faster</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button 
          onClick={() => setSelectedTab('active')}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            selectedTab === 'active' 
              ? 'bg-accent-gold text-black' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Client Applications
        </button>
        <button 
          onClick={() => setSelectedTab('options')}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            selectedTab === 'options' 
              ? 'bg-accent-gold text-black' 
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        >
          Funding Options
        </button>
      </div>

      {selectedTab === 'active' ? (
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left px-6 py-4 text-gray-300 font-medium">Client</th>
                <th className="text-left px-6 py-4 text-gray-300 font-medium">Funding Type</th>
                <th className="text-left px-6 py-4 text-gray-300 font-medium">Amount</th>
                <th className="text-left px-6 py-4 text-gray-300 font-medium">Status</th>
                <th className="text-left px-6 py-4 text-gray-300 font-medium">Date</th>
                <th className="text-left px-6 py-4 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clientApplications.map((app) => (
                <tr key={app.id} className="border-t border-gray-700 hover:bg-gray-700/50">
                  <td className="px-6 py-4 text-white font-medium">{app.client}</td>
                  <td className="px-6 py-4 text-gray-300">{app.type}</td>
                  <td className="px-6 py-4 text-accent-gold font-bold">{app.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      app.status === 'Approved' ? 'bg-green-500/20 text-green-400' :
                      app.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{app.date}</td>
                  <td className="px-6 py-4">
                    <button className="text-accent-gold hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fundingOptions.map((option) => (
            <div key={option.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-accent-gold transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-white">{option.name}</h3>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">{option.provider}</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Amount</span>
                  <span className="text-accent-gold font-medium">{option.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Min Score</span>
                  <span className="text-white">{option.minScore}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">APR</span>
                  <span className="text-white">{option.apr}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Term</span>
                  <span className="text-white">{option.term}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Funding Speed</span>
                  <span className="text-green-400">{option.speed}</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-accent-gold/20 text-accent-gold py-2 rounded-lg font-medium hover:bg-accent-gold hover:text-black transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  )
}
