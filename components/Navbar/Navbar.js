import React, { useEffect, useState } from 'react';
import {
	AnimatePresence,
	AnimateSharedLayout,
	motion,
	useAnimation,
} from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import CCLogo from '/public/cc-logo@1x.png';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

//MOBILE IMPORTS
import { MdEmail, MdMenuBook } from 'react-icons/md';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import arrow from '/public/arrow@1x-white.svg';
import pagination from '/public/slider-pagination.svg';

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

import * as menuData from '/components/Navbar/data.js';
import SocialMenubar from './socialMenubar';
import MobileMenu from './MobileMenu';

const NavbarLogoOpen = styled.a`
	/* z-index: 100; */
	filter: ${(props) => (props.isOpen ? 'invert(1)' : 'none')};
	/* invert the logo when the isOpen prop is true */
`;
const NavbarLogoClosed = styled.a`
	/* z-index: 100; */
`;

const DesktopMenu = styled(motion.div)`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #070707;
	z-index: 50;
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

// TODO: EXPORT PATH & TRANSITION FOR BUTTON TO NEW FILE
const Button = styled.div`
	/* z-index: 100; */
	cursor: pointer;
	border: none;
`;

const Path = (props) => (
	<motion.path
		fill='transparent'
		strokeLinecap='round'
		strokeWidth='2'
		stroke={props.isOpen ? 'white' : 'hsl(0, 0%, 18%)'}
		{...props}
	/>
);

const Menu = (props) => {
	console.log('Menu props:', props);

	const closeMenu = () => {
		props.setIsOpen(false);
	};

	return (
		<div className='hidden md:flex justify-center items-start h-full w-full'>
			{menuData.columnLeftData.map((column, columnIndex) => (
				<div
					key={columnIndex}
					className='col-span-1 w-min h-[75vh] m-4 p-10 cursor-pointer'
				>
					<ul>
						{column.links.map((link, linkIndex) => (
							<li key={linkIndex}>
								{link.text === 'WATCH' ? (
									<motion.a
										href={link.href}
										target='_blank'
										rel='noopener noreferrer'
										className='block my-4 font-display font-semibold text-[96px] leading-tight text-[#f8f8f8]'
										initial='hidden'
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										onClick={() => {
											closeMenu();
										}}
									>
										{link.text}
									</motion.a>
								) : (
									<Link href={link.href} passHref>
										<motion.a
											className='block my-4 font-display font-semibold text-[96px] leading-tight text-[#f8f8f8]'
											initial='hidden'
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											onClick={() => {
												closeMenu();
											}}
										>
											{link.text}
										</motion.a>
									</Link>
								)}
							</li>
						))}
					</ul>
				</div>
			))}
			{menuData.columnRightData.map((column, columnIndex) => (
				<div
					key={columnIndex}
					className='col-span-1 w-min h-[75vh] m-4 p-10 cursor-pointer'
				>
					<ul>
						{column.links.map((link, linkIndex) => (
							<li key={linkIndex}>
								<Link href={link.href} passHref>
									<motion.a
										className='block my-4 font-display font-semibold text-[96px] leading-tight text-[#f8f8f8]'
										initial='hidden'
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										onClick={() => {
											closeMenu();
										}}
									>
										{link.text}
									</motion.a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
			{menuData.smallData.map((column, index) => (
				<div key={index} className='col-span-1 w-full h-[55vh] m-4 p-10'>
					<ul className='h-full'>
						{column.links.map((link, index) => (
							<li key={index} className=''>
								<motion.a
									whileHover={{ scale: 1.025 }}
									whileTap={{ scale: 0.9 }}
									href={link.href}
									className='flex my-8 font-display font-semibold text-[34px] items-center leading-tight text-[#f8f8f8]'
									onClick={closeMenu}
									target='_blank'
									rel='noopener noreferrer'
								>
									<span className='mr-4'>
										<FontAwesomeIcon
											className='items-center text-[24px]'
											icon={
												link.text === 'BIBLE READING PLAN'
													? faBible
													: link.text === 'CELEBRATION WORSHIP'
													? faPrayingHands
													: link.text === 'TV MINISTRY'
													? faTelevision
													: link.text === 'CKIDS ONLINE'
													? faBagShopping
													: null
											}
										/>
									</span>
									{link.text}
								</motion.a>
							</li>
						))}
					</ul>
					<SocialMenubar setIsOpen={props.setIsOpen} />
				</div>
			))}
		</div>
	);
};

const Navbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const [nav, setNav] = useState(false);
	const [slide, setSlide] = useState(false);

	function handleOptionClick() {
		setNav(false);
	}

	function handleToggle() {
		setNav(!nav);
	}

	console.log('Navbar props', props);

	// Create a function that updates the state
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		setIsOpen(false);
	};

	const transition = {
		duration: 0.15,
		ease: [0.43, 0.13, 0.23, 0.96],
	};

	console.log('Left:', menuData.columnLeftData);

	return (
		<>
			<nav className='py-2 px-6 flex items-center justify-between mx-auto'>
				<Link href='/'>
					<NavbarLogoClosed className='flex items-center p-2' isOpen={isOpen}>
						<Image
							src={CCLogo}
							alt='Logo'
							width={144}
							height={48}
							objectFit='contain'
							className={
								props.isOpen
									? 'invert-100 transition-all'
									: 'invert-0 transition-all'
							}
						/>
					</NavbarLogoClosed>
				</Link>
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

				<Button onClick={toggle} isOpen={isOpen}>
					<svg width='38' height='38' viewBox='0 0 23 23'>
						<Path
							animate={isOpen ? 'open' : 'closed'}
							initial={false}
							variants={{
								closed: { d: 'M 2 2.5 L 20 2.5', stroke: 'hsl(0, 0%, 18%)' },
								open: { d: 'M 3 16.5 L 17 2.5', stroke: 'hsl(0, 0%, 18%)' },
							}}
							transition={transition}
						/>
						<Path
							d='M 2 9.423 L 20 9.423'
							stroke='hsl(0, 0%, 18%)'
							animate={isOpen ? 'open' : 'closed'}
							initial={false}
							variants={{
								closed: { opacity: 1 },
								open: { opacity: 0 },
							}}
							transition={transition}
						/>
						<Path
							animate={isOpen ? 'open' : 'closed'}
							initial={false}
							variants={{
								closed: {
									d: 'M 2 16.346 L 20 16.346',
									stroke: 'hsl(0, 0%, 18%)',
								},
								open: { d: 'M 3 2.5 L 17 16.346', stroke: 'hsl(0, 0%, 18%)' },
							}}
							transition={transition}
						/>
					</svg>
				</Button>
				<AnimatePresence>
					{isOpen && (
						<>
							<DesktopMenu
								className='px-8'
								initial={{ x: '100%' }}
								animate={{ x: 0 }}
								exit={{ x: '100%' }}
								transition={{ duration: 1, ease: 'easeInOut' }}
								variants={{
									open: { x: 0 },
									closed: { x: '100%' },
								}}
								{...props}
								isOpen={isOpen}
							>
								<div className='py-2 flex items-center justify-between mx-auto'>
									<Link href='/'>
										<NavbarLogoOpen
											className='flex items-center p-2'
											isOpen={isOpen}
										>
											<Image
												src={CCLogo}
												alt='Logo'
												width={144}
												height={48}
												objectFit='contain'
												className={props.isOpen ? 'invert-100' : 'invert-0'}
												onClick={closeMenu}
											/>
										</NavbarLogoOpen>
									</Link>

									<Button onClick={toggle} isOpen={isOpen}>
										<svg width='38' height='38' viewBox='0 0 23 23'>
											<Path
												animate={isOpen ? 'open' : 'closed'}
												initial={false}
												variants={{
													closed: {
														d: 'M 2 2.5 L 20 2.5',
														stroke: 'hsl(0, 0%, 18%)',
													},
													open: {
														d: 'M 3 16.5 L 17 2.5',
														stroke: 'hsl(0, 0%, 18%)',
													},
												}}
												transition={transition}
											/>
											<Path
												d='M 2 9.423 L 20 9.423'
												stroke='hsl(0, 0%, 18%)'
												animate={isOpen ? 'open' : 'closed'}
												initial={false}
												variants={{
													closed: { opacity: 1 },
													open: { opacity: 0 },
												}}
												transition={transition}
											/>
											<Path
												animate={isOpen ? 'open' : 'closed'}
												initial={false}
												variants={{
													closed: {
														d: 'M 2 16.346 L 20 16.346',
														stroke: 'hsl(0, 0%, 18%)',
													},
													open: {
														d: 'M 3 2.5 L 17 16.346',
														stroke: 'hsl(0, 0%, 18%)',
													},
												}}
												transition={transition}
											/>
										</svg>
									</Button>
								</div>
								<Menu setIsOpen={setIsOpen} />
								<MobileMenu
									nav={nav}
									slide={slide}
									handleOptionClick={handleOptionClick}
									handleToggle={handleToggle}
									isOpen={isOpen}
									setIsOpen={setIsOpen}
								/>

								<div>
									<h1 className='text-white'>WHAT THE ABSOLUTE FUCK</h1>
								</div>
							</DesktopMenu>
						</>
					)}
				</AnimatePresence>
			</nav>
		</>
	);
};

export default Navbar;
