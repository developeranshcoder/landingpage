import React from 'react'

const MEMBERS = [
  { name: 'Ava Smith', role: 'Product' , img: '/image31.png'},
  { name: 'Liam Johnson', role: 'Engineering' , img: '/image33.png'},
  { name: 'Noah Brown', role: 'Design' , img: '/image34.png'},
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Team</h2>
        <p className="mt-2 text-gray-600">The people building the product.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {MEMBERS.map(m => (
            <div key={m.name} className="bg-white p-6 rounded-lg shadow text-center">
              <img src={m.img} alt={m.name} className="w-24 h-24 mx-auto rounded-full object-cover" />
              <div className="mt-4 font-semibold">{m.name}</div>
              <div className="text-sm text-gray-500">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
