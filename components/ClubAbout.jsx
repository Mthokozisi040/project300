export default function ClubAbout({ description }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">About the Club</h2>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
        
        <h3 className="text-lg font-extrabold text-white mt-6">Training Schedule</h3>
        <ul className="list-disc pl-5 space-y-1 text-white">
          <li>Monday: 3-5pm (Advanced)</li>
          <li>Wednesday: 3-5pm (All levels)</li>
          <li>Friday: 2-5pm (Beginners)</li>
        </ul>
        
        <h3 className="text-lg font-extrabold text-white mt-6">Achievements</h3>
        <ul className="list-disc pl-5 space-y-1 text-white">
          <li>2023 Inter-University Champions</li>
          <li>2022 Regional Tournament Winners</li>
        </ul>
      </div>
    </div>
  )
}