import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import arrow from '/public/link-arrow.svg';
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsFillArrowRightCircleFill, BsClockFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FaArrowCircleRight } from '/components/FontAwesome/fontawesome.js';

const VisitWrapper = styled.div`
	display: grid;
	place-items: center;
`;

const HeroWrapper = styled.div`
	display: grid;
	// grid-template-columns: minmax(150px, 50%) 1fr;
	// grid-template-columns: 2fr 1fr;
	margin-top: 5em;
	margin-bottom: 5em;
	margin-left: -20em;
	// outline: 3px dotted teal;
`;

const MaskContainer = styled.div`
	position: relative;

	display: grid;
	grid-column: span 1;
	// justify-self: start;

	font-family: 'neue-haas-grotesk-display';
	font-weight: 800;
	font-size: 12em;
	line-height: 12rem;
`;

const MaskChild = styled.div`
	position: relative;
	// display: grid;
	// place-self: end;
	// justify-items: stretch;
`;

const MaskChildEffect = styled.div`
	position: absolute;
	// display: inline-flex;
	top: 0px;
	left: 0px;
	// width: 100%;
	opacity: 1;
	color: rgba(255, 255, 255, 1);
	mix-blend-mode: overlay;
	z-index: 30;
	pointer-events: none;
`;

const MaskSpan = styled.span`
	display: inline-flex;

	font-family: 'kepler-std-display', serif;
	font-style: italic;
	font-weight: 500;
	font-size: 1.3em;
	padding-inline: 0.15em;
`;

const StyledVideoContainer = styled.div`
	position: absolute;

	padding-right: 5em;

	top: 7.5em;
	right: 3em;

	display: grid; // 💫
	justify-self: end; // 💫
	place-items: center; // 💫
`;

const StyledLinkContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	cursor: pointer;

	width: 15em;
	max-width: 15em;

	margin-top: 5em;
	margin-left: 10em;

	// // outline: 3px dotted teal;
`;

const LinkButtonText = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	text-decoration: none;

	align-items: center;

	font-family: 'neue-haas-grotesk-display';
	font-weight: 600;
	font-size: 1.5em;
	// width: 100%;
	max-width: 10em;
	// margin-inline: 2rem;
	// // outline: 3px dotted teal;
`;

const ArrowBtn = styled.div`
	display: flex;
	justify-content: center;
	padding: 0.25em;

	transform: rotate(-270deg) scale(0.5);
	// // outline: 3px dotted salmon;
	max-width: 2.5em;
`;

const SelectLocationSection = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 2em;
	// // outline: 3px dotted red;
	width: 100%;

	font-family: 'neue-haas-grotesk-display';
	font-weight: 800;
	font-size: 4rem;
	line-height: 8rem;
`;

const LocationAccordian = styled.div`
	width: 100%;
	justify-content: center;
	// // outline: 3px dotted blue;
`;

const Styledul = styled.div`
	text-decoration: none;
	font-weight: 600;
`;

const Styledli = styled.div`
	text-decoration: none;
	font-weight: 400;
	font-size: 1.25em;
	line-height: 1em;
	height: auto;

	cursor: pointer;
	margin: 0.5em 0 0.5em 0;
	// outline: 3px dotted teal;
`;

const ReachOutToUsSection = styled.div`
	display: grid;
	justify-self: start;

	margin: 1em 0 0.5em 1.5em;
	// margin-left: 1.5em;

	grid-column: span 1;
	// justify-self: start;

	font-family: 'neue-haas-grotesk-display';
	font-weight: 800;
	font-size: 10em;
	line-height: 1em;
	// outline: 3px dotted green;
`;

const ReachInfoSection = styled.div`
	margin-top: 2em;
	margin-bottom: 2em;
	// display: flex;
	// justify-content: space-evenly;
	// align-items: center;
	// width: 80%;
	font-family: 'neue-haas-grotesk-display';
	font-weight: 800;
	font-size: 2rem;
	// outline: 3px dotted red;

	height: auto; // 💫
	display: grid; // 💫
	grid-gap: 1rem; // 💫
	grid-template-columns: 15em 15em 15em; // 💫
	grid-template-rows: auto;
	grid-template-areas: 'header header header';
