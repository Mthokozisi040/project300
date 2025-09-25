import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import CommunitiesFilter from '@/components/CommunitiesFilter'
import CommunitiesGrid from '@/components/CommunitiesGrid'

export default function CommunitiesPage() {
  const communities = [
    {
      id: 1,
      name: "Football Club",
      description: "Join our football team and participate in inter-college tournaments",
      category: "Sports",
      members: 45,
      image: "/football-club.jpg",
      isMember: true
    },
    {
      id: 2,
      name: "Science Club",
      description: "Explore scientific research and participate in national competitions",
      category: "Academic",
      members: 32,
      image: "/science-club.jpg",
      isMember: true
    },
    {
      id: 3,
      name: "Music Band",
      description: "For musicians and vocalists to collaborate and perform at events",
      category: "Arts",
      members: 28,
      image: "/music-band.jpg",
      isMember: false
    },
    {
      id: 4,
      name: "Debate Society",
      description: "Develop public speaking and critical thinking skills",
      category: "Academic",
      members: 36,
      image: "/debate-society.jpg",
      isMember: false
    },
    {
      id: 5,
      name: "Photography Club",
      description: "Learn photography techniques and organize exhibitions",
      category: "Arts",
      members: 22,
      image: "/photography-club.jpg",
      isMember: false
    },
    {
      id: 6,
      name: "Entrepreneurship Cell",
      description: "For aspiring entrepreneurs to network and develop business ideas",
      category: "Career",
      members: 18,
      image: "/entrepreneurship-cell.jpg",
      isMember: false
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
          {/*<div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Student Communities</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Join clubs and organizations that match your interests
            </p>
          </div>*/}

          <CommunitiesFilter />
          
          <CommunitiesGrid communities={communities} />
        </main>
      </div>
    </div>
  )
}