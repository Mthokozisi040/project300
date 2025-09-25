'use client'
import { useState } from 'react'

export default function PrivacySettings() {
  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    activityVisibility: 'friends',
    messageRequests: 'friends-of-friends',
    dataSharing: false
  })

  const updatePrivacySetting = (key, value) => {
    setPrivacySettings(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Privacy & Security</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Profile Visibility</h3>
          <div className="space-y-2 text-white">
            {['public', 'friends', 'private'].map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`profile-${option}`}
                  name="profileVisibility"
                  checked={privacySettings.profileVisibility === option}
                  onChange={() => updatePrivacySetting('profileVisibility', option)}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor={`profile-${option}`} className="ml-2 capitalize">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>

            {/**Activity visibility */}
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Activity Visibility</h3>
          <div className="space-y-2 text-white">
            {['public', 'friends', 'private'].map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`activity-${option}`}
                  name="activityVisibility"
                  checked={privacySettings.activityVisibility === option}
                  onChange={() => updatePrivacySetting('activityVisibility', option)}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor={`activity-${option}`} className="ml-2 capitalize">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
            
            {/**Who can message yoy section */}
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">Who can message you?</h3>
          <div className="space-y-2 text-white">
            {['everyone', 'friends-of-friends', 'friends', 'no-one'].map((option) => (
              <div key={option} className="flex items-center">
                <input
                  type="radio"
                  id={`messages-${option}`}
                  name="messageRequests"
                  checked={privacySettings.messageRequests === option}
                  onChange={() => updatePrivacySetting('messageRequests', option)}
                  className="h-4 w-4 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor={`messages-${option}`} className="ml-2 capitalize">
                  {option.replace('-', ' ')}
                </label>
              </div>
            ))}
          </div>
        </div>

            {/**Allow anonymous messages section */}
        <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">Data Sharing</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Allow anonymous usage data to help improve our services
            </p>
          </div>
          <button
            onClick={() => updatePrivacySetting('dataSharing', !privacySettings.dataSharing)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full ${
              privacySettings.dataSharing ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-600'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                privacySettings.dataSharing ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}