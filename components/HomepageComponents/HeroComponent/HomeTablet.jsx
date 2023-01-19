import React, { useState, useffect, useRef } from 'react';
import Banner from '/components/Banner/Banner.js';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/arrow@1x.png';
import group from '/public/microsoftteams-image@1x.png';

// IMPORT ITERATIVE MAPPING DATA
import { linkText, vimeoHeroVideo } from './heroData';

import WeHaveAGrace from '../SectionWeHaveAGrace/WeHaveAGrace';
import ministries from '/public/ministries-homepage@1x.png';
import TimAndJen from '/public/pastor-tim-and-jen-timberlake@1x.png';
import longArrow from '/public/arrow-long.svg';

import whatsnew from '/public/home-whatsnew@1x.png';

import { IoPlayCircleOutline } from 'react-icons/io5';

function HomeTablet() {
	return (
		<>
			<div
				className='flex flex-col items-center place-items-center
						  w-[100vw] gap-y-8

				md:bg-purple-300
				lg:bg-green-300 lg:max-w-[1024px] lg:w-[1024px]
				xl:bg-red-300 xl:max-w-[1440px] xl:w-[1440px]'
			>
				<div className='flex flex-col'>
					<div className='flex-flex-col relative'>
						<div className='relative font-display font-bold text-[72px] text-[#f8f8f8] mix-blend-overlay z-30'>
							<h1 className=''>
								WELCOME&nbsp;
								<span className='font-kepler italic font-thin text-[1.1em] '>
									TO
								</span>
								<br />
								CELEBRATION
							</h1>
						</div>
						<div className='absolute top-0 left-0 font-display font-bold text-[72px]'>
							<h1 className=''>
								WELCOME&nbsp;
								<span className='font-kepler italic font-thin text-[1.1em] '>
									TO
								</span>
								<br />
								CELEBRATION
							</h1>
						</div>
					</div>
					<div className='z-20 -mt-[150px]'>
						<div
							className='
									md:w-[536px] md:h-[952px]
									lg:w-[756px] lg:h-[1343px]'
						>
							<iframe
								className='w-full h-full'
								src='https://player.vimeo.com/video/744290982?h=26579d8c5a&controls=0&badge=0&autoplay=1&muted=1&loop=1&autopause=0&player_id=0&app_id=58479'
								frameBorder='0'
								placeholder={'blur'}
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HomeTablet;
