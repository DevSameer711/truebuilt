import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ServicesBanner from "../components/ServicesBanner";

const Home = () => {
  

  return (
    <>
    <Hero/>  
    <About/>

    <ServicesBanner/>
    <Services/>
      
      <section className="py-20 px-6 bg-white animate-on-scroll">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Ready to Start Your Project?</h2>
          <p className="mt-4 text-lg text-gray-600">
            Contact us today for a free consultation and let's turn your ideas into reality.
          </p>
          <button className="mt-8 inline-block px-8 py-4 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105" onClick={() => setCurrentPage('contact')}>
            Contact Us Today
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;