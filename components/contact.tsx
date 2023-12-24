'use client'
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';

export default function Contact () {
  const { ref } = useSectionInView('Contact', 0.5);

  return (
    <section ref={ref} id='contact'>
      <SectionHeading>Contact</SectionHeading>
      <div className="flex items-center justify-center space-x-4 mt-8">
        {/* LinkedIn */}
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>

        {/* GitHub */}
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
      </div>
  </section>
  );
};


