const Committee = () => {
  const members = [
    {
      name: "Nomvula Mokoena",
      role: "Chairperson",
      img: "/account icon.png"
    },
    {
      name: "Thabo Mthembu",
      role: "Secretary",
      img: "/account icon.png"
    },
    {
      name: "Lerato Khumalo",
      role: "Events Coordinator",
      img: "/account icon.png"
    }
  ];

  return (
    <section className="max-w-4xl mx-auto my-12 px-5">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#3c41d4]">Committee Members</h2>
      <div className="flex flex-wrap justify-center gap-5">
        {members.map((member, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 w-72 shadow-md text-center">
            <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-1 text-gray-800">{member.name}</h4>
            <p className="text-gray-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Committee;