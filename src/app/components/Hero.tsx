import React from 'react'

const Hero = () => {
  return (
    <section className='my-20'>
        <h1 className='text-4xl font-bold text-center '>
            Find your next <br />dream job
        </h1>
        {/* <p className='text-center text-gray-600 mt-2'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo natus autem, deserunt enim similique nostrum iste delectus ex veniam esse?
        </p> */}
        <form action="" className='flex gap-2 mt-4'>
            <input 
            
            type="search" 
            className='border border-gray-400 w-full py-2 px-4 rounded-md ' 
            placeholder='Search phrase...' 
            name="" 
            id="" />

            <button className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-pink-100 transition-all duration-500 hover:text-gray-700'>Search</button>
        </form>
    </section>
  )
}

export default Hero