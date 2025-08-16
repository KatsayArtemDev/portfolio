import Typewriter from "typewriter-effect";
import { ChevronsDown } from "lucide-react";
import Grid from "./grid";

export default function Main() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <Grid />

      <div className="relative z-10 space-y-6 md:space-y-8 text-center">
        <div className="text-2xl md:text-5xl font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi! I'm Katsay Artem").start();
            }}
          />
        </div>
        <p className="md:text-2xl text-gray-400">
          Fullstack Developer / Data Science
        </p>
        <p className="text-md md:text-lg text-gray-300">
          A software engineer with almost 3 years of experience
          <br />
          in building large-scale web applications
          <br />
          and innovative software solutions.
          <br />
          Avidly studying Data Science.
        </p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronsDown className="h-8 w-8 text-gray-500" />
      </div>
    </section>
  );
}
