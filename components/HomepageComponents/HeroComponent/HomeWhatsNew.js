import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/arrow@1x.png';
import whatsnew from '/public/home-whatsnew@1x.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
import followprayer from '/public/follow-prayer.png';
import followstage from '/public/follow-stage.png';

function HomeWhatsNew() {
	return (
		<div className='flex h-[900px] w-full mt-[100px]'>
			<div className='flex w-full relative'>
				<div className='relative flex justify-start p-16 h-full w-full '>
					<div
						className='absolute font-display font-extra-bold text-[#f8f8f8] mix-blend-overlay 
								text-[88px] md:text-[112px] lg:text-[152px] xl:text-[192px]  
								p-8 z-30'
					>
						<h1 className=''>
							WHAT’S&nbsp;
							<span className='font-kepler italic font-thin text-[1.1em] '>
								NEW
							</span>
						</h1>
					</div>
					<div
						className='absolute font-display font-extra-bold text-[#070707] 
								text-[88px] md:text-[112px] lg:text-[152px] xl:text-[192px] 
								 p-8 z-0'
					>
						<h1 className=''>
							WHAT’S&nbsp;
							<span className='font-kepler italic font-thin text-[1.1em] '>
								NEW
							</span>
						</h1>
					</div>
					<div
						className='relative 
								top-[100px] md:top-[175px] lg:top-[175px] xl:top-[250px]
								 h-min w-full flex items-center p-16'
					>
						<div className='font-display text-[38px] w-full text-green-400'>
							<div className='flex flex-col gap-y-24'>
								<div className='cursor-pointer'>
									<li className='flex gap-x-4'>
										<motion.a
											whileHover={{ scale: 1.1 }}
											href='https://celebration.brushfire.com/futureconference2023/535257'
											target='blank'
											rel='noreferrer'
										>
											FUTURE&nbsp;CONFERENCE 2023
										</motion.a>
										<div className='flex w-20 items-center'>
											<Image src={arrow} alt='' />
										</div>
									</li>
								</div>
								<div className='cursor-pointer'>
									<li className='flex gap-x-4'>
										<motion.a
											whileHover={{ scale: 1.1 }}
											href='https://celebration.brushfire.com/sisterhoodtwenty23/543024'
											target='blank'
											rel='noreferrer'
										>
											SISTERHOOD TWENTY23&nbsp;
										</motion.a>
										<div className='flex w-20 items-center'>
											<Image src={arrow} alt='' />
										</div>
									</li>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='relative flex flex-col w-full min-w-[400px]'>
				<div className='absolute left-0 w-[844px] z-20'>
					<Image src={whatsnew} alt='' />
				</div>
			</div>
		</div>
	);
}

export default HomeWhatsNew;
