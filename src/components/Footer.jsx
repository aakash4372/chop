import React from 'react';
import {FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import FooterLogo from '/Footer/icon.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const links = ['About', 'Services', 'Testimonial', 'Certificate', 'Contact'];

  return (
    <footer className="bg-[#191716] text-white py-10" id='contact'>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 - Logo & Text */}
        <div className="flex flex-col items-start max-w-xs">
          <img src={FooterLogo} alt="BMTechx Logo" className="h-14 mb-3" />
          <p className="text-sm">
            Chop Chop is an e-commerce platform for fresh mutton and chicken, trusted by thousands for its halal, hygienic, and eco-friendly packaging.
          </p>
        </div>

        {/* Column 2 - Useful Links */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-3 text-[#ffecad] font-quicksand">Useful Links</h3>
          <ul className="space-y-1 text-base">
            {links.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-red-400 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* Column 3 - Contact Info */}
        <div className="flex flex-col max-w-xs">
          <h3 className="text-lg font-semibold mb-3 text-[#ffecad] font-quicksand">Contact Us</h3>
          <p className="text-sm mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-2" size={16} />
            32/50 Thiru Vika Nagar 4th Street, Pulianthope, Chennai 600012
          </p>
          <p className="text-sm mb-4 flex items-center">
            <FaPhone className="mr-2" size={16} />
            <a href="tel:+919566037235" className="hover:text-red-400 transition-colors">
              +91 9566037235
            </a>
          </p>
          <p className="text-sm flex items-center">
            <FaEnvelope className="mr-2" size={16} />
            <a href="mailto:premanand783@gmail.com" className="hover:text-red-400 transition-colors">
              premanand783@gmail.com
            </a>
          </p>
        </div>

        <div className="flex flex-col">
  <h3 className="text-lg font-semibold mb-3 text-[#ffecad] font-quicksand">Follow Us</h3>
  <div className="flex space-x-4 items-center">
    <a
      href="https://www.instagram.com/premanand8144?igsh=Y2t0d2k1ZGhqMWJ3"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-red-400"
    >
      <img
        src="Footer/instagram.png"
        alt="Get it on Google Play"
        className="h-10"
      />
    </a>
    <a
      href="https://play.google.com/store/apps/details?id=com.spiderindia.ChopChop" // Replace with your actual Play Store URL
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <img
        src="/Footer/playstore.svg"
        alt="Get it on Google Play"
        className="h-10"
      />
    </a>
  </div>
</div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 sacrilege mt-6 pt-5 mb-0 text-center">
        <a 
          href="https://bmtechx.in/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-sm"
        >
          © {currentYear} <span className="hover:text-red-400 transition-colors">BMTechx</span>.in All rights reserved.
        </a>
      </div>
    </footer>
  );
};

export default Footer;