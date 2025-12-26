'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'

export default function LoadsPage() {
  const [filterStatus, setFilterStatus] = useState('all')

  const loads = [
    { id: 'LD-2024-001', origin: 'Atlanta, GA', destination: 'Dallas, TX', customer: 'Amazon FBA', driver: 'Marcus Johnson', truck: 'TRK-001', rate: 3200, miles: 782, ratePerMile: 4.09, status: 'In Transit', pickup: '2024-12-26 08:00', delivery: '2024-12-27 18:00', commodity: 'General Freight' },
    { id: 'LD-2024-002', origin: 'Memphis, TN', destination: 'Chicago, IL', customer: 'FedEx Ground', driver: 'Keisha Williams', truck: 'TRK-004', rate: 2100, miles: 532, ratePerMile: 3.95, status: 'In Transit', pickup: '2024-12-26 14:00', delivery: '2024-12-27 10:00', commodity: 'Electronics' },
    { id: 'LD-2024-003', origin: 'Los Angeles, CA', destination: 'Phoenix, AZ', customer: 'Walmart DC', driver: 'Angela Thompson', truck: 'TRK-006', rate: 1450, miles: 372, ratePerMile: 3.90, status: 'Delivered', pickup: '2024-12-24 06:00', delivery: '2024-12-24 16:00', commodity: 'Retail Goods' },
    { id: 'LD-2024-004', origin: 'Dallas, TX', destination: 'Houston, TX', customer: 'Target DC', driver: 'Darnell Brown', truck: 'TRK-002', rate: 850, miles: 239, ratePerMile: 3.56, status: 'Booked', pickup: '2024-12-28 10:00', delivery: '2024-12-28 18:00', commodity: 'Refrigerated' },
    { id: 'LD-2024-005', origin: 'Phoenix, AZ', destination: 'Denver, CO', customer: 'Home Depot', driver: 'Jerome Smith', truck: 'TRK-005', rate: 2400, miles: 602, ratePerMile: 3.99, status: 'Available', pickup: '2024-12-29 08:00', delivery: '2024-12-30 14:00', commodity: 'Building Materials' },
  ]

  const filteredLoads = filterStatus === 'all' ? loads : loads.filter(l => l.status.toLowerCase().replace(' ', '-') === filterStatus)

  const totalRevenue = loads.reduce((sum, l) => sum + l.rate, 0)
  const totalMiles = loads.reduce((sum, l) => sum + l.miles, 0)
  const avgRatePerMile = (totalRevenue / totalMiles).toFixed(2)

  return (
    <DashboardLayout activePage="loads">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">📦 Load Board</h1>
          <p className="text-gray-400 mt-1">Track and manage all shipments</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
            🔍 Find Loads
          </button>
          <button className="bg-accent-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
            + Book Load
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-4 border border-green-500/30">
          <p className="text-green-400 text-sm">In Transit</p>
          <p className="text-2xl font-bold text-white mt-1">2</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-4 border border-blue-500/30">
          <p className="text-blue-400 text-sm">Booked</p>
          <p className="text-2xl font-bold text-white mt-1">1</p>
        </div>
        <div className="bg-gradient-to-br from-gray-500/20 to-gray-600/10 rounded-xl p-4 border border-gray-500/30">
          <p className="text-gray-400 text-sm">Available</p>
          <p className="text-2xl font-bold text-white mt-1">1</p>
        </div>
        <div className="bg-gradient-to-br from-accent-gold/20 to-yellow-600/10 rounded-xl p-4 border border-accent-gold/30">
          <p className="text-accent-gold text-sm">Total Revenue</p>
          <p className="text-2xl font-bold text-white mt-1">${totalRevenue.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-4 border border-purple-500/30">
          <p className="text-purple-400 text-sm">Avg $/Mile</p>
          <p className="text-2xl font-bold text-white mt-1">${avgRatePerMile}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {['all', 'in-transit', 'booked', 'available', 'delivered'].map((status) => (
          <button 
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
              filterStatus === status 
                ? 'bg-accent-gold text-black' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {status.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Loads */}
      <div className="space-y-4">
        {filteredLoads.map((load) => (
          <div key={load.id} className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-accent-gold transition-colors">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Load Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent-gold font-mono font-bold text-lg">{load.id}</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    load.status === 'In Transit' ? 'bg-green-500/20 text-green-400' :
                    load.status === 'Booked' ? 'bg-blue-500/20 text-blue-400' :
                    load.status === 'Delivered' ? 'bg-gray-500/20 text-gray-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {load.status}
                  </span>
                  <span className="text-gray-400 text-sm">• {load.commodity}</span>
                </div>

                {/* Route */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="text-white font-medium">{load.origin}</span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="text-white font-medium">{load.destination}</span>
                  </div>
                  <span className="text-gray-400">({load.miles} mi)</span>
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-gray-400">Customer: <span className="text-white">{load.customer}</span></span>
                  <span className="text-gray-400">Driver: <span className="text-white">{load.driver}</span></span>
                  <span className="text-gray-400">Truck: <span className="text-accent-gold">{load.truck}</span></span>
                </div>
              </div>

              {/* Rate & Actions */}
              <div className="text-right">
                <p className="text-3xl font-bold text-accent-gold">${load.rate.toLocaleString()}</p>
                <p className="text-gray-400">${load.ratePerMile}/mi</p>
                <div className="flex gap-2 mt-3 justify-end">
                  <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                    📄 BoL
                  </button>
                  <button className="px-4 py-2 bg-accent-gold text-black rounded-lg font-medium hover:bg-yellow-400 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-4 pt-4 border-t border-gray-700 flex flex-wrap gap-6 text-sm">
              <div>
                <span className="text-gray-400">Pickup:</span>
                <span className="text-white ml-2">{load.pickup}</span>
              </div>
              <div>
                <span className="text-gray-400">Delivery:</span>
                <span className="text-white ml-2">{load.delivery}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
