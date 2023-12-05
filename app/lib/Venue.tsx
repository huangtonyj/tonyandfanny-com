"use client";

import { Suspense, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const trentadueGoogleMapsLink =
  "https://www.google.com/maps/place/Trentadue+Winery/@38.6793659,-122.8754393,17z/data=!3m1!4b1!4m6!3m5!1s0x80841019afbc2e6f:0xd8bacf73bd42d1ff!8m2!3d38.6793659!4d-122.8728644!16s%2Fg%2F1td0gqwv?hl=en-US&entry=ttu";

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
    <div className="flex flex-col justify-around h-96">
      <div>
        <h1 className="text-8xl text-center font-extralight text-black">
          Venue
        </h1>
      </div>

      <div>
        <p className="text-2xl text-center font-light text-black">
          Trentadue Winery
        </p>
        <br />
        <a href={trentadueGoogleMapsLink} target="_blank">
          <p className="text-xl text-center font-light text-black underline">
            19170 Geyserville Ave
          </p>
          <p className="text-xl text-center font-light text-black underline">
            Geyserville, CA 95441
          </p>
        </a>
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
          zoom={7}
          className="w-96 h-96 md:w-full md:max-w-3xl"
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
}
