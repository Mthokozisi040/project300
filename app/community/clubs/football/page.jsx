'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import ClubHeader from '@/components/ClubHeader'
import ClubNavigation from '@/components/ClubNavigation'
import ClubAbout from '@/components/ClubAbout'
import ClubMembers from '@/components/ClubMembers'
import ClubEvents from '@/components/ClubEvents'
import ClubGallery from '@/components/ClubGallery'

export default function FootballClubPage() {
  const [activeTab, setActiveTab] = useState('about')

  const clubData = {
    name: "University Football Club",
    description: "Competitive and recreational football for all skill levels",
    category: "Sports",
    members: 45,
    coverImage: "/football-club-cover.jpg",
    logo: "/football-club-logo.png",
    isMember: true,
    upcomingEvents: [
      {
        id: 1,
        title: "Weekly Training Session",
        date: "2023-11-15",
        time: "16:00",
        location: "Main Sports Field"
      },
      {
        id: 2,
        title: "Inter-University Match",
        date: "2023-11-22",
        time: "15:00",
        location: "City Stadium"
      }
    ],
    membersList: [
      {
        id: 1,
        name: "Alex Morgan",
        role: "Captain",
        avatar: "/alex-morgan.jpg"
      },
      {
        id: 2,
        name: "Jamie Vardy",
        role: "Vice Captain",
        avatar: "/jamie-vardy.jpg"
      },
      // ... more members
    ],
    gallery: [
      "/football-gallery-1.jpg",
      "/football-gallery-2.jpg",
      // ... more images
    ]
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'about':
        return <ClubAbout description={clubData.description} />
      case 'members':
        return <ClubMembers members={clubData.membersList} />
      case 'events':
        return <ClubEvents events={clubData.upcomingEvents} />
      case 'gallery':
        return <ClubGallery images={clubData.gallery} />
      default:
        return <ClubAbout description={clubData.description} />
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
        <main className="flex-1 overflow-hidden pt-20 ml-0 lg:ml-64">
          {/* Club Header */}
          <ClubHeader 
            name={clubData.name}
            coverImage={clubData.coverImage}
            logo={clubData.logo}
            category={clubData.category}
            members={clubData.members}
            isMember={clubData.isMember}
          />
          
          {/* Club Navigation */}
          <ClubNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Club Content */}
          <div className="bg-white dark:bg-gray-900 p-6">
            <div className="max-w-6xl mx-auto">
              {renderTabContent()}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}