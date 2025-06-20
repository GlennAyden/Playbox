import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
            eget efficitur, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">convallis.</span>
            <br />
            Vestibulum vitae dui.
          </h1>
          <p className="text-gray-600 max-w-lg">
            nec diam vestibulum, tellus tincidunt borbi Praesent nisl cursus gravida Vestibulum Nunc placerat et.
            Tellus laoreet eu, faucibus placerat eget, malesuada. Vitae proin tempor consequat. 
            Non ut ut, in odio arc dignissim, vitae tortor.
          </p>
          <button className="text-white font-bold py-4 px-10 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-purple-200">
            Try Now
          </button>
        </div>
        <div className="relative flex justify-center items-center h-96">
          {/* Placeholder for dual image composition */}
          <div className="absolute right-1/4 top-0 transform translate-x-1/4 -translate-y-1/4">
            <div className="p-4 bg-white rounded-2xl shadow-2xl">
              <Image 
                src="/images/bitcoin.png" 
                alt="Bitcoin" 
                width={300} 
                height={300}
                priority
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="absolute left-1/4 bottom-0 transform -translate-x-1/4 translate-y-1/4 z-10">
             <div className="p-2 bg-white rounded-2xl shadow-2xl">
                <Image 
                  src="/images/ethereum_placeholder.png" // Placeholder image
                  alt="Ethereum" 
                  width={150} 
                  height={150}
                  className="rounded-xl"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 