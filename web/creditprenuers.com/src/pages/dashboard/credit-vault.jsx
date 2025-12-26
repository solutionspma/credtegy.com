'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout'

export default function CreditVaultPage() {
  const [selectedClient, setSelectedClient] = useState(null)

  const clients = [
    { 
      id: 1, 
      name: 'Marcus Johnson', 
      startScore: 540, 
      currentScore: 680, 
      targetScore: 720,
      bureau: 'TransUnion',
      disputes: { total: 12, pending: 3, won: 7, lost: 2 },
      accounts: [
        { name: 'Capital One', type: 'Collection', status: 'Deleted', amount: 2400 },
        { name: 'Midland Credit', type: 'Collection', status: 'In Dispute', amount: 1850 },
        { name: 'Portfolio Recovery', type: 'Collection', status: 'Pending', amount: 3200 },
        { name: 'AMEX', type: 'Charge Off', status: 'In Dispute', amount: 4500 },
      ]
    },
    { 
      id: 2, 
      name: 'Keisha Williams', 
      startScore: 580, 
      currentScore: 720, 
      targetScore: 750,
      bureau: 'Equifax',
      disputes: { total: 8, pending: 1, won: 6, lost: 1 },
      accounts: [
        { name: 'Discover', type: 'Late Payment', status: 'Deleted', amount: 0 },
        { name: 'Wells Fargo', type: 'Late Payment', status: 'Deleted', amount: 0 },
        { name: 'LVNV Funding', type: 'Collection', status: 'In Dispute', amount: 890 },
      ]
    },
    { 
      id: 3, 
      name: 'Jerome Smith', 
      startScore: 620, 
      currentScore: 750, 
      targetScore: 780,
      bureau: 'Experian',
      disputes: { total: 6, pending: 0, won: 5, lost: 1 },
      accounts: [
        { name: 'US Bank', type: 'Inquiry', status: 'Deleted', amount: 0 },
        { name: 'Chase', type: 'Inquiry', status: 'Deleted', amount: 0 },
        { name: 'Synchrony', type: 'Late Payment', status: 'Deleted', amount: 0 },
      ]
    },
  ]

  const disputeLetterTypes = [
    { name: 'Method of Verification', description: 'Request proof of accuracy' },
    { name: 'Debt Validation', description: 'Demand full documentation' },
    { name: 'Pay for Delete', description: 'Negotiate removal' },
    { name: 'Goodwill Letter', description: 'Request courtesy removal' },
    { name: 'FCRA Violation', description: 'Legal compliance issue' },
    { name: 'Identity Theft', description: 'Fraudulent account claim' },
  ]

  return (
    <DashboardLayout activePage="credit-vault">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">🔐 Credit Vault</h1>
          <p className="text-gray-400 mt-1">Client credit profiles and dispute tracking</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
            📊 Generate Reports
          </button>
          <button className="bg-accent-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
            + New Dispute
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-4 border border-green-500/30">
          <p className="text-green-400 text-sm">Disputes Won</p>
          <p className="text-2xl font-bold text-white mt-1">18</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-xl p-4 border border-yellow-500/30">
          <p className="text-yellow-400 text-sm">Pending</p>
          <p className="text-2xl font-bold text-white mt-1">4</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-4 border border-blue-500/30">
          <p className="text-blue-400 text-sm">Avg Score Increase</p>
          <p className="text-2xl font-bold text-white mt-1">+127</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-4 border border-purple-500/30">
          <p className="text-purple-400 text-sm">Success Rate</p>
          <p className="text-2xl font-bold text-white mt-1">82%</p>
        </div>
        <div className="bg-gradient-to-br from-accent-gold/20 to-yellow-600/10 rounded-xl p-4 border border-accent-gold/30">
          <p className="text-accent-gold text-sm">Debt Removed</p>
          <p className="text-2xl font-bold text-white mt-1">$45K</p>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Client List */}
        <div className="w-80 flex-shrink-0">
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-700">
              <h3 className="text-white font-bold">Client Profiles</h3>
            </div>
            <div className="divide-y divide-gray-700">
              {clients.map((client) => (
                <div 
                  key={client.id}
                  onClick={() => setSelectedClient(client)}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedClient?.id === client.id ? 'bg-gray-700' : 'hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold font-bold">
                      {client.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium">{client.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">{client.startScore}</span>
                        <span className="text-green-400">→</span>
                        <span className="text-green-400 font-bold">{client.currentScore}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Details */}
        <div className="flex-1">
          {selectedClient ? (
            <div className="space-y-6">
              {/* Score Progress */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedClient.name}</h2>
                    <p className="text-gray-400">{selectedClient.bureau}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold text-accent-gold">{selectedClient.currentScore}</p>
                    <p className="text-green-400 text-sm">+{selectedClient.currentScore - selectedClient.startScore} points</p>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Progress to {selectedClient.targetScore}</span>
                    <span className="text-white">{Math.round(((selectedClient.currentScore - selectedClient.startScore) / (selectedClient.targetScore - selectedClient.startScore)) * 100)}%</span>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-accent-gold to-yellow-400 rounded-full"
                      style={{ width: `${((selectedClient.currentScore - selectedClient.startScore) / (selectedClient.targetScore - selectedClient.startScore)) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">{selectedClient.disputes.total}</p>
                    <p className="text-gray-400 text-sm">Total</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-400">{selectedClient.disputes.won}</p>
                    <p className="text-gray-400 text-sm">Won</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-yellow-400">{selectedClient.disputes.pending}</p>
                    <p className="text-gray-400 text-sm">Pending</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-400">{selectedClient.disputes.lost}</p>
                    <p className="text-gray-400 text-sm">Lost</p>
                  </div>
                </div>
              </div>

              {/* Accounts */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="p-4 border-b border-gray-700 flex justify-between items-center">
                  <h3 className="text-white font-bold">Negative Accounts</h3>
                  <button className="text-accent-gold hover:underline text-sm">+ Add Account</button>
                </div>
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="text-left px-4 py-3 text-gray-300 text-sm">Creditor</th>
                      <th className="text-left px-4 py-3 text-gray-300 text-sm">Type</th>
                      <th className="text-left px-4 py-3 text-gray-300 text-sm">Amount</th>
                      <th className="text-left px-4 py-3 text-gray-300 text-sm">Status</th>
                      <th className="text-left px-4 py-3 text-gray-300 text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedClient.accounts.map((account, idx) => (
                      <tr key={idx} className="border-t border-gray-700">
                        <td className="px-4 py-3 text-white">{account.name}</td>
                        <td className="px-4 py-3 text-gray-300">{account.type}</td>
                        <td className="px-4 py-3 text-white">${account.amount.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            account.status === 'Deleted' ? 'bg-green-500/20 text-green-400' :
                            account.status === 'In Dispute' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {account.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <button className="text-accent-gold hover:underline text-sm">Dispute</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Dispute Letter Types */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
                <h3 className="text-white font-bold mb-4">Quick Dispute Letters</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {disputeLetterTypes.map((letter) => (
                    <button key={letter.name} className="p-4 bg-gray-700 rounded-lg text-left hover:bg-gray-600 transition-colors group">
                      <h4 className="text-white font-medium group-hover:text-accent-gold transition-colors">{letter.name}</h4>
                      <p className="text-gray-400 text-sm">{letter.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-12 text-center">
              <p className="text-4xl mb-4">🔐</p>
              <p className="text-gray-400">Select a client to view their credit profile</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
