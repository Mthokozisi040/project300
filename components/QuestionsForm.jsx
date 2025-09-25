const QuestionsForm = () => {
  return (
    <section className="max-w-4xl mx-auto my-16 px-5 py-10 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#3c90d4]">Still Have Questions?</h2>
      <form className="flex flex-wrap gap-5" action="mailto:placeholder@example.com" method="post" encType="text/plain">
        <div className="flex-1 min-w-[250px]">
          <label htmlFor="committee-email" className="block font-bold mb-1">Send To (Committee Member):</label>
          <select 
            id="committee-email" 
            name="committee_email" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">-- Select Email --</option>
            <option value="nomvula.mokoena@example.com">Nomvula Mokoena - Chairperson</option>
            <option value="thabo.mthembu@example.com">Thabo Mthembu - Secretary</option>
            <option value="lerato.khumalo@example.com">Lerato Khumalo - Events</option>
          </select>
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="q-name" className="block font-bold mb-1">Your Name:</label>
          <input 
            type="text" 
            id="q-name" 
            name="name" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="q-surname" className="block font-bold mb-1">Your Surname:</label>
          <input 
            type="text" 
            id="q-surname" 
            name="surname" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="q-student-number" className="block font-bold mb-1">Student Number:</label>
          <input 
            type="text" 
            id="q-student-number" 
            name="student_number" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="w-full">
          <label htmlFor="message" className="block font-bold mb-1">Your Message or Question:</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            required 
            placeholder="Type your question here..." 
            className="w-full p-2 border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="mt-8 px-5 py-3 bg-[#3ca4d4] text-white rounded-lg mx-auto hover:bg-[#b13266] transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default QuestionsForm;