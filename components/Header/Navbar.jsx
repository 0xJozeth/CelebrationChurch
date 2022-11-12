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
	faBagShopping,
	faBible,
	faPrayingHands,
	faTelevision,
} from '@fortawesome/free-solid-svg-icons';

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
					? 'relative flex justify-between items-center h-20 md:h-24 mx-auto my-4 px-4 xl:max-w-[1440px]'
					: 'flex justify-between items-center h-20 md:h-24 mx-auto my-4 px-4 xl:max-w-[1440px]'
			}
		>
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
							priority
						/>
					</a>
				</Link>
			</div>

			<div
				className={
					nav
						? 'invert flex md:hidden justify-center items-center h-20 md:h-24 my-4 px-4 xl:max-w-[1440px] z-[100]'
						: 'flex md:hidden justify-center items-center h-20 md:h-24 my-4 px-4 xl:max-w-[1440px] z-[100]'
				}
			>
				<Link href='/' passHref>
					<a aria-current='page' aria-label='home' className='cursor-pointer'>
						<Image src={logomobile} alt='logo-mobile' width={38} height={38} />
					</a>
				</Link>
			</div>

			{/* Navigation Links */}

			<ul
				className='hidden md:flex 
			text-[12px] md:text-[16px] lg:text-[28px] 
			justify-center items-center font-display '
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
					<Link href='watch' passHref>
						<a>WATCH</a>
					</Link>
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

			<div
				className={
					nav
						? 'fixed p-4 top-0 bottom-0 left-0 right-0 bg-[#070707] font-display opacity-[100%] z-[1003]'
						: 'hidden'
				}
			>
				<div
					className={
						slide
							? 'flex overflow-y-auto gap-x-28'
							: 'flex overflow-y-auto gap-x-28 w-[-100%]'
					}
				>
					<div className=' relative flex flex-col font-bold text-[44px] mt-20 md:mt-24 gap-y-4 h-[325px]'>
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
					<div className='relative flex flex-col items-end justify-between font-bold text-[44px] mt-20 md:mt-24 gap-y-4'>
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
							<li className='follow-jesus flex min-w-[400px]'>
								<Link href='/follow-jesus' passHref>
									<a className='text-[#f8f8f8]'>FOLLOW JESUS</a>
								</Link>
							</li>
						</ul>

						<div
							className={
								slide
									? 'absolute top-48 w-full flex justify-center items-center h-20 gap-x-8 text-[#f8f8f8] text-[24px]  z-100'
									: 'absolute top-48 w-full flex justify-center items-center h-20 gap-x-8 text-[#f8f8f8] text-[24px] bg-slate-600 z-100'
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
							slide ? 'flex justify-center' : 'flex justify-center rotate-180'
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
				<div className='flex justify-center items-start p-4 bg-[#0D0D0D] min-w-full min-h-[320px] z-[1002]'>
					<ul className='flex flex-col gap-y-4' onClick={handleToggle}>
						<li>
							<Link href='/shop' passHref>
								<div className='flex gap-x-2 text-[#F8F8F8]  text-[14px]'>
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
						<li>
							<Link href='bible-reading-plan' passHref>
								<div className='flex gap-x-2 text-[#F8F8F8] text-[14px]'>
									<span className='icon-bible' role='img' aria-label='bible'>
										<FontAwesomeIcon icon={faBible} />
									</span>
									<a className='text-[#F8F8F8]'>BIBLE READING PLAN</a>
								</div>
							</Link>
						</li>
						<li className='flex gap-x-2'>
							<Link href='/celebration-worship' passHref>
								<div className='flex gap-x-2 text-[#F8F8F8] text-[14px]'>
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
						<li className='flex gap-x-2'>
							<Link href='tv-ministry' passHref>
								<div className='flex gap-x-2 text-[#F8F8F8] text-[14px]'>
									<span className='icon-screen' role='img' aria-label='screen'>
										<FontAwesomeIcon icon={faTelevision} />
									</span>
									<a className='text-[#F8F8F8]'>TV MINISTRY</a>
								</div>
							</Link>
						</li>
						<li className='flex gap-x-2'>
							<Link href='ckids-online' passHref>
								<div className='flex gap-x-2 text-[#F8F8F8] text-[14px]'>
									<span className='icon-globe' role='img' aria-label='globe'>
										<VscGlobe />
									</span>
									<a className='text-[#F8F8F8]'>CKIDS ONLINE</a>
								</div>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Hamburger Menu */}

			<ul
				className='mx-2 md:mx-4 lg:mx-8 xl:mx-16 z-[10001]'
				onClick={handleToggle}
			>
				<HamburgerMenu />
			</ul>
		</nav>
	);
}

export default Navbar;
