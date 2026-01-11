import React from 'react'
import { Zap, Activity } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">Dashboard — Your central command center</h1>
        <p className="mt-4 text-lg text-gray-600">Monitor campaigns, mailboxes, warmup, and analytics — all in one place.</p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="#features" className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow flex items-center gap-2"><Zap className="w-4 h-4"/>Explore Features</a>
          <a href="#contact" className="px-6 py-3 border rounded-md flex items-center gap-2"><Activity className="w-4 h-4"/>Contact Sales</a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-500">Campaigns</div>
            <div className="mt-2 text-2xl font-bold">Manage & Track</div>
            <div className="mt-2 text-sm text-gray-600">Create campaigns, view open rates and replies.</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-500">Mailboxes</div>
            <div className="mt-2 text-2xl font-bold">Connect & Monitor</div>
            <div className="mt-2 text-sm text-gray-600">Connect Gmail, Outlook, or custom SMTP/IMAP providers.</div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm text-gray-500">Warmup</div>
            <div className="mt-2 text-2xl font-bold">Automated</div>
            <div className="mt-2 text-sm text-gray-600">Auto warmup flows to improve deliverability.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
