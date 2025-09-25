export default function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 mr-2">
      <div className="max-w-3xl mx-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-xs md:max-w-md lg:max-w-lg ${
              message.isCurrentUser ? 'flex-row-reverse' : ''
            }`}>
              {!message.isCurrentUser && (
                <img
                  src={message.avatar}
                  alt={message.sender}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
              )}
              <div>
                {!message.isCurrentUser && (
                  <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    {message.sender}
                  </div>
                )}
                <div
                  className={`p-3 rounded-lg ${
                    message.isCurrentUser
                      ? 'bg-blue-500 text-white rounded-tr-none'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-tl-none border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {message.content}
                </div>
                <div className={`text-xs text-gray-500 mt-1 ${
                  message.isCurrentUser ? 'text-right' : 'text-left'
                }`}>
                  {message.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}