const RegistrationForm = () => {
  return (
    <section className="max-w-4xl mx-auto my-16 px-5 py-10 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#3c90d4]">Join the Championship</h2>
      <form className="flex flex-wrap gap-5">
        <div className="flex-1 min-w-[250px]">
          <label htmlFor="name" className="block font-bold mb-1">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="surname" className="block font-bold mb-1">Surname:</label>
          <input 
            type="text" 
            id="surname" 
            name="surname" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="gender" className="block font-bold mb-1">Gender:</label>
          <select 
            id="gender" 
            name="gender" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">-- Select Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="student-number" className="block font-bold mb-1">Student Number:</label>
          <input 
            type="text" 
            id="student-number" 
            name="student_number" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="id-number" className="block font-bold mb-1">ID Number:</label>
          <input 
            type="text" 
            id="id-number" 
            name="id_number" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="course" className="block font-bold mb-1">Course:</label>
          <select 
            id="course" 
            name="course" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">-- Select Course --</option>
            <option value="Diploma ICT">Diploma ICT</option>
            <option value="BA Development Studies">BA Development Studies</option>
            <option value="BEd">Bachelor of Education</option>
          </select>
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="year" className="block font-bold mb-1">Year of Study:</label>
          <select 
            id="year" 
            name="year" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">-- Select Year --</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="contact" className="block font-bold mb-1">Contact Number:</label>
          <input 
            type="text" 
            id="contact" 
            name="contact" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="medical-aid" className="block font-bold mb-1">Medical Aid Scheme:</label>
          <input 
            type="text" 
            id="medical-aid" 
            name="medical_aid" 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="scheme-number" className="block font-bold mb-1">Scheme Number:</label>
          <input 
            type="text" 
            id="scheme-number" 
            name="scheme_number" 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="next-of-kin" className="block font-bold mb-1">Next of Kin:</label>
          <input 
            type="text" 
            id="next-of-kin" 
            name="next_of_kin" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex-1 min-w-[250px]">
          <label htmlFor="next-of-kin-contact" className="block font-bold mb-1">Next of Kin Contact:</label>
          <input 
            type="text" 
            id="next-of-kin-contact" 
            name="next_of_kin_contact" 
            required 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button 
          type="submit" 
          className="mt-8 px-5 py-3 bg-[#3ca4d4] text-white rounded-lg mx-auto hover:bg-[#b13266] transition-colors"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;