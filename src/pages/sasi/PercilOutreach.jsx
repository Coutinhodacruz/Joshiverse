import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kenya from "../../asset/images/kenyapoverty.jpg";
import event from "../../asset/images/event1.jpg"
import event2 from "../../asset/images/event2.jpg"
import {FaChevronDown} from "react-icons/fa";

const PercilOutreach = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // 2 seconds
    };


    return (
        <>
            <section className="hero flex flex-col lg:flex-row lg:flex-row-reverse items-center mb-4 lg:mb-14 bg-white relative">
                <div className="hero__image w-full lg:w-1/2 mb-4 lg:mb-0">
                    <div className="image w-full mb-4 lg:mb-8">
                        <img src={kenya} alt="Somali mother holding her child while sat in front of a makeshift tent in an internally displaced persons camp" className="w-full h-auto mt-16 lg:mb-8" />
                    </div>

                    <div className="image-slider w-full flex justify-center lg:justify-start">
                        <img src={event} alt="Somali mother holding her child" className="w-1/3 h-auto mr-2" />
                        <img src={event2} alt="Somali mother holding her child" className="w-1/3 h-auto" />
                    </div>

                </div>
                <div className="hero__text w-full lg:w-1/2 flex flex-col items-start p-8 lg:px-24 lg:py-16">
                    <h1 className="hero-title text-4xl font-bold italic mb-4 font-serif">Disaster and Emergency Response</h1>
                    <p className="hero-subtitle text-lg text-gray-700 mb-auto">Responding to emergencies and disasters in the most dangerous places</p>
                    <div role="button" tabIndex="0" className="hero__scroll-link flex items-center cursor-pointer mt-4" aria-label="Click to scroll">
                        <FaChevronDown className="w-6 h-6" />
                    </div>
                </div>
            </section>

            <section className="section section--grid section--text-container bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 md:p-8">
                    <article className="section--text text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4 font-serif">Emergency Relief for Children</h2>
                        <p className="mb-4">
                            Children’s lives can change in an instant in the wake of war, disasters, and humanitarian emergencies. We see how vulnerable they are and how much they need our protection. <strong>And the need is only growing.</strong> Today, there are more than double the number of emergencies than there were ten years ago. <a href="/our-work/climate-change/" className="text-blue-500 hover:underline" title="Climate change">Climate change</a> is unleashing natural disasters faster, for longer and with longer-lasting consequences for children and their families. The needs are greater, and so the response must be too.
                        </p>
                        <p className="mb-4">
                            With over 70 years of experience working in this area, World Vision has the learning, infrastructure, and global network to help millions of vulnerable children in the world’s most dangerous places - especially in times of unexpected crisis. Thanks to you, when disaster strikes, our response teams are there, quickly supporting people – and we stay to help rebuild lives for children, families, and communities.
                        </p>
                        <p>
                            <strong>Within 72 hours of a disaster, we can deliver lifesaving supplies anywhere in the world - often even sooner.</strong>
                        </p>
                    </article>
                </div>
            </section>
        </>
    );
};

export default PercilOutreach;






