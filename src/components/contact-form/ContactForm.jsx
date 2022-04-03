import { useState } from 'react'
import { SocialsList } from '../social-links/SocialsList'

// TODO CONTACT MODAL
// TODO DROP DOWN ANIMATION
// TODO H1 --> EMAIL
// TODO UL >>> LI --> SOCIAL LINKS
// TODO
//export const ContactForm = ({ openMenu }) => {
//	return (
//		<div className='w-full h-screen bg-pale-orange flex flex-col justify-center items-center'>
//			{/*<button className="navbar-close ml-auto p-5">
//        <svg
//          className="h-6 w-6 text-midnight cursor-pointer hover:text-light-green"
//          xmlns="http://www.w3.org/2000/svg"
//          fill="none"
//          viewBox="0 0 24 24"
//          stroke="currentColor"
//        >
//          <path
//            strokeLinecap="round"
//            strokeLinejoin="round"
//            strokeWidth="2"
//            d="M6 18L18 6M6 6l12 12"
//          ></path>
//        </svg>
//      </button>*/}
//
//			<h1 className='font-bold text-center text-5xl text-sunset py-5 m-auto'>
//				<a href='#' className='hover:text-light-green'>
//					<span className='underline hover:text-light-green'>
//						eunice.jh.baik
//					</span>
//					@gmail.com
//				</a>
//			</h1>
//			<SocialsList />
//		</div>
//	)

// !!! NEED TO CONNECT BACKEND TO FORM

const FORM_ENDPOINT = '' // TODO - fill on the later step

const ContactForm = () => {
	const [submitted, setSubmitted] = useState(false)
	const handleSubmit = () => {
		setTimeout(() => {
			setSubmitted(true)
		}, 100)
	}

	if (submitted) {
		return (
			<>
				<div className='text-2xl'>Thank you!</div>
				<div className='text-md'>We'll be in touch soon.</div>
			</>
		)
	}

	return (
		<form
			action={FORM_ENDPOINT}
			onSubmit={handleSubmit}
			method='POST'
			target='_blank'
			className='max-w-md mx-auto mt-10'>
			<div className='mb-3 pt-0'>
				<input
					type='text'
					placeholder='Your name'
					name='name'
					className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
					required
				/>
			</div>
			<div className='mb-3 pt-0'>
				<input
					type='email'
					placeholder='Email'
					name='email'
					className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
					required
				/>
			</div>
			<div className='mb-3 pt-0'>
				<textarea
					placeholder='Your message'
					name='message'
					className='px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full'
					required
				/>
			</div>
			<div className='mb-3 pt-0'>
				<button
					className='bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
					type='submit'>
					Send a message
				</button>
			</div>
		</form>
	)
}

export default ContactForm
