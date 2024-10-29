import { FaBars } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import { useState } from "react";
function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-100 mx-4 sm:mx-20 my-12 flex align-items-center">
      <a href="#" className="w-1/2 sm:w-2/12">
        <img src={logo} alt="shortly logo" className=" img-fluid" />
      </a>

      {/* --------- MENU ---------- */}
      <div className="w-1/2 sm:w-10/12">
        {/* --------- DESKTOP MENU ---------- */}
        <div className="hidden sm:block">
          <ul className="flex align-items-center justify-between ml-4 ">
            <ul className="flex ">
              <li className="py-1 capitalize mx-6 text-sm font-bold text-violet-grayish">
                features
              </li>
              <li className="py-1 capitalize mx-6 text-sm font-bold text-violet-grayish">
                pricing
              </li>
              <li className="py-1 capitalize mx-6 text-sm font-bold text-violet-grayish">
                resources
              </li>
            </ul>
            <ul className="flex align-items-center justify-between">
              <li className="py-1 capitalize mx-6 text-sm font-bold text-violet-grayish">
                login
              </li>
              <li
                className="capitalize mx-6 text-sm font-bold text-white bg-cyan py-1 px-4 md:max-lg:w-[90px]"
                style={{ borderRadius: "20px" }}
              >
                sign up
              </li>
            </ul>
          </ul>
        </div>

        <div className="sm:hidden">
          {/* --------- MOBILE MENU  ---------- */}
          <div className="flex align-items-center justify-end">
            <FaBars
              className="text-4xl text-gray"
              onClick={() => setIsOpen((prevState) => !prevState)}
            />
          </div>
          {/* --------- MOBILE MENU ITEMS ---------- */}
          <ul
            className={`menu-items bg-violet-dark py-8 px-8 mx-auto fixed flex flex-col align-items-center justify-center ml-4 `}
            style={{
              width: "90vw",
              left: "1%",
              // right: "10%",
              top: `${isOpen ? "100px" : "-1000px"}`,
              zIndex: "10",
              borderRadius: "10px",
            }}
          >
            <ul className="flex flex-col align-items-center justify-center text-center ">
              <li className="py-1 capitalize text-sm font-bold text-white my-4">
                features
              </li>
              <li className="py-1 capitalize text-sm font-bold text-white my-4">
                pricing
              </li>
              <li className="py-1 capitalize text-sm font-bold text-white my-4">
                resources
              </li>
            </ul>
            <ul
              className="flex flex-col align-items-center justify-center mt-4"
              style={{ borderTop: "1px dotted #535353" }}
            >
              <li className="py-1 capitalize text-sm font-bold text-white my-4 text-center">
                login
              </li>
              <li
                className="capitalize text-sm font-bold text-white bg-cyan py-2 px-4 md:max-lg:w-[90px] text-center"
                style={{ borderRadius: "20px" }}
              >
                sign up
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
