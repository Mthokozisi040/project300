import Image from 'next/image'

const Activitieshome = () => {
  return (
    <section className="activities max-w-6xl mx-auto py-10 px-5 font-sans">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10 text-gray-800">
        Unlock Your Potential Through Engaging Co-Curricular Activities at Our University
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
          <Image src="/friends.jpg" alt="Activity" width={405} height={240} className="rounded mb-4" />
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Enhance Your Skills and Build Lifelong Friendships with Our Activities</h3>
          <p className="mb-4 text-gray-600">Participating in co-curricular activities fosters personal growth and teamwork.</p>
          <a href="#" className="inline-block bg-blue-900 text-white px-4 py-2 rounded font-bold">Explore</a>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
          <Image src="/slide1.jpg" alt="Activity" width={405} height={240} className="rounded mb-4" />
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Gain Real-World Experience and Boost Your Confidence with Our Programs</h3>
          <p className="mb-4 text-gray-600">Our activities provide hands-on experience that employers value.</p>
          <a href="#" className="inline-block bg-blue-900 text-white px-4 py-2 rounded font-bold">Join</a>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow hover:-translate-y-1 transition">
          <Image src="/discover.jpg" alt="Activity" width={405} height={240} className="rounded mb-4" />
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Discover New Interests and Talents Through Diverse Co-Curricular Opportunities</h3>
          <p className="mb-4 text-gray-600">Explore a variety of activities that cater to all interests.</p>
          <a href="#" className="inline-block bg-blue-900 text-white px-4 py-2 rounded font-bold">Apply</a>
        </div>
      </div>
    </section>
  )
};

export default Activitieshome;