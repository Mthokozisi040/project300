import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=" text-white py-12 px-4 mt-12" style={{ backgroundColor: 'rgba(39, 42, 85, 1)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* University Info with Logo */}
        <div className="space-y-4">
          <div className="relative w-48 h-20"> {/* Adjust width and height as needed */}
            <Image 
              src="/footer.png" // Replace with your actual logo path
              alt="University of Mpumalanga Logo"
              layout="fill"
              objectFit="contain"
              className="h-15" // Makes the logo white
            />
          </div>
          <div className="space-y-2">
            <div>
              <h4 className="font-semibold">Mbombela Campus</h4>
              <p className="text-gray-300">Cnr R40 and D725 Roads, Mbombela <br/>1200</p>
            </div>
            <div>
              <h4 className="font-semibold">Siyabuswa Campus</h4>
              <p className="text-gray-300">Bheki Mfundo Drive, Siyabuswa, South Africa<br />972</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            <li><a href="/home" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/all-categories" className="text-gray-300 hover:text-white">Category</a></li>
             <li><a href="/community" className="text-gray-300 hover:text-white">Community</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-white">Events</a></li>
               <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <div className="space-y-2 text-gray-300">
            <p>General Enquiries:</p>
            <p>Switchboard: 013 002 0001</p>
            <p>Email: cocurricularactivities@ump.ac.za</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/UniMpumalanga/" className="text-gray-300 hover:text-white">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/unimpumalanga/" className="text-gray-300 hover:text-white">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://x.com/UniMpumalanga/" className="text-gray-300 hover:text-white">
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 University Of Mpumalanga. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm underline">Privacy Policy</a>
            <a href="/T&Cs" className="text-gray-400 hover:text-white text-sm underline">Terms of Use</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;