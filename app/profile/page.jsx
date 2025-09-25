'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const API_BASE_URL = 'http://co-curricular-activities-v01-api.vercel.app';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    contact: '',
    course: '',
    gender: '',
    year: '',
    student_id: '',
    profile_pic: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploading, setUploading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuthAndFetchProfile = async () => {
      try {
        // Check if user is authenticated
        const authResponse = await fetch(`${API_BASE_URL}/api/check-auth`, {
          credentials: 'include'
        });

        if (!authResponse.ok) {
          router.push('/login');
          return;
        }

        const authData = await authResponse.json();
        
        if (authData.authenticated) {
          setUser(authData.user);
          // Fetch detailed user profile
          await fetchUserProfile(authData.user.uid);
        } else {
          router.push('/login');
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetchProfile();
  }, [router]);

  const fetchUserProfile = async (uid) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users/${uid}`, {
        credentials: 'include'
      });
      
      if (response.ok) {
        const userData = await response.json();
        setFormData({
          first_name: userData.user.first_name || '',
          last_name: userData.user.last_name || '',
          email: userData.user.email || '',
          contact: userData.user.contact || '',
          course: userData.user.course || '',
          gender: userData.user.gender || '',
          year: userData.user.year || '',
          student_id: userData.user.student_id || '',
          profile_pic: userData.user.profile_pic || ''
        });
      }
    } catch (err) {
      console.error('Error fetching user profile:', err);
      setError('Failed to load profile data');
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type and size
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      setError('Image size should be less than 5MB');
      return;
    }

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('profile_picture', file);

      const response = await fetch(`${API_BASE_URL}/api/upload-profile-picture`, {
        method: 'POST',
        credentials: 'include',
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        setFormData(prev => ({ ...prev, profile_pic: result.profile_pic }));
        setSuccess('Profile picture uploaded successfully!');
        
        // Update user state
        setUser(prev => prev ? { ...prev, profile_pic: result.profile_pic } : null);
      } else {
        throw new Error('Failed to upload profile picture');
      }
    } catch (err) {
      setError('Error uploading profile picture');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`${API_BASE_URL}/api/profile`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          contact: formData.contact,
          course: formData.course,
          gender: formData.gender,
          year: formData.year
        })
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess('Profile updated successfully!');
        setEditMode(false);
        
        // Update user state with new data
        setUser(prev => prev ? { 
          ...prev, 
          first_name: formData.first_name,
          last_name: formData.last_name
        } : null);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update profile');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const sendVerificationEmail = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/resend-verification`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email })
      });

      if (response.ok) {
        setSuccess('Verification email sent! Please check your inbox.');
      } else {
        throw new Error('Failed to send verification email');
      }
    } catch (err) {
      setError('Error sending verification email');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Router will handle redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={formData.profile_pic || '/default-avatar.png'}
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
                {editMode && (
                  <label className={`absolute bottom-0 right-0 bg-white text-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-100 ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleFileUpload} 
                      disabled={uploading}
                      className="hidden" 
                    />
                    {uploading ? (
                      <div className="h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    )}
                  </label>
                )}
              </div>
              <h1 className="mt-4 text-2xl font-bold">
                {formData.first_name && formData.last_name 
                  ? `${formData.first_name} ${formData.last_name}`
                  : 'User'
                }
              </h1>
              <p className="text-blue-100">{formData.email}</p>
              {user.role && (
                <span className="mt-2 px-3 py-1 bg-blue-400 text-white text-sm rounded-full">
                  {user.role.replace('_', ' ').toUpperCase()}
                </span>
              )}
            </div>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                {success}
              </div>
            )}

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Profile Information</h2>
              {!editMode ? (
                <button
                  onClick={() => setEditMode(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditMode(false);
                    // Reset form data to current user data
                    fetchUserProfile(user.uid);
                  }}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>

            {editMode ? (
              <form onSubmit={handleProfileUpdate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    disabled
                    className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-500"
                  />
                  {!user.email_verified && (
                    <button
                      type="button"
                      onClick={sendVerificationEmail}
                      className="mt-2 text-sm text-blue-600 hover:underline"
                    >
                      Verify Email
                    </button>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Course</label>
                    <input
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2">Year of Study</label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Year</option>
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">Student ID</label>
                  <input
                    type="text"
                    value={formData.student_id}
                    disabled
                    className="w-full px-3 py-2 border rounded-md bg-gray-100 text-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">First Name</h3>
                    <p className="mt-1 text-lg">{formData.first_name || 'Not set'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Last Name</h3>
                    <p className="mt-1 text-lg">{formData.last_name || 'Not set'}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Email</h3>
                  <p className="mt-1 text-lg">{formData.email}</p>
                  {!user.email_verified && (
                    <p className="text-sm text-red-500 mt-1">Email not verified</p>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Contact Number</h3>
                  <p className="mt-1 text-lg">{formData.contact || 'Not set'}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Course</h3>
                    <p className="mt-1 text-lg">{formData.course || 'Not set'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Year of Study</h3>
                    <p className="mt-1 text-lg">{formData.year || 'Not set'}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Gender</h3>
                  <p className="mt-1 text-lg">{formData.gender || 'Not set'}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Student ID</h3>
                  <p className="mt-1 text-lg">{formData.student_id || 'Not set'}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Account Role</h3>
                  <p className="mt-1 text-lg capitalize">{user.role?.replace('_', ' ') || 'Student'}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}