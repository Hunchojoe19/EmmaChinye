import React from "react";

const Test = () => {
  return (
    <section
      id="testimonials"
      data-aos="zoom-in-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="max-w-6xl p-5 mx-auto mt-32 text-center">
        <h2 className="text-4xl font-bold text-center">What's different?</h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div
            className="flex flex-col p-6 mb-12 items-center space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            {/* <img src={avatarAnisha} className="w-16 -mt-14" /> */}
            <h5 className="text-lg font-bold">
              KAIZEN GLOBAL ENGINEERING SOLUTIONS LTD
            </h5>

            <p className="text-md text-darkGrayishBlue">
              "Working with Fastnet Capital Ltd is a pleasure. We are impressed
              by the way how their teamwork. It’s professional, at a good pace
              with great communication about our business needs. They were
              prepared extremely well to work with our company."
            </p>
          </div>
          <div
            className="flex flex-col p-6 mb-12 items-center space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {/* <img src={avatarRichard} className="w-16 -mt-14" /> */}
            <h5 className="text-lg font-bold">NETWORK OIL & GAS LTD</h5>

            <p className="text-md text-darkGrayishBlue">
              "This organization has completely changed my outlook on how I
              handle my finances and my confidence in my financial stability and
              strength in the future. I am just as excited about building a
              strong financial future for my business."
            </p>
          </div>
          <div
            className="flex flex-col p-6 mb-12 items-center space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
            data-aos="flip-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            {/* <img src={avatarAli} className="w-16 -mt-14" /> */}
            <h5 className="text-lg font-bold">FASTNET CAPITAL LTD</h5>

            <p className="text-sm text-darkGrayishBlue">
              "Looking back over the years, I must commend how effective our
              relationship has been and we are so grateful. Thank you for your
              patience and diligence in working with us. It is truly one of the
              biggest positives of 2022 and we look forward to the many years
              ahead."
            </p>
          </div>
        </div>
        <div className="my-16"></div>
      </div>
    </section>
  );
};

export default Test;
