import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import arrow from '/public/arrow@1x-white.svg';
import darkArrowRight from '/public/darkArrowRight.svg';
import arrowdown from '/public/arrow-down.svg';
import leftnav from '/public/navleft.svg';
import rightnav from '/public/navleft.svg';
import media from '/public/yourimpact.png';
import navigation from '/public/navigationbar-demo.svg';

import legacy from '/public/give-legacy.png';
import serve from '/public/serve.png';
import oneChild from '/public/oneChild.png';
import relief from '/public/DisasterReliefEfforts.png';

import { SiBitcoin } from 'react-icons/si';

import piggyBank from '/public/give-images/piggy-bank.svg';
import { MdOutlinePhoneAndroid } from 'react-icons/md';

import { motion } from 'framer-motion';
import GiveHero from '/public/give-hero.png';

import longArrow from '/public/arrow-long.svg';

import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
	faPiggyBank,
	faMobile,
	faMoneyBillTrendUp,
	faArrowCircleUp,
	faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//IMPORT FRAMER MOTION
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

//THIS IS THE ONLINE GIVING CARD CAROUSEL
export const CardCarousel = ({ cards }) => {
	return (
		<AnimateSharedLayout>
			<AnimatePresence>
				{cards.map((card, index) => (
					<motion.div
						key={card.id}
						className='card bg-red-100'
						initial={{ x: index * 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -index * 100, opacity: 0 }}
						transition={{ duration: 0.6, ease: 'easeInOut' }}
						layout
					>
						<h3>{card.title}</h3>
						<p>{card.content}</p>
						<Image
							src={serve}
							alt='card-image'
							objectFit='contain'
							layout='fill'
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</AnimateSharedLayout>
	);
};
