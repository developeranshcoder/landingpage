import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Accordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <div className="space-y-3">
      {items.map((it, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow">
          <button className="w-full flex justify-between items-center" onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
            <div className="text-left">
              <div className="font-semibold">{it.q}</div>
              <div className="text-sm text-gray-500">{it.short}</div>
            </div>
            <div>{openIdx === idx ? <ChevronUp/> : <ChevronDown/>}</div>
          </button>
          {openIdx === idx && <div className="mt-3 text-sm text-gray-600">{it.a}</div>}
        </div>
      ))}
    </div>
  )
}
