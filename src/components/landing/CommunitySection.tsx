import React from 'react';
import Image from 'next/image';

const CommunitySection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center max-w-5xl">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl font-bold">
            join our community, u will know 
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">why we are the best</span>
          </h2>
        </div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:opacity-80 transition-opacity bg-blue-600 p-4 rounded-xl">
            <Image src="/icons/social/discord.svg" alt="Discord" width={32} height={32} />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity bg-green-500 p-4 rounded-xl">
            <Image src="/icons/social/whatsapp.svg" alt="WhatsApp" width={32} height={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 