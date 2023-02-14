import React, { useState, useffect, useRef, useEffect } from 'react';
import Banner from '/components/Banner/Banner.js';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/arrow@1x.png';
import group from '/public/microsoftteams-image@1x.png';

// IMPORT ITERATIVE MAPPING DATA
import { linkText, vimeoHeroVideo } from './heroData';

import WeHaveAGrace from '../SectionWeHaveAGrace/WeHaveAGrace';
import ministries from '/public/ministries-homepage@1x.png';
import hug from '/public/place-hug.png';
import TimAndJen from '/public/pastor-tim-and-jen-timberlake@1x.png';
import youngadults from '/public/youngadults.png';
import followprayer from '/public/follow-prayer.png';
import followstage from '/public/follow-stage.png';
import { faCross, faPrayingHands } from '@fortawesome/free-solid-svg-icons';

import longArrow from '/public/arrow-long.svg';

import whatsnew from '/public/home-whatsnew@1x.png';

import { IoPlayCircleOutline } from 'react-icons/io5';
import { motion, useAnimation } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeroMobile() {
	const [isMuted, setIsMuted] = useState(false);

	// Create an animation
	const linkText = useAnimation();
	const playArrow = useAnimation();
	const controls = useAnimation();
	const textControls = useAnimation();

	const handleIsMuted = () => {
		setIsMuted(!isMuted);
	};

	useEffect(() => {
		// Start the animation once the component has mounted
		playArrow.start({
			opacity: '100%',
			transition: { duration: 1.75, delay: 2, type: 'easeInOut' },
		});
		controls.start({
			y: 0,
			opacity: '100%',
			transition: { duration: 1.75, type: 'easeInOut' },
		});
		textControls.start({
			y: 0,
			opacity: '100%',
			transition: { duration: 1.75, delay: 1, type: 'easeInOut' },
		});
		linkText.start({
			x: 0,
			opacity: '100%',
			transition: { duration: 1.75, delay: 2.25, type: 'easeInOut' },
		});
	}, [linkText, playArrow, controls, textControls]);

	const followData = [
		{
			imageLeft: followstage,
			imageRight: followprayer,
			width: 825,
			height: 634,
		},
	];

	return (
		<>
			<div
				className='flex flex-col items-center
						  w-[100vw] gap-y-4 mx-auto'
			>
				<div className='flex flex-col relative justify-center items-center max-w-[355px] w-full'>
					<div className='flex justify-center items-center max-w-[355px] w-screen'>
						<div className='playButtton absolute flex justify-center items-center top-[180px]  mix-blend-overlay z-40'>
							<motion.div animate={playArrow} initial={{ opacity: '0' }}>
								<a
									href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
									target='_blank'
									rel='noopener noreferrer'
								>
									<IoPlayCircleOutline
										className='z-100 cursor-pointer text-[#f8f8f8]'
										size={100}
									/>
								</a>
							</motion.div>
						</div>
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
							<motion.div
								animate={controls}
								initial={{ y: '35%', opacity: '0' }}
								style={{
									top: '-38px',
									margin: 'auto',
									zIndex: '20',
									position: 'relative',
								}}
							>
								<iframe
									src='https://player.vimeo.com/video/744290982?h=26579d8c5a&controls=0&badge=0&autoplay=1&muted=1&loop=1&autopause=0&player_id=0&app_id=58479'
									width={355}
									height={748}
									placeholder={'blur'}
									priority
								></iframe>
							</motion.div>
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
				</div>
				<div className='flex flex-col p-4 bg-[#f8f8f8] mt-[-225px] h-full z-30 justify-center items-center'>
					<div className='flex justify-center pt-4'>
						<motion.p
							animate={textControls}
							initial={{ y: '35%', opacity: '0' }}
							className=' font-display text-[16px] lg:text-4xl text-[#7C7C7C] max-w-[355px] z-10 leading-6 text-justify'
						>
							We’re so glad you’re here!&nbsp;
							<strong>
								At Celebration Church, we prioritize Jesus’ mission to spread
								the gospel.
								<br />
								<br />
								We are a global house comprised of many rooms around the world,
								with headquarters residing in Jacksonville, Florida.
							</strong>{' '}
							We’d love to connect with you online or at a location near you!
						</motion.p>
					</div>
					<motion.div
						animate={linkText}
						initial={{ x: '-15vw', opacity: 0 }}
						className='block my-4 lg:hidden w-full'
					>
						<a
							href='https://www.youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I '
							target='_blank'
							rel='noopener noreferrer'
						>
							<button className='flex py-4 justify-start items-center font-display text-[19px] cursor-pointer z-10 col-span-2 w-full whitespace-nowrap '>
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
						</a>
					</motion.div>
				</div>

				<div className='flex flex-col p-4 w-full'>
					<div className='relative flex flex-col w-full h-[350px]'>
						<div className='relative -top-10 left-0 right-0 flex font-bold font-display text-[56px] justify-end text-[#f8f8f8] mix-blend-overlay z-30'>
							<h2 className=''>
								FIND A&nbsp;
								<br />
								<span className='font-kepler italic font-[38px]'>LOCATION</span>
								&nbsp;
								<br />
								NEAR YOU
							</h2>
						</div>
						<div className='absolute -top-10 left-0 right-0 flex font-bold font-display text-[56px] justify-end z-20'>
							<h2 className=''>
								FIND A&nbsp;
								<br />
								<span className='font-kepler italic font-[38px]'>LOCATION</span>
								&nbsp;
								<br />
								NEAR YOU
							</h2>
						</div>
						<div className='relative -top-[80px] flex flex-col z-20 w-full  '>
							<div className='flex justify-center max-w-[226px] h-auto '>
								<Image src={group} alt='' />
							</div>
							<div className='flex my-4 px-4 justify-end'>
								<Link href='visit'>
									<button className='flex items-center cursor-pointer z-10'>
										<p className='font-display text-[19px] font-medium'>
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
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='relative -top-[25px] flex w-full max-w-[355px]'>
					<WeHaveAGrace />
				</div>
				<div className='relative flex flex-col justify-between p-4 w-full max-w-[355px] h-[400px] '>
					<div className='flex flex-col relative '>
						<div className='flex justify-center items-center z-10 relative -top-12'>
							<Image src={hug} alt='' />
						</div>
						<div className='flex justify-center'>
							<div className='absolute top-[150px] mix-blend-color-dodge text-[#f8f8f8] max-w-min justify-center z-30'>
								<h1 className='font-display font-bold text-[56px]'>
									THERE’S
									<br />
									A&nbsp;PLACE
									<br />
									<span className='font-kepler italic text-[1.1em] font-light'>
										FOR YOU
									</span>
								</h1>
							</div>
							<div className='absolute top-[150px] max-w-min z-0 '>
								<h1 className='flex flex-col items-center justify-center font-display font-bold text-[56px] '>
									THERE’S
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
					<div className='flex w-full p-2 mt-8 cursor-pointer z-40 '>
						<Link href='ministries' passHref>
							<motion.div
								whileHover={{ scale: 1.1 }}
								className='flex relative top-4 justify-end w-full gap-x-4'
							>
								<div className='flex'>
									<a className='font-display text-[19px]'>
										LEARN MORE ABOUT
										<br />
										OUR MINISTRIES
									</a>
								</div>
								<div className='flex w-16 items-center '>
									<Image src={arrow} alt='' />
								</div>
							</motion.div>
						</Link>
					</div>
				</div>

				<div className='flex flex-col max-w-[355px] my-8'>
					<div className='relative flex flex-col '>
						<div className='absolute top-0 left-0 pl-4 flex font-bold font-display text-[56px] justify-end text-[#f8f8f8] mix-blend-overlay z-30'>
							<h2 className=''>
								MEET&nbsp;OUR
								<br />
								<span className='font-kepler italic font-thin text-[1.1em] '>
									PASTORS
								</span>
							</h2>
						</div>
						<div className='absolute top-0 left-0 pl-4 flex font-bold font-display text-[56px] justify-end z-20'>
							<h2 className=''>
								MEET&nbsp;OUR
								<br />
								<span className='font-kepler italic font-thin text-[1.1em] '>
									PASTORS
								</span>
							</h2>
						</div>
						<div className='flex justify-end items-center mt-16 z-20'>
							<div className='w-[268px] h-auto mt-6'>
								<Image src={TimAndJen} alt='' />
							</div>
						</div>
						<div className='flex w-full mx-auto pt-8'>
							<p className=' font-display text-[16px] lg:text-4xl text-[#7C7C7C] max-w-[355px] lg:max-w-2xl z-10 leading-6 text-justify'>
								<strong>
									Tim and Jen Timberlake serve as the Senior Pastors of
									Celebration Church in Jacksonville, Florida.
								</strong>{' '}
								<br />
								<br />
								Pastors Tim and Jen have a heart for God’s people and equipping
								them with the tools to transform their lives from the inside
								out. They feel most alive when they are pouring back into
								others, and they seek to glorify God through their lives and
								family.
							</p>
						</div>
					</div>
				</div>

				{/* <div className='flex justify-center items-center w-full min-w-full'>
					<div className='flex min-w-[355px] justify-center items-center my-4 '>
						<Link href={'follow-jesus'}>
							<button className='flex w-full items-center border-2 border-solid border-[#070707] gap-x-4 p-4 mx-8'>
								<div className='flex justify-center w-min'>
									<a className='font-display text-[20px] md:text-[56px] lg:text-[64px] xl:text-[88px] '>
										FOLLOW&nbsp;JESUS
									</a>
								</div>
								<div className='flex justify-center w-28'>
									<Image src={longArrow} alt='' />
								</div>
							</button>
						</Link>
					</div>
				</div> */}

				{/* PRAYER REQUEST SECTION */}
				<div className='flex bg-[#080808] h-[645px] w-full max-w-[355px] justify-between items-center'>
					{followData.map((follow, index) => (
						<div
							key={index}
							className='flex flex-col w-full m-16 justify-between items-center gap-16 mx-auto'
						>
							<div className='flex group relative justify-center items-center'>
								<button className='absolute justify-center items-center z-20 '>
									<Link href='follow-jesus' passHref>
										<div className='flex flex-col relative group my-auto nx-auto'>
											<div className='text-white text-[24px] py-2'>
												<FontAwesomeIcon icon={faCross} className='z-50' />
											</div>
											<div className='transition-all'>
												<a className='font-display text-white text-[34px]'>
													I WANT TO
													<br />
													FOLLOW
													<br />
													JESUS
													<br />
												</a>
											</div>
											{/* <div className='justify-center opacity-0 group-hover:opacity-100 transition-all w-full'>
												<Image src={arrow} alt='arrow' className='invert' />
											</div> */}
										</div>
									</Link>
								</button>
								<Link href='/follow-jesus' passHref>
									<button className='p-16 w-[316px] h-[273px] relative flex justify-center items-center border-2 border-white transition-all'>
										<Image
											src={follow.imageLeft}
											alt='prayer request button'
											className='w-full h-full saturate-[100%] opacity-75 transition-all border-2 border-white'
											layout='fill'
											objectFit='cover'
										/>
									</button>
								</Link>
							</div>
							<div className='flex relative group justify-center items-center'>
								<button className='absolute justify-center items-center z-50'>
									<div className='relative group'>
										<div className='text-white text-[24px] py-2'>
											<FontAwesomeIcon icon={faPrayingHands} className='z-50' />
										</div>
										<div className='flex flex-col relative group my-auto nx-auto'>
											<a
												href='https://my.celebration.org/portal/get_form.aspx?ID=6bc5f420-26f8-41f1-8149-9344dd2676e6&template=campus-jax&remembertemplate=true'
												target='_blank'
												rel='noopener noreferrer'
												className='font-display  text-white text-[34px]'
											>
												SUBMIT A<br />
												PRAYER
												<br />
												REQUEST
												<br />
											</a>
										</div>
										{/* <div className='justify-center opacity-0 group-hover:opacity-100 transition-all w-8'>
											<Image src={arrow} alt='arrow' className='invert' />
										</div> */}
									</div>
								</button>
								<button className='p-16 w-[316px] h-[243px] relative flex justify-center items-center border-2 border-white opacity-50 transition-all'>
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
											className='saturate-[100%] opacity-75 transition-all'
										/>
									</a>
								</button>
							</div>
						</div>
					))}
				</div>

				<div className='relative flex flex-col mt-8 max-w-[316px] h-[500px]'>
					<div className='flex flex-col'>
						<div className='flex flex-col justify-center items-center'>
							<div className='absolute top-[-20px] mix-blend-overlay text-[#f8f8f8] max-w-min justify-center z-30'>
								<h1 className='font-display font-bold text-[50px]'>
									WHATS&nbsp;
									<span className='font-kepler italic text-[1.1em] font-light'>
										NEW
									</span>
								</h1>
							</div>
							<div className='absolute top-[-20px] max-w-min z-0 '>
								<h1 className='flex items-center justify-center font-display font-bold text-[50px] '>
									WHATS&nbsp;
									<span className=' font-kepler italic text-[1.1em] font-light'>
										NEW
									</span>
								</h1>
							</div>
							<div className='items-center w-[243px] mt-4 mb-2'>
								<Image src={whatsnew} alt='' />
							</div>
							<div className='flex flex-col my-4 justify-center items-start'>
								<ul className='flex flex-col justify-center items-start w-full gap-y-4 uppercase font-display text-[19px]'>
									<li className='flex py-4 gap-x-2 items-center'>
										<a
											href='https://celebration.brushfire.com/futureconference2023/535257'
											target='blank'
											rel='noreferrer'
											className='whitespace-nowrap'
										>
											FUTURE&nbsp;CONFERENCE 2023
										</a>
										<div className='flex mx-auto h-6 w-14'>
											<Image src={arrow} alt='watch-the-latest-message' />
										</div>
									</li>

									<li className='flex py-4 gap-x-2 items-center'>
										<a
											href='https://celebration.brushfire.com/sisterhoodtwenty23/543024'
											target='blank'
											rel='noreferrer'
										>
											SISTERHOOD TWENTY23&nbsp;
										</a>
										<div className='flex mx-auto h-6 w-14'>
											<Image src={arrow} alt='watch-the-latest-message' />
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroMobile;
