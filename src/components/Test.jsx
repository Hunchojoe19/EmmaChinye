import React from "react";

const Test = () => {
  return (
    <section
      id="testimonials"
      data-aos="zoom-in-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="container mx-auto mt-20">
        <div className="flex flex-col justify-center items-center">
          <h2 className="max-w-md text-4xl text-center font-bold md:text-5xl md:text-left mt-10">
            Why Choose Us?
          </h2>
          <p className="md:w-[500px] items-center text-md text-black text-center mt-20">
            Working with Micky is a pleasure. We are impressed by the way how
            their teamwork. It’s professional, at a good pace with great
            communication about our business needs. They were prepared extremely
            well to work with our company.
          </p>
          <p className="md:w-[500px] mt-6 text-end text-blue-700">
            <span className="font-bold text-xl text-blue-700">~</span>Mike Moore
            <span className="font-bold text-xl text-blue-700">~</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Test;
