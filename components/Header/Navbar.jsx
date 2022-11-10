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

export const ToggleMenuWrapper = styled(motion.div)`
	position: fixed;

	top: 0px;
	right: 0;
	left: 0;
	bottom: 0;

	opacity: 99%;
	min-height: 100%;

	width: 100%;
	background: #070707;
	/* overflow-y: hidden; */

	/* z-index: 9999999999; // IMPORTANT */

	a {
		text-decoration: none;
		color: #f8f8f8;
	}

	div {
		&.grid-container {
			display: grid;
			grid-template-columns: repeat(16, 6.25%);
			grid-template-rows: repeat(16, 6.25%);
			gap: 0.5em 0.5em;
			min-height: 100vh;

			font-family: 'neue-haas-grotesk-display';
			li {
				margin-block: 1em;
				margin-inline: 0.5em;
				color: #f8f8f8;
				/* margin-block: 3em; */
			}
		}
		&.close-button {
			/* background: red; */
			/* grid-column: 14 / span 1;
			grid-row: 2 / span 1;
			place-self: start; */
		}
		&.left-grid {
			/* background: darkgoldenrod; */
			grid-column: 2 / span 3;
			grid-row: 4 / span 10;
			font-size: 4.25em;
			font-weight: 700;
		}
		&.right-grid {
			/* background: red; */
			grid-column: 5 / span 6;
			grid-row: 4 / span 10;
			font-size: 4.25em;
			font-weight: 700;
		}
		&.side-grid {
			/* background: red; */
			grid-column: 11 / span 4;
			grid-row: 4 / span 6;
			/* margin-inline: 4em; */

			li {
				font-size: 1.5em;
				font-weight: 500;
				margin-block: 3.25em;
				/* background: blue; */
				display: flex;
				flex-direction: row;
				align-content: center;

				span {
					margin-inline: 0.5em;
				}
			}
		}
		&.social-icons {
			color: #f8f8f8;
			grid-column: 11 / span 3;
			grid-row: 13 / span 1;
			width: 100%;

			display: flex;
			place-items: center;

			span {
				margin-inline: 0.5em;
				font-size: 2em;
			}
		}
		section {
			color: #f8f8f8;
			place-self: center;
		}
	}
`;

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
			className='flex justify-between items-center h-20 md:h-24 mx-auto 
			my-4 
			px-4
			xl:max-w-[1440px]
			' /* previously classname='navWrapperFlex'*/
		>
			{/* Logo */}

			<div
				className='hidden md:flex justify-center items-center px-2' /* previously classname='navWrapperFlex w-aboveMenuZindex'*/
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

			{/* <Link href='/' passHref> */}
			<div
				className='flex md:hidden justify-center items-center px-2' /* previously classname='navWrapperFlex w-aboveMenuZindex'*/
			>
				<Link href='/' passHref>
					<a aria-current='page' aria-label='home' className='cursor-pointer'>
						<Image
							src={logomobile}
							alt='logo-mobile'
							width={38}
							height={38}
							// layout='intrinsic'
							// objectFit='contain'
							// priority
						/>
					</a>
				</Link>
			</div>
			{/* </Link> */}

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

			{/* Hamburger Menu */}

			<ul className='mx-2 md:mx-4 lg:mx-8 xl:mx-16' onClick={handleToggle}>
				<HamburgerMenu />
			</ul>

			{/* Mobile Menu */}

			<div className={nav ? 'nav-open' : 'nav-closed'}>
				<ToggleMenuWrapper>
					<div className='flex-container'>
						<div className='grid-container'>
							<div className='left-grid'>
								<ul onClick={handleToggle}>
									<li className='about'>
										<Link href='/about' passHref={true}>
											<a>ABOUT</a>
										</Link>
									</li>
									<li className='visit'>
										<Link href='/visit' passHref={true}>
											<a>VISIT</a>
										</Link>
									</li>
									<li className='give'>
										<Link href='/give' passHref={true}>
											<a>GIVE</a>
										</Link>
									</li>
									<li className='watch'>
										<Link href='/watch' passHref>
											<a>WATCH</a>
										</Link>
									</li>
								</ul>
							</div>
							<div className='right-grid'>
								<ul onClick={handleToggle}>
									<li className='ministries'>
										<Link href='/ministries' passHref>
											<a>MINISTRIES</a>
										</Link>
									</li>
									<li className='care'>
										<Link href='/care' passHref>
											<a>CARE</a>
										</Link>
									</li>
									<li className='follow-jesus'>
										<Link href='/follow-jesus' passHref>
											<a>FOLLOW JESUS</a>
										</Link>
									</li>
								</ul>
							</div>
							<div className='side-grid'>
								<ul onClick={handleToggle}>
									<li className='shop'>
										<span
											className='icon-shopping-bag'
											role='img'
											aria-label='shopping-bag'
										>
											{/* <FaShoppingBag /> */}
										</span>
										<Link href='/shop' passHref>
											<a>SHOP</a>
										</Link>
									</li>
									<li className='bible-reading-plan'>
										<span className='icon-bible' role='img' aria-label='bible'>
											{/* <FaBible /> */}
										</span>
										<Link href='bible-reading-plan' passHref>
											<a>BIBLE READING PLAN</a>
										</Link>
									</li>
									<li className='celebration-worship'>
										<span
											className='icon-praying-hands'
											role='img'
											aria-label='praying-hands'
										>
											{/* <FaPrayingHands /> */}
										</span>
										<Link href='/celebration-worship' passHref>
											<a>CELEBRATION WORSHIP</a>
										</Link>
									</li>
									<li className='tv-ministry'>
										<span
											className='icon-screen'
											role='img'
											aria-label='screen'
										>
											<CgScreen />
										</span>
										<Link href='tv-ministry' passHref>
											<a>TV MINISTRY</a>
										</Link>
									</li>
									<li className='ckids-online'>
										<span className='icon-globe' role='img' aria-label='globe'>
											<VscGlobe />
										</span>
										<Link href='ckids-online' passHref>
											<a>CKIDS ONLINE</a>
										</Link>
									</li>
								</ul>
							</div>
							<div className='social-icons' onClick={handleToggle}>
								<span className='icon'>
									<Link href='/' passHref>
										<a>{/* <FaFacebook /> */}</a>
									</Link>
								</span>
								<span className='icon'>
									<Link href='/' passHref>
										<a>{/* <FaInstagram /> */}</a>
									</Link>
								</span>
								<span className='icon'>
									<Link href='/' passHref>
										<a>{/* <FaTwitter /> */}</a>
									</Link>
								</span>
								<span className='icon'>
									<Link href='/' passHref>
										<a>{/* <FaYoutube /> */}</a>
									</Link>
								</span>
								<span className='icon'>
									<Link href='/' passHref>
										<a>{/* <FaRegEnvelope /> */}</a>
									</Link>
								</span>
							</div>
						</div>
					</div>
				</ToggleMenuWrapper>
			</div>
		</nav>
	);
}

