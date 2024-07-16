import { CiStar } from "react-icons/ci";
import React from 'react'

const JobRow = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-sm flex gap-4 hover:px-7 hover:bg-sky-50 transition-all duration-500 relative">
        <div className="absolute top-2 right-3 cursor-pointer">
        <CiStar className="size-5 text-gray-400" />
        
        </div>
        <div className="content-center">
            <img src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-spotify-social-media-icon-design-template-vector-png-image_3654774.jpg" className='size-12' alt="" />
        </div>
        <div className="grow">
            <div className="text-gray-900 font-bold text-xl">Spotify</div>
            <div className="font-bold mb-1 ">Product Designer</div>
            <div className="text-gray-700 text-xs">Remote &middot; Kolkata, India &middot; Full-time</div>
        </div>
        <div className="content-end text-gray-500 text-xs md:text-sm">2 days ago</div>
    </div>
  )
}

export default JobRow