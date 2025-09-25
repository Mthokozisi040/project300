"use client"
import { Users, Calendar, Award, Globe } from "lucide-react";
import Link from 'next/link';

const ActivityDetails = () => {
  const stats = [
    { icon: Users, label: "Active Participants", value: "2,500+" },
    { icon: Calendar, label: "Events This Month", value: "24" },
    { icon: Award, label: "Competitions Won", value: "156" },
    { icon: Globe, label: "Partner Universities", value: "45" }
  ];

  const upcomingEvents = [
    {
      date: "Dec 15",
      title: "Web Development Bootcamp",
      course: "ICT students",
      type: "Workshop"
    },
    {
      date: "Dec 18",
      title: "Data Science Challenge",
      course: "CS students", 
      type: "Competition"
    },
    {
      date: "Dec 22",
      title: "IoT Innovation Lab",
      course: "Engineering students",
      type: "Lab Session"
    },
    {
      date: "Dec 25",
      title: "Design Thinking Workshop",
      course: "Design students",
      type: "Workshop"
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section - Stats */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Activity Impact
          </h3>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors duration-200"
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Join Our Community</h4>
            <p className="text-sm opacity-90 mb-3">
              Connect with fellow students, industry professionals, and mentors in our growing ecosystem.
            </p>
            <Link href="/community" className="bg-white text-blue-600 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Section - Upcoming Events */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Upcoming Events
          </h3>
          
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                <div className="text-center bg-blue-600 text-white px-3 py-2 rounded-lg min-w-[60px]">
                  <div className="text-xs font-medium">{event.date.split(' ')[0]}</div>
                  <div className="text-lg font-bold">{event.date.split(' ')[1]}</div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 mb-1">{event.title}</h4>
                  <div className="text-sm text-blue-600 mb-1">{event.course}</div>
                  <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline">
              View All Events →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;