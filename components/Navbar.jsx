'use client'
import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaChevronDown, FaUser, FaArrowRight, FaSignOutAlt } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

// Backend API base URL
const API_BASE_URL = 'http://localhost:3001';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isClick, setIsClick] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);
  const categoryRef = useRef(null);

  // Check authentication status
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/check-auth`, {
          credentials: 'include' // Include cookies for session-based auth
        });
        
        if (response.ok) {
          const userData = await response.json();
          setIsLoggedIn(true);
          setUser(userData.user);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsLoggedIn(false);
        setUser(null);
      }
    };

    checkAuthStatus();
  }, [pathname]);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = (href) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleCommunityClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      router.push('/login');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        setIsLoggedIn(false);
        setUser(null);
        router.push('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setSearchActive(false);
    }
  };

  return (
    <nav className='bg-white sticky top-0 z-50 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-black">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="h-10"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/"
                className={`rounded-lg p-2 ${isActive('/') ? 'text-blue-600 font-medium bg-blue-50' : 'text-black hover:bg-gray-100'}`}
              >
                Home
              </Link>

              {/* Category Dropdown */}
              <div className="relative" ref={categoryRef}>
                <button
                  className={`flex items-center rounded-lg p-2 ${(showCategoryDropdown || isActive('/sports') || isActive('/societies') || isActive('/clubs') || isActive('/political-parties')) ? 'text-blue-600 font-medium bg-blue-50' : 'text-black hover:bg-gray-100'}`}
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                >
                  Category <FaChevronDown className={`ml-1 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
                </button>
                {showCategoryDropdown && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-200">
                    <Link
                      href="/sports"
                      className={`flex items-center justify-between px-4 py-3 ${isActive('/sports') ? 'bg-blue-50 text-blue-600' : 'text-black hover:bg-blue-50'} group transition-colors`}
                    >
                      <span>Sports</span>
                      <FaArrowRight className={`${isActive('/sports') ? 'opacity-100 text-blue-600' : 'opacity-0 group-hover:opacity-100 text-blue-500'} transition-opacity`} />
                    </Link>
                    <Link
                      href="/societies"
                      className={`flex items-center justify-between px-4 py-3 ${isActive('/societies') ? 'bg-blue-50 text-blue-600' : 'text-black hover:bg-blue-50'} group transition-colors`}
                    >
                      <span>Societies</span>
                      <FaArrowRight className={`${isActive('/societies') ? 'opacity-100 text-blue-600' : 'opacity-0 group-hover:opacity-100 text-blue-500'} transition-opacity`} />
                    </Link>
                    <Link
                      href="/political-structures"
                      className={`flex items-center justify-between px-4 py-3 ${isActive('/political-parties') ? 'bg-blue-50 text-blue-600' : 'text-black hover:bg-blue-50'} group transition-colors border-b border-gray-200`}
                    >
                      <span>Political Structures</span>
                      <FaArrowRight className={`${isActive('/political-parties') ? 'opacity-100 text-blue-600' : 'opacity-0 group-hover:opacity-100 text-blue-500'} transition-opacity`} />
                    </Link>
                    <Link
                      href="/all-categories"
                      className="flex items-center justify-center px-4 py-2 text-blue-600 hover:text-blue-800 text-sm font-medium mt-1"
                    >
                      View all categories →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href={isLoggedIn ? "/community" : "/login"}
                onClick={handleCommunityClick}
                className={`rounded-lg p-2 ${isActive('/community') ? 'text-blue-600 font-medium bg-blue-50' : 'text-black hover:bg-gray-100'}`}
              >
                Community
              </Link>

              <Link
                href="/events"
                className={`rounded-lg p-2 ${isActive('/events') ? 'text-blue-600 font-medium bg-blue-50' : 'text-black hover:bg-gray-100'}`}
              >
                Events
              </Link>

              <Link
                href="/about"
                className={`rounded-lg p-2 ${isActive('/about') ? 'text-blue-600 font-medium bg-blue-50' : 'text-black hover:bg-gray-100'}`}
              >
                About us
              </Link>
            </div>
          </div>

          {/* Search and Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <div
              className={`relative transition-all duration-200 ${searchActive ? 'w-64' : 'w-40'}`}
              ref={searchRef}
            >
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder={searchActive ? "Search events, categories..." : "Search..."}
                  className={`pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none bg-gray-100 ${searchActive ? 'w-full' : 'w-10'} transition-all duration-200`}
                  onFocus={() => setSearchActive(true)}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute left-3 top-2.5 text-gray-500">
                  <FaSearch />
                </button>
              </form>
            </div>

            <div className="flex space-x-2">
              {isLoggedIn ? (
                <div className="relative group">
                  <button className="text-black hover:bg-gray-100 rounded-lg px-4 py-2 flex items-center border border-gray-200">
                    <FaUser className="mr-2" /> {user?.firstName || user?.email || 'Profile'}
                  </button>
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200 hidden group-hover:block">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-50"
                    >
                      <FaSignOutAlt className="mr-2" /> Log Out
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link href="/login" className="text-black hover:bg-gray-100 rounded-lg px-4 py-2 flex items-center border border-gray-200">
                    <FaUser className="mr-2" /> Log In
                  </Link>
                  <Link href="/signup" className="text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors bg-blue-600">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black focus:outline-none'
              onClick={toggleNavbar}
            >
              {isClick ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isClick && (
        <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-md">
          <Link
            href="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-black hover:bg-gray-100'}`}
            onClick={toggleNavbar}
          >
            Home
          </Link>

          <div className="px-3 py-2">
            <button
              className={`w-full text-left flex justify-between items-center px-3 py-2 rounded-md ${(showCategoryDropdown || isActive('/sports') || isActive('/societies') || isActive('/clubs') || isActive('/political-parties')) ? 'text-blue-600 bg-blue-50' : 'text-black hover:bg-gray-100'}`}
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              <span>Category</span>
              <FaChevronDown className={`transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
            </button>
            {showCategoryDropdown && (
              <div className="mt-2 pl-4 space-y-2 bg-gray-50 rounded-lg p-2">
                <Link
                  href="/sports"
                  className={`flex items-center justify-between px-3 py-2 rounded-md ${isActive('/sports') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'} group`}
                  onClick={toggleNavbar}
                >
                  <span>Sports</span>
                  <FaArrowRight className={`${isActive('/sports') ? 'opacity-100 text-blue-600' : 'opacity-0 group-hover:opacity-100 text-blue-500'} transition-opacity`} />
                </Link>
                <Link
                  href="/societies"
                  className={`flex items-center justify-between px-3 py-2 rounded-md ${isActive('/societies') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'} group`}
                  onClick={toggleNavbar}
                >
                  <span>Societies</span>
                  <FaArrowRight className={`${isActive('/societies') ? 'opacity-100 text-blue-600' : 'opacity-0 group-hover:opacity-100 text-blue-500'} transition-opacity`} />
                </Link>
                <Link
                  href="/political-parties"
                  className={`flex items-center justify-between px-3 py-2 rounded-md ${isActive('/political-parties') ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50'} group`}
                  onClick={toggleNavbar}
                >
                  <span>Political Parties</span>
                  <FaArrowRight className={`${isActive('/political-parties') ? 'opacity-100 text-blue-600' : 'opacity-0 group-hover:opacity-100 text-blue-500'} transition-opacity`} />
                </Link>
              </div>
            )}
          </div>

          <Link
            href={isLoggedIn ? "/community" : "/login"}
            onClick={(e) => {
              if (!isLoggedIn) {
                e.preventDefault();
                router.push('/login');
              }
              toggleNavbar();
            }}
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/community') ? 'text-blue-600 bg-blue-50' : 'text-black hover:bg-gray-100'}`}
          >
            Community
          </Link>

          <Link
            href="/events"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/events') ? 'text-blue-600 bg-blue-50' : 'text-black hover:bg-gray-100'}`}
            onClick={toggleNavbar}
          >
            Events
          </Link>

          <Link
            href="/about"
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-black hover:bg-gray-100'}`}
            onClick={toggleNavbar}
          >
            About us
          </Link>

          {/* Mobile Search */}
          <div className="px-3 py-2">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search events, categories..."
                className="w-full pl-10 pr-4 py-2 rounded-full text-sm focus:outline-none bg-gray-100"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute left-3 top-2.5 text-gray-500">
                <FaSearch />
              </button>
            </form>
          </div>

          <div className="pt-4 pb-2 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/profile"
                    className={`rounded-lg p-2 ${isActive('/profile') ? 'text-blue-600 font-medium bg-blue-50' : 'text-black hover:bg-gray-100'}`}
                    onClick={toggleNavbar}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleNavbar();
                    }}
                    className="text-black border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100"
                  >
                    <FaSignOutAlt className="inline mr-1" /> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-black border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100" onClick={toggleNavbar}>Log In</Link>
                  <Link href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700" onClick={toggleNavbar}>Sign Up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;