import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import CcLogo from '/public/cc-logo@1x.png';
import { motion } from 'framer-motion';
import { HamburgerMenu } from './Navbar/hamburgerMenu';
import { RiArrowRightUpLine } from 'react-icons/ri';

import styled from 'styled-components';

export const Grid = styled.div`
	// background: teal;
	display: grid;
	justify-items: space-around;
	column-gap: auto;
	/* grid-template-columns: repeat(auto-fit, 1fr); */
	grid-template-columns: repeat(3, auto-fit);
	grid-template-areas: 'logo navlinks menu';

	min-width: 100vw;
	height: 84px;
	padding: 2em;
	padding-block: 2em;
	margin-block: 2em;
	padding-bottom: 2em;

	@media only screeen and (min-width: 768px) {
		display: grid;
		justify-content: space-between;

		align-items: center;
		position: sticky;
		padding: 0.25em;
		z-index: 999;
		margin: 1em;

		grid-template-columns: 40% 60%;
		grid-template-areas: 'logo menu';
	}
	z-index: 999;

	background: #f8f8f8;
`;

export const Nav = styled.div`
	position: sticky;
	display: grid;

	grid-template-columns: 15% 1fr auto;
	grid-column-gap: 2.5%;
	grid-template-areas: 'logo navlinks menu';

	// 🎩 KEEP ALL PROPERTIES ABOVE 🪄 //
`;

export const ImageWrapper = styled.div`
	width: 100%;
	div {
		/* padding: 0.25em; */
	}
`;

export const StyledLogo = styled(Image)`
	cursor: pointer;
	padding-inline: 6em;
	justify-content: start;
	/* background: blue; */
	/* min-width: min-content; */
`;

export const NavWrapper = styled.nav`
	grid-area: navlinks;
	/* display: flex; */
	/* margin-inline: 4em; */
	/* padding-inline: 5em; */

	ul {
		display: flex;
		align-items: center;

		justify-content: space-around;
		/* padding-inline: 4em; */
	}

	@media screen and (max-width: 960px) {
		display: none;
	}
`;

export const NavLink = styled.a`
	text-decoration: none;
	color: #070707;
	font-family: 'neue-haas-grotesk-display';
	font-weight: 700;
	cursor: pointer;
`;

const WatchButton = styled.div`
	display: flex;
`;

export const Styledul = styled.ul`
	text-decoration: none;
`;

export const Styledli = styled(motion.li)`
	text-decoration: none;
	list-style-type: none;
	padding: 0.25rem;
`;

export const Styleda = styled.a`
	text-decoration: none;
	color: #070707;
	font-family: 'neue-haas-grotesk-display';
	font-weight: 700;
	cursor: pointer;
`;

export const StyledDivider = styled.a`
	color: #070707;
	text-decoration: none;
	padding: 0rem 2rem;
	font-family: 'neue-haas-grotesk-display';
	font-weight: 700;
	font-size: 2rem;
	cursor: default;
`;

export const MenuWrapper = styled(motion.div)`
	grid-area: menu;
	justify-self: center;
	align-self: center;
	border: none;
	background: #f8f8f8;

	@media screen and (max-width: 768px) {
		transition: 0.8s all ease;
		grid-column: 3;
	}

	// outline: 5px solid violet;
`;

