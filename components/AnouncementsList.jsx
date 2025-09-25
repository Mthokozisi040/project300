export default function AnnouncementsList() {
  const announcements = [
    { id: 1, title: 'Campus Closure', important: true, date: 'Today, 10:30 AM', content: 'Due to unforeseen circumstances, the campus will be closed tomorrow. All activities are canceled.' },
    { id: 2, title: 'Football Team Tryouts', important: false, date: 'Yesterday, 3:45 PM', content: 'Tryouts for the football team will be held next Monday at 4 PM on the main field.' },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ml-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Recent Announcements</h2>
        <button className="px-3 py-1.5 text-white text-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {announcements.map(announcement => (
          <div key={announcement.id} className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-800 dark:text-white">{announcement.title}</h4>
              {announcement.important && (
                <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded-full">
                  Important
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 mb-2">{announcement.date}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}