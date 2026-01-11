import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollTop(){
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    show ? (
      <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="fixed right-6 bottom-6 bg-indigo-600 text-white p-3 rounded-full shadow">
        <ArrowUp className="w-5 h-5"/>
      </button>
    ) : null
  )
}
