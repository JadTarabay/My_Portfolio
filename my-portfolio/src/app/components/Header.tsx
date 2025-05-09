'use client'


export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/70 z-50 text-white">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <span className="font-bold text-xl">Jad.Dev</span>
        <ul className="flex gap-6">
          {['Home', 'Work', 'Testimonials', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
