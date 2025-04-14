import React from "react";
import backgroundimage from "../../src/assets/bg-1.jpg";
import logo from '../assets/ncs-logo.svg'; // adjust the path as needed

function FinalThankYou() {
  return (
    <section
      className="flex flex-col items-center justify-center px-4 h-screen bg-cover bg-center shadow-[inset_0_0_0_2000px_rgba(0,0,0,0.5)]"
      style={{
        backgroundImage: `url(${backgroundimage})`,
      }}
    >
      <div className="flex flex-col items-center text-white text-center max-w-[1000px] mx-auto px-4">
        <img src={logo} width={180} alt="" />

        <p className="text-[15px] text-[rgb(219,205,190)] tracking-[3px] mb-2">
          NIBBLE COMPUTER SOCIETY
        </p>

        <p className="text-[15px] text-[rgb(219,205,190)] tracking-[30px] mb-8">
          THANK YOU
        </p>

        <h1 className="text-5xl font-bold italic mb-6 max-[500px]:text-4xl">
          You're Registered!
        </h1>

        <p className="text-xl mb-2">We appreciate your registration.</p>
        <p className="text-lg">See you at the workshop!</p>

        <div className="mt-10 relative inline-flex group">
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <a
            href="/"
            className="flex gap-1 relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalThankYou;
