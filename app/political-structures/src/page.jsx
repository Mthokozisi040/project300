"use client";
import { useState, useEffect } from 'react';
import { FaSearch, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaCheckCircle, FaEnvelope, FaPhone, FaYoutube } from 'react-icons/fa';
import { SiTiktok, SiGmail } from 'react-icons/si';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const slides = [
  {
    src: "/slide1.jpg",
    caption: "2024/25 SRC Executive Committee",
  },
  {
    src: "/slide3.jpg",
    caption: "Engaging with Student Community",
  },
  {
    src: "/slide2.jpg",
    caption: "Organizing Campus Activities",
  },
  {
    src: "/slide4.jpg",
    caption: "Meeting with University Management",
  },
];

const committeeMembers = [
  {
    img: "/president.jpg",
    name: "Prosper Chiloane",
    role: "SRC President",
    email: "srcpresident@ump.ac.za",
    phone: "068 197 3134",
    concern: "Emergencies",
  },
  {
    img: "/SG.png",
    name: "Olive Vilakazi",
    role: "Secretary General",
    email: "srcsecretary@ump.ac.za",
    phone: "076 763 0821",
    concern: "General Inquiries",
  },
  {
    img: "/T.png",
    name: "Philani Mabena",
    role: "Treasurer",
    email: "srctreasurer@ump.ac.za",
    phone: "073 729 6132",
    concern: "Funding, Financial Aid",
  },
  {
    img: "/AO.png",
    name: "Sindy Ramaditse",
    role: "Academic Officer",
    email: "srcacadofficer@ump.ac.za",
    phone: "079 256 3562",
    concern: "Academic, Registration",
  },
  {
    img: "/Deputy president.png",
    name: "Nokwanda Mbatha",
    role: "Deputy Chair",
    email: "crcdepchair.mbombela@ump.ac.za",
    phone: "076 302 4320",
    concern: "Accommodation",
  },
  {
    img: "/SO.png",
    name: "Mr. Tshepo Mahlangu",
    role: "Sports Officer",
    email: "srcsportofficer@ump.ac.za",
    phone: "076 568 0292",
    concern: "Sports, Recreation",
  },
  {
    img: "/Social office.png",
    name: "Ms. Nandi Dlamini",
    role: "Social Officer",
    email: "srcprojofficer@ump.ac.za",
    phone: "062 043 2360",
    concern: "Societies, OBV, Social Issues",
  },
];

