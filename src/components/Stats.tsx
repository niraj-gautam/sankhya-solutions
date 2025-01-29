import React from 'react';
import { content } from '../data/content';

export function Stats() {
  return (
    <section className="bg-[#303392]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {content.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
