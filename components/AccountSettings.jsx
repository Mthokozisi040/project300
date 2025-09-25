'use client'
import { useState } from 'react'
import { FiEdit, FiCamera } from 'react-icons/fi'

export default function AccountSettings() {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john.doe@ump.ac.za')
  const [bio, setBio] = useState('Diploma In Information and Communication Technology')
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Profile Information</h2>
        
        <div className="flex items-center mb-6">
          <div className="relative">
            <img
              src="/v8285_761.png"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
              <FiCamera className="text-lg" />
            </button>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="ml-4 flex items-center text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FiEdit className="mr-1" />
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            {isEditing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
            {isEditing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900 dark:text-white">{bio}</p>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  )
}