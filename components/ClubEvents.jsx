import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'

export default function ClubEvents({ events }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Upcoming Events</h2>
      
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            <h3 className="font-medium text-gray-900 dark:text-white">{event.title}</h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <FiCalendar className="mr-1" />
                {new Date(event.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </div>
              <div className="flex items-center">
                <FiClock className="mr-1" />
                {event.time}
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-1" />
                {event.location}
              </div>
            </div>
            <button className="mt-3 px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600">
              RSVP
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}