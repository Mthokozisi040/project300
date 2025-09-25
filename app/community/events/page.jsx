"use client"
import EventsFilter from '../components/EventsFilter'
import EventsGrid from '../components/EventsGrid'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Annual Talent Show",
      date: "2023-06-25",
      time: "18:00",
      location: "Main Auditorium",
      description: "Showcase your talents at our annual event. Sign up now to participate!",
      category: "Entertainment",
      image: "/event-talent-show.jpg",
      organizer: "Student Council",
      rsvpCount: 45
    },
    {
      id: 2,
      title: "Science Fair",
      date: "2023-07-05",
      time: "10:00",
      location: "Science Block",
      description: "Present your projects and compete for prizes in various categories.",
      category: "Academic",
      image: "/event-science-fair.jpg",
      organizer: "Science Club",
      rsvpCount: 32
    },
    {
      id: 3,
      title: "Football Tournament Finals",
      date: "2023-07-12",
      time: "15:00",
      location: "Sports Field",
      description: "Come support your team in the championship match!",
      category: "Sports",
      image: "/event-football.jpg",
      organizer: "Sports Department",
      rsvpCount: 78
    },
    {
      id: 4,
      title: "Career Workshop",
      date: "2023-08-02",
      time: "14:00",
      location: "Lecture Hall B",
      description: "Learn resume building and interview skills from industry professionals.",
      category: "Workshop",
      image: "/event-career.jpg",
      organizer: "Career Services",
      rsvpCount: 22
    },
    {
      id: 5,
      title: "Art Exhibition",
      date: "2023-08-15",
      time: "19:00",
      location: "Arts Center",
      description: "View student artwork and meet the talented artists.",
      category: "Arts",
      image: "/event-art.jpg",
      organizer: "Art Society",
      rsvpCount: 18
    },
    {
      id: 6,
      title: "Debate Competition",
      date: "2023-09-05",
      time: "16:00",
      location: "Debate Hall",
      description: "Witness intellectual battles on current topics.",
      category: "Academic",
      image: "/event-debate.jpg",
      organizer: "Debate Club",
      rsvpCount: 29
    }
  ]

  return (
    <div>
      
      <Header/>
      <Sidebar/>
      <div className="pl-64"> {/* Added left padding to shift content right */}
        <div className="container mx-auto px-6 py-8 mt-16"> {/* Reduced side padding */}
          {/*<div className="mb-8 mt-60">
            <h1 className="text-3xl  font-bold text-gray-900 dark:text-white mb-2">Upcoming Events</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Browse and register for upcoming community events
            </p>
          </div>*/}

          <EventsFilter />

          <EventsGrid events={events} />
        </div>
      </div>
    </div>

  )
}