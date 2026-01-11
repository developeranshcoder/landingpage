import React from 'react'
import { CheckCircle, X } from 'lucide-react'

export default function Toast({ message, onClose }) {
  if (!message) return null

  return (
    <div className="fixed right-6 bottom-6 bg-white shadow-lg rounded-lg px-4 py-3 flex items-start gap-3 z-50">
      <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
      <div>
        <div className="font-semibold">{message}</div>
        <div className="text-xs text-gray-500">Action completed</div>
      </div>
      <button className="ml-4 text-gray-500" onClick={onClose}>
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
