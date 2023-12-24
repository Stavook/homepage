'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from '@/components/section-heading'


export default function About() {
  const { ref } = useSectionInView('About', 1);

  return (
    <motion.section 
    ref={ref}
    className="mb-28 leading-8 scroll-mt-28"
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y:0}}
    transition={{ delay: 0.175}}
    id="about"
    
    >
        <SectionHeading> About me </SectionHeading>
        <p>
        Hey there! I'm Stavros, currently residing in Thessaloniki, Greece. My passion lies in the world of Computer Science, and I'm currently immersed in the exciting journey of studying at the University of Macedonia (UoM)
        </p>
       
  </motion.section>    

  )
}
