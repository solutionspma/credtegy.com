'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'

export default function PipelinePage() {
  const [draggedItem, setDraggedItem] = useState(null)

  const stages = [
    {
      id: 'new-lead',
      name: '🎯 New Lead',
      color: 'blue',
      deals: [
        { id: 1, name: 'Marcus Johnson', value: 2500, score: 540, days: 2 },
        { id: 2, name: 'Darnell Brown', value: 3500, score: 580, days: 1 },
      ]
    },
    {
      id: 'consultation',
      name: '📞 Consultation',
      color: 'purple',
      deals: [
        { id: 3, name: 'Angela Thompson', value: 2000, score: 560, days: 3 },
      ]
    },
    {
      id: 'credit-analysis',
      name: '📊 Credit Analysis',
      color: 'orange',
      deals: [
        { id: 4, name: 'Tanya Davis', value: 4500, score: 620, days: 5 },
        { id: 5, name: 'Robert King', value: 3000, score: 600, days: 4 },
      ]
    },
    {
      id: 'dispute-progress',
      name: '⚡ Dispute Progress',
      color: 'yellow',
      deals: [
        { id: 6, name: 'Keisha Williams', value: 5000, score: 680, days: 14 },
      ]
    },
    {
      id: 'funding-ready',
      name: '💰 Funding Ready',
      color: 'green',
      deals: [
        { id: 7, name: 'Jerome Smith', value: 6000, score: 720, days: 21 },
        { id: 8, name: 'Lisa Martinez', value: 7500, score: 740, days: 18 },
      ]
    },
    {
      id: 'funded',
      name: '🏆 Funded',
      color: 'gold',
      deals: [
        { id: 9, name: 'David Wilson', value: 10000, score: 780, days: 30 },
      ]
    }
  ]

  const totalValue = stages.reduce((acc, stage) => 
    acc + stage.deals.reduce((sum, deal) => sum + deal.value, 0), 0
  )

  return (
    <DashboardLayout activePage="pipeline">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">🔄 Sales Pipeline</h1>
          <p className="text-gray-400 mt-1">Track deals through every stage</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-gray-400 text-sm">Pipeline Value</p>
            <p className="text-2xl font-bold text-accent-gold">${totalValue.toLocaleString()}</p>
          </div>
          <button className="bg-accent-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
            + Add Deal
          </button>
        </div>
      </div>

      {/* Pipeline Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => (
          <div 
            key={stage.id} 
            className="flex-shrink-0 w-72 bg-gray-800 rounded-xl border border-gray-700"
          >
            {/* Stage Header */}
            <div className={`p-4 border-b border-gray-700 rounded-t-xl ${
              stage.color === 'blue' ? 'bg-blue-500/10' :
              stage.color === 'purple' ? 'bg-purple-500/10' :
              stage.color === 'orange' ? 'bg-orange-500/10' :
              stage.color === 'yellow' ? 'bg-yellow-500/10' :
              stage.color === 'green' ? 'bg-green-500/10' :
              'bg-accent-gold/10'
            }`}>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-white">{stage.name}</h3>
                <span className="bg-gray-700 px-2 py-1 rounded text-sm text-gray-300">
                  {stage.deals.length}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                ${stage.deals.reduce((sum, d) => sum + d.value, 0).toLocaleString()}
              </p>
            </div>

            {/* Deals */}
            <div className="p-3 space-y-3 min-h-[300px]">
              {stage.deals.map((deal) => (
                <div 
                  key={deal.id}
                  draggable
                  className="bg-gray-700 rounded-lg p-4 cursor-grab hover:bg-gray-600 transition-colors border border-gray-600 hover:border-accent-gold"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-white">{deal.name}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      deal.score >= 700 ? 'bg-green-500/20 text-green-400' :
                      deal.score >= 600 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {deal.score}
                    </span>
                  </div>
                  <p className="text-accent-gold font-bold">${deal.value.toLocaleString()}</p>
                  <p className="text-gray-400 text-xs mt-2">{deal.days} days in stage</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pipeline Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Conversion Rate</p>
          <p className="text-2xl font-bold text-green-400">32%</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Avg Deal Size</p>
          <p className="text-2xl font-bold text-white">$4,500</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Avg Days to Close</p>
          <p className="text-2xl font-bold text-white">28 days</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">Win Rate</p>
          <p className="text-2xl font-bold text-accent-gold">68%</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
