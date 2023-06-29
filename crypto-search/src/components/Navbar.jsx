import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="rounded-div flex items-center justify-between h-20px font-bold">
      <Link to="/">
        <h1 className="text-2xl">Cryptobase</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div classname="hidden md:block">
        <Link to="/signin" className="p-4 hover:text-accent">
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl "
        >
          Sign Up
        </Link>
      </div>
      {/* menu icon */}
      <div className="block md:hidden cursor-pointer z-10">
        <AiOutlineMenu />
      </div>
      {/* Mobile menu*/}
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <div>
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
