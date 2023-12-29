'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { GiFrogPrince } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import ThemeSwitch from '@/components/theme-switch';
import { links } from '@/lib/data';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActive, setTimeOfLastClick } = useActiveSectionContext();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header className="z-[999] fixed top-0 left-0 w-full">
      <div className="absolute top-0 left-0 w-full h-16 bg-zinc-50 bg-opacity-40 dark:bg-zinc-800 dark:bg-opacity-40 backdrop-blur-md"></div>

      <nav className="absolute top-0 w-full left-1/2 py-2 px-2 transform -translate-x-1/2 md:w-auto flex items-center justify-between">
        <motion.div className="flex items-center mr-32">
          <motion.div
            whileHover={{ rotate: [0, -5, 0, 5, 0], transition: { duration: 0.5 } }}
          >
            <GiFrogPrince size={40} />  
          </motion.div>
        </motion.div>

        <ul
          className={clsx(
            'hidden md:flex w-full max-w-md md:max-w-full flex-wrap items-center gap-2 text-md font-medium sm:flex-nowrap',
            { hidden: navbarOpen } // hide on small screens when navbarOpen is true
          )}
        >
          {links.map((link) => (
            <li key={link.hash} className="h-3/4 flex items-center justify-center relative">
              <Link
                className={clsx('flex w-full items-center justify-center px-2 py-2 hover:text-gray-500 transition', {
                  'font-bold': link.name === activeSection,
                })}
                href={link.hash}
                onClick={() => {
                  setActive(link.name);
                  setTimeOfLastClick(Date.now());
                  setNavbarOpen(false); // Close mobile menu after clicking a link
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-violet-500 h-1 w-full absolute bottom-0 left-0 dark:bg-orange-400"
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center ml-32 relative"> 
          <div className="md:hidden mr-4">
            <button
              className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={toggleNavbar}
            >
              {navbarOpen ? (
                <IoIosClose size={30} />
              ) : (
                <RxHamburgerMenu size={30} />
              )}
            </button>
            {/* Dropdown menu for smaller screens */}
            {navbarOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-zinc-50 dark:bg-zinc-800 p-4 rounded-md shadow-md mt-2  bg-opacity-40 dark:bg-zinc-800 dark:bg-opacity-40 backdrop-blur-md">
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.hash} className="py-2">
                      <Link
                        className="transition"
                        href={link.hash}
                        onClick={() => {
                          setActive(link.name);
                          setTimeOfLastClick(Date.now());
                          setNavbarOpen(false);
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </header>
  );
}

