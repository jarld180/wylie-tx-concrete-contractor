import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-start space-x-2 mb-8 text-black">
              <div className="w-8 h-8 bg-black rounded-lg flex items-start justify-center">
                <Logo className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight uppercase text-black">
                Wylie <span className="text-black">Concrete</span>
              </span>
            </div>
            <p className="text-black text-lg mb-8 max-w-sm">
              Wylie's premier concrete contractors specializing in high-end residential and commercial projects. Building foundations for a lifetime.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-black">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/driveways" className="text-black hover:text-black transition-colors font-medium">Driveway Installation</Link></li>
              <li><Link to="/foundations" className="text-black hover:text-black transition-colors font-medium">Concrete Foundations</Link></li>
              <li><Link to="/patios" className="text-black hover:text-black transition-colors font-medium">Stamped Patios</Link></li>
              <li><Link to="/pool-decks" className="text-black hover:text-black transition-colors font-medium">Pool Decks</Link></li>
              <li><Link to="/garage-floors" className="text-black hover:text-black transition-colors font-medium">Garage Floors</Link></li>
              <li><Link to="/sidewalks" className="text-black hover:text-black transition-colors font-medium">Sidewalks & Walkways</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-black">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-black hover:text-black transition-colors font-medium">Home</Link></li>
              <li><Link to="/services" className="text-black hover:text-black transition-colors font-medium">All Services</Link></li>
              <li><a href="/#about" className="text-black hover:text-black transition-colors font-medium">About Us</a></li>
              <li><a href="/#contact" className="text-black hover:text-black transition-colors font-medium">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-black">Service Areas</h4>
            <ul className="space-y-4">
              <li><span className="text-black font-medium">Garland, TX</span></li>
              <li><span className="text-black font-medium">Mesquite, TX</span></li>
              <li><span className="text-black font-medium">Rowlett, TX</span></li>
              <li><span className="text-black font-medium">Rockwall, TX</span></li>
              <li><span className="text-black font-medium">Forney, TX</span></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start text-sm text-black">
          <p>© 2026 Wylie Concrete. All rights reserved. (972) 325-5401</p>
          <div className="flex space-x-8 mt-4 md:mt-0 font-medium">
            <Link to="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-black transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

