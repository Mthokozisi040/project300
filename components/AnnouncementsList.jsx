import AnnouncementCard from './AnnouncementCard'

export default function AnnouncementsList({ announcements }) {
  // Sort announcements - pinned first, then by date (newest first)
  const sortedAnnouncements = [...announcements].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1
    if (!a.pinned && b.pinned) return 1
    return new Date(b.date) - new Date(a.date)
  })

  return (
    <div className="space-y-4">
      {sortedAnnouncements.map((announcement) => (
        <AnnouncementCard key={announcement.id} announcement={announcement} />
      ))}
    </div>
  )
}