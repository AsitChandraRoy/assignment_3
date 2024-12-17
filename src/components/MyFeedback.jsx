import React from 'react'

function MyFeedback() {
  return (
    <>
        <section className="px-5 sm:px-11 py-7 mx-auto">
            <div className='grid grid-cols-12'>
                <div className='col-span-12 lg:col-span-6 mx-auto flex flex-col justify-center items-start '>
                    <h2 className='text-[26px] font-extrabold font-Lexend text-[#1e1e1e] w-[450px] '>MyFeedback for Business has resources to help you plan, start, grow, and advertise your small business</h2>
                    <p className='text-[16px] w-[453px] py-4'>The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.</p>
                    <p className='btn bg-[#1e1e1e] text-white rounded-full px-8 mt-8 hover:bg-[#303030]'>Explore MyFeedback business</p>
                </div>
                <div className='col-span-12 lg:col-span-6 mx-auto flex flex-col justify-center items-center mt-5 lg:mt-0'>
                    <img src="myFeedback.png" alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default MyFeedback