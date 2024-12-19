import React from 'react'
import Navbar from './Navbar'

function BestRestaurants() {
    const cardData = [
        {
            img: "singapore1.png",
            img1: "starA.png",
            img2: "starC.png",
            title: "The snug",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            review: "4.5 (654 reviews)",
        },
        {
            img: "singapore2.png",
            img1: "starA.png",
            img2: "starA.png",
            title: "Bottega",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            review: "5.0 (1654 reviews)",
        },
        {
            img: "singapore3.png",
            img1: "starB.png",
            img2: "starB.png",
            title: "Little Shucker",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            review: "3.0 (553 reviews)",
        },
        {
            img: "singapore4.png",
            img1: "starA.png",
            img2: "starC.png",
            title: "Lokma",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            review: "4.5 (654 reviews)",
        },
        {
            img: "singapore5.png",
            img1: "starA.png",
            img2: "starC.png",
            title: "Starbelly",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            review: "4.5 (654 reviews)",
        },
        {
            img: "singapore6.png",
            img1: "starA.png",
            img2: "starC.png",
            title: "The melt",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            review: "4.5 (654 reviews)",
        },
        {
            img: "singapore7.png",
            img1: "starA.png",
            img2: "starC.png",
            title: "Arabia Nights",
            des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
            review: "4.5 (654 reviews)",
        },
    ]
  return (
    <>
        <Navbar />
        <section className="ps-5 lg:ps-20">
            <div className='grid grid-cols-12'>
                <div className='col-span-12 lg:col-span-6'>
                    <p className='text-[16px] font-semibold '>Home / All restaurants</p>
                    <div className='flex justify-start items-center gap-8'>
                        <h1 className='text-[32px] font-extrabold '>best restaurants in singapore</h1>
                        <div className='flex justify-start items-center gap-2 border-[1.5px] border-[#5E5E5E] rounded-full px-5 py-2'>
                            <img src="sort1.png" alt="" />
                            <p className='text-[17px] font-medium '>Sort</p>
                        </div>
                    </div>
                    {cardData.map((card, i) => (
                    <div key={i} className='flex justify-start gap-2 border-b py-5'>
                        <img src={card.img} alt="" />
                        <div>
                            <h4 className='text-[22px] font-semibold mt-1 '>{card.title}</h4>
                            <p className='text-[16px] text-[#8F8F8F] my-1 w-[280px] '>{card.des}</p>
                            <div className='flex justify-start items-center gap-1 py-4'>
                            <div className='flex justify-start items-center gap-1'>
                            <div><img src="starA.png" alt="" /></div>
                            <div><img src="starA.png" alt="" /></div>
                            <div><img src="starA.png" alt="" /></div>
                            <div><img src={card.img1} alt="" /></div>
                            <div><img src={card.img2} alt="" /></div>
                            </div>
                            <p className='text-[15.5px] w-60 text-[#232323] font-semibold '>{card.review}</p>
                            </div>
                        </div>
                    </div>

                    ))}
                    <button className='btn bg-[#1677BD] hover:bg-[#2795e3] text-[#ffffff] text-[19px] rounded-full px-7 mt-4 lg:mb-20 mb-5'>Show more</button>
                </div>
                <div className='col-span-12 lg:col-span-6 flex py-5 lg:py-0 lg:justify-end'>
                    <img className='h-auto lg:h-[1130px] w-[100%] ' src="singapour.png" alt="" />
                </div>
            </div>
        </section>
    </>
  )
}

export default BestRestaurants