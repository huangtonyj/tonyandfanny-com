"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import saveTheDatePhoto from "public/images/save_the_date0.jpeg";

export default function SaveTheDatePage() {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "ease-out", duration: 0.25 }}
    >
      <Image
        src={saveTheDatePhoto}
        alt="save the date postcard"
        priority
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <Header />
      <Footer />
      <ExploreTravelIdeaBox />
    </motion.div>
  );
}

function Header() {
  return (
    <header className="flex flex-col justify-center items-center gap-4 z-10 text-slate-200  absolute top-24">
      <h1 className="text-5xl font-extralight">Save the Date</h1>
      <h2 className="text-2xl font-extralight">Tony + Fanny</h2>
    </header>
  );
}

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center z-10 text-slate-200  absolute bottom-24">
      <h3 className="text-xl font-extralight">08.10.24</h3>
      <a href="webcal://save_the_date.ics" target="_blank">
        Add to Calendar
      </a>

      <h3 className="text-xl font-extralight">Sonoma County, CA</h3>
    </footer>
  );
}

function ExploreTravelIdeaBox() {
  return (
    <motion.div
      className="absolute bottom-12"
      initial={{ scale: 0 }}
      animate={{ scale: 1, y: 10 }}
      transition={{ type: "ease-out", duration: 0.25, delay: 0.5 }}
    >
      <motion.button
        className="text-center px-5 py-3 text-slate-800 bg-slate-200 rounded opacity-80"
        animate={{
          rotate: [0, 2, -4, 2, 0],
        }}
        transition={{
          type: "ease-in-out",
          duration: 1,
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
      >
        <Link href="/travel/california">Explore Travel Ideas</Link>
      </motion.button>
    </motion.div>
  );
}
