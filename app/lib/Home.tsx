"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import homePicture from "public/images/_DSC9584.jpeg";

export default function Home() {
  // TODO (animated hearts following cursor for a few seconds)
  return (
    <section id="home" className="flex justify-center max-h-screen">
      <div className="opacity-75">
        <Image
          src={homePicture}
          alt="Tony and Fanny landing photo"
          priority
          fill
          style={{
            objectFit: "cover",
            filter: "brightness(0.75)",
          }}
        />
      </div>
      <div className="z-10 h-screen flex flex-col justify-around my-16">
        <div>
          <p className="text-3xl text-center font-extralight text-white">
            {"We're getting married!"}
          </p>
        </div>
        <div>
          <h1 className="text-8xl text-center font-extralight text-white">
            Tony & Fanny
          </h1>
        </div>
        <div>
          <p className="text-2xl text-center font-light text-white">08.10.24</p>
          <p className="text-2xl text-center font-light text-white">
            Sonoma County, California
          </p>
        </div>
      </div>
    </section>
  );
}
