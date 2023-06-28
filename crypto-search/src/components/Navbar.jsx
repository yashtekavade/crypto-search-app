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
      <div>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Un</Link>
      </div>
      {/* menu icon */}
      <div>
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
