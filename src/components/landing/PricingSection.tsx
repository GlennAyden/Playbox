import React from 'react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Soldier',
    price: 'Rp 39.999',
    userPrice: 'Rp 30.000/user',
    features: ['4-5 user', 'update new tools', 'fast response admin', 'more affordable price'],
    highlight: false,
  },
  {
    name: 'Prince',
    price: 'Rp 48.999',
    userPrice: 'Rp 40.000/user',
    features: ['1 user', 'update new tools', 'fast response admin', 'more advance tools'],
    highlight: true,
  },
  {
    name: 'Emperor',
    price: 'Rp 98.999',
    userPrice: 'Rp 80.000/user',
    features: ['1 user', 'update new tools', 'fast response admin', 'more advance tools'],
    highlight: false,
  },
];

const PricingCard = ({ plan }: { plan: (typeof pricingPlans)[0] }) => (
  <div
    className={`p-8 rounded-2xl flex flex-col bg-gray-900 text-white transition-transform duration-300 ${
      plan.highlight ? 'transform scale-105 shadow-2xl shadow-purple-200' : 'hover:scale-105'
    }`}
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-2xl font-bold">{plan.name}</h3>
      {plan.highlight && (
        <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          Prince
        </span>
      )}
    </div>

    <p className="text-sm text-gray-400">{plan.userPrice}</p>
    <p className="text-4xl font-bold my-4">
      {plan.price}
    </p>
    <ul className="space-y-3 mb-8 flex-grow">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <Check className="w-5 h-5 text-pink-500" />
          <span className="text-gray-300 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-3 rounded-lg font-bold transition-all ${
        plan.highlight 
        ? 'text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90'
        : 'text-pink-500 bg-transparent border border-pink-500 hover:bg-pink-900/20'
      }`}
    >
      I choose this
    </button>
  </div>
);

const PricingSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Find Your 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"> Perfect Plan</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 