import React, { useState, useEffect } from 'react';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import ContactPage from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // A simple way to render different pages based on state,
  // without a routing library.
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  // Effect to handle scroll animations for all sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-view');
          } else {
            entry.target.classList.remove('animate-in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            background-color: #f4f7f9;
          }

          /* Keyframe Animations */
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes pulse-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          /* Card Hover Effect */
          .card-hover-effect:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 10px 20px rgba(255, 126, 48, 0.4), 0 4px 6px rgba(255, 126, 48, 0.2);
          }

          /* Scroll Animation Trigger Class */
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }
          
          .animate-on-scroll.animate-in-view {
            opacity: 1;
            transform: translateY(0);
          }

          /* Contact Page Animations */
          @keyframes animateContactBg {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
          }
          
          .animated-contact-bg {
            animation: animateContactBg 20s linear infinite alternate;
          }
        `}
      </style>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://unpkg.com/lucide-react@latest/dist/umd/lucide-react.js"></script>
      
      <Header onNavClick={setCurrentPage} />

      {/* Main content area */}
      <main className="min-h-screen">
        {renderPage()}
      </main>

      <Footer onNavClick={setCurrentPage} />
    </>
  );
};


export default App;
