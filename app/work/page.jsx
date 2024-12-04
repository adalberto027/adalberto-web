"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "Microsoft Internship",
    description: `
    . Developed comprehensive functional and design specifications for a feature on the privacy dashboard, collaborating with fellow interns and ensuring clarity and alignment with project requirements.
    . Led the creation of a detailed design document, implemented key features, and verified feature deployment to 100% GA through BI metrics.
    . Implemented key features for the privacy dashboard, continuously improving code quality and functionality based on feedback from mentors.
    `,
    stack: ["-BI metrics", "-Design", "-Privacy Dashboard"],
    image: "/assets/work/microsoft.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    title: "Google Tech Exchange Program",
    description: `
    . Selected as one of the 180 students across 16 U.S. universities to participate in Google’s “Tech Exchange.”
    . Attend weekly classes, including Software Development Studio, Applied Data Structures, and Intro to Product Management.
    . Completed projects across Tech disciplines including data structures and algorithms under Google's guidance.
    `,
    stack: ["-Software Development", "-Data Structures", "-Management"],
    image: "/assets/work/google.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    title: "NASA JPL Internship",
    description: `
    . Developed a Python tool utilizing the Seaborn library to visualize performance changes in the AMMOS Mission Data Processing System.
    . Managed 1M+ results and participated in a NASA panel.
    . Reduced data retrieval time and enhanced historical analysis processes.
    `,
    stack: ["-Python", "-Data Visualization", "-Seaborn"],
    image: "/assets/work/nasa.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] items-center">
          {/* Text Section */}
          <div className="w-full xl:w-[50%] flex flex-col justify-center gap-[30px] order-2 xl:order-none">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
              {project.title}
            </h2>
            <p className="text-white/60 whitespace-pre-line">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => (
                <li key={index} className="text-xl text-accent">
                  {item}
                  {index !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
              {project.live && (
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
              {project.github && (
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              )}
            </div>
          </div>
          {/* Image Section */}
          <div className="w-full xl:w-[50%] flex items-center justify-center">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="h-[420px] w-full mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[420px] relative flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      fill
                      className="object-cover"
                      alt={project.title}
                    />
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
