import React from 'react'

function SectionTwo() {
    const data = [
        {
            img: "all.png",
            text: "All",
        },
        {
            img: "restaurant.png",
            text: "Restaurants",
        },
        {
            img: "hotels.png",
            text: "Hotels",
        },
        {
            img: "home.png",
            text: "Home services",
        },
        {
            img: "shopping.png",
            text: "Shopping",
        },
        {
            img: "car.png",
            text: "car location",
        },
        {
            img: "beauty.png",
            text: "Beauty & Spa",
        },
        {
            img: "park.png",
            text: "Park",
        },
        {
            img: "museum.png",
            text: "museum",
        },
        {
            img: "carWash.png",
            text: "Car wash",
        },
        {
            img: "bars.png",
            text: "Bars",
        },
        {
            img: "gyms.png",
            text: "Gyms",
        },
    ];
  return (
    <>
    <section className='mx-auto grid grid-cols-12'>
        {data.map((details, i) => (
            <div key={i} className='flex flex-col justify-center items-center col-span-4 sm:col-span-3 lg:col-span-1 mt-7'>
                <img src={details.img} alt="" />
                <p className='mt-2'>{details.text}</p>
            </div>
        ))}
    </section>
    </>
  )
}

export default SectionTwo