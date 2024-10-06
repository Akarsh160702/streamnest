import React from 'react'
import { Link } from 'react-router-dom'
import { Video, Upload, User } from 'lucide-react'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <Video className="mr-2" />
          StreamNest
        </Link>
        <div className="flex space-x-4">
          <Link to="/browse" className="hover:text-blue-200">Browse</Link>
          <Link to="/upload" className="hover:text-blue-200 flex items-center">
            <Upload className="mr-1" size={18} />
            Upload
          </Link>
          <Link to="/profile" className="hover:text-blue-200 flex items-center">
            <User className="mr-1" size={18} />
            Profile
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar