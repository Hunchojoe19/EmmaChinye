import React from "react";
import First from "../assets/Services.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1.5,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <section id="services">
      <div
        className="container flex flex-col-reverse md:flex-col items-center p-6 mx-auto mt-20 space-y-0 md: space-y-0 "
        data-aos="zoom-out"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <div className="flex flex-col mb-32 space-y-12 w-1/2 mt-6 lg:w-full">
          <h1 className="w-full text-4xl text-center font-bold md:text-5xl md:text-left lg:text-center">
            Our Services
          </h1>
          <p className="w-full text-center text-darkGrayishBlue md:text-left lg:text-center">
            A fully registered Nigerian indigenous firm of Management
            Consultants, providing independent and specialist support
          </p>
        </div>
        <div
          className="md:w-full"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <motion.img
            src={First}
            alt="graph"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
