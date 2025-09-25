"use client"
import Layout from '../community/components/Layout'
import ActivityFeed from '../community/components/ActivityFed'
import CommunitiesList from '../community/components/CommunitiesList'
import EventsList from '../community/components/EventsList'
import AnnouncementsList from '../community/components/AnouncementsList'

export default function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Activity Feed */}
        <div className="lg:col-span-8">
          <ActivityFeed />
        </div>
        
        {/* Sidebar Cards */}
        <div className="lg:col-span-4 space-y-6">
          <CommunitiesList />
          <EventsList />
          <AnnouncementsList />
        </div>
      </div>
    </Layout>
  )
}