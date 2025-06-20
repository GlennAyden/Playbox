import React from 'react';
import Image from 'next/image';

const toolCategories = [
  {
    name: 'Productivity',
    tag: 'productivity',
    tools: ['Notion', 'Slack', 'Trello', 'Google', 'Obsidian', 'Jira', 'Todoist', 'Miro'],
  },
  {
    name: 'Streaming Service',
    tag: 'streaming-service',
    tools: ['AppleTV', 'Disney+', 'Spotify', 'Netflix', 'YouTube', 'Soundcloud', 'Tidal', 'Vidio'],
  },
  {
    name: 'Design',
    tag: 'design',
    tools: ['Figma', 'Canva', 'AdobeXD', 'Sketch', 'Invision', 'Framer', 'Spline', 'Procreate'],
  },
  {
    name: 'And lot more',
    tag: 'and-lot-more',
    tools: ['Duolingo', 'Grammarly', 'TradingView', 'Medium', 'DeepL', 'Skillshare', 'Headspace', 'Masterclass'],
  },
];

const ToolCard = ({ category }: { category: (typeof toolCategories)[0] }) => (
  <div className="bg-gray-900 text-white p-6 rounded-2xl flex flex-col">
    <h3 className="font-semibold text-lg mb-4 text-left">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
        {category.name}
      </span>
    </h3>
    <div className="grid grid-cols-4 gap-4 flex-grow content-start">
      {category.tools.map((tool) => (
        <div key={tool} className="bg-gray-800 aspect-square rounded-lg flex items-center justify-center" title={tool}>
          {/* Placeholder for actual icon */}
          <span className="text-xs font-bold text-gray-400">{tool.slice(0, 2).toUpperCase()}</span>
        </div>
      ))}
    </div>
  </div>
);

const ToolsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">
          All in one Tools within 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600"> one platform</span>
        </h2>
        <p className="text-gray-600 mb-12">Try now, u will know why we are best option for you</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {toolCategories.map((category) => (
            <ToolCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection; 