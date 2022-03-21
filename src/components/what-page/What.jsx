import React from "react";
import { HugeHeading } from "../generic/HugeHeading";
import { SingleColumn } from "../generic/SingleColumn";
import { Header } from "../header/Header";
import PinkAbstract3DModel from "../../assets/images/simon-lee-4wYxcWA5MbI-unsplash.jpg";
import { GenericFirstScreenContent } from "../generic/GenericFirstScreenContainer";
import { Figure } from "../generic/Figure";

/**
 * TODO
 * 1. Containers
	  1.1 - Big Word Container
	  1.2 - Academic Guide Container
	  1.3 - Services Container 
		1.4 - Experience Container
	  1.5 - Results Container
 
	* TODO 
	* Big Word --> h1 What 

	* TODO 
	* Academic Guide --> h6 Academic Guide --> svg / --> h2 Collaberate --> p --> p

	* TODO 
	* Services --> h6 Services  --> (h2 Discover --> ul >> li * 3) + (h2 Design --> ul >> li * 3) + (h2 Deploy --> ul >> li * 3) 

	* TODO
	* Experience --> h6 My Experience  --> svg  --> h2 Collabs  --> section >> profile avatar( Container(section) + img + chat bubble(section))

	* TODO
	* Results  --> svg  --> (ul >> li result category)
	* ! Attribute 3D Model https://unsplash.com/photos/4wYxcWA5MbI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
 */
export const What = ({ children }) => {
  return <FirstPage>{children}</FirstPage>;
};

const FirstPage = ({ children }) => (
  <SingleColumn addClasses="m-auto">
    <GenericFirstScreenContent>
      {children}
      <HugeHeading>What.</HugeHeading>
      <Pink3DImage />
    </GenericFirstScreenContent>
    <SecondPage />
    <ThirdPage />
  </SingleColumn>
);

const WhatFirstScreenContainer = () => <GenericFirstScreenContent />;

const Pink3DImage = () => (
  <Figure
    image={PinkAbstract3DModel}
    altLink="Pink Abstract 3D Model"
    sourceLink="https://unsplash.com/photos/4wYxcWA5MbI?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
    artist="Simon Lee"
  />
);

/** What I Provide */
const SecondPage = () => (
  <SingleColumn addClasses="h-screen m-auto">
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
  </SingleColumn>
);

/** Services */
const ThirdPage = () => (
  <SingleColumn addClasses="flex flex-col flex-grow h-screen w-full">
    <h6 className="uppercase text-xs pt-80 tracking-wide">service</h6>
    <span className="py-2">|||</span>
    <TripleColumnContainer>
      <section className="flex-1 basis-1/3">
        <h2 className="font-bold text-4xl">Credentials</h2>
        <ul className="py-2">
          <li className="py-2">Yale Graduate</li>
          <li className="py-2">3+ years of experience</li>
          <li className="py-2">Scored 780+ on SAT II's</li>
        </ul>
      </section>
      <section className="flex-1 basis-1/3">
        <h2 className="font-bold text-4xl">Subjects</h2>
        <ul className="py-2">
          <li className="py-2">Science (Earth Science, Biology, Chemistry)</li>
          <li className="py-2">
            Math (Algebra, Geometry, Trigonometry/Algebra II)
          </li>
          <li className="py-2">Pre-Calc</li>
        </ul>
      </section>
      <section className="flex-1 basis-1/3">
        <h2 className="font-bold text-4xl">Rate</h2>
        <ul className="py-2">
          <li className="py-2">$60-$80/hr</li>
          <li className="py-2">
            Rate will depend on age, subject, # of hours per week
          </li>
        </ul>
      </section>
    </TripleColumnContainer>
  </SingleColumn>
);
// turn columns into map functions

const TripleColumnContainer = ({ children }) => {
  return <section className="flex w-full py-5 gap-x-10">{children}</section>;
};
