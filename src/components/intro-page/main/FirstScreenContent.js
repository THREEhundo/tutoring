import React from 'react';
import { ReactComponent as ELearning } from '../../assets/icons/elearning.svg';
import { ReactComponent as Zoom } from '../../assets/icons/zoom.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Header } from '../../header/Header';
import { CgArrowLongRight } from 'react-icons/cg';
import { DesktopContainer } from '../../generic/DesktopContainer';
import { HugeHeading } from '../../generic/HugeHeading';
import { SingleColumn } from '../../generic/SingleColumn';

/**
 * ! Intro
 * ? Header & Landing (1st Screen)
 * TODO
 * Seperate Header & Main (FirstScreenContent) height needs to be adjusted.
 */
export const FirstScreenContainer = () => {
	return (
		<div id='intro' className='h-screen flex flex-col'>
			<Header />
			<FirstScreenContent />
		</div>
	);
};

const FirstScreenContent = () => (
	<main id='landing' className='flex flex-grow justify-center'>
		<SingleColumn addClasses='m-auto'>
			{/* 100vh, bg-color break in middle */}
			<HugeHeading addClasses='pt-96'>Eunice Baik</HugeHeading>
			<ELearning className='mx-auto' />
		</SingleColumn>
	</main>
);

/**
 * ! Main Content
 * ? Description & Testimonials
 *
 */
export const MainContentContainer = () => (
	<section id='main-content' className='flex flex-grow justify-center'>
		<DesktopContainer addClasses={'flex flex-col items-center'}>
			<Description />
			<ViewTestimonials />
		</DesktopContainer>
	</section>
);

const Description = () => (
	<section id='descriptive-content' className='flex flex-col flex-grow'>
		<h3 className='text-xl font-bold my-5'>POCKET ROCKET</h3>
		{/* insert animation span */}
		<h2 className='text-2xl font-bold mt-7 mb-3'>
			Eunice is a Yale University graduate awaiting acceptance into medical
			school.
		</h2>
		<p className='px-16'>
			Top of her class at every stage of her journey through education, she
			imparts knowledge on specific subjects and most important of all, learning
			how to learn.
		</p>
	</section>
);

const ViewTestimonials = () => (
	// ! Testimonal Btn & Zoom svg
	<section id='testimonial-teaser-link'>
		<h2 className='text-2xl font-bold mt-20 mb-3'>Testimonials</h2>
		<a className='h-96 w-96' href='#'>
			<span className='border-solid border border-light-green py-2'>
				<RightArrow />
			</span>
			<span className='border-solid border border-light-green py-2 px-1 underline decoration-light-green'>
				VIEW TESTIMONIALS
			</span>
			<span className='border-solid border border-light-green py-2'>
				<RightArrow />
			</span>
		</a>
		<ZoomContainer />
	</section>
);

const ZoomContainer = () => (
	<div className='mt-20 ml-48'>
		<Zoom className='w-40' />
	</div>
);

/* Vertically Align text with SVG's */
const RightArrow = () => <CgArrowLongRight className='inline-flex w-10' />;
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