const OpenMenu = styled(motion.div)`
	position: fixed;

	top: 0;
	right: 0;
	left: 0;
	bottom: 0;

	opacity: 99.9%;
	min-height: 100%;
	background: #070707;

	div {
		&.flex-container {
			display: flex;

			/* padding: 5em; */

			place-items: center;
			align-items: center;
			width: 100%;
			height: 100%;
		}

		&.grid-container {
			display: grid;
			align-items: top;
			grid-template-areas: 'left middle';

			/* padding-block: 2em; */
			/* padding-inline: 5%; */
		}

		&.flex-social-icons {
			display: flex;
			align-items: center;
			/* justify-content: center; */
			padding-left: 4em;

			/* margin-top: 30em; */

			/* background: plum; */

			/* grid-area: social; */

			&.span {
				color: #f8f8f8;
				max-height: min-content;
				max-width: min-content;
				/* padding-inline: 1em; */
			}
		}

		&.space-between {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: min-content;
			/* justify-content: space-between; */
			row-gap: 15%;
		}

		&.container-right {
			max-height: min-content;
			/* height: 25vw; */
			/* background: red; */
		}

		ul {
			&.left-grid {
				display: grid;

				grid-area: left;
				grid-template-columns: 1fr;
				grid-auto-rows: min-content;
				min-width: max-content;
				width: 100%;

				grid-template-areas: 'about' 'visit' 'give' 'watch';
			}

			&.middle-grid {
				display: grid;

				grid-area: middle;
				grid-template-columns: 1fr;
				grid-auto-rows: min-content;

				min-width: max-content;
				width: 100%;

				grid-template-areas: 'ministries' 'care' 'followjesus' '.';
			}

			&.right-grid {
				display: grid;
				grid-template-columns: 1fr;

				/* grid-auto-rows: 1fr; */

				grid-template-areas: 'shop' 'bible-reading-plan' 'celebration-worship' 'tv-ministry' 'ckids-online';

				font-size: 0.4rem;
			}
		}
	}

	li {
		color: #f8f8f8;

		margin-inline: 4rem;
		margin-block: 3rem;
		font-family: 'neue-haas-grotesk-display';
		font-weight: 700;
		font-size: 3.25em;
		cursor: default;
		/* height: 100%; */
	}

	section {
		/* margin-block: 4em; */

		div {
			display: flex;
			color: #f8f8f8;

			&.close-button {
				position: fixed;
				margin: 2em;
				top: 0;
				right: 0;
			}

			span {
				/* padding-inline: 1em; */

				&.icon {
					/* padding-block: 2em; */

					/* padding-inline: 1.5em; */

					color: #f8f8f8;
					scale: 1.5;
				}
			}
		}

		li {
			display: flex;
			justify-content: start;
			line-break: strict;

			text-align: left;
			width: 100%;
			/* padding-block: 2em; */
			/* padding-inline: 2em; */

			span {
				/* padding-right: 1em; */
			}
		}
	}
`;

