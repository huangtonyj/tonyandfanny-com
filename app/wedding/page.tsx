"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import homePicture from "public/images/_A7R8923.jpeg";
import saveTheDate1 from "public/images/save_the_date1.jpeg";
import saveTheDate2 from "public/images/save_the_date2.jpeg";

export default function App() {
  return (
    <div className="max-h-screen overflow-scroll">
      <NavBar />
      <Home />
      <OurStory />
      <Venue />
      <Registry />
      <RSVP />
      <TravelIdeas />
    </div>
  );
}

function NavBar() {
  const sections = [
    { icon: "🏠", label: "Home", sectionId: "home" },
    { icon: "📸", label: "Our Story", sectionId: "our-story" },
    { icon: "🗺️", label: "Venue", sectionId: "venue" },
    { icon: "💰", label: "Schedule", sectionId: "schedule" },
    { icon: "💰", label: "What To Expect", sectionId: "What to Expect" },
    { icon: "📝", label: "RSVP", sectionId: "rsvp" },
    { icon: "💰", label: "Registry", sectionId: "registry" },
    { icon: "✈️", label: "Travel Ideas", sectionId: "travel-ideas" },
  ];

  return (
    <>
      <nav id="navbar" className="sticky top-0 mt-5 bg-slate-200">
        <ul className="flex justify-center gap-4">
          {sections.map((item) => (
            <li
              key={item.label}
              onClick={() => {
                document
                  .querySelector(`#${item.sectionId}`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {`${item.icon} ${item.label}`}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function Home() {
  // TODO (animated hearts following cursor for a few seconds)
  return (
    <section
      id="home"
      // className="flex justify-center"
      // style={{
      //   backgroundImage: "url(" + saveTheDate1.src + ")",
      //   backgroundSize: "cover",
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      <div className="max-h-full max-w-full bg-slate-100 p-8">
        <Image src={saveTheDate1} alt="save the date postcard" />
      </div>
      {/* <div className="flex flex-col justify-center w-1/2 h-screen bg-slate-100 opacity-30">
        <p className="text-2xl text-center text-slate-800">
          💕 is in the air...
        </p>
        <h1 className="text-6xl text-center text-slate-800">Tony + Fanny</h1>
        <p className="text-2xl text-center text-slate-800">
          Saturday, August 10, 2024
        </p>
        <p className="text-2xl text-center text-slate-800">
          Sonoma County, California
        </p>
      </div> */}
    </section>
  );
}

function OurStory() {
  // List of animated transitiong flying photos + captions
  return (
    <section id="our-story">
      <Image src={homePicture} alt="homepage image" />
    </section>
  );
}

function Venue() {
  return (
    <section id="venue">
      <Image src={homePicture} alt="homepage image" />
    </section>
  );
}

function Registry() {
  return (
    <section id="registry">
      <Image src={homePicture} alt="homepage image" />
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
