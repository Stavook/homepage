import React from "react";
import lotteryImg from "@/public/lottery2.png";


export const links = [
  {
    name: "Home",
    hash: "#"
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Work",
    hash: "#work",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact"
  }
  
] as const;

export const projectsData = [
  {
    title: "NFT Lottery",
    description:
      ".",
    tags: ["React","Solidity"],
    imageUrl: lotteryImg,
  },
  {
    title: "Portfolio Website",
    description:
      "Explore my personal portfolio website showcasing a collection of projects, skills, and experiences. Navigate through the various sections to learn more about my work in web development, technology, and beyond.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    imageUrl: lotteryImg,
  },
  {
    title: "NFT Lottery",
    description:
      ".",
    tags: ["React","Solidity"],
    imageUrl: lotteryImg,
  },
  
] as const;

export const workData = [
  {
    title: "Studying Computer Science at University of Macedonia ",
    location: "Thessaloniki",
    date: "2019 - present",
  },
  {
    title: "Freelance Developer",
    location: "Remote",
    date: "November 2023 - present",
  },
] as const;
