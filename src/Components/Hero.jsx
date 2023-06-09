import React from "react";
import logo from "../assets/logo.jpg";

const Hero = () => {
  return (
    <div className="font-primary hero py-[100px] min-h-screen flex justify-center items-center">
      <div className="container gap-6 flex justify-center items-center text-center flex-col">
        <h1 className="text-6xl hero-head tracking-wide uppercase md:text-9xl font-bold">
          bidkoyn
        </h1>
        <p className="text-3xl hero-para">Bidkoyn - Low effort coin</p>
        <p className="text-3xl hero-para">
          0xdf05b300b9d60f23b773cf5e214ca309cd112931
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3 ">
          <a
            href="https://t.me/bidkoyn"
            target="_blank"
            className="px-8 btn1 bg-black text-primary py-4 uppercase text-2xl"
          >
            telegram
          </a>
          <a
            href="https://twitter.com/bidkoyn"
            target="_blank"
            className="px-8 btn bg-primary text-black py-4 uppercase text-2xl"
          >
            twitter
          </a>
          <a
            href=""
            className="px-8 btn bg-transparent border border-primary rounded-md py-4 uppercase text-2xl"
          >
            chart
          </a>
          <a
            href=""
            className="px-8 btn bg-black text-primary py-4 uppercase text-2xl"
          >
            buy now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
