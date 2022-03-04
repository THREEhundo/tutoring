import React from "react";
//import { ReactComponent as ELearning } from '../../assets/icons/elearning.svg';
import { ELearning } from "../../assets/index";
import { ReactComponent as Zoom } from "../../assets/icons/zoom.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Header } from "../header/Header";
import { CgArrowLongRight } from "react-icons/cg";
import { DesktopContainer } from "../generic/DesktopContainer";
import { HugeHeading } from "../generic/HugeHeading";
import { SingleColumn } from "../generic/SingleColumn";
import { GenericFirstScreenContent } from "../generic/GenericFirstScreenContainer";

// TODO: scroll snap each page IntroHeaderandFirstScreenContent | IntroMainContentContainer | TestimonialPage
// TODO: Snap container ==> <Intro />
// TODO: Snap Item ==> <IntroHeaderandFirstScreenContent />
// TODO: Snap Item ==> <IntroMainContentContainer />
// TODO: Snap Item ==> <ViewTestimonials />

/**
 * ! Intro
 * ? Header & Landing (1st Screen)
 * TODO
 * Seperate Header & Main (FirstScreenContent) height needs to be adjusted.
 */

// TODO: Snap container ==> <Intro /> snap-mandatory scroll-smooth
export const Intro = () => (
  <section className="snap-y snap-mandatory overflow-scroll w-full h-screen ">
    <IntroHeaderandFirstScreenContent />
    <IntroMainContentContainer />
    <ViewTestimonials />
  </section>
);

// TODO: Snap Item ==> <IntroHeaderandFirstScreenContent />  snap-always
export const IntroHeaderandFirstScreenContent = ({ children }) => {
  return (
    <section id="intro" className="flex flex-col snap-start">
      {children}
      <Header />
      <IntroFirstScreenContentNEEDTOREFACTOR />
    </section>
  );
};
// ! Fixing !
// ! Figure out passing classes to SingleColumn and HugeHeader

const IntroFirstScreenContentNEEDTOREFACTOR = () => (
  <main
    id="landing"
    className="flex flex-col flex-grow justify-center w-/35 h-screen min-h-full m-auto"
  >
    {/*<SingleColumn addClasses="m-auto">*/}
    {/* 100vh, bg-color break in middle */}
    <HugeHeading addClasses="">Eunice Baik</HugeHeading>
    <img
      src={ELearning}
      alt="teacher coming out of a laptop"
      className="mx-auto"
    />
    {/*</SingleColumn>*/}
  </main>
);

/**
 * ! Main Content
 * ? Description & Testimonials
 *
 */

// TODO: Snap Item ==> <IntroMainContentContainer /> snap-always
export const IntroMainContentContainer = () => (
  <section
    id="main-content"
    className="flex flex-grow justify-center min-h-full h-screen snap-start"
  >
    <DesktopContainer addClasses={"flex flex-col items-center"}>
      <Description />
    </DesktopContainer>
  </section>
);

const Description = () => (
  <section id="descriptive-content" className="flex flex-col flex-grow">
    <h3 className="text-xl font-bold my-5">POCKET ROCKET</h3>
    <span>|||</span>
    <h2 className="text-3xl font-bold mt-7 mb-3">
      Eunice is a Yale University graduate awaiting acceptance into medical
      school.
    </h2>
    <p className="px-16">
      Top of her class at every stage of her journey through education, she
      imparts knowledge on specific subjects and most important of all, learning
      how to learn.
    </p>
  </section>
);

// TODO: made page 100vh
// TODO: Snap Item ==> <ViewTestimonials /> snap-always
const ViewTestimonials = () => (
  <section
    id="testimonial-teaser-link"
    className="flex flex-grow min-h-full flex-col h-screen snap-start items-center"
  >
    <h2 className="text-2xl font-bold mt-20 mb-3">Testimonials</h2>
    <a className="mb-96" href="#">
      <span className="border-solid border border-light-green py-2">
        <RightArrow />
      </span>
      <span className="border-solid border border-light-green py-2 px-1 underline decoration-light-green">
        VIEW TESTIMONIALS
      </span>
      <span className="border-solid border border-light-green py-2">
        <RightArrow />
      </span>
    </a>
    <ZoomContainer />
  </section>
);

const ZoomContainer = () => (
  <div className="mt-20 ml-48">
    <Zoom className="w-40" />
  </div>
);

/* Vertically Align text with SVG's */
const RightArrow = () => <CgArrowLongRight className="inline-flex w-10" />;
/** 
 * ! TESTIMONIAL ANCHOR EXAMPLE
 * <a
			href='/work/'
			class='box-arrow-link js-state-change'
			data-new-state='work'>
			<span class='box-arrow-1'>
				<span class='arrow-head' data-color='black'>
					<span></span>
				</span>
			</span>
			<span class='box-text'>View All Work</span>
			<span class='box-arrow-2'>
				<span class='arrow-head' data-color='black'>
					<span></span>
				</span>
			</span>
		</a>
 */
