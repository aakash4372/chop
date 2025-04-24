import React from "react";
import { FaStar, FaGooglePlay, FaTruck } from "react-icons/fa";
import { GoPackageDependents } from "react-icons/go";

const Mobile = () => {
  return (
    <div className="min-h-screen bg-[#9c0202] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Wave background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/mobile/banner.jpg"
          alt="Wave Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="container mx-auto max-w-7xl relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left side - Mobile mockup */}
          <div className="w-full lg:w-2/5 flex items-center justify-center p-8 relative">
            <div className="relative transform rotate-[10deg] shadow-2xl rounded-[40px] border-8 border-gray-800 bg-gray-800 w-[280px] h-[580px]">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-800 rounded-b-xl z-10"></div>
              {/* Phone screen */}
              <div className="w-full h-full rounded-[32px] overflow-hidden">
                <img
                  src="/mobile/mobile.jpg"
                  alt="Play Store Interface"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Phone buttons */}
              <div className="absolute right-[-8px] top-32 h-16 w-2 bg-gray-700 rounded-l-lg"></div>
              <div className="absolute left-[-8px] top-24 h-12 w-2 bg-gray-700 rounded-r-lg"></div>
              <div className="absolute left-[-8px] top-40 h-12 w-2 bg-gray-700 rounded-r-lg"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#9c0202]/20 rounded-full filter blur-3xl"></div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-[#9c0202]/20 rounded-full filter blur-2xl"></div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Download Our App
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
              Experience the taste of quality with our user-friendly, feature-rich app. Order farm-fresh meat from the comfort of your home. Chop Chop ensures hygiene, freshness, and fast delivery – every time.
            </p>

            <div className="space-y-6">
              {/* Star Rating */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#9c0202] p-3 rounded-full text-white">
                  <FaStar className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">4.9 Star Rating</h3>
                  <p className="text-gray-600 mt-1">Loved by meat lovers across the city for top-tier quality & service.</p>
                </div>
              </div>

              {/* Download Orders */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#9c0202] p-3 rounded-full text-white">
                  <GoPackageDependents className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">1M+ Orders Delivered</h3>
                  <p className="text-gray-600 mt-1">Join thousands who trust us for their daily protein fix.</p>
                </div>
              </div>

              {/* Delivery Speed */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#9c0202] p-3 rounded-full text-white">
                  <FaTruck className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Same-Day Delivery</h3>
                  <p className="text-gray-600 mt-1">Order now, cook tonight!</p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.spiderindia.ChopChop"
                target="_blank"
                rel="noopener noreferrer"
                className="!rounded-button whitespace-nowrap cursor-pointer inline-flex items-center px-8 py-4 bg-[#9c0202] text-white rounded-lg hover:bg-[#8c0202] transition-all shadow-lg"
              >
                <FaGooglePlay className="mr-3 text-2xl" />
                <div className="flex flex-col">
                  <span className="text-xs">GET IT ON</span>
                  <span className="text-xl font-semibold">Google Play</span>
                </div>
              </a>

              <div className="flex items-center mt-4 space-x-2">
                <p className="text-sm text-gray-500">
                  Available for Android devices running version 8.0 and above
                </p>
                <span className="text-[#9c0202]">•</span>
                <p className="text-sm text-gray-500">Free to download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
