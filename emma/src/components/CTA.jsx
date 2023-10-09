import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const CTA = () => {
  return (
    <section
      id="contact"
      data-aos="zoom-out"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="container flex flex-col px-6 py-24 items-center justify-between mx-auto space-y-12 md:py-12 md:space-y-0 md:space-y-10">
        <h2 className="text-4xl text-center leading-tight text-black font-bold md:text-4xl md:text-left md:max-w-1/2">
          Contact Us
        </h2>
        <div className="flex justify-center items-center space-x-2">
          <BsFillTelephoneFill size={20} />
          <p className="">+234 806 834 7771</p>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <MdEmail size={20} />
          <p className="">donemylon@yahoo.com</p>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <SlLocationPin size={20} />
          <p className="">
            5 Canal Avenue, Canal Estate, Okota Lagos state, Nigeria
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
