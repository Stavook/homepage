'use client'
import React from 'react';
import SectionHeading from './section-heading';
import Image from 'next/image';
import { useSectionInView } from '@/lib/hooks';
import { projectsData } from '@/lib/data';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section className="mb-28 leading-8 scroll-mt-28" ref={ref} id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

type ProjectProps = typeof projectsData[number];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return (
    <article className="mb-8">
      <div className="rounded-lg overflow-hidden border-2 border-zinc-500 mb-4">
        <Image className="w-full" src={imageUrl} alt={title} quality={90} height={300} width={400}/>
      </div>
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="flex flex-wrap mb-4">
        {tags.map((tag, index) => (
          <li key={index} className="mr-2 mb-2 bg-violet-500 dark:bg-orange-400 text-white px-2 py-1 rounded">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
