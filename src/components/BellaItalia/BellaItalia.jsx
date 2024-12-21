import React from "react";

function BellaItalia() {
  const cardData = [
    {
      name: "Wei Jie",
      address: "Singapore, Little india",
      date: "29/11/2023",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Mei Ling",
      address: "Singapore, Orchad boulevard",
      date: "09/05/2023",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Wei Xiong",
      address: "Singapore, Takashimaya",
      date: "01/05/2023",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Ming Wei",
      address: "Singapore, Little india",
      date: "31/04/2023",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Xin Yi",
      address: "Singapore, Zen rooms",
      date: "30/04/2023",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Zhi Hao",
      address: "Singapore, Boon Keng",
      date: "27/03/2023",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Li Hua",
      address: "Singapore, DLLM loklok",
      date: "24/03/2023",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Si Ying",
      address: "Singapore, Bedemeer",
      date: "11/03/2023",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
    {
      name: "Wei Ting",
      address: "Singapore, Toa Payoh",
      date: "28/02/2023",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
    },
  ];
  const cardData1 = [
    {
      img: "also1.png",
      title: "The melt",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "also2.png",
      title: "Lokma",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "5.0 (876 reviews)",
    },
    {
      img: "also3.png",
      title: "The snug",
      des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      reviews: "2.0 (876 reviews)",
    },
  ];
  return (
    <>
      <section>
        <div className="px-5 lg:px-24">
          <h4 className="text-[#232323] text-[16px] font-semibold py-3 ">
            Home / BellaItalia
          </h4>
        </div>
        <div className="relative -z-10">
          <div className="absolute text-white ps-[7%] xl:mt-12 lg:mt-10 mt-1 w-[75%] md:w-[50%] ">
            <h1 className="xl:text-[52px] md:text-4xl text-2xl font-semibold ">
              Bella italia
            </h1>
            <div className="flex justify-start items-center gap-1">
              <div className="flex justify-start items-center gap-1">
                <div>
                  <img src="starA.png" alt="" />
                </div>
                <div>
                  <img src="starA.png" alt="" />
                </div>
                <div>
                  <img src="starA.png" alt="" />
                </div>
                <div>
                  <img src="starA.png" alt="" />
                </div>
                <div>
                  <img src="starA.png" alt="" />
                </div>
              </div>
              <p className="text-[15.5px] w-60 font-semibold ">
                5.0 (834 reviews)
              </p>
            </div>
            <p className="sm:text-[19px] text-xs xl:py-7 lg:py-5 py-1">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.,
              <br />
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.
            </p>
            <div className="flex justify-start items-center gap-1">
              <img src="location1.png" alt="" />
              <p
                className="sm:text-[19px] text-xs xl:py-5 lg:py-4 md:py-3 py-1
            "
              >
                Singapour, Bishan-Ang Mo Kio Park{" "}
              </p>
            </div>
            <div className="flex justify-start items-center gap-1">
              <img src="time1.png" alt="" />
              <p className="sm:text-[19px] text-xs ">7j/7, 08:00 - 22:00</p>
            </div>
          </div>
          <img className="w-[100%] h-auto " src="bellaItalia.png" alt="" />
        </div>
        <div className="flex justify-center items-center -mt-[70px] ">
          <img
            className="w-[79px] lg:w-[139px] lg:mt-0 mt-8 "
            src="bella.png"
            alt=""
          />
        </div>
        <div className="px-5 lg:px-28 mx-auto">
          <div>
            <h1 className="md:text-[34px] text-2xl font-semibold pt-12">
              Discover our magnificent place in photos
            </h1>
            <p className="text-[#5E5E5E] text-[16px] pt-2 ">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.The lorem ipsum is, in
              printing.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-10 pt-8 mx-auto">
            <div className="col-span-12 md:col-span-6">
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <img className="w-[100vw] h-auto " src="discover1.png" alt="" />
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle bg-white absolute right-0 top-0">
                      ✕
                    </button>
                  </form>
                  <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full"
                      />
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
                        className="w-full"
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
                      <div>
                        <button className="btn" onClick={() => document.getElementById("my_modal_3").showModal()}>
                          <div>
                            {/* Your modal image */}
                            <img
                              src="modal.png"
                              className="w-full"
                              alt="Modal"
                            />
                          </div>
                        </button>

                        {/* Modal */}

                          <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                              <form method="dialog">
                                {/* Close button */}
                                <button
                                  className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0"
                                  type="button"

                                >
                                  ✕
                                </button>
                              </form>
                              <div>
                                <img src="menu.png" alt="Menu" />
                                <div className="flex flex-col justify-center items-center mt-2">
                                  <h1 className="text-[32px] font-semibold">
                                    Menu Bella Italia
                                  </h1>
                                  <div className="flex justify-center items-center gap-3 mt-4 border-2 border-[#1677BD] py-1 px-4 rounded-full cursor-pointer">
                                    <img src="download.png" alt="Download" />
                                    <p className="text-[19px] font-medium">
                                      Download this menu
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </dialog>

                      </div>
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
                  <img src="popImages.png" alt="" />
                </div>
              </dialog>
            </div>

            <div className="col-span-12 md:col-span-6 grid grid-cols-12">
              <div className="col-span-6 gap-2">
                <img className="w-[84%] h-auto " src="discover2.png" alt="" />
                <img
                  className="w-[84%] h-auto mt-10"
                  src="discover4.png"
                  alt=""
                />
              </div>
              <div className="col-span-6 gap-2">
                <img className="w-[84%] h-auto " src="discover3.png" alt="" />
                <img
                  className="w-[84%] h-auto mt-10"
                  src="discover5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="relative flex justify-start ms-8 bg-white w-48 ps-[15px] py-2 rounded-full -mt-[70px] items-center gap-3">
            <div>
              <img src="all1.png" alt="" />
            </div>
            <p>View all photos (7)</p>
          </div>
        </div>
        <div className="px-5 lg:px-28 me-0 lg:me-12 py-12 mx-auto">
          <div className="border-b py-10 flex md:flex-row flex-col justify-between items-center">
            <div className="-mt-8">
              <h1 className="lg:text-[34px] text-2xl font-semibold ">
                More informations
              </h1>
              <div className="text-[20px] flex justify-start items-center gap-3 py-3 mt-8">
                <img src="see.png" alt="" />
                <p>See the menu</p>
              </div>
              <div className="text-[20px] flex justify-start items-center gap-3 py-3">
                <img src="phone.png" alt="" />
                <p>+847 87 37 29 01</p>
              </div>
              <div className="text-[20px] flex justify-start items-center gap-3 py-3">
                <img src="location.png" alt="" />
                <p>Singapour, Bishan</p>
              </div>
              <div className="text-[20px] flex justify-start items-center gap-3 py-3">
                <img src="time.png" alt="" />
                <p>7j/7, 08:00 - 22:00</p>
              </div>
              <div className="text-[20px] flex justify-start items-center gap-3 py-3">
                <img src="www.png" alt="" />
                <p>www.bellaitalia.com</p>
              </div>
              <div className="flex justify-start items-center gap-5 py-3">
                <img className="cursor-pointer" src="facebook.png" alt="" />
                <img className="cursor-pointer" src="instagram.png" alt="" />
                <img className="cursor-pointer" src="tiktok.png" alt="" />
                <img className="cursor-pointer" src="whatsapp.png" alt="" />
              </div>
            </div>
            <div>
              <img src="more.png" alt="" />
            </div>
          </div>
        </div>
        <div className="px-5 lg:ps-[112px] lg:pe-[10%] pb-1 ">
          <div className="flex flex-col md:flex-row gap-2 lg:gap-14 justify-start items-start border-b pb-12">
            <div className="flex justify-start items-start gap-3">
              <img className="mt-2.5" src="overall.png" alt="" />
              <div>
                <h1 className="text-[32px] font-bold ">Overall rating</h1>
                <p className="text-[19px] text-[#838383] ">834 Reviews</p>
                <div className="flex justify-start items-center gap-1 mt-5">
                  <div>
                    <img src="starA.png" alt="" />
                  </div>
                  <div>
                    <img src="starA.png" alt="" />
                  </div>
                  <div>
                    <img src="starA.png" alt="" />
                  </div>
                  <div>
                    <img src="starA.png" alt="" />
                  </div>
                  <div>
                    <img src="starA.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <div className="flex justify-start items-center gap-2">
                <p>5 stars</p>
                <progress
                  className="progress progress-info w-80 lg:-[487px]"
                  value="100"
                  max="100"
                ></progress>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p>0 stars</p>
                <progress
                  className="progress progress-info w-80 lg:-[487px]"
                  value="60"
                  max="100"
                ></progress>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p>0 stars</p>
                <progress
                  className="progress progress-info w-80 lg:-[487px]"
                  value="40"
                  max="100"
                ></progress>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p>0 stars</p>
                <progress
                  className="progress progress-info w-80 lg:-[487px]"
                  value="30"
                  max="100"
                ></progress>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p>0 stars</p>
                <progress
                  className="progress progress-info w-80 lg:-[487px]"
                  value="20"
                  max="100"
                ></progress>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 lg:px-28 lg:pe-[15%] ">
          <div className="flex justify-start items-center gap-8 pt-5">
            <div className="flex justify-start items-center gap-2 border-[1.5px] border-[#5E5E5E] rounded-full px-5 py-2 ">
              <img src="filter.png" alt="" />
              <p className="text-[17px] font-medium ">Filter</p>
            </div>
            <div className="flex justify-start items-center gap-2 border-[1.5px] border-[#5E5E5E] rounded-full px-5 py-2 ">
              <img src="sort1.png" alt="" />
              <p className="text-[17px] font-medium ">Sort</p>
            </div>
          </div>
          {cardData.map((details, i) => (
            <div
              key={i}
              className="flex justify-start items-start gap-2 bg-[#F8F8F8] p-3 rounded-[20px] mt-5"
            >
              <div className="h-[59px] w-[59px] bg-[#ffffff] rounded-full flex justify-center items-center ">
                <img src="profile.png" alt="" />
              </div>
              <div>
                <h4 className="text-[21px] font-semibold ">{details.name}</h4>
                <p className="text-[16.5px] text-[#8A8A8A] ">
                  {details.address}
                </p>
                <div className="flex justify-start items-center gap-1 mt-3">
                  <div>
                    <img src="starA.png" alt="" />
                  </div>
                  <div>
                    <img src="starA.png" alt="" />
                  </div>
                  <div>
                    <img src="starA.png" alt="" />
                  </div>
                  <div>
                    <img src="starA.png" alt="" />
                  </div>
                  <div>
                    <img src="starA.png" alt="" />
                  </div>
                  <p className="text-[#343434] text-[14.5px] ms-2 mt-2 ">
                    {details.date}
                  </p>
                </div>
                <p className="text-[16px] text-[#5E5E5E] mt-5 w-80 sm:w-[511px] ">
                  {details.des}
                </p>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center mt-12">
            <button className="-[19px] btn bg-[#1677BD] rounded-full text-[#ffffff] px-8 ">
              Show more reviews
            </button>
          </div>
        </div>
        <div className="px-5 lg:px-28 mx-auto mt-5 pb-12">
          <h1 className="text-[32px] font-extrabold">Also discover...</h1>
          <div className=" grid grid-cols-12 justify-between gap-4">
            {cardData1.map((details, i) => (
              <div
                className="card bg-[#F8F8F8] col-span-12 md:col-span-6 lg:col-span-4 gap-3 my-2"
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
        </div>
      </section>
    </>
  );
}

export default BellaItalia;
