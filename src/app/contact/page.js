'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	let text = 'Say Hello';

	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		setSuccess(false);
		setError(false);

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				form.current,
				process.env.NEXT_PUBLIC_PUBLIC_KEY
			)
			.then(
				() => {
					setSuccess(true);
					form.current.reset();
				},
				() => {
					setError(true);
				}
			);
	};

	return (
		<motion.div className='h-full' initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1 }}>
			<div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-10 lg:px-20 xl:px-0'>
				{/* Text container */}
				<div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl font-bold'>
					<div>
						{text.split('').map((item, index) => (
							<motion.span
								key={index}
								initial={{ opacity: 1 }}
								animate={{ opacity: 0 }}
								transition={{
									duration: 3,
									repeat: Infinity,
									delay: index * 0.1,
								}}>
								{item}
							</motion.span>
						))}
						👋
					</div>
				</div>
				{/* Form container */}
				<form
					ref={form}
					onSubmit={sendEmail}
					className='lg:w-2/3 xl:w-2/5 w-full rounded-xl text-lg bg-[#f9f9f9] shadow-lg flex flex-col gap-6 justify-center py-6 px-8 mt-10 mb-10'>
					<h2 className='text-2xl text-center font-semibold text-gray-700 mb-4'>Contact Us</h2>
					<label className='text-gray-600 font-medium'>Dear Sudhanshu</label>
					<textarea
						rows={4}
						name='user_message'
						placeholder='Your message here...'
						className='bg-gray-100 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none resize-none shadow-md'></textarea>
					<label className='text-gray-600 font-medium'>My Email Address:</label>
					<input
						type='email'
						name='user_email'
						placeholder='your.email@example.com'
						className='bg-gray-100 rounded-lg p-3 border border-gray-300 focus:ring-2 focus:ring-gray-400 outline-none shadow-md'
					/>
					<label className='text-gray-600 font-medium'>Regards</label>
					{/*  implement send button functionality */}
					<button className='bg-pink-400 text-white rounded-lg font-bold p-3 shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300'>
						Send
					</button>
					{success && (
						<span className='text-green-600 font-semibold mt-2'>✔ Your message has been sent successfully!</span>
					)}
					{error && <span className='text-red-600 font-semibold mt-2'>✘ Something went wrong. Please try again.</span>}
				</form>
			</div>
		</motion.div>
	);
};

export default ContactPage;
