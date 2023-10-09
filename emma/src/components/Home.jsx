import React from "react";
import First from "../assets/Landing.png";
import { motion } from "framer-motion";

const Home = () => {
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
    <section id="home" data-aos="zoom-right">
      <div className="container flex flex-col-reverse md:flex-row-reverse items-center p-6 mx-auto mt-10 space-y-0 md: space-y-0 ">
        <div
          className="flex flex-col mb-32 space-y-12 w-1/2 md:justify-end md:items-center"
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <h1 className="max-w-md text-4xl text-center font-bold md:text-5xl md:text-left">
            Driving business growth through a support system of financial &
            advisory services
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            We make businesses more efficient, self-sufficient and profitable by
            planning for the future in the present.
          </p>
        </div>
        <div className="md:w-1/2" data-aos="zoom-in-left">
          <motion.img
            src={First}
            alt="graph"
            variants={imageVariants}
            whileHover="hover"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
