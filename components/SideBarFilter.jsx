"use client"
import { FiFilter, FiX } from 'react-icons/fi';
import { useState } from 'react';

const SidebarFilter = () => {
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

  return (
    <div className="w-64 h-screen sticky top-0 flex flex-col bg-white border-r border-gray-200 mt-8">
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
  );
};

export default SidebarFilter;