import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { motion } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';

import logo from '/public/cc-logo@1x.png';
import ToggleMenu from '/components/Navbar/ToggleMenu.js';

import { HamburgerMenu } from '/components/Navbar/hamburgerMenu/index.jsx';

function App({ navbarOpen, setNavbarOpen }) {
	const [isOpen, setIsOpen] = useState(false);

	// const toggle = () => {
	// 	setIsOpen(!isOpen);
	// };

	return (
		<Navbar>
			<NavItem /* className='low-z-index'*/ menuButton={<HamburgerMenu />}>
				<div /* className='high-z-index' */>
					{/* <ToggleMenu toggle={toggle} isOpen={isOpen} /> */}
				</div>
			</NavItem>
		</Navbar>
	);
}

function Navbar(props) {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	// useState(() => {
	// 	console.log('The Navbar useState is set to:'[isOpen]);
	// }, [isOpen]);

	useEffect(() => {
		console.log('The Navbar component useState is set to:', isOpen);
	}, [isOpen]);
	if (isOpen) {
		return <ToggleMenu />;
	}
	if (!isOpen) {
	}

	return (
		<>
			<div className=''>
				<ToggleMenu />
			</div>

			<div className='navbar-scss'>
				<div className='navbar w-nav'>
					<div className='navWrapperFlex'>
						<div className='navWrapperFlex'>
							<Link href='/' passHref={true}>
								<a aria-current='page' aria-label='home'>
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

						<div className='navWrapperFlex'>
							<div className='nav-container'>
								<nav className='nav-menu w-nav-link'>
									<a href='about'>ABOUT</a>
									<a href='visit'>VISIT</a>
									<a href='watch'>WATCH</a>
									<a href='give'>GIVE</a>
								</nav>
							</div>
						</div>

						<div className='navWrapperFlex'>
							<div className='hamburgerMenu'>
								<ul onClick={handleToggle}> {props.children} </ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function NavItem(props) {
	const [open, setOpen] = useState(false); // verified

	const [navbarOpen, setNavbarOpen] = useState(false);

	useEffect(() => {
		console.log('The NavItem useState is set to:', open);
	}, [open]);

	return (
		<li className='nav-item'>
			<a
				href='#'
				className='icon-button'
				//  onClick={() => setOpen(!open)}
				onClick={() => setNavbarOpen(!navbarOpen)}
			>
				{props.menuButton}
			</a>

			<div className='z-index'>{open && props.children}</div>
		</li>
	);
}

export default App;
