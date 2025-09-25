import { FaUsers, FaHandsHelping, FaGlobe } from 'react-icons/fa'

export default function MoreActivities() {
  return (
    <section className="bg-gray-50 py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10">
        Explore a Variety of Engaging Co-Curricular Activities at Our University
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-xl p-8 shadow text-center">
          <FaUsers className="mx-auto text-4xl text-blue-900 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Join Clubs, Sports, and Arts to Enhance Your University Experience</h3>
          <p className="mb-4 text-gray-600">Discover opportunities that enrich your academic journey and personal growth.</p>
          <a href="#" className="text-blue-600 font-bold">Browse &rarr;</a>
        </div>
        <div className="bg-white rounded-xl p-8 shadow text-center">
          <FaHandsHelping className="mx-auto text-4xl text-blue-900 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Get Involved in Leadership and Community Service Initiatives Today</h3>
          <p className="mb-4 text-gray-600">Make a difference while developing essential skills through our programs.</p>
          <a href="#" className="text-blue-600 font-bold">Join &rarr;</a>
        </div>
        <div className="bg-white rounded-xl p-8 shadow text-center">
          <FaGlobe className="mx-auto text-4xl text-blue-900 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Participate in Cultural Events and Workshops to Broaden Your Horizons</h3>
          <p className="mb-4 text-gray-600">Engage with diverse cultures and enhance your global perspective.</p>
          <a href="#" className="text-blue-600 font-bold">Sign Up &rarr;</a>
        </div>
      </div>
    </section>
  )
}