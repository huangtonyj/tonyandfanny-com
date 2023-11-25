"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/Image";
import homePicture from "public/images/_A7R8923.jpeg";

export default function App() {
  return (
    <div class="">
      <div class="max-h-screen overflow-scroll">
        <NavBar />
        <Home />
        <OurStory />
        <Venue />
        <Registry />
        <RSVP />
        <TravelIdeas />
      </div>
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
      <nav id="navbar" className="sticky top-0 p-10">
        <ul class="flex">
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
  return (
    <div class="flex flex-col justify-center items-center ">
      <section id="home">
        <Image src={homePicture} alt="homepage image" class="max-h-screen" />
      </section>
    </div>
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
