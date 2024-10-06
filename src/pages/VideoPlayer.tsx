import React from 'react'
import { useParams } from 'react-router-dom'
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react'

const VideoPlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  // Mock video data (in a real app, this would be fetched from an API)
  const video = {
    title: 'Amazing Landscapes',
    views: '10,000',
    likes: '500',
    description: 'Explore breathtaking landscapes from around the world in this stunning compilation.',
    uploadDate: '2023-04-15',
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-black aspect-video mb-6">
        {/* This would be replaced with an actual video player component */}
        <div className="flex items-center justify-center h-full text-white text-2xl">
          Video Player Placeholder
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">{video.views} views • {video.uploadDate}</p>
        <div className="flex space-x-4">
          <button className="flex items-center text-gray-600 hover:text-blue-600">
            <ThumbsUp className="mr-1" size={18} />
            {video.likes}
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-600">
            <MessageCircle className="mr-1" size={18} />
            Comment
          </button>
          <button className="flex items-center text-gray-600 hover:text-blue-600">
            <Share2 className="mr-1" size={18} />
            Share
          </button>
        </div>
      </div>
      <p className="text-gray-700 mb-6">{video.description}</p>
      {/* Comments section would go here */}
    </div>
  )
}

export default VideoPlayer