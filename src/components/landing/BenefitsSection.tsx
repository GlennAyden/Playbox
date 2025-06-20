"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const benefits = [
  {
    title: '24/7 customer support',
    content: 'We know that questions and concerns can come up at any moment, and we\'re here for you whenever you need us. Our dedicated support team is available 24/7, ensuring that we\'re always ready to help with any inquiries or technical issues, so you never have to wait for the assistance you deserve.',
  },
  {
    title: 'Affordable pricing plans',
    content: 'Premium experiences don\'t have to come with a high price tag. With Playbox, you can enjoy premium accounts from top platforms without breaking the bank. Unlock exclusive access at an affordable cost.',
  },
  {
    title: 'One-Click Access',
    content: 'With the Playbox Extension, you can effortlessly unlock a variety of premium accounts with just one click. Streamline your online activities and gain instant access to exclusive content.',
  },
];

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12">
          what will 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"> u get</span>
        </h2>
        <div className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col justify-start gap-4 border-r-2 border-gray-700 pr-8">
            {benefits.map((benefit, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left font-semibold transition-all duration-300 p-3 rounded-lg w-full ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {benefit.title}
              </button>
            ))}
          </div>
          <div className="md:col-span-2 min-h-[150px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-300">
                  {benefits[activeTab].content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 