export default function EventsList() {
  const events = [
    { id: 1, day: '25', month: 'Jun', title: 'Annual Talent Show', time: '6:00 PM', location: 'Auditorium' },
    { id: 2, day: '05', month: 'Jul', title: 'Science Fair', time: '10:00 AM', location: 'Science Block' },
    { id: 3, day: '15', month: 'Jul', title: 'Drama Club Performance', time: '7:30 PM', location: 'Main Hall' },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ml-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Upcoming Events</h2>
        <button className="px-3 py-1.5 text-white text-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {events.map(event => (
          <div key={event.id} className="flex items-start p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
            <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-2 text-center min-w-[50px] mr-4">
              <div className="text-blue-500 dark:text-blue-400 font-bold text-xl">{event.day}</div>
              <div className="text-xs text-gray-500 uppercase">{event.month}</div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 dark:text-white">{event.title}</h4>
              <p className="text-xs text-gray-500">{event.time} • {event.location}</p>
            </div>
            <button className="px-3 py-1 text-white text-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
              RSVP
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}