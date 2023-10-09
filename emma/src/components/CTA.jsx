import React from "react";

const CTA = () => {
  return (
    <section id="contact" className="bg-brightRed">
      <div className="container flex flex-col px-6 py-24 items-center justify-between mx-auto space-y-12 md:py-12 md:space-y-0 md:flex-row">
        <h2 className="text-4xl text-center leading-tight text-white font-bold md:text-4xl md:text-left md:max-w-1/2">
          Contact Us
        </h2>
        <a
          href=""
          className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline shadow-2xl hover:bg-brightRedSupLight"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTA;
