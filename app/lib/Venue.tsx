"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function Venue() {
  // TODO join wine club referral link

  return (
    <section id="venue" className="max-h-screen flex">
      <div className="w-64 h-64 m-64">
        <VenueMap />
      </div>
      <div className="flex flex-col justify-center">
        <div>
          <h1 className="text-8xl text-center font-extralight text-black">
            Venue
          </h1>
        </div>
        <div>
          <p className="text-3xl text-center font-light text-black">
            Trentadue Winery
          </p>
          <p className="text-2xl text-center font-light text-black">
            19170 Geyserville Ave
          </p>
          <p className="text-2xl text-center font-light text-black">
            Geyserville, CA 95441
          </p>
        </div>
      </div>
    </section>
  );
}

function VenueMap() {
  const position = { lat: 61.2176, lng: -149.8997 };
  const googleMapApiKey: string = process.env.GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={googleMapApiKey}>
      <Map center={position} zoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
}
