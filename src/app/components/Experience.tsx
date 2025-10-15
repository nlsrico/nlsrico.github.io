'use client';

import { useState } from 'react';

const companies = [
  { name: 'Company A', role: 'Software Developer (Remote)', location: 'USA', dates: 'Nov 2018 - Mar 2020', bullets: [
    'Built scalable backend APIs using Node.js and MongoDB.',
    'Led debugging workflows across full-stack pipelines.',
    'Documented reproducible deployment steps for remote teams.',
  ]},
  { name: 'Company B', role: 'ML Research Intern', location: 'Germany', dates: 'Apr 2020 - Aug 2021', bullets: [
    'Benchmarked generative models using empirical metrics.',
    'Refactored Python workflows for reproducibility.',
    'Published internal documentation for academic teams.',
  ]},
  // Add more companies as needed
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = companies[activeIndex];

  return (
    <section className="bg-[#0f0f0f] text-white px-6 md:px-16 py-20">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-8">Experience</h2>

    {/* Tabs */}
    <div className="flex flex-wrap gap-4 mb-8">
      {companies.map((company, index) => (
        <button
          key={company.name}
          onClick={() => setActiveIndex(index)}
          className={`px-4 py-2 rounded-md border ${
            index === activeIndex ? 'bg-white text-black' : 'border-gray-600 text-gray-400'
          }`}
        >
          {company.name}
        </button>
      ))}
    </div>

    {/* Active Content */}
    <div>
      <h3 className="text-xl font-semibold mb-1">{active.role}</h3>
      <p className="text-sm text-gray-400 mb-4">{active.location} • {active.dates}</p>
      <ul className="list-disc list-inside space-y-2 text-gray-300">
        {active.bullets.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
</section>
  );
}