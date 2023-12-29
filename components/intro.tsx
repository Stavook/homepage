'use client'
import React from 'react';
import Image from 'next/image';
import img from 'public/prof.jpg';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion'

export default function Intro() {
  const { ref } = useSectionInView('Home');

  return (
    <motion.section  
      ref={ref}
      className="mb-28 leading-8 scroll-mt-28"
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y:0}}
      transition={{ delay: 0.175}}
      id="">
        <div className="md:flex items-center">
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-4xl font-semibold">Stavros Karadimitriou</h2>
            <p className="text-zinc-600">(Student, Explorer, and Lifelong Learner)</p>
          </div>
          <div className="flex flex-shrink-0 mt-4 md:mt-0 ml-6 sm:flex justify-center items-center"> {/* Center image horizontally on smaller screens and left-align on medium screens and larger */}
            <div className="border border-white border-opacity-80 w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={img}
                alt="Profile image"
                quality={90}
              />
            </div>
          </div>
        </div>
      
    </motion.section>
  );
}

    
    
  