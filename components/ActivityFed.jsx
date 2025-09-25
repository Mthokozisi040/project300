import { FiImage, FiVideo, FiFile, FiThumbsUp, FiMessageSquare, FiShare2 } from 'react-icons/fi'

export default function ActivityFeed() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 ml-60">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Community Feed</h2>
        <button className="px-3 py-1.5 text-sm text-white rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
          Filter
        </button>
      </div>
      
      {/* Post Form */}
      <div className="mb-6">
        <textarea 
          className="w-full p-3 rounded-lg border text-white border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          placeholder="Share something with the community..."
          rows="3"
        ></textarea>
        <div className="flex justify-between items-center mt-3">
          <div className="flex space-x-4">
            <button className="text-gray-500 hover:text-blue-500">
              <FiImage className="text-lg" />
            </button>
            <button className="text-gray-500 hover:text-blue-500">
              <FiVideo className="text-lg" />
            </button>
            <button className="text-gray-500 hover:text-blue-500">
              <FiFile className="text-lg" />
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
            Post
          </button>
        </div>
      </div>
      
      {/* Posts */}
      <div className="space-y-4">
        {/* Post 1 */}
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-start space-x-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
              AM
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-white">Alex Morgan</h4>
              <p className="text-xs text-gray-500">2 hours ago • Football Club</p>
            </div>
          </div>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Great practice session today! The team is really coming together for the upcoming tournament. 
            Remember we have a special training this Saturday at 9 AM.
          </p>
          <img 
            src="https://via.placeholder.com/600x300" 
            alt="Football practice" 
            className="w-full rounded-lg mb-3"
          />
          <div className="flex space-x-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
              <FiThumbsUp />
              <span>Like (12)</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
              <FiMessageSquare />
              <span>Comment (5)</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
              <FiShare2 />
              <span>Share</span>
            </button>
          </div>
        </div>
        
        {/* Post 2 */}
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-start space-x-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
              SJ
            </div>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-white">Sarah Johnson</h4>
              <p className="text-xs text-gray-500">5 hours ago • Science Club</p>
            </div>
          </div>
          <p className="mb-3 text-gray-700 dark:text-gray-300">
            Reminder: Our next Science Club meeting is tomorrow at 4 PM in Lab 3. 
            We'll be discussing the upcoming regional science fair and project submissions. 
            Please bring your ideas!
          </p>
          <div className="flex space-x-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
              <FiThumbsUp />
              <span>Like (8)</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
              <FiMessageSquare />
              <span>Comment (3)</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500">
              <FiShare2 />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}