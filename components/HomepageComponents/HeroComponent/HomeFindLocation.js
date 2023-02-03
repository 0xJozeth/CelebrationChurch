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

function HomeFindLocation() {
	return (
		<div className='flex flex-col w-full h-[796px]'>
			<div className='flex justify-center w-full h-[698px] '>
				<div className='relative flex w-full'>
					<div className='absolute left-0 w-[844px] z-20'>
						<Image src={GroupImage} alt='' />
					</div>
					<div className='flex flex-col h-full w-full '>
						<div className='absolute top-[50px] right-0 pr-8 justify-end mix-blend-overlay w-auto z-30'>
							<h2 className='font-display font-bold text-[88px] md:text-[112px] lg:text-[152px] xl:text-[192px] text-[#f8f8f8] '>
								FIND&nbsp;A
								<br />
								<span className='font-kepler italic  font-thin text-[1.1em]'>
									LOCATION
								</span>
								<br />
								NEAR&nbsp;YOU
							</h2>
						</div>
						<div className='absolute top-[50px] right-0 pr-8 z-0'>
							<h2 className='font-display font-bold text-[88px] md:text-[112px] lg:text-[152px] xl:text-[192px]'>
								FIND&nbsp;A
								<br />
								<span className='font-kepler italic  font-thin text-[1.1em]'>
									LOCATION
								</span>
								<br />
								NEAR&nbsp;YOU
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className='flex  justify-end px-16 cursor-pointer z-40 '>
				<Link href='visit'>
					<motion.div
						whileHover={{ scale: 1.1 }}
						className='flex justify-center items-center 
								text-[22px] md:text-[24px] lg:text-[28px] xl:text-[36px]
								my-8 mr-32 gap-x-4'
					>
						<a className='font-display'>COME&nbsp;VISIT&nbsp;US</a>
						<div className='flex w-20 items-center'>
							<Image src={arrow} alt='' />
						</div>
					</motion.div>
				</Link>
			</div>
		</div>
	);
}

export default HomeFindLocation;