`;
const ReachColumn = styled.div`
	// display: flex;
	// flex-dirction: column;
	// align-items: center;

	// display: grid;
	// grid-template-columns: repeat(3, 1fr);
	// height: auto;
	// gap: 1em;
	// outline: 3px dotted blue;

	display: flex;
	flex-direction: column;
	padding: 1rem;
	justify-content: space-between;
`;

const ReachTitle = styled.div`
	text-decoration: none;
	font-weight: 600;
	font-size: 1.2em;
	grid-area: header; // 💫
	margin-bottom: 1em;
`;

const Reachli = styled.div`
	text-decoration: none;
	font-weight: 400;
	font-size: 0.85em;
`;

const ReachCardGrid = styled.div`
	display: grid;
	grid-template-columns: 0.5em 1fr;
	gap: 2em;
	// align-self: start;
	height: 7em;
	// // outline: 3px dotted salmon;
`;

export default function VisitDesktop(props) {
	const [usa, setUsa] = useState(false);
	const [international, setInternational] = useState(false);
	const [global, setGlobal] = useState(false);

	const handleUsa = () => {
		setUsa(!usa);
	};
	const handleInternational = () => {
		setInternational(!international);
	};
	const handleGlobal = () => {
		setGlobal(!global);
	};

	useEffect(() => {
		console.log('The Uua useState is set to:', usa);
	});
	useEffect(() => {
		console.log('The international useState is set to:', international);
	});
	useEffect(() => {
		console.log('The global useState is set to:', global);
	});

	return (
		<>
			<Head>
				<title>Visit Celebration Church</title>
				{/* <meta name='description' content='Generated by create next app' /> */}
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<VisitWrapper>
				<HeroWrapper>
					<MaskContainer>
						<MaskChild>
							{/* <h1> */}
							WE’RE SO <br />
							<MaskSpan>
								GLAD <br />
							</MaskSpan>
							<br />
							YOU’RE HERE
							{/* </h1> */}
						</MaskChild>
						<MaskChildEffect>
							{/* <h1> */}
							WE’RE SO <br />
							<MaskSpan>
								GLAD <br />
							</MaskSpan>
							<br />
							YOU’RE HERE
							{/* </h1> */}
						</MaskChildEffect>
					</MaskContainer>
					<StyledLinkContainer>
						<Link href='/'>
							<LinkButtonText>
								COME VISIT US
								<ArrowBtn>
									<Image src={arrow} alt='come-visit-arrow' />
								</ArrowBtn>
							</LinkButtonText>
						</Link>
					</StyledLinkContainer>
					<StyledVideoContainer>
						<iframe
							src='https://player.vimeo.com/video/688965998?h=9fc6981331&amp;&controls=0&badge=0&autoplay=1&muted=1&loop=1&autopause=0&amp;player_id=0&amp;app_id=58479'
							frameBorder='0'
							allowFullScreen
							height='720'
							width='880'
						></iframe>
					</StyledVideoContainer>
				</HeroWrapper>
				<SelectLocationSection>
					<LocationAccordian>
						<Styledul>SELECT A LOCATION</Styledul>
						<Styledli onClick={handleUsa}>
							<div className='flex'>
								USA &nbsp;
								<li className={usa ? 'list-none hidden' : 'list-none block'}>
									&#43;
								</li>
								<li className={usa ? 'list-none block' : 'list-none hidden'}>
									&#45;
								</li>
							</div>
							<div
								className={
									usa
										? 'ml-40 w-full transition ease-in-out delay-200 translate-y-0 opacity-100 duration-300 block'
										: 'ml-40 w-full transition ease-in-out delay-0 translate-y-[-100vh] opacity-25 hidden'
								}
							>
								<ul className='flex-col items-center justify-center leading-normal'>
									<Link href='#' passHref>
										<li className='flex items-center'>
											<a className='flex relative hover:bg-black hover:text-white p-2 m-2 ease-in items-center'>
												<div className='hover:block hover:left-0'>
													<BsFillArrowRightCircleFill size={60} />
												</div>
												&nbsp;JACKSONVILLE
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												SOUTH FLORIDA
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												ORLANDO
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												WASHINGTON, D.C.
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												CHRISTIAN FAITH CENTER, NC
											</a>
										</li>
									</Link>
								</ul>
							</div>
						</Styledli>
						<Styledli onClick={handleInternational}>
							<div className='flex'>
								INTERNATIONAL &nbsp;
								<li
									className={
										international ? 'list-none hidden' : 'list-none block'
									}
								>
									&#43;
								</li>
								<li
									className={
										international ? 'list-none block' : 'list-none hidden'
									}
								>
									&#45;
								</li>
							</div>
							<div
								className={
									international
										? 'ml-40 w-full transition ease-in-out translate-y-0 opacity-100 duration-300 block'
										: 'ml-40 w-full transition ease-in-out delay-0 translate-y-[-100vh] opacity-25 hidden'
								}
							>
								<ul className='flex-col items-center justify-center leading-normal'>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												THE LIGHTHOUSE ANTWERP, BELGIUM
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												NETHERLANDS
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												PARIS
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												MOKAPANE SOUTH AFRICA
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												ZIMBABWE
											</a>
										</li>
									</Link>
								</ul>
							</div>
						</Styledli>
						<Styledli onClick={handleGlobal}>
							<div className='flex items-center'>
								GLOBAL PARTNERS &nbsp;
								<li className={global ? 'list-none hidden' : 'list-none block'}>
									&#43;
								</li>
								<li className={global ? 'list-none block' : 'list-none hidden'}>
									&#45;
								</li>
							</div>
							<div
								className={
									global
										? 'ml-40 w-full transition ease-in-out translate-y-0 opacity-100 duration-300 block'
										: 'ml-40 w-full transition ease-in-out delay-0 translate-y-[-100vh] opacity-25 hidden'
								}
							>
								<ul className='flex-col items-center justify-center leading-normal'>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												THE LIGHTHOUSE ANTWERP, BELGIUM
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												NETHERLANDS
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												PARIS
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												MOKAPANE SOUTH AFRICA
											</a>
										</li>
									</Link>
									<Link href='#' passHref>
										<li>
											<a className='hover:bg-black hover:text-white p-2 m-2 ease-in'>
												ZIMBABWE
											</a>
										</li>
									</Link>
								</ul>
							</div>
						</Styledli>
					</LocationAccordian>
				</SelectLocationSection>

				<ReachOutToUsSection>
					REACH OUT <MaskSpan>TO US</MaskSpan>
				</ReachOutToUsSection>

				<ReachInfoSection>
					<ReachColumn>
						<ReachTitle>MAILING ADDRESS</ReachTitle>
						<ReachCardGrid>
							<IoLocationSharp />
							<Reachli>
								Celebration Church <br />
								P. O. Box 551341 <br />
								Jacksonville, FL 32255
							</Reachli>
						</ReachCardGrid>
					</ReachColumn>

					<ReachColumn>
						<ReachTitle>CENTRAL OFFICES</ReachTitle>
						<ReachCardGrid>
							<IoLocationSharp />
							<Reachli>
								9555-1 R G Skinner Pkwy <br />
								Jacksonville, FL 32256
							</Reachli>
							<FaPhoneAlt />
							<Reachli>(904) 737-1121</Reachli>
						</ReachCardGrid>
					</ReachColumn>

					<ReachColumn>
						<ReachTitle>HOURS OF OPERATIONS</ReachTitle>
						<ReachCardGrid>
							<BsClockFill />
							<Reachli>
								<b>Monday–Thursday</b>
								<br />
								9AM to 5PM
								<br />
								<b>Friday</b>
								<br />
								Closed
								<br />
								<b>Sunday</b>
								<br />
								9AM to 1PM
							</Reachli>
						</ReachCardGrid>
					</ReachColumn>
				</ReachInfoSection>
			</VisitWrapper>
		</>
	);
}
