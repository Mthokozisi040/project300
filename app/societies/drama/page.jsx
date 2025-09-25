"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaSearch, FaChevronDown, FaFacebook, FaInstagram } from 'react-icons/fa';
import Navbar from '@/components/Navbar';

const DramaSociety = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Slideshow functionality
  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { setSlideIndex(1) }
    if (n < 1) { setSlideIndex(slides.length) }
    
    for (i = 0; i < slides.length; i++) {
      if (slides[i]) slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      if (dots[i]) dots[i].className = dots[i].className.replace(" active", "");
    }
    
    if (slides[slideIndex-1]) slides[slideIndex-1].style.display = "block";
    if (dots[slideIndex-1]) dots[slideIndex-1].className += " active";
  };

  const plusSlides = (n) => {
    const newIndex = slideIndex + n;
    setSlideIndex(newIndex);
    showSlides(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
    showSlides(n);
  };

  return (
    <>
      <Head>
        <title>UMP Drama Society</title>
        <meta name="description" content="UMP Drama Society - Express yourself through theater and develop acting skills" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>

      {/* Navigation Bar */}
      <Navbar />

      {/* Activity Hero Section */}
      <section className="activity-hero" style={{ backgroundImage: "url('/Public/images/D5.webp')" }}>
        <div className="activity-hero-content">
          <span className="activity-tag">Society • Performing Arts</span>
          <h1>UMP Drama Society</h1>
          <p>Express yourself through theater, develop acting skills, and be part of our vibrant creative community.</p>
        </div>
        <div className="info-boxes">
          <div className="info-box">
            <h3>Audition Requirements</h3>
            <p>Open to all UMP students<br />Prepare a 2-minute monologue<br />No prior experience necessary</p>
          </div>
          <div className="info-box">
            <h3>Rehearsal Schedule</h3>
            <p>Monday & Thursday<br />Time: 17:00pm to 19:00pm<br />Location: Arts Block Theater</p>
          </div>
        </div>
      </section>

      {/* Combined About & Gallery Section */}
      <section className="about-gallery-section">
        <div className="about-content">
          <h2>About the Drama Society</h2>
          <p>
            To educate and portray societal issues within and outside the borders of the University of Mpumalanga. To entertain and create a holistic atmosphere for all students at the University of Mpumalanga.
          </p>
          <p>
            Weekly workshops cover acting techniques, voice training, movement, improvisation, and script analysis. Members have opportunities to perform in our mainstage productions, student-directed one-act plays, and campus events. We also participate in inter-university drama festivals and competitions, representing UMP on regional and national platforms.
          </p>
          <p>
            Beyond performance skills, our society fosters creativity, teamwork, and confidence. Many alumni have gone on to work in professional theater, film, and television. Whether you're an experienced performer or trying theater for the first time, we provide a supportive environment to explore your potential. No experience is necessary - just bring your enthusiasm and willingness to learn!
          </p>
        </div>

        <div className="slideshow-container">
          {/* Slideshow items */}
          <div className="slide fade">
            <Image src="/Public/images/D.jpg" alt="Drama Performance" width={600} height={400} />
            <div className="slide-caption">2024 Mainstage Production: "The Crucible"</div>
          </div>

          <div className="slide fade">
            <Image src="/Public/images/D6.jpg" alt="Acting Workshop" width={600} height={400} />
            <div className="slide-caption">Acting Technique Workshop</div>
          </div>

          <div className="slide fade">
            <Image src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Drama Team" width={600} height={400} />
            <div className="slide-caption">Drama Society Members in Rehearsal</div>
          </div>

          <div className="slide fade">
            <Image src="/Public/images/D2.jpg" alt="Theater Production" width={600} height={400} />
            <div className="slide-caption">Backstage During Production Week</div>
          </div>

          {/* Navigation arrows */}
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

          {/* Dots navigation */}
          <div className="dots-container">
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
            <span className="dot" onClick={() => currentSlide(4)}></span>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM SECTION */}
      <section className="form-section">
        <h2>Join the Drama Society</h2>
        <form className="team-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input type="text" id="surname" name="surname" required />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" name="gender" required>
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="student-number">Student Number:</label>
            <input type="text" id="student-number" name="student_number" required />
          </div>

          <div className="form-group">
            <label htmlFor="id-number">ID Number:</label>
            <input type="text" id="id-number" name="id_number" required />
          </div>

          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <select id="course" name="course" required>
              <option value="">-- Select Course --</option>
              <option value="Diploma ICT">Diploma ICT</option>
              <option value="BA Development Studies">BA Development Studies</option>
              <option value="BEd">Bachelor of Education</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="year">Year of Study:</label>
            <select id="year" name="year" required>
              <option value="">-- Select Year --</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="contact">Contact Number:</label>
            <input type="text" id="contact" name="contact" required />
          </div>

          <div className="form-group">
            <label htmlFor="experience">Theater Experience Level:</label>
            <select id="experience" name="experience" required>
              <option value="">-- Select Experience --</option>
              <option value="Beginner">Beginner (No experience)</option>
              <option value="Intermediate">Intermediate (Some school/community experience)</option>
              <option value="Advanced">Advanced (Substantial experience)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="interests">Areas of Interest:</label>
            <input type="text" id="interests" name="interests" placeholder="Acting, Directing, Writing, Stage Management, etc." />
          </div>

          <button type="submit">Submit Application</button>
        </form>
      </section>

      {/* COMMITTEE SECTION */}
      <section className="committee-section">
        <h2>Committee Members</h2>
        <div className="committee-members">
          <div className="member-card">
            <Image src="/Public/images/account icon.png" alt="President" width={80} height={80} />
            <h4>Lerato Maseko</h4>
            <p>President</p>
          </div>
          <div className="member-card">
            <Image src="/Public/images/account icon.png" alt="Secretary" width={80} height={80} />
            <h4>Thando Nkosi</h4>
            <p>Secretary</p>
          </div>
          <div className="member-card">
            <Image src="/Public/images/account icon.png" alt="Production Manager" width={80} height={80} />
            <h4>Siyabonga Dlamini</h4>
            <p>Production Manager</p>
          </div>
        </div>
      </section>
      
      {/* STILL HAVE QUESTIONS FORM */}
      <section className="form-section">
        <h2>Still Have Questions?</h2>
        <form className="choir-form" action="mailto:placeholder@example.com" method="post" encType="text/plain">
          <div className="form-group">
            <label htmlFor="committee-email">Send To (Committee Member):</label>
            <select id="committee-email" name="committee_email" required>
              <option value="">-- Select Email --</option>
              <option value="lerato.maseko@example.com">Lerato Maseko - President</option>
              <option value="thando.nkosi@example.com">Thando Nkosi - Secretary</option>
              <option value="siyabonga.dlamini@example.com">Siyabonga Dlamini - Production</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="q-name">Your Name:</label>
            <input type="text" id="q-name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="q-surname">Your Surname:</label>
            <input type="text" id="q-surname" name="surname" required />
          </div>

          <div className="form-group">
            <label htmlFor="q-student-number">Student Number:</label>
            <input type="text" id="q-student-number" name="student_number" required />
          </div>

          <div className="form-group" style={{ flex: "1 1 100%" }}>
            <label htmlFor="message">Your Message or Question:</label>
            <textarea id="message" name="message" rows="5" required placeholder="Type your question here..."></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
      
      {/* FOOTER SECTION */}
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            {/* University Info */}
            <div className="footer-section">
              <Image src="/Public/images/politics images/footer.png" alt="University of Mpumalanga" className="footer-logo" width={180} height={50} />
              <div>
                <h4>Mbombela Campus</h4>
                <p>
                  DCT 840 and D725 Roads, Mbombela<br />
                  1200
                </p>
              </div>
              <div>
                <h4>Siyabuswa Campus</h4>
                <p>
                  Bhazi Mitinato Drive, Siyabuswa, South Africa<br />
                  972
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/Home_page">Home</Link></li>
                <li><Link href="/About_Us_page">About Us</Link></li>
                <li><Link href="/Events_page">Events</Link></li>
                <li><Link href="/FAQs">FAQs</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Us</h4>
              <div>
                <p>General Enquiries:</p>
                <p>cocurricularactivities@ump.ac.za</p>
              </div>
              <div>
                <p>Switchboard:</p>
                <p>013 002 0001</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="https://www.facebook.com/UniMpumalanga/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/unimpumalanga/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">© 2025 University of Mpumalanga. All rights reserved.</p>
              <div className="footer-links">
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms of Use</Link>
                <Link href="#">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
        }

        .navbar {
          background-color: #232654;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 0 2rem;
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }
        
        .logo img {
          height: 40px;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        
        .nav-links a {
          text-decoration: none;
          color: #fbfbfb;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          transition: color 0.3s;
        }
        
        .nav-links a:hover {
          color: #2563eb;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #2563eb;
          transition: width 0.3s;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .dropdown {
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .dropdown-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 500;
          color: #fbfbfb;
          padding: 0.5rem 0;
          font-family: inherit;
          font-size: inherit;
        }
        
        .dropdown-btn:hover {
          color: #2563eb;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 200px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          z-index: 1000;
        }
        
        .dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .dropdown-menu a {
          display: block;
          padding: 0.75rem 1rem;
          color: #333;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        
        .dropdown-menu a:hover {
          background-color: #f1f5f9;
          color: #2563eb;
        }
        
        /* Search and Auth Styles */
        .nav-utils {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .search-container {
          position: relative;
        }
        
        .search-container input {
          padding: 0.5rem 1rem 0.5rem 2.5rem;
          border-radius: 2rem;
          border: 1px solid #e2e8f0;
          outline: none;
          transition: all 0.3s;
          width: 180px;
        }
        
        .search-container input:focus {
          width: 220px;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
        }
        
        .auth-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #e2e8f0;
          background: none;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
          color: #fbfbfb;
          text-decoration: none;
        }
        
        .auth-btn:hover {
          background-color: #f1f5f9;
          color: #333;
        }
        
        .signup-btn {
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #2563eb;
          background-color: #2563eb;
          color: white;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.2s;
          text-decoration: none;
        }

        .signup-btn:hover {
          background-color: #1d4ed8;
        }

        .activity-hero {
          position: relative;
          background: url('/Public/images/D5.webp');
          background-position: center;
          background-size: cover;
          color: white;
          padding: 80px 20px;
          text-align: center;
          height: 450px;
          width: 100%;
        }
        
        .activity-hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .activity-hero h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
        }
        
        .activity-hero p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .info-boxes {
          display: flex;
          gap: 20px;
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
        }

        .info-box {
          background-color: rgba(255, 255, 255, 0.95);
          padding: 20px;
          border-radius: 10px;
          width: 260px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          text-align: left;
        }

        .info-box h3 {
          margin-bottom: 10px;
          font-size: 18px;
          color: #493cd4;
        }

        .info-box p {
          font-size: 14px;
          color: #333;
        }

        /* Combined About & Gallery Section */
        .about-gallery-section {
          max-width: 1200px;
          margin: 60px auto;
          padding: 0 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }

        .about-content {
          flex: 1 1 50%;
          min-width: 300px;
        }

        .about-content h2 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #333;
        }

        .about-content p {
          font-size: 16px;
          color: white;
          background: rgba(0, 47, 108, 0.9);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          margin-bottom: 20px;
        }

        .slideshow-container {
          flex: 1 1 40%;
          min-width: 300px;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .slide {
          display: none;
          width: 100%;
          height: 400px;
          position: relative;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slide-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 15px;
          text-align: center;
        }

        .prev, .next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: auto;
          padding: 16px;
          color: white;
          font-weight: bold;
          font-size: 20px;
          cursor: pointer;
          background: rgba(0,0,0,0.3);
          border-radius: 0 3px 3px 0;
          user-select: none;
          transition: 0.3s;
        }

        .next {
          right: 0;
          border-radius: 3px 0 0 3px;
        }

        .prev:hover, .next:hover {
          background: rgba(0,0,0,0.8);
        }

        .dots-container {
          text-align: center;
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
        }

        .dot {
          cursor: pointer;
          height: 12px;
          width: 12px;
          margin: 0 5px;
          background-color: rgba(255,255,255,0.5);
          border-radius: 50%;
          display: inline-block;
          transition: background-color 0.3s ease;
        }

        .active, .dot:hover {
          background-color: white;
        }

        @keyframes fade {
          from {opacity: .4} 
          to {opacity: 1}
        }

        .fade {
          animation-name: fade;
          animation-duration: 1s;
        }

        .committee-section {
          max-width: 1000px;
          margin: 50px auto;
          padding: 0 20px;
        }

        .committee-section h2 {
          text-align: center;
          font-size: 26px;
          margin-bottom: 30px;
          color: #3c41d4;
        }

        .committee-members {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .member-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 10px;
          width: 280px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        .member-card img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 15px;
        }

        .member-card h4 {
          margin: 10px 0 5px;
          color: #333;
        }

        .member-card p {
          font-size: 14px;
          color: #777;
        }

        .form-section {
          max-width: 900px;
          margin: 60px auto;
          padding: 40px 20px;
          background-color: #fefefe;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .form-section h2 {
          text-align: center;
          color: #3c90d4;
          margin-bottom: 30px;
        }

        .choir-form, .team-form {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .form-group {
          flex: 1 1 45%;
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          margin-bottom: 6px;
          font-weight: bold;
        }

        .form-group input,
        .form-group select {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }

        button[type="submit"] {
          margin-top: 30px;
          padding: 12px 20px;
          background-color: #3ca4d4;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          align-self: center;
          transition: background 0.3s ease;
        }

        button[type="submit"]:hover {
          background-color: #b13266;
        }

        .form-group textarea {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 14px;
          resize: vertical;
        }

        footer {
          background-color: #272A55;
          color: white;
          padding: 40px 0;
          margin-top: 60px;
          width: 100%;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .footer-section {
          flex: 1;
          min-width: 250px;
          margin-bottom: 30px;
        }

        .footer-logo {
          max-width: 180px;
          margin-bottom: 20px;
        }

        .footer-section h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .footer-section p {
          font-size: 14px;
          color: #ccc;
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 12px;
        }

        .footer-section a {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }

        .footer-section a:hover {
          color: #ccc;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icons a {
          color: white;
          font-size: 20px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
          margin-top: 20px;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .copyright {
          font-size: 12px;
          color: #ccc;
        }

        .footer-links {
          display: flex;
          gap: 15px;
        }

        .footer-links a {
          font-size: 12px;
          color: #ccc;
          text-decoration: none;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .info-boxes {
            flex-direction: column;
            align-items: center;
          }

          .about-gallery-section {
            flex-direction: column;
          }

          .slideshow-container {
            order: -1;
          }

          .committee-members {
            flex-direction: column;
            align-items: center;
          }
          
          .form-group {
            flex: 1 1 100%;
          }
        }
      `}</style>
    </>
  );
};

export default DramaSociety;