"use client";

import { ReactNode } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function WeddingLayout({ children }: { children: ReactNode }) {
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
      <NavBarLi sectionName="Schedule" href="#schedule" />
      {/* <NavBarLi sectionName="Our Story" href="#our-story" /> */}
      <NavBarLi sectionName="RSVP" href="#rsvp" />
    </NavbarContent>
  </Navbar>
);

const NavBarLi = ({
  sectionName,
  href,
}: {
  sectionName: string;
  href: string;
}) => (
  <NavbarItem>
    <Link size="lg" className="text-white text-xl font-light" href={href}>
      {sectionName}
    </Link>
  </NavbarItem>
);
