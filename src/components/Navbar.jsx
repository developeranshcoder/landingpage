import React from 'react'
import { Mail, User } from 'lucide-react'

export default function Navbar({ onOpen }) {
  return (
    <nav className="bg-white/60 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-2xl font-extrabold text-indigo-600">
              <Mail className="w-6 h-6 text-indigo-600" />
              <span>Unibox</span>
            </div>
            <div className="hidden md:flex gap-6 text-sm text-gray-700">
              <a href="#features" className="hover:text-indigo-600">Features</a>
              <a href="#warmup" className="hover:text-indigo-600">Warmup</a>
              <a href="#analytics" className="hover:text-indigo-600">Analytics</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => onOpen && onOpen()} className="hidden sm:inline px-4 py-2 bg-indigo-600 text-white rounded-md">Get Started</button>
            <button className="px-3 py-2 border rounded-md text-sm flex items-center gap-2"><User className="w-4 h-4"/> Sign in</button>
          </div>
        </div>
      </div>
    </nav>
  )
}
