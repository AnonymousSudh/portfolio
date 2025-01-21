'use client';
import { useRef } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';
import AnimatedText from '../../components/AnimatedText';
import { skills } from '../../appConstants';
import Brain from '../../components/Brain';
import Link from 'next/link';
import { LinkArrow } from '../../../public/icons';

const AboutPage = () => {
	const containerRef = useRef();

	const { scrollYProgress } = useScroll({ container: containerRef });

	const skillRef = useRef();
	const isSkillRefInView = useInView(skillRef, { once: true });
	// const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

	const experienceRef = useRef();
	const isExperienceRefInView = useInView(experienceRef, { once: true });
	// const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

	return (
		<motion.div className='h-full' initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1 }}>
			{/* CONTAINER */}
			<div className='h-full overflow-scroll lg:flex ' ref={containerRef}>
				{/* TEXT CONTAINER */}
				<div
					className='p-2 sm:p-8 md:p-10 lg:px-20 xl:p-20 flex flex-col gap-6 md:gap-20 lg:gap-18 xl:gap-22 
                        lg:w-1/2 xl:w-1/2'>
					{/* BIOGRAPHY CONTAINER */}
					<AnimatedText
						text='Turning Visions Into Reality with Code'
						classname='text-xl sm:!text-3xl md:!text-4xl lg:!text-4xl xl:!text-5xl'
					/>

					<div className='flex flex-col gap-12 justify-center'>
						{/* BIOGRAPHY TITLE */}
						<h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
						{/* BIOGRAPHY DESC */}
						<p className='text-lg'>
							I&apos;m Sudhanshu Kumar, a passionate Full Stack Developer specializing in the MERN stack with 11 months of internship experience. My technical foundation lies in JavaScript, Node.js, React, and SQL, enabling me to craft dynamic, scalable web applications that prioritize performance and user experience. I have hands-on experience developing responsive UI designs, implementing RESTful APIs, and optimizing backend systems to meet the needs of modern applications.
						</p>
						<p className='text-lg'>
							During my internships at GrowGlobal and WagKart, I tackled challenging problems, including creating a sales analysis dashboard using Angular, Node.js, and SQL and developing subscription renewal functionalities that streamlined operations. Additionally, I published two Android apps on the Google Play Store, showcasing my versatility across web and mobile platforms. My projects demonstrate expertise in integrating tools like Redux Toolkit, React Query, and modern database systems such as MongoDB and MySQL.
						</p>
						<p className='text-lg'>
							I stay up-to-date with the latest technologies and thrive on solving complex technical challenges. Proficient in tools like Git, Postman, and Swagger, I bring efficiency to development workflows. Beyond coding, I have a proven record of innovation, from securing third place in a college Python competition to actively participating in hackathons. I&apos;m driven to contribute to impactful, tech-driven projects and continuously advance my skills as a developer.
						</p>
						{/* BIOGRAPHY SCROLL SVG */}
						<motion.svg
							initial={{ opacity: 0.2, y: 0 }}
							animate={{ opacity: 1, y: '10px' }}
							transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							width={50}
							height={50}>
							<path
								d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
								stroke='#000000'
								strokeWidth='1'></path>
							<path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
							<path d='M15 11L12 14L9 11' stroke='#000000' strokeWidth='1'></path>
						</motion.svg>
					</div>
					{/* SKILLS CONTAINER */}
					<div className='flex flex-col gap-6 justify-center' ref={skillRef}>
						{/* SKILL TITLE */}
						<motion.h1
							initial={{ x: '-300px' }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className='font-bold text-2xl'>
							SKILLS
						</motion.h1>
						{/* SKILL LIST */}
						<motion.div
							initial={{ x: '-300px' }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							className='flex gap-4 flex-wrap'>
							<div className='flex gap-4 flex-wrap'>
								{skills?.map((skill, index) => {
									return (
										<div
											key={index}
											className='rounded p-2 text-md cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
											{skill}
										</div>
									);
								})}
							</div>
						</motion.div>
						{/* SKILL SCROLL SVG */}
						<motion.svg
							initial={{ opacity: 0.2, y: 0 }}
							animate={{ opacity: 1, y: '10px' }}
							transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							width={50}
							height={50}>
							<path
								d='M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z'
								stroke='#000000'
								strokeWidth='1'></path>
							<path d='M12 6V14' stroke='#000000' strokeWidth='1'></path>
							<path d='M15 11L12 14L9 11' stroke='#000000' strokeWidth='1'></path>
						</motion.svg>
					</div>

					{/* EXPERIENCE CONTAINER */}
					<div className='flex flex-col gap-6 justify-center pb-40' ref={experienceRef}>
						{/* EXPERIENCE TITLE */}
						<motion.h1
							initial={{ x: '-300px' }}
							animate={isExperienceRefInView ? { x: '0' } : {}}
							transition={{ delay: 0.2 }}
							className='font-bold text-2xl'>
							EXPERIENCE
						</motion.h1>
						{/* EXPERIENCE LIST */}
						<motion.div initial={{ x: '-300px' }} animate={isExperienceRefInView ? { x: '0' } : {}} className=''>
							{/* EXPERIENCE LIST ITEM */}
							<div className='flex justify-center h-auto'>
								{/* LEFT */}
								<div className='w-6/12'>
									{/* JOB TITLE */}
									<div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Full Stack Intern </div>
									{/* JOB DESC */}
									<div className='p-3 text-sm italic gap-2'>
										<p>
											Developed a sales analysis dashboard using angular, node js and SQL. Which shows sales report
											dynamically on pie chart and line chart. Using Angular, Nodejs, SQl.
										</p>
										<br />
										<p>
											Developed crucial code to address walking order errors, establishing a foundational aspect of the
											application's functionality and improving overall operational accuracy.
										</p>
									</div>
									{/* JOB DATE */}
									<div className='p-3 text-red-400 text-sm font-semibold -mt-2'>April 2023 - November 2023 </div>
									{/* JOB COMPANY */}
									<Link
										href='https://drive.google.com/file/d/1KwG4lMobmCZL6XSlkeZ-LN2TlAxGJVv3/view'
										target={'_blank'}
										download={true}
										className='flex items-center justify-center bg-black text-white p-0.5 px-4 rounded-lg text-lg font-semibold hover:text-black border-2 border-transparent hover:border-black hover:bg-transparent'>
										Certificate <LinkArrow className='w-3 m-3' />
									</Link>
								</div>
								{/* CENTER */}
								<div className='w-1/12 flex justify-center '>
									{/* LINE */}
									<div className='w-1 h-full bg-gray-600 rounded relative'>
										{/* LINE CIRCLE */}
										<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
									</div>
								</div>
								{/* RIGHT */}
								<div className='w-6/12'></div>
							</div>
							{/* EXPERIENCE LIST ITEM */}
							<div className='flex justify-between h-48'>
								{/* LEFT */}
								<div className='w-6/12'></div>
								{/* CENTER */}
								<div className='w-1/12 flex justify-center'>
									{/* LINE */}
									<div className='w-1 h-full bg-gray-600 rounded relative'>
										{/* LINE CIRCLE */}
										<div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
									</div>
								</div>
								{/* RIGHT */}
								{/* */}
								<div className='w-6/12'>
									{/* JOB TITLE */}
									<div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Full Stack Intern </div>
									{/* JOB DESC */}
									<div className='p-3 text-sm italic gap-2'>
										Create Responsive UI for Android and iOS and Learned Swagger, React Query{' '}
									</div>
									{/* JOB DATE */}
									<div className='p-3 text-red-400 text-sm font-semibold -mt-2'>Feb 2024 - July 2024</div>
									<Link
										href='https://drive.google.com/file/d/1sFOuN80YktYltttXP8uY3Zj5nOl42L-r/view '
										target={'_blank'}
										download={true}
										className='flex items-center justify-center bg-black text-white p-0.5 px-4 rounded-lg text-lg font-semibold hover:text-black border-2 border-transparent hover:border-black hover:bg-transparent'>
										Certificate <LinkArrow className='w-3 m-3' />
									</Link>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
				{/* SVG CONTAINER */}
				<div className='hidden lg:block w-1/2 h-auto sticky top-10 z-30 xl:w-1/2 mt-12'>
					<Brain scrollYProgress={scrollYProgress} />
				</div>
			</div>
		</motion.div>
	);
};

export default AboutPage;
