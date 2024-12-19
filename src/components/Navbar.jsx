// import React from "react";

// function Navbar() {
//   return (
//     <>
//       <div className="navbar bg-base-100 py-7 px-4 sm:px-8 mx-auto flex justify-between items-center border-b">
//         <div className="navbar-start">
//           <a className="cursor-pointer">
//             <img src="logo.png" alt="" />
//           </a>
//         </div>

//         <div className="navbar-end hidden lg:flex justify-between items-center w-[50vw] py-1 ps-0 lg:ps-7 rounded-full border-2">
//           <div className="flex justify-between items-center lg:gap-[2vw]">
//             <input className="outline-none" type="text" placeholder="restaurant, hotel, service...." />
//             <span>|</span>
//             <input className="outline-none" type="text" placeholder="Singapour..." />
//             <div className="h-[43px] w-[43px] rounded-full bg-[#1677bd] sm:ms-12 lg:ms-[4vw] flex justify-center items-center">
//               <img src="search.png" alt="" />
//             </div>
//           </div>
//         </div>

//         <div className="navbar-end gap-4 hidden lg:flex">
//           <img src="earth.png" alt="" />
//           <a className="btn  bg-[#1E1E1E] rounded-full px-8 text-[15.5px] font-normal hover:bg-slate-700 text-[#ffffff]">
//             MyFeedback for business
//           </a>
//         </div>

//         <div className="dropdown lg:hidden -mt-5">
//           <div tabIndex={0} role="button" className="btn btn-ghost ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu dropdown-content bg-base-100  z-[1] mt-3 h-auto w-[50vw] -ms-[40vw] p-2 shadow"
//           >
//             <li>
//               <input type="text" placeholder="restaurant, hotel, service...." />
//               <input type="text" placeholder="Singapour..." />
//               <button className="btn mt-3 text-white bg-[#1677bd] hover:bg-[#44abf4]">search</button>
//               <div className="gap-2 flex">
//                 <img src="earth.png" alt="" />
//                 <a className="btn  bg-[#1E1E1E] rounded-full px-4 sm:px-8 text-xs sm:text-[15.5px] font-normal hover:bg-slate-700 text-[#ffffff]">
//                   MyFeedback for business
//                 </a>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;


import React, { useState } from "react";

function Navbar() {
  const [placeholder1, setPlaceholder1] = useState("restaurant, hotel, service....");
  const [placeholder2, setPlaceholder2] = useState("Singapour...");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // Track dropdown state

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar bg-base-100 py-7 px-4 sm:px-8 mx-auto flex justify-between items-center border-b">
      <div className="navbar-start">
        <a className="cursor-pointer">
          <img src="logo.png" alt="Company Logo" />
        </a>
      </div>

      <div className="navbar-end hidden lg:flex justify-between items-center w-[50vw] py-1 ps-0 lg:ps-7 rounded-full border-2 mx-auto">
        <div className="flex justify-between items-center lg:gap-[2vw]">
          <input
            className="outline-none"
            type="text"
            placeholder={placeholder1}
            onFocus={() => setPlaceholder1("")}
            onBlur={() => setPlaceholder1("restaurant, hotel, service....")}
          />
          <span>|</span>
          <input
            className="outline-none"
            type="text"
            placeholder={placeholder2}
            onFocus={() => setPlaceholder2("")}
            onBlur={() => setPlaceholder2("Singapour...")}
          />
          <div className="h-[43px] w-[43px] rounded-full bg-[#1677bd] sm:ms-12 lg:ms-[4vw] flex justify-center items-center">
            <img src="search.png" alt="Search Icon" />
          </div>
        </div>
      </div>

      <div className="navbar-end gap-4 hidden lg:flex">
        <img src="earth.png" alt="Earth Icon" />
        <a className="btn bg-[#1E1E1E] rounded-full px-8 text-[15.5px] font-normal hover:bg-slate-700 text-[#ffffff]">
          MyFeedback for business
        </a>
      </div>

      <div className="dropdown lg:hidden -mt-5">
        <label className="btn btn-circle swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            checked={isDropdownOpen}  // Bind the state to the checkbox
          />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            onClick={toggleDropdown}
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            onClick={toggleDropdown}  // Close dropdown on click
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        {isDropdownOpen && (  // Only show dropdown content when it's open
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 z-[1] mt-3 h-auto w-[50vw] -ms-[40vw] p-2 shadow"
          >
            <li>
              <input
                type="text"
                placeholder={placeholder1}
                onFocus={() => setPlaceholder1("")}
                onBlur={() => setPlaceholder1("restaurant, hotel, service....")}
              />
              <input
                type="text"
                placeholder={placeholder2}
                onFocus={() => setPlaceholder2("")}
                onBlur={() => setPlaceholder2("Singapour...")}
              />
              <button className="btn mt-3 text-white bg-[#1677bd] hover:bg-[#44abf4]">
                Search
              </button>
              <div className="gap-2 flex">
                <img src="earth.png" alt="Earth Icon" />
                <button className="btn bg-[#1E1E1E] rounded-full px-4 sm:px-8 text-xs sm:text-[15.5px] font-normal hover:bg-slate-700 text-[#ffffff]">
                  MyFeedback for business
                </button>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
