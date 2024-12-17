import React from "react";

function LatestTrends() {
  const cardData = [
    {
      img: "trend1.png",
      title: "Bella Italia",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "trend2.png",
      title: "Little Shucker",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "trend3.png",
      title: "Marafuku Ramen",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "trend4.png",
      title: "Bottega",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "trend5.png",
      title: "Arabia Nights",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "trend6.png",
      title: "Lokma",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "trend7.png",
      title: "The snug",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "trend8.png",
      title: "Starbelly",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "also1.png",
      title: "Iori",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "also2.png",
      title: "Ngalley",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "also3.png",
      title: "diogonal",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "trend12.png",
      title: "Kitoko",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "2.0 (876 reviews)",
    },
  ];
  return (
    <>
      <section className="px-5 sm:px-11 py-7 mx-auto">
        <h1 className="text-[32px] font-extrabold font-Lexend py-3">
          The latest trends
        </h1>
        <div className=" grid grid-cols-12 justify-between gap-4 my-">
          {cardData.map((details, i) => (
            <div
              className="card bg-[#F8F8F8] col-span-12 md:col-span-6 lg:col-span-3 gap-3 my-2"
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
        </div>
        <div className="flex flex-col justify-center items-center py-7">
          <h3 className="text-[22px] font-Lexend mb-2">Discover more cool restaurants</h3>
          <div className="btn bg-[#1677bd] text-[#ffffff] text-[19px] rounded-full text-center px-8">
            Show more
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestTrends;
