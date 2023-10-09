import React from "react";

const About = () => {
  return (
    <section
      id="about"
      data-aos="zoom-in"
      data-aos-easing="ease-in-sine"
      data-aos-duration="1000"
    >
      <div className="container flex flex-col justify-center items-center px-4 mx-auto space-y-12 md:justify-start md:items-start md:space-y-0 md:flex-row">
        <div className="flex flex-col justify-center items-center space-y-12 mt-10 md:space-y-0 w-1/2 md:justify-start md:items-start">
          <h2 className="text-4xl text-center max-w-md mb-10 font-bold md:text-left lg:mt-10">
            What Makes Us Different?
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            We work side-by-side with business owners to help them achieve their
            financial goals by providing business consulting, income tax and
            Advisory services and succession planning.
          </p>
        </div>
        <div className="flex flex-col space-y-8 md:w-1/2">
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row mt-10">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Our Core Values
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Our Core Values
              </h3>
              <p className="text-darkGrayishBlue">
                Transparency, Commitment, Expertise, Honesty, Quality, and
                Trust.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Our Mission
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Our Mission
              </h3>
              <p className="text-darkGrayishBlue">
                To empower People and Businesses alike through the provision of
                optimally tailored solutions for their business excellence
                needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Our Vision
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Our Vision
              </h3>
              <p className="text-darkGrayishBlue">
                To become one of the most trusted Business consultancy
                Enterprises in Nigeria specifically and the West Africa Region
                potentially.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
