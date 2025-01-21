'use client';

import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

export const Animations = ({ children }) => {
	const pathName = usePathname();
	return (
		<AnimatePresence mode='wait'>
			<div
				key={pathName}
				className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'>
				<motion.div
					className='fixed top-0 bottom-0 right-full h-screen w-screen z-50 bg-red-100 '
					initial={{ x: '100%', width: '100%' }}
					animate={{ x: '0%', width: '0%' }}
					// exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
					transition={{ duration: 0.8, ease: 'easeInOut' }}
				/>
				<motion.div
					className='fixed top-0 bottom-0 right-full h-screen w-screen z-20 bg-blue-100'
					initial={{ x: '100%', width: '100%' }}
					animate={{ x: '0%', width: '0%' }}
					transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
				/>
				<motion.div
					className='fixed top-0 bottom-0 right-full h-screen w-screen z-10 bg-white'
					initial={{ x: '100%', width: '100%' }}
					animate={{ x: '0%', width: '0%' }}
					transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
				/>
				<div className='h-24'>
					<Navbar />
				</div>
				<div className='h-[calc(100vh-6rem)]'>{children}</div>
			</div>
		</AnimatePresence>
	);
};
