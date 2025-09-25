import { FiUsers, FiPlus } from 'react-icons/fi'

export default function CommunitiesList() {
  const communities = [
    { id: 1, name: 'Football Club', members: 45, icon: '⚽', joined: true },
    { id: 2, name: 'Music Band', members: 28, icon: '🎵', joined: true },
    { id: 3, name: 'Science Club', members: 36, icon: '🔬', joined: true },
    { id: 4, name: 'Art Society', members: 22, icon: '🎨', joined: false },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ml-2">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Your Communities</h2>
        <button className="px-3 py-1.5 text-white text-sm rounded-lg border border-gray-200
         dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {communities.map(community => (
          <div key={community.id} className="flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700
           rounded-lg transition">
            <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-gray-700 flex items-center justify-center
             text-blue-500 mr-3 text-xl">
              {community.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-gray-800 dark:text-white">{community.name}</h4>
              <p className="text-xs text-gray-500">{community.members} members</p>
            </div>
            <button className={`px-3 py-1 text-xs rounded-full ${
              community.joined 
                ? 'bg-blue-50 dark:bg-gray-700 text-blue-500' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}>
              {community.joined ? 'Joined' : 'Join'}
            </button>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 flex items-center justify-center space-x-2 p-2 rounded-lg border
       border-dashed border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
        <FiPlus className="text-gray-500" />
        <span className="text-sm text-gray-500">Create Community</span>
      </button>
    </div>
  )
}