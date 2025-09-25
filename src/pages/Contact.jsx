import React from 'react'

const Contact = () => {
    return (
      <section className="py-20 px-6 animate-on-scroll bg-gray-100">
        <div className="container mx-auto lg:flex lg:justify-between lg:items-center gap-12">
          {/* Left side with contact info and map placeholder */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-8xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              We'd love to hear about your project. Feel free to reach out to us with any questions or to schedule a consultation.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-orange-500 mr-4 mt-1 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <div>
                  <h4 className="text-2xl  sm:text-2xl font-semibold text-gray-900">Our Address</h4>
                  <p className="text-lg sm:text-xl text-gray-600">123 Property Lane, Charlotte, NC 12345</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-orange-500 mr-4 mt-1 flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2.06l-5.02-.7a2 2 0 0 0-1.95 1.13A9 9 0 0 1 2 11.66a2 2 0 0 0-1.13-1.95l-.7-5.02A2 2 0 0 1 .92 2H4a2 2 0 0 1 2 2v2a2 2 0 0 1-.22 1l-1.47 1.47a7 7 0 0 0 6.64 6.64l1.47-1.47A2 2 0 0 1 18 18v3a2 2 0 0 1 2 2"/></svg>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">Phone Number</h4>
                  <p className="text-lg sm:text-xl text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-orange-500 mr-4 mt-1 flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 7-10-7"/></svg>
                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-gray-900">Email Address</h4>
                  <p className="text-lg sm:text-xl text-gray-600">info@truebuild.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side with contact form */}
          <div className="bg-white p-8 md:p-16 w-full lg:w-1/2 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold mb-8 text-gray-900">Need Construction Help?</h3>
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <textarea placeholder="Message" rows="5" className="w-full px-4 py-3 bg-gray-100 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };

export default Contact