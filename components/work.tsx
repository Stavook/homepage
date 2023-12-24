'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { workData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from '@/components/section-heading';

export default function Work() {
  const { ref } = useSectionInView('Work', 1);

  return (
    <motion.section
      ref={ref}
      id='work'
      className="mb-28 leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="mb-8">
        <SectionHeading>Work</SectionHeading>
        <div className="mb-4">
          {workData.map((item, index) => (
            <div className="flex items-center mb-2" key={index}>
              <span className="font-bold mr-2">{item.date}</span>
              <p>
                {item.title} - {item.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
