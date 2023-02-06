import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';

import Arc from '/public/partner-ARC.png';
import ConPasion from '/public/about-partner-conpasion.png';
import Convoy from '/public/partner-convoy-of-hope.png';
import Equip from '/public/about-partner-equip.png';
import GoToNations from '/public/about-partner-go-to-nations.png';
import OneChild from '/public/about-partner-onechild.png';
import p42 from '/public/P42logo-black.png';
import reaching from '/public/REACHING-A-GENERATION-LOGO_white-1160x274.png';

const Carousel = () => {
	const partnersOne = [
		{
			image: Arc,
			href: 'https://www.arcchurches.com/',
		},
		{
			image: ConPasion,
			href: 'http://misionesconpasion.org/',
		},
		{
			image: Convoy,
			href: 'https://convoyofhope.org/',
		},
		{
			image: Equip,
			href: 'https://iequip.org/',
		},
		{
			image: GoToNations,
			href: 'https://gotonations.org/',
		},
		{
			image: OneChild,
			href: 'https://onechild.org/',
		},
		{
			image: p42,
			href: 'https://www.project42partners.org/',
		},
		{
			image: reaching,
			href: 'https://reachingageneration.org/',
		},
	];

	return (
		<AnimatePresence>
			{partnersOne.map((image, index) => (
				<motion.div
					key={index}
					initial={{ x: '100%' }}
					animate={{ x: 0 }}
					exit={{ x: '-100%' }}
					whileHover={{ scale: 1.1 }}
					className='flex justify-center items-center h-20 w-44 mx-auto'
				>
					<a href={image.link} target='_blank' rel='noopener noreferrer'>
						<Image src={image.image} alt='' objectFit='contain' layout='fill' />
					</a>
				</motion.div>
			))}
		</AnimatePresence>
	);
};

export default Carousel;
