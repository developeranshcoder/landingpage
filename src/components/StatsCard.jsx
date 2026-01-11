import React from 'react'
import { TrendingUp } from 'lucide-react'

export default function StatsCard({ title, value, caption }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow flex flex-col">
      <div className="flex items-center gap-3">
        <TrendingUp className="w-5 h-5 text-indigo-600" />
        <div className="text-sm text-gray-500">{title}</div>
      </div>
      <div className="mt-2 text-3xl font-bold text-gray-900">{value}</div>
      {caption && <div className="mt-2 text-sm text-gray-600">{caption}</div>}
    </div>
  )
}