const Header = ({ props }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Grid>
				<motion.div
					whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
							x: '-1vw',
						},
						visible: {
							scale: 1,
							opacity: 1,
							x: 0,
							transition: {
								type: 'spring',
								duration: 1,
								bounce: 0.6,
								delay: 0.4,
							},
						},
					}}
				>
					<Link href='/' passHref>
						<ImageWrapper>
							<div>
								<StyledLogo
									src={CcLogo}
									objectFit='contain'
									width={90}
									height={60}
									layout='fill'
								/>
							</div>
						</ImageWrapper>
					</Link>
				</motion.div>

				<NavWrapper>
					<ul>
						<Styledli
							whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 0.8,
									opacity: 0,
									y: '1vh',
								},
								visible: {
									scale: 1,
									opacity: 1,
									y: 0,
									transition: {
										type: 'spring',
										duration: 1,
										bounce: 0.6,
										delay: 0.4,
									},
								},
							}}
						>
							<Link href='/about' passHref>
								<NavLink>ABOUT</NavLink>
							</Link>
						</Styledli>
						<Styledli
							whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 0.8,
									opacity: 0,
									y: '1vh',
								},
								visible: {
									scale: 1,
									opacity: 1,
									y: 0,
									transition: {
										type: 'spring',
										duration: 1,
										bounce: 0.6,
										delay: 0.8,
									},
								},
							}}
						>
							<StyledDivider>/</StyledDivider>
						</Styledli>
						<Styledli
							whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 0.8,
									opacity: 0,
									y: '1vh',
								},
								visible: {
									scale: 1,
									opacity: 1,
									y: 0,
									transition: {
										type: 'spring',
										duration: 1,
										bounce: 0.6,
										delay: 0.4,
									},
								},
							}}
						>
							<Link href='/visit' passHref>
								<NavLink>VISIT</NavLink>
							</Link>
						</Styledli>
						<Styledli
							whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 0.8,
									opacity: 0,
									y: '1vh',
								},
								visible: {
									scale: 1,
									opacity: 1,
									y: 0,
									transition: {
										type: 'spring',
										duration: 1,
										bounce: 0.6,
										delay: 0.8,
									},
								},
							}}
						>
							<StyledDivider>/</StyledDivider>
						</Styledli>
						<Styledli
							whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 0.8,
									opacity: 0,
									y: '1vh',
								},
								visible: {
									scale: 1,
									opacity: 1,
									y: 0,
									transition: {
										type: 'spring',
										duration: 1,
										bounce: 0.6,
										delay: 0.4,
									},
								},
							}}
						>
							<Link
								href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
								passHref
							>
								<NavLink>
									<WatchButton>
										WATCH
										<RiArrowRightUpLine />
									</WatchButton>
								</NavLink>
							</Link>
						</Styledli>
						<Styledli
							whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 0.8,
									opacity: 0,
									y: '1vh',
								},
								visible: {
									scale: 1,
									opacity: 1,
									y: 0,
									transition: {
										type: 'spring',
										duration: 1,
										bounce: 0.6,
										delay: 0.8,
									},
								},
							}}
						>
							<StyledDivider>/</StyledDivider>
						</Styledli>
						<Styledli
							whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 0.8,
									opacity: 0,
									y: '1vh',
								},
								visible: {
									scale: 1,
									opacity: 1,
									y: 0,
									transition: {
										type: 'spring',
										duration: 1,
										bounce: 0.6,
										delay: 0.4,
									},
								},
							}}
						>
							<Link href='/give' passHref>
								<NavLink>GIVE</NavLink>
							</Link>
						</Styledli>
					</ul>
				</NavWrapper>

				<MenuWrapper
					whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
							x: '1vw',
						},
						visible: {
							scale: 1,
							opacity: 1,
							x: 0,
							transition: {
								type: 'spring',
								duration: 1,
								bounce: 0.6,
								delay: 0.4,
							},
						},
					}}
				>
					<HamburgerMenu onClick={() => setIsOpen(!isOpen)} />
				</MenuWrapper>

				{/* <OpenMenu>
					<div className='flex-container'>
						<div className='grid-container'>
							<ul className='left-grid'>
								<li className='ministries'>ABOUT</li>
								<li className='visit'>VISIT</li>
								<li className='give'>GIVE</li>
								<li>WATCH</li>
							</ul>
							<ul className='middle-grid'>
								<li className='ministries'>MINISTRIES</li>
								<li className='care'>CARE</li>
								<li className='follow-jesus'>FOLLOW JESUS</li>
							</ul>
						</div>
						<section>
							<div className='close-button'>
								<IoCloseOutline size={'3em'} />
							</div>
							<div className='space-between'>
								<div className='container-right'>
									<ul className='right-grid'>
										<li className='shop'>
											<span
												className='icon-shopping-bag'
												role='img'
												aria-label='shopping-bag'
											>
												<FaShoppingBag />
											</span>
											SHOP
										</li>
										<li className='bible-reading-plan'>
											<span
												className='icon-bible'
												role='img'
												aria-label='bible'
											>
												<FaBible />
											</span>
											BIBLE READING PLAN
										</li>
										<li className='celebration-worship'>
											<span
												className='icon-praying-hands'
												role='img'
												aria-label='praying-hands'
											>
												<FaPrayingHands />
											</span>
											CELEBRATION WORSHIP
										</li>
										<li className='tv-ministry'>
											<span
												className='icon-screen'
												role='img'
												aria-label='screen'
											>
												<CgScreen />
											</span>
											TV MINISTRY
										</li>
										<li className='ckids-online'>
											<span
												className='icon-globe'
												role='img'
												aria-label='globe'
											>
												<VscGlobe />
											</span>
											CKIDS ONLINE
										</li>
									</ul>
								</div>

								<div className='flex-social-icons'>
									<span className='icon'>
										<FaFacebook />
									</span>
									<span className='icon'>
										<FaInstagram />
									</span>
									<span className='icon'>
										<FaTwitter />
									</span>
									<span className='icon'>
										<FaYoutube />
									</span>
									<span className='icon'>
										<FaRegEnvelope />
									</span>
								</div>
							</div>
						</section>
					</div>
				</OpenMenu> */}
			</Grid>
		</>
	);
};

export default Header;
