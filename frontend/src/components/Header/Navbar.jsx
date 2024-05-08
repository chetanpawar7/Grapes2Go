import { HashLink } from 'react-router-hash-link';
import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
    <div className="navbar bg-neutral text-neutral-content z-10 sticky top-0">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
             <HashLink smooth to="/#">
              Home
            </HashLink>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
            <HashLink smooth to="/#about">
              About
            </HashLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Grapes2Go</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
          <HashLink smooth to="/#">
              Home
            </HashLink>
          </li>
          <li>
          <Link  to="/about">
              About
            </Link>
          </li>
          <li>
          <Link  to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href='' className="btn">Button</a>
      </div>
    </div>
    <Outlet/>
    </>
  );
}
