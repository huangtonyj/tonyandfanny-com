"use client";

import { ReactNode } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
// import { MailIcon } from "./MailIcon.jsx";
// import { LockIcon } from "./LockIcon.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import saveTheDate1 from "public/images/save_the_date1.jpeg";
import saveTheDate2 from "public/images/save_the_date2.jpeg";

export default function RsvpComingSoon(): ReactNode {
  return (
    <section
      id="rsvp"
      className="py-12 md:py-18 px-12
                w-screen h-72
                flex justify-center items-center
                "
    >
      <div
        className="w-1/2 min-h-96
                flex gap-12 flex-col md:flex-row justify-evenly items-center"
      >
        <div>
          <h1 className="text-4xl text-center font-extralight text-black">
            RSVP
          </h1>
          <p className="text-lg text-center font-light text-black">
            coming soon!
          </p>
        </div>
      </div>
    </section>
  );
}

function Rsvp(): ReactNode {
  /* 
    modal has form with name, email, and checkbox for +1, etc.
    beating heart animation while mutating form
    after form mutation, button changes to "RSVP'd!" confetti animation"
  */

  return (
    <section
      id="rsvp"
      className="py-12 md:py-18 px-12
                w-screen h-96
                flex gap-12 lg:gap-24 flex-col md:flex-row justify-evenly items-center
                "
    >
      <div>
        <h1 className="text-8xl text-center font-extralight text-black">
          We hope you can make it!
        </h1>
      </div>
      <RsvpButton />
    </section>
  );
}

function RsvpButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <Button onPress={onOpen} color="primary">
        RSVP
      </Button>
      <RsvpModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

function RsvpModal({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  // endContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  // endContent={
                  //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
