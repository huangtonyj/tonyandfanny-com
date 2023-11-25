"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/Image";
import homePicture from "public/images/_A7R8923.jpeg";

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
    { icon: "💰", label: "Registry", sectionId: "registry" },
    { icon: "📝", label: "RSVP", sectionId: "rsvp" },
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
                  .scrollIntoView({ behavior: "smooth" });
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
      className="flex justify-center"
      style={{
        backgroundImage: "url(" + homePicture.src + ")",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex flex-col justify-center w-1/2 h-screen">
        <h1 className="text-6xl font-bold text-center text-slate-900">
          Tony & Fanny
        </h1>
        <p className="text-2xl font-bold text-center text-slate-900">
          Love is in the Air...
        </p>
        <p className="text-2xl font-bold text-center text-slate-900">
          Saturday, August 10, 2024
        </p>
      </div>
    </section>
  );
}

function OurStory() {
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
