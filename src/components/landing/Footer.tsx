import React from 'react';
import Image from 'next/image';
import { Diamond } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 px-4 mt-10">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-sm max-w-5xl">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Diamond className="text-pink-500" size={24} />
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Playbox
            </h1>
          </div>
          <p className="text-gray-600">
            The best option all in one tools to premium access with affordable price.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold mb-4 text-gray-800">Our social media</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity border-2 border-pink-200 rounded-lg p-1">
              <Image src="/icons/social/instagram.svg" alt="Instagram" width={28} height={28} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity border-2 border-gray-900 rounded-lg p-1">
              <Image src="/icons/social/tiktok.svg" alt="TikTok" width={28} height={28} />
            </a>
          </div>
          <div className="mt-4 flex gap-4 text-gray-600">
            <Link href="#" className="hover:text-black">Privacy Policy</Link>
            <Link href="#" className="hover:text-black">Terms of Service</Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-gray-800">have a question? ask us anything</h3>
           <a href="#" className="inline-flex items-center gap-2 bg-green-100 text-green-800 font-bold py-3 px-4 rounded-lg hover:bg-green-200 transition-colors border border-green-300">
            <Image src="/icons/social/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 