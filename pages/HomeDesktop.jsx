import React, { useState, useffect, useRef } from 'react';
import Banner from '/components/Banner/Banner.js';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/arrow@1x.png';
import group from '/public/microsoftteams-image@1x.png';

import { handleToggle, handleSlide } from '/components/Header/Navbar.jsx';

// IMPORT ITERATIVE MAPPING DATA
// import { linkText, vimeoHeroVideo } from './heroData';

import { IoPlayCircleOutline } from 'react-icons/io5';

function HomeDesktop() {
	return (
		<>
			<div className='flex justify-center items-center w-[100vw] '>
				<div className='flex flex-col w-full max-w-[1000px] gap-y-16 items-center'>
					<div className='flex relative justify-center w-full h-[836px] gap-x-16'>
						<div className='flex flex-col items-start w-full h-full'>
							<div className='flex w-full relative '>
								<div className='relative flex justify-start h-[256px] w-[600px]'>
									<div className='absolute font-display font-extra-bold text-[#f8f8f8] mix-blend-overlay text-[114px] p-8 z-30'>
										<h1 className=''>
											WELCOME
											<br />
											<span className='font-kepler italic font-thin text-[1.1em] '>
												TO
											</span>
											<br />
											CELEBRATION
										</h1>
									</div>
									<div className='absolute font-display font-extra-bold text-[#070707] text-[114px] p-8 z-0'>
										<h1 className=''>
											WELCOME
											<br />
											<span className='font-kepler italic font-thin text-[1.1em] '>
												TO
											</span>
											<br />
											CELEBRATION
										</h1>
									</div>
								</div>
							</div>
							<div className='flex flex-col h-[900px] w-[526px] mt-[150px] z-40'>
								<div className='flex p-16'>
									<p className='font-display text-[25px] text-[#7c7c7c]'>
										We’re so glad you’re here! At Celebration Church, we
										prioritize Jesus’ mission to spread the gospel. We are a
										global house comprised of many rooms around the world, with
										headquarters residing in Jacksonville, Florida. We’d love to
										connect with you online or at a location near you!
									</p>
								</div>
								<div className='flex px-16 my-8 gap-x-4 z-40'>
									<div className='flex justify-start items-center '>
										<p className='font-display font-normal text-[19px]'>
											WATCH&nbsp;THE&nbsp;LATEST&nbsp;MESSAGE
										</p>
									</div>
									<div className='flex w-14 items-center'>
										<Image src={arrow} alt='' />
									</div>
								</div>
							</div>
						</div>
						<div className='absolute z-20 right-0'>
							<div className=''>
								<iframe
									className=''
									src='https://player.vimeo.com/video/744290982?h=26579d8c5a&controls=0&badge=0&autoplay=1&muted=1&loop=1&autopause=0&player_id=0&app_id=58479'
									frameBorder='0'
									width={470}
									height={836}
									placeholder={'blur'}
								></iframe>
							</div>
						</div>
					</div>
					{/* <div className='flex justify-center items-center w-full'>
						FINDALOCATION
					</div>
					<div className='flex justify-center items-center w-full'>GRACE</div>
					<div className='flex justify-center items-center w-full'>
						THERESAPLACE
					</div>
					<div className='flex justify-center items-center w-full'>
						WHATSNEW
					</div> */}
				</div>
			</div>
		</>
	);
}

export default HomeDesktop;