// function NavMenu(props) {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const handleToggle = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	// useState(() => {
// 	// 	console.log('The Navbar useState is set to:'[isOpen]);
// 	// }, [isOpen]);

// 	// useEffect(() => {
// 	// 	console.log('The Navbar component useState is set to:', isOpen);
// 	// }, [isOpen]);
// 	// if (isOpen) {
// 	// 	return <ToggleMenu />;
// 	// }
// 	// if (!isOpen) {
// 	// }

// 	return (
// 		<>
// 			{/* <div className=''>
// 				<ToggleMenu />
// 			</div> */}

// 			<div className='navbar-scss'>
// 				<div className='navbar w-nav'>
// 					<div className='navWrapperFlex'>
// 						<div className='navWrapperFlex'>
// 							<Link href='/' passHref={true}>
// 								<a aria-current='page' aria-label='home'>
// 									<Image
// 										src={logo}
// 										alt='logo'
// 										width={167}
// 										height={47}
// 										layout='intrinsic'
// 										objectFit='contain'
// 									/>
// 								</a>
// 							</Link>
// 						</div>

// 						<div className='navWrapperFlex'>
// 							<div className='nav-container'>
// 								<nav className='nav-menu w-nav-link'>
// 									<a href='about'>ABOUT</a>
// 									<a href='visit'>VISIT</a>
// 									<a href='watch'>WATCH</a>
// 									<a href='give'>GIVE</a>
// 								</nav>
// 							</div>
// 						</div>

// 						<div className='navWrapperFlex'>
// 							<div className='hamburgerMenu'>
// 								<ul onClick={handleToggle}> {props.children} </ul>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// function NavItem(props) {
// 	const [open, setOpen] = useState(false); // verified

// 	const [navbarOpen, setNavbarOpen] = useState(false);

// 	useEffect(() => {
// 		console.log('The NavItem useState is set to:', open);
// 	}, [open]);

// 	return (
// 		<li className='nav-item'>
// 			<a
// 				href='#'
// 				className='icon-button'
// 				//  onClick={() => setOpen(!open)}
// 				onClick={() => setNavbarOpen(!navbarOpen)}
// 			>
// 				{props.menuButton}
// 			</a>

// 			<div className='z-index'>{open && props.children}</div>
// 		</li>
// 	);
// }

export default Navbar;
