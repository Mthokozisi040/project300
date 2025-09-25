'use client'

export default function ActivityCard({ activity, className = "", style }) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={style}
    >
      {/* Image */}
      <div className="relative h-32 bg-gray-200 overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="text-xs text-blue-600 font-medium mb-2 uppercase tracking-wide">
          {activity.course}
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2 text-lg">
          {activity.title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <span className="mr-1">📍</span>
          {activity.location}
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {activity.description}
        </p>
        
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Apply
        </button>
      </div>
    </div>
  );
}