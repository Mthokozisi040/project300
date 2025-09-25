"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import { FaEnvelope, FaLock, FaArrowRight, FaExclamationCircle, FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Backend API base URL
const API_BASE_URL = 'http://localhost:3001';

export default function StudentLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/check-auth`, {
          credentials: 'include'
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.authenticated) {
            router.push('/home');
          }
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
      }
    };

    checkAuthStatus();
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Please enter your email';
    if (!formData.password) newErrors.password = 'Please enter your password';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      // First, sign in with Firebase to get ID token
      const firebaseResponse = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            returnSecureToken: true,
          }),
        }
      );

      const firebaseData = await firebaseResponse.json();

      if (!firebaseResponse.ok) {
        throw new Error(firebaseData.error?.message || 'Firebase authentication failed');
      }

      const idToken = firebaseData.idToken;

      // Now send the ID token to your backend for verification and session creation
      const backendResponse = await fetch(`${API_BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for cookies/session
        body: JSON.stringify({ idToken }),
      });

      const backendData = await backendResponse.json();

      if (!backendResponse.ok) {
        throw new Error(backendData.error || 'Backend authentication failed');
      }

      // Check if email is verified
      if (backendData.emailVerified === false) {
        setErrors({
          firebase: 'Please verify your email before logging in. Check your inbox for the verification link.'
        });
        return;
      }

      // On successful login, redirect to home page
      router.push('/home');
      
    } catch (error) {
      console.error('Login error:', error);
      let errorMessage = 'An error occurred during login. Please try again.';
      
      if (error.message.includes('INVALID_LOGIN_CREDENTIALS') || 
          error.message.includes('invalid-credential')) {
        errorMessage = 'Invalid email or password. Please try again.';
      } else if (error.message.includes('USER_NOT_FOUND') || 
                 error.message.includes('user-not-found')) {
        errorMessage = 'No account found with this email.';
      } else if (error.message.includes('INVALID_PASSWORD') || 
                 error.message.includes('wrong-password')) {
        errorMessage = 'Incorrect password. Please try again.';
      } else if (error.message.includes('TOO_MANY_ATTEMPTS_TRY_LATER') || 
                 error.message.includes('too-many-requests')) {
        errorMessage = 'Too many failed attempts. Please try again later.';
      } else if (error.message.includes('USER_DISABLED') || 
                 error.message.includes('user-disabled')) {
        errorMessage = 'This account has been disabled.';
      } else if (error.message.includes('EMAIL_NOT_VERIFIED') || 
                 error.message.includes('email-not-verified')) {
        errorMessage = 'Please verify your email before logging in.';
      }
      
      setErrors(prev => ({
        ...prev,
        firebase: errorMessage
      }));
    } finally {
      setLoading(false);
    }
  };

  // Alternative: Direct backend login (if you implement password verification on backend)
  const handleSubmitDirect = async (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Please enter your email';
    if (!formData.password) newErrors.password = 'Please enter your password';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      // Send credentials directly to backend
      const response = await fetch(`${API_BASE_URL}/api/login-direct`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // On successful login, redirect to home page
      router.push('/home');
      
    } catch (error) {
      console.error('Login error:', error);
      setErrors(prev => ({
        ...prev,
        firebase: error.message
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
           backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>
      

      <div className="relative w-full max-w-md mx-4 my-8 bg-white bg-opacity-95 rounded-lg shadow-lg overflow-hidden backdrop-filter backdrop-blur-sm">
        {/* Gradient top border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>

        {/* Header */}
        <div className="px-8 py-8 text-center bg-white">
          <div className="mb-6">
            <img src="/logo.webp" alt="UMP Logo" className="h-16 mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Login</h1>
          <p className="text-gray-600">Access your co-curricular activities dashboard</p>
        </div>

        {/* Form */}
        <form className="px-8 pb-8" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div className={`form-group ${errors.email ? 'error' : ''}`}>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="Your university email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className={`form-group ${errors.password ? 'error' : ''}`}>
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="Your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div className="flex justify-between items-center">
              <Link href="/forgot-password" className="text-blue-500 text-sm hover:underline">
                Forgot password?
              </Link>
              <Link href="/resend-verification" className="text-blue-500 text-sm hover:underline">
                Resend verification email
              </Link>
            </div>

            {errors.firebase && (
              <div className="text-red-500 text-center py-2 px-4 bg-red-50 rounded-lg flex items-center justify-center gap-2">
                <FaExclamationCircle />
                {errors.firebase}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5 hover:shadow-md mt-6 disabled:opacity-70"
            >
              {loading ? (
                'Logging in...'
              ) : (
                <>
                  <FaArrowRight />
                  Login
                </>
              )}
            </button>
          </div>

          <div className="text-center text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-500 font-semibold hover:underline">
              Sign up here
            </Link>
          </div>
        </form>
      </div>
    </div>

    <Footer />
    </>
  );
}