import { FaBars, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between flex-wrap gap-4">
        <button 
          className="md:hidden bg-primary text-white p-2 rounded"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/images/logo.webp" alt="AcademiConnect Logo" className="h-10" />
            </a>
          </Link>
        </div>
        
        <div className="flex items-center bg-gray-200 rounded-lg px-3 py-2 flex-1 max-w-md mx-4">
          <input 
            type="text" 
            placeholder="Search..." 
            className="border-none bg-transparent outline-none w-full px-2"
          />
          <button className="text-primary">
            <FaSearch />
          </button>
        </div>
        
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/images/avatar3.jpeg" alt="User Profile" className="w-9 h-9 rounded-full object-cover" />
          <span>John D.</span>
        </div>
      </div>
    </header>
  );
};

export default Header;