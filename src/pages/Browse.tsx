import React from 'react'
import { Link } from 'react-router-dom'

const Browse: React.FC = () => {
  const videos = [
    { id: 1, title: 'Amazing Landscapes', thumbnail: 'https://source.unsplash.com/random/800x450?landscape', views: '10K', duration: '5:23' },
    { id: 2, title: 'Cooking Masterclass', thumbnail: 'https://source.unsplash.com/random/800x450?cooking', views: '5K', duration: '12:45' },
    { id: 3, title: 'Tech Review', thumbnail: 'https://source.unsplash.com/random/800x450?technology', views: '20K', duration: '8:17' },
    { id: 4, title: 'Fitness Workout', thumbnail: 'https://source.unsplash.com/random/800x450?fitness', views: '15K', duration: '30:00' },
    { id: 5, title: 'Travel Vlog', thumbnail: 'https://source.unsplash.com/random/800x450?travel', views: '25K', duration: '15:30' },
    { id: 6, title: 'Music Performance', thumbnail: 'https://source.unsplash.com/random/800x450?music', views: '50K', duration: '4:55' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Link key={video.id} to={`/video/${video.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <div className="relative">
              <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
              <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                {video.duration}
              </span>
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
              <p className="text-sm text-gray-600">{video.views} views</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Browse