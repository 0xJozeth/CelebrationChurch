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
import HomeFindLocation from './HomeFindLocation';
import HomeTheresAPlace from './HomeTheresAPlace';
import HomeMeetOurPastors from './HomeMeetOurPastors';
import HomeButtonSection from './HomeButtonSection';
import HomeWhatsNew from './HomeWhatsNew';

function HomeDesktop() {
	const [isMuted, setIsMuted] = useState(false);

	const handleIsMuted = () => {
		setIsMuted(!isMuted);
	};

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
			<section className='flex relative justify-center overflow-hidden mx-auto'>
				<HomeHero />
			</section>
			<section className='flex relative justify-center overflow-hidden mx-auto'>
				<HomeFindLocation />
			</section>
			<section className='flex relative justify-center overflow-hidden mx-auto'>
				<WeHaveAGrace />
			</section>
			<section className='flex relative justify-center overflow-hidden mx-auto'>
				<HomeTheresAPlace />
			</section>
			<section className='flex relative justify-center overflow-hidden mx-auto'>
				<HomeMeetOurPastors />
			</section>
			<section className='flex relative justify-center overflow-hidden mx-auto'>
				<HomeButtonSection />
			</section>
			<section className='flex relative justify-center overflow-hidden mx-auto'>
				<HomeWhatsNew />
			</section>

			{/* 
					<div className='flex bg-black h-[645px] w-full justify-center items-center'>
						{followData.map((follow, index) => (
							<div key={index} className='flex justify-between items-center'>
								<div className='flex group relative bg-red p-16 justify-center items-center'>
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
										<button className='flex justify-center items-center border-2 border-white opacity-50 hover:opacity-100 hover:-skew-y-[0.5deg] transition-all'>
											<Image
												src={follow.imageLeft}
												alt='prayer request button'
												width={follow.width}
												height={follow.height}
												className='saturate-0 opacity-20 group-hover:saturate-[85%] group-hover:opacity-75 group-hover:scale-[105%] group-hover:-skew-y-[0.5deg] transition-all border-2 border-white'
											/>
										</button>
									</Link>
								</div>
								<div className='flex relative group bg-red p-16 justify-center items-center'>
									<button className='absolute justify-center items-center z-50'>
										<Link href='prayer-request' passHref alt='follow jesus'>
											<div className='relative group'>
												<div className='text-white text-[44px] py-2'>
													<FontAwesomeIcon
														icon={faPrayingHands}
														className='z-50'
													/>
												</div>
												<div className='my-2 group-hover:my-8 transition-all'>
													<a className='font-display  text-white text-[44px]'>
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
										</Link>
									</button>
									<button className='flex justify-center items-center border-2 border-white opacity-50 hover:opacity-100 hover:skew-y-[0.5deg] transition-all'>
										<a
											href='https://my.celebration.org/portal/get_form.aspx?ID=6bc5f420-26f8-41f1-8149-9344dd2676e6&template=campus-jax&remembertemplate=true'
											target='_blank'
											rel='noreferrer'
										>
											<Image
												src={follow.imageRight}
												alt='prayer request button'
												width={follow.width}
												height={follow.height}
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
				</div> 
						</div> */}
		</>
	);
}

export default HomeDesktop;
