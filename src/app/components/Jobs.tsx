import React from 'react'
import JobRow from './JobRow'

const Jobs = () => {
  return (
    <div className='bg-slate-100 py-8 px-4 rounded-t-3xl rounded-b-md shadow-md transition-all duration-500 hover:bg-pink-100 '>
        <h2 className='mb-4 font-extrabold'>Recent Jobs</h2>
        <div className="flex flex-col gap-4">
            <JobRow />
            <JobRow />
            <JobRow />
        </div>
    </div>
  )
}

export default Jobs