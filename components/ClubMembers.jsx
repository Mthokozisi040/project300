export default function ClubMembers({ members }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Club Members</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {members.map((member) => (
          <div key={member.id} className="flex flex-col items-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-16 h-16 rounded-full object-cover mb-2"
            />
            <h3 className="font-medium text-gray-900 dark:text-white text-center">{member.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  )
}