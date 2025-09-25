"use client"
import Navbar from '@/components/Navbar';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import { FaChevronLeft, FaChevronRight, FaSpinner, FaEnvelope } from 'react-icons/fa';
import { useParams, useRouter } from 'next/navigation';

export default function ActivityDetailPage() {
  const [activityData, setActivityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slideIndex, setSlideIndex] = useState(1);
  const [formData, setFormData] = useState({});
  const [questionFormData, setQuestionFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const params = useParams();
  const router = useRouter();
  const activityName = params.activityName;

  // Auto-advance slides
  useEffect(() => {
    if (!activityData?.gallery) return;
    
    const interval = setInterval(() => {
      plusSlides(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex, activityData]);

  // Fetch activity data from activity_pages table and related tables
  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/activity-pages/${activityName}`);
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Activity not found');
          }
          throw new Error('Failed to fetch activity data');
        }
        
        const data = await response.json();
        setActivityData(data);
        
        // Initialize form data based on the actual page structure
        const initialFormData = {
          name: '',
          surname: '',
          gender: '',
          student_number: '',
          id_number: '',
          course: '',
          year: '',
          contact: '',
          medical_aid: '',
          scheme_number: '',
          next_of_kin: '',
          next_of_kin_contact: ''
        };
        
        const initialQuestionData = {
          committee_email: '',
          name: '',
          surname: '',
          student_number: '',
          message: ''
        };
        
        setFormData(initialFormData);
        setQuestionFormData(initialQuestionData);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (activityName) {
      fetchActivityData();
    }
  }, [activityName]);

  // Slideshow functions
  const plusSlides = (n) => {
    if (!activityData?.gallery) return;
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    if (!activityData?.gallery) return;
    
    let newIndex;
    if (n > activityData.gallery.length) { newIndex = 1; }
    else if (n < 1) { newIndex = activityData.gallery.length; }
    else { newIndex = n; }
    
    setSlideIndex(newIndex);
  };

  // Form handlers
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuestionInputChange = (e) => {
    setQuestionFormData({
      ...questionFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(`/api/form-submissions/${activityName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData: formData,
          formType: 'registration'
        }),
      });
      
      if (response.ok) {
        setSubmitMessage('Registration submitted successfully!');
        // Reset form
        const resetForm = {
          name: '',
          surname: '',
          gender: '',
          student_number: '',
          id_number: '',
          course: '',
          year: '',
          contact: '',
          medical_aid: '',
          scheme_number: '',
          next_of_kin: '',
          next_of_kin_contact: ''
        };
        setFormData(resetForm);
      } else {
        throw new Error('Failed to submit registration');
      }
    } catch (err) {
      setSubmitMessage('Error submitting registration. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch(`/api/form-submissions/${activityName}`, {
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
        setSubmitMessage('Question submitted successfully! We will get back to you soon.');
        // Reset form
        const resetForm = {
          committee_email: '',
          name: '',
          surname: '',
          student_number: '',
          message: ''
        };
        setQuestionFormData(resetForm);
      } else {
        throw new Error('Failed to submit question');
      }
    } catch (err) {
      setSubmitMessage('Error submitting question. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="font-sans">
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <FaSpinner className="animate-spin text-blue-600 text-4xl mx-auto mb-4" />
            <p className="text-gray-600">Loading activity details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !activityData) {
    return (
      <div className="font-sans">
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl text-red-600 mb-4">Activity Not Found</h1>
            <p className="text-gray-600 mb-4">{error || 'The requested activity could not be found.'}</p>
            <button 
              onClick={() => router.push('/sports')}
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Back to Activities
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { page, gallery, committee } = activityData;

  return (
    <div className="font-sans">
      <Navbar />

      {/* Activity Hero Section */}
      <section 
        className="activity-hero relative bg-cover bg-center text-white py-20 text-center h-[450px] w-full"
        style={{ backgroundImage: `url('${page.hero_image_url}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="activity-hero-content relative z-10 max-w-4xl mx-auto pt-16">
          <span className="activity-tag bg-white/20 px-3 py-1 rounded-full text-sm mb-4 inline-block">
            {page.activity_type}
          </span>
          <h1 className="text-4xl md:text-5xl mb-4 font-bold">{page.hero_title}</h1>
          <p className="text-xl md:text-2xl opacity-90">{page.hero_description}</p>
        </div>
        
        {/* Info Boxes */}
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

      {/* About & Gallery Section */}
      <section className="about-gallery-section max-w-6xl mx-auto my-16 px-5 flex flex-wrap gap-10">
        <div className="about-content flex-1 min-w-[300px]">
          <h2 className="text-2xl mb-5 text-[#333] font-bold">{page.activity_name}</h2>
          <div className="text-base text-white bg-[rgba(0,47,108,0.9)] p-5 rounded-lg shadow mb-5 whitespace-pre-line">
            {page.about_content}
          </div>
        </div>

        {gallery && gallery.length > 0 && (
          <div className="slideshow-container flex-1 min-w-[300px] relative rounded-lg overflow-hidden shadow-xl">
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
                <span 
                  key={index}
                  className={`dot cursor-pointer h-3 w-3 mx-1.5 bg-[rgba(255,255,255,0.5)] rounded-full inline-block hover:bg-white transition-colors ${
                    slideIndex === index + 1 ? 'bg-white' : ''
                  }`} 
                  onClick={() => currentSlide(index + 1)}
                ></span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Registration Form Section */}
      <section className="form-section max-w-4xl mx-auto my-16 py-10 px-5 bg-[#fefefe] rounded-xl shadow-lg">
        <h2 className="text-center text-2xl text-[#3c90d4] mb-8 font-bold">Join {page.activity_name}</h2>
        
        {submitMessage && (
          <div className={`mb-6 p-3 rounded ${
            submitMessage.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
            {submitMessage}
          </div>
        )}
        
        <form className="team-form grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={handleRegistrationSubmit}>
          {/* Name */}
          <div className="form-group flex flex-col">
            <label htmlFor="name" className="mb-1.5 font-bold text-sm">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>

          {/* Surname */}
          <div className="form-group flex flex-col">
            <label htmlFor="surname" className="mb-1.5 font-bold text-sm">Surname:</label>
            <input 
              type="text" 
              id="surname" 
              name="surname" 
              required 
              value={formData.surname || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>

          {/* Gender */}
          <div className="form-group flex flex-col">
            <label htmlFor="gender" className="mb-1.5 font-bold text-sm">Gender:</label>
            <select 
              id="gender" 
              name="gender" 
              required 
              value={formData.gender || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm"
            >
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Student Number */}
          <div className="form-group flex flex-col">
            <label htmlFor="student_number" className="mb-1.5 font-bold text-sm">Student Number:</label>
            <input 
              type="text" 
              id="student_number" 
              name="student_number" 
              required 
              value={formData.student_number || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>

          {/* ID Number */}
          <div className="form-group flex flex-col">
            <label htmlFor="id_number" className="mb-1.5 font-bold text-sm">ID Number:</label>
            <input 
              type="text" 
              id="id_number" 
              name="id_number" 
              required 
              value={formData.id_number || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>

          {/* Course */}
          <div className="form-group flex flex-col">
            <label htmlFor="course" className="mb-1.5 font-bold text-sm">Course:</label>
            <select 
              id="course" 
              name="course" 
              required 
              value={formData.course || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm"
            >
              <option value="">-- Select Course --</option>
              <option value="Diploma ICT">Diploma ICT</option>
              <option value="BA Development Studies">BA Development Studies</option>
              <option value="BEd">Bachelor of Education</option>
              <option value="BSc Computer Science">BSc Computer Science</option>
              <option value="BCom Accounting">BCom Accounting</option>
            </select>
          </div>

          {/* Year of Study */}
          <div className="form-group flex flex-col">
            <label htmlFor="year" className="mb-1.5 font-bold text-sm">Year of Study:</label>
            <select 
              id="year" 
              name="year" 
              required 
              value={formData.year || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm"
            >
              <option value="">-- Select Year --</option>
              <option value="1st Year">1st Year</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

          {/* Contact Number */}
          <div className="form-group flex flex-col">
            <label htmlFor="contact" className="mb-1.5 font-bold text-sm">Contact Number:</label>
            <input 
              type="text" 
              id="contact" 
              name="contact" 
              required 
              value={formData.contact || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>

          {/* Medical Aid Scheme */}
          <div className="form-group flex flex-col">
            <label htmlFor="medical_aid" className="mb-1.5 font-bold text-sm">Medical Aid Scheme:</label>
            <input 
              type="text" 
              id="medical_aid" 
              name="medical_aid" 
              value={formData.medical_aid || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>

          {/* Scheme Number */}
          <div className="form-group flex flex-col">
            <label htmlFor="scheme_number" className="mb-1.5 font-bold text-sm">Scheme Number:</label>
            <input 
              type="text" 
              id="scheme_number" 
              name="scheme_number" 
              value={formData.scheme_number || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>

          {/* Next of Kin */}
          <div className="form-group flex flex-col">
            <label htmlFor="next_of_kin" className="mb-1.5 font-bold text-sm">Next of Kin:</label>
            <input 
              type="text" 
              id="next_of_kin" 
              name="next_of_kin" 
              required 
              value={formData.next_of_kin || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>

          {/* Next of Kin Contact */}
          <div className="form-group flex flex-col">
            <label htmlFor="next_of_kin_contact" className="mb-1.5 font-bold text-sm">Next of Kin Contact:</label>
            <input 
              type="text" 
              id="next_of_kin_contact" 
              name="next_of_kin_contact" 
              required 
              value={formData.next_of_kin_contact || ''}
              onChange={handleInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>
          
          <div className="form-group md:col-span-2 flex justify-center">
            <button 
              type="submit" 
              disabled={submitting}
              className="mt-4 px-8 py-3 bg-[#3ca4d4] text-white border-none rounded-lg cursor-pointer text-base hover:bg-[#b13266] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </div>
        </form>
      </section>

      {/* Committee Section */}
      {committee && committee.length > 0 && (
        <section className="committee-section max-w-5xl mx-auto my-12 px-5">
          <h2 className="text-center text-2xl mb-8 text-[#3c41d4] font-bold">Committee Members</h2>
          <div className="committee-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committee.map((member) => (
              <div key={member.id} className="member-card bg-white border border-[#ddd] rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <img 
                  src={member.image_url || "/account icon.png"} 
                  alt={member.name} 
                  className="w-20 h-20 rounded-full mb-4 mx-auto object-cover"
                />
                <h4 className="my-2.5 text-[#333] font-semibold">{member.first_name} {member.last_name}</h4>
                <p className="text-sm text-[#777] mb-3">{member.position}</p>
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

      {/* Questions Form Section */}
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
          {/* Committee Email */}
          <div className="form-group flex flex-col">
            <label htmlFor="committee_email" className="mb-1.5 font-bold text-sm">Send To (Committee Member):</label>
            <select 
              id="committee_email" 
              name="committee_email" 
              required 
              value={questionFormData.committee_email || ''}
              onChange={handleQuestionInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm"
            >
              <option value="">-- Select Email --</option>
              {committee && committee.map((member) => (
                <option key={member.id} value={member.email}>
                  {member.first_name} {member.last_name} - {member.position}
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div className="form-group flex flex-col">
            <label htmlFor="name" className="mb-1.5 font-bold text-sm">Your Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={questionFormData.name || ''}
              onChange={handleQuestionInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>

          {/* Surname */}
          <div className="form-group flex flex-col">
            <label htmlFor="surname" className="mb-1.5 font-bold text-sm">Your Surname:</label>
            <input 
              type="text" 
              id="surname" 
              name="surname" 
              required 
              value={questionFormData.surname || ''}
              onChange={handleQuestionInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>

          {/* Student Number */}
          <div className="form-group flex flex-col">
            <label htmlFor="student_number" className="mb-1.5 font-bold text-sm">Student Number:</label>
            <input 
              type="text" 
              id="student_number" 
              name="student_number" 
              required 
              value={questionFormData.student_number || ''}
              onChange={handleQuestionInputChange}
              className="p-2.5 border border-[#ccc] rounded text-sm" 
            />
          </div>

          {/* Message */}
          <div className="form-group md:col-span-2 flex flex-col">
            <label htmlFor="message" className="mb-1.5 font-bold text-sm">Your Message or Question:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
              value={questionFormData.message || ''}
              onChange={handleQuestionInputChange}
              placeholder="Type your question here..." 
              className="p-2.5 rounded border border-[#ccc] text-sm resize-y"
            ></textarea>
          </div>
          
          <div className="form-group md:col-span-2 flex justify-center">
            <button 
              type="submit" 
              disabled={submitting}
              className="mt-4 px-8 py-3 bg-[#3ca4d4] text-white border-none rounded-lg cursor-pointer text-base hover:bg-[#b13266] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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