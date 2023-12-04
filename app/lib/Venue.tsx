"use client";

import { Suspense, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function Venue(): ReactNode {
  // TODO join wine club referral link

  return (
    <section id="venue" className="max-h-screen flex">
      <div className="m-16">
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

function VenueMap(): ReactNode {
  const position = { lat: 38.67950828378351, lng: -122.87212411036099 };
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

  return (
    <>
      <APIProvider apiKey={googleMapsApiKey}>
        <Map center={position} zoom={10} className="w-64 h-64 m-16">
          <Marker position={position} />
        </Map>
      </APIProvider>
    </>
  );
}
