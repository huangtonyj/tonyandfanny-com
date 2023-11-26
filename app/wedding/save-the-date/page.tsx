"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import saveTheDatePhoto from "public/images/save_the_date1.jpeg";

export default function SaveTheDatePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <motion.div
        className="max-h-72 max-w-lg m-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "ease-out", duration: 0.25 }}
      >
        <Image
          src={saveTheDatePhoto}
          alt="save the date postcard"
          priority
          objectFit="cover"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </motion.div>
      <ExploreTravelIdeaBox />
    </div>
  );
}

function ExploreTravelIdeaBox() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1, y: 310 }}
      transition={{ type: "ease-out", duration: 0.25, delay: 0.5 }}
    >
      <motion.button
        className="text-center px-5 py-3 text-slate-800 bg-slate-100 rounded opacity-70"
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
        onClick={() => {
          console.log("clicked explore travel ideas");
        }}
      >
        <p>Explore Travel Ideas</p>
      </motion.button>
    </motion.div>
  );
}
