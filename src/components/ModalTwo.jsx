import React from "react";

function ModalTwo() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal Two
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0">
              ✕
            </button>
          </form>
            <div>
                <img src="menu.png
                " alt="" />
                <div className="flex flex-col justify-center items-center mt-2">
                    <h1 className="text-[32px] font-semibold">Menu Bella Italia</h1>
                    <div className="flex justify-center items-center gap-3 mt-4 border-2 border-[#1677BD] py-1 px-4 rounded-full">
                        <img src="download.png" alt="" />
                        <p className="text-[19px] font-medium">Dowload this menu</p>
                    </div>
                </div>
            </div>
        </div>
      </dialog>
    </>
  );
}

export default ModalTwo;
