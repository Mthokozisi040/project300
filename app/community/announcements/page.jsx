"use client"
import Header from '../components/Header'
import Sidebar from '@/components/Sidebar'
import AnnouncementsFilter from '@/components/AnnouncementsFilter'
import AnnouncementsList from '@/components/AnnouncementsList'

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "Campus Closure Tomorrow",
      content: "Due to unforeseen circumstances, the campus will be closed tomorrow. All classes and activities are canceled.",
      date: "2023-06-15",
      priority: "high",
      category: "Administrative",
      author: "University Administration",
      pinned: true
    },
    {
      id: 2,
      title: "Football Team Tryouts",
      content: "Tryouts for the football team will be held next Monday at 4 PM on the main field. Bring your sports gear and water bottles.",
      date: "2023-06-18",
      priority: "medium",
      category: "Sports",
      author: "Sports Department",
      pinned: false
    },
    {
      id: 3,
      title: "Library Extended Hours",
      content: "During finals week, the library will be open 24/7. Please respect the quiet study zones.",
      date: "2023-06-20",
      priority: "low",
      category: "Academic",
      author: "Library Services",
      pinned: true
    },
    {
      id: 4,
      title: "Career Fair Registration Open",
      content: "Sign up now for the annual Career Fair happening July 10th. Over 50 companies will be recruiting!",
      date: "2023-06-22",
      priority: "medium",
      category: "Career",
      author: "Career Center",
      pinned: false
    },
    {
      id: 5,
      title: "Dormitory Maintenance",
      content: "Scheduled water shutdown in Building A from 9 AM to 3 PM this Friday for pipe maintenance.",
      date: "2023-06-23",
      priority: "low",
      category: "Housing",
      author: "Facilities Management",
      pinned: false
    }
  ]

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      <div className="flex-1">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="p-6 pt-24 lg:pt-20 ml-0 lg:ml-64">
          {/**<div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Announcements</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Stay updated with the latest news and important notices
            </p>
          </div>*/}

          <AnnouncementsFilter />
          
          <AnnouncementsList announcements={announcements} />
        </main>
      </div>
    </div>
  )
}