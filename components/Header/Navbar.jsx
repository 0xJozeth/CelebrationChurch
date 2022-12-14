import React, { useState, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';

import logo from '/public/cc-logo@1x.png';
import logomobile from '/public/celebration-logo@1x.png';

import { CgScreen } from 'react-icons/cg';
import { VscGlobe } from 'react-icons/vsc';
import { MdEmail, MdMenuBook } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

import { HamburgerMenu } from '/components/Navbar/hamburgerMenu/index.jsx';

import NavbarSlider from '/components/NavbarSlider/NavbarSlider.jsx';
import PartnersCarousel from '/components/PartnersCarousel/partnersCarousel.jsx';

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

import { CSSTransition } from 'react-transition-group';

import arrow from '/public/arrow@1x-white.svg';
import pagination from '/public/slider-pagination.svg';

// export const ToggleMenuWrapper = styled(motion.div)`
// 	position: fixed;

// 	top: 0px;
// 	right: 0;
// 	left: 0;
// 	bottom: 0;

// 	opacity: 99%;
// 	min-height: 100%;

// 	width: 100%;
// 	background: #070707;
// 	/* overflow-y: hidden; */

// 	/* z-index: 9999999999; // IMPORTANT */

// 	a {
// 		text-decoration: none;
// 		color: #f8f8f8;
// 	}

// 	div {
// 		&.grid-container {
// 			display: grid;
// 			grid-template-columns: repeat(16, 6.25%);
// 			grid-template-rows: repeat(16, 6.25%);
// 			gap: 0.5em 0.5em;
// 			min-height: 100vh;

// 			font-family: 'neue-haas-grotesk-display';
// 			li {
// 				margin-block: 1em;
// 				margin-inline: 0.5em;
// 				color: #f8f8f8;
// 				/* margin-block: 3em; */
// 			}
// 		}
// 		&.close-button {
// 			/* background: red; */
// 			/* grid-column: 14 / span 1;
// 			grid-row: 2 / span 1;
// 			place-self: start; */
// 		}
// 		&.left-grid {
// 			/* background: darkgoldenrod; */
// 			grid-column: 2 / span 3;
// 			grid-row: 4 / span 10;
// 			font-size: 4.25em;
// 			font-weight: 700;
// 		}
// 		&.right-grid {
// 			/* background: red; */
// 			grid-column: 5 / span 6;
// 			grid-row: 4 / span 10;
// 			font-size: 4.25em;
// 			font-weight: 700;
// 		}
// 		&.side-grid {
// 			/* background: red; */
// 			grid-column: 11 / span 4;
// 			grid-row: 4 / span 6;
// 			/* margin-inline: 4em; */

// 			li {
// 				font-size: 1.5em;
// 				font-weight: 500;
// 				margin-block: 3.25em;
// 				/* background: blue; */
// 				display: flex;
// 				flex-direction: row;
// 				align-content: center;

// 				span {
// 					margin-inline: 0.5em;
// 				}
// 			}
// 		}
// 		&.social-icons {
// 			color: #f8f8f8;
// 			grid-column: 11 / span 3;
// 			grid-row: 13 / span 1;
// 			width: 100%;

// 			display: flex;
// 			place-items: center;

// 			span {
// 				margin-inline: 0.5em;
// 				font-size: 2em;
// 			}
// 		}
// 		section {
// 			color: #f8f8f8;
// 			place-self: center;
// 		}
// 	}
// `;

function Navbar(props) {
	const [nav, setNav] = useState(false);
	const [slide, setSlide] = useState(false);
	const [logoMobile, setLogoMobile] = useState(false);

	const handleToggle = () => {
		setNav(!nav);
	};

	const handleSlide = () => {
		setSlide(!slide);
	};

	const handleScroll = () => {
		console.log('scroll event', window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	useEffect(() => {
		console.log('The setNav function is now ', nav);
	}, [nav]);

	useEffect(() => {
		console.log('The setSlide function is now:', slide);
	}, [slide]);

	return (
		<nav
			className={
				nav
					? 'fixed right-2 flex justify-center items-center h-14 w-[100vw] mt-2 md:h-24 mx-auto my-1 p-4 z-[1004]'
					: 'flex justify-center items-center h-14 mt-2 w-[100vw] md:h-24 mx-auto p-4 my-4'
			}
		>
			<div className='flex w-full justify-between max-w-[1440px]'>
				{/* Logo */}
				<div className='hidden relative md:flex justify-center items-center px-2'>
					<Link href='/' passHref>
						<a aria-current='page' aria-label='home' className='cursor-pointer'>
							<Image
								src={logo}
								alt='logo'
								width={167}
								height={47}
								layout='intrinsic'
								objectFit='contain'
							/>
						</a>
					</Link>
				</div>
				<div
					className={
						nav
							? 'invert absolute top-4 hidden md:flex justify-center items-center h-20 md:h-24 my-4 px-4 max-w-[1440px] z-[99999]'
							: 'flex md:hidden justify-center items-center h-20 md:h-24 my-4 px-1 max-w-[1440px] z-[9999]'
					}
				>
					<Link href='/' passHref>
						<a aria-current='page' aria-label='home' className='cursor-pointer'>
							<div className='block md:hidden'>
								<Image
									src={logomobile}
									alt='logo-mobile'
									width={38}
									height={38}
									priority
								/>
							</div>
							<div className='hidden md:block'>
								<Image
									src={logomobile}
									alt='logo-mobile'
									width={115}
									height={115}
									priority
								/>
							</div>
						</a>
					</Link>
				</div>
				{/* Navigation Links */}
				<ul
					className='hidden md:flex
				text-[12px] md:text-[16px] lg:text-[16px]
				justify-center items-center font-display w-full'
				>
					<li className='p-2 font-bold'>
						<Link href='about' passHref>
							<a>ABOUT</a>
						</Link>
					</li>
					<li className='p-2 font-bold'>
						<p>/</p>
					</li>
					<li className='p-2 font-bold'>
						<Link href='visit' passHref>
							<a>VISIT</a>
						</Link>
					</li>
					<li className='p-2 font-bold'>
						<p>/</p>
					</li>
					<li className='p-2 font-bold'>
						<div className='flex items-center gap-x-2 cursor-pointer'>
							<a
								href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
								target='_blank'
								rel='noopener noreferrer'
								className='flex'
							>
								WATCH
							</a>
							<a
								href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
								target='_blank'
								rel='noopener noreferrer'
								className='flex'
							>
								<FontAwesomeIcon
									icon={faArrowUpRightFromSquare}
									className='text-[12px]'
								/>
							</a>
						</div>
					</li>
					<li className='p-2 font-bold'>
						<p>/</p>
					</li>
					<li className='p-2 font-bold'>
						<Link href='give' passHref>
							<a>GIVE</a>
						</Link>
					</li>
				</ul>

				{/* Mobile Menu */}
				<div className='block md:hidden'>
					<div
						className={
							nav
								? 'fixed p-4 top-0 bottom-[-40px] left-0 right-0 bg-[#070707] font-display opacity-[100%] z-[1003] overflow-y-scroll'
								: 'hidden'
						}
					>
						<div
							className={
								slide
									? 'flex overflow-y-scroll gap-x-20'
									: 'flex overflow-y-scroll gap-x-20'
							}
						>
							<div className='relative flex flex-col font-bold text-[38px] mt-20 md:mt-24 gap-y-2 h-[256px]'>
								<ul className='flex flex-col gap-y-4' onClick={handleToggle}>
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
										slide
											? 'font-light flex flex-col gap-y-4'
											: 'font-light flex flex-col gap-y-4'
									}
									onClick={handleToggle}
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
										slide
											? 'flex items-center h-20 gap-x-8 text-[#f8f8f8] text-[24px] z-100'
											: 'flex items-center h-20 gap-x-8 text-[#f8f8f8] text-[24px] z-100'
									}
									onClick={handleToggle}
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
						<div className='flex items-center justify-between my-2'>
							<div className='flex items-center justify-end ml-12'>
								<div className={'flex w-14'} onClick={handleSlide}>
									<Image src={arrow} alt='' />
								</div>
							</div>
							<div
								className={
									slide
										? 'flex justify-center'
										: 'flex justify-center rotate-180'
								}
							>
								<Image src={pagination} alt='' />
							</div>
							<div className='flex items-center justify-center mr-12'>
								<div className={'flex rotate-180 w-14'} onClick={handleSlide}>
									<Image src={arrow} alt='' />
								</div>
							</div>
						</div>
						<div className='flex justify-center items-center py-16 p-4 mt-10 bg-[#0D0D0D] min-w-full min-h-[290px] z-[1002] '>
							<ul className='flex flex-col' onClick={handleToggle}>
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
										<div className='flex gap-x-4'>
											<span
												className='icon-globe'
												role='img'
												aria-label='globe'
											>
												<a
													href='https://apps.apple.com/us/app/the-celebration-app/id1210190693
'
													target='_blank'
													rel='noopener noreferrer'
													className='flex gap-x-4 text-[#F8F8F8] text-[18px]'
												>
													<FontAwesomeIcon icon={faAppStoreIos} />
												</a>
											</span>
											<p className='text-[#F8F8F8]'>APPLE APP STORE APP</p>
										</div>
									</div>
									<div>
										<div className='flex gap-x-4'>
											<span
												className='icon-globe'
												role='img'
												aria-label='globe'
											>
												<a
													href='https://play.google.com/store/apps/details?id=com.echurchapps.celebrationchapp&hl=en_US&gl=US&pli=1
'
													target='_blank'
													rel='noopener noreferrer'
													className='flex gap-x-4 text-[#F8F8F8] text-[18px]'
												>
													<FontAwesomeIcon icon={faGooglePlay} />
												</a>
											</span>
											<p className='text-[#F8F8F8]'>GOOGLE PLAY STORE APP</p>
										</div>
									</div>
								</div>
							</ul>
						</div>
					</div>
				</div>
				{/* Desktop Menu */}
				<div className='hidden md:block'>
					<div
						className={
							nav
								? 'fixed p-4 top-0 bottom-0 left-0 right-0 bg-[#070707] font-display opacity-[100%] z-[1003] overflow-y-scroll'
								: 'hidden'
						}
					>
						<div
							className={
								slide
									? 'flex h-full overflow-y-scroll gap-x-20 ml-[275px]'
									: 'flex h-full overflow-y-scroll gap-x-20 ml-[275px]'
							}
						>
							<div className='flex  items-center '>
								<ul
									className='flex flex-col gap-y-4 font-display font-bold text-[75px]'
									onClick={handleToggle}
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
										<a
											href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
											target='_blank'
											rel='noopener noreferrer'
											className='text-[#f8f8f8]'
										>
											WATCH
										</a>
									</li>
								</ul>
							</div>
							<div className='flex items-center '>
								<ul
									className='flex flex-col gap-y-16 font-display font-bold text-[75px]'
									onClick={handleToggle}
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
											<a className='text-[#f8f8f8]'>FOLLOW&nbsp;JESUS</a>
										</Link>
									</li>
								</ul>
							</div>
							<div className='flex flex-col justify-evenly'>
								<div className='flex z-[1002] '>
									<ul
										className='flex flex-col gap-y-[40px] mt-[215px]'
										onClick={handleToggle}
									>
										{/* <li>
											<Link href='/shop' passHref>
												<div className='flex gap-x-2 cursor-pointer text-[#F8F8F8]  font-display font-normal text-[30px]'>
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
										</li> */}
										<li>
											<Link href='bible-reading-plan' passHref>
												<div className='flex gap-x-2 cursor-pointer text-[#F8F8F8] font-display font-normal text-[30px]'>
													<span
														className='icon-bible'
														role='img'
														aria-label='bible'
													>
														<FontAwesomeIcon icon={faBible} />
													</span>
													<a className='text-[#F8F8F8]'>
														BIBLE&nbsp;READING&nbsp;PLAN
													</a>
												</div>
											</Link>
										</li>
										<li className='flex gap-x-2 cursor-pointer'>
											<Link href='/celebration-worship' passHref>
												<div className='flex gap-x-2 cursor-pointer text-[#F8F8F8] font-display font-normal text-[30px]'>
													<span
														className='icon-praying-hands'
														role='img'
														aria-label='praying-hands'
													>
														<FontAwesomeIcon icon={faPrayingHands} />
													</span>
													<a className='text-[#F8F8F8]'>
														CELEBRATION&nbsp;WORSHIP
													</a>
												</div>
											</Link>
										</li>
										<li className='flex gap-x-2 cursor-pointer'>
											<Link href='tv-ministry' passHref>
												<div className='flex gap-x-2 cursor-pointer text-[#F8F8F8] font-display font-normal text-[30px]'>
													<span
														className='icon-screen'
														role='img'
														aria-label='screen'
													>
														<FontAwesomeIcon icon={faTelevision} />
													</span>
													<a className='text-[#F8F8F8]'>TV&nbsp;MINISTRY</a>
												</div>
											</Link>
										</li>
										{/* <li className='flex gap-x-2'>
											<Link href='ckids-online' passHref>
												<div className='flex gap-x-2 cursor-pointer text-[#F8F8F8] font-display font-normal text-[30px]'>
													<span
														className='icon-globe'
														role='img'
														aria-label='globe'
													>
														<VscGlobe />
													</span>
													<a className='text-[#F8F8F8]'>CKIDS&nbsp;ONLINE</a>
												</div>
											</Link>
										</li> */}
									</ul>
								</div>
								<div
									className='flex text-[30px] justify-between'
									onClick={handleToggle}
								>
									<span className='icon'>
										<a
											href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
											target='_blank'
											rel='noopener noreferrer'
											className=' text-[#f8f8f8]'
										>
											<BsFacebook />
										</a>
									</span>
									<span className='flex'>
										<a
											href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
											target='_blank'
											rel='noopener noreferrer'
											className='text-[#f8f8f8] '
										>
											<BsInstagram />
										</a>
									</span>
									<span className='flex'>
										<a
											href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
											target='_blank'
											rel='noopener noreferrer'
											className='text-[#f8f8f8]'
										>
											<BsTwitter />
										</a>
									</span>
									<span className='flex'>
										<a
											href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
											target='_blank'
											rel='noopener noreferrer'
											className='text-[#f8f8f8]'
										>
											<BsYoutube />
										</a>
									</span>
									<span className='flex'>
										<a
											href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
											target='_blank'
											rel='noopener noreferrer'
											className='text-[#f8f8f8]'
										>
											<MdEmail />
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Hamburger Menu */}
				<ul
					className='flex justify-center items-center mx-2 md:mx-4 lg:mx-8 xl:mx-16 z-[10001]'
					onClick={handleToggle}
				>
					<HamburgerMenu />
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
