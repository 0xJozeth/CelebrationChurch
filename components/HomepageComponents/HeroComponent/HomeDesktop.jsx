import React, { useState, useffect, useRef } from 'react';
import Banner from '/components/Banner/Banner.js';
import Link from 'next/link';
import Image from 'next/image';
import longArrow from '/public/arrow-long.svg';
import arrow from '/public/arrow@1x.png';
import group from '/public/microsoftteams-image@1x.png';
import GroupImage from '/public/microsoftteams-image@1x.png';

import { handleToggle, handleSlide } from '/components/Header/Navbar.jsx';

// IMPORT ITERATIVE MAPPING DATA
// import { linkText, vimeoHeroVideo } from './heroData';

import { IoPlayCircleOutline } from 'react-icons/io5';
import WeHaveAGrace from '../SectionWeHaveAGrace/WeHaveAGrace';
import place from '/public/ministries-homepage@1x.png';
import TimAndJen from '/public/pastor-tim-and-jen-timberlake@1x.png';
import whatsnew from '/public/home-whatsnew@1x.png';

function HomeDesktop() {
	return (
		<>
			<div className='flex justify-center items-center w-[100vw]'>
				<div className='flex flex-col w-full max-w-[1728px] gap-y-16 items-center '>
					<div className='grid grid-cols-2 overflow-hidden '>
						<div className='relative '>
							<div className='relative top-0 left-0 font-display font-extra-bold text-[#f8f8f8] mix-blend-overlay text-[88px] md:text-[112px] lg:text-[152px] xl:text-[240px]  p-8 z-30'>
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
							<div className='absolute top-0 left-0 font-display font-extra-bold text-[#070707] text-[88px] md:text-[112px] lg:text-[152px] xl:text-[240px] p-8 z-0'>
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
								<p className='font-display md:text-[26px]  lg:text-[34px] text-[#7C7C7C]'>
									We’re so glad you’re here! At Celebration Church, we
									prioritize Jesus’ mission to spread the gospel. We are a
									global house comprised of many rooms around the world, with
									headquarters residing in Jacksonville, Florida. We’d love to
									connect with you online or at a location near you!
								</p>
							</div>
							<div className='flex px-16 my-8 gap-x-4 z-40'>
								<a
									href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center gap-x-4 '
								>
									<div className='flex justify-end items-center '>
										<p className='font-display font-normal text-[28px]'>
											WATCH&nbsp;THE LATEST&nbsp;MESSAGE
										</p>
									</div>
									<div className=''>
										<div className='flex w-14 min-w-[56px] items-center'>
											<Image src={arrow} alt='' />
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className='relative z-20'>
							<div className='relative left-[108px]'>
								<iframe
									className=''
									src='https://player.vimeo.com/video/744290982?h=26579d8c5a&controls=0&badge=0&autoplay=1&muted=1&loop=1&autopause=0&player_id=0&app_id=58479'
									frameBorder='0'
									placeholder={'blur'}
									width={756}
									height={1343}
								></iframe>
							</div>
						</div>
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
								<div
									className='flex justify-center items-center 
								text-[22px] md:text-[24px] lg:text-[28px] xl:text-[36px]
								my-8 mr-32 gap-x-4'
								>
									<a className='font-display'>COME&nbsp;VISIT&nbsp;US</a>
									<div className='flex w-20 items-center'>
										<Image src={arrow} alt='' />
									</div>
								</div>
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
								<Image src={place} alt='' />
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
								<Link href='visit'>
									<div
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
									</div>
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
									<p className='font-display text-[12px] md:text-[24px] lg:text-[28px] xl:text-[34px]  w-full text-[#7c7c7c]'>
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

					<div className='flex justify-center items-center w-full mx-auto'>
						<div className='flex min-h-[152px] max-w-[256px] md:max-w-full w-full justify-center items-center mx-auto my-4 overflow-hidden '>
							<Link href={'follow-jesus'}>
								<button className='flex h-[152px] w-full justify-around items-center border-2 border-solid border-[#070707] p-4 gap-x-4 mx-[80px]'>
									<div className='flex min-w-[126px]'>
										<a className='font-display text-[36px] md:text-[44px] lg:text-[64px] xl:text-[88px] '>
											FOLLOW JESUS
										</a>
									</div>
									<div className='flex min-h-[36px] max-w-[150px] md:max-w-[150px] lg:max-w-[250px] xl:max-w-[350px]'>
										<Image src={longArrow} alt='' />
									</div>
								</button>
							</Link>
						</div>
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
									<div className='font-display text-[12px] md:text-[32px] lg:text-[48px] xl:text-[54px]  w-full text-[#070707]'>
										<ul className='flex flex-col gap-y-8'>
											<div className='cursor-pointer'>
												<Link href='new-series'>
													<li className='flex gap-x-4'>
														NEW SERIES&nbsp;
														<div className='flex w-20 items-center'>
															<Image src={arrow} alt='' />
														</div>
													</li>
												</Link>
											</div>
											<div className='cursor-pointer'>
												<Link href='conferences'>
													<li className='flex gap-x-4'>
														CONFERENCES&nbsp;
														<div className='flex w-20 items-center'>
															<Image src={arrow} alt='' />
														</div>
													</li>
												</Link>
											</div>
											<div className='cursor-pointer'>
												<Link href='groups'>
													<li className='flex gap-x-4'>
														GROUPS&nbsp;
														<div className='flex w-20 items-center'>
															<Image src={arrow} alt='' />
														</div>
													</li>
												</Link>
											</div>
										</ul>
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
