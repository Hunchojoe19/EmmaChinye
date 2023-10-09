import React from "react";
import logo from "./../assets/Emma-Logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = React.useState("");

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2 w-36 h-32">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex space-x-10">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-darkGrayishBlue cursor-pointer"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-darkGrayishBlue cursor-pointer"
          >
            About Us
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-darkGrayishBlue cursor-pointer"
          >
            Our Services
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-darkGrayishBlue cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
        <button
          id="menu-btn"
          className={`block hamburger md:hidden focus:outline-none ${
            open ? "open" : !open
          }`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className={`${
            open ? "" : "hidden"
          } absolute flex flex-col items-center self-end z-50 py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md`}
        >
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-darkGrayishBlue cursor-pointer"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-darkGrayishBlue cursor-pointer"
          >
            About Us
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-darkGrayishBlue cursor-pointer"
          >
            Our Services
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-darkGrayishBlue cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
