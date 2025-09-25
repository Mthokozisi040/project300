'use client'

import { FiAlertTriangle, FiCalendar, FiUser, FiBookmark } from 'react-icons/fi'
import { useState } from 'react'

export default function AnnouncementCard({ announcement }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const formattedDate = new Date(announcement.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  const priorityColors = {
    high: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    low: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
  }

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border ${
      announcement.priority === 'high' 
        ? 'border-red-200 dark:border-red-900/50' 
        : 'border-gray-200 dark:border-gray-700'
    }`}>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {announcement.title}
            </h3>
            {announcement.pinned && (
              <FiBookmark className="text-yellow-500" /> 
            )}
          </div>
          
          <div className={`text-xs px-2 py-1 rounded-full ${priorityColors[announcement.priority]}`}>
            {announcement.priority === 'high' && 'Important'}
            {announcement.priority === 'medium' && 'Notice'}
            {announcement.priority === 'low' && 'Information'}
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <div className="flex items-center">
            <FiCalendar className="mr-1" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <FiUser className="mr-1" />
            <span>{announcement.author}</span>
          </div>
          <div className="flex items-center">
            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
              {announcement.category}
            </span>
          </div>
        </div>
        
        <div className={`text-gray-700 dark:text-gray-300 ${
          isExpanded ? 'block' : 'line-clamp-2'
        }`}>
          {announcement.content}
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      </div>
    </div>
  )
}