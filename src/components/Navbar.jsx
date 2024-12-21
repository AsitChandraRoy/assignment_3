import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [placeholder1, setPlaceholder1] = useState(
    "restaurant, hotel, service...."
  );
  const [placeholder2, setPlaceholder2] = useState("Singapour...");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(""); // Track user input for search

  const data = [
    { img: "resturentB.png", text: "Kakune restau, Paris..." },
    { img: "resturentB.png", text: "Kakunexy deluxe, Rome..." },
    { img: "resturentB.png", text: "Kakune, New York..." },
    { img: "resturentB.png", text: "Kikune, Dakar Plateau..." },
  ];

  const filteredData = data.filter((item) =>
    item.text.toLowerCase().includes(searchInput.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="navbar bg-base-100 py-7 px-4 sm:px-8 mx-auto flex justify-between items-center border-b">
      {/* Logo Section */}
      <div className="navbar-start">
        <NavLink to="/">
          <img src="logo.png" alt="Company Logo" className="cursor-pointer" />
        </NavLink>
      </div>

      {/* Search Section */}
      <div className="navbar-end hidden lg:flex justify-between items-center w-[50vw] py-1 ps-0 lg:ps-7 rounded-full border-2 mx-auto">
        <div className="flex justify-between items-center gap-5 lg:gap-[3.3vw]">
          <button onClick={handleModalToggle} className="outline-none">
            <input
              type="text"
              placeholder={placeholder1}
              onFocus={() => setPlaceholder1("")}
              onBlur={() => setPlaceholder1("restaurant, hotel, service....")}
              className="outline-none"
            />
          </button>
          <span>|</span>
          <input
            type="text"
            placeholder={placeholder2}
            onFocus={() => setPlaceholder2("")}
            onBlur={() => setPlaceholder2("Singapour...")}
            className="outline-none"
          />
          <div className="h-[43px] w-[43px] rounded-full bg-[#1677bd] flex justify-center items-center">
            <img src="search.png" alt="Search Icon" />
          </div>
        </div>
      </div>

      {/* Modal for Search */}
      {isModalOpen && (
        <dialog className="modal" open>
          <div className="modal-box">
            <button
              onClick={handleModalToggle}
              className="btn btn-sm btn-circle hover:bg-[#2598ea] bg-[#1677BD] text-white absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="flex items-center gap-4 lg:gap-[2vw] border-b pb-3">
              <input
                type="text"
                placeholder="Kakune restau"
                className="outline-none text-[19px] text-[#1E1E1E]"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)} // Update search input
              />
              <span>|</span>
              <input
                type="text"
                placeholder="Paris"
                className="outline-none text-[19px] text-[#1E1E1E]"
              />
              <div className="h-[43px] w-[43px] rounded-full bg-[#1677bd] flex justify-center items-center">
                <img src="search.png" alt="Search Icon" />
              </div>
            </div>
            {filteredData.length > 0 ? (
              <NavLink to="/best">
                {filteredData.map((details, i) => (
                  <div
                    key={i}
                    className="py-2 flex items-center gap-2 border-b cursor-pointer"
                    onClick={() => setIsModalOpen(false)} // Close modal on item click
                  >
                    <img width={36} src={details.img} alt="" />
                    <p className="text-[19px]">{details.text}</p>
                  </div>
                ))}
              </NavLink>
            ) : (
              <p className="text-center text-gray-500 mt-4">No results found</p>
            )}
          </div>
        </dialog>
      )}

      {/* Business CTA */}
      <div className="navbar-end gap-4 hidden lg:flex">
        <img src="earth.png" alt="Earth Icon" />
        <a className="btn bg-[#1E1E1E] rounded-full px-8 text-[15.5px] font-normal hover:bg-slate-700 text-white">
          MyFeedback for Business
        </a>
      </div>

      {/* Mobile Dropdown */}
      <div className="dropdown lg:hidden">
        <label className="btn btn-circle swap swap-rotate">
          <input type="checkbox" checked={isDropdownOpen} />
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
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            onClick={toggleDropdown}
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        {isDropdownOpen && (
          <ul className="menu dropdown-content bg-base-100 z-[1] mt-3 w-64 p-2 shadow">
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
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
