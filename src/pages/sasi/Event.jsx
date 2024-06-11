import React from "react";
import eventpc2 from "../../asset/image/event2.jpg";
import eventpc3 from "../../asset/image/event3.jpg";
import picture from "../../asset/image/event.jpg";


const Event = () => {
  return (
    <>
      <section className="py-4 lg:py-14 px-4 sm:px-20 md:px-32 lg:px-24 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-4 gap-4 lg:grid-cols-12 lg:gap-6 lg:mx-24">
          <article className="col-span-4 md:col-span-8 lg:col-start-4 lg:col-end-10">
            <h3 className="text-center font-bold text-2xl lg:text-4xl">
              We help children in emergencies, poverty, or facing abuse and exploitation
            </h3>
          </article>
        </div>
      </section>

      <section className="block overflow-hidden w-full mx-auto max-w-screen-xl px-4 py-4 md:px-20 md:py-10 lg:px-24 lg:py-14">
        <div className="w-full relative mx-auto">
          <ul className="hidden md:flex justify-between absolute inset-y-1/2 transform -translate-y-1/2 w-full">
            <li className="carousel__prev">
              <button className="button carousel__control--inner" aria-label="Previous Slide">
                <span className="icon">
                  <img src="/assets/icons/white/chevron-left.svg" width="18" height="27" className="w-6" alt="Previous" />
                </span>
              </button>
            </li>
            <li className="carousel__next">
              <button className="button carousel__control--inner" aria-label="Next Slide">
                <span className="icon">
                  <img src="/assets/icons/white/chevron-right.svg" width="18" height="27" className="w-6" alt="Next" />
                </span>
              </button>
            </li>
          </ul>
          <div className="overflow-hidden mx-[-16px] md:mx-[-24px]">
            <div className="carousel flex transition-transform duration-300">
              <div className="carousel__slide flex-shrink-0 w-full md:w-1/3">
                <div className="teaser">
                  <a className="block" href="/our-work/emergency-response/" aria-label="Responding to emergencies">
                    <div className="teaser__image-container">
                      <img
                        src="/media/nmpdojlh/somaliadroughtfadumo2022wv548228.jpg"
                        alt="Somali mother holding her child while sat in front of a makeshift tent in an internally displaced persons camp"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="teaser__text p-4">
                      <span className="block text-xl font-bold mb-2">Responding to emergencies</span>
                      <p className="mb-4">When war and disasters happen, we respond with immediate relief and long-term rebuilding.</p>
                      <span className="inline-flex items-center text-secondary">
                        Learn more
                        <img src="/assets/icons/chevron-right.svg" width="8" height="12" className="ml-1" alt="Learn more" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="carousel__slide flex-shrink-0 w-full md:w-1/3">
                <div className="teaser">
                  <a className="block" href="/our-work/child-poverty/" aria-label="Helping children in poverty">
                    <div className="teaser__image-container">
                      <img
                        src="/media/xbzcb3dv/kenyapovertywv26773422022.jpg"
                        alt="Kenyan children looking into a classroom"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="teaser__text p-4">
                      <span className="block text-xl font-bold mb-2">Helping children in poverty</span>
                      <p className="mb-4">We support communities to tackle the root causes of poverty for lasting change.</p>
                      <span className="inline-flex items-center text-secondary">
                        Learn more
                        <img src="/assets/icons/chevron-right.svg" width="8" height="12" className="ml-1" alt="Learn more" />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="carousel__slide flex-shrink-0 w-full md:w-1/3">
                <div className="teaser">
                  <a className="block" href="/our-work/child-protection/" aria-label="Protecting children most at risk">
                    <div className="teaser__image-container">
                      <img
                        src="/media/ooqh1ekk/jordanprotectionmalakwv124476032021.jpg"
                        alt="A girl shows her technique to the camera as she takes part in World Vision's karate class in Jordan"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="teaser__text p-4">
                      <span className="block text-xl font-bold mb-2">Protecting children most at risk</span>
                      <p className="mb-4">Speaking out on issues like child marriage, child soldiers, child labour and violence.</p>
                      <span className="inline-flex items-center text-secondary">
                        Learn more
                        <img src="/assets/icons/chevron-right.svg" width="8" height="12" className="ml-1" alt="Learn more" />
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



























// <section className="flex flex-col items-center gap-8 py-24 mt-[-72px]" id="event">
//       <h2 className="text-4xl font-bold text-right text-gray-800 mt-[35rem]">Event</h2>
//       <div className="text-center">
//         <p className="text-lg leading-7 text-gray-700 px-5">
//           SASI we take great pride in our commitment to serving communities in
//           need and making a positive impact on the lives of those facing adversity. Over the years, we've
//           had the privilege of organizing various events and initiatives aimed at bringing hope, support, and
//           opportunities to marginalized groups.
//         </p>
//       </div>
//       <div className="flex flex-wrap justify-center mt-8 mx-[-1.5rem]">
//         <div className="w-full md:w-1/3 p-4">
//           <div className="bg-white shadow-lg rounded-lg mb-8">
//             <img src={eventpc2} alt="The Mokoko Community" className="w-full rounded-t-lg" />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-700 mb-4">
//                 <a href="#" className="hover:text-[#F8B864]">The Mokoko Community</a>
//               </h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 In 2022 We collaborated to community development led us to the Mokoko community where we implemented a series of sustainable initiatives aimed at improving livelihoods and fostering self-reliance.
//               </p>
//               <div className="flex justify-between text-sm text-gray-700 mb-4">
//                 <div>
//                   <h4>Fill up: <span>N250,000</span></h4>
//                 </div>
//                 <div>
//                   <h4>Target: <span>N500,000</span></h4>
//                 </div>
//               </div>
//               <button className="bg-[#F8B864] text-white py-2 px-4 rounded-full hover:shadow-lg transition duration-300">Read More</button>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/3 p-4">
//           <div className="bg-white shadow-lg rounded-lg mb-8">
//             <img src={picture} alt="Supporting the Blind School" className="w-full rounded-t-lg" />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-700 mb-4">
//                 <a href="#" className="hover:text-[#F8B864]">Supporting the Blind School</a>
//               </h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 In 2023, we partnered with Pacelli School for the Blind to provide crucial resources and support to visually impaired students. Through our fundraising efforts and generous donations.
//               </p>
//               <div className="flex justify-between text-sm text-gray-700 mb-4">
//                 <div>
//                   <h4>Fill up: <span>N510,000</span></h4>
//                 </div>
//                 <div>
//                   <h4>Target: <span>N1,000,000</span></h4>
//                 </div>
//               </div>
//               <button className="bg-[#F8B864] text-white py-2 px-4 rounded-full hover:shadow-lg transition duration-300">Read More</button>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-1/3 p-4">
//           <div className="bg-white shadow-lg rounded-lg mb-8">
//             <img src={eventpc3} alt="Supporting the Deaf School" className="w-full rounded-t-lg" />
//             <div className="p-4">
//               <h3 className="text-lg font-semibold text-gray-700 mb-4">
//                 <a href="#" className="hover:text-[#F8B864]">Supporting the Deaf School</a>
//               </h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 In 2024 we collaborated with Wesley School for the Hearing Impaired to address the unique challenges faced by deaf and hard-of-hearing students. We provided sign language training for teachers.
//               </p>
//               <div className="flex justify-between text-sm text-gray-700 mb-4">
//                 <div>
//                   <h4>Fill up: <span>N1.4 million</span></h4>
//                 </div>
//                 <div>
//                   <h4>Target: <span>N5 million</span></h4>
//                 </div>
//               </div>
//               <button className="bg-[#F8B864] text-white py-2 px-4 rounded-full hover:shadow-lg transition duration-300">Read More</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
