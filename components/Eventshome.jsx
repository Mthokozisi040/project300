import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaCircle } from 'react-icons/fa'

const Eventshome = () => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Event Highlights</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover our featured events designed to enrich your student experience and create unforgettable memories.
          </p>
        </div>

        {/* Event Highlight 1 */}
        <div className="flex flex-col md:flex-row gap-0 bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Campus festival"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Vertical Divider with Bullet */}
          <div className="hidden md:flex items-center justify-center relative bg-gray-100 w-1">
            <div className="absolute h-full w-px bg-gray-300"></div>
            <div className="absolute z-10 bg-white p-1 rounded-full border-4 border-blue-400">
              <FaCircle className="text-blue-500 text-xs" />
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                Featured Event
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Annual Campus Festival</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2 text-blue-500" />
                <span>November 15, 2023</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaClock className="mr-2 text-blue-500" />
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                <span>University Main Quad</span>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Join us for our biggest event of the year! Live music, food trucks, games, and activities for all students.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-6 py-3 rounded-lg font-bold">Register Now</a>
              <a href="#" className="border-2 border-gray-300 hover:border-blue-400 transition-colors text-gray-700 px-6 py-3 rounded-lg font-bold">Learn More</a>
            </div>
          </div>
        </div>

        {/* Event Highlight 2 (Reversed) */}
        <div className="flex flex-col md:flex-row gap-0 bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          {/* Details Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center order-2 md:order-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                Professional Development
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Career Preparation Workshop</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2 text-blue-500" />
                <span>November 22, 2023</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaClock className="mr-2 text-blue-500" />
                <span>2:00 PM - 4:30 PM</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                <span>Business Building Room 203</span>
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              Get ready for your future career with resume building, interview techniques, and networking strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 transition-colors text-white px-6 py-3 rounded-lg font-bold">Register Now</a>
              <a href="#" className="border-2 border-gray-300 hover:border-blue-500 transition-colors text-gray-700 px-6 py-3 rounded-lg font-bold">Learn More</a>
            </div>
          </div>
          
          {/* Vertical Divider with Bullet */}
          <div className="hidden md:flex items-center justify-center relative bg-gray-100 w-1 order-1 md:order-2">
            <div className="absolute h-full w-px bg-gray-300"></div>
            <div className="absolute z-10 bg-white p-1 rounded-full border-4 border-blue-400">
              <FaCircle className="text-blue-500 text-xs" />
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 order-3">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Career workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-8">
          <a href="/events" className="inline-block bg-gray-800 transition-colors text-white px-8 py-3 rounded-lg font-bold text-lg" style={{ backgroundColor: 'rgba(0, 47, 104, 1)' }}>
            View All Events
          </a>
        </div>
      </div>
    </section>
  )
};

export default Eventshome;