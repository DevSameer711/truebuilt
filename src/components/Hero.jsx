import React from "react";
import bgBanner from "../assets/banner-2.png"; 
import shape3 from "../assets/shape-3.svg"; 
import shape4 from "../assets/shape-4.svg"; 
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-start text-white overflow-hidden">
      {/* Background Banner */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${bgBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
{/* Animated Shapes */}
<motion.img
  src={shape3}
  alt="shape left"
  className="absolute left-0 top-0 w-full h-full z-0 opacity-70 object-cover"
  animate={{ x: [0, -20, 0, 0, 0] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
/>


<motion.img
  src={shape4}
  alt="shape right"
  className="absolute top-0 h-full w-auto z-20 right-[-25%]"
  animate={{ y: [0, 20, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
/>
      {/* Content */}
      <div className="relative z-30 p-6 sm:p-12 text-left max-w-full lg:max-w-xl">
        <div className="px-4 sm:px-6 lg:px-8">
          <p className="text-[#f55018] text-sm sm:text-base font-semibold mb-2 tracking-widest uppercase flex items-center">
            <span className="h-2 w-2 bg-[#f55018] rounded-full mr-2"></span>
            TrueBuild Property Solutions
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
            We Provide Effective <br />
            Construction <span className="text-[#f55018]">&</span> <br />
            Renovations Services
          </h1>

          <div className="flex mt-8">
            <motion.button
              onClick={() => handleNav("/contact")}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#f55018] text-[#ffffff] font-semibold rounded-full shadow-lg relative overflow-hidden group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-1">
                Take Our Service
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
