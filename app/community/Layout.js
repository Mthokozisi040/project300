import Header from './Header'
import Sidebar from './Sidebar'
import { useState } from 'react'

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex">
        <Sidebar />
        
        <div className="flex-1">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          
          <main className="p-6 pt-24 lg:pt-20">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}