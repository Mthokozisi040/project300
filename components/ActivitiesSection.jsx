'use client'
import { FiChevronDown, FiMapPin } from 'react-icons/fi'
import { BsStars } from 'react-icons/bs'

export default function ActivitiesSection() {
  const activities = [
    {
      id: 1,
      course: "ICT students",
      title: "Hackathon",
      location: "campus",
      description: "Connect with industry leaders and explore career opportunities",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      course: "ICT students", 
      title: "Hackathon",
      location: "campus",
      description: "Connect with industry leaders and explore career opportunities",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      course: "ICT students",
      title: "Hackathon", 
      location: "campus",
      description: "Connect with industry leaders and explore career opportunities",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          {/* Dropdown */}
          <div className="relative">
            <select className="border border-gray-300 rounded-md px-4 py-2 text-base bg-white appearance-none pr-8">
              <option>All activities</option>
              <option>ICT students</option>
              <option>CS students</option>
              <option>Engineering students</option>
              <option>Design students</option>
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
          
          {/* Featured activities */}
          <span className="text-blue-600 font-medium flex items-center">
            <BsStars className="mr-2" />
            Featured activities
          </span>
        </div>
      </div>

      {/* Activity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {activities.map(activity => (
          <div key={activity.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Image */}
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="p-5">
              <div className="text-xs text-blue-600 font-medium mb-2 uppercase tracking-wide">
                {activity.course}
              </div>
              
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                {activity.title}
              </h3>
              
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <FiMapPin className="mr-1" />
                {activity.location}
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                {activity.description}
              </p>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}