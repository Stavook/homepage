'use client'
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <section className="mb-32 leading-8 scroll-mt-28" ref={ref} id='contact'>
      <SectionHeading>Contact</SectionHeading>
      <p className="mt-4">
        I&apos;d love to connect and discuss exciting opportunities. Feel free to reach out to me on LinkedIn or explore my projects on GitHub.
      </p>
      <div className="flex items-center justify-center space-x-8 mt-6">
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/stavros-karadimitriou-95a63b1b8/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin size={24} />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Stavook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare size={24} />
        </a>
      </div>
    </section>
  );
};
