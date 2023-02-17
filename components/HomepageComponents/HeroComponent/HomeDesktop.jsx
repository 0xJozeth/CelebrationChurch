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

function HomeDesktop() {
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
			opacity: '100%',
			transition: { duration: 1.75, ease: 'easeInOut' },
		});
	}, [controls]);

	return (
		<>
			<div className='flex justify-center items-center w-[100vw]'>
				<div className='flex flex-col w-full max-w-[1728px] gap-y-16 items-center'>
					<div className='grid grid-cols-2 overflow-hidden '>
						<div className='relative w-full'>
							<div className='relative top-0 left-0 font-display font-extra-bold text-[#f8f8f8] mix-blend-overlay text-[88px] md:text-[112px] lg:text-[152px] xl:text-[226px]  p-8 z-30'>
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
							<div className='absolute top-0 left-0 font-display font-extra-bold text-[#070707] text-[88px] md:text-[112px] lg:text-[152px] xl:text-[226px] p-8 z-0'>
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
							<div className='flex p-16'>
								<p className='font-display md:text-[24px] lg:text-[24px] leading-relaxed text-[#7C7C7C]'>
									We’re so glad you’re here! At Celebration Church, we
									prioritize Jesus’ mission to spread the gospel. We are a
									global house comprised of many rooms around the world, with
									headquarters residing in Jacksonville, Florida. We’d love to
									connect with you online or at a location near you!
								</p>
							</div>
							<motion.div
								whileHover={{ scale: 1.1 }}
								className='flex justify-start w-max ml-16 my-8 gap-x-4 z-40'
							>
								<a
									href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-x-4 '
								>
									<div className='flex justify-end items-center'>
										<p className='font-display font-normal text-[36px]'>
											WATCH&nbsp;THE LATEST&nbsp;MESSAGE
										</p>
									</div>
									<div className=''>
										<div className='flex w-14 min-w-[56px] items-center'>
											<Image src={arrow} alt='' />
										</div>
									</div>
								</a>
							</motion.div>
						</div>
						<motion.div
							animate={controls}
							initial={{ opacity: '50%', x: '15vw' }}
							onClick={handleIsMuted}
							className='relative z-20'
						>
							<div className='relative top-0 left-0 w-full h-full'>
								<iframe
									className='absolute top-0 left-0 w-full h-full'
									src='https://player.vimeo.com/video/799170954?h=67d0cf9e15&controls=0&amp;badge=0&amp;autopause=0&amp;autoplay=1&muted=1&loop=1&autopause=0&player_id=0&amp;app_id=58479'
									placeholder={'blur'}
									priority
								></iframe>
								{/* <video
									autoPlay
									loop
									muted
									playsinline
									style={{ width: '756px', height: '1343px' }}
								>
									<source src='/heroVideo-comp.webm'></source>
									<source src='/heroVideo-comp-2.mp4'></source>
								</video> */}
							</div>
						</motion.div>
					</div>

					<div className='flex flex-col w-full h-[796px] '>
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

					<div className='flex justify-center items-center w-full'>
						<div>
							<WeHaveAGrace />
						</div>
					</div>

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
										Pastors Tim and Jen have a heart for God’s people and
										equipping them with the tools to transform their lives from
										the inside out. They feel most alive when they are pouring
										back into others, and they seek to glorify God through their
										lives and family.
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

					{/* PRAYER REQUEST SECTION */}
					<div className='flex bg-[#080808] h-[645px] w-full justify-between items-center'>
						{followData.map((follow, index) => (
							<div
								key={index}
								className='flex w-full px-8 justify-between items-center'
							>
								<div className='flex group relative justify-center items-center'>
									<button className='absolute justify-center items-center z-20 '>
										<Link href='follow-jesus' passHref>
											<div className='relative group'>
												<div className='text-white text-[44px] py-2'>
													<FontAwesomeIcon icon={faCross} className='z-50' />
												</div>
												<div className='my-2 group-hover:my-8 transition-all'>
													<a className='font-display text-white text-[44px]'>
														I WANT TO
														<br />
														FOLLOW
														<br />
														JESUS
														<br />
													</a>
												</div>
												<div className='justify-center opacity-0 group-hover:opacity-100 transition-all w-full'>
													<Image src={arrow} alt='arrow' className='invert' />
												</div>
											</div>
										</Link>
									</button>
									<Link href='/follow-jesus' passHref>
										<button className='p-16 w-[800px] h-[600px] relative flex justify-center items-center border-2 border-white opacity-50 group-hover:opacity-100 group-hover:-skew-y-[0.5deg] transition-all'>
											<Image
												src={follow.imageLeft}
												alt='prayer request button'
												className='w-full h-full saturate-0 opacity-20 group-hover:saturate-[85%] group-hover:opacity-75 group-hover:scale-[105%] group-hover:-skew-y-[0.5deg] transition-all border-2 border-white'
												layout='fill'
												objectFit='cover'
											/>
										</button>
									</Link>
								</div>
								<div className='flex relative group justify-center items-center'>
									<button className='absolute justify-center items-center z-50'>
										<div className='relative group'>
											<div className='text-white text-[44px] py-2'>
												<FontAwesomeIcon
													icon={faPrayingHands}
													className='z-50'
												/>
											</div>
											<div className='my-2 group-hover:my-8 transition-all'>
												<a
													href='https://my.celebration.org/portal/get_form.aspx?ID=6bc5f420-26f8-41f1-8149-9344dd2676e6&template=campus-jax&remembertemplate=true'
													target='_blank'
													rel='noopener noreferrer'
													className='font-display  text-white text-[44px]'
												>
													SUBMIT A<br />
													PRAYER
													<br />
													REQUEST
													<br />
												</a>
											</div>
											<div className='justify-center opacity-0 group-hover:opacity-100 transition-all w-full'>
												<Image src={arrow} alt='arrow' className='invert' />
											</div>
										</div>
									</button>
									<button className='p-16 w-[800px] h-[600px] relative flex justify-center items-center border-2 border-white opacity-50 group-hover:opacity-100 group-hover:skew-y-[0.5deg] transition-all'>
										<a
											href='https://my.celebration.org/portal/get_form.aspx?ID=6bc5f420-26f8-41f1-8149-9344dd2676e6&template=campus-jax&remembertemplate=true'
											target='_blank'
											rel='noreferrer'
										>
											<Image
												src={follow.imageRight}
												alt='prayer request button'
												// width={follow.width}
												// height={follow.height}
												layout='fill'
												objectFit='cover'
												className='saturate-0 opacity-20 group-hover:saturate-[85%] group-hover:opacity-75 group-hover:scale-[105%] group-hover:skew-y-[0.5deg] transition-all'
											/>
										</a>
									</button>
								</div>
							</div>
						))}
					</div>

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
											<motion.div
												whileHover={{ scale: 1.1 }}
												className='cursor-pointer'
											>
												<li className='flex gap-x-4'>
													<a
														href='https://celebration.brushfire.com/futureconference2023/535257'
														target='blank'
														rel='noreferrer'
														className='whitespace-nowrap'
													>
														FUTURE&nbsp;CONFERENCE 2023
													</a>
													<div className='flex w-20 items-center'>
														<Image src={arrow} alt='' />
													</div>
												</li>
											</motion.div>
											<motion.div
												whileHover={{ scale: 1.1 }}
												className='cursor-pointer'
											>
												<li className='flex gap-x-4'>
													<a
														href='https://celebration.brushfire.com/sisterhoodtwenty23/543024'
														target='blank'
														rel='noreferrer'
													>
														SISTERHOOD TWENTY23&nbsp;
													</a>
													<div className='flex w-20 items-center'>
														<Image src={arrow} alt='' />
													</div>
												</li>
											</motion.div>
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
				</div>
			</div>
		</>
	);
}

export default HomeDesktop;
