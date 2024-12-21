import React from "react";

function RecentActivities() {
  const dataBase = [
    {
      name: "Leslie sakho",
      location: "Leslie sakho",
      date: "09/11/2023",
      des1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      img1: "recents1.png",
      img2: "recents2.png",
      img3: "recents3.png",
    },
    {
      name: "Chris macari",
      location: "Singapour",
      date: "14/09/2023",
      des1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      des2: "The lorem ipsum is, in printing.",
      img1: "recents4.png",
      img2: "recents5.png",
      img3: "recents6.png",
    },
    {
      name: "Jojo alba",
      location: "Kuala lumpur",
      date: "28/09/2023",
      des1: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      des2: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
      img1: "recents7.png",
      img2: "recents8.png",
      img3: "recents9.png",
    },
  ];
  return (
    <>
      <section className=" px-5 sm:px-11 py-7 mx-auto ">
        <div className="">
          <h1 className="text-[32px] font-extrabold py-3 ">
            Recents avtivities
          </h1>
          <div className="grid grid-cols-12 gap-4">
            {dataBase.map((details, i) => (
              <div
                key={i}
                className="bg-[#F2F2F2] rounded-[14px] col-span-12 lg:col-span-6 xl:col-span-4"
              >
                <div className="flex items-center justify-start gap-2 ps-2 py-4">
                  <div className="bg-[#ffffff] w-[59px] h-[59px] flex justify-center items-center rounded-full ">
                    <img src="profile.png" alt="" />
                  </div>
                  <div>
                    <h4 className="text-[#232323] text-[21px] font-semibold ">
                      {details.name}
                    </h4>
                    <p className="text-[#8A8A8A] text-[16.5px] ">
                      {details.location}
                    </p>
                  </div>
                </div>
                <div className="ps-2 flex gap-2">
                  <span>
                    <img className="w-[18.63px] " src="starA.png" alt="" />
                  </span>
                  <span>
                    <img className="w-[18.63px] " src="starA.png" alt="" />
                  </span>
                  <span>
                    <img className="w-[18.63px] " src="starA.png" alt="" />
                  </span>
                  <span>
                    <img className="w-[18.63px] " src="starA.png" alt="" />
                  </span>
                  <span>
                    <img className="w-[18.63px] " src="starA.png" alt="" />
                  </span>
                  <p className="ms-1">09/11/2023</p>
                </div>
                <p className="text-[#5E5E5E] ps-2 text-[16px] py-3 pe-5 ">
                  {details.des1}
                </p>
                <p className="text-[#5E5E5E] ps-2 text-[16px] pb-5 pe-8 ">
                  {details.des2}
                </p>
                <div className="pb-5 ps-2 flex gap-2">
                  <img
                    className="w-[118px] h-[118px] "
                    src={details.img1}
                    alt=""
                  />
                  <img
                    className="w-[118px] h-[118px] "
                    src={details.img2}
                    alt=""
                  />
                  <img
                    className="w-[118px] h-[118px] "
                    src={details.img3}
                    alt=""
                  />
                </div>
                <h3 className="ps-2 underline text-[#232323] text-[17px] font-medium pb-4 ">
                  Discover
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default RecentActivities;
