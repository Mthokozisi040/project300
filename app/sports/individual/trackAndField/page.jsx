"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';

export default function TrackAndFieldPage() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const [questionFormData, setQuestionFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Fetch page data from database
  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/activity-pages/track-and-field');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setPageData(data);
      } catch (err) {
        console.error('Error fetching page data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!pageData?.gallery) return;
    
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex, pageData]);

  function plusSlides(n) {
    if (!pageData?.gallery) return;
    showSlides(slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    if (!pageData?.gallery) return;
    
    let newIndex;
    if (n > pageData.gallery.length) { newIndex = 1; }
    else if (n < 1) { newIndex = pageData.gallery.length; }
    else { newIndex = n; }
    
    setSlideIndex(newIndex);
  }

  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleQuestionInputChange = (fieldName, value) => {
    setQuestionFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/form-submissions/track-and-field', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          formType: 'registration'
        }),
      });
      
      if (response.ok) {
        setSubmitMessage('Registration submitted successfully!');
        setFormData({});
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Error submitting form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/form-submissions/track-and-field', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData: questionFormData,
          formType: 'question'
        }),
      });
      
      if (response.ok) {
        setSubmitMessage('Question submitted successfully!');
        setQuestionFormData({});
      } else {
        throw new Error('Failed to submit question');
      }
    } catch (error) {
      console.error('Error submitting question:', error);
      setSubmitMessage('Error submitting question. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="font-sans">
        <Navbar />
        <div className="flex justify-center items-center h-64">
          <FaSpinner className="animate-spin text-4xl text-blue-600" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="font-sans">
        <Navbar />
        <div className="flex justify-center items-center h-64">
          <p className="text-red-500">Error loading page: {error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  const { page, gallery, committee, registrationForm, questionForm } = pageData;

  return (
    <div className="font-sans">
      {/* Navigation Bar */}
      <Navbar/>

      {/* Activity Hero Section */}
      <section 
        className="activity-hero relative bg-cover bg-center text-white py-20 px-5 text-center h-[450px] w-full" 
        style={{ backgroundImage: `url(${page.hero_image_url})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="activity-hero-content relative z-10 max-w-4xl mx-auto">
          <span className="activity-tag bg-white/20 px-3 py-1 rounded-full text-sm mb-4 inline-block">
            Sports • {page.activity_type} Activity
          </span>
          <h1 className="text-4xl mb-4 font-bold">{page.hero_title}</h1>
          <p className="text-xl mb-8 opacity-90">{page.hero_description}</p>
        </div>
        
        <div className="info-boxes flex flex-wrap gap-5 justify-center absolute bottom-2.5 left-1/2 transform -translate-x-1/2 z-10">
          <div className="info-box bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
            <h3 className="mb-2.5 text-lg text-[#493cd4] font-semibold">Trial Requirements</h3>
            <p className="text-sm text-[#333] whitespace-pre-line">{page.trial_requirements}</p>
          </div>
          <div className="info-box bg-white/95 p-5 rounded-lg w-64 shadow-lg text-left">
            <h3 className="mb-2.5 text-lg text-[#493cd4] font-semibold">Practice Schedule</h3>
            <p className="text-sm text-[#333] whitespace-pre-line">{page.practice_schedule}</p>
          </div>
        </div>
      </section>

      {/* Combined About & Gallery Section */}
      <section className="about-gallery-section max-w-6xl mx-auto my-16 px-5 flex flex-wrap gap-10">
        <div className="about-content flex-1 min-w-[300px]">
          <h2 className="text-2xl mb-5 text-[#333] font-bold">{page.activity_name}</h2>
          <div className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5 whitespace-pre-line">
            {page.about_content}
          </div>
        </div>

        {gallery && gallery.length > 0 && (
          <div className="slideshow-container flex-1 min-w-[300px] relative rounded-lg overflow-hidden shadow-xl">
            {/* Slideshow items */}
            {gallery.map((image, index) => (
              <div 
                key={image.id} 
                className={`slide fade ${slideIndex === index + 1 ? 'block' : 'hidden'} w-full h-[400px]`}
              >
                <img 
                  src={image.image_url} 
                  alt={image.caption || `Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                {image.caption && (
                  <div className="slide-caption absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-4 text-center">
                    {image.caption}
                  </div>
                )}
              </div>
            ))}

            {/* Navigation arrows */}
            <button 
              className="prev absolute top-1/2 -translate-y-1/2 w-auto px-4 py-3 text-white font-bold text-xl cursor-pointer bg-[rgba(0,0,0,0.3)] rounded-r hover:bg-[rgba(0,0,0,0.8)] transition-colors" 
              onClick={() => plusSlides(-1)}
            >
              <FaChevronLeft />
            </button>
            <button 
              className="next absolute top-1/2 -translate-y-1/2 right-0 w-auto px-4 py-3 text-white font-bold text-xl cursor-pointer bg-[rgba(0,0,0,0.3)] rounded-l hover:bg-[rgba(0,0,0,0.8)] transition-colors" 
              onClick={() => plusSlides(1)}
            >
              <FaChevronRight />
            </button>

            {/* Dots navigation */}
            <div className="dots-container text-center absolute bottom-2.5 left-0 right-0">
              {gallery.map((_, index) => (
                <button
                  key={index}
                  className={`dot cursor-pointer h-3 w-3 mx-1.5 bg-[rgba(255,255,255,0.5)] rounded-full inline-block hover:bg-white transition-colors ${
                    slideIndex === index + 1 ? 'bg-white' : ''
                  }`} 
                  onClick={() => currentSlide(index + 1)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* REGISTRATION FORM SECTION */}
      <section className="form-section max-w-4xl mx-auto my-16 py-10 px-5 bg-[#fefefe] rounded-xl shadow-lg">
        <h2 className="text-center text-2xl text-[#3c90d4] mb-8 font-bold">Join the Championship</h2>
        
        {submitMessage && (
          <div className={`mb-6 p-3 rounded ${
            submitMessage.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
            {submitMessage}
          </div>
        )}
        
        <form className="team-form grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
          {registrationForm && registrationForm.length > 0 ? (
            registrationForm.map(field => (
              <div key={field.id} className="form-group flex flex-col">
                <label htmlFor={field.field_name} className="mb-1.5 font-bold text-sm">
                  {field.field_label}:
                  {field.is_required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {field.field_type === 'select' ? (
                  <select 
                    id={field.field_name} 
                    name={field.field_name} 
                    required={field.is_required}
                    value={formData[field.field_name] || ''}
                    onChange={(e) => handleInputChange(field.field_name, e.target.value)}
                    className="p-2.5 border border-[#ccc] rounded text-sm"
                  >
                    <option value="">-- Select {field.field_label} --</option>
                    {field.field_options && Object.entries(field.field_options).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                ) : (
                  <input 
                    type={field.field_type} 
                    id={field.field_name} 
                    name={field.field_name} 
                    required={field.is_required}
                    value={formData[field.field_name] || ''}
                    onChange={(e) => handleInputChange(field.field_name, e.target.value)}
                    className="p-2.5 border border-[#ccc] rounded text-sm" 
                  />
                )}
              </div>
            ))
          ) : (
            // Default form fields if no custom fields are defined
            <>
              <div className="form-group flex flex-col">
                <label htmlFor="name" className="mb-1.5 font-bold text-sm">Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name || ''}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="p-2.5 border border-[#ccc] rounded text-sm" 
                />
              </div>
              <div className="form-group flex flex-col">
                <label htmlFor="surname" className="mb-1.5 font-bold text-sm">Surname:</label>
                <input 
                  type="text" 
                  id="surname" 
                  name="surname" 
                  required 
                  value={formData.surname || ''}
                  onChange={(e) => handleInputChange('surname', e.target.value)}
                  className="p-2.5 border border-[#ccc] rounded text-sm" 
                />
              </div>
              {/* Add more default fields as needed */}
            </>
          )}

          <div className="form-group md:col-span-2 flex justify-center">
            <button 
              type="submit" 
              disabled={submitting}
              className="mt-4 px-6 py-3 bg-[#3ca4d4] text-white border-none rounded-lg cursor-pointer text-base hover:bg-[#b13266] transition-colors disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </div>
        </form>
      </section>

      {/* COMMITTEE SECTION */}
      {committee && committee.length > 0 && (
        <section className="committee-section max-w-5xl mx-auto my-12 px-5">
          <h2 className="text-center text-2xl mb-8 text-[#3c41d4] font-bold">Committee Members</h2>
          <div className="committee-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committee.map(member => (
              <div key={member.id} className="member-card bg-white border border-[#ddd] rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <img 
                  src={member.image_url || "/account icon.png"} 
                  alt={member.name} 
                  className="w-20 h-20 rounded-full mb-4 mx-auto object-cover"
                />
                <h4 className="my-2.5 text-[#333] font-semibold">{member.name}</h4>
                <p className="text-sm text-[#777] mb-2">{member.position}</p>
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-blue-600 text-sm hover:text-blue-800 inline-flex items-center gap-1"
                  >
                    <FaEnvelope className="text-xs" />
                    Contact
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* STILL HAVE QUESTIONS FORM */}
      <section className="form-section max-w-4xl mx-auto my-16 py-10 px-5 bg-[#fefefe] rounded-xl shadow-lg">
        <h2 className="text-center text-2xl text-[#3c90d4] mb-8 font-bold">Still Have Questions?</h2>
        
        {submitMessage && (
          <div className={`mb-6 p-3 rounded ${
            submitMessage.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
            {submitMessage}
          </div>
        )}
        
        <form className="question-form grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleQuestionSubmit}>
          {questionForm && questionForm.length > 0 ? (
            questionForm.map(field => (
              <div 
                key={field.id} 
                className={`form-group flex flex-col ${
                  field.field_type === 'textarea' ? 'md:col-span-2' : ''
                }`}
              >
                <label htmlFor={field.field_name} className="mb-1.5 font-bold text-sm">
                  {field.field_label}:
                  {field.is_required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {field.field_type === 'select' ? (
                  <select 
                    id={field.field_name} 
                    name={field.field_name} 
                    required={field.is_required}
                    value={questionFormData[field.field_name] || ''}
                    onChange={(e) => handleQuestionInputChange(field.field_name, e.target.value)}
                    className="p-2.5 border border-[#ccc] rounded text-sm"
                  >
                    <option value="">-- Select {field.field_label} --</option>
                    {field.field_options && Object.entries(field.field_options).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                ) : field.field_type === 'textarea' ? (
                  <textarea 
                    id={field.field_name} 
                    name={field.field_name} 
                    rows="5" 
                    required={field.is_required}
                    value={questionFormData[field.field_name] || ''}
                    onChange={(e) => handleQuestionInputChange(field.field_name, e.target.value)}
                    placeholder="Type your question here..." 
                    className="p-2.5 rounded border border-[#ccc] text-sm resize-y"
                  ></textarea>
                ) : (
                  <input 
                    type={field.field_type} 
                    id={field.field_name} 
                    name={field.field_name} 
                    required={field.is_required}
                    value={questionFormData[field.field_name] || ''}
                    onChange={(e) => handleQuestionInputChange(field.field_name, e.target.value)}
                    className="p-2.5 border border-[#ccc] rounded text-sm" 
                  />
                )}
              </div>
            ))
          ) : (
            // Default question form fields
            <>
              <div className="form-group flex flex-col">
                <label htmlFor="q_name" className="mb-1.5 font-bold text-sm">Your Name:</label>
                <input 
                  type="text" 
                  id="q_name" 
                  name="q_name" 
                  required 
                  value={questionFormData.q_name || ''}
                  onChange={(e) => handleQuestionInputChange('q_name', e.target.value)}
                  className="p-2.5 border border-[#ccc] rounded text-sm" 
                />
              </div>
              <div className="form-group flex flex-col">
                <label htmlFor="q_email" className="mb-1.5 font-bold text-sm">Your Email:</label>
                <input 
                  type="email" 
                  id="q_email" 
                  name="q_email" 
                  required 
                  value={questionFormData.q_email || ''}
                  onChange={(e) => handleQuestionInputChange('q_email', e.target.value)}
                  className="p-2.5 border border-[#ccc] rounded text-sm" 
                />
              </div>
              <div className="form-group md:col-span-2 flex flex-col">
                <label htmlFor="message" className="mb-1.5 font-bold text-sm">Your Message:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  value={questionFormData.message || ''}
                  onChange={(e) => handleQuestionInputChange('message', e.target.value)}
                  placeholder="Type your question here..." 
                  className="p-2.5 rounded border border-[#ccc] text-sm resize-y"
                ></textarea>
              </div>
            </>
          )}

          <div className="form-group md:col-span-2 flex justify-center">
            <button 
              type="submit" 
              disabled={submitting}
              className="mt-4 px-6 py-3 bg-[#3ca4d4] text-white border-none rounded-lg cursor-pointer text-base hover:bg-[#b13266] transition-colors disabled:opacity-50"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </section>

      <Footer/>
    </div>
  );
}