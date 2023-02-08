import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MdEmail, MdMenuBook } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowUpRightFromSquare,
	faBagShopping,
	faBible,
	faPrayingHands,
	faTelevision,
} from '@fortawesome/free-solid-svg-icons';
import {
	faAppStoreIos,
	faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';
import arrow from '/public/arrow@1x-white.svg';
import pagination from '/public/slider-pagination.svg';

const MobileMenu = (props) => {
	return (
		<div className='block md:hidden z-[9999] h-screen'>
			<div className='fixed p-4 top-0 bottom-[-40px] left-0 right-0 bg-[#070707] font-display opacity-[100%] z-[1003] overflow-y-scroll'>
				<div
					className={
						props.slide
							? 'flex w-full overflow-y-scroll gap-x-20'
							: 'flex w-full overflow-y-scroll gap-x-20'
					}
				>
					<div
						className={
							props.slide
								? 'flex relative -left-28 w-full gap-20 px-16 transform translate-x-1/3 duration-300 transition-all'
								: 'flex relative -left-28 w-full gap-20 px-16 transform -translate-x-1/3 duration-300 transition-all'
						}
					>
						<div className='relative flex flex-col font-bold text-[38px] mt-20 md:mt-24 gap-y-2 h-[256px]'>
							<ul
								className='flex flex-col gap-y-4'
								onClick={props.handleOptionClick}
							>
								<li className='about'>
									<Link href='/about' passHref={true}>
										<a className='text-[#f8f8f8]'>ABOUT</a>
									</Link>
								</li>
								<li className='visit'>
									<Link href='/visit' passHref={true}>
										<a className='text-[#f8f8f8]'>VISIT</a>
									</Link>
								</li>
								<li className='give'>
									<Link href='/give' passHref={true}>
										<a className='text-[#f8f8f8]'>GIVE</a>
									</Link>
								</li>
								<li className='watch'>
									<Link href='/watch' passHref>
										<a className='text-[#f8f8f8]'>WATCH</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className='relative flex flex-col items-start font-bold text-[38px] mx-auto mt-20 md:mt-24 w-full gap-y-4 mr-12'>
							<ul
								className={
									props.slide
										? 'font-light flex flex-col gap-y-4'
										: 'font-light flex flex-col gap-y-4'
								}
								onClick={props.handleToggle}
							>
								<li className='ministries'>
									<Link href='/ministries' passHref>
										<a className='text-[#f8f8f8]'>MINISTRIES</a>
									</Link>
								</li>
								<li className='care'>
									<Link href='/care' passHref>
										<a className='text-[#f8f8f8]'>CARE</a>
									</Link>
								</li>
								<li className='follow-jesus flex min-w-[280px]'>
									<Link href='/follow-jesus' passHref>
										<a className='text-[#f8f8f8]'>FOLLOW JESUS</a>
									</Link>
								</li>
							</ul>
							<div
								className={
									props.slide
										? 'flex items-center h-20 gap-x-8 text-[#f8f8f8] text-[24px] z-100'
										: 'flex items-center h-20 gap-x-8 text-[#f8f8f8] text-[24px] z-100'
								}
								onClick={props.handleToggle}
							>
								<span className='icon'>
									<Link href='/' passHref>
										<a className=' text-[#f8f8f8]'>
											<BsFacebook />
											{/* <FaFacebook /> */}
										</a>
									</Link>
								</span>
								<span className='flex'>
									<Link href='/' passHref>
										<a className='text-[#f8f8f8] '>
											<BsInstagram />
											{/* <FaInstagram /> */}
										</a>
									</Link>
								</span>
								<span className='flex'>
									<Link href='/' passHref>
										<a className='text-[#f8f8f8]'>
											<BsTwitter />
											{/* <FaTwitter /> */}
										</a>
									</Link>
								</span>
								<span className='flex'>
									<Link href='/' passHref>
										<a className='text-[#f8f8f8]'>
											<BsYoutube />
											{/* <FaYoutube /> */}
										</a>
									</Link>
								</span>
								<span className='flex'>
									<Link href='/' passHref>
										<a className='text-[#f8f8f8]'>
											<MdEmail />
											{/* <FaRegEnvelope /> */}
										</a>
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-between my-2'>
					<div className='flex items-center justify-end ml-12'>
						<div className={'flex rotate-180 w-14'} onClick={props.handleSlide}>
							<Image src={arrow} alt='' />
						</div>
					</div>
					<div
						className={
							props.slide
								? 'flex justify-center rotate-180'
								: 'flex justify-center'
						}
					>
						<Image src={pagination} alt='' />
					</div>
					<div className='flex items-center justify-center mr-12'>
						<div className={'flex  w-14'} onClick={props.handleSlide}>
							<Image src={arrow} alt='' />
						</div>
					</div>
				</div>
				<div className='flex justify-center items-center pt-12 p-4 mt-10 bg-[#0D0D0D] min-w-full min-h-[290px] z-[1002] '>
					<ul className='flex flex-col' onClick={props.handleToggle}>
						<div className='flex flex-col gap-10'>
							{/* <div>
										<li>
											<Link href='/shop' passHref>
												<div className='flex gap-x-2 text-[#F8F8F8]  text-[18px]'>
													<span
														className='icon-shopping-bag'
														role='img'
														aria-label='shopping-bag'
													>
														<FontAwesomeIcon icon={faBagShopping} />
													</span>
													<a className='text-[#F8F8F8]'>SHOP</a>
												</div>
											</Link>
										</li>
									</div> */}
							<div>
								<li>
									<Link href='bible-reading-plan' passHref>
										<div className='flex gap-x-4 text-[#F8F8F8] text-[18px]'>
											<span
												className='icon-bible'
												role='img'
												aria-label='bible'
											>
												<FontAwesomeIcon icon={faBible} />
											</span>
											<a className='text-[#F8F8F8]'>BIBLE READING PLAN</a>
										</div>
									</Link>
								</li>
							</div>
							<div>
								<li className='flex gap-x-4'>
									<Link href='/celebration-worship' passHref>
										<div className='flex gap-x-4 text-[#F8F8F8] text-[18px]'>
											<span
												className='icon-praying-hands'
												role='img'
												aria-label='praying-hands'
											>
												<FontAwesomeIcon icon={faPrayingHands} />
											</span>
											<a className='text-[#F8F8F8]'>CELEBRATION WORSHIP</a>
										</div>
									</Link>
								</li>
							</div>
							<div>
								<li className='flex gap-x-4'>
									<Link href='tv-ministry' passHref>
										<div className='flex gap-x-4 text-[#F8F8F8] text-[18px]'>
											<span
												className='icon-screen'
												role='img'
												aria-label='screen'
											>
												<FontAwesomeIcon icon={faTelevision} />
											</span>
											<a className='text-[#F8F8F8]'>TV MINISTRY</a>
										</div>
									</Link>
								</li>
							</div>
							<div>
								<div className='flex w-full justify-center items-center gap-x-4 mt-4'>
									<span className='icon-globe' role='img' aria-label='globe'>
										<a
											href='https://apps.apple.com/us/app/the-celebration-app/id1210190693
'
											target='_blank'
											rel='noopener noreferrer'
											className='flex gap-x-4 text-slate-400 text-[18px] text-center mx-auto'
										>
											DOWNLOAD THE APP
										</a>
									</span>
								</div>

								<div className='flex m-8 px-8 gap-x-4 justify-between items-center w-full mx-auto'>
									<span className='icon-globe' role='img' aria-label='globe'>
										<a
											href='https://apps.apple.com/us/app/the-celebration-app/id1210190693
'
											target='_blank'
											rel='noopener noreferrer'
											className='flex gap-x-4 text-[#F8F8F8] text-[38px]'
										>
											<FontAwesomeIcon icon={faAppStoreIos} />
										</a>
									</span>
									<span className='icon-globe' role='img' aria-label='globe'>
										<a
											href='https://play.google.com/store/apps/details?id=com.echurchapps.celebrationchapp&hl=en_US&gl=US&pli=1
'
											target='_blank'
											rel='noopener noreferrer'
											className='flex gap-x-4 text-[#F8F8F8] text-[38px]'
										>
											<FontAwesomeIcon icon={faGooglePlay} />
										</a>
									</span>
								</div>
							</div>
						</div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
