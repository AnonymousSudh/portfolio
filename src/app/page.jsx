'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { LinkArrow } from '../../public/icons';
import { motion } from 'framer-motion';

const HomePage = () => {
	return (
		<motion.div className='h-full' initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1 }}>
			<div className='h-full flex flex-col lg:flex-row md:flex-row px-4 sm:px-8 md:px-10 lg:px-16 xl:px-20'>
				{/* image cointainer */}
				<din className='h-1/2 lg:w-1/2 lg:h-full md:h-full md:w-2/3 relative'>
					<Image src='/hero.png' alt='hero image' fill className='object-contain' />
				</din>

				{/* text cointainer */}
				<din className='h-1/2 lg:w-1/2 lg:full md:h-full md:w-2/3 flex flex-col gap-2 justify-center '>
					{/* TITLE */}
					<h1 className='text-2xl font-bold sm:text-2xl md:text-4xl lg:text-6xl'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-600 text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-start'>
							Hello, I am
						</span>
						<br />
						<TypeAnimation
							sequence={['Sudhanshu Kumar', 1000, 'Full-Stack Developer', 1000]}
							wrapper='span'
							speed={40}
							style={{ display: 'inline-block' }}
							className='sm:text-2xl md:text-3xl lg:text-5xl'
							repeat={Infinity}
						/>
					</h1>

					{/* DESCRIPTION */}
					<p className='my-3 md:text-xl'>
						I’m a Full Stack Developer with expertise in the MERN stack and 11 months of internship experience. Skilled in JavaScript, Node.js, React, and SQL, I’ve built dynamic applications and responsive UIs while optimizing backend systems.

						With two Android apps on Google Play and proficiency in tools like Git and Postman, I’m passionate about creating impactful, tech-driven solutions.
					</p>

					{/* BUTTONS */}
					<div className='w-full flex gap-4'>
						<Link
							href='./Resume/Resume.pdf'
							target={'_blank'}
							download={true}
							className='flex items-center bg-black text-white p-2.5 px-4 rounded-lg text-lg font-semibold hover:text-black border-2 border-transparent hover:border-black hover:bg-transparent'>
							Resume <LinkArrow className='w-5 m-1' />
						</Link>
						<Link
							href='/contact'
							className='flex items-center p-2.5 px-4 rounded-lg text-lg font-semibold ring-1 ring-black'>
							Contact Me
						</Link>
					</div>
				</din>
			</div>
		</motion.div>
	);
};

export default HomePage;
