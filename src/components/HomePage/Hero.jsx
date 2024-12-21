import React from "react";

function Hero() {
  const cardData = [
    {
      img: "bottega1.png",
      title: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "bottega2.png",
      title: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "bottega3.png",
      title: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "bottega4.png",
      title: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
  ];
  return (
    <>
      <section className="px-5 sm:px-11 py-7 mx-auto">
        <div className="bg-[#1677bd] rounded-[9px] px-4 mx-auto">
          <h1 className="text-[#ffffff] text-2xl mx-auto p-5  md:text-[32px]">
            Find the best restaurant ratings below
          </h1>
          <div className="carousel w-full ps-10 ">
            <div
              id="slide1"
              className="carousel-item relative w-full px-5 pb-10 gap-5 grid grid-cols-12 justify-between"
            >
              {cardData.map((details, i) => (
                <div
                  className="card bg-base-100 shadow-xl col-span-12 md:col-span-6 lg:col-span-3 gap-3"
                  key={i}
                >
                  <figure>
                    <img
                      className="w-[100%] h-auto"
                      src={details.img}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="p-3">
                    <h2 className="card-title text-[19px] font-semibold">
                      {details.title}
                    </h2>
                    <p className="text-sm text-[#8F8F8F]">{details.des}</p>
                    <div className="card-actions flex justify-between items-center mt-5">
                      <div className=" text-[0.01px]">
                        <div className="rating mb-1">
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        </div>
                      </div>
                      <div className="text-sm">{details.reviews}</div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-[100%] h-auto"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
