export default function Testimonials() {
    return (
      <section id="testimonials" className="p-8 bg-gray-100 text-black">
        <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
        <div className="space-y-6">
          <blockquote className="italic border-l-4 border-blue-500 pl-4">
            “Jad is a web magician! His UI is top-tier.”
            <footer className="text-sm mt-2 text-gray-600">— Happy Client #1</footer>
          </blockquote>
          <blockquote className="italic border-l-4 border-blue-500 pl-4">
            “He delivers on time with beautiful, smooth UX design.”
            <footer className="text-sm mt-2 text-gray-600">— Happy Client #2</footer>
          </blockquote>
        </div>
      </section>
    )
  }
  