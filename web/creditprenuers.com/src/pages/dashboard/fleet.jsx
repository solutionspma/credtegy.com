'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'

export default function FleetPage() {
  const [viewMode, setViewMode] = useState('grid')

  const trucks = [
    { id: 'TRK-001', name: 'Freightliner Cascadia', year: 2022, vin: '1FUJGLD...8765', status: 'Active', driver: 'Marcus Johnson', mileage: 124500, nextService: '2024-01-15', location: 'Atlanta, GA', eld: 'Connected' },
    { id: 'TRK-002', name: 'Peterbilt 579', year: 2021, vin: '1XPWD40...3421', status: 'Active', driver: 'Darnell Brown', mileage: 198000, nextService: '2024-01-08', location: 'Dallas, TX', eld: 'Connected' },
    { id: 'TRK-003', name: 'Kenworth T680', year: 2023, vin: '1NKDL40...7892', status: 'Maintenance', driver: 'Unassigned', mileage: 45000, nextService: 'In Shop', location: 'Memphis, TN', eld: 'Disconnected' },
    { id: 'TRK-004', name: 'Volvo VNL 860', year: 2022, vin: '4V4NC9E...5543', status: 'Active', driver: 'Keisha Williams', mileage: 156000, nextService: '2024-01-20', location: 'Chicago, IL', eld: 'Connected' },
    { id: 'TRK-005', name: 'Freightliner Cascadia', year: 2020, vin: '1FUJGLD...2198', status: 'Idle', driver: 'Jerome Smith', mileage: 312000, nextService: '2024-01-05', location: 'Phoenix, AZ', eld: 'Connected' },
    { id: 'TRK-006', name: 'International LT', year: 2023, vin: '3HSCUAP...6677', status: 'Active', driver: 'Angela Thompson', mileage: 28000, nextService: '2024-02-10', location: 'Los Angeles, CA', eld: 'Connected' },
  ]

  const trailers = [
    { id: 'TRL-001', type: 'Dry Van', length: '53ft', status: 'In Use', attachedTo: 'TRK-001' },
    { id: 'TRL-002', type: 'Reefer', length: '53ft', status: 'In Use', attachedTo: 'TRK-002' },
    { id: 'TRL-003', type: 'Flatbed', length: '48ft', status: 'Available', attachedTo: null },
    { id: 'TRL-004', type: 'Dry Van', length: '53ft', status: 'In Use', attachedTo: 'TRK-004' },
  ]

  return (
    <DashboardLayout activePage="fleet">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">🚛 Fleet Management</h1>
          <p className="text-gray-400 mt-1">Monitor and manage your trucks and trailers</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
            📊 Fleet Report
          </button>
          <button className="bg-accent-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
            + Add Vehicle
          </button>
        </div>
      </div>

      {/* Fleet Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-4 border border-green-500/30">
          <p className="text-green-400 text-sm">Active Trucks</p>
          <p className="text-2xl font-bold text-white mt-1">4</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-xl p-4 border border-yellow-500/30">
          <p className="text-yellow-400 text-sm">Idle</p>
          <p className="text-2xl font-bold text-white mt-1">1</p>
        </div>
        <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl p-4 border border-red-500/30">
          <p className="text-red-400 text-sm">Maintenance</p>
          <p className="text-2xl font-bold text-white mt-1">1</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-4 border border-blue-500/30">
          <p className="text-blue-400 text-sm">Trailers</p>
          <p className="text-2xl font-bold text-white mt-1">4</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-4 border border-purple-500/30">
          <p className="text-purple-400 text-sm">ELD Connected</p>
          <p className="text-2xl font-bold text-white mt-1">5</p>
        </div>
        <div className="bg-gradient-to-br from-accent-gold/20 to-yellow-600/10 rounded-xl p-4 border border-accent-gold/30">
          <p className="text-accent-gold text-sm">Fleet Value</p>
          <p className="text-2xl font-bold text-white mt-1">$1.2M</p>
        </div>
      </div>

      {/* Trucks Table */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden mb-8">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">🚛 Trucks</h2>
          <div className="flex gap-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded ${viewMode === 'grid' ? 'bg-accent-gold text-black' : 'bg-gray-700 text-white'}`}
            >
              Grid
            </button>
            <button 
              onClick={() => setViewMode('table')}
              className={`px-3 py-1 rounded ${viewMode === 'table' ? 'bg-accent-gold text-black' : 'bg-gray-700 text-white'}`}
            >
              Table
            </button>
          </div>
        </div>

        {viewMode === 'table' ? (
          <table className="w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="text-left px-6 py-3 text-gray-300 font-medium">Unit ID</th>
                <th className="text-left px-6 py-3 text-gray-300 font-medium">Vehicle</th>
                <th className="text-left px-6 py-3 text-gray-300 font-medium">Status</th>
                <th className="text-left px-6 py-3 text-gray-300 font-medium">Driver</th>
                <th className="text-left px-6 py-3 text-gray-300 font-medium">Location</th>
                <th className="text-left px-6 py-3 text-gray-300 font-medium">ELD</th>
                <th className="text-left px-6 py-3 text-gray-300 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {trucks.map((truck) => (
                <tr key={truck.id} className="border-t border-gray-700 hover:bg-gray-700/50">
                  <td className="px-6 py-4 text-accent-gold font-mono font-bold">{truck.id}</td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-white font-medium">{truck.name}</p>
                      <p className="text-gray-400 text-sm">{truck.year} • {truck.mileage.toLocaleString()} mi</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      truck.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                      truck.status === 'Idle' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {truck.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white">{truck.driver}</td>
                  <td className="px-6 py-4 text-gray-300">{truck.location}</td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-2 ${
                      truck.eld === 'Connected' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        truck.eld === 'Connected' ? 'bg-green-400' : 'bg-red-400'
                      }`}></span>
                      {truck.eld}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-accent-gold hover:underline">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trucks.map((truck) => (
              <div key={truck.id} className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-accent-gold transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-accent-gold font-mono font-bold">{truck.id}</p>
                    <p className="text-white font-medium">{truck.name}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    truck.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    truck.status === 'Idle' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {truck.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Driver</span>
                    <span className="text-white">{truck.driver}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location</span>
                    <span className="text-white">{truck.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mileage</span>
                    <span className="text-white">{truck.mileage.toLocaleString()} mi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next Service</span>
                    <span className="text-orange-400">{truck.nextService}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Trailers */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold text-white">📦 Trailers</h2>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {trailers.map((trailer) => (
            <div key={trailer.id} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-start mb-2">
                <p className="text-accent-gold font-mono font-bold">{trailer.id}</p>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  trailer.status === 'Available' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {trailer.status}
                </span>
              </div>
              <p className="text-white font-medium">{trailer.type}</p>
              <p className="text-gray-400 text-sm">{trailer.length}</p>
              {trailer.attachedTo && (
                <p className="text-gray-400 text-sm mt-2">Attached: {trailer.attachedTo}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
