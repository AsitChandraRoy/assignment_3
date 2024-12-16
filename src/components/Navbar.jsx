import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 py-7 px-0 sm:px-8 mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <a className="cursor-pointer">
            <img src="logo.png" alt="" />
          </a>
        </div>

        <div className="navbar-end hidden lg:flex justify-between items-center w-[50vw] py-1 ps-0 lg:ps-7 rounded-full border-2">
          <div className="flex justify-between items-center lg:gap-[2vw]">
            <input className="outline-none" type="text" placeholder="restaurant, hotel, service...." />
            <span>|</span>
            <input className="outline-none" type="text" placeholder="Singapour..." />
            <div className="h-[43px] w-[43px] rounded-full bg-[#1677bd] sm:ms-12 lg:ms-[4vw] flex justify-center items-center">
              <img src="search.png" alt="" />
            </div>
          </div>
        </div>

        <div className="navbar-end gap-4 hidden lg:flex">
          <img src="earth.png" alt="" />
          <a className="btn  bg-[#1E1E1E] rounded-full px-8 text-[15.5px] font-normal hover:bg-slate-700 text-[#ffffff]">
            MyFeedback for business
          </a>
        </div>

        <div className="dropdown lg:hidden -mt-5">
          <div tabIndex={0} role="button" className="btn btn-ghost ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100  z-[1] mt-3 h-auto w-[50vw] -ms-[40vw] p-2 shadow"
          >
            <li>
              <input type="text" placeholder="restaurant, hotel, service...." />
              <input type="text" placeholder="Singapour..." />
              <button className="btn mt-3 text-white bg-[#1677bd]">search</button>
              <div className="gap-2 flex">
                <img src="earth.png" alt="" />
                <a className="btn  bg-[#1E1E1E] rounded-full px-8 text-[15.5px] font-normal hover:bg-slate-700 text-[#ffffff]">
                  MyFeedback for business
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
