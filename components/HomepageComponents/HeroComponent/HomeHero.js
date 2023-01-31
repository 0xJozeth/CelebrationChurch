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

function HomeHero() {
	const [isMuted, setIsMuted] = useState(false);

	const handleIsMuted = () => {
		setIsMuted(!isMuted);
	};

	const followData = [
		{
			imageLeft: followstage,
			imageRight: followprayer,
			width: 825,
			height: 634,
		},
	];

	//Link/Image/Mouse hover function
	const [isHovered, setIsHovered] = useState(false);
	const [cursorX, setCursorX] = useState(0);
	const [cursorY, setCursorY] = useState(0);

	const handleMouseMove = (event) => {
		setCursorX(event.pageX);
		setCursorY(event.pageY);
	};

	// Create an animation
	const controls = useAnimation();

	useEffect(() => {
		// Start the animation once the component has mounted
		controls.start({
			x: 0,
			transition: { duration: 1.5 },
		});
	}, [controls]);

	return (
		<>
			<div className='flex relative '>
				<div className='flex relative justify-between mx-auto'>
					<div className='flex relative'>
						<div className='flex-col relative'>
							<div className='absolute top-0 font-display font-extra-bold text-[#f8f8f8] mix-blend-overlay text-[88px] md:text-[212px] p-8 z-30'>
								<h1>
									WELCOME
									<br />
									<span className='font-kepler italic font-thin text-[1.1em] '>
										TO
									</span>
									<br />
									CELEBRATION
								</h1>
							</div>
							<div className='absolute top-0 font-display font-extra-bold text-[#070707] text-[88px] md:text-[212px] p-8 z-0'>
								<h1>
									WELCOME
									<br />
									<span className='font-kepler italic font-thin text-[1.1em] '>
										TO
									</span>
									<br />
									CELEBRATION
								</h1>
							</div>
							<div className='flex flex-col relative top-1/2 p-16 max-w-3xl'>
								<p className='font-display md:text-[24px] lg:text-[24px] leading-relaxed text-[#7C7C7C]'>
									We’re so glad you’re here! At Celebration Church, we
									prioritize Jesus’ mission to spread the gospel. We are a
									global house comprised of many rooms around the world, with
									headquarters residing in Jacksonville, Florida. We’d love to
									connect with you online or at a location near you!
								</p>

								<motion.div
									whileHover={{ scale: 1.1 }}
									className='flex justify-center my-8 z-40 w-max'
								>
									<a
										href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center gap-x-4  mt-20'
									>
										<div className='flex justify-end items-center '>
											<p className='font-display font-normal text-[28px]'>
												WATCH&nbsp;THE LATEST&nbsp;MESSAGE
											</p>
										</div>
										<div>
											<div className='flex w-14 min-w-[56px] items-center'>
												<Image src={arrow} alt='' />
											</div>
										</div>
									</a>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						animate={controls}
						initial={{ x: '100%' }}
						onClick={handleIsMuted}
						className='flex w-[860px] relative right-0 z-20'
					>
						<div className='relative w-full h-full'>
							<video
								src='/heroVideo-comp.webm'
								autoPlay
								loop
								muted={isMuted ? false : true}
								style={{ width: '100%', height: '100%' }}
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default HomeHero;
