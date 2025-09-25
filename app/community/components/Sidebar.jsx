import {
  FiHome,
  FiCalendar,
  FiVolume2,
  FiUsers,
  FiMail,
  FiSettings,
  FiLogOut,
  FiMusic,
  FiAward,
  FiBook
} from 'react-icons/fi'

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 bg-white dark:bg-gray-800 shadow-sm fixed h-screen z-20">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <h2 className='text-white text-bold'>
            University Of <br />
            Mpumalanga
          </h2>
          {/*<img 
            src="/footer.png" 
            alt="StudentHub Logo" 
            className="h-8 w-auto"
          />*/}
        </div>
      </div>
      
      <nav className="p-4">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="/community" className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400">
                <FiHome className="text-lg" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/community/events" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                <FiCalendar className="text-lg" />
                <span>Events</span>
              </a>
            </li>
            <li>
              <a href="/community/announcements" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                <FiVolume2 className="text-lg" />
                <span>Announcements</span>
              </a>
            </li>
            <li>
              <a href="/community/communities" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                <FiUsers className="text-lg" />
                <span>Communities</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                <FiMail className="text-lg" />
                <span>Messages</span>
              </a>
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">My Activities</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                <FiAward className="text-lg" />
                <span>Football Club</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                <FiMusic className="text-lg" />
                <span>Music Band</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                <FiBook className="text-lg" />
                <span>Science Club</span>
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Settings</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">
                <FiSettings className="text-lg" />
                <span>Settings</span>
              </a>
            </li>
            
          </ul>
        </div>
      </nav>
    </aside>
  )
}