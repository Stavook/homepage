'use client'
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { GiFrogPrince } from "react-icons/gi";
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section-context';
import ThemeSwitch from '@/components/theme-switch';

export default function Header() {
  const { activeSection, setActive, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <header className="z-[999] fixed top-0 left-0 w-full">
      <div className="absolute top-0 left-0 w-full h-16 bg-[#ffffff40] dark:bg-[#20202380] backdrop-blur-md"></div>

      <nav className="absolute top-0 w-full left-1/2 py-4 sm:py-2 transform -translate-x-1/2 sm:w-auto flex items-center justify-between">        
          <motion.div className="flex items-center mr-32"
            whileHover={{ rotate: [0, -5, 0, 5, 0], transition: { duration: 0.5 } }}
          >
            <GiFrogPrince size={40}/>
          </motion.div>
        <ul className="flex w-full max-w-md md:max-w-full flex-wrap items-center gap-2 text-md font-medium sm:flex-nowrap">
          {links.map((link) => (
            <li className="h-3/4 flex items-center justify-center relative" key={link.hash}>
              <Link
                className={clsx("flex w-full items-center justify-center px-2 py-2 hover:text-gray-500 transition")}
                href={link.hash}
                onClick={() => {
                  setActive(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className='bg-violet-500 h-1 w-full absolute bottom-0 left-0 dark:bg-orange-400'
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center ml-32">
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
