import React from 'react'
import data from '../data/index2section'

const imgs = data.publicImages || []

function Dashboard({ content }) {
  return (
    <section className="py-24 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">{content.heading}</h2>
      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">{content.description}</p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16">
        {content.cards.map((c) => (
          <div key={c.title} className="bg-white rounded-2xl shadow p-8 text-center">
            <div className={`w-20 h-20 mx-auto rounded-full ${c.color} mb-4`}></div>
            <h3 className="font-semibold text-xl">{c.title}</h3>
            <p className="text-gray-600 mt-2">{c.desc}</p>
          </div>
        ))}
      </div>
      {imgs[0] && (
        <div className="mt-8 flex justify-center">
          <img src={imgs[0].src} alt={imgs[0].title} className="w-full max-w-md object-cover rounded-lg shadow" />
        </div>
      )}
    </section>
  )
}

function Mailboxes({ content }) {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center">{content.heading}</h2>
      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">{content.description}</p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16">
        {content.cards.map((c) => (
          <div key={c.title} className="bg-white rounded-2xl p-8 shadow">
            <div className={`w-16 h-16 rounded-full ${c.color} mb-4`}></div>
            <h3 className="font-semibold text-xl">{c.title}</h3>
            <p className="text-gray-600 mt-2">{c.desc}</p>
          </div>
        ))}
      </div>
      {imgs[1] && (
        <div className="mt-8 flex justify-center">
          <img src={imgs[1].src} alt={imgs[1].title} className="w-full max-w-md object-cover rounded-lg shadow" />
        </div>
      )}
    </section>
  )
}

function Campaigns({ content }) {
  return (
    <section className="py-24 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center">{content.heading}</h2>
      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">{content.description}</p>

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16">
        {content.items.map((it) => (
          <div key={it.title} className="bg-white p-6 rounded-xl shadow text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-blue-100 mb-3"></div>
            <h4 className="font-semibold">{it.title}</h4>
          </div>
        ))}
      </div>
      {imgs[2] && (
        <div className="mt-8 flex justify-center">
          <img src={imgs[2].src} alt={imgs[2].title} className="w-full max-w-md object-cover rounded-lg shadow" />
        </div>
      )}
    </section>
  )
}

function Warmup({ content }) {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center">{content.heading}</h2>
      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">{content.description}</p>

      <div className="flex justify-center mt-14">
        {imgs[3] ? (
          <img src={imgs[3].src} alt={imgs[3].title} className="w-64 h-64 object-cover rounded-full" />
        ) : (
          <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">{content.imageText}</span>
          </div>
        )}
      </div>
    </section>
  )
}

function FeatureBlock({ block }) {
  const { title, subtitle, imageLeft = true, bg = '' } = block
  return (
    <section className={`py-28 px-6 ${bg}`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {imageLeft && (
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Feature Image</span>
            </div>
          </div>
        )}

        <div>
          <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{subtitle}</h3>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">{title}</h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">Monitor campaigns, contacts, open rates, replies, and daily sending activity from a single unified dashboard built for scale.</p>
        </div>

        {!imageLeft && (
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Feature Image</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function FinalCTA({ content }) {
  return (
    <section className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{content.heading}</h2>
      <p className="mt-4 text-gray-300 max-w-2xl mx-auto">{content.description}</p>

      <a href="#" className="inline-block mt-8 px-10 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold">{content.ctaText}</a>
    </section>
  )
}

export default function Index2Sections() {
  return (
    <>
      <Dashboard content={data.dashboard} />
      <Mailboxes content={data.mailboxes} />
      <Campaigns content={data.campaigns} />
      <Warmup content={data.warmup} />

      <FinalCTA content={data.finalCTA} />

      {data.featureBlocks.map((b, idx) => (
        <div key={b.title}>
          <FeatureBlock block={b} />
          {imgs[4 + idx] && (
            <div className="max-w-7xl mx-auto px-6 flex justify-center -mt-6 mb-8">
              <img src={imgs[4 + idx].src} alt={imgs[4 + idx].title} className="w-full max-w-lg object-cover rounded-lg shadow" />
            </div>
          )}
        </div>
      ))}
    </>
  )
}
