
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import backgroundimage from "./backgroundimage.avif";
import backgroundimage from "../../src/assets/bg-1.jpg";
import { CgSpinner } from "react-icons/cg";
import logo from '../assets/ncs-logo.svg'; // adjust the path as needed

function Details() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleProceed = () => {
    if (checked) {
      navigate("/form");
    }
  };

    const [formData, setFormData] = useState({
      name: "",
      email:"",
      year: "",
      branch: "",
      admission_number :"",
      experience: "",
    });
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const validate = () => {
      const newError = {};
      if (!formData.name.trim()) newError.name = "Full name is required.";
      if (!formData.email.trim()) newError.email = "Email ID is required.";
      if (!formData.year) newError.year = "Year is required.";
      if (!formData.branch.trim()) newError.branch = "Branch is required.";
      if (!formData.admission_number.trim()) newError.admission_number = "Roll Number is required.";
      return newError;
    };
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      const validateError = validate();
      if (Object.keys(validateError).length > 0) {
        setErrors(validateError);
      } else {
        setErrors({});
        setLoading(true); // Start loading
        await fetch("https://script.google.com/macros/s/AKfycbzG0i-JDT-KxdajgYAl0PmYWHvkoLcZQUEvCH6nfa22bJ5GB85925Q137TxYys-XFGNoQ/exec", {
          method: "POST",
          mode: "no-cors", // ← disables CORS errors but gives you an opaque response
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        setLoading(false); // Stop loading
        navigate('/ThankYou')
      }
    };

  return (
    <div
      className="overflow-auto relative w-full h-screen flex justify-center px-4 bg-cover bg-center"
      style={{
              backgroundImage:
                `url(${backgroundimage})`,
            }}
    >
      {/* Overlay for dimming */}
      <div className="fixed inset-0 bg-black opacity-60 z-0"></div>

      <div className="flex lg:flex-row flex-col w-max-7xl gap-10 justify-between items-center my-15 m-3">
        {/* Details */}
        <div className="relative z-10 text-white  rounded-xl shadow-lg max-w-2xl w-full mx-4">

        {/* WORKSHOP PROJECT */}
        <section className="text-center mb-8">
          <div className="flex justify-between">
          <h2 className="text-3xl font-extrabold mb-3">🛠️ WORKSHOP PROJECT</h2>


          </div>
          <div className="text-sm leading-relaxed text-left">
            <strong>🔍 Build your own deep research assistant</strong>
            <p>
              Students will build a personalized deep research assistant agent,
              such as the ones provided by OpenAI and Perplexity that can:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>✅ Accept a query/topic from the user</li>
              <li>🌐 Fetch recent documents or web content</li>
              <li>🧠 Summarize and organize insights using LLMs (via Hugging Face
                API)
              </li>
              <li>💻 Present the output in a user-friendly web UI (Streamlit or
                Gradio)
              </li>
            </ul>
            <p className="mt-2">
              This tool can be hosted locally or online, and added to the
              students’ CVs or portfolio as a demonstrable project.
            </p>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section>
          <h2 className="font-extrabold mb-3">
            REQUIREMENTS FOR THE WORKSHOP:
          </h2>
          <div className="text-sm text-left">
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>💼 Attendees must bring their own laptops/PCs</li>
              <li>🌐 PCs must have an internet connection</li>
              <li>🐍 PCs must have Python pre-installed</li>
            </ul>
          </div>
        </section>

       
      </div>

      {/* Form */}
      <div className="bg-black/50 backdrop-invert backdrop-opacity-10 p-4 relative z-10 w-full max-w-2xl shadow-2xl">
        <div className="flex justify-between">
          <h2 className="text-white text-2xl font-bold mb-4 text-center">Registration Form</h2>
          <img src={logo} alt="" />
          
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label for="username" class="text-white text-xs block mb-1">👤 Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
              placeholder="Enter your Full Name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label for="username" class="text-white text-xs block mb-1">🌐 Email ID</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
              placeholder="Enter your Email ID"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
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
              <option value="1st" className="text-white bg-black">1st Year</option>
              <option value="2nd" className="text-white bg-black">2nd Year</option>
              <option value="3rd" className="text-white bg-black">3rd Year</option>
              <option value="4th" className="text-white bg-black">4th Year</option>
              
            </select>
            {errors.branch && (
              <p className="text-red-600 text-sm mt-1">{errors.branch}</p>
            )}
          </div>

          <div>
            <label className="text-white text-xs block mb-1">⚙️ Branch</label>
            {/* <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white  border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full"
              placeholder="Enter your branch"
            /> */}
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full"
            >
              <option value="" disabled>
                Select branch
              </option>
              <option className="text-white bg-black" value="CS">CS</option>
              <option className="text-white bg-black" value="AIML">AIML</option>
              <option className="text-white bg-black" value="CSDS">CSDS</option>
              <option className="text-white bg-black" value="IT">IT</option>
              <option className="text-white bg-black" value="EEE">EEE</option>
              <option className="text-white bg-black" value="CE">CE</option>
              <option className="text-white bg-black" value="EE">EE</option>
              <option className="text-white bg-black" value="EC">EC</option>
              <option className="text-white bg-black" value="ME">ME</option>
            </select>
            {errors.branch && (
              <p className="text-red-600 text-sm mt-1">{errors.branch}</p>
            )}
          </div>
          <div>
            <label for="username" class="text-white text-xs block mb-1">#️⃣ Roll Number</label>
            <input
              type="text"
              name="admission_number"
              value={formData.admission_number}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2  placeholder:text-gray-400 focus:outline-none text-sm/6 w-full "
              placeholder="Enter your Roll Number"
            />
            {errors.admission_number && (
              <p className="text-red-600 text-sm mt-1">{errors.admission_number}</p>
            )}
          </div>

          <div>
            <label className="text-white text-xs block mb-1">
            🤖 Prior Experience in AI Agents/LLMs/ML <i>( if any )</i>
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="bg-black/50 backdrop-invert backdrop-opacity-10 placeholder:text-gray-300 text-white border border-gray-100/20 rounded-sm py-0.5 px-2 focus:outline-none text-sm/6 w-full"
              placeholder="Briefly describe your experience"
              rows="4"
            ></textarea>
            {errors.experience && (
              <p className="text-red-600 text-sm mt-1">{errors.experience}</p>
            )}
          </div>

          <button
            type="submit"
            className="flex items-center justify-center w-full py-1 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition disabled:opacity-70"
            disabled={loading}
          >
            {loading ? (
              <>
                <CgSpinner className="animate-spin h-5 w-5 mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <i>Submit</i>
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </>
            )}
          </button>
       
        </form>
      </div>

      </div>

      
    </div>
  );
}

export default Details;

