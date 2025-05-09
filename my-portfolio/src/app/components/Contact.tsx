'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    alert('Message sent!')
  }

  return (
    <section id="contact" className="p-8 bg-black text-white">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Name" className="w-full p-2 bg-gray-800 rounded" onChange={e => setFormData({...formData, name: e.target.value})}/>
        <input placeholder="Email" className="w-full p-2 bg-gray-800 rounded" onChange={e => setFormData({...formData, email: e.target.value})}/>
        <textarea placeholder="Message" className="w-full p-2 bg-gray-800 rounded" onChange={e => setFormData({...formData, message: e.target.value})}/>
        <button type="submit" className="bg-blue-600 px-6 py-2 rounded">Send</button>
      </form>
    </section>
  )
}
