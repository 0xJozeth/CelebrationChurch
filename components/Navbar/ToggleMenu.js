import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import {
// 	FaShoppingBag,
// 	FaBible,
// 	FaPrayingHands,
// 	FaFacebook,
// 	FaInstagram,
// 	FaTwitter,
// 	FaYoutube,
// 	FaRegEnvelope,
// } from 'react-icons/Fa';
import { CgScreen } from 'react-icons/cg';
import { VscGlobe } from 'react-icons/vsc';
import { IoCloseOutline } from 'react-icons/io5';
import { HamburgerMenu } from './hamburgerMenu';

export const ToggleMenuWrapper = styled(motion.div)`
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

	position: sticky;

	top: 0;
	right: 0;
	left: 0;
	bottom: 0;

	opacity: 99.9%;
	min-height: 100%;

	width: 100%;
	background: #070707;

	z-index: 999;

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
			/* background: darkgoldenrod; */
			color: #f8f8f8;
			grid-column: 11 / span 3;
			grid-row: 13 / span 1;
			width: 100%;
			/* height: 100%; */
			/* place-self: center; */
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

const ToggleMenu = () => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<>
			{isOpen && (
				<ToggleMenuWrapper>
					<div className='flex-container'>
						<div className='grid-container'>
							<div className='close-button' onClick={() => setIsOpen(!isOpen)}>
								<section>
									{/* <Link href='/' passHref={true}>
										<a> */}
									<IoCloseOutline size={'3.5em'} />
									{/* </a>
									</Link> */}
									<HamburgerMenu />
								</section>
							</div>
							<div className='left-grid'>
								<ul>
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
										<Link href='/watch' passHref={true}>
											<a>WATCH</a>
										</Link>
									</li>
								</ul>
							</div>
							<div className='right-grid'>
								<ul>
									<li className='ministries'>
										<Link href='/ministries' passHref={true}>
											<a>MINISTRIES</a>
										</Link>
									</li>
									<li className='care'>
										<Link href='/care' passHref={true}>
											<a>CARE</a>
										</Link>
									</li>
									<li className='follow-jesus'>
										<Link href='/follow-jesus' passHref={true}>
											<a>FOLLOW JESUS</a>
										</Link>
									</li>
								</ul>
							</div>
							<div className='side-grid'>
								<ul>
									<li className='shop'>
										<span
											className='icon-shopping-bag'
											role='img'
											aria-label='shopping-bag'
										>
											{/* <FaShoppingBag /> */}
										</span>
										<Link href='/shop' passHref={true}>
											<a>SHOP</a>
										</Link>
									</li>
									<li className='bible-reading-plan'>
										<span className='icon-bible' role='img' aria-label='bible'>
											{/* <FaBible /> */}
										</span>
										<Link href='bible-reading-plan' passHref={true}>
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
										<Link href='/celebration-worship' passHref={true}>
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
										<Link href='tv-ministry' passHref={true}>
											<a>TV MINISTRY</a>
										</Link>
									</li>
									<li className='ckids-online'>
										<span className='icon-globe' role='img' aria-label='globe'>
											<VscGlobe />
										</span>
										<Link href='ckids-online' passHref={true}>
											<a>CKIDS ONLINE</a>
										</Link>
									</li>
								</ul>
							</div>
							<div className='social-icons'>
								<span className='icon'>
									<Link href='/' passHref={true}>
										<a>{/* <FaFacebook /> */}</a>
									</Link>
								</span>
								<span className='icon'>
									<Link href='/' passHref={true}>
										<a>{/* <FaInstagram /> */}</a>
									</Link>
								</span>
								<span className='icon'>
									<Link href='/' passHref={true}>
										<a>{/* <FaTwitter /> */}</a>
									</Link>
								</span>
								<span className='icon'>
									<Link href='/' passHref={true}>
										<a>{/* <FaYoutube /> */}</a>
									</Link>
								</span>
								<span className='icon'>
									<Link href='/' passHref={true}>
										<a>{/* <FaRegEnvelope /> */}</a>
									</Link>
								</span>
							</div>
						</div>
					</div>
				</ToggleMenuWrapper>
			)}
		</>
	);
};

export default ToggleMenu;
