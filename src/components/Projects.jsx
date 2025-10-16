import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

import kitchen1Image from "../assets/projects/kitchen1.png";
import kitchen2Image from "../assets/projects/kitchen2.png";
import bathroomImage from "../assets/projects/bathroom1.png";
import bathroom1Image from "../assets/projects/bathroom2.png";
import outdoor1Image from "../assets/projects/outdoor2.png";
import outdoor2Image from "../assets/projects/outdoor1.png";

const Projects = () => {
  const projects = [
    {
      title: "Luxury Kitchen Remodel",
      description:
        "Transforming an outdated kitchen into a sleek modern space with premium finishes, lighting, and smart functionality.",
      images: [kitchen1Image, kitchen2Image],
    },
    {
      title: "Luxury Bathroom Remodel",
      description:
        "Creating a serene, spa-like bathroom with elegant tilework, glass fittings, and ambient lighting for relaxation.",
      images: [bathroomImage, bathroom1Image],
    },
    {
      title: "Outdoor Deck & Patio",
      description:
        "Designing a cozy and durable outdoor space for gatherings, complete with stylish decking and comfortable seating.",
      images: [outdoor1Image, outdoor2Image],
    },
  ];

  return (
    <section className="relative py-20 bg-[#1b1b1b] text-white overflow-hidden">
      {/* Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-orange-400/15 rounded-full blur-3xl"></div>
      </div>

      <h2 className="text-4xl font-bold text-center mb-16 tracking-tight text-orange-300">
        Before & After Transformations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-12 max-w-7xl mx-auto">
        {projects.map((project, i) => {
          const before = project.images[0];
          const after = project.images[1] || project.images[0];

          return (
            <div
              key={i}
              className="flex flex-col items-center bg-[#222]/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-[#333] hover:shadow-orange-500/20 transition-all"
            >
              <div className="relative w-full overflow-hidden rounded-xl flex justify-center items-center bg-black/40">
                <div className="w-full max-w-[600px] aspect-[4/3]">
                  <ReactBeforeSliderComponent
                    firstImage={{ imageUrl: before }}
                    secondImage={{ imageUrl: after }}
                  />
                </div>
              </div>

              <div className="mt-5 text-center space-y-2">
                <h3 className="text-2xl font-semibold text-orange-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
                  {project.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>
        {`
          .before-after-slider__first-image img,
          .before-after-slider__second-image img {
            width: 100%;
            height: 100%;
            object-fit: cover !important;
            object-position: center;
            border-radius: 1rem;
            background: #111;
          }

          /* Make the circle draggable cursor */
          .before-after-slider__delimiter {
            cursor: grab !important;
            transition: transform 0.1s ease, box-shadow 0.2s;
          }
          .before-after-slider__delimiter:active {
            cursor: grabbing !important;
            transform: scale(1.05);
            box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
          }

          /* Adjust delimiter circle color */
          .before-after-slider__delimiter-circle {
            background: linear-gradient(135deg, #ff914d, #ffb86c) !important;
            box-shadow: 0 0 10px rgba(255, 160, 80, 0.5);
          }

          .before-after-slider {
            border-radius: 1rem;
          }
        `}
      </style>
    </section>
  );
};

export default Projects;
