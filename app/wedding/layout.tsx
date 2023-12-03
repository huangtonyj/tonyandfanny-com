"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function WeddingLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

const NavBar = () => (
  <Navbar
    className="fixed flex justify-center"
    style={{
      backgroundColor: "transparent",
      backdropFilter: "blur(0px)",
    }}
  >
    <NavbarContent className="sm:flex gap-4" justify="center">
      <NavBarLi sectionName="Home" href="#home" />
      <NavBarLi sectionName="Venue" href="#venue" />
      <NavBarLi sectionName="Our Story" href="#our-story" />
      <NavBarLi sectionName="RSVP" href="#rsvp" />
    </NavbarContent>
  </Navbar>
);

const NavBarLi = ({ sectionName, href }) => (
  <NavbarItem>
    <Link size="lg" className="text-white text-xl font-light" href={href}>
      {sectionName}
    </Link>
  </NavbarItem>
);
