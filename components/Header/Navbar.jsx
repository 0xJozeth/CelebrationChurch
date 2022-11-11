import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';

import logo from '/public/cc-logo@1x.png';
import logomobile from '/public/celebration-logo@1x.png';

import { CgScreen } from 'react-icons/cg';
import { VscGlobe } from 'react-icons/vsc';
import { IoCloseOutline } from 'react-icons/io5';

import ToggleMenu from '/components/Navbar/ToggleMenu.js';

import { HamburgerMenu } from '/components/Navbar/hamburgerMenu/index.jsx';

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
	const [logoMobile, setLogoMobile] = useState(false);

	const handleToggle = () => {
		setNav(!nav);
	};

	useEffect(() => {
		console.log('The setNav function is now ', nav);
	}, [nav]);

	return (
		<nav
			className='relative flex justify-between items-center h-20 md:h-24 mx-auto 
			my-4 
			px-4
			xl:max-w-[1440px]
			' /* previously classname='navWrapperFlex'*/
		>
			{/* Logo */}

			<div
				className='hidden relative md:flex justify-center items-center px-2' /* previously classname='navWrapperFlex w-aboveMenuZindex'*/
			>
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
			justify-center items-center font-display'
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
						? 'fixed bg-[#070707] font-display opacity-[100%] top-0 left-0 right-0 bottom-0 w-full h-full z-50'
						: 'hidden'
				}
			>
				<div className='flex flex-col font-bold text-[44px] mt-20 md:mt-24 p-[24px] gap-y-4'>
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

					<ul
						className='font-light flex flex-col gap-y-4'
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
						<li className='follow-jesus'>
							<Link href='/follow-jesus' passHref>
								<a className='text-[#f8f8f8]'>FOLLOW JESUS</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className='flex flex-col justify-center items-center bg-red-700 min-w-full min-h-[275px]'>
					<ul className='flex flex-col gap-y-10' onClick={handleToggle}>
						<li className='flex gap-x-2 text-[#f8f8f8]'>
							<span
								className='icon-shopping-bag'
								role='img'
								aria-label='shopping-bag'
							>
								<VscGlobe />
								{/* <FaShoppingBag /> */}
							</span>
							<Link href='/shop' passHref>
								<a className='text-[#f8f8f8]'>SHOP</a>
							</Link>
						</li>
						<li className='flex gap-x-2'>
							<span className='icon-bible' role='img' aria-label='bible'>
								<VscGlobe />
								{/* <FaBible /> */}
							</span>
							<Link href='bible-reading-plan' passHref>
								<a className='text-[#f8f8f8]'>BIBLE READING PLAN</a>
							</Link>
						</li>
						<li className='flex gap-x-2'>
							<span
								className='icon-praying-hands'
								role='img'
								aria-label='praying-hands'
							>
								<VscGlobe />
								{/* <FaPrayingHands /> */}
							</span>
							<Link href='/celebration-worship' passHref>
								<a className='text-[#f8f8f8]'>CELEBRATION WORSHIP</a>
							</Link>
						</li>
						<li className='flex gap-x-2'>
							<span className='icon-screen' role='img' aria-label='screen'>
								<CgScreen />
							</span>
							<Link href='tv-ministry' passHref>
								<a className='text-[#f8f8f8]'>TV MINISTRY</a>
							</Link>
						</li>
						<li className='flex gap-x-2'>
							<span className='icon-globe' role='img' aria-label='globe'>
								<VscGlobe />
							</span>
							<Link href='ckids-online' passHref>
								<a className='text-[#f8f8f8]'>CKIDS ONLINE</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className='flex text-[#f8f8f8] z-100' onClick={handleToggle}>
					<span className='icon'>
						<Link href='/' passHref>
							<a className=' text-[#f8f8f8]'>
								<VscGlobe />
								{/* <FaFacebook /> */}
							</a>
						</Link>
					</span>
					<span className='flex'>
						<Link href='/' passHref>
							<a className='text-[#f8f8f8] '>
								<VscGlobe />
								{/* <FaInstagram /> */}
							</a>
						</Link>
					</span>
					<span className='flex'>
						<Link href='/' passHref>
							<a className='text-[#f8f8f8]'>
								<VscGlobe />
								{/* <FaTwitter /> */}
							</a>
						</Link>
					</span>
					<span className='flex'>
						<Link href='/' passHref>
							<a className='text-[#f8f8f8]'>
								<VscGlobe />
								{/* <FaYoutube /> */}
							</a>
						</Link>
					</span>
					<span className='flex'>
						<Link href='/' passHref>
							<a className='text-[#f8f8f8]'>
								<VscGlobe />
								{/* <FaRegEnvelope /> */}
							</a>
						</Link>
					</span>
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
