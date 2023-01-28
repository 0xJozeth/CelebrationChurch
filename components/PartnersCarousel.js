import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

import Arc from '/public/partner-ARC.png';
import City from '/public/partner-city-for-the-nations.png';
import Convoy from '/public/partner-convoy-of-hope.png';
import OneHope from '/public/partner-one-hope.png';
import p42 from '/public/P42logo-black.png';
import reaching from '/public/REACHING-A-GENERATION-LOGO_white-1160x274.png';

const Carousel = () => {
	const images = [
		{
			image: Arc,
			href: 'https://google.com',
		},
		{
			image: City,
			href: 'https://google.com',
		},
		{
			image: Convoy,
			href: 'https://google.com',
		},
		{
			image: OneHope,
			href: 'https://google.com',
		},
		{
			image: p42,
			href: 'https://google.com',
		},
		{
			image: reaching,
			href: 'https://google.com',
		},
	];

	return (
		<AnimatePresence>
			{images.map((image, index) => (
				<motion.div
					key={index}
					initial={{ x: '100%' }}
					animate={{ x: 0 }}
					exit={{ x: '-100%' }}
					whileHover={{ scale: 1.1 }}
					className='flex justify-center items-center h-20 w-44'
				>
					<Link href={image.href} passHref={true}>
						<a>
							<Image
								src={image.image}
								alt=''
								objectFit='contain'
								layout='fill'
							/>
						</a>
					</Link>
				</motion.div>
			))}
		</AnimatePresence>
	);
};

export default Carousel;
