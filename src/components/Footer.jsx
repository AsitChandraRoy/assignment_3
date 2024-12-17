import React from "react";

function Footer() {
  return (
    <>
      <section className="px-5 sm:px-11 xl:px-20 py-7 mx-auto border-t">
        <div className="grid grid-cols-12 gap-4 justify-center items-center">
          <div className="col-span-12 sm:col-span-4 flex flex-col start-0 justify-self-center sm:-mt-[140px] mt-0">
            <h3 className="text-[#1E1E1E] text-xl font-extrabold ">About</h3>
            <p className="text-[#5E5E5E] text-sm mt-2 ">About MyFeedback</p>
            <p className="text-[#5E5E5E] text-sm mt-2 ">Investor Relations</p>
          </div>
          <div className="col-span-12 sm:col-span-4 justify-self-center ms-11 sm:ms-0">
            <h3 className="text-[#1E1E1E] text-xl font-extrabold ">
              MyFeedback
            </h3>
            <p className="text-[#5E5E5E] text-sm mt-2 ">
              MyFeedback for business
            </p>
            <p className="text-[#5E5E5E] text-sm mt-2 ">Collections</p>
            <p className="text-[#5E5E5E] text-sm mt-2 ">Talk</p>
            <p className="text-[#5E5E5E] text-sm mt-2 ">Events</p>
            <p className="text-[#5E5E5E] text-sm mt-2 ">MyFeedback blog</p>
            <p className="text-[#5E5E5E] text-sm mt-2 ">Support</p>
            <p className="text-[#5E5E5E] text-sm mt-2 ">Developers</p>
          </div>
          <div className="col-span-12 sm:col-span-4 justify-self-center sm:-mt-[110px] mt-0 -ms-4 sm:ms-0">
            <h3 className="text-[#1E1E1E] text-xl font-extrabold ">
              Languages
            </h3>
            <div className="flex items-center gap-1">
              <p className="text-[#5E5E5E] text-sm ">English</p>
              <img src="downArrow.png" alt="" />
            </div>
            <h3 className="text-[#1E1E1E] text-xl font-extrabold mt-5 ">
              Countries
            </h3>
            <div className="flex items-center gap-1">
              <p className="text-[#5E5E5E] text-sm ">Singapour</p>
              <img src="downArrow.png" alt="" />
            </div>
          </div>
        </div>
        <div className="text-[#1E1E1E] text-sm font-semibold text-center mt-8 ">
          Copyright&copy;Septembre 2023 myfeedback, designed by scott
        </div>
      </section>
    </>
  );
}

export default Footer;
