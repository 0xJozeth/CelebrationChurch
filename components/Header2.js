//  MISC IMPORTS
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// IMAGE IMPORTS
import celebrationLogo from '/public/cc-logo@1x.png';
// ICONS IMPORTS
import { RiArrowRightUpLine } from 'react-icons/ri';
// COMPONENT IMPORTS
import { HamburgerMenu } from './Navbar/hamburgerMenu';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr 1fr;
	column-gap: 6vw;

	background: hsl(0, 0, 0, 97%); //red;

	margin-block: 1.5vw;
	height: 84px;

	li {
		margin-inline: 1vw;
		text-decoration: none;
		color: #070707;

		font-size: 1.25vw;
		font-family: 'neue-haas-grotesk-display';
		font-weight: 700;
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: #070707;
	}

	div {
		place-self: center;

		&.logo {
			display: grid;
			cursor: pointer;
		}

		&.navContainer {
			display: grid;
			grid-template-columns: max-content;

			ul {
				display: flex;
				justify-content: center;

				li {
					align-self: center; // aligns all items vertically

					&.divider {
						cursor: default;
						color: hsl(0, 0, 255, 1%);
					}
				}
			}
		}

		&.menuToggle {
			display: grid;
		}
	}
`;

const Header = ({ props }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Grid>
				<div className='logo'>
					<Link href='/' passHref>
						<Image
							src={celebrationLogo}
							width={167}
							height={46.5}
							alt='celebration-church-jacksonville-logo'
						/>
					</Link>
				</div>

				<div className='navContainer'>
					<ul>
						<li>
							<Link href='/about' passHref>
								<a>ABOUT</a>
							</Link>
						</li>
						<li className='divider'>/</li>
						<li>
							<Link href='/visit' passHref>
								<a>VISIT</a>
							</Link>
						</li>
						<li className='divider'>/</li>
						<li>
							<Link
								href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
								passHref
							>
								<a>WATCH</a>
							</Link>
							<RiArrowRightUpLine />
						</li>
						<li className='divider'>/</li>
						<li>
							<Link href='/give' passHref>
								<a>GIVE</a>
							</Link>
						</li>
					</ul>
				</div>

				<div className='menuToggle'>
					<ul>
						<motion.li
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
						</motion.li>
					</ul>
				</div>
			</Grid>
		</>
	);
};

export default Header;
