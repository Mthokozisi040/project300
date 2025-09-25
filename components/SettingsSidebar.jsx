'use client'
import { FiUser, FiBell, FiLock, FiChevronRight } from 'react-icons/fi'

export default function SettingsSidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    {
      id: 'account',
      label: 'Account',
      icon: <FiUser className="text-lg" />
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <FiBell className="text-lg" />
    },
    {
      id: 'privacy',
      label: 'Privacy & Security',
      icon: <FiLock className="text-lg" />
    }
  ]

  return (
    <div className="w-full md:w-64 border-r border-gray-200 ml-2 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Settings</h2>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-left ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-700 dark:bg-gray-700 dark:text-blue-400'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center">
                <span className="mr-3">{item.icon}</span>
                <span>{item.label}</span>
              </div>
              <FiChevronRight className="text-gray-400" />
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}