import React, { useState, useEffect, useRef } from 'react';
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
import GiveHeroMobile from '/public/GiveHeroMobile.png';

import longArrow from '/public/arrow-long.svg';

import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
	faPiggyBank,
	faMobile,
	faMoneyBillTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GiveDesktop from './give-old';

import 'tw-elements';

function Give(props) {
	const [usa, setUsa] = useState(false);
	const [international, setInternational] = useState(false);

	const handleUsa = () => {
		setUsa(!usa);
	};
	const handleInternational = () => {
		setInternational(!international);
	};

	useEffect(() => {
		console.log('The usa useState is set to:', usa);
	});
	useEffect(() => {
		console.log('The international useState is set to:', international);
	});

	return (
		<>
			<div className='md:hidden flex w-[100vw] p-8 bg-red-200'>
				<div className='relative flex flex-col items-center w-full mx-auto bg-blue-300'>
					<div className='flex justify-center w-full bg-green-200 z-30 mix-blend-overlay'>
						<h1 className='font-display font-bold text-[52px] text-[#f8f8f8]'>
							WE&nbsp;LOVE&nbsp;
							<br />
							<span className='font-kepler italic text-[1.1em]'>
								SO&nbsp;WE&nbsp;GIVE
							</span>
						</h1>
					</div>
					<div className='flex absolute top-0  w-full justify-center z-10'>
						<h1 className='font-display font-bold text-[52px]'>
							WE&nbsp;LOVE&nbsp;
							<br />
							<span className='font-kepler italic text-[1.1em]'>
								SO&nbsp;WE&nbsp;GIVE
							</span>
						</h1>
					</div>
					<div className='relative flex justify-center -top-[80px] w-full z-20'>
						<Image src={GiveHeroMobile} alt='give-hero' />
					</div>

					<div className='absolute flex justify-center top-[180px] right-[20px] items-center z-40 border-2 border-solid border-[#f8f8f8] p-2 w-auto gap-x-2'>
						<div className='flex justify-center items-center p-2 '>
							<button className='font-display text-[16px] text-[#f8f8f8]'>
								GIVE NOW
							</button>
						</div>
						<div className='flex w-[80px]'>
							<Image src={arrow} alt='' />
						</div>
					</div>

					<div className='relative flex flex-col items-center justify-start w-full'>
						<div className='font-display font-bold text-[52px] text-center'>
							WHY&nbsp;WE&nbsp;
							<br />
							<span className='font-kepler italic text-[1.1em]'>GIVE</span>
						</div>
						<div className='flex flex-col p-2 gap-y-4'>
							<div>
								<p className='font-display text-[18px] text-[#7C7C7C]'>
									Here at Celebration, we believe that God calls us to partake
									in the act of generosity, and that tithing is an act of
									worship and obedience to Jesus.
								</p>
							</div>
							<div>
								<p className='font-display text-[18px] text-[#7C7C7C]'>
									When you give back to the Lord through Celebration Church, we
									commit to you that your offering will sow into the expansion
									of His Kingdom as we seek to share the transformative power of
									the Gospel all around the world.
								</p>
							</div>
						</div>
						<div className='flex flex-col items-center justify-center h-20 w-full my-2'>
							<div className='flex flex-col items-center gap-y-4'>
								<div className='text-[19px]'>
									<button className='font-display uppercase'>Learn More</button>
								</div>
								<div className='flex flex-col items-center justify-center w-[28px] '>
									<Image src={arrowdown} alt='' />
								</div>
							</div>
						</div>
					</div>

					<div className='relative flex flex-col items-center justify-start w-full '>
						<div className='font-display font-bold text-[64px] text-center'>
							YOUR
							<br />
							<span className='font-kepler italic text-[1.1em]'>IMPACT</span>
						</div>
						<div
							id='carouselExampleCaptions'
							className='carousel slide relative h-[775px] py-8'
							data-bs-ride='carousel'
						>
							<div className='carousel-indicators absolute right-0 bottom-5 left-0 flex justify-center p-0 mb-4'>
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
							<div className='carousel-inner relative w-full overflow-hidden'>
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
									<div className='carousel-caption block text-center p-4'>
										<h5 className='font-display font-bold text-[#070707] text-[36px] py-4 uppercase'>
											Orange Park Food Pantry
										</h5>
										<p className='font-display font-normal text-[18px] text-[#070707]'>
											Our Orange Park location is making a tremendous impact in
											their local community through their weekly food pantry
											ministry – which served 95,312 Clay County residents this
											past year. Because of your generosity, not only were we
											able to meet the tangible needs, but they were also able
											to open a 4,000 square foot space dedicated to helping
											further their food pantry and outreach efforts.
										</p>
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
										<p className='font-display font-normal text-[18px] text-[#070707]'>
											Your generosity is helping the lives of thousands of
											children from our Celebration Zimbabwe location! Through
											partnership with OneChild, our congregation is sponsoring
											numerous kids in Zimbabwe and helping meet the physical,
											emotional, and spiritual needs of them and their families.
											If you are interested in contributing to this Kingdom
											impact, sponsor a child in need today.
										</p>
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
										<p className='font-display font-normal text-[18px] text-[#070707]'>
											One of Celebration’s deepest desires is to operate as the
											hands and feet of Jesus, especially when people are in
											need the most. We partner with Convoy of Hope [hyper link
											“Convoy of Hope” to https://convoyofhope.org/] on numerous
											occasions throughout the year to help meet tangible needs
											of those struck with natural disasters, war, or various
											other tragedies. To join the impact that these amazing
											partners are making daily, you can give here.
										</p>
									</div>
								</div>
							</div>
							<button
								className='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
								type='button'
								data-bs-target='#carouselExampleCaptions'
								data-bs-slide='prev'
							>
								<div className='flex relative -top-[200px] p-2 w-[100px]'>
									<Image src={leftnav} alt='' />
								</div>
							</button>
							<button
								className='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'
								type='button'
								data-bs-target='#carouselExampleCaptions'
								data-bs-slide='next'
							>
								<div className='flex relative -top-[200px] p-2 w-[100px] rotate-180'>
									<Image src={rightnav} alt='' />
								</div>
							</button>
						</div>
					</div>

					<div className='relative flex flex-col items-center justify-start w-full'>
						<div className='font-display font-bold text-[52px] text-center'>
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
														href='https://celebrationjax.org/'
														target='_blank'
														rel='noopener noreferrer'
													>
														JACKSONVILLE
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='https://celebrationsfl.org/'
														target='_blank'
														rel='noopener noreferrer'
													>
														SOUTH FLORIDA
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='http://celebrationorl.org/'
														target='_blank'
														rel='noopener noreferrer'
													>
														ORLANDO
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='http://metrochurch.com/'
														target='_blank'
														rel='noopener noreferrer'
													>
														WASHINGTON, D.C.
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='http://www.christianfaithcenternc.com/'
														target='_blank'
														rel='noopener noreferrer'
													>
														CHRISTIAN FAITH CENTER, NC
													</a>
												</li>
											</ul>
										</div>
										<ul
											className='flex items-center text-[28px] md:text-[56px]'
											onClick={handleInternational}
										>
											<div
												className={
													international
														? 'flex underline underline-offset-2 font-semibold bg-[#070707] text-[#f8f8f8] p-2'
														: 'flex underline-offset-2 p-2'
												}
											>
												INTERNATIONAL
											</div>{' '}
											&nbsp;
											<li
												className={
													international ? 'list-none hidden' : 'list-none block'
												}
											>
												&#43;
											</li>
											<li
												className={
													international ? 'list-none block' : 'list-none hidden'
												}
											>
												&#45;
											</li>
										</ul>
										<div
											className={
												international
													? ' w-full delay-200 translate-y-0 opacity-100 duration-300 flex flex-col gap-x-20'
													: ' w-full delay-0 translate-y-[-100vh] opacity-25 hidden'
											}
										>
											<ul className='flex flex-col gap-y-4 ml-12'>
												<li className='flex items-center'>
													<a className='flex relative hover:bg-black hover:text-white ease-in items-center cursor-pointer'>
														THE LIGHTHOUSE ANTWERP, BELGIUM
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in'
														href=''
														target='_blank'
														rel='noopener noreferrer'
													>
														NETHERLANDS
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href=''
														target='_blank'
														rel='noopener noreferrer'
													>
														PARIS
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href=''
														target='_blank'
														rel='noopener noreferrer'
													>
														MOKAPANE SOUTH AFRICA
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href=''
														target='_blank'
														rel='noopener noreferrer'
													>
														ZIMBABWE
													</a>
												</li>
											</ul>
										</div>
										<ul className='flex text-[28px] md:text-[56px]'>
											<a
												className='p-2 hover:bg-black hover:text-white ease-in cursor-pointer'
												href='' //WAITING ON HYPERLINK
												target='_blank'
												rel='noopener noreferrer'
											>
												TV MINISTRIES
											</a>
										</ul>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='relative flex flex-col items-center justify-start w-full gap-y-8'>
						<div className='font-display font-bold text-[52px] text-center'>
							OTHER&nbsp;WAYS
							<br />
							<span className='font-kepler italic text-[1.1em]'>
								TO&nbsp;GIVE
							</span>
						</div>
						<div className='flex flex-col justify-center items-center gap-y-8'>
							<div className='flex justify-center items-center p-4 gap-x-8 w-full'>
								<div className='flex flex-col justify-center'>
									<div className='flex bg-[#070707] p-8 justify-center items-center rounded-[50%] text-[70px] text-[#f8f8f8] w-[140px] h-[140px]'>
										<FontAwesomeIcon icon={faMobile} className='' />
									</div>
									<div className='flex justify-center w-full p-2 my-2'>
										<p className='font-display font-semibold text-[22px]'>
											APP
										</p>
									</div>
								</div>
								<div className='flex flex-col justify-center'>
									<div className='flex bg-[#070707] p-8 justify-center items-center rounded-[50%] text-[70px] text-[#f8f8f8] w-[140px] h-[140px]'>
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
								<div className='flex flex-col justify-center'>
									<div className='flex bg-[#070707] p-8 justify-center items-center rounded-[50%] text-[70px] text-[#f8f8f8] w-[140px] h-[140px]'>
										<FontAwesomeIcon icon={faPiggyBank} className='' />
									</div>
									<div className='flex justify-center w-full p-2 my-2'>
										<p className='font-display font-semibold text-[22px]'>
											BANK
										</p>
									</div>
								</div>
								<div className='flex flex-col justify-center'>
									<div className='flex bg-[#070707] p-8 justify-center items-center rounded-[50%] text-[70px] text-[#f8f8f8] w-[140px] h-[140px]'>
										<FontAwesomeIcon icon={faMoneyBillTrendUp} className='' />
									</div>
									<div className='flex justify-center w-full p-2 my-2'>
										<p className='font-display font-semibold text-[22px]'>
											STOCK
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='relative flex flex-col w-full p-8'>
						<div className='relative  flex flex-col'>
							<div className='font-display font-bold text-[52px] text-center'>
								<h1 className='text-[#f8f8f8] mix-blend-overlay'>
									LEGACY
									<br />
									<span className='font-kepler italic text-[1.1em]'>TEAM</span>
								</h1>
							</div>
							<div className='font-display font-bold text-[52px] text-center'>
								<h1 className=''>
									LEGACY
									<br />
									<span className='font-kepler italic text-[1.1em]'>TEAM</span>
								</h1>
							</div>
							<div>
								<Image src={legacy} alt='' />
							</div>
						</div>
					</div>
					<div className='relative flex flex-col items-center justify-start w-full'>
						<div className='font-display font-bold text-[52px] text-center'>
							<h1 className=''>
								BEGIN&nbsp;TO <br />
								<span className='font-kepler italic text-[1.1em]'>TITHE</span>
							</h1>
						</div>
					</div>
					<div className='relative flex flex-col items-center justify-start w-full p-8 my-2'>
						<div className=''>
							<h3 className='font-display font-semibold text-[26px]'>
								HAVE QUESTIONS?
							</h3>
						</div>
						<div className='py-4'>
							<p className='font-display text-[#7C7C7C]'>
								If you have additional questions concerning giving or donations,
								please call Celebration Church Giving Office at (904) 737-1121
								or contact us.
							</p>
						</div>
						<div className='flex flex-row w-full justify-center items-center'>
							<div className='flex w-full justify-between'>
								<div className='flex w-full justify-between items-center'>
									<p className='font-display font-semibold text-[20px]'>
										GIVING&nbsp;FAQs
									</p>
								</div>
								<div className='invert w-8 '>
									<Image src={arrow} alt='' />
								</div>
							</div>
							<div className='flex w-full justify-between'>
								<div className='flex w-full justify-center items-center'>
									<p className='font-display font-semibold text-[20px]'>
										CONTACT
									</p>
								</div>
								<div className='invert w-8 '>
									<Image src={arrow} alt='arrow' />
								</div>
							</div>
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
