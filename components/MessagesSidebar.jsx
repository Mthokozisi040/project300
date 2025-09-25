'use client'

import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'

export default function MessagesSidebar({ conversations, activeConversation, setActiveConversation }) {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="w-full md:w-80 border-r ml-2 mb-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-col">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border text-white border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`flex items-center p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
              activeConversation === conversation.id ? 'bg-blue-50 dark:bg-gray-700' : ''
            }`}
            onClick={() => setActiveConversation(conversation.id)}
          >
            <div className="relative">
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {conversation.isGroup && (
                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs px-1 rounded-full">
                  Group
                </div>
              )}
            </div>
            <div className="ml-3 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {conversation.name}
                </h3>
                <span className="text-xs text-gray-500">{conversation.time}</span>
              </div>
              <p className={`text-sm ${
                conversation.unread > 0 
                  ? 'font-medium text-gray-900 dark:text-white' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}>
                {conversation.lastMessage}
              </p>
            </div>
            {conversation.unread > 0 && (
              <div className="ml-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {conversation.unread}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}