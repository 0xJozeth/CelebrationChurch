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
import media from '/public/yourimpact.png';
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
			<div className='block md:hidden'>
				<div
					className='flex flex-col w-[100vw]
              px-4 mx-auto gap-y-8
                md:bg-purple-300 md:max-w-[768px] md:w-[100vw]
                lg:bg-green-300 lg:max-w-[1024px] lg:w-[100vw]
                xl:bg-red-300 xl:max-w-[1440px] xl:w-[100vw]
                        items-center'
				>
					<div className='relative flex flex-col items-center justify-start w-full'>
						<div className='flex w-full justify-center pr-4 z-30 mix-blend-overlay'>
							<h1 className='font-display font-bold text-[44px] text-[#f8f8f8] '>
								WE&nbsp;LOVE&nbsp;
								<br />
								<span className='font-kepler italic text-[1.1em]'>
									SO&nbsp;WE&nbsp;GIVE
								</span>
							</h1>
						</div>
						<div className='relative z-20 mt-[-65px]'>
							<Image src={GiveHeroMobile} alt='give-hero' />
							<div className='flex items-center absolute z-40 bottom-[140px] right-[20px] border-2 border-solid border-[#f8f8f8] p-2 rounded-[4px] w-auto gap-x-2'>
								<div className='flex justify-center items-center p-2 '>
									<button className='font-display text-[20px] text-[#f8f8f8]'>
										GIVE NOW
									</button>
								</div>
								<div className='flex w-[120px]'>
									<Image src={arrow} alt='' />
								</div>
							</div>
						</div>
						<div className='flex w-full justify-center pr-4 absolute z-10'>
							<h1 className='font-display font-bold text-[44px]'>
								WE&nbsp;LOVE&nbsp;
								<br />
								<span className='font-kepler italic text-[1.1em]'>
									SO&nbsp;WE&nbsp;GIVE
								</span>
							</h1>
						</div>
					</div>
					<div className='relative flex flex-col items-center justify-start w-full'>
						<div className='font-display font-bold text-[44px] text-center'>
							WHY&nbsp;WE&nbsp;
							<br />
							<span className='font-kepler italic text-[1.1em]'>GIVE</span>
						</div>
						<div className='flex flex-col max-w-[355px] p-2 gap-y-4'>
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
						<div className='font-display font-bold text-[44px] text-center'>
							YOUR
							<br />
							<span className='font-kepler italic text-[1.1em]'>IMPACT</span>
						</div>
						<div className='flex justify-between w-full'>
							<div className='flex p-2 w-[100px]'>
								<Image src={leftnav} alt='' />
							</div>
							<div>
								<Image src={media} alt='' />
							</div>
							<div className='flex p-2 w-[100px] rotate-180'>
								<Image src={rightnav} alt='' />
							</div>
						</div>
						<div className='flex justify-center items-center w-[154px] my-4'>
							<Image src={navigation} alt='' />
						</div>
					</div>
					<div className='relative flex flex-col items-center justify-start w-full'>
						<div className='font-display font-bold text-[44px] text-center'>
							ONLINE <br />
							<span className='font-kepler italic text-[1.1em]'>GIVING</span>
						</div>
						<div
							className='
                flex flex-col gap-4
                max-w-[298px!important] md:max-w-[1024px!important]
                mx-auto
                my-12 lg:my-24
                '
						>
							<div className='flex flex-col justify-start max-w-[298px!important] md:max-w-[1024px!important] md:mx-auto'>
								<h2 className='font-display text-[24px] md:text-[48px] lg:text-[82px] font-bold my-4 p-4'>
									SELECT A LOCATION
								</h2>
								{/* </div> */}
								<div
									className='flex flex-col md:flex-row
                        justify-start
                        max-w-[298px!important] md:max-w-[1024px!important]
                        lg:w-[828.39px] lg:p-4
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
						<div className='font-display font-bold text-[44px] text-center'>
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
							<div className='font-display font-bold text-[44px] text-center'>
								<h1 className='text-[#f8f8f8] mix-blend-overlay'>
									LEGACY
									<br />
									<span className='font-kepler italic text-[1.1em]'>TEAM</span>
								</h1>
							</div>
							<div className='font-display font-bold text-[44px] text-center'>
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
						<div className='font-display font-bold text-[44px] text-center'>
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
									<Image src={arrow} alt='' />
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
