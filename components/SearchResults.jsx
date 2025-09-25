// components/SearchResults.jsx
'use client'
import Link from 'next/link';

const SearchResults = ({ results, query }) => {
  if (!results || results.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-800">
          No results found for "{query}"
        </h2>
        <p className="mt-2 text-gray-600">
          Try different search terms or browse our categories
        </p>
      </div>
    );
  }

  // Function to generate the correct URL based on result type
  const getResultUrl = (result) => {
    switch(result.type) {
      case 'event':
        return `/events/${result.id}`;
      case 'club':
        return `/clubs/${result.id}`;
      case 'activity':
        return `/activities/${result.id}`;
      default:
        return `/${result.type}/${result.id}`;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for "{query}"
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result) => (
          <Link 
            key={result.id} 
            href={getResultUrl(result)}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow block"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800">
                {result.title}
              </h2>
              <p className="text-gray-600 mb-3">{result.description}</p>
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
                {result.type}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SearchResults;