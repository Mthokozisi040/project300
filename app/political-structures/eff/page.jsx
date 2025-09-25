"use client";
import { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function EffPage() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    province: 'mpumalanga',
    amount: '10'
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative bg-center bg-cover text-white text-center py-20 h-[450px] w-full"
        style={{ backgroundImage: "url('/Eff2.jpg')" }}
      >
        <div className="max-w-4xl mx-auto">
          <span className="block mb-4 text-sm font-semibold">Political Party • Student Organization</span>
          <h1 className="text-4xl mb-4 drop-shadow">Economic Freedom Fighters Student Command (EFFSC)</h1>
          <p className="text-xl opacity-90 mb-8">Radical economic transformation through militant student activism and revolutionary politics.</p>
        </div>
        <div className="flex gap-5 absolute bottom-2.5 left-1/2 -translate-x-1/2">
          <div className="bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
            <h3 className="mb-2.5 text-lg text-[#d43c3c]">Membership</h3>
            <p className="text-sm text-gray-800">Open to all UMP students<br />Must support EFFSC principles<br />Annual membership fee: R10</p>
          </div>
          <div className="bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
            <h3 className="mb-2.5 text-lg text-[#d43c3c]">Meeting Schedule</h3>
            <p className="text-sm text-gray-800">Every Wednesday<br />Time: 17:00pm to 19:00pm<br />Location: Great Hall</p>
          </div>
        </div>
      </section>

      {/* Combined About & Gallery Section */}
      <section className="max-w-6xl mx-auto my-16 px-5 flex flex-wrap gap-10">
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-2xl mb-5 text-gray-800">About EFFSC UMP</h2>
          <p className="text-base text-white bg-[rgba(108,0,0,0.9)] p-5 rounded-lg shadow mb-5">
            The Economic Freedom Fighters Student Command (EFFSC) is the militant student wing of the Economic Freedom Fighters (EFF) at the University of Mpumalanga. We are radical, militant and unapologetic in our pursuit of free, decolonized education and the total emancipation of black students from economic oppression. Our branch at UMP is at the forefront of student struggles, fighting against financial exclusion and institutional racism.
          </p>
          <p className="text-base text-white bg-[rgba(108,0,0,0.9)] p-5 rounded-lg shadow mb-5">
            EFFSC UMP organizes political education programs, mass mobilizations, and direct action campaigns to advance student interests. We engage in consistent ideological training to develop revolutionary consciousness among students. Our members participate in national EFFSC structures and contribute to shaping radical education policy in South Africa.
          </p>
          <p className="text-base text-white bg-[rgba(108,0,0,0.9)] p-5 rounded-lg shadow mb-5">
            Our organization is built on the principles of anti-imperialism, anti-racism, and revolutionary socialism. We welcome all students who are committed to the struggle for economic freedom in our lifetime. Through EFFSC, students develop political consciousness, leadership skills, and revolutionary discipline to transform both the university and society at large.
          </p>
        </div>

        {/* Fixed Slideshow Section */}
        <div className="flex-1 min-w-[300px] relative rounded-lg overflow-hidden shadow-xl h-[400px]">
          {/* Slideshow items */}
          <div className="slide hidden absolute inset-0 w-full h-full">
            <img 
              src="/Eff2.jpg" 
              alt="EFFSC" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">EFFSC</div>
          </div>

          <div className="slide hidden absolute inset-0 w-full h-full">
            <img 
              src="/eff pic2.jpg" 
              alt="Revolutionary Leadership" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">Revolutionary Leadership</div>
          </div>

          <div className="slide hidden absolute inset-0 w-full h-full">
            <img 
              src="/eff pic3.jpg" 
              alt="Community Upliftment Program" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">Community Upliftment Program</div>
          </div>

          <div className="slide hidden absolute inset-0 w-full h-full">
            <img 
              src="/EFF-logo-1.jpg" 
              alt="Political" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">Political</div>
          </div>

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
            <span 
              className="dot inline-block w-3 h-3 mx-1.5 bg-white rounded-full cursor-pointer transition-colors duration-300" 
              onClick={() => currentSlide(1)}
            ></span>
            <span 
              className="dot inline-block w-3 h-3 mx-1.5 bg-white/50 rounded-full cursor-pointer transition-colors duration-300" 
              onClick={() => currentSlide(2)}
            ></span>
            <span 
              className="dot inline-block w-3 h-3 mx-1.5 bg-white/50 rounded-full cursor-pointer transition-colors duration-300" 
              onClick={() => currentSlide(3)}
            ></span>
            <span 
              className="dot inline-block w-3 h-3 mx-1.5 bg-white/50 rounded-full cursor-pointer transition-colors duration-300" 
              onClick={() => currentSlide(4)}
            ></span>
          </div>
        </div>
      </section>

      {/* EFFSC Membership Form Section - Original Form */}
      <h2 className="text-center text-gray-900 text-3xl mb-6 font-bold">Join UMP EFFSC Membership</h2>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 my-10">
        {!formSubmitted ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="surname" className="font-bold text-sm">SURNAME:</label>
                <input type="text" id="surname" name="surname" required className="border p-2 rounded" />
              </div>
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="firstName" className="font-bold text-sm">FIRST NAME:</label>
                <input type="text" id="firstName" name="firstName" required className="border p-2 rounded" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="idNumber" className="font-bold text-sm">ID NUMBER:</label>
                <input type="text" id="idNumber" name="idNumber" required pattern="\d{13}" title="Please enter a valid 13-digit ID number" className="border p-2 rounded" />
              </div>
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="gender" className="font-bold text-sm">GENDER:</label>
                <select id="gender" name="gender" required className="border p-2 rounded">
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="preferNotToSay">Prefer not to say</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="language" className="font-bold text-sm">LANGUAGE:</label>
                <select id="language" name="language" required className="border p-2 rounded">
                  <option value="">Select</option>
                  <option value="english">English</option>
                  <option value="afrikaans">Afrikaans</option>
                  <option value="zulu">Zulu</option>
                  <option value="xhosa">Xhosa</option>
                  <option value="sotho">Sotho</option>
                  <option value="tswana">Tswana</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="font-bold text-sm">RESIDENTIAL ADDRESS:</label>
              <input type="text" id="address" name="address" required className="border p-2 rounded w-full" />
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="province" className="font-bold text-sm">PROVINCE:</label>
                <select 
                  id="province" 
                  name="province" 
                  value={formData.province}
                  onChange={handleInputChange}
                  required 
                  className="border p-2 rounded"
                >
                  <option value="eastern_cape">Eastern Cape</option>
                  <option value="free_state">Free State</option>
                  <option value="gauteng">Gauteng</option>
                  <option value="kwazulu_natal">KwaZulu-Natal</option>
                  <option value="limpopo">Limpopo</option>
                  <option value="mpumalanga">Mpumalanga</option>
                  <option value="north_west">North West</option>
                  <option value="northern_cape">Northern Cape</option>
                  <option value="western_cape">Western Cape</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="cell" className="font-bold text-sm">CELL:</label>
                <input type="tel" id="cell" name="cell" required pattern="0[0-9]{9}" title="Please enter a valid 10-digit cell number starting with 0" className="border p-2 rounded" />
              </div>
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="code" className="font-bold text-sm">CODE:</label>
                <input type="text" id="code" name="code" required pattern="[0-9]{4}" title="Please enter a 4-digit code" className="border p-2 rounded" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="qualification" className="font-bold text-sm">QUALIFICATION:</label>
                <select id="qualification" name="qualification" required className="border p-2 rounded">
                  <option value="">Select Qualification</option>
                  <option value="undergraduate">Undergraduate</option>
                  <option value="honors">Honors</option>
                  <option value="masters">Masters</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="ward" className="font-bold text-sm">WARD:</label>
                <input type="checkbox" id="ward" name="ward" value="yes" className="border-2 border-black w-6 h-6 rounded" />
              </div>
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="vd" className="font-bold text-sm">VD:</label>
                <input type="text" id="vd" name="vd" pattern="[0-9]+" title="Please enter numbers only" className="border p-2 rounded" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <label className="font-bold text-sm">EMPLOYED:</label>
                <input type="radio" id="employed_yes" name="employed" value="yes" />
                <label htmlFor="employed_yes" className="mr-2">Yes</label>
                <input type="radio" id="employed_no" name="employed" value="no" defaultChecked />
                <label htmlFor="employed_no">No</label>
              </div>
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="institution" className="font-bold text-sm">INDUSTRY/INSTITUTION OF LEARNING:</label>
                <input type="text" id="institution" name="institution" required className="border p-2 rounded" />
              </div>
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="email" className="font-bold text-sm">EMAIL:</label>
                <input type="email" id="email" name="email" required className="border p-2 rounded" />
              </div>
              <div className="flex items-center gap-2">
                <label className="font-bold text-sm">REGISTERED TO VOTE WITH IEC:</label>
                <input type="radio" id="vote_yes" name="voter_registration" value="yes" required />
                <label htmlFor="vote_yes" className="mr-2">Yes</label>
                <input type="radio" id="vote_no" name="voter_registration" value="no" />
                <label htmlFor="vote_no">No</label>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="subscription" className="font-bold text-sm">SUBSCRIPTION:</label>
                <select id="subscription" name="subscription" required className="border p-2 rounded">
                  <option value="">Select</option>
                  <option value="monthly">Monthly</option>
                  <option value="annual">Annual</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="renewal" className="font-bold text-sm">RENEWAL:</label>
                <select id="renewal" name="renewal" required className="border p-2 rounded">
                  <option value="">Select</option>
                  <option value="auto">Auto</option>
                  <option value="manual">Manual</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="period" className="font-bold text-sm">PERIOD:</label>
                <select id="period" name="period" required className="border p-2 rounded">
                  <option value="">Select</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                </select>
              </div>
              <div className="flex flex-col flex-1 min-w-[150px]">
                <label htmlFor="amount" className="font-bold text-sm">AMOUNT:</label>
                <input 
                  type="number" 
                  id="amount" 
                  name="amount" 
                  value={formData.amount} 
                  onChange={handleInputChange}
                  min="10" 
                  step="10" 
                  required 
                  className="border p-2 rounded" 
                />
              </div>
            </div>
            <div className="bg-[#d43c3c] text-white font-bold p-3 my-2 rounded">Standard Bank Acc. Number: 000 131 512</div>
            <div className="my-2 p-3 bg-gray-50 border-l-4 border-[#d43c3c]">
              <strong>Note:</strong> Please ensure all information is accurate before submitting. All fields are required unless marked as optional.
            </div>
            <div className="my-4">
              <div className="font-bold text-[#d43c3c] mb-2">EFFSC Membership Oath Declaration</div>
              <div className="text-xs mb-2">
                I, Fighter.....................................................................................................................................Solemnly declare that I will abide by the aims, objectives
              </div>
              <div className="text-xs mb-2">
                I further declare to defend the proud and militant legacy of the fallen heroines and heroes. To work towards a South Africa that belongs to all who live in it. Defend the African revolutionary traditions against all forms of tendencies that promote hatred, division, underdevelopment, corruption, and social discord. I vow to defend and selflessly pursue the realization of the seven non-negotiable cardinal pillars of the EFF and the founding principles of the EFFSC as a primary political program of the EFF contained in the founding manifesto.
              </div>
              <div className="text-xs mb-2">
                I further commit to abide by the principle of democratic centralism which is that the individual is subordinate to the collective, and the minority is subordinate to the will of the majority, the lower level is subordinate to the higher level, and the decisions of the upper structures are binding on the lower structures.
              </div>
            </div>
            <div className="border-2 border-black p-2 font-bold text-xs mt-4">NOTE: Once the membership form is filled, the amount of R10 with the form should be submitted to the EFFSC secretary.</div>
            <div className="flex justify-between mt-6 text-xs">
              <div>
                <strong>SIGNATURE OF APPLICANT:</strong>
                <div className="border-b border-black w-44 inline-block"></div>
              </div>
              <div className="flex items-center gap-2">
                <strong>DATE:</strong>
                <div className="border-b border-black w-8 inline-block"></div>
                <span>/</span>
                <div className="border-b border-black w-8 inline-block"></div>
                <span>/</span>
                <div className="border-b border-black w-12 inline-block"></div>
              </div>
            </div>
            <div className="flex justify-between mt-2 text-xs">
              <div>
                <strong>SIGNATURE OF RECRUITER:</strong>
                <div className="border-b border-black w-44 inline-block"></div>
              </div>
              <div className="flex items-center gap-2">
                <strong>DATE:</strong>
                <div className="border-b border-black w-8 inline-block"></div>
                <span>/</span>
                <div className="border-b border-black w-8 inline-block"></div>
                <span>/</span>
                <div className="border-b border-black w-12 inline-block"></div>
              </div>
            </div>
            <button type="submit" className="bg-[#d43c3c] text-white px-6 py-2 rounded font-bold shadow hover:bg-[#b13266] transition mt-6">
              Submit Application
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center min-h-[400px] w-full">
            <div className="text-center p-10">
              <div className="text-emerald-500 text-5xl mb-5 flex justify-center">
                <FaCheckCircle />
              </div>
              <h1 className="text-2xl mb-2.5 text-gray-800 font-bold">Thank You!</h1>
              <p className="text-base text-gray-600">
                Your EFFSC Membership Application<br />
                is successfully submitted.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Committee Section */}
      <section className="committee-section max-w-5xl mx-auto my-12 px-5">
        <h2 className="text-center text-2xl mb-7 text-[#d43c3c]">Branch Executive Committee</h2>
        <div className="committee-members flex gap-5 justify-center flex-wrap">
          <div className="member-card bg-white border border-gray-300 rounded-lg w-72 p-5 shadow-md text-center">
            <img src="/lebang.jpg" alt="Financial Aid/Funding" className="w-20 h-20 rounded-full mb-4 mx-auto object-cover" />
            <h4 className="mb-2.5">Molafi Lebang</h4>
            <p className="text-sm text-gray-600">+27 74 256 0038</p>
          </div>
          <div className="member-card bg-white border border-gray-300 rounded-lg w-72 p-5 shadow-md text-center">
            <img src="/whithy.jpg" alt="Accommodation Issues" className="w-20 h-20 rounded-full mb-4 mx-auto object-cover" />
            <h4 className="mb-2.5">Shongwe Awethu</h4>
            <p className="text-sm text-gray-600">+27 79 6390 473</p>
          </div>
          <div className="member-card bg-white border border-gray-300 rounded-lg w-72 p-5 shadow-md text-center">
            <img src="/shongwe.jpg" alt="General Inquiries" className="w-20 h-20 rounded-full mb-4 mx-auto object-cover" />
            <h4 className="mb-2.5">Mukwevho Rotondwa Whitney</h4>
            <p className="text-sm text-gray-600">+27 63 797 0520</p>
          </div>
        </div>
      </section>

      {/* Media Platforms Section */}
      <section className="media-platforms max-w-6xl mx-auto mt-10 px-5">
        <h2 className="text-center text-xl mb-4 text-[#d43c3c]">UMP EFFSC Official Publication Platforms</h2>
        <p className="text-center mb-6 text-gray-600">Stay updated on news, announcements by following us:</p>
        <div className="platform-grid flex justify-center gap-8 flex-wrap">
          {/* Facebook */}
          <a href="https://www.facebook.com/effscmbombelacampus" target="_blank" rel="noopener noreferrer" className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <FaFacebook className="platform-icon h-10 w-10 mb-2.5 text-blue-600" />
            <div className="platform-name font-bold text-lg text-[#d43c3c]">Facebook</div>
            <div className="platform-title text-gray-600">EFFSC</div>
            <div className="platform-handle text-gray-500 break-all">@effscmbombelacampus</div>
          </a>

          {/* Instagram */}
          <div className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <FaInstagram className="platform-icon h-10 w-10 mb-2.5 text-pink-500" />
            <div className="platform-name font-bold text-lg text-[#d43c3c]">Instagram</div>
            <div className="platform-title text-gray-600">EFFSC</div>
            <div className="platform-handle text-gray-500 break-all">@effsc_ump</div>
          </div>

          {/* WhatsApp */}
          <div className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <FaWhatsapp className="platform-icon h-10 w-10 mb-2.5 text-green-500" />
            <div className="platform-name font-bold text-lg text-[#d43c3c]">WhatsApp</div>
            <div className="platform-title text-gray-600">EFFSC</div>
            <div className="platform-handle text-gray-500 break-all">Group Channel</div>
          </div>
        </div>
      </section>
      
      {/* STILL HAVE QUESTIONS FORM */}
      <section className="form-section max-w-4xl mx-auto my-16 py-10 px-5 bg-[#fefefe] rounded-xl shadow-md">
        <h2 className="text-center text-[#d43c3c] mb-7">Still Have Questions?</h2>
        <form className="choir-form flex flex-wrap gap-5" action="mailto:placeholder@example.com" method="post" encType="text/plain">
          <div className="form-group flex-1 min-w-[45%] flex flex-col">
            <label htmlFor="committee-email">Send To (Committee Member):</label>
            <select 
              id="committee-email" 
              name="committee_email" 
              required
              className="p-2.5 border border-gray-300 rounded"
            >
              <option value="">-- Select Email --</option>
              <option value="smoalafi64@gmail.com">Molafi Lebang - Financial Aid/Funding</option>
              <option value="noziphoelander@gmail.com">Shongwe Awethu - Accommodation Issues</option>
              <option value="mukwevhorotos@gmail.com">Mukwevho Rotondwa Whitney - General Inquiries</option>
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
            className="mt-7.5 py-3 px-5 bg-[#d43c3c] text-white border-none rounded-lg cursor-pointer text-base self-center transition-colors duration-300 hover:bg-[#b13232]"
          >
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}