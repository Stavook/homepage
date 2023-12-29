import React from "react";
import lotteryImg from "@/public/lottery.png";
import portfolioImg from "@/public/portfolio.png";

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
      "As part of a university project, I developed a Solidity smart contract and React frontend to simulate an NFT Lottery on the Ethereum network.",
    tags: ["React","Solidity"],
    imageUrl: lotteryImg,
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio website showcasing projects, skills, and experiences.",
    tags: ["React", "Next.js", "Tailwind CSS"],
    imageUrl: portfolioImg,
  },
  
  
] as const;

export const workData = [
  {
    title: "Computer Science Student",
    location: "University of Macedonia, Thessaloniki",
    date: "2019 - present",
  },
  {
    title: "Freelance Developer",
    location: "Remote",
    date: "November 2023 - present",
  },
] as const;
