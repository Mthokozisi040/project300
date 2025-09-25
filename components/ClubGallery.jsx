export default function ClubGallery({ images }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Gallery</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg">
            <img
              src={image}
              alt={`Club activity ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
    </div>
  )
}