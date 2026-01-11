import React from 'react'
import { X, Mail } from 'lucide-react'

export default function Modal({ open, onClose, onConnect }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />

      <div className="bg-white rounded-lg p-6 z-50 w-full max-w-md mx-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Get Started</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-2 text-sm text-gray-600">Connect your mailbox to begin using Unibox features (mock).</p>

        <div className="mt-4">
          <label className="block text-sm text-gray-700">Email</label>
          <input className="mt-1 w-full border rounded p-2" placeholder="you@example.com" />
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button className="px-4 py-2 border rounded" onClick={onClose}>Cancel</button>
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded flex items-center gap-2"
            onClick={() => onConnect && onConnect('Mailbox connected')}
          >
            <Mail className="w-4 h-4" />
            Connect
          </button>
        </div>
      </div>
    </div>
  )
}
