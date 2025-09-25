'use client'

import { FiCalendar, FiClock, FiMapPin, FiUsers } from 'react-icons/fi'
import { useState } from 'react'

export default function EventCard({ event }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isRsvped, setIsRsvped] = useState(false)
  const [rsvpCount, setRsvpCount] = useState(event.rsvpCount)

  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  const handleRsvp = () => {
    setIsRsvped(!isRsvped)
    setRsvpCount(isRsvped ? rsvpCount - 1 : rsvpCount + 1)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-md">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          {event.category}
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{event.title}</h3>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium"
          >
            {isExpanded ? 'Show less' : 'Details'}
          </button>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <FiCalendar className="mr-2" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <FiClock className="mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <FiMapPin className="mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <FiUsers className="mr-2" />
            <span>{rsvpCount} attending</span>
          </div>
        </div>
        
        {isExpanded && (
          <div className="mb-4">
            <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Organized by: {event.organizer}
            </div>
          </div>
        )}
        
        <button
          onClick={handleRsvp}
          className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
            isRsvped
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isRsvped ? 'Attending ✓' : 'RSVP Now'}
        </button>
      </div>
    </div>
  )
}