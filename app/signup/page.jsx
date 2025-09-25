"use client"
import { useState, useEffect, useRef } from 'react';
import { 
  FaUser, FaIdCard, FaBook, FaVenusMars, 
  FaCalendar, FaPhone, FaEnvelope, 
  FaCheck, FaCheckCircle, FaExclamationCircle, 
  FaUserPlus, FaEye, FaEyeSlash, FaLock,
  FaSpinner
} from 'react-icons/fa';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Backend API base URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function StudentSignup() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    studentId: '',
    course: '',
    gender: '',
    year: '',
    contact: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [profilePic, setProfilePic] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);

  // Form validation
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordRequirements, setPasswordRequirements] = useState({
    length: false,
    uppercase: false,
    number: false,
    special: false
  });
  const [loading, setLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [debugInfo, setDebugInfo] = useState(null);

  // Refs
  const profilePicRef = useRef(null);

  // Handle password matching with useEffect to avoid stale state
  useEffect(() => {
    if (formData.password && formData.confirmPassword) {
      if (formData.password !== formData.confirmPassword) {
        setErrors(prev => ({
          ...prev,
          confirmPassword: "Passwords don't match"
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          confirmPassword: null
        }));
      }
    }
  }, [formData.password, formData.confirmPassword]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }

    // Password strength check
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          profilePic: 'Profile picture must be less than 5MB'
        }));
        return;
      }
      
      setProfilePic(file);
      setErrors(prev => ({
        ...prev,
        profilePic: null
      }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove profile picture
  const removeProfilePic = () => {
    setProfilePic(null);
    setProfilePreview(null);
    if (profilePicRef.current) {
      profilePicRef.current.value = '';
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = 'Please enter your first name';
    if (!formData.lastName.trim()) newErrors.lastName = 'Please enter your last name';
    if (!formData.studentId.trim()) newErrors.studentId = 'Please enter your student number';
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!formData.email.toLowerCase().endsWith('@ump.ac.za')) {
      newErrors.email = 'Please use your official UMP email (@ump.ac.za)';
    }
    
    // Other required fields
    if (!formData.course.trim()) newErrors.course = 'Please enter your course';
    if (!formData.gender) newErrors.gender = 'Please select your gender';
    if (!formData.year) newErrors.year = 'Please select your year of study';
    if (!formData.contact.trim()) newErrors.contact = 'Please enter your contact number';
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Please create a password';
    } else if (!Object.values(passwordRequirements).every(req => req)) {
      newErrors.password = 'Password does not meet requirements';
    }
    
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check password strength
  const checkPasswordStrength = (password) => {
    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    setPasswordRequirements({
      length: hasLength,
      uppercase: hasUppercase,
      number: hasNumber,
      special: hasSpecial
    });

    let strength = 0;
    if (hasLength) strength += 25;
    if (hasUppercase) strength += 25;
    if (hasNumber) strength += 25;
    if (hasSpecial) strength += 25;
    setPasswordStrength(strength);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Test backend connection
  const testBackendConnection = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/health`);
      const data = await response.json();
      return { success: response.ok, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    // Final password match validation
    if (formData.password !== formData.confirmPassword) {
      setErrors(prev => ({
        ...prev,
        confirmPassword: "Passwords don't match"
      }));
      return;
    }

    setLoading(true);
    setErrors(prev => ({ ...prev, submit: null }));
    setDebugInfo(null);

    try {
      // First test the backend connection
      const connectionTest = await testBackendConnection();
      if (!connectionTest.success) {
        throw new Error(`Cannot connect to backend server: ${connectionTest.error}`);
      }

      // Prepare data for backend
      const signupData = {
        email: formData.email,
        password: formData.password,
        contact: formData.contact,
        course: formData.course,
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: formData.gender,
        profilePic: profilePreview,
        role: 'student',
        studentId: formData.studentId,
        year: formData.year
      };

      console.log('Sending signup data to backend:', { ...signupData, password: '***' });

      // Send data to your backend API
      const backendResponse = await fetch(`${API_BASE_URL}/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      const backendData = await backendResponse.json();
      
      // Store debug info
      setDebugInfo({
        status: backendResponse.status,
        statusText: backendResponse.statusText,
        data: backendData,
        url: `${API_BASE_URL}/api/signup`
      });

      console.log('Backend response:', {
        status: backendResponse.status,
        data: backendData
      });

      if (!backendResponse.ok) {
        // Handle specific error cases
        if (backendResponse.status === 400 || backendResponse.status === 409) {
          throw new Error(backendData.error || 'Registration failed');
        } else {
          throw new Error(backendData.error || `Server error (${backendResponse.status}). Please try again later.`);
        }
      }

      // Check if the response indicates success
      if (backendData.success || backendResponse.status === 201) {
        setSignupSuccess(true);
        
        // Clear form data on success
        setFormData({
          firstName: '',
          lastName: '',
          studentId: '',
          course: '',
          gender: '',
          year: '',
          contact: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        setProfilePic(null);
        setProfilePreview(null);
        setPasswordStrength(0);
        setPasswordRequirements({
          length: false,
          uppercase: false,
          number: false,
          special: false
        });
      } else {
        throw new Error(backendData.error || 'Registration failed');
      }
      
    } catch (error) {
      console.error('Signup error:', error);
      
      // Set appropriate error message
      setErrors(prev => ({
        ...prev,
        submit: error.message
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100" 
         style={{ 
           backgroundImage: "url('logo.jpg')",
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>
      
      <div className="relative w-full max-w-2xl mx-4 my-8 bg-white bg-opacity-95 rounded-lg shadow-lg overflow-hidden backdrop-filter backdrop-blur-sm">
        {/* Gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>

        {/* Header */}
        <div className="px-8 py-8 text-center bg-white">
          <div className="mb-6">
            <img src="logo.png" alt="UMP Logo" className="h-16 mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Signup</h1>
          <p className="text-gray-600 mb-1">Create your account to access co-curricular activities</p>
          <p className="text-gray-600">Join thousands of students managing their activities</p>
        </div>

        {/* Form */}
        <form className="px-8 pb-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 mb-0">
            {/* Left Column */}
            <div className="flex-1 space-y-5">
              <div className={`form-group ${errors.firstName ? 'error' : ''}`}>
                <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="First name"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              <div className={`form-group ${errors.studentId ? 'error' : ''}`}>
                <label className="block text-gray-700 font-semibold mb-2">Student Number *</label>
                <div className="relative">
                  <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="Student no."
                  />
                </div>
                {errors.studentId && (
                  <p className="text-red-500 text-sm mt-1">{errors.studentId}</p>
                )}
              </div>

              <div className={`form-group ${errors.course ? 'error' : ''}`}>
                <label className="block text-gray-700 font-semibold mb-2">Course *</label>
                <div className="relative">
                  <FaBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="Course of study"
                  />
                </div>
                {errors.course && (
                  <p className="text-red-500 text-sm mt-1">{errors.course}</p>
                )}
              </div>

              <div className={`form-group ${errors.gender ? 'error' : ''}`}>
                <label className="block text-gray-700 font-semibold mb-2">Gender *</label>
                <div className="relative">
                  <FaVenusMars className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none transition"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-5">
              <div className={`form-group ${errors.lastName ? 'error' : ''}`}>
                <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="Last name"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>

              <div className={`form-group ${errors.year ? 'error' : ''}`}>
                <label className="block text-gray-700 font-semibold mb-2">Year of Study *</label>
                <div className="relative">
                  <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 appearance-none transition"
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="5">5th Year</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                {errors.year && (
                  <p className="text-red-500 text-sm mt-1">{errors.year}</p>
                )}
              </div>

              <div className={`form-group ${errors.contact ? 'error' : ''}`}>
                <label className="block text-gray-700 font-semibold mb-2">Contact Number *</label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="e.g. +27 72 123 4567"
                  />
                </div>
                {errors.contact && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
                )}
              </div>

              <div className="form-group">
                <label className="block text-gray-700 font-semibold mb-2">
                  Profile Picture <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                {profilePreview ? (
                  <div className="flex items-center gap-3 mb-2">
                    <img src={profilePreview} alt="Profile Preview" className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover" />
                    <button
                      type="button"
                      onClick={removeProfilePic}
                      className="text-red-500 text-sm cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ) : null}
                <input
                  type="file"
                  ref={profilePicRef}
                  onChange={handleProfilePicChange}
                  accept="image/*"
                  className="w-full py-2"
                />
                {errors.profilePic && (
                  <p className="text-red-500 text-sm mt-1">{errors.profilePic}</p>
                )}
              </div>
            </div>
          </div>

          <div className={`form-group mt-5 ${errors.email ? 'error' : ''}`}>
            <label className="block text-gray-700 font-semibold mb-2">Email *</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                placeholder="Email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
            <p className="text-gray-500 text-sm mt-2">Use your official university email (@ump.ac.za)</p>
          </div>

          <div className={`form-group mt-5 ${errors.password ? 'error' : ''}`}>
            <label className="block text-gray-700 font-semibold mb-2">Create Password *</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                placeholder="Create your password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            
            <div className="h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
              <div 
                className="h-full transition-all duration-300"
                style={{
                  width: `${passwordStrength}%`,
                  backgroundColor: passwordStrength < 50 ? '#dc3545' : 
                                  passwordStrength < 75 ? '#ffc107' : '#28a745'
                }}
              ></div>
            </div>
            
            {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
                
                <ul className="mt-3 pl-5 text-gray-600 text-sm">
                  <li className={`mb-1 ${passwordRequirements.length ? 'text-green-500' : ''}`}>
                    {passwordRequirements.length ? '✓' : '•'} At least 8 characters
                  </li>
                  <li className={`mb-1 ${passwordRequirements.uppercase ? 'text-green-500' : ''}`}>
                    {passwordRequirements.uppercase ? '✓' : '•'} At least one uppercase letter
                  </li>
                  <li className={`mb-1 ${passwordRequirements.number ? 'text-green-500' : ''}`}>
                    {passwordRequirements.number ? '✓' : '•'} At least one number
                  </li>
                  <li className={`${passwordRequirements.special ? 'text-green-500' : ''}`}>
                    {passwordRequirements.special ? '✓' : '•'} At least one special character
                  </li>
                </ul>
              </div>

              <div className={`form-group mt-5 ${errors.confirmPassword ? 'error' : ''}`}>
                <label className="block text-gray-700 font-semibold mb-2">Confirm Password *</label>
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                    placeholder="Confirm your password"
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {errors.submit && (
                <div className="text-red-500 text-center my-4 p-3 bg-red-50 rounded-lg border border-red-200">
                  <FaExclamationCircle className="inline mr-2" />
                  {errors.submit}
                </div>
              )}

              {signupSuccess ? (
                <div className="text-center p-4 bg-green-50 text-green-700 rounded-lg mb-4 border border-green-200">
                  <FaCheckCircle className="inline mr-2 text-xl" />
                  Account created successfully! Please check your email to verify your account.
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5 hover:shadow-md mt-6 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    <>
                      <FaUserPlus />
                      Create Account
                    </>
                  )}
                </button>
              )}

              {/* Debug information (visible in development) */}
              {process.env.NODE_ENV === 'development' && debugInfo && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg text-xs">
                  <h4 className="font-bold mb-2">Debug Information:</h4>
                  <pre className="whitespace-pre-wrap">
                    {JSON.stringify(debugInfo, null, 2)}
                  </pre>
                </div>
              )}

              <div className="text-center text-gray-600 mt-6">
                Already have an account?{' '}
                <a href="/login" className="text-blue-500 font-semibold hover:underline">
                  Log in here
                </a>
              </div>
            </form>
          </div>
        </div>

        <Footer />
      </>
    );
  }