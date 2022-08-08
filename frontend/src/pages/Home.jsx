import React from "react";
import { AiFillYoutube, AiFillFacebook } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";
import Line from "../components/Line";
// import HomeCard from "./components/HomeCard";

// import PlacesCard from "./components/PlacesCard";

const Home = () => {
  const scrollToNextSection = () => {
    const nextPage = document.getElementById("nextSection");
    nextPage.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <section className="">
      <div className="h-screen pt-6 bg-black w-screen flex justify-center">

        <div className="absolute md:block hidden">
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

        <div className="my-auto text-center ">
          <h1 className="lg:text-6xl font-bold text-white 
          text-4xl
          ">
            Djursland <br />
            under <span className="text-primary">overfladen</span>
          </h1>
          <br />
          <p className="mx-auto 
          w-full px-4 text-sm
          lg:w-1/2 lg:px-0 lg:text-base">
            Djursland rummer mange unikke naturoplevelser både over og under
            vandet. Er du certificeret dykker har du mulighed for at deltage i
            vores mange guidede ture på forskellige destinationer rund omkring
            Djursland.{" "}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="h-screen p-5 text-center
      md:p-12" id="nextSection">
        <div className="bg-secondary h-full p-5 flex gap-5 flex-col
        md:flex-row md:p-12
        ">
          <figure className="h-full w-full bg-white">
            <img src="" alt="" />
          </figure>
          <div className="my-auto">
            <h3 className="title">Lorem ibsum</h3>
            <Line />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              fugit nulla minima nihil itaque esse eum qui consequatur autem
              ducimus, corrupti modi. Magnam corporis, nobis voluptates rem
              dolor odio minus.
            </p>
          </div>
        </div>
      </div>

      {/* next trips */}
      <div></div>

      {/* cards */}
      <div className="grid grid-cols-3">
        <div className="h-20 w-20 bg-primary">f</div>

        {/* <PlacesCard /> */}
      </div>
    </section>
  );
};

export default Home;
