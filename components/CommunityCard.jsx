'use client'

import { FiUsers, FiPlus, FiCheck } from 'react-icons/fi'
import { useState } from 'react'

export default function CommunityCard({ community }) {
  const [isMember, setIsMember] = useState(community.isMember)
  const [memberCount, setMemberCount] = useState(community.members)

  const categoryColors = {
    sports: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    academic: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    arts: 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400',
    career: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    volunteer: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
  }

  const handleJoin = () => {
    setIsMember(!isMember)
    setMemberCount(isMember ? memberCount - 1 : memberCount + 1)
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border
     border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
        <img 
          src={community.image} 
          alt={community.name}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full
             ${categoryColors[community.category.toLowerCase()]}`}>
          {community.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {community.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {community.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <FiUsers className="mr-1" />
            <span>{memberCount} members</span>
          </div>
          
          <button
            onClick={handleJoin}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
              isMember
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isMember ? (
              <>
                <FiCheck className="mr-1" />
                Joined
              </>
            ) : (
              <>
                <FiPlus className="mr-1" />
                Join
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}