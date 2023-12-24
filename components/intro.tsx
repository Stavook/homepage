'use client'
import React from 'react';
import Image from 'next/image';
import img from 'public/kermit_profile.jpeg';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const {ref} = useSectionInView('Stavros Karadimitriou');

  return (
    <section ref={ref} className="flex items-center">
      <div className="container">
        <div className="bg-[rgba(255,255,255,0.5)] p-3 text-center rounded-lg backdrop-blur-md mb-6">
          Hello, I am a developer based in Greece!
        </div>

        <div className="md:flex">
          <div className="flex-grow">
            <h2 className="text-4xl font-semibold">Stavros Karadimitriou</h2>
            <p className="text-gray-600">Digital Craftsman (Artist / Developer / Designer)</p>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-6 text-center">
            <div className="border border-white border-opacity-80 w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={img}
                alt="Profile image"      
                quality={90}   
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
