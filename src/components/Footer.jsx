import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Company Info Column - wider and with right margin */}
          <div className="col-span-1 md:col-span-4 md:mr-8">
            <h2 className="text-2xl font-bold mb-4">AFRO-PENTHOUSE</h2>
            <p className="text-sm leading-relaxed mb-8">
              Enabling life-changing, cutting edge it solutions to propel your organization's success.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter/X" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#" aria-label="Email" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                </svg>
              </a>
              <a href="#" aria-label="Google Plus" className="hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Other columns with equal spacing */}
          <div className="col-span-1 md:col-span-2 md:ml-8">
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Our Expertise</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Testimonials</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Projects</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="tel:+2342014536157" className="text-sm text-gray-400 hover:text-white">+234 201 453 6157</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">HQ Location</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Message Board</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Customer Support</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Application Development</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Application Integration</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">Project Management</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-white">IT Training</a></li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 mb-6"></div>

        {/* Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© 2025 Afro-Penthouse. All Rights Reserved</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;