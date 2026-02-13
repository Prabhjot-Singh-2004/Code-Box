import Image from "next/image";
import Hero from "./_components/Hero";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      
      {/* hero Section */}
      <Hero />
    </div>
  );
}
