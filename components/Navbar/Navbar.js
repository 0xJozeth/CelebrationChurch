import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import CCLogo from '/public/cc-logo@1x.png';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const NavbarLogo = styled.a`
	z-index: 100;
	filter: ${(props) =>
		props.isOpen
			? 'invert(1)'
			: 'none'}; /* invert the logo when the isOpen prop is true */
`;

const DesktopMenu = styled.div`
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
	z-index: 100;
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

	const data = [
		{
			links: [
				{ text: 'ABOUT', href: 'about' },
				{ text: 'VISIT', href: 'visit' },
				{ text: 'WATCH', href: 'watch' },
				{ text: 'GIVE', href: 'give' },
			],
		},
		{
			links: [
				{ text: 'MINISTRIES', href: 'ministries' },
				{ text: 'CARE', href: 'care' },
				{ text: 'FOLLOW JESUS', href: 'follow-jesus' },
			],
		},
	];

	const smallData = [
		{
			links: [
				{ text: 'BIBLE READING PLAN', href: '#' },
				{ text: 'CELEBRATION WORSHIP', href: '#' },
				{ text: 'TV MINISTRY', href: '#' },
				{ text: 'CKIDS ONLINE', href: '#' },
			],
		},
	];

	return (
		<div className='flex justify-center items-center h-full w-full'>
			{data.map((column, index) => (
				<div key={index} className='col-span-1 w-full h-[75vh] m-4 p-10'>
					<ul>
						{column.links.map((link, index) => (
							<li key={index}>
								<Link href={link.href}>
									<a
										className='block my-4 font-display font-semibold text-[96px] leading-tight text-[#f8f8f8]'
										onClick={closeMenu}
									>
										{link.text}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
			{smallData.map((column, index) => (
				<div key={index} className='col-span-1 w-full h-[75vh] m-4 p-10'>
					<ul>
						{column.links.map((link, index) => (
							<li key={index}>
								<a
									href={link.href}
									className='block my-4 font-display font-semibold text-[34px] leading-tight text-[#f8f8f8]'
									onClick={closeMenu}
								>
									{link.text}
								</a>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

const Navbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	console.log('Navbar props', props);

	// Create a function that updates the state
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const transition = {
		duration: 0.15,
		// ease: [0.17, 0.67, 0.83, 0.67],
		ease: [0.43, 0.13, 0.23, 0.96],
	};

	return (
		<>
			<nav className='p-2 flex items-center justify-between'>
				<Link href='/'>
					<NavbarLogo className='flex items-center p-2' isOpen={isOpen}>
						<Image
							src={CCLogo}
							alt='Logo'
							width={144}
							height={48}
							objectFit='contain'
							className={props.isOpen ? 'invert-100' : 'invert-0'}
						/>
					</NavbarLogo>
				</Link>
				<div className='hidden md:flex items-center justify-center'>
					<Link href='/'>
						<a className='px-4 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'>
							Home
						</a>
					</Link>
					<Link href='/about'>
						<a className='px-4 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>
							About
						</a>
					</Link>
				</div>
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
							// isOpen={isOpen}
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
							// isOpen={isOpen}
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
							// isOpen={isOpen}
						/>
					</svg>
				</Button>

				<DesktopMenu isOpen={isOpen} className='px-8'>
					<Menu setIsOpen={setIsOpen} />
				</DesktopMenu>
			</nav>
		</>
	);
};

export default Navbar;
