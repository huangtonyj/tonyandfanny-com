"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/Image";

export default function App() {
  const tabs = [
    { icon: "🏠", label: "Home", tab: <Home /> },
    { icon: "📸", label: "Our Story" },
    { icon: "🗺️", label: "Venue" },
    { icon: "💰", label: "Registry" },
    { icon: "📝", label: "RSVP" },
    { icon: "✈️", label: "Travel" },
  ];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div class="h-full">
      <nav class="flex justify-center items-center mx-8 my-4">
        <ul class="flex flex-row flex-grow">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <main class="h-full">
        <AnimatePresence mode="wait">
          <motion.div
            class="h-full w-full flex justify-center items-center scale-900"
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab.tab || selectedTab.icon}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function Home() {
  return (
    <Suspense>
      <div class="h-full w-full flex justify-center items-center">
        <Image
          id="home"
          src="/images/_A7R8923.jpeg"
          alt="homepage image"
          priority={true}
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
    </Suspense>
  );
}
