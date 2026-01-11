import React from 'react'

const STEPS = [
  { title: 'Q1 - Foundation', desc: 'Add mailboxes, OAuth, and SMTP flows.' },
  { title: 'Q2 - Automation', desc: 'Warmup flows, templates, and AI replies.' },
  { title: 'Q3 - Analytics', desc: 'Charts, export, and better reporting.' },
  { title: 'Q4 - Scale', desc: 'Team workspaces and multi-accounts.' },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Product Roadmap</h2>
        <p className="mt-2 text-gray-600">Planned milestones for the product.</p>

        <div className="mt-8 space-y-6">
          {STEPS.map((s, i) => (
            <div key={s.title} className="flex gap-6 items-start">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">{i+1}</div>
              <div>
                <div className="font-semibold">{s.title}</div>
                <div className="text-sm text-gray-600">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
