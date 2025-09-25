import { FiSearch, FiBell, FiSun, FiMoon } from 'react-icons/fi'

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center justify-between p-4">
        {/* Logo - Replace with your actual logo */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="StudentHub Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-100 dark:bg-gray-700 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              placeholder="Search..."
            />
          </div>
          
          {/* Notification */}
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative">
            <FiBell className="text-gray-600 dark:text-gray-300" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400" />
            ) : (
              <FiMoon className="text-gray-600" />
            )}
          </button>
          
          {/* User Avatar */}
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
            JD
          </div>
        </div>
      </div>
    </header>
  )
}