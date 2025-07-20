import { Fragment } from "react";
import logo from "../assets/flowyn-logo-name.png";
import user from "../assets/user-round.svg";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const pageList = ["Product", "About", "Contacts"];
  const location = useLocation();
  // returns
  // {
  // pathname: "/about",
  // search: "?tab=team",
  // hash: "#section2",
  // state: null,
  // key: "abc123" // a unique ID for this navigation entry
  // }

  return (
    <Fragment>
      <div className="navbar bg-base-100 shadow-2xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3"
            >
              {pageList.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item === "Product" ? "/" : `/${item}`}
                    className={`${
                      location.pathname === `/${item}` ||
                      (location.pathname === "/" && item === "Product")
                        ? "text-green-600 font-bold"
                        : "font-bold"
                    }`}
                    onClick={() => {
                      console.log(location.pathname);
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div tabIndex={0} role="button" className="ml-3">
            <div className="w-40 h-10">
              <img alt="logo" src={logo} />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex text-lg">
          <ul className="menu menu-horizontal px-3 text-md ">
            {pageList.map((item, index) => (
              <li key={index}>
                <Link
                  to={item === "Product" ? "/" : `/${item}`}
                  className={`${
                    location.pathname === `/${item}` ||
                    (location.pathname === "/" && item === "Product")
                      ? "text-green-600 font-bold"
                      : "font-bold"
                  }`}
                  onClick={() => {
                    console.log(location.pathname);
                  }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end mr-3">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar border-2 border-green-400"
          >
            <div className="w-7 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
