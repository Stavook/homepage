'use client'
import React from 'react';
import { workData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from '@/components/section-heading';

export default function Work() {
  const { ref } = useSectionInView('Work');

  return (
    <section
      ref={ref}
      className="mb-16 leading-8 scroll-mt-28"
      id="work"
    >
      <div className="mb-8">
        <SectionHeading>Work</SectionHeading>
        <div className="space-y-4">
          {workData.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <p className="font-semibold">{item.title}</p>
              <span className="text-gray-500">{item.location}</span>
              <span className="text-gray-500">{item.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
