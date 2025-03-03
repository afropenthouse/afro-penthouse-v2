import React from 'react';
import about3 from '../../../public/about-3.svg'
import about4 from '../../../public/about-4.svg'
import Image from 'next/image';

const ICTServicesComponent = () => {
  return (
    <div className="w-full bg-white">
      {/* Mission Section */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our mission is to deliver high quality work</h2>
          <p className="text-gray-700 mb-6">
            Our goal is not only to provide excellent ICT services but to act as a trusted partner in driving the technological advancement of our clients, ensuring that they stay competitive and future-ready in an ever-changing digital landscape.
          </p>
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center">
            Get In Touch
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Image 
            src={about3} 
            alt="IT professionals working with code on multiple screens" 
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <Image 
            src={about4} 
            alt="IT professionals working with code on multiple screens" 
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our vision is to drive innovation through ICT solutions</h2>
          <p className="text-gray-700 mb-6">
            Our aim is to be a respected and recognized ICT company, serving as the IT partner of choice for large enterprises and small to medium-sized businesses (SMBs) offering services that are tailored to their unique needs and challenges.
          </p>
          <button className="border border-gray-300 text-black px-4 py-2 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Talk to our team
          </button>
        </div>
      </div>
    </div>
  );
};

export default ICTServicesComponent;