"use client";

import { Suspense, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function Venue(): ReactNode {
  // TODO join wine club referral link

  return (
    <section
      id="venue"
      className="py-12 md:py-18 px-12
                w-screen 
                flex gap-12 lg:gap-24 flex-col lg:flex-row justify-center items-center"
    >
      <VenueInfo />
      <VenueMap />
    </section>
  );
}

function VenueInfo(): ReactNode {
  return (
    <div className="flex flex-col justify-around">
      <div>
        <h1 className="text-8xl text-center font-extralight text-black">
          Venue
        </h1>
      </div>
      <div>
        <p className="text-2xl text-center font-light text-black">
          Trentadue Winery
        </p>
        <p className="text-xl text-center font-light text-black">
          19170 Geyserville Ave
        </p>
        <p className="text-xl text-center font-light text-black">
          Geyserville, CA 95441
        </p>
      </div>
    </div>
  );
}

function VenueMap(): ReactNode {
  const position = { lat: 38.67950828378351, lng: -122.87212411036099 };
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string;

  return (
    <div
      className="flex justify-center"
      style={{
        minWidth: "750px",
      }}
    >
      <APIProvider apiKey={googleMapsApiKey}>
        <Map
          center={position}
          zoom={10}
          className="w-96 h-96 md:w-full md:max-w-3xl"
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
}
