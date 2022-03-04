import React from "react";
import { Figure } from "../generic/Figure";
import { HugeHeading } from "../generic/HugeHeading";
import { SingleColumn } from "../generic/SingleColumn";
import Blue3DTerrain from "../../assets/images/simon-lee-V8_xGwr3isA-unsplash.jpg";
import { Header } from "../header/Header";
import JiHaePlaceholderPic from "../../assets/images/215-400x600-grayscale.jpeg";
import { Facebook, LinkedIn, Gmail } from "../../assets/index";

const socialsArray = [
  {
    icon: Facebook,
    name: "facebook",
  },
  {
    icon: LinkedIn,
    name: "linkedin",
  },
  {
    icon: Gmail,
    name: "gmail",
  },
];
/***
 * TODO - WHO --> H1 IMG
 * TODO - POCKET DYNAMO --> H6 SPAN H2 P
 * TODO - FOUNDER --> H2 IMG SPLIT SCREEN W/ POCKET DYNAMO
 * TODO - PROFILE --> H6 H1 H4 P UL | IMG
 *
 * ***/
/**
 * ! create generic firscreencontainer
 * ! link FSC to what & who pages
 * ! add custom id attriute for what page
 */

export const Who = ({ children }) => {
  return <AllPages>{children}</AllPages>;
};

const AllPages = () => (
  <section className="w-full text-khaki">
    <WhoIntroSplash />
    <SecondPage />
    <FourthPage />
  </section>
);

const WhoIntroSplash = ({ children }) => (
  <section id="intro" className="flex flex-col h-screen">
    {children}
    <Header color="text-khaki" />
    <WhoIntroContent />
  </section>
);

const WhoIntroContent = () => (
  <main id="id" className="flex flex-col justify-center w-/35  items-center">
    <HugeHeading addClasses="text-khaki z-10 relative top-1/3 left-[50px]">
      Who.
    </HugeHeading>
    <Blue3DImage />
  </main>
);

const Blue3DImage = () => (
  <Figure
    image={Blue3DTerrain}
    altLink="Green Abstract 3D Model"
    sourceLink="https://unsplash.com/@simonppt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    artist="Simon Lee"
  />
);

const SecondPage = () => (
  <GenericFullViewHeightContainer page="second-page-who">
    <h6 className="uppercase text-xs py-8 tracking-wide">Pocket Dynamo</h6>
    <GenericAnimatedSpan>|||</GenericAnimatedSpan>
    <h2 className="text-3xl font-bold mt-7 mb-7 tracking-wide">
      Thinker, Strategist, Designer
    </h2>
    <p className="w-10/12 m-auto">EXPERIENCE & LIFE ACHIEVEMENTS</p>
  </GenericFullViewHeightContainer>
);

const FourthPage = () => (
  <section
    id="third-page"
    //flex flex-wrap flex-grow flex-col
    className=" h-screen w-3/5	m-auto justify-between columns-2"
  >
    <section className="break-after-column">
      <h6 className="flex-0.5 uppercase text-xs text-left">
        eunice baik | founder
      </h6>
      <h2 className="flex-0.5 uppercase text-5xl font-bold text-left pb-4">
        descriptor
      </h2>
      <h4 className="flex-0.5 uppercase text-2xl font-bold text-left pt-2">
        tagline
      </h4>
      <p className="w-10/12 text-left py-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        fugiat voluptatem odit natus? Veritatis corrupti officia mollitia vitae,
        eaque quo id, voluptatibus odio fuga illo ea blanditiis iusto? In,
        maiores. Expedita nostrum suscipit adipisci sint? Libero distinctio
        eaque optio iusto molestias quia magni eos ut maiores voluptatem,
        laborum enim totam deserunt. Iste accusamus assumenda repellendus at
        sit. Dolores, molestiae omnis.
      </p>
      <SocialsList />
    </section>
    {/* POPOUt MODAL THAT SCROLLS TO BIO */}
    <section className="">
      <img src={JiHaePlaceholderPic} alt="JiHae Headshot" className="w-full" />
    </section>
  </section>
);

const SocialIcons = socialsArray.map((link, index) => {
  return (
    <li key={index} className="rounded-full border-2 border-khaki mx-1">
      <a href={`#${link.name}`}>
        <img className="w-8" src={link.icon} alt={link.name} />
      </a>
    </li>
  );
});

const SocialsList = () => (
  <ul className="flex w-1/4 justify-center">{SocialIcons}</ul>
);

const GenericAnimatedSpan = ({ children }) => <span>{children}</span>;

//const GenericStyledH6 = ({ children }) => (
//  <h6 className="uppercase text-xs pt-80 tracking-wide">{children}</h6>
//);
//
//const GenericStyledParagraph = ({ children }) => (
//  <p className="w-10/12 m-auto">{children}</p>
//);

const GenericFullViewHeightContainer = ({ children, page, margin }) => (
  <section
    id={`${page}`}
    className="flex flex-wrap flex-grow justify-center flex-col h-screen items-center"
  >
    <SingleColumn
      className="flex flex-col flex-grow h-screen w-full"
      addClasses={`${margin ? margin : ""}`}
    >
      {children}
    </SingleColumn>
  </section>
);
