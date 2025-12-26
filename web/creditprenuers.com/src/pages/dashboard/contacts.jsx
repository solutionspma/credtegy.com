'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const contacts = [
    { id: 1, name: 'Marcus Johnson', email: 'marcus@email.com', phone: '(404) 555-1234', status: 'Active', stage: 'Credit Analysis', score: 620, created: '2024-12-20' },
    { id: 2, name: 'Keisha Williams', email: 'keisha@email.com', phone: '(678) 555-5678', status: 'Active', stage: 'Funding Ready', score: 720, created: '2024-12-18' },
    { id: 3, name: 'Darnell Brown', email: 'darnell@email.com', phone: '(770) 555-9012', status: 'Lead', stage: 'New Lead', score: 540, created: '2024-12-25' },
    { id: 4, name: 'Tanya Davis', email: 'tanya@email.com', phone: '(404) 555-3456', status: 'Active', stage: 'Dispute Progress', score: 680, created: '2024-12-15' },
    { id: 5, name: 'Jerome Smith', email: 'jerome@email.com', phone: '(678) 555-7890', status: 'Funded', stage: 'Funded', score: 750, created: '2024-12-10' },
    { id: 6, name: 'Angela Thompson', email: 'angela@email.com', phone: '(770) 555-2345', status: 'Lead', stage: 'Consultation', score: 580, created: '2024-12-24' },
  ]

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === 'all' || contact.status.toLowerCase() === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <DashboardLayout activePage="contacts">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">👥 Contacts</h1>
          <p className="text-gray-400 mt-1">Manage your clients and leads</p>
        </div>
        <button className="bg-accent-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
          + Add Contact
        </button>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-6">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 min-w-[200px] px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-gold"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-gold"
          >
            <option value="all">All Status</option>
            <option value="lead">Lead</option>
            <option value="active">Active</option>
            <option value="funded">Funded</option>
          </select>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="text-left px-6 py-4 text-gray-300 font-medium">Name</th>
              <th className="text-left px-6 py-4 text-gray-300 font-medium">Contact</th>
              <th className="text-left px-6 py-4 text-gray-300 font-medium">Status</th>
              <th className="text-left px-6 py-4 text-gray-300 font-medium">Stage</th>
              <th className="text-left px-6 py-4 text-gray-300 font-medium">Credit Score</th>
              <th className="text-left px-6 py-4 text-gray-300 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr key={contact.id} className="border-t border-gray-700 hover:bg-gray-700/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold">
                      {contact.name.charAt(0)}
                    </div>
                    <span className="text-white font-medium">{contact.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-white text-sm">{contact.email}</p>
                    <p className="text-gray-400 text-sm">{contact.phone}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    contact.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    contact.status === 'Funded' ? 'bg-accent-gold/20 text-accent-gold' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {contact.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-300">{contact.stage}</td>
                <td className="px-6 py-4">
                  <span className={`font-bold ${
                    contact.score >= 700 ? 'text-green-400' :
                    contact.score >= 600 ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {contact.score}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-600 rounded transition-colors text-gray-400 hover:text-white">
                      👁️
                    </button>
                    <button className="p-2 hover:bg-gray-600 rounded transition-colors text-gray-400 hover:text-white">
                      ✏️
                    </button>
                    <button className="p-2 hover:bg-gray-600 rounded transition-colors text-gray-400 hover:text-white">
                      📧
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}
