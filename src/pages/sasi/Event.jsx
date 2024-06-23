import React from "react";
import { FaChevronRight } from "react-icons/fa";
import somalia from "../../asset/images/somalia.jpg";
import kenya from "../../asset/images/kenyapoverty.jpg";
import jordan from "../../asset/images/jordan.jpg";

const Event = () => {
  return (
    <>
      {/* <section className="py-4 lg:py-14 px-4 sm:px-20 md:px-32 lg:px-24 max-w-7xl mx-auto overflow-hidden"> */}
        <div className="grid mt-24 grid-cols-4 gap-4 lg:grid-cols-12 lg:gap-6 lg:mx-24">
          <article className="col-span-4 md:col-span-8 lg:col-start-4 lg:col-end-10">
            <h3
              className="text-center text-2xl lg:text-4xl text-gray-800 font-sans"
              style={{ fontWeight: 600 }}>
              We help children in emergencies, poverty, or facing abuse and
              exploitation
            </h3>
          </article>
        </div>
      {/* </section> */}

      <section className="block overflow-hidden w-full mx-auto max-w-screen-xl px-4 py-4 md:px-20 md:py-10 lg:px-24 lg:py-14">
        <div className="w-full relative mx-auto">
          <div className="overflow-hidden -mx-4 md:-mx-6">
            <div className="flex flex-col md:flex-row transition-transform duration-300">
              <div className="flex-shrink-0 w-full md:w-1/3 p-2">
                <div>
                  <a
                    className="block"
                    href="/our-work/emergency-response/"
                    aria-label="Responding to emergencies">
                    <div className="relative overflow-hidden border-b-8 border-red-600 rounded-none h-64 md:h-80">
                      <img
                        src={somalia}
                        alt="Somali mother holding her child while sat in front of a makeshift tent in an internally displaced persons camp"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className="block text-xl font-bold mb-2 font-serif text-gray-800">
                        Responding to emergencies
                      </span>
                      <p className="mb-4  text-[#777777]">
                        When war and disasters happen, we respond with immediate
                        relief and long-term rebuilding.
                      </p>
                      <span className="inline-flex items-center border-2 border-[#e32c2c] text-[#e32c2c] py-2 px-2">
                        Learn more
                        <FaChevronRight className="ml-2" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3 p-2">
                <div>
                  <a
                    className="block"
                    href="/our-work/child-poverty/"
                    aria-label="Helping children in poverty">
                    <div className="relative overflow-hidden border-b-8 border-red-600 rounded-none h-64 md:h-80">
                      <img
                        src={kenya}
                        alt="Kenyan children looking into a classroom"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className="block text-xl font-bold mb-2 font-serif text-gray-800">
                        Helping children in poverty
                      </span>
                      <p className="mb-4  text-[#777777]">
                        We support communities to tackle the root causes of
                        poverty for lasting change.
                      </p>
                      <span className="inline-flex items-center border-2 border-[#e32c2c] text-[#e32c2c] py-2 px-2">
                        Learn more
                        <FaChevronRight className="ml-2" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0 w-full md:w-1/3 p-2">
                <div>
                  <a
                    className="block"
                    href="/our-work/child-protection/"
                    aria-label="Protecting children most at risk">
                    <div className="relative overflow-hidden border-b-8 border-red-600 rounded-none h-64 md:h-80">
                      <img
                        src={jordan}
                        alt="A girl shows her technique to the camera as she takes part in World Vision's karate class in Jordan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className="block text-xl font-bold mb-2 font-serif text-gray-800">
                        Protecting children most at risk
                      </span>
                      <p className="mb-4 text-[#777777]">
                        Speaking out on issues like child marriage, child
                        soldiers, child labour and violence.
                      </p>
                      <span className="inline-flex items-center border-2 border-[#e32c2c] text-[#e32c2c] py-2 px-2">
                        Learn more
                        <FaChevronRight className="ml-2" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Event;
