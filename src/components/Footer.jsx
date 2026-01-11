import React from 'react'
import { Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-start gap-6">
        <div>
          <div className="text-xl font-bold text-indigo-600">Unibox</div>
          <div className="mt-2 text-sm text-gray-600">Unified inbox, warmup, and campaign analytics.</div>
        </div>

        <div className="flex gap-8">
          <div>
            <div className="font-semibold text-sm">Product</div>
            <div className="mt-2 text-sm text-gray-600">Features</div>
            <div className="mt-1 text-sm text-gray-600">Pricing</div>
          </div>
          <div>
            <div className="font-semibold text-sm">Company</div>
            <div className="mt-2 text-sm text-gray-600">About</div>
            <div className="mt-1 text-sm text-gray-600">Contact</div>
          </div>
          <div className="flex items-start gap-4">
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900"><Github className="w-5 h-5"/></a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-blue-500"><Twitter className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500">© {new Date().getFullYear()} Unibox — All rights reserved.</div>
      </div>
    </footer>
  )
}
