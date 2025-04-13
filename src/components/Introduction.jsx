import React from "react";
import { useNavigate } from "react-router-dom";
// import backgroundimage from "../../src/assets/pexels-mahdibafande-14754067.jpg";
import backgroundimage from "../../src/assets/bg-1.jpg";

function Introduction() {
    
      const navigate = useNavigate();
    
      const handleProceed = () => {
          navigate("/Details");
      };
    return (
      <section className="flex flex-col items-center justify-center py-10 px-4 flex h-screen bg-cover bg-center shadow-[inset_0_0_0_2000px_rgba(0,0,0,0.5)]"
      style={{
              backgroundImage:
                `url(${backgroundimage})`,
            }}>
        <div className="flex flex-col max-w-[1200px] w-full mx-auto items-center text-white">
          <img src="src/assets/ncs-logo.svg" width={200} alt="" />
          <p className="text-[15px] text-[rgb(219,205,190)] tracking-[3px] mt-[50px] mb-[5px] max-[400px]:tracking-[2px] max-[400px]:mt-[30px]">NIBBLE COMPUTER SOCIETY</p>
          
          <p className="text-[15px] text-[rgb(219,205,190)] tracking-[30px] ml-[20px] mb-[50px] max-[550px]:mb-[40px] max-[400px]:tracking-[25px]">PRESENTS</p>
          
          <div className="text-center">
          <h1 className="text-7xl italic w-full">Workshop on Agentic AI</h1>

          </div>
          
          <div className="flex flex-col items-center my-10 text-sm">

          <p>Location : AB1</p>
          <p>Location : Mar 17, 2025 (Thursday)</p>
  
          <p className="text-white font-sans p-[1px] text-[15px] max-[550px]:text-[13px] max-[400px]:text-[12px]">
            Organizers : Core Team @ NCS
          </p>
  
          </div>
          
          <div className="relative inline-flex  group">
          <div
                  class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
              </div>
              <button
            className="flex gap-1 relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            onClick={handleProceed}
          >
            <p>Register</p> <u><i>Now</i></u>
          </button>
          </div>
          
        </div>
      </section>
    );
  }
  
  export default Introduction;