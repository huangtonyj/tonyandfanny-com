"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Venue from "lib/Venue";

import homePicture from "public/images/_DSC9584.jpeg";
import saveTheDate1 from "public/images/save_the_date1.jpeg";
import saveTheDate2 from "public/images/save_the_date2.jpeg";

export default function App() {
  return (
    <div className="scroll-smooth">
      <Home />
      <Venue />
      {/* <OurStory /> */}
      {/* <Schedule /> */}
      {/* <RSVP /> */}
      {/* <TravelIdeas /> */}
      {/* <Footer /> */}
    </div>
  );
}

function Home() {
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

function OurStory() {
  // List of animated transitiong flying photos + captions
  return (
    <section id="our-story">
      <Image src={saveTheDate2} alt="homepage image" />
    </section>
  );
}

function RSVP() {
  // popup confetti animation following mouse movement after RSVP
  return (
    <section id="rsvp">
      <Image src={homePicture} alt="homepage image" />
    </section>
  );
}

function TravelIdeas() {
  return (
    <section id="travel-ideas">
      <Image src={homePicture} alt="homepage image" />
    </section>
  );
}

function Faq() {
  return (
    <section id="faq">
      <Image src={homePicture} alt="homepage image" />
      {/* 
        - Where do I park
        - What should I wear
        - What should I bring
        - What should I expect
        - What is the schedule
        - What is the timeline
        - What is the menu
        - Lodiging suggestions
        - Registry? Cash please.
       */}
    </section>
  );
}

const Footer = () => (
  <footer className="flex flex-col justify-center items-center z-10 text-slate-200">
    <a href="">FAQ</a>
    <a href="">Travel Ideas</a>
    <a href="webcal://save_the_date.ics" target="_blank">
      Add to Calendar
    </a>
  </footer>
);
