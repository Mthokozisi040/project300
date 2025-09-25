export default function HeroSectionRugby() {
  return (
    <section 
      className="relative bg-[url('/gallery1soccer.jpg')] bg-cover bg-center text-white py-20 text-center h-[450px] w-full"
      style={{ backgroundImage: "url('/gallery1soccer.jpg')" }}
    >
      <div className="max-w-4xl mx-auto px-5">
        <span className="text-sm">Sports • Team Activity</span>
        <h1 className="text-4xl font-bold mt-2 mb-4 text-shadow">Rugby Championship 2025</h1>
        <p className="text-xl opacity-90 mb-8">Join our competitive rugby team and showcase your skills. Open to all skill levels.</p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-5 flex-wrap justify-center">
        <div className="bg-white bg-opacity-95 p-5 rounded-lg w-64 shadow-lg text-left">
          <h3 className="text-lg font-semibold mb-2 text-[#493cd4]">Trial Requirements</h3>
          <p className="text-sm text-gray-700">Open to accepted students<br />Time: 13:00pm to 17:00pm<br />Location:....</p>
        </div>
        <div className="bg-white bg-opacity-95 p-5 rounded-lg w-64 shadow-lg text-left">
          <h3 className="text-lg font-semibold mb-2 text-[#493cd4]">Practice Schedule</h3>
          <p className="text-sm text-gray-700">Mon, Tue, Thur<br />Time: 17:00pm to 19:00pm<br />Location: Arts Block D2</p>
        </div>
      </div>
    </section>
  );
}