import React, { useState, useffect, useRef } from 'react';
import Banner from '/components/Banner/Banner.js';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/arrow@1x.png';

// IMPORT ITERATIVE MAPPING DATA
import { linkText, vimeoHeroVideo } from './heroData';

function HeroTW() {
	return (
		<>
			<div className='lg:grid grid-cols-2 grid-row lg:grid-rows-2'>
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
								priority
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
							priority
						></iframe>
					))}
				</div>
			</div>
		</>
	);
}

export default HeroTW;
