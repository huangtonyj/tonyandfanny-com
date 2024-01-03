import { ReactNode } from "react";

export default function Schedule(): ReactNode {
  return (
    <section
      id="schedule"
      className="py-12 md:py-18 px-12
                w-screen min-h-96
                flex gap-12 flex-col md:flex-row justify-evenly items-center
                bg-gray-200"
    >
      <div>
        <h1 className="text-8xl text-center font-extralight text-black">
          Schedule
        </h1>
      </div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <p className="text-xl text-center font-light text-black">05:00 PM</p>
          <p className="text-xl text-center font-light text-black">Ceremony</p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-12">
          <p className="text-xl text-center font-light text-black">05:30 PM</p>
          <p className="text-xl text-center font-light text-black">Cocktail</p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-12">
          <p className="text-xl text-center font-light text-black">06:30 PM</p>
          <p className="text-xl text-center font-light text-black">Reception</p>
        </div>
      </div>
    </section>
  );
}
