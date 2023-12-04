// import { useState, Suspense } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// // import { norCal } from "app/lib/pointsOfInterests";

// const norCal = {
//   area: "Northern California",
//   pointsOfInterest: [
//     {
//       locationName: "Redwood National Park + Avenue of Giants",
//       description: "",
//       googleMapsLink:
//         "https://www.google.com/maps/place/Redwood+National+and+State+Parks/@41.4017156,-124.041711,10z/data=!4m2!3m1!1s0x0:0x36cf3266953b5f8e?sa=X&ved=2ahUKEwjZ-9jczeKCAxUPlGoFHYnZAOUQ_BJ6BAhBEAA",
//       pictures: [
//         {
//           src: "/public/images/travel/california/northern/redwood/_A7R1776.jpeg",
//           alt: "redwoods forest",
//         },
//       ],
//     },
//   ],
// };

// type TravelDestination = {
//   area: string;
//   pointsOfInterest: PointOfInterest[];
// };

// type PointOfInterest = {
//   locationName: string;
//   description: string;
//   googleMapsLink: string;
//   pictures: Picture[];
// };

// type Picture = {
//   src: string;
//   alt: string;
// };

// export default function CaliforniaPage() {
//   /*
//     carosel of rotoating film of section pictures
//   */
//   console.log(norCal.pointsOfInterest[0].pictures);

//   return (
//     <div>
//       {/* <Image
//         src={"/images/travel/california/northern/redwood/_A7R1776.jpeg"}
//         fill
//         alt={"redwoods forest"}
//       /> */}
//       <Section pointOfInterest={norCal.pointsOfInterest[0]} />
//       {norCal.pointsOfInterest[0].pictures.map((picture) => {
//         return <PictureFrame key={picture.src} picture={picture} />;
//       })}
//     </div>
//   );
// }

// function Section(pointOfInterest: PointOfInterest) {
//   console.log(pointOfInterest.pictures);
//   return (
//     <div>
//       <h2>{pointOfInterest.locationName}</h2>
//       <p>{pointOfInterest.description}</p>
//       <a href={pointOfInterest.googleMapsLink}>Google Maps Link</a>

//       {pointOfInterest.pictures.map((picture) => (
//         <PictureFrame key={picture.src} picture={picture} />
//       ))}
//     </div>
//   );
// }

// function PictureFrame(picture: Picture) {
//   return <Image src={picture.src} alt={picture.alt} fill />;
// }
