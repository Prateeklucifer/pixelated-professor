import Image from "next/image";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Features from "./components/Features";
import MentorsCmp from "./components/Mentors";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="md:px-4 my-14">
        <div className="container m-auto px-4 md:px-0">
          <div className="text-2xl text-center mb-8 font-bold text-[#00FFFF]">Features</div>
          <Features />
        </div>
      </div>
      <div className="md:px-4 mt-8 my-14">
        <div className="container m-auto px-4 md:px-0">
          <div className="text-2xl text-center mb-8 font-bold text-[#00FFFF]">Our Mentors</div>
          <MentorsCmp />
        </div>
      </div>
      <div className="md:px-4 mt-8">
        <div className="container m-auto px-4 md:px-0">
          <div className="text-2xl text-center font-bold text-[#00FFFF]">Contact us</div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