export default function SrcPage() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Slideshow functionality
  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  function plusSlides(n) {
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let newIndex;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { newIndex = 1 }
    else if (n < 1) { newIndex = slides.length }
    else { newIndex = n }
    
    setSlideIndex(newIndex);
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add("hidden");
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("bg-white");
      dots[i].classList.add("bg-white/50");
    }
    
    if (slides[newIndex-1]) slides[newIndex-1].classList.remove("hidden");
    if (dots[newIndex-1]) {
      dots[newIndex-1].classList.remove("bg-white/50");
      dots[newIndex-1].classList.add("bg-white");
    }
  }

  function submitContactForm(e) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative bg-center bg-cover text-white text-center py-20 h-[450px] w-full"
        style={{ backgroundImage: "url('/srcpic.jpg')" }}
      >
        <div className="max-w-4xl mx-auto">
          <span className="activity-tag block mb-4">Student Governance • Leadership</span>
          <h1 className="text-4xl mb-4 drop-shadow">University of Mpumalanga SRC</h1>
          <p className="text-xl opacity-90 mb-8">The official student representative council advocating for student rights and welfare.</p>
        </div>
        <div className="flex gap-5 absolute bottom-2.5 left-1/2 -translate-x-1/2">
          <div className="bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
            <h3 className="mb-2.5 text-lg text-[#493cd4]">Elections</h3>
            <p className="text-sm text-gray-800">Annual elections held in August<br />All registered students can vote<br />Independent Electoral Commission oversees process</p>
          </div>
          <div className="bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
            <h3 className="mb-2.5 text-lg text-[#493cd4]">Office Hours</h3>
            <p className="text-sm text-gray-800">Monday to Friday<br />Time: 09:00am to 16:30pm<br />Location: Student Center, Building 7, First Floor</p>
          </div>
        </div>
      </section>

      {/* Combined About & Gallery Section */}
      <section className="max-w-6xl mx-auto my-16 px-5 flex flex-wrap gap-10">
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-2xl mb-5 text-gray-800">About UMP SRC</h2>
          <p className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5">
            The Student Representative Council (SRC) is the highest student governance structure at the University of Mpumalanga. Elected annually by the student body, the SRC serves as the official voice of students, representing their interests to university management and external stakeholders. Our mandate includes advocating for student rights, improving campus life, and ensuring quality education for all.
          </p>
          <p className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5">
            The UMP SRC consists of democratically elected students from various portfolios including President, Secretary General, Treasurer, Academic Officer, and more. We work closely with university administration to address student concerns, organize student activities, and facilitate communication between students and management. The SRC also plays a key role in policy discussions affecting student life.
          </p>
          <p className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5">
            As your elected representatives, we are committed to transparency, accountability, and effective leadership. Our office is open to all students for consultation, grievances, or suggestions. We encourage active student participation in university governance and decision-making processes that affect the student community.
          </p>
        </div>

        {/* Fixed Slideshow Section */}
        <div className="flex-1 min-w-[300px] relative rounded-lg overflow-hidden shadow-xl h-[400px]">
          {/* Slideshow items */}
          {slides.map((slide, idx) => (
            <div key={idx} className={`slide ${idx === 0 ? '' : 'hidden'} absolute inset-0 w-full h-full`}>
              <img 
                src={slide.src} 
                alt={slide.caption} 
                className="w-full h-full object-cover object-center" 
              />
              <div className="slide-caption absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">{slide.caption}</div>
            </div>
          ))}

          {/* Navigation arrows */}
          <button 
            className="prev absolute top-1/2 left-0 -translate-y-1/2 px-4 py-4 text-white font-bold text-xl cursor-pointer bg-black/30 rounded-r hover:bg-black/80 transition duration-300"
            onClick={() => plusSlides(-1)}
          >
            &#10094;
          </button>
          <button 
            className="next absolute top-1/2 right-0 -translate-y-1/2 px-4 py-4 text-white font-bold text-xl cursor-pointer bg-black/30 rounded-l hover:bg-black/80 transition duration-300"
            onClick={() => plusSlides(1)}
          >
            &#10095;
          </button>

          {/* Dots navigation */}
          <div className="dots-container absolute bottom-2.5 left-0 right-0 text-center">
            {slides.map((_, idx) => (
              <span 
                key={idx}
                className={`dot inline-block w-3 h-3 mx-1.5 rounded-full cursor-pointer transition-colors duration-300 ${idx === 0 ? 'bg-white' : 'bg-white/50'}`}
                onClick={() => currentSlide(idx + 1)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* SRC Nomination Section */}
      <section className="bg-gray-100 py-12 mt-0">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-center text-[#232654] text-2xl font-bold mb-6">SRC Elections 2025 - Nomination</h2>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="font-bold text-[#232654] mb-2">Dear Student,</p>
            <p>This is your last chance to submit your nomination to contest the 2025 UMP SRC Elections. Nominations close today, Friday, 01 August at 16:30. If you're ready to lead, act now. There will be no extensions granted.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Submit your nomination:</h3>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="https://ump.emca.co.za" target="_blank" className="bg-[#232654] text-white px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-[#1d1e3a] transition">
                <FaEnvelope className="mr-2" /> Elections Platform
              </a>
              <a href="https://www.youtube.com/watch?v=-8NScj2CnLU" target="_blank" className="bg-red-600 text-white px-6 py-3 rounded font-bold flex items-center gap-2 hover:bg-red-800 transition">
                <FaYoutube className="mr-2" /> Video Instructions
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mb-6">
            <div className="flex-1 min-w-[220px]">
              <h3 className="font-bold text-[#232654] mb-2">EMCA Contact Details:</h3>
              <p className="flex items-center gap-2 mb-2"><FaEnvelope className="text-[#232654]" /> Email: <a href="mailto:umpsrc2025@emca.co.za" className="text-blue-600">umpsrc2025@emca.co.za</a></p>
              <p className="flex items-center gap-2 mb-2"><FaPhone className="text-[#232654]" /> Toll-free: 080 068 6387</p>
              <p className="flex items-center gap-2 mb-2"><FaWhatsapp className="text-[#232654]" /> WhatsApp: 061 821 3133</p>
            </div>
            <div className="flex-1 min-w-[220px]">
              <h3 className="font-bold text-[#232654] mb-2">CRC Committee Contacts:</h3>
              <p className="flex items-center gap-2 mb-2"><FaEnvelope className="text-[#232654]" /> <a href="mailto:mduduzi.nkambule@ump.ac.za" className="text-blue-600">mduduzi.nkambule@ump.ac.za</a></p>
              <p className="flex items-center gap-2 mb-2"><FaEnvelope className="text-[#232654]" /> <a href="mailto:euphodia.mashego@ump.ac.za" className="text-blue-600">euphodia.mashego@ump.ac.za</a></p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="font-bold text-[#232654] text-lg">Lead the change you want to see.</p>
            <div className="flex justify-center gap-3 mt-2">
              <span className="bg-blue-100 text-[#232654] px-3 py-1 rounded-full text-sm font-semibold">#UMPLeads</span>
              <span className="bg-blue-100 text-[#232654] px-3 py-1 rounded-full text-sm font-semibold">#SRC2025</span>
              <span className="bg-blue-100 text-[#232654] px-3 py-1 rounded-full text-sm font-semibold">#BeTheChange</span>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section className="committee-section max-w-5xl mx-auto my-12 px-5">
        <h2 className="text-center text-2xl mb-7 text-[#3c41d4]">Executive Committee 2024/25</h2>
        <div className="committee-members flex gap-5 justify-center flex-wrap">
          {committeeMembers.map((member, idx) => (
            <div key={idx} className="member-card bg-white border border-gray-300 rounded-lg w-72 p-5 shadow-md text-center">
              <img src={member.img} alt={member.role} className="w-20 h-20 rounded-full mb-4 mx-auto object-cover border-4 border-[#232654]" />
              <h4 className="mb-2.5">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="text-sm text-gray-600">{member.email}</p>
              <p className="text-sm text-gray-600">{member.phone}</p>
              <p className="text-sm text-gray-600"><strong>Concern:</strong> {member.concern}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="max-w-5xl mx-auto my-10">
        <h2 className="text-center text-[#232654] text-2xl font-bold mb-8">SRC Office Consultation Hours</h2>
        <div className="bg-gray-50 rounded-lg shadow p-8">
          <div className="font-bold text-lg text-[#232654] text-center mb-6">UNIVERSITY OF MPUMALANGA SRC</div>
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="bg-[#232654] text-white">
                <th className="py-2 px-3">DAY/TIME</th>
                <th className="py-2 px-3">9H00 - 10H00</th>
                <th className="py-2 px-3">11H00 - 15H00</th>
                <th className="py-2 px-3">15H00 - 15H00</th>
                <th className="py-2 px-3">15H00 - 16H30</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-bold">MON</td>
                <td>---</td>
                <td>TREASURER</td>
                <td>SECRETARY-GENERAL</td>
                <td>DEPUTY CHAIR</td>
              </tr>
              <tr>
                <td className="font-bold">TUE</td>
                <td>SECRETARY-GENERAL</td>
                <td>PRESIDENT</td>
                <td>PRESIDENT</td>
                <td>ACADEMIC OFFICER</td>
              </tr>
              <tr>
                <td className="font-bold">WED</td>
                <td>SECRETARY-GENERAL</td>
                <td>SPORTS OFFICER</td>
                <td>SOCIAL OFFICER</td>
                <td>---</td>
              </tr>
              <tr>
                <td className="font-bold">THU</td>
                <td>DEPUTY CHAIR</td>
                <td>---</td>
                <td>SPORTS OFFICER</td>
                <td>SOCIAL OFFICER</td>
              </tr>
              <tr>
                <td className="font-bold">FRI</td>
                <td>SECRETARY-GENERAL</td>
                <td>---</td>
                <td>ACADEMIC OFFICER</td>
                <td>---</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center text-gray-600">
            <strong>Location:</strong> Mbombela Campus, Building 7, First Floor
          </div>
        </div>
      </section>

      {/* Media Platforms Section */}
      <section className="media-platforms max-w-6xl mx-auto mt-10 px-5">
        <h2 className="text-center text-xl mb-4 text-[#232654]">UMP SRC OFFICIAL PUBLICATION PLATFORMS</h2>
        <p className="text-center mb-6 text-gray-600">Stay updated on news, announcements by following us:</p>
        <div className="platform-grid flex justify-center gap-8 flex-wrap">
          {/* Facebook */}
          <a href="https://www.facebook.com/share/1BbkFKa9Um/?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer" className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <FaFacebook className="platform-icon h-10 w-10 mb-2.5" style={{ filter: "invert(0.3) sepia(1) saturate(5) hue-rotate(190deg)" }} />
            <div className="platform-name font-bold text-lg text-[#232654]">Facebook</div>
            <div className="platform-title text-gray-600">UniMpumalanga SRC</div>
            <div className="platform-handle text-gray-500 break-all">facebook.com/ump-src</div>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/unimpumalanga.src/profilecard/?igsh=YnQ0Y3U4MHIzOG5z" target="_blank" rel="noopener noreferrer" className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <FaInstagram className="platform-icon h-10 w-10 mb-2.5" style={{ filter: "invert(0.3) sepia(1) saturate(5) hue-rotate(320deg)" }} />
            <div className="platform-name font-bold text-lg text-[#232654]">Instagram</div>
            <div className="platform-title text-gray-600">unimpumalanga.src</div>
            <div className="platform-handle text-gray-500 break-all">@unimpumalanga.src</div>
          </a>

          {/* WhatsApp */}
          <a href="https://whatsapp.com/channel/0029VaywWNA1t90hPRh1mE0o" target="_blank" rel="noopener noreferrer" className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <FaWhatsapp className="platform-icon h-10 w-10 mb-2.5" style={{ filter: "invert(0.3) sepia(1) saturate(5) hue-rotate(90deg)" }} />
            <div className="platform-name font-bold text-lg text-[#232654]">WhatsApp Channel</div>
            <div className="platform-title text-gray-600">UniMpumalanga SRC</div>
            <div className="platform-handle text-gray-500 break-all">/channel/0029VaywWNA1t90hPRh1mE0o</div>
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/UMP_SRC" target="_blank" rel="noopener noreferrer" className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <FaTwitter className="platform-icon h-10 w-10 mb-2.5" style={{ filter: "invert(0.3) sepia(1) saturate(5) hue-rotate(210deg)" }} />
            <div className="platform-name font-bold text-lg text-[#232654]">Twitter</div>
            <div className="platform-title text-gray-600">UMP SRC</div>
            <div className="platform-handle text-gray-500 break-all">@UMP_SRC</div>
          </a>

          {/* Email */}
          <a href="mailto:src@ump.ac.za" className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <SiGmail className="platform-icon h-10 w-10 mb-2.5" style={{ filter: "invert(0.3) sepia(1) saturate(5) hue-rotate(0deg)" }} />
            <div className="platform-name font-bold text-lg text-[#232654]">Email</div>
            <div className="platform-title text-gray-600">SRC Office</div>
            <div className="platform-handle text-gray-500 break-all">src@ump.ac.za</div>
          </a>
        </div>
       
      </section>

      {/* Contact Form Section */}
      <section className="form-section max-w-4xl mx-auto my-16 py-10 px-5 bg-[#fefefe] rounded-xl shadow-md">
        <h2 className="text-center text-[#3c90d4] mb-7">Contact the SRC</h2>
        {!formSubmitted ? (
          <form className="choir-form flex flex-wrap gap-5" onSubmit={submitContactForm}>
            <div className="form-group flex-1 min-w-[45%] flex flex-col">
              <label htmlFor="committee-email">Send To (Committee Member):</label>
              <select 
                id="committee-email" 
                name="committee_email" 
                required
                className="p-2.5 border border-gray-300 rounded"
              >
                <option value="">-- Select Email --</option>
                <option value="srcpresident@ump.ac.za">Mr. Prosper Chiloane - SRC President</option>
                <option value="srcsecretary@ump.ac.za">Ms. Olive Vilakazi - Secretary General</option>
                <option value="srctreasurer@ump.ac.za">Mr. Philani Mabena - Treasurer</option>
                <option value="srcacadofficer@ump.ac.za">Ms. Sindy Ramaditse - Academic Officer</option>
                <option value="src@ump.ac.za">General SRC Inquiry</option>
              </select>
            </div>

            <div className="form-group flex-1 min-w-[45%] flex flex-col">
              <label htmlFor="q-name">Your Name:</label>
              <input 
                type="text" 
                id="q-name" 
                name="name" 
                required
                className="p-2.5 border border-gray-300 rounded"
              />
            </div>

            <div className="form-group flex-1 min-w-[45%] flex flex-col">
              <label htmlFor="q-surname">Your Surname:</label>
              <input 
                type="text" 
                id="q-surname" 
                name="surname" 
                required
                className="p-2.5 border border-gray-300 rounded"
              />
            </div>

            <div className="form-group flex-1 min-w-[45%] flex flex-col">
              <label htmlFor="q-student-number">Student Number:</label>
              <input 
                type="text" 
                id="q-student-number" 
                name="student_number" 
                required
                className="p-2.5 border border-gray-300 rounded"
              />
            </div>

            <div className="form-group w-full flex flex-col">
              <label htmlFor="message">Your Message or Question:</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                placeholder="Type your question here..."
                className="p-2.5 border border-gray-300 rounded text-sm resize-y"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="mt-7.5 py-3 px-5 bg-[#3ca4d4] text-white border-none rounded-lg cursor-pointer text-base self-center transition-colors duration-300 hover:bg-[#b13266]"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center min-h-[200px] w-full">
            <div className="text-center p-10">
              <div className="text-emerald-500 text-5xl mb-5 flex justify-center">
                <FaCheckCircle />
              </div>
              <h1 className="text-2xl mb-2.5 text-gray-800 font-bold">Thank You!</h1>
              <p className="text-base text-gray-600">
                Your message has been successfully sent to the SRC.
              </p>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}