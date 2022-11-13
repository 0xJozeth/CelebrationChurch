import React, { useState, useffect, useRef } from 'react';
import Banner from '/components/Banner/Banner.js';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/arrow@1x.png';
import group from '/public/microsoftteams-image@1x.png';

import { handleToggle, handleSlide } from '/components/Header/Navbar.jsx';

// IMPORT ITERATIVE MAPPING DATA
import { linkText, vimeoHeroVideo } from './heroData';

import WeHaveAGrace from '../SectionWeHaveAGrace/WeHaveAGrace';
import ministries from '/public/ministries-homepage@1x.png';

function HeroTW() {
	return (
		<>
			<div className='flex flex-col w-[355px] max-w-[355px] mx-auto gap-y-8'>
				<div className='flex relative justify-center items-center'>
					<div className='absolute top-0 left-0 right-0 z-30 mix-blend-overlay text-[#f8f8f8] max-w-min mx-auto'>
						<h1 className='font-display font-bold text-[44px]'>
							WELCOME&nbsp;
							<span className='font-kepler italic text-[1.1em] font-light'>
								TO
							</span>
							&nbsp;
							<br />
							CELEBRATION
						</h1>
					</div>

					<a
						href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
						alt=''
					>
						<div className='relative z-20'>
							<iframe
								className='bg-green-500 mt-8'
								src='https://player.vimeo.com/video/744290982?h=26579d8c5a&controls=0&badge=0&autoplay=1&muted=1&loop=1&autopause=0&player_id=0&app_id=58479'
								frameBorder='0'
								width={355}
								height={631}
								placeholder={'blur'}
							></iframe>
							<div className='playButtton '></div>
						</div>
					</a>

					<div className='absolute top-0 left-0 right-0 z-0 max-w-min mx-auto '>
						<h1 className='font-display font-bold text-[44px]'>
							WELCOME&nbsp;
							<span className=' font-kepler italic text-[1.1em] font-light'>
								TO
							</span>
							&nbsp;
							<br />
							CELEBRATION
						</h1>
					</div>
				</div>

				<div className='flex flex-col py-4'>
					<div className='flex lg:hidden place-self-center'>
						<p className=' font-display text-[18px] lg:text-4xl text-[#7C7C7C] px-4 max-w-[355px] lg:max-w-2xl z-10'>
							We’re so glad you’re here! At <strong>Celebration Church</strong>,
							we prioritize Jesus’ mission to spread the gospel. We are a global
							house comprised of many rooms around the world, with headquarters
							residing in Jacksonville, Florida. We’d love to connect with you
							online or at a location near you!
						</p>
					</div>
					<div className='block my-4 lg:hidden bg-red-400 mx-w-[355px]'>
						<button className='flex mx-auto py-4 items-center font-display text-[16px] font-medium cursor-pointer z-10 lg:text-[1.5vw] col-span-2 place-self-center'>
							WATCH THE LATEST MESSAGE
							<div className='flex mx-4 h-6 w-14'>
								<Image
									src={arrow}
									// height={22}
									// width={50}
									alt='watch-the-latest-message'
								/>
							</div>
						</button>
					</div>
				</div>

				<div className='flex flex-col max-w-[355px] my-8'>
					<div className='relative flex flex-col '>
						<div className='absolute top-0 left-0 right-0 flex font-bold font-display text-[44px] justify-end text-[#f8f8f8] mix-blend-overlay z-30'>
							<h2 className=''>
								FIND A&nbsp;
								<br />
								<span className='font-kepler italic font-[38px]'>LOCATION</span>
								&nbsp;
								<br />
								NEAR YOU
							</h2>
						</div>
						<div className='absolute top-0 left-0 right-0 flex font-bold font-display text-[44px] justify-end z-20'>
							<h2 className=''>
								FIND A&nbsp;
								<br />
								<span className='font-kepler italic font-[38px]'>LOCATION</span>
								&nbsp;
								<br />
								NEAR YOU
							</h2>
						</div>
						<div className='flex justify-start items-center mt-16 z-20'>
							<div className='w-[268px] h-auto'>
								<Image src={group} alt='' />
							</div>
						</div>
					</div>
					<div className='flex my-4 px-4 justify-end'>
						<button className='flex items-center cursor-pointer z-10'>
							<p className='font-display text-[16px] font-medium'>
								COME VISIT US
							</p>
							<div className='flex mx-4 h-6 w-14'>
								<Image
									src={arrow}
									// height={22}
									// width={50}
									alt='watch-the-latest-message'
								/>
							</div>
						</button>
					</div>
				</div>

				<div className='max-w-[355px] bg-blue-500'>
					<WeHaveAGrace />
				</div>

				<div className='relative flex flex-col max-w-[355px] h-[300px] bg-red-300'>
					<div className='flex flex-col'>
						<div className='w-[355px] items-center z-10'>
							<Image src={ministries} alt='' />
						</div>
						<div className='flex justify-center'>
							<div className='absolute top-[160px] mix-blend-overlay text-[#f8f8f8] max-w-min justify-center z-30 '>
								<h1 className='font-display font-bold text-[44px]'>
									THERES
									<br />
									A&nbsp;PLACE
									<br />
									<span className='font-kepler italic text-[1.1em] font-light'>
										FOR YOU
									</span>
								</h1>
							</div>
							<div className='absolute top-[160px] max-w-min z-0 '>
								<h1 className='flex flex-col items-center justify-center font-display font-bold text-[44px] '>
									THERES
									<br />
									A&nbsp;PLACE
									<br />
									<span className=' font-kepler italic text-[1.1em] font-light'>
										FOR YOU
									</span>
								</h1>
							</div>
						</div>
					</div>
				</div>

				<div className='max-w-[200px] h-[300px] bg-green-400'></div>
			</div>

			<div className=' hidden lg:grid grid-cols-2 grid-row lg:grid-rows-2 '>
				<div className='flex flex-col items-center lg:justify-evenly lg:items-start lg:col-span-2 lg:col-start-1 lg:row-start-1 max-w-[1536px]'>
					<div className='flex flex-col mx-4 text-[3.15rem] font-display font-black'>
						<div className='lg:hidden relative'>
							<h1 className='z-[1] lg:text-[12vw]'>
								WELCOME&nbsp;
								<span className='font-kepler italic text-[3.425rem] font-light lg:text-[13.25vw]'>
									TO
								</span>
								&nbsp;
								<br />
								CELEBRATION
							</h1>
							<h1 className='lg:hidden absolute mix-blend-overlay text-[#f8f8f8] z-[3] lg:items-start lg:text-[12vw] top-0'>
								WELCOME&nbsp;
								<span className='font-kepler italic text-[3.425rem] font-light lg:text-[13.25vw]'>
									TO
								</span>
								&nbsp;
								<br />
								CELEBRATION
							</h1>
						</div>
						<div className='hidden lg:flex'>
							<h1 className='relative mix-blend-overlay text-[#f8f8f8] z-[3] lg:items-start lg:text-[12vw]'>
								{/* WELCOME&nbsp;
								<br />
								<span className='font-kepler italic text-[3.425rem] font-light lg:text-[13.25vw]'>
									TO
								</span>
								&nbsp;
								<br />
								CELEBRATION */}
								<Banner />
							</h1>
							<h1 className='absolute z-[1] lg:text-[12vw]'>
								{/* WELCOME&nbsp;
								<br />
								<span className='font-kepler italic text-[3.425rem] font-light lg:text-[13.25vw]'>
									TO
								</span>
								&nbsp;
								<br />
								CELEBRATION */}
								<Banner />
							</h1>
						</div>

						<div className='flex justify-center -mt-8 z-[2] items-end lg:hidden'>
							<iframe
								src='https://player.vimeo.com/video/744290982?h=26579d8c5a&controls=0&badge=0&autoplay=1&muted=1&loop=1&autopause=0&player_id=0&app_id=58479'
								frameBorder='0'
								width={375}
								height={667}
								placeholder={'blur'}
							></iframe>
						</div>
					</div>
					<div className='flex lg:hidden place-self-center'>
						<p className='my-4 mx-4 font-display text-xl lg:text-4xl text-[#7C7C7C] min-w-[360px] max-w-[420px] lg:max-w-2xl z-10'>
							We’re so glad you’re here! At <strong>Celebration Church</strong>,
							we prioritize Jesus’ mission to spread the gospel. We are a global
							house comprised of many rooms around the world, with headquarters
							residing in Jacksonville, Florida. We’d love to connect with you
							online or at a location near you!
						</p>
					</div>
					<div className='block lg:hidden'>
						<button className='flex my-4 mx-4 font-display text-lg font-semibold cursor-pointer z-10 lg:text-[1.5vw] col-span-2 place-self-center'>
							WATCH THE LATEST MESSAGE
							<div className='flex mx-4 h-6 w-14'>
								<Image
									src={arrow}
									// height={22}
									// width={50}
									alt='watch-the-latest-message'
								/>
							</div>
						</button>
					</div>
				</div>

				<div className='hidden lg:flex lg:flex-col col-start-1 lg:w-full place-self-center items-center lg:items-start'>
					<p className=' font-display lg:mx-20 lg:py-12 text-xl lg:text-4xl text-[#7C7C7C] min-w-[360px] max-w-[420px] lg:min-w-[75%] z-10 justify-center items-center'>
						We’re so glad you’re here! At <strong>Celebration Church</strong>,
						we prioritize Jesus’ mission to spread the gospel. We are a global
						house comprised of many rooms around the world, with headquarters
						residing in Jacksonville, Florida. We’d love to connect with you
						online or at a location near you!
					</p>
					{linkText.map((linkText) => (
						<button
							className='flex lg:my-28 font-display text-lg lg:min-w-[75%] font-semibold tracking-wider cursor-pointer z-10 lg:text-[32px] col-span-2 place-self-center'
							key={linkText}
						>
							<Link
								href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
								passHref
							>
								{linkText}
							</Link>
							<Link
								href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
								passHref
							>
								<div className='flex mx-4 place-self-center'>
									<Image
										src={arrow}
										height={22}
										width={50}
										alt='watch-the-latest-message'
									/>
								</div>
							</Link>
						</button>
					))}
				</div>

				<div className='hidden lg:flex z-[2] row-start-1 row-end-3 col-start-2 relative w-[940px] lg:justify-start lg:items-start'>
					{vimeoHeroVideo.map((vimeoHeroVideo) => (
						<iframe
							key={vimeoHeroVideo}
							className='w-full h-full absolute top-0 left-0 right-0'
							src={vimeoHeroVideo}
							frameBorder='0'
							placeholder={'blur'}
						></iframe>
					))}
				</div>
			</div>
		</>
	);
}

export default HeroTW;
