import React from 'react'
import StatsCard from './StatsCard'
import { ShieldCheck, BarChart2, GitMerge } from 'lucide-react'

const FEATURES = [
  { title: 'Stats Cards', desc: 'Real-time metrics for campaigns, contacts, and emails' },
  { title: 'Weekly Chart', desc: 'Visual representation of email sending trends' },
  { title: 'Recent Campaigns', desc: 'Quick access to your latest campaign activities' },
  { title: 'OAuth Integration', desc: 'Connect Gmail and Outlook securely' },
  { title: 'Custom Providers', desc: 'Support Zoho, Yandex, Mail.ru, and custom SMTP' },
  { title: 'Connection Testing', desc: 'Test SMTP and IMAP connections before saving' },
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900">Features</h2>
        <p className="mt-2 text-gray-600">Key capabilities that power your outreach</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, idx) => {
            const Icon = [ShieldCheck, BarChart2, GitMerge, ShieldCheck, BarChart2, GitMerge][idx]
            return (
              <div key={f.title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-indigo-600" />
                  <div className="text-lg font-semibold text-gray-900">{f.title}</div>
                </div>
                <div className="mt-2 text-sm text-gray-600">{f.desc}</div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatsCard title="Total Campaigns" value="128" caption="Active & running" />
          <StatsCard title="Contacts" value="4,512" caption="Organized lists & tags" />
          <StatsCard title="Open Rate" value="36%" caption="Average across campaigns" />
        </div>
      </div>
    </section>
  )
}
