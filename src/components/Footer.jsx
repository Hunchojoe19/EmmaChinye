import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md: items-start md:space-y-0"></div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="hover:text-brightRed"
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
              className="hover:text-brightRed"
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
              className="hover:text-brightRed"
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
              className="hover:text-brightRed"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            {/* <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a> */}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
