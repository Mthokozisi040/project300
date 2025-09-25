"use client"
import { FiFilter, FiX, FiCalendar, FiUsers, FiMapPin } from 'react-icons/fi';
import { useState } from 'react';

const CatalogPage = () => {
  // State for all checkbox options
  const [filters, setFilters] = useState({
    sports: {
      team: false,
      individual: false,
      fitness: false,
      performance: false
    },
    societies: {
      cultural: false,
      creative: false,
      social: false,
      academic: false
    },
    clubs: {
      enectus: false,
      individual: false,
      fitness: false
    },
    politicalParties: {
      eff: false,
      sasco: false,
      mk: false
    }
  });

  // Sample catalog data
  const [catalogItems, setCatalogItems] = useState([
    {
      id: 1,
      title: "ICT students",
      subtitle: "Hackathon",
      type: "campus",
      category: "societies",
      subcategory: "academic",
      location: "Main Campus, Building A",
      description: "Connect with industry leaders.",
      date: "Oct 15-17",
      participants: "50+"
    },
    {
      id: 2,
      title: "ICT students",
      subtitle: "Tech Workshop",
      type: "online",
      category: "societies",
      subcategory: "academic",
      location: "Virtual Event",
      description: "Hands-on emerging tech.",
      date: "Nov 5",
      participants: "30+"
    },
    {
      id: 3,
      title: "Business",
      subtitle: "Networking",
      type: "hybrid",
      category: "clubs",
      subcategory: "enectus",
      location: "Business School & Online",
      description: "Meet alumni professionals.",
      date: "Dec 2",
      participants: "100+"
    },
    {
      id: 4,
      title: "Engineering",
      subtitle: "Robotics Club",
      type: "campus",
      category: "sports",
      subcategory: "team",
      location: "Engineering Building",
      description: "Build and compete with robots.",
      date: "Weekly",
      participants: "20+"
    },
    {
      id: 5,
      title: "Arts",
      subtitle: "Photography",
      type: "online",
      category: "societies",
      subcategory: "creative",
      location: "Virtual Classroom",
      description: "Learn professional techniques.",
      date: "Bi-weekly",
      participants: "15+"
    },
    {
      id: 6,
      title: "Science",
      subtitle: "Research Symposium",
      type: "hybrid",
      category: "societies",
      subcategory: "academic",
      location: "Science Center",
      description: "Present your findings.",
      date: "Mar 10",
      participants: "75+"
    }
  ]);

  // Calculate total selected filters
  const selectedCount = Object.values(filters).reduce(
    (total, category) => total + Object.values(category).filter(Boolean).length,
    0
  );

  // Handle checkbox changes
  const handleFilterChange = (category, filter) => {
    setFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [filter]: !prev[category][filter]
      }
    }));
  };

  // Clear all selected filters
  const clearAllFilters = () => {
    setFilters({
      sports: {
        team: false,
        individual: false,
        fitness: false,
        performance: false
      },
      societies: {
        cultural: false,
        creative: false,
        social: false,
        academic: false
      },
      clubs: {
        enectus: false,
        individual: false,
        fitness: false
      },
      politicalParties: {
        eff: false,
        sasco: false,
        mk: false
      }
    });
  };

  // Filter the catalog items based on selected filters
  const filteredItems = catalogItems.filter(item => {
    // If no filters are selected, show all items
    if (selectedCount === 0) return true;
    
    // Check if item matches any selected filter
    for (const category in filters) {
      for (const filter in filters[category]) {
        if (filters[category][filter] && 
            ((item.category === category && item.subcategory === filter) || 
             (item.category === category && filter === 'individual'))) {
          return true;
        }
      }
    }
    return false;
  });

  return (
    <div className="flex min-h-screen bg-gray-50 mt-16 ml-14 mr-12">
      {/* Sidebar Filter */}
      <div className="w-64 h-screen sticky top-0 flex flex-col bg-white border-r border-gray-200">
        {/* Fixed Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FiFilter className="mr-2 text-gray-600" />
              <h1 className="text-xl font-bold">Filters</h1>
              {selectedCount > 0 && (
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
                  {selectedCount}
                </span>
              )}
            </div>
            {selectedCount > 0 && (
              <button 
                onClick={clearAllFilters}
                className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              >
                <FiX className="mr-1" />
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Sports Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Sports</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="team"
                  checked={filters.sports.team}
                  onChange={() => handleFilterChange('sports', 'team')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="team" className="text-gray-700">Team</label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="individual"
                  checked={filters.sports.individual}
                  onChange={() => handleFilterChange('sports', 'individual')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="individual" className="text-gray-700">Individual</label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="fitness"
                  checked={filters.sports.fitness}
                  onChange={() => handleFilterChange('sports', 'fitness')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="fitness" className="text-gray-700">Fitness & endurance</label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="performance"
                  checked={filters.sports.performance}
                  onChange={() => handleFilterChange('sports', 'performance')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="performance" className="text-gray-700">Performance</label>
              </li>
            </ul>
          </div>

          <hr className="my-4 border-gray-200" />

          {/* Societies Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Societies</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="cultural"
                  checked={filters.societies.cultural}
                  onChange={() => handleFilterChange('societies', 'cultural')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="cultural" className="text-gray-700">Cultural & Language</label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="creative"
                  checked={filters.societies.creative}
                  onChange={() => handleFilterChange('societies', 'creative')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="creative" className="text-gray-700">Creative & Arts</label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="social"
                  checked={filters.societies.social}
                  onChange={() => handleFilterChange('societies', 'social')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="social" className="text-gray-700">Social Impact & Volunteering</label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="academic"
                  checked={filters.societies.academic}
                  onChange={() => handleFilterChange('societies', 'academic')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="academic" className="text-gray-700">Academic & Pre-Professional</label>
              </li>
            </ul>
          </div>

          <hr className="my-4 border-gray-200" />

          {/* Clubs Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Clubs</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="enectus"
                  checked={filters.clubs.enectus}
                  onChange={() => handleFilterChange('clubs', 'enectus')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="enectus" className="text-gray-700">Enectus</label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="club-individual"
                  checked={filters.clubs.individual}
                  onChange={() => handleFilterChange('clubs', 'individual')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="club-individual" className="text-gray-700">Individual</label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="club-fitness"
                  checked={filters.clubs.fitness}
                  onChange={() => handleFilterChange('clubs', 'fitness')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="club-fitness" className="text-gray-700">Fitness & endurance</label>
              </li>
            </ul>
          </div>

          <hr className="my-4 border-gray-200" />

          {/* Political Parties Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Political Parties</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="eff"
                  checked={filters.politicalParties.eff}
                  onChange={() => handleFilterChange('politicalParties', 'eff')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="eff" className="text-gray-700">EFF</label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="sasco"
                  checked={filters.politicalParties.sasco}
                  onChange={() => handleFilterChange('politicalParties', 'sasco')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="sasco" className="text-gray-700">SASCO</label>
              </li>
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="mk"
                  checked={filters.politicalParties.mk}
                  onChange={() => handleFilterChange('politicalParties', 'mk')}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="mk" className="text-gray-700">MK</label>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4">
        {/* Catalog Header */}
        <div className="bg-white shadow-sm p-4 sticky top-0 z-10 mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Browse the full catalog</h1>
            <span className="text-sm text-gray-600">{filteredItems.length} results</span>
          </div>
        </div>

        {/* Compact Catalog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map(item => (
            <CompactCatalogCard 
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              type={item.type}
              location={item.location}
              description={item.description}
              date={item.date}
              participants={item.participants}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Compact Catalog Card Component with Location
const CompactCatalogCard = ({ 
  title, 
  subtitle, 
  type, 
  location, 
  description, 
  date, 
  participants 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-xs border border-gray-200 p-3 hover:shadow-sm transition-shadow">
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <h4 className="text-base font-semibold">{subtitle}</h4>
        </div>
        <span className={`text-xs px-1.5 py-0.5 rounded ${
          type === 'campus' ? 'bg-blue-100 text-blue-800' : 
          type === 'online' ? 'bg-green-100 text-green-800' :
          'bg-purple-100 text-purple-800'
        }`}>
          {type}
        </span>
      </div>
      
      {/* Location Information */}
      <div className="flex items-center text-xs text-gray-500 mt-1 mb-2">
        <FiMapPin className="mr-1 text-gray-400" />
        <span>{location}</span>
      </div>
      
      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{description}</p>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <FiCalendar className="text-gray-400" />
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          <FiUsers className="text-gray-400 mr-1" />
          <span>{participants}</span>
        </div>
      </div>
      
      <button className="mt-3 w-full py-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors">
        Apply
      </button>
    </div>
  );
};

export default CatalogPage;