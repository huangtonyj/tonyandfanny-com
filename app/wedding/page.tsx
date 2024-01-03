"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import FloatingHearts from "app/lib/FloatingHearts";
import Home from "app/lib/Home";
import Venue from "app/lib/Venue";
import Schedule from "app/lib/Schedule";
import Rsvp from "app/lib/Rsvp";

import homePicture from "public/images/_DSC9584.jpeg";
import saveTheDate1 from "public/images/save_the_date1.jpeg";
import saveTheDate2 from "public/images/save_the_date2.jpeg";

export default function App() {
  return (
    <div className="scroll-smooth">
      {/* <FloatingHearts /> TODO */}
      <Home />
      <Venue />
      {/* <OurStory /> */}
      <Schedule />
      {/* <Rsvp /> */}
      {/* <TravelIdeas /> */}
      {/* <Footer /> */}
    </div>
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
