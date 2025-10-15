'use client';

const projects = [
  {
    title: 'Modular Portfolio Builder',
    description: 'A responsive portfolio built with Next.js and Tailwind CSS, featuring reusable components and theme toggling.',
    image: '/assets/portfolio.png', // Add your image to public/assets
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    link: 'https://github.com/najmieh/portfolio-builder',
  },
  {
    title: 'Scientific Editor Toolkit',
    description: 'A web-based toolkit for revising academic writing with template-driven scaffolds and empirical validation.',
    image: '/assets/editor.png',
    tech: ['React', 'Express', 'MongoDB'],
    link: 'https://najmieh.dev/editor-toolkit',
  },
];

export default function Projects() {
  return (
    <section className="bg-[#0f0f0f] text-white px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="text-xs bg-indigo-600 text-white px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}