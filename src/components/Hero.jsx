import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import bgBanner from '../assets/banner-2.jpg'; // Assuming this is your background image
import { motion } from "framer-motion";
const Hero = () => {
    const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    // Crucial step: Make THREE available on the global window object.
    window.THREE = THREE;

    const timeoutId = setTimeout(() => {
      // Initialize Vanta.js only once, when the component mounts and ref is available
      if (!vantaEffectRef.current && vantaRef.current) {
        vantaEffectRef.current = WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: false, // Set to false as per the image (no obvious interaction)
          touchControls: false, // Set to false
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x1a1a1b, // Dark color to blend with the overlay
          shininess: 14.0,
          waveHeight: 16.5,
          waveSpeed: 0.7,
          zoom: 0.97,
        });
      }
    }, 100); // Added a small delay to ensure the DOM element is rendered

    // Clean up the animation when the component unmounts
    return () => {
      clearTimeout(timeoutId);
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
      }
    };
  }, []);
  return (
    <section className="relative h-screen flex items-center justify-start text-white overflow-hidden">
        {/* Vanta Waves Background (Layer 0) */}
        <div ref={vantaRef} className="absolute inset-0 w-full h-full z-0 vanta-container"></div>

        {/* Banner Image Overlay (Layer 1) - Opacity allows Vanta waves to show through */}
        <div
          className="absolute inset-0 w-full h-full z-10"
          style={{
            backgroundImage: `url(${bgBanner})`, // Correct template literal for URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5, // Adjust this to control visibility of the image vs. waves
          }}
        ></div>

        {/* Dark Gradient Overlay for better text contrast and blending (Layer 2) */}
        <div
  className="absolute inset-0 z-20 opacity-90"
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(5,5,5,0.8) 60%, rgba(100,100,100,0.5) 100%)`,
  }}
></div>

<div className="relative z-30 p-6 sm:p-12 text-left max-w-full lg:max-w-l">
  <div className="px-4 sm:px-6 lg:px-8">
    
    {/* Subtitle */}
    <p className="text-[#f55018] text-sm sm:text-base font-semibold mb-2 tracking-widest uppercase flex items-center">
      <span className="h-2 w-2 bg-[#f55018] rounded-full mr-2"></span>
      TrueBuild Property Solutions
    </p>

    {/* Title */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
      We Provide Effective <br />
      Construction <span className="text-[#f55018]">&</span> <br />
      Renovations Services
    </h1>

    {/* Button */}
    <div className="flex lg:items-center mt-8">
      <motion.button
        onClick={() => onNavClick("contact")}
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
  )
}

export default Hero