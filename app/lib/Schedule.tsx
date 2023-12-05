import { ReactNode } from "react";

export default function Schedule(): ReactNode {
  return (
    <section
      id="schedule"
      className="py-12 md:py-18 px-12
                w-screen h-96
                flex gap-12 lg:gap-24 flex-col md:flex-row justify-evenly items-center
                bg-gray-200"
    >
      <div>
        <h1 className="text-8xl text-center font-extralight text-black">
          Schedule
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div>
          <p className="text-2xl text-center font-light text-black">05:00 PM</p>
          <p className="text-xl text-center font-light text-black">Ceremony</p>
        </div>

        <div>
          <p className="text-2xl text-center font-light text-black">06:30 PM</p>
          <p className="text-xl text-center font-light text-black">Reception</p>
        </div>
      </div>
    </section>
  );
}
