"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import homePicture from "public/images/_DSC9584.jpeg";

export default function Home() {
  return (
    <section id="home" className="flex justify-center max-h-screen">
      <div className="opacity-75">
        <Image
          src={homePicture}
          alt="Tony and Fanny landing photo"
          priority
          placeholder="blur"
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
          <h1 className="text-6xl md:text-8xl text-center font-extralight text-white">
            Tony & Fanny
          </h1>
        </div>
        <div className="flex flex-col justify-center">
          <a
            className="text-2xl text-center font-light text-white underline"
            href="/tony_fanny_wedding_date.ics"
          >
            08.10.24
          </a>
          <p className="text-2xl text-center font-light text-white">
            Sonoma County, California
          </p>
        </div>
      </div>
    </section>
  );
}
