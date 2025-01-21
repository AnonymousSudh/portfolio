'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({
	url,
	title,
	line,
	src,
	alt,
	socialLink = '',
	width = 25,
	height = 25,
}) => {
	const pathName = usePathname();
	return (
		<>
			{line ? (
				<Link className={'mx-2 relative group'} href={url}>
					{title}
					<span
						className={`h-[2px] inline-block w-0 bg-black absolute bottom-0.5 left-0 group-hover:w-full transition-[width] ease duration-200 ${
							pathName === url ? 'w-full' : 'w-0'
						}`}>
						&nbsp;
					</span>
				</Link>
			) : (
				<Link href={socialLink} target='_blank' rel='noopener noreferrer'>
					<Image src={src} alt={alt} width={width} height={height} />
				</Link>
			)}
		</>
	);
};

export default NavLink;
