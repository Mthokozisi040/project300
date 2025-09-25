import { FaSearch, FaRegPaperPlane, FaInfoCircle } from 'react-icons/fa'

export default function Guide() {
  return (
    <section className="py-16">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-gray-800">
        Discover and Engage: Your Guide to Co-Curricular Activities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-xl p-8 shadow text-center">
          <FaSearch className="mx-auto text-4xl text-blue-900 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Explore Opportunities: Find Activities That Match Your Interests</h4>
          <p className="mb-4 text-gray-600">Browse through a diverse range of activities tailored for your growth.</p>
          <a href="#" className="text-blue-600 font-bold">Browse &rarr;</a>
        </div>
        <div className="bg-white rounded-xl p-8 shadow text-center">
          <FaRegPaperPlane className="mx-auto text-4xl text-blue-900 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Apply: Take the Next Step Towards Your Co-Curricular Journey</h4>
          <p className="mb-4 text-gray-600">Submit your application and join a vibrant community of learners.</p>
          <a href="#" className="text-blue-600 font-bold">Apply &rarr;</a>
        </div>
        <div className="bg-white rounded-xl p-8 shadow text-center">
          <FaInfoCircle className="mx-auto text-4xl text-blue-900 mb-4" />
          <h4 className="text-lg font-semibold mb-2">Stay Informed: Track Your Applications and Upcoming Events</h4>
          <p className="mb-4 text-gray-600">Keep an eye on your application status and upcoming activities.</p>
          <a href="#" className="text-blue-600 font-bold">Track &rarr;</a>
        </div>
      </div>
    </section>
  )
}