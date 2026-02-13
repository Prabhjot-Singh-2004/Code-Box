import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/hero9.gif"
        alt="Hero Image"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute inset-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 -mt-36">
        <h2 className="font-bold text-6xl md:text-8xl font-game text-center">
          Start Your
        </h2>
        <h2
          className="font-bold text-6xl md:text-8xl font-game text-yellow-400 text-center"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          }}
        >
          Coding Adventure
        </h2>

        <h2 className="mt-5 font-game text-xl md:text-3xl text-center">
          Beginner friendly coding courses and projects
        </h2>
        <Link href="/sign-in">
          <Button
            className="font-game text-2xl md:text-3xl p-6 mt-7"
            variant="pixel"
          >
            GET STARTED!
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
