import React, { useContext } from "react";
import logo from "../../assets/Pawmart__4.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import profileIcon from "../../assets/ProfileIcon.png";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="navbar bg-linear-to-r from-green-50 to-blue-50 sticky top-0 z-50  md:px-4 lg:px-8 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user ? (
              <>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>

                <li>
                  <NavLink to="/petsAndSupplies">Pets & Supplies</NavLink>
                </li>
                <li>
                  <NavLink to="/addListing">Add Listing</NavLink>
                </li>

                <li>
                  <NavLink to="/myListing">My Listing</NavLink>
                </li>
                <li>
                  <NavLink to="/myOrders">MyOrders</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/petsAndSupplies">Pets & Supplies</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <img className="w-16 h-full" src={logo} alt="" />
      </div>
      <div className="navbar-center sticky hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user ? (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink to="/petsAndSupplies">Pets & Supplies</NavLink>
              </li>
              <li>
                <NavLink to="/addListing">Add Listing</NavLink>
              </li>

              <li>
                <NavLink to="/myListing">My Listing</NavLink>
              </li>
              <li>
                <NavLink to="/myOrders">MyOrders</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/petsAndSupplies">Pets & Supplies</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {user ? (
          <>
            <Link
              to="/register"
              onClick={logout}
              className="flex   justify-center items-center gap-1"
            >
              <CiLogout className="text-[#3F9AAE] size-5  hover:text-red-600 " />
              <button className="font-semibold cursor-pointer text-[#3F9AAE] hover:text-[#3c7986]  ">
                Logout
              </button>
            </Link>
            <div className="border border-[#3F9AAE] bg-[#ffecd8] rounded-full p-0.5">
              {user?.photoUrl ? (
                <img
                  className="w-9 h-9 rounded-full"
                  src={user?.photoURL}
                  alt="Profile"
                />
              ) : (
                <img
                  className="w-8 h-8   rounded-full"
                  src={profileIcon}
                  alt="Profile"
                />
              )}
            </div>
          </>
        ) : (
          <>
            <button className="">
              <Link to="/login" className="font-semibold text-[#f5bc80]">
                Login
              </Link>
            </button>
            <button className="">
              <Link className="font-semibold text-[#3F9AAE]" to="/register">
                Register
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
