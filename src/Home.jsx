import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Index2Sections from './components/Index2Sections'
import Modal from './components/Modal'
import Toast from './components/Toast'
import Accordion from './components/Accordion'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import ScrollTop from './components/ScrollTop'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState('')

  const handleConnect = (msg) => {
    setToast(msg || 'Connected')
    setModalOpen(false)
    setTimeout(() => setToast(''), 3500)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar onOpen={() => setModalOpen(true)} />

      <main>
        <Hero />

        <Index2Sections />

        <Features />

        <section id="visuals" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold">Product Visuals</h3>
          <p className="mt-2 text-gray-600">All public assets with a short title, subtitle and description.</p>

          <div className="mt-8 space-y-6">
            {/** Render each public image as a row with text and side image */}
            {/** Import the data dynamically to keep code clean */}
            {
              /* lazy import so bundler includes file */
            }
            {/** We'll map over the data below through require/import; import at top is preferred but kept inline to minimize churn. */}
            {(() => {
              // static import via require-like pattern
                try {
                // eslint-disable-next-line global-require
                const imgs = require('./data/index2section').default.publicImages
                return imgs.map((it, i) => (
                  <div key={it.src} className={`flex flex-col md:flex-row gap-6 items-center py-6 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'} border-b`}> 
                    <div className="flex-1">
                      <div className="text-sm text-indigo-600 font-semibold">{it.subtitle}</div>
                      <div className="text-xl font-bold mt-1">{it.title}</div>
                      <div className="mt-2 text-gray-600">{it.description}</div>
                    </div>
                    <div className="w-full md:w-56">
                      <img src={it.src} alt={it.title} className="w-full h-40 object-cover rounded-lg shadow" />
                    </div>
                  </div>
                ))
              } catch (e) {
                return <div className="text-sm text-red-500">Unable to load visuals data.</div>
              }
            })()}
          </div>
        </section>

        <section id="faq" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold">FAQ</h3>
          <p className="mt-2 text-gray-600">Common questions about the product.</p>
          <div className="mt-6">
            <Accordion items={[
              { q: 'How do I connect Gmail?', short: 'Use OAuth for Gmail', a: 'Click Connect Gmail, approve OAuth, and your mailbox will be added.' },
              { q: 'What is warmup?', short: 'Sender reputation flow', a: 'Warmup gradually increases sending volume and simulates interactions.' },
              { q: 'How do I verify emails?', short: 'Single or bulk verification', a: 'Use the verifier to check MX records, SMTP responses and remove duplicates.' },
            ]} />
          </div>
        </section>

        <Roadmap />

        <Team />

        <Testimonials />

        <section id="deep-dive" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold">Deep Dive: Analytics</h3>
          <p className="mt-2 text-gray-600">Explore charts, filters, and export options for campaign analytics. (mock UI)</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="font-semibold">Charts</div>
              <div className="mt-2 text-sm text-gray-600">Interactive charts would display opens, clicks, and replies over time.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="font-semibold">Filters</div>
              <div className="mt-2 text-sm text-gray-600">Filter by date range, mailbox, and campaign tags to refine metrics.</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} onConnect={handleConnect} />
      <Toast message={toast} onClose={() => setToast('')} />
    </div>
  )
}
