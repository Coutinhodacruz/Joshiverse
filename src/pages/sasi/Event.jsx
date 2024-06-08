import React from "react";
import eventpc2 from "../../asset/image/event2.jpg";
import eventpc3 from "../../asset/image/event3.jpg";
import picture from "../../asset/image/event.jpg";

const Event = () => {
  return (
    <section className="flex flex-col items-center gap-8 py-24 mt-[-72px]" id="event">
      <h2 className="text-4xl font-bold text-right text-gray-800 mt-[35rem]">Event</h2>
      <div className="text-center">
        <p className="text-lg leading-7 text-gray-700 px-5">
          SASI we take great pride in our commitment to serving communities in
          need and making a positive impact on the lives of those facing adversity. Over the years, we've
          had the privilege of organizing various events and initiatives aimed at bringing hope, support, and
          opportunities to marginalized groups.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-8 mx-[-1.5rem]">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg mb-8">
            <img src={eventpc2} alt="The Mokoko Community" className="w-full rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                <a href="#" className="hover:text-[#F8B864]">The Mokoko Community</a>
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                In 2022 We collaborated to community development led us to the Mokoko community where we implemented a series of sustainable initiatives aimed at improving livelihoods and fostering self-reliance.
              </p>
              <div className="flex justify-between text-sm text-gray-700 mb-4">
                <div>
                  <h4>Fill up: <span>N250,000</span></h4>
                </div>
                <div>
                  <h4>Target: <span>N500,000</span></h4>
                </div>
              </div>
              <button className="bg-[#F8B864] text-white py-2 px-4 rounded-full hover:shadow-lg transition duration-300">Read More</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg mb-8">
            <img src={picture} alt="Supporting the Blind School" className="w-full rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                <a href="#" className="hover:text-[#F8B864]">Supporting the Blind School</a>
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                In 2023, we partnered with Pacelli School for the Blind to provide crucial resources and support to visually impaired students. Through our fundraising efforts and generous donations.
              </p>
              <div className="flex justify-between text-sm text-gray-700 mb-4">
                <div>
                  <h4>Fill up: <span>N510,000</span></h4>
                </div>
                <div>
                  <h4>Target: <span>N1,000,000</span></h4>
                </div>
              </div>
              <button className="bg-[#F8B864] text-white py-2 px-4 rounded-full hover:shadow-lg transition duration-300">Read More</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg mb-8">
            <img src={eventpc3} alt="Supporting the Deaf School" className="w-full rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">
                <a href="#" className="hover:text-[#F8B864]">Supporting the Deaf School</a>
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                In 2024 we collaborated with Wesley School for the Hearing Impaired to address the unique challenges faced by deaf and hard-of-hearing students. We provided sign language training for teachers.
              </p>
              <div className="flex justify-between text-sm text-gray-700 mb-4">
                <div>
                  <h4>Fill up: <span>N1.4 million</span></h4>
                </div>
                <div>
                  <h4>Target: <span>N5 million</span></h4>
                </div>
              </div>
              <button className="bg-[#F8B864] text-white py-2 px-4 rounded-full hover:shadow-lg transition duration-300">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
