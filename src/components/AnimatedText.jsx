'use client';
import React from 'react';
import { motion } from 'framer-motion';

const quote = {
	initial: { opacity: 1 },
	animate: { opacity: 1, transition: { delay: 1, staggerChildren: 0.2 } },
};
const singleQuote = {
	initial: { opacity: 0, y: 50 },
	animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const AnimatedText = ({ text, classname = '' }) => {
	return (
		<div className='w-auto py-1 ml-18 flex items-center justify-start text-left md:text-4xl sm:text-3xl'>
			<motion.h1
				variants={quote}
				initial='initial'
				animate='animate'
				className={`inline-block w-full text-black font-bold capitalize text-6xl ${classname}`}>
				{text.split(' ').map((word, index) => (
					<motion.span
						key={word + '-' + index}
						className='inline-block'
						variants={singleQuote}>
						{word}&nbsp;
					</motion.span>
				))}
			</motion.h1>
		</div>
	);
};

export default AnimatedText;
