'use client'
import { useState } from 'react'

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    communityUpdates: true,
    eventReminders: true,
    newMessages: true,
    announcements: true,
    weeklyDigest: false
  })

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Notification Preferences</h2>
      
      <div className="space-y-4">
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white capitalize">
                {key.split(/(?=[A-Z])/).join(' ')}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {getDescription(key)}
              </p>
            </div>
            <button
              onClick={() => toggleSetting(key)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                value ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  value ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

function getDescription(key) {
  const descriptions = {
    communityUpdates: 'Get updates about your communities',
    eventReminders: 'Receive reminders for upcoming events',
    newMessages: 'Notify me when I receive new messages',
    announcements: 'Important announcements from the university',
    weeklyDigest: 'Weekly summary of activities and events'
  }
  return descriptions[key] || ''
}