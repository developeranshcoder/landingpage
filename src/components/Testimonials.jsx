import React, { useState } from 'react'

const T = [
  { text: 'Unibox transformed our outreach — open rates increased.', who: 'Acme Co.' },
  { text: 'Easy mailbox setup and great analytics.', who: 'Beta LLC' },
  { text: 'Warmup automation saved our deliverability.', who: 'Growth Inc.' },
]

export default function Testimonials(){
  const [i, setI] = useState(0)
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">What customers say</h2>
        <p className="mt-2 text-gray-600">Real quotes from early testers.</p>

        <div className="mt-8 bg-white p-8 rounded-lg shadow">
          <div className="text-lg">“{T[i].text}”</div>
          <div className="mt-4 text-sm text-gray-500">— {T[i].who}</div>
          <div className="mt-6 flex justify-center gap-3">
            {T.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)} className={`w-3 h-3 rounded-full ${i===idx ? 'bg-indigo-600' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
