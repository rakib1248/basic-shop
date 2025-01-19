import { NavLink } from "react-router-dom";
import useToggle from "../hooks/useToggle";

import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  const [isTigglled, toggle] = useToggle(false);

  return (
    <>
      <div className="sticky top-0 bg-white z-50 shadow-md">
        <div className="w-[98%] md:w-[85%] mx-auto ">
          <div className="flex justify-between items-center">
            {/* Left Section */}

            {/* Logo */}
            <div className="logo">
              <NavLink onClick={toggle} to={"/"}>
                <img
                  className="h-[70px] py-4"
                  src="../../devzone.png"
                  alt="logo"
                />
              </NavLink>
            </div>

            {/* Menu Links */}
            <div className="menu relative">
              <div
                className={`absolute w-[180px] bg-white rounded ${
                  isTigglled ? "block" : "hidden"
                }  md:block shadow md:shadow-none left-0 top-5 md:w-auto md:h-auto md:static`}>
                <ul className="flex flex-col md:flex-row items-end gap-2 md:items-center my-4 md:mr-0 space-x-4">
                  <li className="hover:bg-[#e9e9e9] w-full text-center py-2 px-5 rounded-md ">
                    <NavLink onClick={toggle} to="/" className="text-gray-950">
                      Home
                    </NavLink>
                  </li>
                  <li className="hover:bg-[#e9e9e9] w-full text-center py-2 px-5 rounded-md ">
                    <NavLink onClick={toggle} to="/" className="text-gray-950">
                      Shop
                    </NavLink>
                  </li>
                  <li className="hover:bg-[#e9e9e9] w-full text-center py-2 px-5 rounded-md ">
                    <NavLink onClick={toggle} to="/" className="text-gray-950">
                      About
                    </NavLink>
                  </li>
                  <li className="hover:bg-[#e9e9e9] w-full text-center py-2 px-5 rounded-md ">
                    <NavLink onClick={toggle} to="/" className="text-gray-950">
                      Contact
                    </NavLink>
                  </li>
                  <li className="hover:bg-[#e9e9e9] w-full text-center py-2 px-5 rounded-md ">
                    <NavLink
                      onClick={toggle}
                      to="/dashboard"
                      className="text-gray-950">
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Menu Icon (Mobile) */}
            <div className="menuIcone md:hidden">
              <i className="text-[#FC8934] text-2xl md:hidden" onClick={toggle}>
                {isTigglled ? <IoMdClose /> : <LuMenu />}
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
