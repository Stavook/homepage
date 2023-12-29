'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from '@/components/section-heading'


export default function About() {
  const { ref } = useSectionInView('About',1);

  return (
    <motion.section 
    ref={ref}
    className="mb-28 leading-8 scroll-mt-28"
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y:0}}
    transition={{ delay: 0.175}}
    id="about"
    
    >
      <SectionHeading> About </SectionHeading>
        <div className="mb-4">
          <p>
            Hey there! I'm Stavros, a digital explorer hailing from the sunny city of Thessaloniki, Greece. My journey into the fascinating realm of Computer Science is like embarking on a thrilling adventure. Currently navigating the challenges and wonders at the University of Macedonia (UoM), I'm on a quest to unravel the mysteries of code and design. Whether I'm crafting elegant lines of code, conjuring up innovative designs, or immersing myself in the ever-evolving tech landscape, I thrive on pushing boundaries and transforming ideas into captivating digital experiences.
          </p>
        </div>
       
    </motion.section>    

  )
}
