import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RiDoubleQuotesL } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Reviewsection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Trigger animation only once
    });
  }, []);
  

  const testimonials = [
    {
      id: 1,
      content: 'The freshest chicken I’ve ever bought! The cuts were clean, juicy, and perfectly packed. Definitely the best chicken shop near me. I’ll be coming back every week!',
      rating: 5
    },
    {
      id: 2,
      content: 'Top-quality mutton with great taste and texture. The meat was tender and cooked beautifully. Highly recommend this place for anyone looking for premium mutton.',
      rating: 5
    },
    {
      id: 3,
      content: 'I ordered online and the delivery was super fast! The packaging was hygienic and the chicken was fresh. Best place for online chicken delivery at a fair price.',
      rating: 5
    },
    {
      id: 4,
      content: 'Finally found a trusted meat shop that sells both halal chicken and mutton. The quality is consistent and the staff is very professional. 10/10 experience.',
      rating: 5
    },
    {
      id: 5,
      content: 'This shop is a hidden gem! Clean shop, polite staff, and farm-fresh chicken and mutton available daily. Perfect for families who care about quality meat.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="bg-[#f8f5f0] py-16 px-4 sm:px-6 lg:px-8" id='testimonial'>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#9c0202] text-3xl font-dancing mt-2 pb-6" data-aos="fade-up">Testimonials</h2>
          <p className="text-4xl md:text-5xl font-bold text-black font-opensans leading-tight mb-6" data-aos="fade-up">Our Clients Say</p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
<div
  className="bg-[#f5ebe0] p-10 rounded-xl shadow-lg text-center max-w-3xl mx-auto border border-gray-300 border-t-4 transition-shadow duration-300 hover:shadow-xl"
  style={{ borderTopColor: '#9c0202' }}
>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#ffc107]' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="text-gray-700 font-quicksand text-xl leading-relaxed mb-6 relative">
                    <RiDoubleQuotesL className="absolute -top-4 -left-4 text-[#9c0202] text-2xl" />
                    {testimonial.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#9c0202] text-white p-2 rounded-full shadow-md  hover:bg-[#9c0202] hover:text-white transition-colors z-10"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#9c0202] text-white p-2 rounded-full shadow-md  hover:bg-[#9c0202] hover:text-white transition-colors z-10"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full mx-1 ${currentSlide === index ? 'bg-[#9c0202]' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviewsection;