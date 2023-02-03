import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Banner from '/components/Banner/Banner.js';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/arrow@1x.png';
import GroupImage from '/public/microsoftteams-image@1x.png';

import WeHaveAGrace from '../SectionWeHaveAGrace/WeHaveAGrace';
import youngadults from '/public/youngadults.png';
import TimAndJen from '/public/pastor-tim-and-jen-timberlake@1x.png';
import whatsnew from '/public/home-whatsnew@1x.png';

// IMPORT IMAGES
import followprayer from '/public/follow-prayer.png';
import followstage from '/public/follow-stage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
import HomeHero from './HomeHero.js';

function HomeMeetOurPastors() {
	return (
		<div className='flex h-[900px] w-full'>
			<div className='flex w-full relative'>
				<div className='relative flex justify-start p-16 h-full w-full '>
					<div
						className='absolute font-display font-extra-bold text-[#f8f8f8] mix-blend-overlay 
								text-[88px] md:text-[112px] lg:text-[152px] xl:text-[192px]  
								p-8 z-30'
					>
						<h1 className=''>
							MEET&nbsp;OUR
							<br />
							<span className='font-kepler italic font-thin text-[1.1em] '>
								PASTORS
							</span>
						</h1>
					</div>
					<div
						className='absolute font-display font-extra-bold text-[#070707] 
								text-[88px] md:text-[112px] lg:text-[152px] xl:text-[192px] 
								 p-8 z-0'
					>
						<h1 className=''>
							MEET&nbsp;OUR
							<br />
							<span className='font-kepler italic font-thin text-[1.1em] '>
								PASTORS
							</span>
						</h1>
					</div>
					<div
						className='relative 
								top-[450px] md:top-[250px] lg:top-[350px] xl:top-[450px]
								 h-min w-full flex items-center p-8'
					>
						<p className='font-display text-[12px] md:text-[24px] lg:text-[24px] xl:text-[24px] leading-relaxed w-full text-[#7c7c7c]'>
							<strong>
								Tim and Jen Timberlake serve as the Senior Pastors of
								Celebration Church in Jacksonville, Florida.
							</strong>{' '}
							<br />
							<br />
							Pastors Tim and Jen have a heart for God’s people and equipping
							them with the tools to transform their lives from the inside out.
							They feel most alive when they are pouring back into others, and
							they seek to glorify God through their lives and family.
						</p>
					</div>
				</div>
			</div>
			<div className='relative top-[100px] flex flex-col w-full min-w-[400px]'>
				<div className='absolute left-0 w-[844px] z-20'>
					<Image src={TimAndJen} alt='' />
				</div>
			</div>
		</div>
	);
}

export default HomeMeetOurPastors;
