import { FiUsers, FiCalendar, FiImage } from 'react-icons/fi'

export default function ClubHeader({ name, coverImage, logo, category, members, isMember }) {
  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="h-48 md:h-64 w-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <img 
          src={coverImage}
          alt={`${name} cover`}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Club Info */}
      <div className="relative px-6 -mt-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between">
          <div className="flex items-end">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white dark:border-gray-900 bg-white dark:bg-gray-800 overflow-hidden">
              <img 
                src={logo}
                alt={`${name} logo`}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="ml-4 mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{name}</h1>
              <div className="flex items-center mt-1">
                <span className="text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-0.5 rounded-full">
                  {category}
                </span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400 flex items-center">
                  <FiUsers className="mr-1" />
                  {members} members
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button className={`px-4 py-2 rounded-lg font-medium ${
              isMember 
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}>
              {isMember ? 'Joined ✓' : 'Join Club'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}