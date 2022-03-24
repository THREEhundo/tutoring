import React from 'react'
import { ELearning } from '../../assets/index'
import { ReactComponent as Zoom } from '../../assets/icons/zoom.svg'
import { CgArrowLongRight } from 'react-icons/cg'
import { DesktopContainer } from '../generic/DesktopContainer'
import { HugeHeading } from '../generic/HugeHeading'
import metalicaGirl from '../../assets/images/pexels-dillon-kydd-5794559.jpeg'
import bucketsGirl from '../../assets/images/pexels-dominika-roseclay-1172784.jpeg'
import euniceBaikLogo from '../../assets/final-logo.mp4'

/**
 * ! Intro
 * ? Header & Landing (1st Screen)
 * TODO
 * Seperate Header & Main (FirstScreenContent) height needs to be adjusted. ✅
 */

// TODO: Snap container ==> <Intro /> snap-mandatory scroll-smooth snap-y snap-mandatory overflow-scroll
export const Intro = () => (
	<section className='w-full text-light-red'>
		<IntroSplash />
		<IntroMainContentContainer />
		<ViewTestimonials />
	</section>
)

// TODO: Snap Item ==> <IntroSplash />  snap-always snap-start
const IntroSplash = ({ children }) => {
	return (
		<section id='intro' className='flex flex-col items-center'>
			{children}
			<IntroContent />
		</section>
	)
}
// ! Fixing !
// ! Figure out passing classes to SingleColumn and HugeHeader

const IntroContent = () => (
	<main
		id='landing'
		className='flex flex-col flex-grow justify-center min-h-full m-auto items-center'>
		{/*^^^ put h-screen back after testing*/}
		<p>1250</p>
		<video
			playsInline
			autoPlay
			muted
			loop
			className='z-1 w-[1250px] object-cover'>
			<source src={euniceBaikLogo} type='video/mp4' id='loop'></source>
		</video>
		<p>1000px</p>
		<video
			playsInline
			autoPlay
			muted
			loop
			className='z-1 w-[1000px] object-cover'>
			<source src={euniceBaikLogo} type='video/mp4' id='loop'></source>
		</video>
		<p>900px</p>
		<video
			playsInline
			autoPlay
			muted
			loop
			className='z-1 w-[900px] object-cover'>
			<source src={euniceBaikLogo} type='video/mp4' id='loop'></source>
		</video>
		<video
			playsInline
			autoPlay
			muted
			loop
			className='z-1 w-[800px] object-cover'>
			<source src={euniceBaikLogo} type='video/mp4' id='loop'></source>
		</video>
		<p>700px</p>
		<video
			playsInline
			autoPlay
			muted
			loop
			className='z-1 w-[700px] object-cover'>
			<source src={euniceBaikLogo} type='video/mp4' id='loop'></source>
		</video>
	</main>
)

/**
 * ! Main Content
 * ? Description & Testimonials
 *
 */

// TODO: Snap Item ==> <IntroMainContentContainer /> snap-always snap-start
export const IntroMainContentContainer = () => (
	<section
		id='main-content'
		className='flex flex-grow justify-center min-h-full h-screen'>
		<DesktopContainer addClasses={'flex flex-col items-center'}>
			<Description />
		</DesktopContainer>
	</section>
)

const Description = () => (
	<section id='descriptive-content' className='flex flex-col flex-grow'>
		<h3 className='text-xl font-bold my-5'>POCKET ROCKET</h3>
		<span>|||</span>
		<h2 className='text-3xl font-bold mt-7 mb-3'>
			Eunice is a Yale University graduate awaiting acceptance into medical
			school.
		</h2>
		<p className='px-16'>
			Top of her class at every stage of her journey through education, she
			imparts knowledge on specific subjects and most important of all, learning
			how to learn.
		</p>
	</section>
)

// TODO: made page 100vh
// TODO: Snap Item ==> <ViewTestimonials /> snap-always snap-start
const ViewTestimonials = () => (
	<section
		id='testimonial-teaser-link'
		className='flex min-h-full flex-col h-screen  items-center justify-center relative text-sunset'>
		{/* mb-96 */}
		<h2 className='text-7xl font-bold mt-20 mb-3'>Testimonials</h2>
		<a className='' href='#testimonials'>
			<span className='border-solid border border-light-teal py-2'>
				<RightArrow />
			</span>
			<span className='border-solid border border-light-teal py-2 px-1 underline decoration-light-teal'>
				VIEW TESTIMONIALS
			</span>
			<span className='border-solid border border-light-teal py-2'>
				<RightArrow />
			</span>
		</a>
		<ZoomContainer />
		<StaggeredImgContainer />
	</section>
)

// TODO: mt-20 ml-48
const ZoomContainer = () => (
	<div className=''>
		<Zoom className='w-40' />
	</div>
)

/* Vertically Align text with SVG's */
const RightArrow = () => <CgArrowLongRight className='inline-flex w-10' />

// TODO: HOVER OVER IMG SHOW TEXT BUBBLE
// TODO: ON SCROLL SHOW TESTIMONIAL TEXT
const StaggeredImgContainer = () => (
	<section className='flex absolute bottom-0 h-full'>
		<TopLeftCard />
		<BttmRightCard />
	</section>
)

const TopLeftCard = () => (
	<section className='flex justify-start flex-col items-center my-10 relative'>
		<p className='w-1/2 bg-coral text-navy rounded-lg absolute -right-10 top-16'>
			Eunice helped me get into Harvard with a 5.9 GPA!
		</p>
		<img
			src={metalicaGirl}
			alt='testimonal headshot left side'
			className='w-1/2 aspect-[640/906] border-8 border-x-4 border-coral rounded-full'
		/>
	</section>
)

const BttmRightCard = () => (
	<section className='flex justify-end flex-col items-center my-10 relative'>
		<img
			src={bucketsGirl}
			alt='testimonal headshot right side'
			className='self-center w-1/2 mt-36 aspect-[640/906] border-8 border-x-4 border-blue-oyster rounded-full'
		/>
		{/* TODO: FIX POSITIONING FOR SMALLER SCREENS */}
		<p className='w-1/2 bg-blue-oyster text-navy rounded-lg absolute -left-20 bottom-16'>
			Eunice is worth her weight in GOLD!
		</p>
	</section>
)
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
