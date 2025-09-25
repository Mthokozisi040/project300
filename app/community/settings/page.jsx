'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import SettingsSidebar from '@/components/SettingsSidebar'
import AccountSettings from '@/components/AccountSettings'
import NotificationSettings from '@/components/NotificationSettings'
import PrivacySettings from '@/components/PrivacySettings'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account')

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return <AccountSettings />
      case 'notifications':
        return <NotificationSettings />
      case 'privacy':
        return <PrivacySettings />
      default:
        return <AccountSettings />
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Main Sidebar */}
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="flex flex-1 overflow-hidden pt-20 ml-0 lg:ml-64">
          {/* Settings Sidebar */}
          <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Settings Content Area */}
          <div className="flex-1 overflow-y-auto p-6 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>
              {renderTabContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}