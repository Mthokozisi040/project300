"use client"
import { useState, useEffect } from 'react';
import { FaSearch, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { SiTiktok, SiGmail } from 'react-icons/si';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SASCOPage() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Slideshow functionality
  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]); // Added slideIndex dependency

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

  function submitSASCOForm(e) {
    e.preventDefault();
    setFormSubmitted(true);
  }

  return (
    <div className="font-sans">
      <Navbar />

      {/* Activity Hero Section */}
      <section 
        className="relative bg-[url('/images/sasco_pic.jpg')] bg-center bg-cover text-white text-center py-20 h-[450px] w-full"
        style={{ backgroundImage: "url('/sasco pic.jpg')" }}
      >
        <div className="max-w-4xl mx-auto">
          <span className="activity-tag block mb-4">Political Party • Student Organization</span>
          <h1 className="text-4xl mb-4 drop-shadow">South African Students Congress (SASCO)</h1>
          <p className="text-xl opacity-90 mb-8">Advancing student interests and fighting for quality, accessible education for all.</p>
        </div>
        <div className="flex gap-5 absolute bottom-2.5 left-1/2 -translate-x-1/2">
          <div className="bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
            <h3 className="mb-2.5 text-lg text-[#493cd4]">Membership</h3>
            <p className="text-sm text-gray-800">Open to all UMP students<br />Must support SASCO principles<br />Annual membership fee: R10</p>
          </div>
          <div className="bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
            <h3 className="mb-2.5 text-lg text-[#493cd4]">Meeting Schedule</h3>
            <p className="text-sm text-gray-800">Every Thursday<br />Time: 17:00pm to 19:00pm<br />Location: Parking Bay D</p>
          </div>
        </div>
      </section>

      {/* Combined About & Gallery Section */}
      <section className="max-w-6xl mx-auto my-16 px-5 flex flex-wrap gap-10">
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-2xl mb-5 text-gray-800">About SASCO UMP</h2>
          <p className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5">
            The South African Students Congress (SASCO) is the leading progressive student organization in South Africa, with a strong presence at the University of Mpumalanga. As the student wing of the African National Congress (ANC), we fight for the rights of students and advocate for quality, accessible education for all. Our branch at UMP is committed to addressing student grievances, campaigning for fair policies, and developing future leaders.
          </p>
          <p className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5">
            SASCO UMP organizes regular political education sessions, community outreach programs, and campaigns on campus issues. We engage with university management on matters affecting students, including financial aid, accommodation, and academic support. Our members participate in national SASCO structures and contribute to shaping education policy in South Africa.
          </p>
          <p className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5">
            Our organization is built on the principles of non-racialism, non-sexism, democracy, and social justice. We welcome all students who share our vision of transforming education and society. Through SASCO, students gain political awareness, leadership skills, and the opportunity to make a real difference in their university community and beyond.
          </p>
        </div>

        {/* Fixed Slideshow Section */}
        <div className="flex-1 min-w-[300px] relative rounded-lg overflow-hidden shadow-xl h-[400px]">
          {/* Slideshow items */}
          <div className="slide hidden absolute inset-0 w-full h-full">
            <img 
              src="/sasco pic 2.jpg" 
              alt="SASCO Rally" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">SASCO Rally</div>
          </div>

          <div className="slide hidden absolute inset-0 w-full h-full">
            <img 
              src="/sasco pic3.jpg" 
              alt="Leadership Training" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">Leadership Development</div>
          </div>

          <div className="slide hidden absolute inset-0 w-full h-full">
            <img 
              src="/sasco pic.jpg" 
              alt="Community Outreach" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">Community Outreach</div>
          </div>

          <div className="slide hidden absolute inset-0 w-full h-full">
            <img 
              src="/cm sasco.jpg" 
              alt="committee members" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">Committee Members</div>
          </div>

          <div className="slide hidden absolute inset-0 w-full h-full">
            <img 
              src="/sasco pic4.jpg" 
              alt="Political Education" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="slide-caption absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">Political Education</div>
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
            <span 
              className="dot inline-block w-3 h-3 mx-1.5 bg-white/50 rounded-full cursor-pointer transition-colors duration-300" 
              onClick={() => currentSlide(5)}
            ></span>
          </div>
        </div>
      </section>

      {/* SASCO Membership Form Section */}
      <h2 className="text-center text-gray-900 text-3xl mb-6 font-bold">Join UMP SASCO Membership</h2>
      <div className="sasco-form-container max-w-4xl mx-auto my-16 border-2 border-black bg-white">
        {!formSubmitted ? (
          <>
            <div className="sasco-header text-center border-b border-black p-5">
              <div className="logo-container flex justify-between items-center mb-4">
                <div className="sasco-logo w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-sm">SASCO</div>
                <div>
                  <div className="header-title text-base font-bold mb-1">SOUTH AFRICAN STUDENTS' CONGRESS</div>
                  <div className="header-subtitle text-sm font-bold mb-2.5">UMP MBOMBELA MEMBERSHIP FORM</div>
                  <div className="header-address text-xs leading-snug">
                    54 Prinsep Kekana Street, Chief Albert Luthuli House, Johannesburg, 2001<br />
                    Tel No: (011) 376 1000 &nbsp;&nbsp;&nbsp; Website: www.sasco.org.za
                  </div>
                </div>
                <div className="sasco-logo w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-sm">SASCO</div>
              </div>
            </div>

            <div className="sasco-form-content p-5">
              <form id="sascoMembershipForm" onSubmit={submitSASCOForm}>
                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">Surname</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[300px]" />
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">First Name(s)</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[300px]" />
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">Date of Birth</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[150px]" />
                  <div className="sasco-form-label text-xs pr-2.5 ml-10">Student No.</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[150px]" />
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">Branch/Campus Name</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[150px]" />
                  <div className="sasco-form-label text-xs pr-2.5 ml-5">Institution</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[150px]" />
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">Nationality</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[150px]" />
                  <div className="sasco-form-label text-xs pr-2.5 ml-10">Race e.g. Indian</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[150px]" />
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">Gender</div>
                  <div className="sasco-checkbox-group flex items-center gap-5">
                    <div className="sasco-checkbox-item flex items-center gap-1.25">
                      <label className="text-xs">Male</label>
                      <input type="radio" name="gender" value="male" className="w-3 h-3" />
                    </div>
                    <div className="sasco-checkbox-item flex items-center gap-1.25">
                      <label className="text-xs">Female</label>
                      <input type="radio" name="gender" value="female" className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">Course of Study</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[300px]" />
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">Cell No.</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[150px]" />
                  <div className="sasco-form-label text-xs pr-2.5 ml-10">Tel No.</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[150px]" />
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">Email</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[300px]" />
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">What other organisations do you belong to?</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[300px]" />
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">Do you participate in any sports or recreational activities e.g. Arts, Sports? If yes, please state</div>
                </div>
                <div className="sasco-form-row flex mb-2 items-center">
                  <textarea className="sasco-textarea-input border border-black p-1 text-xs resize-y w-full min-h-10" rows="2"></textarea>
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-checkbox-group flex items-center gap-5">
                    <div className="sasco-checkbox-item flex items-center gap-1.25">
                      <input type="radio" name="membership-type" value="new" className="w-3 h-3" />
                      <label className="text-xs">New</label>
                    </div>
                    <div className="ml-[200px]">
                      <div className="sasco-checkbox-item flex items-center gap-1.25">
                        <input type="radio" name="membership-type" value="renewal" className="w-3 h-3" />
                        <label className="text-xs">Renewal</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">Social Media Networks? If Yes, kindly provide your details Twitter</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[150px]" />
                </div>

                <div className="sasco-form-row flex mb-2 items-center">
                  <div className="sasco-form-label min-w-[140px] text-xs pr-2.5">Facebook</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[150px]" />
                  <div className="sasco-form-label text-xs pr-2.5 ml-10">Instagram</div>
                  <input type="text" className="sasco-form-input flex-1 border border-black h-5 py-0.5 px-1 text-xs max-w-[150px]" />
                </div>

                <div className="sasco-declaration-section mt-5 border-t border-black pt-4">
                  <div className="font-bold mb-2.5">Declaration</div>
                  <div className="sasco-declaration-text text-xs leading-[1.3] mb-2.5">
                    I ................................. (Full Name), declare to abide by the constitution and code of conduct of the South African Students' Congress and commit myself to its programme of action.
                  </div>
                  
                  <div className="sasco-signature-section flex justify-between mt-4">
                    <div>
                      <div className="text-xs">Applicant's Signature: .....................................................</div>
                    </div>
                    <div>
                      <div className="text-xs">Date: ......./......./.........</div>
                    </div>
                  </div>
                </div>

                <div className="sasco-office-use-section mt-5 bg-red-600 text-white p-2.5 text-center font-bold text-sm">
                  OFFICE USE ONLY
                </div>

                <div className="sasco-office-details bg-white text-black p-4 border border-black text-xs">
                  <div className="sasco-office-row flex mb-1.25">
                    <div className="sasco-office-label min-w-[60px] font-bold">Membership</div>
                    <div className="sasco-office-label min-w-[60px] font-bold">Number</div>
                    <div className="sasco-office-input border-b border-dotted border-black flex-1 h-4"></div>
                  </div>
                  <div className="sasco-office-row flex mb-1.25">
                    <div className="sasco-office-label min-w-[60px] font-bold">Branch</div>
                    <div className="sasco-office-label min-w-[60px] font-bold">Secretary</div>
                    <div className="sasco-office-input border-b border-dotted border-black flex-1 h-4"></div>
                  </div>
                  <div className="sasco-office-row flex mb-1.25">
                    <div className="sasco-office-label min-w-[60px] font-bold">Date</div>
                    <div className="sasco-office-input border-b border-dotted border-black flex-1 h-4"></div>
                  </div>

                  <div className="sasco-bank-details text-center text-[9px] leading-[1.2] mt-2.5">
                    <strong>SASCO UMP Mbombela 2023/24 BEC Account Details</strong><br />
                    Bank Name: First National Bank &nbsp;&nbsp;&nbsp; Account Holder: Branch Treasurer KP Mthenjane<br />
                    Account Number: 62883639329 &nbsp;&nbsp;&nbsp; Branch Code: 230142<br />
                    Reference: Student Name & Number &nbsp;&nbsp;&nbsp; Joining Fee: R15.00<br />
                    South African Students' Congress, Formed: 06 September 1991
                  </div>
                </div>
                <button type="submit" className="sasco-submit-btn block mt-5 bg-[#050618] text-white py-2.5 px-7.5 border-none rounded font-bold cursor-pointer">
                  Submit Application
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center min-h-[400px] w-full">
            <div className="text-center p-10">
              <div className="text-emerald-500 text-5xl mb-5 flex justify-center">
                <FaCheckCircle />
              </div>
              <h1 className="text-2xl mb-2.5 text-gray-800 font-bold">Thank You!</h1>
              <p className="text-base text-gray-600">
                Your SASCO Membership Application<br />
                is successfully submitted.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* COMMITTEE SECTION */}
      <section className="committee-section max-w-5xl mx-auto my-12 px-5">
        <h2 className="text-center text-2xl mb-7 text-[#3c41d4]">Branch Executive Committee</h2>
        <div className="committee-members flex gap-5 justify-center flex-wrap">
          <div className="member-card bg-white border border-gray-300 rounded-lg w-72 p-5 shadow-md text-center">
            <img src="/comitte 1.png" alt="Branch Deputy Secretary" className="w-20 h-20 rounded-full mb-4 mx-auto" />
            <h4 className="mb-2.5">Cde Mfundo Shabangu</h4>
            <p className="text-sm text-gray-600">+27 67 094 2079</p>
          </div>
          <div className="member-card bg-white border border-gray-300 rounded-lg w-72 p-5 shadow-md text-center">
            <img src="/comitte2.png" alt="Branch Secretary" className="w-20 h-20 rounded-full mb-4 mx-auto" />
            <h4 className="mb-2.5">Cde Innocent Mafiyeka</h4>
            <p className="text-sm text-gray-600">+27 79 757 1445</p>
          </div>
          <div className="member-card bg-white border border-gray-300 rounded-lg w-72 p-5 shadow-md text-center">
            <img src="/comitte3.png" alt="Media& Publicity Secretary" className="w-20 h-20 rounded-full mb-4 mx-auto" />
            <h4 className="mb-2.5">Cde Noxolo Bontseng</h4>
            <p className="text-sm text-gray-600">+27 84 871 2549</p>
          </div>
        </div>
      </section>

      {/* Media Platforms Section */}
      <section className="media-platforms max-w-6xl mx-auto mt-10 px-5">
        <h2 className="text-center text-xl mb-4 text-[#232654]">UMP SASCO Official Publication Platforms</h2>
        <p className="text-center mb-6 text-gray-600">Stay updated on news, announcements by following us:</p>
        <div className="platform-grid flex justify-center gap-8 flex-wrap">
          {/* Facebook */}
          <a href="https://www.instagram.com/sasco.ump?" target="_blank" rel="noopener noreferrer" className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <FaFacebook className="platform-icon h-10 w-10 mb-2.5" style={{ filter: "invert(0.3) sepia(1) saturate(5) hue-rotate(190deg)" }} />
            <div className="platform-name font-bold text-lg text-[#232654]">Facebook</div>
            <div className="platform-title text-gray-600">SASCO</div>
            <div className="platform-handle text-gray-500 break-all">@sasco.ump</div>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/sasco.ump?" target="_blank" rel="noopener noreferrer" className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <FaInstagram className="platform-icon h-10 w-10 mb-2.5" style={{ filter: "invert(0.3) sepia(1) saturate(5) hue-rotate(320deg)" }} />
            <div className="platform-name font-bold text-lg text-[#232654]">Instagram</div>
            <div className="platform-title text-gray-600">SASCO</div>
            <div className="platform-handle text-gray-500 break-all">@sasco.ump</div>
          </a>

          {/* WhatsApp */}
          <a href="https://whatsapp.com/channel/0029V" target="_blank" rel="noopener noreferrer" className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <FaWhatsapp className="platform-icon h-10 w-10 mb-2.5" style={{ filter: "invert(0.3) sepia(1) saturate(5) hue-rotate(90deg)" }} />
            <div className="platform-name font-bold text-lg text-[#232654]">WhatsApp Channel</div>
            <div className="platform-title text-gray-600">SASCO</div>
            <div className="platform-handle text-gray-500 break-all">/channel/0029V</div>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@sasco.ump?" target="_blank" rel="noopener noreferrer" className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <SiTiktok className="platform-icon h-10 w-10 mb-2.5" style={{ filter: "invert(0.3) sepia(1) saturate(5) hue-rotate(0deg)" }} />
            <div className="platform-name font-bold text-lg text-[#232654]">TikTok</div>
            <div className="platform-title text-gray-600">SASCO</div>
            <div className="platform-handle text-gray-500 break-all">@sasco.ump</div>
          </a>

          {/* Email */}
          <a href="mailto:sascoumpmbombela@gmail.com" className="platform-card bg-gray-100 rounded-lg p-6 flex flex-col items-center min-w-[220px] no-underline transition-transform duration-300 hover:-translate-y-1">
            <SiGmail className="platform-icon h-10 w-10 mb-2.5" style={{ filter: "invert(0.3) sepia(1) saturate(5) hue-rotate(0deg)" }} />
            <div className="platform-name font-bold text-lg text-[#232654]">Email</div>
            <div className="platform-title text-gray-600">SASCO</div>
            <div className="platform-handle text-gray-500 break-all">sascoumpmbombela@gmail.com</div>
          </a>
        </div>
      </section>
      
      {/* STILL HAVE QUESTIONS FORM */}
      <section className="form-section max-w-4xl mx-auto my-16 py-10 px-5 bg-[#fefefe] rounded-xl shadow-md">
        <h2 className="text-center text-[#3c90d4] mb-7">Still Have Questions?</h2>
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
              <option value="thabo.mokoena@example.com">Cde Mfundo Shabangu - Branch Deputy Secretary</option>
              <option value="nomvula.khumalo@example.com">Cde Innocent Mafiyeka - Branch Secretary</option>
              <option value="sipho.ndlovu@example.com">Cde Noxolo Bontseng- Media& Publicity Secretary</option>
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
      </section>

      <Footer />
    </div>
  );
}