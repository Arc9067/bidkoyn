import React, { useEffect } from "react";
import Hero from "./Components/Hero";
import { gsap } from "gsap";
import SplitType from "split-type";

const App = () => {
  useEffect(() => {
    const header_hero = new SplitType(".hero-head", { types: "chars" });
    const para = new SplitType(".hero-para", { types: "chars" });
    const line = gsap
      .timeline()
      .fromTo(
        ".hero",
        {
          opacity: 0,
          ease: "back",
        },
        { opacity: 1, duration: 3 }
      )
      .from(header_hero.chars, { x: 20, y: 40, stagger: 0.2 })
      .from(para.chars, {
        opacity: 0,
        stagger: 0.2,
      })
   
  }, []);
  return (
    <div className="min-h-screen w-full text-primary">
      <Hero />
    </div>
  );
};

export default App;
