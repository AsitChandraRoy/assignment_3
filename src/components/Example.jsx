import React, { useState } from "react";

function Navbar() {
  const [placeholder1, setPlaceholder1] = useState("restaurant, hotel, service....");
  const [placeholder2, setPlaceholder2] = useState("Singapour...");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState({ term1: "", term2: "" });
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle input changes
  const handleSearchChange = (e, field) => {
    setSearchQuery({
      ...searchQuery,
      [field]: e.target.value,
    });
  };

  // Simulate search function
  const handleSearch = () => {
    // Here you can replace with an actual search API or logic
    const results = [
      { name: "Kakune Restau, Paris", img: "resturentB.png" },
      { name: "Kakune Restau, New York", img: "resturentB.png" },
      { name: "Kakune Restau, London", img: "resturentB.png" },
      { name: "Kakune Restau, Tokyo", img: "resturentB.png" },
    ];

    // Filter results based on search terms
    const filteredResults = results.filter(
      (result) =>
        result.name.toLowerCase().includes(searchQuery.term1.toLowerCase()) &&
        result.name.toLowerCase().includes(searchQuery.term2.toLowerCase())
    );

    setSearchResults(filteredResults);
    setShowModal(true); // Show modal with results
  };

  return (
    <div className="navbar bg-base-100 py-7 px-4 sm:px-8 mx-auto flex justify-between items-center border-b">
      <div className="navbar-start">
        <a className="cursor-pointer">
          <img src="logo.png" alt="Company Logo" />
        </a>
      </div>

      <div className="navbar-end hidden lg:flex justify-between items-center w-[50vw] py-1 ps-0 lg:ps-7 rounded-full border-2">
        <div className="flex justify-between items-center lg:gap-[2vw]">
          <input
            className="outline-none"
            type="text"
            placeholder={placeholder1}
            value={searchQuery.term1}
            onChange={(e) => handleSearchChange(e, "term1")}
            onFocus={() => setPlaceholder1("")}
            onBlur={() => setPlaceholder1("restaurant, hotel, service....")}
          />
          <span>|</span>
          <input
            className="outline-none"
            type="text"
            placeholder={placeholder2}
            value={searchQuery.term2}
            onChange={(e) => handleSearchChange(e, "term2")}
            onFocus={() => setPlaceholder2("")}
            onBlur={() => setPlaceholder2("Singapour...")}
          />
          <div
            className="h-[43px] w-[43px] rounded-full bg-[#1677bd] sm:ms-12 lg:ms-[4vw] flex justify-center items-center"
            onClick={handleSearch} // Trigger search on click
          >
            <img src="search.png" alt="Search Icon" />
          </div>
        </div>
      </div>

      {/* Modal for search results */}
      {showModal && (
        <dialog id="search_modal" className="modal">
          <div className="modal-box">
            <button
              className="btn btn-xs text-white btn-circle btn-ghost absolute right-2 top-2 bg-[#156ba8]"
              onClick={() => setShowModal(false)} // Close the modal
            >
              ✕
            </button>
            <div className="border-b border-black p-2 text-[19px]">
              <input
                className="outline-none"
                type="text"
                placeholder="Search results..."
                disabled
              />
              <span className="me-5">|</span>
              <span className="ms-12">Location</span>
            </div>
            {searchResults.map((result, index) => (
              <div key={index} className="p-2 flex items-center gap-2 text-[19px] border-b">
                <img width={40} src={result.img} alt="" />
                <p>{result.name}</p>
              </div>
            ))}
          </div>
        </dialog>
      )}

      <div className="navbar-end gap-4 hidden lg:flex">
        <img src="earth.png" alt="Earth Icon" />
        <a className="btn bg-[#1E1E1E] rounded-full px-8 text-[15.5px] font-normal hover:bg-slate-700 text-[#ffffff]">
          MyFeedback for business
        </a>
      </div>

      {/* Mobile dropdown */}
      <div className="dropdown lg:hidden -mt-5">
        <label className="btn btn-circle swap swap-rotate">
          <input type="checkbox" checked={isDropdownOpen} onChange={toggleDropdown} />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
        {isDropdownOpen && (
          <ul className="menu dropdown-content bg-base-100 z-[1] mt-3 h-auto w-[50vw] -ms-[40vw] p-2 shadow">
            <li>
              <input
                type="text"
                placeholder={placeholder1}
                value={searchQuery.term1}
                onChange={(e) => handleSearchChange(e, "term1")}
              />
              <input
                type="text"
                placeholder={placeholder2}
                value={searchQuery.term2}
                onChange={(e) => handleSearchChange(e, "term2")}
              />
              <button
                className="btn mt-3 text-white bg-[#1677bd] hover:bg-[#44abf4]"
                onClick={handleSearch}
              >
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
