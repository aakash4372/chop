import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MeatImage from "../assets/meat.png";
import { FaPhoneAlt } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of animations
      once: true,     // Animation happens once when scrolling
    });
    AOS.refresh();  // Ensures AOS works correctly when the page loads
  }, []);

  return (
    <section className="w-full py-16 mb-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:gap-20 gap-12">
        {/* Left content */}
        <div className="lg:w-1/2" data-aos="fade-right">
          <p className="text-[#9c0202] text-3xl font-dancing mb-2">About us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black font-opensans leading-tight mb-6" data-aos="fade-up">
            Chop Chop <br /> Fresh Quality Meat
          </h2>
          <p className="text-gray-600 text-base font-commissioner mb-8 leading-relaxed text-justify" data-aos="fade-up" data-aos-delay="200">
            Chop Chop is an e-commerce platform for premium mutton and chicken. So far, we have served thousands of happy customers. 
            We strictly maintain halal practices, ensure hygienic processing, and use eco-friendly packaging to guarantee the best quality.
            Since 2018, Chop Chop has been committed to delivering fresh, clean, and safe meat right to your doorstep.
          </p>

          {/* Contact */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-3 text-[#9c0202]" data-aos="fade-up" data-aos-delay="400">
              <FaPhoneAlt className="text-xl" />
              <span className="text-black font-bold text-base font-opensans">+91 9566037235</span>
            </div>
          </div>

          <button
            onClick={() => {
              const section = document.getElementById("services");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group relative overflow-hidden bg-[#9c0202] text-white px-6 py-3 rounded-full flex items-center gap-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <span className="transition-all duration-300 group-hover:-translate-x-1">
              Read more
            </span>
            <BsPlusLg className="text-sm transition-all duration-300 group-hover:rotate-90 group-hover:scale-125" />
            {/* Shine Effect */}
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
          </button>
        </div>

        {/* Right image */}
        <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
          <img src={MeatImage} alt="Meat" className="w-full max-w-xl mx-auto lg:ml-10" />
        </div>
      </div>
    </section>
  );
}
