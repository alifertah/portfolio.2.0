"use client";

import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [.25,.1,.25,1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const icons = ["github", "linkedin", "email"]
const text = "Ali Fertah aka scofio is online now ";

export default function HeroSection() {
  const words = text.toUpperCase().split(" ");  

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className="my-auto"
    >
      <h1 className="mb-6 text-5xl font-semibold md:text-6xl text-white flex items-center justify-center space-x-4">
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <motion.span className="inline-block" transition={transition} variants={variants}>
              {word}
            </motion.span>
            {index < words.length - 1 && ' '}
            {index === words.length - 1 && <div className="w-[20px] h-[20px] bg-green-600 rounded-full animate-ping"></div> }
          </React.Fragment>
        ))}
      </h1>
      <motion.p className="text-zinc-400 text-center text-lg mb-8 w-[70%] mx-auto" transition={transition} variants={variants}>
      I&apos;m a Full Stack Developer passionate about creating seamless user experiences, building scalable back-end systems, and delivering impactful solutions. I thrive on solving challenges and turning ideas into reality.
      </motion.p>
      <div className="flex gap-4 flex ">
        <motion.div className="mx-auto" transition={transition} variants={variants}>
          <a className="inline-flex justify-center whitespace-nowrap rounded-lg bg-white px-3.5 py-2.5 text-sm font-medium text-zinc-800 hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring focus-visible:ring-zinc-700 transition-colors" href="#0">
            Contact me
          </a>
        </motion.div>
        <motion.div className="mx-auto" transition={transition} variants={variants}>
          {icons.map((icon, key) => (
            <a key={key} className="inline-flex justify-center whitespace-nowrap rounded-lg bg-transparent px-3.5 py-2.5 text-sm font-medium hover:scale-110 focus-visible:outline-none focus-visible:ring focus-visible:ring-zinc-700 transition-colors" href="#">
              <img  className="w-8 h-8 text-white" src={`./img/${icon}.svg`} alt="" />
            </a>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}