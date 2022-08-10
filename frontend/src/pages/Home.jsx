import React from "react";
import { AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";

import PlacesCard from "./components/HomePlacesCard";
import TripsCard from "./components/HomeTripsCard";
import Info from "./components/HomeInfo";

import data from "../assets/data.json";

// import PlacesCard from "./components/PlacesCard";

const Home = () => {
  const scrollToNextSection = () => {
    const nextPage = document.getElementById("nextSection");
    nextPage.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className=" relative  ">
      {/* hero */}

      <div className="h-screen   relative  justify-center">
        <div>
          <div className="z-10 h-full w-full absolute bg-black opacity-70"></div>
          <img
            className="z-0 h-screen object-cover  w-full absolute"
            src={data.home.hero.img}
            alt={data.home.hero.alt}
          />
        </div>

        <div className="absolute z-30 md:block hidden">
          <div className=" w-screen relative h-screen ">
            <div className="mb-32 absolute bottom-0 left-0">
              <div className="y-line"></div>
              <a target="_blank" href="/">
                {" "}
                <AiFillYoutube className="y-icon" />
              </a>
              <a target="_blank" href="/">
                {" "}
                <AiFillFacebook className="y-icon" />
              </a>
              <div className="y-line"></div>
            </div>

            <div className="absolute bottom-0 right-0">
              <div className="y-line"></div>
              <div onClick={scrollToNextSection}>
                <BsMouse className="y-icon animate-bounce " />
              </div>

              <div className="y-line"></div>
            </div>
          </div>
        </div>

        <div className="absolute  z-20 w-full h-full grid content-center  justify-center">
          <div className="  text-center">
            <h1
              className="lg:text-6xl font-bold text-white 
          text-4xl
          "
            >
              Djursland <br />
              under <span className="text-primary">overfladen</span>
            </h1>
            <br />
            <p
              className="mx-auto bg-primary
          w-full px-4 text-sm
          lg:w-1/2 lg:px-0 lg:text-base"
            >
              {data.home.hero.text}
            </p>
          </div>
        </div>
      </div>

      <Info />
      <TripsCard />
      <PlacesCard />
      {/* cards */}
      {/* <div className="snap-mandatory snap-x bg-primary   gap-2 flex h-max
      overflow-x-auto 
       mx-auto justify-center  
      
      sm:h-48 sm:my-10 sm:gap-5
       md:h-52 md:px-20
      lg:w-2/3 lg:h-72 lg:px-0
      ">

      <div className=" w-96 snap-center
     bg-secondary">f</div>
      <div className="w-96 snap-center bg-secondary">f</div>
      <div className="w-96 snap-center bg-secondary">f</div>

        
      </div> */}
    </section>
  );
};

export default Home;
