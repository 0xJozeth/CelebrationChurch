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

function HomeTheresAPlace() {
	return (
		<div className='flex flex-col w-full '>
			<div className='relative flex justify-start w-full z-20 '>
				<div className='left-0 w-full'>
					<Image src={youngadults} alt='' />
				</div>
			</div>
			<div className='relative flex flex-col -mt-[125px]'>
				<div className='relative mt-10 flex items-center w-full h-[400px] '>
					<div className='flex flex-col items-end px-16 h-full w-full'>
						<div className='absolute mix-blend-overlay w-auto z-30'>
							<h2 className='font-display font-bold text-[88px] md:text-[112px] lg:text-[152px] xl:text-[192px] text-[#f8f8f8] '>
								THERE’S&nbsp;A
								<br />
								PLACE&nbsp;
								<span className='font-kepler italic font-thin text-[1.1em]'>
									FOR&nbsp;YOU
								</span>
							</h2>
						</div>
						<div className='absolute z-0'>
							<h2 className='font-display font-bold text-[88px] md:text-[112px] lg:text-[152px] xl:text-[192px]'>
								THERE’S&nbsp;A
								<br />
								PLACE&nbsp;
								<span className='font-kepler italic font-thin text-[1.1em]'>
									FOR&nbsp;YOU
								</span>
							</h2>
						</div>
					</div>
				</div>
				<div className='flex  justify-end px-16 cursor-pointer z-40 '>
					<Link href='ministries' passHref>
						<motion.div
							whileHover={{ scale: 1.1 }}
							className='flex justify-center items-center
									text-[22px] md:text-[24px] lg:text-[28px] xl:text-[36px]
									my-8 mr-32 gap-x-4'
						>
							<a className='font-display'>
								LEARN&nbsp;MORE&nbsp;ABOUT&nbsp;OUR&nbsp;MINISTRIES
							</a>
							<div className='flex w-20 items-center'>
								<Image src={arrow} alt='' />
							</div>
						</motion.div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default HomeTheresAPlace;
