import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import arrow from '/public/arrow@1x-white.svg';
import darkArrowRight from '/public/darkArrowRight.svg';
import arrowdown from '/public/arrow-down.svg';
import leftnav from '/public/navleft.svg';
import rightnav from '/public/navleft.svg';

// IMPORT 'YOUR IMPACT' SLIDER CONTENT
import serve from '/public/serve.png';
import oneChild from '/public/oneChild.png';
import relief from '/public/DisasterReliefEfforts.png';

import navigation from '/public/navigationbar-demo.svg';
import legacy from '/public/give-legacy.png';
import { SiBitcoin } from 'react-icons/si';

import piggyBank from '/public/give-images/piggy-bank.svg';
import { MdOutlinePhoneAndroid } from 'react-icons/md';

import { motion } from 'framer-motion';
// import GiveHeroMobile from '/public/GiveHeroMobile.png';
import GiveHeroMobile from '/public/give-mobile-1.png';

import longArrow from '/public/arrow-long.svg';
import givt from '/public/Givt_Logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
	faPiggyBank,
	faMobile,
	faMoneyBillTrendUp,
	faArrowUpRightFromSquare,
	faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import GiveDesktop from './give-desktop';

// import 'tw-elements';

function Give(props) {
	const [usa, setUsa] = useState(false);
	const [international, setInternational] = useState(false);

	const handleUsa = () => {
		setUsa(!usa);
	};
	const handleInternational = () => {
		setInternational(!international);
	};

	//GIVE MODAL
	const [modalOpen, setModalOpen] = useState(true);
	const [modalIndex, setModalIndex] = useState(null);

	const handleModal = (index) => {
		setModalOpen(!modalOpen);
		setModalIndex(index);
	};

	const handleModalClose = () => {
		setModalOpen(false);
	};

	const modalData = [
		{
			id: 0,
			icon: faMobile,
			text: 'APP',
			title: 'The Celebration App',
			paragraph:
				'This method is the easiest and most user friendly. To download the app text “Celebration” to (833) 399-7200 and follow the prompts OR you can search for “The Celebration App” in your iTunes or Google Play Store.',
			linkOneTitle: 'Visit the App Store',
			linkOne: 'https://apps.apple.com/us/app/the-celebration-app/id1210190693',
			linkTwoTitle: 'Visit Google Playstore',
			linkTwo:
				'https://play.google.com/store/apps/details?id=com.echurchapps.celebrationchapp&hl=en_US&gl=US&pli=1',
		},
		{
			id: 1,
			icon: faBitcoin,
			text: 'CRYPTO',
			title: 'Cryptocurrency',
			paragraph:
				'You can use this method if you would like to make a donation of cryptocurrency to Celebration Church. To do this, simply click the button below and provide your donation details.',
			linkOneTitle: 'Give via Cryptocurrency',
			linkOne: 'https://platform.engiven.com/give/97/widget/88',
			linkTwoTitle: null,
			linkTwo: null,
		},
		{
			id: 2,
			icon: faPiggyBank,
			text: 'BANK',
			title: 'Personal Banking',
			paragraph:
				'Give using your bank’s bill payment feature to issue donations directly to Celebration Church. To do this, log into your personal bank account and follow its instructions for adding Celebration Church as a new payee. Enter your donation amount and be sure to specify in the memo if you would like to give to a specific Celebration Church location.',
			linkOneTitle: null,
			linkOne: null,
			linkTwoTitle: null,
			linkTwo: null,
		},
		{
			id: 3,
			icon: faMoneyBillTrendUp,
			text: 'GIVT',
			title: 'Give Via GIVT',
			paragraph:
				'You can now give anonymously through Givt. Givt is a standard way of digital giving that you can access by simply clicking the button below.',
			linkOneTitle: 'Give via GIVT',
			linkOne:
				'https://api.givt.app/givt?code=NjFmN2VkMDE1NTUzMDgyMmMwMDAuYzAwMDAwMDAwMDAx',
			linkTwoTitle: null,
			linkTwo: null,
		},
	];
	return (
		<>
			<div className='md:hidden flex w-[100vw] p-2'>
				<div className='relative flex flex-col items-center w-full mx-auto -mt-[75px]'>
					<div className='flex relative top-[80px] justify-center w-full  z-30 mix-blend-color-dodge'>
						<h1 className='font-display font-bold text-[52px] text-[#f8f8f8]'>
							WE&nbsp;LOVE&nbsp;
							<br />
							<span className='font-kepler italic text-[1.1em]'>
								SO&nbsp;WE&nbsp;GIVE
							</span>
						</h1>
					</div>
					<div className='flex absolute top-[80px] w-full justify-center z-10'>
						<h1 className='font-display font-bold text-[52px]'>
							WE&nbsp;LOVE&nbsp;
							<br />
							<span className='font-kepler italic text-[1.1em]'>
								SO&nbsp;WE&nbsp;GIVE
							</span>
						</h1>
					</div>
					<div className='relative flex flex-col justify-center w-full z-20'>
						<div className='flex justify-center w-full'>
							<Image src={GiveHeroMobile} alt='give-hero' />
						</div>
					</div>

					<div className='relative -top-[150px] left-[50px] flex justify-center items-center z-40 border-2 border-solid bg-[#00000031] border-[#f8f8f8bc] p-2 w-[200px] gap-x-2'>
						<button className='flex justify-center items-center p-2'>
							<a
								href='#onlinegiving'
								className='font-display text-[19px] text-[#f8f8f8] whitespace-nowrap'
							>
								GIVE NOW
							</a>
						</button>
						<div className='flex w-[80px]'>
							<Image src={arrow} alt='' />
						</div>
					</div>

					<div className='relative flex flex-col items-center justify-start mb-8 w-full max-w-[375px]'>
						<div className='font-display font-bold text-[52px] text-center'>
							WHY&nbsp;WE&nbsp;
							<br />
							<span className='font-kepler italic text-[1.1em]'>GIVE</span>
						</div>
						<div className='flex flex-col p-2 gap-y-4'>
							<div>
								<p className='font-display text-[16px] leading-relaxed text-[#7C7C7C]'>
									Here at Celebration, we believe that God calls us to partake
									in the act of generosity, and that tithing is an act of
									worship and obedience to Jesus.
								</p>
							</div>
							<div>
								<p className='font-display text-[16px] leading-relaxed text-[#7C7C7C]'>
									When you give back to the Lord through Celebration Church, we
									commit to you that your offering will sow into the expansion
									of His Kingdom as we seek to share the transformative power of
									the Gospel all around the world.
								</p>
							</div>
						</div>
						{/* <div className='flex flex-col items-center justify-center h-20 w-full my-2 mb-[60px]'>
							<div className='flex flex-col items-center gap-y-4'>
								<div className='text-[19px]'>
									<button className='font-display uppercase'>Learn More</button>
								</div>
								<div className='flex flex-col items-center justify-center w-[28px] '>
									<Image src={arrowdown} alt='' />
								</div>
							</div>
						</div> */}
					</div>

					<div className='relative flex flex-col items-center justify-start w-full'>
						<div className='font-display font-bold text-[64px] text-center'>
							YOUR
							<br />
							<span className='font-kepler italic text-[1.1em]'>IMPACT</span>
						</div>
						<div
							id='carouselExampleCaptions'
							className='carousel slide relative h-[775px] py-8 carousel-dark'
							data-bs-ride='carousel'
						>
							<div className='carousel-indicators absolute right-0 -bottom-16 left-0 flex justify-center p-0 mb-4'>
								<button
									type='button'
									data-bs-target='#carouselExampleCaptions'
									data-bs-slide-to='0'
									className='active'
									aria-current='true'
									aria-label='Slide 1'
								></button>
								<button
									type='button'
									data-bs-target='#carouselExampleCaptions'
									data-bs-slide-to='1'
									aria-label='Slide 2'
								></button>
								<button
									type='button'
									data-bs-target='#carouselExampleCaptions'
									data-bs-slide-to='2'
									aria-label='Slide 3'
								></button>
							</div>
							<div className='carousel-inner relative w-full mx-auto h-[900px]'>
								<div className='carousel-item active relative float-left w-full'>
									<div className='flex relative justify-center w-full '>
										<div className='flex justify-center '>
											<Image
												src={serve}
												className='flex w-[500px] max-w-[500px]'
												alt='...'
												width={425}
												height={425}
											/>
										</div>
									</div>
									<div className='carousel-caption text-center p-4 flex flex-col items-center'>
										<h5 className='font-display font-bold text-[#070707] text-[36px] py-4 uppercase'>
											Orange Park Food Pantry
										</h5>
										<div className='flex justify-center w-[375px]'>
											<p className='flex justify-center font-display font-normal px-8 text-[16px] text-[#7C7C7C] leading-relaxed'>
												Our Orange Park location is making a tremendous impact
												in their local community through their weekly food
												pantry ministry – which served 95,312 Clay County
												residents this past year. Because of your generosity,
												not only were we able to meet the tangible needs, but
												they were also able to open a 4,000 square foot space
												dedicated to helping further their food pantry and
												outreach efforts.
											</p>
										</div>
									</div>
								</div>
								<div className='carousel-item relative float-left w-full'>
									<div className='flex justify-center '>
										<Image
											src={oneChild}
											className='block w-full'
											alt='...'
											width={425}
											height={425}
										/>
									</div>
									<div className='carousel-caption text-center p-4'>
										<h5 className='font-display font-bold text-[#070707] text-[36px] py-4'>
											OneChild
										</h5>
										<div className='w-[375px]'>
											<p className='font-display font-normal px-8 text-[16px] text-[#7C7C7C] leading-relaxed'>
												Your generosity is helping the lives of thousands of
												children from our Celebration Zimbabwe location! Through
												partnership with OneChild, our congregation is
												sponsoring numerous kids in Zimbabwe and helping meet
												the physical, emotional, and spiritual needs of them and
												their families. If you are interested in contributing to
												this Kingdom impact, sponsor a child in need today.
											</p>
										</div>
									</div>
								</div>
								<div className='carousel-item relative float-left w-full'>
									<div className='flex justify-center '>
										<Image
											src={relief}
											className='block w-full'
											alt='...'
											width={425}
											height={425}
										/>
									</div>
									<div className='carousel-caption text-center p-4'>
										<h5 className='font-display font-bold text-[#070707] text-[36px] py-4'>
											Disaster Relief Efforts
										</h5>
										<div className='flex w-[375px] justify-center'>
											<p className='font-display font-normal px-8 text-[16px] text-[#7C7C7C] leading-relaxed'>
												One of Celebration’s deepest desires is to operate as
												the hands and feet of Jesus, especially when people are
												in need the most. We partner with&nbsp;
												<a
													className='font-semibold cursor-pointer'
													href='https://convoyofhope.org'
													target='blank'
													rel='noopener noreferrer'
												>
													Convoy of Hope{' '}
												</a>
												on numerous occasions throughout the year to help meet
												tangible needs of those struck with natural disasters,
												war, or various other tragedies. To join the impact that
												these amazing partners are making daily, you can give
												here.
											</p>
										</div>
									</div>
								</div>
							</div>
							<button
								className='carousel-control-prev w-[50px] absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline'
								type='button'
								data-bs-target='#carouselExampleCaptions'
								data-bs-slide='prev'
							>
								<div className='flex relative -top-[200px] p-2 max-w-[100px]'>
									<Image src={leftnav} alt='' />
								</div>
							</button>
							<button
								className='carousel-control-next w-[50px] absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline '
								type='button'
								data-bs-target='#carouselExampleCaptions'
								data-bs-slide='next'
							>
								<div className='flex relative -top-[200px] p-2 max-w-[100px] rotate-180'>
									<Image src={rightnav} alt='' />
								</div>
							</button>
						</div>
					</div>

					<div
						id='onlinegiving'
						className='relative flex flex-col items-center justify-start w-full top-[200px]'
					>
						<div className='font-display font-bold text-[52px] text-center w-full'>
							ONLINE <br />
							<span className='font-kepler italic text-[1.1em]'>GIVING</span>
						</div>
						<div
							className='
                flex flex-col gap-4
                mx-auto
                my-12 lg:my-24
                '
						>
							<div className='flex flex-col justify-start md:mx-auto'>
								<h2 className='font-display text-[24px] md:text-[48px] lg:text-[82px] font-bold my-4 p-4'>
									SELECT A LOCATION
								</h2>
								{/* </div> */}
								<div
									className='flex flex-col md:flex-row
                        justify-start
                        mx-auto'
								>
									<ul
										className='flex flex-col items-start
            
                            font-display text-[20px] md:text-[40px] lg:text-[68px] gap-y-4'
									>
										<ul
											className='flex text-[28px] md:text-[56px] items-center'
											onClick={handleUsa}
										>
											<div
												className={
													usa
														? 'flex underline underline-offset-2 font-semibold bg-[#070707] text-[#f8f8f8] p-2'
														: 'flex underline-offset-2 p-2'
												}
											>
												USA
											</div>
											&nbsp;
											<li
												className={usa ? 'list-none hidden' : 'list-none block'}
											>
												&#43;
											</li>
											<li
												className={usa ? 'list-none block' : 'list-none hidden'}
											>
												&#45;
											</li>
										</ul>
										<div
											className={
												usa
													? ' w-full delay-200 translate-y-0 opacity-100 duration-300 flex flex-col gap-x-20'
													: ' w-full delay-0 translate-y-[-100vh] opacity-25 hidden'
											}
										>
											<ul className='flex flex-col gap-y-4 ml-12'>
												<li className='flex items-center'>
													<a
														className='flex relative hover:bg-black hover:text-white ease-in items-center cursor-pointer'
														href='https://pushpay.com/g/celebrationarena'
														target='_blank'
														rel='noopener noreferrer'
													>
														JACKSONVILLE
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='https://pushpay.com/g/celebrationorangepark'
														target='_blank'
														rel='noopener noreferrer'
													>
														ORANGE PARK
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='https://pushpay.com/g/celebrationftl'
														target='_blank'
														rel='noopener noreferrer'
													>
														SOUTH FLORIDA
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='https://celebrationorl.org/celebrationorl-give/'
														target='_blank'
														rel='noopener noreferrer'
													>
														ORLANDO
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='https://pushpay.com/g/celebrationchurchdc'
														target='_blank'
														rel='noopener noreferrer'
													>
														WASHINGTON, D.C.
													</a>
												</li>
											</ul>
										</div>
										<ul className='flex items-center text-[28px] md:text-[56px]'>
											<a
												href='https://pushpay.com/g/ccglobal?src=hpp'
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center'
											>
												<div className='flex text-[#070707] p-2'>
													INTERNATIONAL
												</div>
											</a>
										</ul>

										<ul className='flex text-[28px] md:text-[56px]'>
											<a
												className='p-2 hover:bg-black hover:text-white ease-in cursor-pointer'
												href='https://pushpay.com/g/cconline?r=monthly'
												target='_blank'
												rel='noopener noreferrer'
											>
												CHURCH ONLINE
											</a>
										</ul>

										<ul className='flex items-center text-[28px] md:text-[56px]'>
											<li>
												<a
													className='p-2 hover:bg-black hover:text-white ease-in cursor-pointer'
													href='https://timtimberlake.tv/partner/'
													target='_blank'
													rel='noopener noreferrer'
												>
													TV MINISTRIES&nbsp;
												</a>
											</li>
											<li className='text-[16px]'>
												<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
											</li>
										</ul>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='relative top-[200px] flex flex-col items-center justify-start w-full gap-y-8'>
						<div className='font-display font-bold text-[52px] text-center'>
							OTHER WAYS
							<br />
							<span className='font-kepler italic text-[1.1em]'>
								TO&nbsp;GIVE
							</span>
						</div>
						{modalOpen ? (
							<div className='flex flex-col justify-center items-center w-full gap-y-8'>
								<div className='flex justify-center items-center p-4 gap-x-8 w-full'>
									<div
										onClick={() => handleModal(0)}
										className='flex flex-col justify-center items-center w-full p-4'
									>
										<div className='flex bg-[#070707] p-8 justify-center items-center rounded-full text-[40px] text-[#f8f8f8] w-[100px] h-[100px]'>
											<FontAwesomeIcon icon={faMobile} className='' />
										</div>
										<div className='flex justify-center w-full p-2 my-2'>
											<p className='font-display font-semibold text-[22px]'>
												APP
											</p>
										</div>
									</div>
									<div
										onClick={() => handleModal(1)}
										className='flex flex-col justify-center items-center w-full p-4'
									>
										<div className='flex bg-[#070707] p-8 justify-center items-center rounded-full text-[40px] text-[#f8f8f8] w-[100px] h-[100px]'>
											<FontAwesomeIcon icon={faBitcoin} className='' />
										</div>
										<div className='flex justify-center w-full p-2 my-2'>
											<p className='font-display font-semibold text-[22px]'>
												CRYPTO
											</p>
										</div>
									</div>
								</div>
								<div className='flex justify-center items-center p-4 gap-x-8 w-full'>
									<div
										onClick={() => handleModal(2)}
										className='flex w-full flex-col justify-center items-center p-4'
									>
										<div className='flex bg-[#070707] p-8 justify-center items-center rounded-full text-[40px] text-[#f8f8f8] w-[100px] h-[100px]'>
											<FontAwesomeIcon icon={faPiggyBank} className='' />
										</div>
										<div className='flex justify-center w-full p-2 my-2'>
											<p className='font-display font-semibold text-[22px]'>
												BANK
											</p>
										</div>
									</div>
									<div
										onClick={() => handleModal(3)}
										className='flex w-full flex-col justify-center items-center p-4'
									>
										<div className='flex bg-[#070707] p-4 justify-center items-center rounded-full text-[40px] text-[#f8f8f8] w-[100px] h-[100px]'>
											<Image src={givt} alt='' className='' />
										</div>
										<div className='flex justify-center w-full p-2 my-2'>
											<p className='font-display font-semibold text-[22px]'>
												GIVT
											</p>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div
								className='flex flex-col justify-center items-center w-full p-4 bg-[#070707]'
								onClick={handleModal}
							>
								{modalData.map(
									(data, i) =>
										i === modalIndex && (
											<div key={i} className='flex-col w-full mb-8'>
												<div
													onClick={handleModalClose}
													className='flex w-min h-min justify-center items-center gap-4 cursor-pointer my-4'
												>
													<div className='flex justify-center items-center text-[18px] invert'>
														<FontAwesomeIcon icon={faArrowLeft} className='' />
													</div>
													<p className='text-white font-display text-[16px] transition-all'>
														BACK
													</p>
												</div>
												<div className='flex flex-col justify-center items-center w-full my-4'>
													<div className='flex bg-[#f8f8f8] m-4 justify-center items-center rounded-full text-[64px] text-[#070707] w-[100px] h-[100px] cursor-pointer hover:scale-110 transition-all'>
														{data.text != 'GIVT' ? (
															<FontAwesomeIcon
																icon={data.icon}
																className='hover:-rotate-3 transition-all'
															/>
														) : (
															<div className='flex bg-[#f8f8f8] p-4 justify-center items-center rounded-full text-[40px] text-[#f8f8f8] w-[100px] h-[100px]'>
																<Image src={givt} alt='' className='invert' />
															</div>
														)}
													</div>
													<div className='flex justify-center w-full my-4'>
														<p className='font-display font-bold text-[44px] text-[#f8f8f8]'>
															{data.text}
														</p>
													</div>
												</div>
												<div className='flex justify-center w-full my-4'>
													<p className='font-display font-bold text-center text-[#f8f8f8] text-[19px]'>
														{data.title}
													</p>
												</div>
												<div className='flex justify-center w-full my-4'>
													<p className='font-display font-regular text-center text-[#f8f8f8] text-[16px] leading-relaxed'>
														{data.paragraph}
													</p>
												</div>
												<div className='flex w-full justify-start items-center '>
													<a
														href={data.linkOne}
														target='_blank'
														rel='noopener noreferrer'
													>
														<div className='flex items-center py-2 gap-x-4'>
															<div className='flex items-center'>
																<p className='font-display font-normal text-[19px] text-white'>
																	{data.linkOneTitle}
																</p>
															</div>
															{data.linkOneTitle !== undefined &&
																data.linkOneTitle !== null && (
																	<div className='w-[88px]'>
																		<Image src={arrow} alt='' />
																	</div>
																)}
														</div>
													</a>
												</div>
												{/* THIS IS A CONDITIONALLY RENDERED SECOND LINK IF THERES CONTENT */}
												{data.linkTwo !== undefined &&
													data.linkTwo !== null && (
														<div className='flex justify-start items-center '>
															<a
																href={data.linkTwo}
																target='_blank'
																rel='noopener noreferrer'
															>
																<div className='flex items-center py-2 gap-x-4'>
																	<div className='flex items-center'>
																		<p className='font-display font-normal text-[19px] text-white'>
																			{data.linkTwoTitle}
																		</p>
																	</div>
																	<div className='w-[88px]'>
																		<Image src={arrow} alt='' />
																	</div>
																</div>
															</a>
														</div>
													)}
											</div>
										)
								)}
							</div>
						)}
					</div>

					<div className='relative top-[200px] flex flex-col w-full max-w-[425px] my-[60px]'>
						<div className='relative flex flex-col w-full'>
							<div className='font-display font-bold text-[52px] text-left mix-blend-overlay w-full z-30'>
								<h1 className='text-[#f8f8f8]'>
									LEGACY
									<br />
									<span className='font-kepler italic text-[1.1em]'>TEAM</span>
								</h1>
							</div>
							<div className='absolute top-0 font-display font-bold text-[52px] text-left w-full z-10'>
								<h1 className=''>
									LEGACY
									<br />
									<span className='font-kepler italic text-[1.1em]'>TEAM</span>
								</h1>
							</div>
							<div className='flex relative -top-[80px] h-[120px] justify-end z-20'>
								<div className='flex w-[310px] h-[189px] bg-green-300'>
									<Image className='flex bg-purple-500' src={legacy} alt='' />
								</div>
							</div>
							<div className='flex flex-col  p-4'>
								<div className='flex justify-center items-center'>
									<p className='font-display font-normal text-[16px] text-[#7C7C7C] leading-relaxed'>
										Our Legacy Team gives influence, resources, and time as a
										local church ministry expression to advance the cause of
										Christ. Each member prayerfully commits to give over and
										above their tithe to impact eternity for generations to
										come—to leave a legacy. If you have any questions or would
										like to be a part of the Legacy Team, please email Pastor
										Drew King.
									</p>
								</div>
								<div className='flex w-full items-center gap-x-4 my-4 text-[18px]'>
									<div className='flex justify-center items-center'>
										<p className='font-display font-semibold text-[20px]'>
											CONTACT
										</p>
									</div>
									<div className='flex justify-center items-center invert w-12 '>
										<Image src={arrow} alt='arrow' />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='relative top-[200px] flex flex-col items-center justify-start w-full'>
						<div className='font-display font-bold text-[52px] text-center'>
							<h1 className=''>
								BEGIN&nbsp;TO <br />
								<span className='font-kepler italic text-[1.1em]'>TITHE</span>
							</h1>
						</div>
					</div>
					<div className='relative top-[200px] mb-[200px] flex flex-col items-center justify-start w-full p-4 my-2'>
						<div className=''>
							<h3 className='font-display font-semibold text-[26px]'>
								HAVE QUESTIONS?
							</h3>
						</div>
						<div className='flex w-full py-4'>
							<p className='font-display text-[16px] text-[#7C7C7C] leading-relaxed'>
								If you have additional questions concerning giving or donations,
								please call Celebration Church Giving Office at (904) 737-1121
								or contact us.
							</p>
						</div>

						<div className='flex flex-col w-full max-w-screen my-4 gap-y-8 justify-center items-center'>
							<button className='flex w-full'>
								<Link href='/givingfaqs'>
									<div className='flex justify-start items-center gap-x-4 w-full'>
										<div className='flex items-center'>
											<a className='font-display font-semibold text-[19px]'>
												GIVING&nbsp;FAQs
											</a>
										</div>
										<div className='invert w-16 '>
											<Image src={arrow} alt='' />
										</div>
									</div>
								</Link>
							</button>

							<button className='flex w-full'>
								<a href='mailto:giving@celebration.org'>
									<div className='flex justify-start items-center gap-x-4 w-full'>
										<div className='flex items-center'>
											<p className='font-display font-semibold text-[19px]'>
												CONTACT&nbsp;US
											</p>
										</div>
										<div className='invert w-16 '>
											<Image src={arrow} alt='' />
										</div>
									</div>
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden md:block'>
				<GiveDesktop />
			</div>
		</>
	);
}

export default Give;
