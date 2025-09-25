'use client'

import { useState } from 'react'
import { FiFilter, FiSearch, FiUsers } from 'react-icons/fi'

export default function CommunitiesFilter() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [membership, setMembership] = useState('all')

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'sports', label: 'Sports' },
    { value: 'academic', label: 'Academic' },
    { value: 'arts', label: 'Arts' },
    { value: 'career', label: 'Career' },
    { value: 'volunteer', label: 'Volunteer' }
  ]

  const membershipFilters = [
    { value: 'all', label: 'All Communities' },
    { value: 'joined', label: 'My Communities' },
    { value: 'not-joined', label: 'Available to Join' }
  ]

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 text-white pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border text-white border-gray-300 dark:border-gray-600 rounded-lg
             bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search communities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiFilter className="text-gray-400" />
            </div>
            <select
              className="appearance-none pl-10 pr-8 py-2 border text-white border-gray-300 dark:border-gray-600 rounded-lg
               bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUsers className="text-gray-400" />
            </div>
            <select
              className="appearance-none pl-10 pr-8 py-2 border text-white border-gray-300 dark:border-gray-600 rounded-lg
               bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={membership}
              onChange={(e) => setMembership(e.target.value)}
            >
              {membershipFilters.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}