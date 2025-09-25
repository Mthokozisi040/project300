'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Mail, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle,
  Loader2
} from 'lucide-react';

const API_BASE_URL = 'http://localhost:3001';

export default function ResendVerification() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    if (!email) {
      setError('Please enter your email address');
      setLoading(false);
      return;
    }

    if (!email.toLowerCase().endsWith('@ump.ac.za')) {
      setError('Please use your UMP email address (@ump.ac.za)');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/resend-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Verification email sent successfully! Please check your inbox.');
        setError('');
      } else {
        setError(data.error || 'Failed to send verification email');
        setMessage('');
      }
    } catch (error) {
      setError('Network error. Please try again later.');
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link 
            href="/login" 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back to Login
          </Link>
          
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900">Resend Verification Email</h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your UMP email address to receive a new verification link
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              UMP Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="your.email@ump.ac.za"
              disabled={loading}
            />
          </div>

          {/* Messages */}
          {message && (
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">{message}</p>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-red-800">{error}</p>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                  Sending...
                </>
              ) : (
                'Send Verification Email'
              )}
            </button>
          </div>
        </form>

        {/* Additional Help */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-800 mb-2">Need help?</h3>
          <ul className="text-sm text-blue-600 space-y-1">
            <li>• Check your spam or junk folder</li>
            <li>• Ensure you're using your UMP email address</li>
            <li>• Contact support if you continue to have issues</li>
          </ul>
        </div>

        {/* Support Contact */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Still having trouble?{' '}
            <Link href="/support" className="font-medium text-blue-600 hover:text-blue-500">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}