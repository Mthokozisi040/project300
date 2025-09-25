'use client'

import { useState } from 'react'
import { FiPaperclip, FiMic, FiSend } from 'react-icons/fi'

export default function MessageInput() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      // Send message logic
      console.log('Message sent:', message)
      setMessage('')
    }
  }

  return (
    <div className="p-4 border-t border-gray-200 dark:border-gray-700 mr-2 mb-2 bg-white dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="flex items-center">
        <button
          type="button"
          className="p-2 text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 rounded-full"
        >
          <FiPaperclip className="text-xl" />
        </button>
        <input
          type="text"
          className="flex-1 mx-3 py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="button"
          className="p-2 text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 rounded-full mr-2"
        >
          <FiMic className="text-xl" />
        </button>
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <FiSend className="text-xl" />
        </button>
      </form>
    </div>
  )
}