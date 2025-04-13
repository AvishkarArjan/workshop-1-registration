import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import backgroundimage from "./backgroundimage.avif";
import backgroundimage from "../../src/assets/bg-1.jpg";

import Introduction from "./Introduction";

const FormCard = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email:"",
    year: "",
    branch: "",
    experience: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = () => {
    const newError = {};
    if (!formData.fullName.trim()) newError.fullName = "Full name is required.";
    if (!formData.email.trim()) newError.fullName = "Email ID is required.";
    if (!formData.year) newError.year = "Year is required.";
    if (!formData.branch.trim()) newError.branch = "Branch is required.";
    return newError;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validate();
    if (Object.keys(validateError).length > 0) {
      setErrors(validateError);
    } else {
      setErrors({});
      alert("Registered Successfully!");
      navigate("Introduction");
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundimage})`,
      }}
    >
      {/* Dimmed overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Form content */}
      <div className="rounded-md relative z-10 w-full max-w-2xl p-6 bg-black/30 backdrop-invert backdrop-opacity-10  shadow-2xl">
        <div className="flex justify-between">
          <h2 className="text-white text-2xl font-bold mb-4 text-center">Registration Form</h2>
          <img src="src/assets/ncs-logo.svg" alt="" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label for="username" class="text-white text-xs block mb-1">👤 Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label for="username" class="text-white text-xs block mb-1">🌐 Email ID</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
              placeholder="Enter your email"
            />
            {errors.fullName && (
              <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="text-white text-xs block mb-1">✏️ Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full"
            >
              <option value="" disabled>
                Select year
              </option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
              <option value="4th">4th Year</option>
            </select>
            {errors.year && (
              <p className="text-red-600 text-sm mt-1">{errors.year}</p>
            )}
          </div>

          <div>
            <label className="text-white text-xs block mb-1">⚙️ Branch</label>
            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white  border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full"
              placeholder="Enter your branch"
            />
            {errors.branch && (
              <p className="text-red-600 text-sm mt-1">{errors.branch}</p>
            )}
          </div>

          <div>
            <label className="text-white text-xs block mb-1">
            🤖 Prior Experience in AI Agents/LLMs/ML (if any)
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2 focus:outline-none text-sm/6 w-full"
              placeholder="Briefly describe your experience"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full py-1 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition"
          >
            <i>Submit</i>
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
       
        </form>
      </div>
    </div>
  );
};

export default FormCard;
