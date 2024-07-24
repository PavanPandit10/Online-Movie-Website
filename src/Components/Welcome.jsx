import React from 'react'
import bg from '../Assets/bg.jpg'

const Welcome = () => {
  return (
    <div className='mt-[-56px] h-[300px] md:h-[350px] lg:h-[450px] bg-slate-900 text-white shadow-lg shadow-indigo-500/40' style={{ backgroundImage: `url(${bg})`,backgroundSize: 'cover',
    backgroundPosition: 'center'}}>

            <div className='text-center py-36 lg:py-40'>
                <div className='mt-[-45px]'>
                    <h2 className='font-semibold text-3xl md:text-6xl lg:text-7xl '>Welcome</h2>
                    <p className='lg:text-[17px]'>The Unlimited Entertainment Present, Explore Now</p>
                </div> <br />
                <div className=''>
                    <input className=' w-[280px] ml-[-70px] md:w-[500px] lg:w-[700px] px-5 py-2 rounded-full outline-none text-black' type="text" name="" id="" placeholder='Search Your Favourite Movies' />
                </div>
                <div className='mt-[-40px] ml-[50%] md:mt-[-40px] lg:ml-[42%]'>
                  <button className='bg-orange-500 py-2 px-5 rounded-r-full'>Search</button>
                </div>
            </div>

    </div>
  )
}

export default Welcome