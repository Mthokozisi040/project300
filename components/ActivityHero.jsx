const ActivityHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-900/80 to-blue-900/90 bg-cover bg-center text-white py-20 text-center h-[450px] w-full" 
      style={{ backgroundImage: "url('https://i.abcnewsfe.com/a/a126f5be-59fa-4323-a646-f806f9636242/chess-rf-gty-ml-240809_1723208882223_hpMain_16x9.jpg?w=992')" }}>
      <div className="max-w-4xl mx-auto px-4">
        <span className="text-sm font-medium">Sports • Individual Activity</span>
        <h1 className="text-4xl font-bold mt-4 mb-6">Tennis Championship 2025</h1>
        <p className="text-xl opacity-90 mb-12">Join our competitive chess league and showcase your skills. Open to all skill levels.</p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-5">
        <div className="bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
          <h3 className="text-lg font-semibold mb-2 text-[#493cd4]">Trial Requirements</h3>
          <p className="text-sm text-gray-700">
            Open to accepted students<br />
            Time: 13:00pm to 17:00pm<br />
            Location:....
          </p>
        </div>
        <div className="bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
          <h3 className="text-lg font-semibold mb-2 text-[#493cd4]">Practice Schedule</h3>
          <p className="text-sm text-gray-700">
            Mon, Tue, Thur<br />
            Time: 17:00pm to 19:00pm<br />
            Location: Arts Bloack D2
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActivityHero;