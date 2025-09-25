"use client"
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import { FaCaretDown, FaEnvelope, FaBell, FaUserCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function trackAndFieldPage() {
  const [slideIndex, setSlideIndex] = useState(1);

  // Auto-advance slides
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
    
    if (n > slides.length) { newIndex = 1; }
    else if (n < 1) { newIndex = slides.length; }
    else { newIndex = n; }
    
    setSlideIndex(newIndex);
  }

  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <Navbar/>

      {/* Activity Hero Section */}
      <section className="activity-hero relative bg-[url('/gallery1soccer.jpg')] bg-cover bg-center text-white py-20 text-center h-[450px] w-full">
        <div className="activity-hero-content max-w-4xl mx-auto">
          <span className="activity-tag">Sports • Team Activity</span>
          <h1 className="text-4xl mb-4 text-shadow">UMP Football Team</h1>
          <p className="text-xl mb-8 opacity-90">Join our competitive rugby team and showcase your skills. Open to all skill levels.</p>
        </div>
        <div className="info-boxes flex gap-5 absolute bottom-2.5 left-1/2 transform -translate-x-1/2">
          <div className="info-box bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
            <h3 className="mb-2.5 text-lg text-[#493cd4]">Trial Requirements</h3>
            <p className="text-sm text-[#333]">Open to accepted students<br />Time: 12:30pm to 17:00pm<br />Location: UMP Sports Ground</p>
          </div>
          <div className="info-box bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
            <h3 className="mb-2.5 text-lg text-[#493cd4]">Practice Schedule</h3>
            <p className="text-sm text-[#333]">Mon, Tue, Wed<br />Time: 16:00pm to 19:00pm<br />Location: UMP Sports Ground</p>
          </div>
        </div>
      </section>

      {/* Combined About & Gallery Section */}
      <section className="about-gallery-section max-w-6xl mx-auto my-16 px-5 flex flex-wrap gap-10">
        <div className="about-content flex-1 min-w-[300px]">
          <h2 className="text-2xl mb-5 text-[#333]">UMP Football Team</h2>
          <p className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5">
          The UMP Football Program welcomes players of all genders to join our competitive and inclusive teams. Our program fields men's, women's that compete at various levels within the university sports league. We focus on developing technical skills, tactical understanding, and physical fitness for all our players, regardless of gender identity. Our coaching staff is trained to create a supportive environment where every athlete can thrive and develop their potential. We believe that diversity strengthens our teams and enriches the football experience for everyone involved.
          </p>
          <p className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5">
            Football at UMP emphasizes teamwork, respect, and sportsmanship across all our teams. We provide equal opportunities for training, competition, and leadership development to all players. Our program is committed to maintaining an inclusive environment free from discrimination, where athletes of all gender identities can pursue their passion for the beautiful game. Whether you're an experienced player or new to football, you'll find a welcoming community and competitive opportunities tailored to your skill level.
          </p>
        </div>

        <div className="slideshow-container flex-1 min-w-[300px] relative rounded-lg overflow-hidden shadow-xl">
          {/* Slideshow items */}
          <div className={`slide fade ${slideIndex === 1 ? 'block' : 'hidden'} w-full h-[400px]`}>
            <img 
              src="/gallery2soccer.jpg"  
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-4 text-center">Expert Coaching Available</div>
          </div>

          <div className={`slide fade ${slideIndex === 2 ? 'block' : 'hidden'} w-full h-[400px]`}>
            <img 
              src="/gallery5soccer.jpg"  
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-4 text-center">Practise Sessions</div>
          </div>

          <div className={`slide fade ${slideIndex === 3 ? 'block' : 'hidden'} w-full h-[400px]`}>
            <img 
              src="/gallery3soccer.jpg"  
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-4 text-center">Competitive Match in Progress</div>
          </div>

          <div className={`slide fade ${slideIndex === 4 ? 'block' : 'hidden'} w-full h-[400px]`}>
            <img 
              src="/gallery6soccer.jpg"  
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-4 text-center">Expert Coaching Available</div>
          </div>

          {/* Navigation arrows */}
          <a className="prev absolute top-1/2 -translate-y-1/2 w-auto px-4 text-white font-bold text-xl cursor-pointer bg-[rgba(0,0,0,0.3)] rounded-r hover:bg-[rgba(0,0,0,0.8)]" 
            onClick={() => plusSlides(-1)}>
            <FaChevronLeft />
          </a>
          <a className="next absolute top-1/2 -translate-y-1/2 right-0 w-auto px-4 text-white font-bold text-xl cursor-pointer bg-[rgba(0,0,0,0.3)] rounded-l hover:bg-[rgba(0,0,0,0.8)]" 
            onClick={() => plusSlides(1)}>
            <FaChevronRight />
          </a>

          {/* Dots navigation */}
          <div className="dots-container text-center absolute bottom-2.5 left-0 right-0">
            <span className={`dot cursor-pointer h-3 w-3 mx-1.5 bg-[rgba(255,255,255,0.5)] rounded-full inline-block hover:bg-white ${slideIndex === 1 ? 'bg-white' : ''}`} 
              onClick={() => currentSlide(1)}></span>
            <span className={`dot cursor-pointer h-3 w-3 mx-1.5 bg-[rgba(255,255,255,0.5)] rounded-full inline-block hover:bg-white ${slideIndex === 2 ? 'bg-white' : ''}`} 
              onClick={() => currentSlide(2)}></span>
            <span className={`dot cursor-pointer h-3 w-3 mx-1.5 bg-[rgba(255,255,255,0.5)] rounded-full inline-block hover:bg-white ${slideIndex === 3 ? 'bg-white' : ''}`} 
              onClick={() => currentSlide(3)}></span>
            <span className={`dot cursor-pointer h-3 w-3 mx-1.5 bg-[rgba(255,255,255,0.5)] rounded-full inline-block hover:bg-white ${slideIndex === 4 ? 'bg-white' : ''}`} 
              onClick={() => currentSlide(4)}></span>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM SECTION */}
      <section className="form-section max-w-4xl mx-auto my-16 py-10 px-5 bg-[#fefefe] rounded-xl shadow-lg">
        <h2 className="text-center text-[#3c90d4] mb-8">Join the Team</h2>
        <form className="team-form flex flex-wrap gap-5">
          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="name" className="mb-1.5 font-bold">Name:</label>
            <input type="text" id="name" name="name" required className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="surname" className="mb-1.5 font-bold">Surname:</label>
            <input type="text" id="surname" name="surname" required className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="gender" className="mb-1.5 font-bold">Gender:</label>
            <select id="gender" name="gender" required className="p-2.5 border border-[#ccc] rounded">
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="student-number" className="mb-1.5 font-bold">Student Number:</label>
            <input type="text" id="student-number" name="student_number" required className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="id-number" className="mb-1.5 font-bold">ID Number:</label>
            <input type="text" id="id-number" name="id_number" required className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="course" className="mb-1.5 font-bold">Course:</label>
            <select id="course" name="course" required className="p-2.5 border border-[#ccc] rounded">
              <option value="">-- Select Course --</option>
              <option value="Diploma ICT">Diploma ICT</option>
              <option value="BA Development Studies">BA Development Studies</option>
              <option value="BEd">Bachelor of Education</option>
            </select>
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="year" className="mb-1.5 font-bold">Year of Study:</label>
            <select id="year" name="year" required className="p-2.5 border border-[#ccc] rounded">
              <option value="">-- Select Year --</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="contact" className="mb-1.5 font-bold">Contact Number:</label>
            <input type="text" id="contact" name="contact" required className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="medical-aid" className="mb-1.5 font-bold">Medical Aid Scheme:</label>
            <input type="text" id="medical-aid" name="medical_aid" className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="scheme-number" className="mb-1.5 font-bold">Scheme Number:</label>
            <input type="text" id="scheme-number" name="scheme_number" className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="next-of-kin" className="mb-1.5 font-bold">Next of Kin:</label>
            <input type="text" id="next-of-kin" name="next_of_kin" required className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="next-of-kin-contact" className="mb-1.5 font-bold">Next of Kin Contact:</label>
            <input type="text" id="next-of-kin-contact" name="next_of_kin_contact" required className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <button type="submit" className="mt-8 px-5 py-3 bg-[#3ca4d4] text-white border-none rounded-lg cursor-pointer text-base self-center hover:bg-[#b13266] transition-colors">
            Submit
          </button>
        </form>
      </section>

      {/* COMMITTEE SECTION */}
      <section className="committee-section max-w-5xl mx-auto my-12 px-5">
        <h2 className="text-center text-2xl mb-8 text-[#3c41d4]">Committee Members</h2>
        <div className="committee-members flex gap-5 justify-center flex-wrap">
          <div className="member-card bg-white border border-[#ddd] rounded-lg w-72 p-5 shadow-md text-center">
            <img src="/account icon.png" alt="Chairperson" className="w-20 h-20 rounded-full mb-4 mx-auto" />
            <h4 className="my-2.5 text-[#333]">Nomvula Mokoena</h4>
            <p className="text-sm text-[#777]">Chairperson</p>
          </div>
          <div className="member-card bg-white border border-[#ddd] rounded-lg w-72 p-5 shadow-md text-center">
            <img src="/account icon.png" alt="Secretary" className="w-20 h-20 rounded-full mb-4 mx-auto" />
            <h4 className="my-2.5 text-[#333]">Thabo Mthembu</h4>
            <p className="text-sm text-[#777]">Secretary</p>
          </div>
          <div className="member-card bg-white border border-[#ddd] rounded-lg w-72 p-5 shadow-md text-center">
            <img src="/account icon.png" alt="Events Coordinator" className="w-20 h-20 rounded-full mb-4 mx-auto" />
            <h4 className="my-2.5 text-[#333]">Lerato Khumalo</h4>
            <p className="text-sm text-[#777]">Events Coordinator</p>
          </div>
        </div>
      </section>
      
      {/* STILL HAVE QUESTIONS FORM */}
      <section className="form-section max-w-4xl mx-auto my-16 py-10 px-5 bg-[#fefefe] rounded-xl shadow-lg">
        <h2 className="text-center text-[#3c90d4] mb-8">Still Have Questions?</h2>
        <form className="choir-form flex flex-wrap gap-5" action="mailto:placeholder@example.com" method="post" encType="text/plain">
          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="committee-email" className="mb-1.5 font-bold">Send To (Committee Member):</label>
            <select id="committee-email" name="committee_email" required className="p-2.5 border border-[#ccc] rounded">
              <option value="">-- Select Email --</option>
              <option value="nomvula.mokoena@example.com">Nomvula Mokoena - Chairperson</option>
              <option value="thabo.mthembu@example.com">Thabo Mthembu - Secretary</option>
              <option value="lerato.khumalo@example.com">Lerato Khumalo - Events</option>
            </select>
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="q-name" className="mb-1.5 font-bold">Your Name:</label>
            <input type="text" id="q-name" name="name" required className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="q-surname" className="mb-1.5 font-bold">Your Surname:</label>
            <input type="text" id="q-surname" name="surname" required className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="q-student-number" className="mb-1.5 font-bold">Student Number:</label>
            <input type="text" id="q-student-number" name="student_number" required className="p-2.5 border border-[#ccc] rounded" />
          </div>

          <div className="form-group w-full flex flex-col">
            <label htmlFor="message" className="mb-1.5 font-bold">Your Message or Question:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
              placeholder="Type your question here..." 
              className="p-2.5 rounded border border-[#ccc] text-sm resize-y"
            ></textarea>
          </div>

          <button type="submit" className="mt-8 px-5 py-3 bg-[#3ca4d4] text-white border-none rounded-lg cursor-pointer text-base self-center hover:bg-[#b13266] transition-colors">
            Send Message
          </button>
        </form>
      </section>
      <Footer/>
    </div>
  );
}