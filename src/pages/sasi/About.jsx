import React from 'react';
import grow from '../../asset/image/aboutUs.jpg'; // Update the path to your image

const About = () => {
  return (
    <section className="flex flex-col items-center space-y-8 px-4 lg:px-16">
      <h2 className="text-4xl mt-20 mb-12 text-center text-[#383636] font-bold capitalize font-serif">
        About <span className="text-[#F8B864]">Us</span>
      </h2>
      <div className="text-center">
        <h3 className="inline-block text-2xl font-serif text-[#555555]">Grow Up Humanity</h3>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="text-left">
            <h1 className="text-2xl mb-4 font-serif font-normal text-[#555] text-center lg:text-left">Who We Are</h1>
            <p className="px-5 pb-6 text-lg leading-7 text-[#777777]">
              SASI (Share a Smile Initiative) is an expression of Joshiverse, that leverages the goodwill 
              of our community, partners, and supporters, channeling their generosity towards enabling the 
              disadvantaged to access quality education, encouraging them to grow holistically, and empowering 
              them to lead!
            </p>
          </div>
          <div className="text-left">
            <h1 className="text-2xl mb-4 font-serif font-normal text-[#555] text-center lg:text-left">Our Vision</h1>
            <p className="px-5 pb-6 text-lg leading-7 text-[#777777]">
              We are always delighted to support these schools with variety of materials to enhance the learning 
              experience of the learners, expand their educational horizon, and boost their fighting chance for a 
              bright future and afford them a competitive advantage in these technological times.
            </p>
          </div>
          {/* <div className="text-left">
            <h1 className="text-2xl mb-4 font-serif font-normal text-[#555] text-center lg:text-left">Our Mission</h1>
            <p className="px-5 pb-6 text-lg leading-7 text-[#777777]">
              We run our outreaches on a yearly basis, with this being our third edition - we have had the privilege 
              of contributing to the Makoko community, the Pacelli School for the Blind, and the Wesley School for the 
              Hearing Impaired. We want them to know that we and many others are rooting for them; we believe in them; 
              and we will keep cheering them on as they progress towards greater heights beyond societal limitations.❤️💯
            </p>
          </div> */}
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end px-4 lg:px-0">
          <img src={grow} alt="Grow Up Humanity" className="max-w-full lg:max-w-[30rem] rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
