import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundimage from "../../src/assets/bg-1.jpg";
import logo from '../assets/ncs-logo.svg'; 
import jss from '../assets/jsslogoicon.png'
import agentica from '../assets/agentica.svg';

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
        <div className="flex flex-col max-w-[1000px] w-full mx-auto items-center text-white">
          <div className="flex w-full mx-auto justify-between">
            <div className="flex flex-row items-center gap-1">
            <img src={jss} className="max-w-[50px]" alt="" />
            <div className="flex flex-col h-full py-3 justify-between max-w-[200px]">
            <p className="text-xs">JSS Mahavidyapeetha</p>
            <p className="text-xs font-bold">JSS Academy of Technical Education Noida</p>
            </div>
             </div>
          <img src={logo} width={100} alt="" />

          </div>
          
          <p className="mt-10  font-bold text-center">Department of Computer Science & Engineering </p>
          <p className=" text-xs ">In collaboration with Nibble Computer Society</p>
          
          <p className="text-xs mb-3">Presents</p>
          
          <div className="text-center">
          <img src={agentica} width={800} alt="" />

            
          <h1 className="text-2xl italic w-full">Workshop on Agentic AI</h1>

          </div>
          
          <div className="flex flex-col items-center my-10 text-sm w-lg italic">

          <div className="flex flex-col">
            <p>Venue : AB1, Room 301</p>
            <p>Date : April 17, 2025 (Thursday)</p>
            <p>Time : 9:30 AM - 12:45 PM</p>
          </div>
  
  
          </div>
          
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
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