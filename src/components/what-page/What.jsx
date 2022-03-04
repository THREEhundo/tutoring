import React from "react";
import PinkAbstract3DModel from "../../assets/images/simon-lee-4wYxcWA5MbI-unsplash.jpg";
import { Header } from "../header/Header";

export const What = ({ children }) => {
  return (
    <section className="w-full">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </section>
  );
};

const FirstPage = () => (
  <section id="who-splash" className="flex flex-col">
    <Header color="text-blue-oyster" />
    <WhoSplashContent />
  </section>
);

const WhoSplashContent = () => (
  <main
    id="who-landing"
    className="flex flex-col items-center justify-center h-screen text-blue-oyster"
  >
    <h1 className="font-bold text-9xl z-10 relative top-64">What.</h1>
    <Pink3dBackground />
  </main>
);
const Pink3dBackground = () => (
  <figure className="w-3/4 text-khaki">
    <img
      className="h-3/4 m-auto"
      src={PinkAbstract3DModel}
      alt="Pink Abstract 3D Model"
    />
    <cite>
      <a href="https://unsplash.com/photos/4wYxcWA5MbI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
        Simon Lee
      </a>
    </cite>
  </figure>
);

/** What I Provide */
// TODO: change to flex
const SecondPage = () => (
  <section className="h-screen m-auto text-blue-oyster w-3/5">
    <h6 className="uppercase text-xs pt-80 tracking-wide">academic guide</h6>
    <span>|||</span>
    <h2 className="text-3xl font-bold mt-7 mb-3">
      I collaberate with learners to create the framework in which they can
      apply to any domain to attain mastery.
    </h2>
    <p className="w-10/12 m-auto">
      Think of me as more of a collaborater than a resource. This means we have
      shared perspective on how we can work together to achieve yuour goals.
    </p>
    <p>Basically your new BFF.</p>
  </section>
);

/** Services */
const ThirdPage = () => (
  <section className="flex flex-col flex-grow h-screen  m-auto text-blue-oyster w-3/5">
    <h6 className="uppercase text-xs pt-80 tracking-wide">services</h6>
    <span className="py-2">|||</span>
    <TripleColumnContainer>
      <SingleColumn
        heading="Discover"
        item1="Research"
        item2="Strategy"
        item3="Ideation"
      />
      <SingleColumn
        heading="Design"
        item1="Tools"
        item2="Active Recall"
        item3="Repetition"
      />
      <SingleColumn
        heading="Deploy"
        item1="Test Results"
        item2="Performance Results"
        item3=""
      />
    </TripleColumnContainer>
  </section>
);
// turn columns into map functions

const TripleColumnContainer = ({ children }) => {
  return <section className="flex w-full py-5 gap-x-10">{children}</section>;
};

const SingleColumn = ({ heading, item1, item2, item3 }) => {
  return (
    <section className="flex-1 basis-1/3">
      <h2 className="font-bold text-4xl">{heading}</h2>
      <ul className="py-2">
        <li className="py-2">{item1}</li>
        <li className="py-2">{item2}</li>
        {item3 && <li className="py-2">{item3}</li>}
      </ul>
    </section>
  );
};
