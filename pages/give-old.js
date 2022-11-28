import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import arrow from '/public/arrow@1x-white.svg';
import darkArrowRight from '/public/darkArrowRight.svg';
import arrowdown from '/public/arrow-down.svg';
import leftnav from '/public/navleft.svg';
import rightnav from '/public/navleft.svg';
import media from '/public/yourimpact.png';
import navigation from '/public/navigationbar-demo.svg';

import legacy from '/public/give-legacy.png';
import serve from '/public/serve.png';
import oneChild from '/public/oneChild.png';
import relief from '/public/DisasterReliefEfforts.png';

import { SiBitcoin } from 'react-icons/si';

import piggyBank from '/public/give-images/piggy-bank.svg';
import { MdOutlinePhoneAndroid } from 'react-icons/md';

import { motion } from 'framer-motion';
import GiveHero from '/public/give-hero.png';

import longArrow from '/public/arrow-long.svg';
import Give from './give';

import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
	faPiggyBank,
	faMobile,
	faMoneyBillTrendUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Grid = styled.div`
	display: grid;
	width: 100vw;
	grid-template-columns: 1fr;

	grid-template-rows: repeat(8, minmax(auto-fit, 1fr));

	h1,
	h2 {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 600;
		font-size: 12.5vw;
		text-align: left;
	}

	h3 {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 600;
		font-size: 2.75vw;
		text-align: left;
	}

	span {
		font-family: 'kepler-std-display', serif;
		font-size: 13.5vw;
		font-weight: 400;
		font-style: italic;
	}

	p {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 400;
		font-size: clamp(1.25rem, 1.5vw, 1.75vw);
		line-height: clamp(2rem, 1.5rem, 1.75rem);
		text-align: center;
		line-height: 2vw;
	}

	a {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 400;
		font-size: 1.75vw;
	}
`;

const WeLoveSection = styled.div`
	/* width: 100%; */
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: max-content 1fr;
	grid-template-areas: 'text image' 'text button';
	column-gap: 5vw;

	div {
		margin-block: 2vw;
		&.heading {
			position: relative;
			grid-column: text / span image;
			grid-row: 1;
			justify-self: start;

			margin-left: 5vw;
		}

		&.image {
			display: grid;
			grid-template-columns: 1fr;

			position: relative;

			grid-column: image;
			grid-row: image;
			justify-self: end;
			margin-top: 10vw;

			z-index: 1;
		}

		&.buttonContainer {
			//positioning//
			position: absolute;
			bottom: 0;
			right: 0;

			display: grid;
			grid-template-columns: 2fr 1fr;
			grid-template-areas: 'text arrow';

			grid-column: image;
			grid-row: 1;

			/* height: min-content; */
			/* margin-bottom: 7.5vw; */

			align-self: end;
			justify-self: end;

			margin-right: 2.5vw;
			margin-bottom: 2.5vw;

			/* outline: 3px solid #f8f8f8;
			*/
			border: 0.2vw solid #f8f8f8;
			padding: 0.5vw 2vw 0.5vw 2vw;

			align-self: center;

			transform: scale(0.5);

			z-index: 100;

			a {
				font-family: 'neue-haas-grotesk-display';
				color: #f8f8f8;
				font-size: 3vw;
			}
		}

		&.givenowText {
			grid-area: text;
			align-self: center;
		}

		&.arrowGrid {
			grid-area: arrow;
			align-self: center;
			padding: 0.5vw;
		}

		/* h1 {
			font-family: 'neue-haas-grotesk-display';
			font-weight: 600;
			font-size: 12.5vw;
			text-align: left;
		} */

		&.noEffect {
			width: max-content;
		}

		&.maskEffect {
			position: absolute;
			width: max-content;

			top: 0;
			left: 0;
			color: rgba(255, 255, 255, 1);
			mix-blend-mode: overlay;

			z-index: 99;
		}
	}
`;

const StyledArrowImage = styled(Image)`
	cursor: pointer;
	color: hsl(0, 0%, 97%);
`;

// const GiveWrapper = styled.div`
// 	display: grid;
// 	place-items: center;
// 	margin: 0 0 15em 0;
// `;

const StyledImage = styled(Image)`
	display: grid;
	width: 50%;
`;

const WhyWeGiveSection = styled.div`
	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: min-content repeat(2, 1fr);
	grid-template-areas: 'headingArea' 'paragraphArea' 'buttonArea';
	margin-inline: 5vw;

	div {
		&.heading {
			grid-area: headingArea;
			text-align: center;
			justify-self: center;
			margin-block: 3vw;
		}
		&.paragraph {
			grid-area: paragraphArea;
			margin-block: 1.5vw;
			margin-inline: 3vw;
		}

		&.button {
			display: grid;
			grid-area: buttonArea;
			grid-template-columns: repeat(5, 1fr);
			grid-template-areas: '. . button . .';
			margin-block: 1.5vw;
			button {
				border: none;
				background-color: rgba(0, 0, 0, 0);
			}
			a {
			}
		}
		&.learnMore {
			grid-area: button;

			justify-self: center;
		}
	}
`;

const YourImpactSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas: 'heading' 'slide' 'navigation';
	margin-inline: 2.5vw;

	div {
		justify-self: center;

		&.heading {
			grid-area: heading;
			justify-self: center;
		}

		&.slider {
			grid-area: slide;
			justify-self: center;

			display: grid;
			grid-template-columns: 0.05fr 1fr 1fr 0.05fr;
			column-gap: 2vw;
			grid-template-areas: 'leftnav media text rightnav';
			margin-block: 2.5vw;
			margin-inline: 2.5vw;

			div {
				&.leftnav {
					grid-area: leftnav;
					align-self: center;
					/* margin-right: 1.5vw; */
					width: 100%;
				}

				&.media {
					grid-area: media;
				}
				&.text {
					display: grid;
					grid-template-columns: 1fr;
					grid-auto-rows: min-content;
					grid-area: text;

					h3 {
						margin-inline: 3vw;
					}

					p {
						margin-block: 3vw;
						margin-inline: 3vw;
						text-align: left;
					}
				}
				&.rightnav {
					/* padding-inline: 1vw; */
					grid-area: rightnav;
					transform: rotate(180deg);
					align-self: center;
					/* margin-left: 1.5vw; */
					width: 100%;
				}
			}
		}

		&.navigation {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-template-areas: '. . button . .';
			margin-block: 1.5vw;
			justify-self: center;
			grid-area: navigation;
			column-gap: 5vw;

			div {
				&.button {
					grid-area: button;
				}
			}
		}
	}
`;

const OnlineGivingSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin-block: 3vw;
	margin-inline: 3vw;

	div {
		&.heading {
			display: grid;
			grid-template-columns: 1fr;
			margin-block: 3vw;
			justify-self: center;
		}

		&.ul {
			display: grid;
			margin-block: 3vw;
			grid-template-columns: max-content;
			justify-self: center;
		}

		&.givingLink {
			display: grid;
			grid-template-columns: 1fr min-content;
			grid-template-areas: 'text arrow';
			column-gap: 1.5vw;
			margin-inline: 3vw;
			justify-self: center;
			align-items: center;
			/* position: relative; */

			&.text {
				grid-area: text;
			}

			button {
				border: none;
				background-color: rgba(0, 0, 0, 0);
				font-family: 'neue-haas-grotesk-display';

				cursor: pointer;

				a {
					font-size: 2.5vw;
				}
			}
		}

		&.arrowImage {
			grid-area: arrow;
			/* position: relative; */
			/* position: relative; */
		}

		ul {
			justify-content: center;
			font-family: 'neue-haas-grotesk-display';
			font-weight: 400;
			font-size: 5vw;

			li {
				margin-block: 2.5vw;
			}
		}
	}
`;

const OtherWaysToGiveSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content;
	margin-block: 3vw;
	margin-inline: 3vw;

	div {
		&.heading {
			display: grid;
			grid-template-columns: 1fr;
			margin-block: 3vw;
			justify-self: center;
		}

		&.iconText {
			margin-block: 1.5vw;
			justify-self: center;
			h3 {
				font-weight: 600;
				font-size: 3vw;
			}
		}

		&.giveIcons {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(2, 1fr);

			column-gap: 3vw;
			row-gap: 3vw;
			place-self: center;

			div {
				&.iconBg {
					background-color: #070707;
					border-radius: 8vw;
					justify-self: center;
				}

				&.iconWrapper {
					display: grid;
					place-self: center;
					font-size: 12.5vw;
					margin: 2vw;

					/* filter: invert(1); */
					div {
						&.imageWrapper {
							/* filter: invert(1); */
						}
					}
				}
			}
		}

		&.ul {
			display: grid;
			margin-block: 3vw;
			grid-template-columns: max-content;
			justify-self: center;
		}
	}
`;

const LegacyTeamSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content;
	margin-block: 3vw;
	margin-inline: 3vw;
	width: auto;

	div {
		width: max-content;
		&.heading {
			position: relative;
			display: grid;
			grid-template-columns: 1fr;
			margin-block: 3vw;

			justify-self: center;
			width: 100%;
		}
		&.noEffect {
			position: absolute;
			z-index: 1;
		}
		&.maskEffect {
			position: absolute;
			top: 0;
			left: 0;
			color: rgba(255, 255, 255, 1);
			mix-blend-mode: overlay;
			z-index: 3;
		}
		&.legacyImageContainer {
			justify-self: end;

			margin-top: 10vw;
			grid-row: 1 / span 2;
			z-index: 2;

			div {
				&.absoluteImageContainer {
					/* position: absolute; */
					/* top: 10vw; */
					/* right: 0; */
				}
			}
		}

		&.paragraph {
			grid: display;
			grid-template-columns: 1fr;
			grid-auto-rows: min-content;
			margin-bottom: 5vw;
			width: 100%;
			grid-row: 2;
			padding-inline: 5vw;

			p {
				text-align: start;
			}
		}

		&.contactWrapper {
			display: grid;
			justify-self: center;
			/* width: 100%; */
		}

		&.contactUsLink {
			display: grid;
			grid-template-columns: max-content min-content;
			column-gap: 2vw;
			margin-block: 2vw;
			align-items: center;
			justify-self: center;
			cursor: pointer;
		}
	}
`;

const BeginToTitheSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content;
	margin-block: 3vw;
	margin-inline: 3vw;
	width: auto;

	div {
		width: max-content;
		&.heading {
			position: relative;
			display: grid;
			grid-template-columns: 1fr 1fr;
			margin-block: 3vw;

			justify-self: center;
			width: 100%;
		}
		&.headingWrapper {
			grid-column: 1 / span 2;
			grid-row: 1;
		}
		&.paragraph {
			grid-column: 1 / span 2;
			grid-row: 1 / span 2;
			width: 50%;
			justify-self: end;
			margin-right: 7.5vw;

			padding: 1.5vw;

			margin-top: 15vw;

			p {
				text-align: start;
			}
		}
		&.startTithingWrapper {
			display: grid;
			justify-self: center;
			/* width: 100%; */
		}

		&.startTithingLink {
			display: grid;
			grid-template-columns: max-content min-content;
			column-gap: 2vw;
			margin-block: 2vw;
			align-items: center;
			justify-self: center;
			cursor: pointer;
		}
	}
`;

const HaveQuestionsSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content;
	margin-block: 3vw;
	margin-inline: 3vw;
	width: auto;

	div {
		/* width: max-content; */
		&.heading {
			position: relative;
			display: grid;
			/* grid-template-columns: 2fr 1fr; */
			margin-block: 3vw;

			justify-self: center;
			width: 100%;
		}

		&.subText {
			display: grid;
			margin-block: 1.5vw;
			grid-row: 2;
			grid-template-columns: 1fr 1fr;
			column-gap: 3vw;
			align-items: center;

			p {
				text-align: start;
				width: fit-content;
			}
		}
		&.givingFaqsWrapper,
		.contactWrapper {
			display: grid;
			/* justify-self: center; */
			width: fit-content;
			grid-column: 2;
		}

		&.givingFaqsLink,
		.contactLink {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 2vw;
			margin-block: 2vw;
			align-items: center;
			justify-self: center;
			cursor: pointer;

			div {
				&.text {
					grid-column: 1;
				}
				&.arrow {
					grid-column: 2;
				}
			}
		}
	}
`;

export default function GiveDesktop() {
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
		console.log('The usa useState is set to:', usa);
	});
	useEffect(() => {
		console.log('The international useState is set to:', international);
	});
	useEffect(() => {
		console.log('The global useState is set to:', global);
	});
	return (
		<>
			<div className='flex justify-center w-[100vw] '>
				<div className='flex flex-col w-full max-w-[1440px] p-8 gap-y-[50px] mb-[80px] '>
					<div className='w-full md:h-[500px] lg:h-[700px] overflow-hidden '>
						<div className='relative w-full'>
							<div className='absolute top-[20px] left-[20px] mix-blend-overlay z-30 '>
								<h1 className='font-display font-bold text-[#f8f8f8] md:text-[126px] lg:text-[192px]'>
									WE&nbsp;LOVE
									<br />
									<span className='font-kepler italic text-[1.1em]'>
										SO&nbsp;WE&nbsp;GIVE
									</span>
								</h1>
							</div>
							<div className='absolute top-[20px] left-[20px] z-0'>
								<h1 className='font-display font-bold text-[#070707] md:text-[126px] lg:text-[192px]'>
									WE&nbsp;LOVE
									<br />
									<span className='font-kepler italic text-[1.1em]'>
										SO&nbsp;WE&nbsp;GIVE
									</span>
								</h1>
							</div>
						</div>
						<div className='relative flex justify-end items-end mt-[100px] z-20 '>
							<div className='flex w-3/4'>
								<Image src={GiveHero} alt='' />
							</div>
							<div className='absolute flex bottom-8 right-8 z-100 border-2 border-solid border-[#f8f8f8] p-4 md:w-[275px] lg:w-[350px] gap-x-2 cursor-pointer'>
								<Link href='give'>
									<div className='flex justify-center items-center'>
										<div className='flex justify-center items-center p-2'>
											<a className='font-display md:text-[24px] lg:text-[44px] text-[#f8f8f8]'>
												GIVE&nbsp;NOW
											</a>
										</div>
										<div className='flex w-[80px]'>
											<Image src={arrow} alt='' />
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center w-full overflow-hidden '>
						<div className='flex justify-center items-center w-full'>
							<h2 className='font-display font-bold text-center md:text-[126px] lg:text-[192px]'>
								WHY&nbsp;WE{' '}
								<span className='font-kepler font-thin italic  text-[1.1em]'>
									GIVE
								</span>
							</h2>
						</div>
						<div className='flex justify-center  p-8 mx-8 my-16'>
							<p className='font-display md:text-[18px] lg:text-[24px]'>
								Here at Celebration, we believe that God calls us to partake in
								the act of generosity, and that tithing is an act of worship and
								obedience to Jesus. When you give back to the Lord through
								Celebration Church, we commit to you that your offering will sow
								into the expansion of His Kingdom as we seek to share the
								transformative power of the Gospel all around the world.
							</p>
						</div>
						<div className='flex'>
							<Link href={'#onlinegiving'}>
								<div className='flex p-2 '>
									<button className='flex flex-col w-auto items-center gap-2'>
										<div className='flex'>
											<a className='font-display text-[24px] lg:text-[34px]'>
												LEARN MORE
											</a>
										</div>
										<div className='flex lg:hidden justify-center items-center'>
											<Image
												src={arrowdown}
												width={21}
												height={21}
												layout='fixed'
												alt='arrow-button-for-online-giving-section'
											/>
										</div>
										<div className='hidden lg:flex justify-center items-center'>
											<Image
												src={arrowdown}
												width={42}
												height={42}
												layout='fixed'
												alt='arrow-button-for-online-giving-section'
											/>
										</div>
									</button>
								</div>
							</Link>
						</div>
					</div>
					<div className='flex flex-col items-center w-full overflow-hidden '>
						<div className='relative flex flex-col items-center justify-start w-full '>
							<div className='flex justify-center items-center w-full'>
								<h2 className='font-display font-bold text-center md:text-[126px] lg:text-[192px]'>
									YOUR&nbsp;
									<span className='font-kepler font-thin italic  text-[1.1em]'>
										IMPACT
									</span>
								</h2>
							</div>
							<div id='yourImpactSection' className='w-full '>
								<div className='flex relative w-full p-4  overflow-hidden'>
									<div className='flex z-50 '>
										<button
											className='carousel-control-prev w-[50px] top-0 bottom-0 left-0 flex items-center justify-center border-0'
											type='button'
											data-bs-target='#carouselExampleCaptions'
											data-bs-slide='prev'
										>
											<div className='flex relative p-2 max-w-[100px]'>
												<Image src={leftnav} alt='' />
											</div>
										</button>
									</div>
									<div className='w-[4000px]'>
										<div className='overflow-y-auto w-full'>
											<div className='flex justify-between p-4  w-[1244px]'>
												<div className='flex relative justify-center w-1/2 '>
													<div className='flex justify-center items-center'>
														<Image src={serve} alt='...' />
													</div>
												</div>
												<div className='text-center p-4 flex flex-col items-center w-1/2 gap-y-[20px] '>
													<div className=''>
														<h5 className='font-display font-bold text-[#070707] text-[54px] py-4 uppercase'>
															Orange&nbsp;Park Food&nbsp;Pantry
														</h5>
													</div>
													<div className='flex flex-col p-8 mx-16 gap-y-8 '>
														<div className='flex justify-center  '>
															<p className='flex justify-center font-display font-normal text-left text-[20px] leading-7 text-[#7c7c7c]'>
																Our Orange Park location is making a tremendous
																impact in their local community through their
																weekly food pantry ministry – which served
																95,312 Clay County residents this past year.
																Because of your generosity, not only were we
																able to meet the tangible needs, but they were
																also able to open a 4,000 square foot space
																dedicated to helping further their food pantry
																and outreach efforts.
															</p>
														</div>
														<div className='flex justify-start items-center '>
															<Link href='/'>
																<div className='flex items-center py-2 gap-x-4'>
																	<div className='flex items-center'>
																		<p className='font-display font-normal text-[24px]'>
																			PARTNER&nbsp;WITH&nbsp;US
																		</p>
																	</div>
																	<div className='invert w-[88px]'>
																		<Image src={arrow} alt='' />
																	</div>
																</div>
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div className='flex justify-between p-4  w-full'>
												<div className='flex relative justify-center w-1/2 '>
													<div className='flex justify-center items-center'>
														<Image src={oneChild} alt='...' />
													</div>
												</div>
												<div className='text-center p-4 flex flex-col items-center w-1/2 gap-y-[20px] '>
													<div className=''>
														<h5 className='font-display font-bold text-[#070707] text-[54px] py-4 uppercase'>
															Orange&nbsp;Park Food&nbsp;Pantry
														</h5>
													</div>
													<div className='flex flex-col p-8 mx-16 gap-y-8 '>
														<div className='flex justify-center  '>
															<p className='flex justify-center font-display font-normal text-left text-[20px] leading-7 text-[#7c7c7c]'>
																Your generosity is helping the lives of
																thousands of children from our Celebration
																Zimbabwe location! Through partnership with
																OneChild, our congregation is sponsoring
																numerous kids in Zimbabwe and helping meet the
																physical, emotional, and spiritual needs of them
																and their families. If you are interested in
																contributing to this Kingdom impact, sponsor a
																child in need today.
															</p>
														</div>
														<div className='flex justify-start items-center '>
															<Link href='/'>
																<div className='flex items-center py-2 gap-x-4'>
																	<div className='flex items-center'>
																		<p className='font-display font-normal text-[24px]'>
																			PARTNER&nbsp;WITH&nbsp;US
																		</p>
																	</div>
																	<div className='invert w-[88px]'>
																		<Image src={arrow} alt='' />
																	</div>
																</div>
															</Link>
														</div>
													</div>
												</div>
											</div>
											<div className='flex justify-between p-4  w-full'>
												<div className='flex relative justify-center w-1/2 '>
													<div className='flex justify-center items-center'>
														<Image src={relief} alt='...' />
													</div>
												</div>
												<div className='text-center p-4 flex flex-col items-center w-1/2 gap-y-[20px] '>
													<div className=''>
														<h5 className='font-display font-bold text-[#070707] text-[54px] py-4 uppercase'>
															Orange&nbsp;Park Food&nbsp;Pantry
														</h5>
													</div>
													<div className='flex flex-col p-8 mx-16 gap-y-8 '>
														<div className='flex justify-center  '>
															<p className='flex justify-center font-display font-normal text-left text-[20px] leading-7 text-[#7c7c7c]'>
																One of Celebration’s deepest desires is to
																operate as the hands and feet of Jesus,
																especially when people are in need the most. We
																partner with Convoy of Hope on numerous
																occasions throughout the year to help meet
																tangible needs of those struck with natural
																disasters, war, or various other tragedies. To
																join the impact that these amazing partners are
																making daily, you can give here.
															</p>
														</div>
														<div className='flex justify-start items-center '>
															<Link href='/'>
																<div className='flex items-center py-2 gap-x-4'>
																	<div className='flex items-center'>
																		<p className='font-display font-normal text-[24px]'>
																			PARTNER&nbsp;WITH&nbsp;US
																		</p>
																	</div>
																	<div className='invert w-[88px]'>
																		<Image src={arrow} alt='' />
																	</div>
																</div>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='flex '>
										<button
											className='w-[50px] flex items-center justify-center border-0 '
											type='button'
											data-bs-target='#carouselExampleCaptions'
											data-bs-slide='next'
										>
											<div className='flex relative p-2 max-w-[100px] rotate-180'>
												<Image src={rightnav} alt='' />
											</div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center w-full overflow-hidden '>
						<div className='flex justify-center items-center w-full'>
							<h2 className='font-display font-bold text-center md:text-[126px] lg:text-[192px]'>
								ONLINE&nbsp;
								<span className='font-kepler font-thin italic  text-[1.1em]'>
									GIVING
								</span>
							</h2>
						</div>
						<div
							className='
				flex flex-col gap-4
				max-w-[298px!important] md:max-w-[1024px!important]
				mx-auto
				my-12 lg:my-24
				'
						>
							<div className='flex flex-col justify-start max-w-[298px!important] md:max-w-[1024px!important] md:mx-auto'>
								<h2 className='font-display text-[24px] md:text-[48px] lg:text-[82px] font-bold my-4 p-4'>
									SELECT A LOCATION
								</h2>
								{/* </div> */}
								<div
									className='flex flex-col md:flex-row
						justify-start
						max-w-[298px!important] md:max-w-[1024px!important]
						lg:w-[828.39px] lg:p-4
						mx-auto'
								>
									<ul
										className='flex flex-col items-start
				
							font-display text-[20px] md:text-[40px] lg:text-[68px] gap-y-4'
									>
										<ul
											className='flex text-[28px] md:text-[56px] items-center'
											onClick={handleUsa}
										>
											<div
												className={
													usa
														? 'flex underline underline-offset-2 font-semibold bg-[#070707] text-[#f8f8f8] p-2 cursor-pointer'
														: 'flex underline-offset-2 p-2 cursor-pointer'
												}
											>
												USA
											</div>
											&nbsp;
											<li
												className={usa ? 'list-none hidden' : 'list-none block'}
											>
												&#43;
											</li>
											<li
												className={usa ? 'list-none block' : 'list-none hidden'}
											>
												&#45;
											</li>
										</ul>
										<div
											className={
												usa
													? ' w-full delay-200 translate-y-0 opacity-100 duration-300 flex flex-col gap-x-20'
													: ' w-full delay-0 translate-y-[-100vh] opacity-25 hidden'
											}
										>
											<ul className='flex flex-col gap-y-4 ml-12'>
												<li className='flex items-center'>
													<a
														className='flex relative hover:bg-black hover:text-white ease-in items-center cursor-pointer'
														href='https://celebrationjax.org/'
														target='_blank'
														rel='noopener noreferrer'
													>
														JACKSONVILLE
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='https://celebrationsfl.org/'
														target='_blank'
														rel='noopener noreferrer'
													>
														SOUTH FLORIDA
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='http://celebrationorl.org/'
														target='_blank'
														rel='noopener noreferrer'
													>
														ORLANDO
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='http://metrochurch.com/'
														target='_blank'
														rel='noopener noreferrer'
													>
														WASHINGTON, D.C.
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href='http://www.christianfaithcenternc.com/'
														target='_blank'
														rel='noopener noreferrer'
													>
														CHRISTIAN FAITH CENTER, NC
													</a>
												</li>
											</ul>
										</div>
										<ul
											className='flex items-center text-[28px] md:text-[56px]'
											onClick={handleInternational}
										>
											<div
												className={
													international
														? 'flex underline underline-offset-2 font-semibold bg-[#070707] text-[#f8f8f8] p-2 cursor-pointer'
														: 'flex underline-offset-2 p-2 cursor-pointer'
												}
											>
												INTERNATIONAL
											</div>{' '}
											&nbsp;
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
										</ul>
										<div
											className={
												international
													? ' w-full delay-200 translate-y-0 opacity-100 duration-300 flex flex-col gap-x-20'
													: ' w-full delay-0 translate-y-[-100vh] opacity-25 hidden'
											}
										>
											<ul className='flex flex-col gap-y-4 ml-12'>
												<li className='flex items-center'>
													<a className='flex relative hover:bg-black hover:text-white ease-in items-center cursor-pointer'>
														THE LIGHTHOUSE ANTWERP, BELGIUM
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in'
														href=''
														target='_blank'
														rel='noopener noreferrer'
													>
														NETHERLANDS
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href=''
														target='_blank'
														rel='noopener noreferrer'
													>
														PARIS
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href=''
														target='_blank'
														rel='noopener noreferrer'
													>
														MOKAPANE SOUTH AFRICA
													</a>
												</li>
												<li>
													<a
														className='hover:bg-black hover:text-white ease-in cursor-pointer'
														href=''
														target='_blank'
														rel='noopener noreferrer'
													>
														ZIMBABWE
													</a>
												</li>
											</ul>
										</div>
										<ul
											className='flex text-[28px] md:text-[56px]'
											onClick={handleGlobal}
										>
											<div
												className={
													global
														? 'flex underline underline-offset-2 font-semibold bg-[#070707] text-[#f8f8f8] p-2 cursor-pointer'
														: 'flex underline-offset-2 p-2 cursor-pointer'
												}
											>
												TV&nbsp;MINISTRY
											</div>{' '}
										</ul>
									</ul>
								</div>
							</div>
						</div>
						<div className='flex justify-start items-center '>
							<Link href='/'>
								<div className='flex items-center py-2 gap-x-4'>
									<div className='flex items-center'>
										<p className='font-display font-normal text-[24px]'>
											VIEW&nbsp;MY&nbsp;GIVING&nbsp;STATEMENT
										</p>
									</div>
									<div className='invert w-[88px]'>
										<Image src={arrow} alt='' />
									</div>
								</div>
							</Link>
						</div>
					</div>

					<div className='flex flex-col items-center w-full overflow-hidden '>
						<div className='flex justify-center items-center w-full'>
							<h2 className='font-display font-bold text-left md:text-[126px] lg:text-[192px]'>
								OTHER&nbsp;WAYS
								<br />
								<span className='font-kepler font-thin italic  text-[1.1em]'>
									TO&nbsp;GIVE
								</span>
							</h2>
						</div>
						<div className='flex justify-center items-center w-full'>
							<div className='flex justify-center items-center p-4 gap-x-8 w-full'>
								<div className='flex flex-col justify-center items-center w-full p-4'>
									<div className='flex bg-[#070707] m-4 justify-center items-center rounded-full text-[120px] text-[#f8f8f8] w-[200px] h-[200px]'>
										<FontAwesomeIcon icon={faMobile} className='' />
									</div>
									<div className='flex justify-center w-full p-2 my-2'>
										<p className='font-display font-bold text-[36px]'>APP</p>
									</div>
								</div>
								<div className='flex flex-col justify-center items-center w-full p-4'>
									<div className='flex bg-[#070707] m-4 justify-center items-center rounded-full text-[120px] text-[#f8f8f8] w-[200px] h-[200px]'>
										<FontAwesomeIcon icon={faBitcoin} className='' />
									</div>
									<div className='flex justify-center w-full p-2 my-2'>
										<p className='font-display font-bold text-[36px]'>CRYPTO</p>
									</div>
								</div>
								<div className='flex w-full flex-col justify-center items-center p-4'>
									<div className='flex bg-[#070707] m-4 justify-center items-center rounded-full text-[120px] text-[#f8f8f8] w-[200px] h-[200px]'>
										<FontAwesomeIcon icon={faPiggyBank} className='' />
									</div>
									<div className='flex justify-center w-full p-2 my-2'>
										<p className='font-display font-bold text-[36px]'>BANK</p>
									</div>
								</div>
								<div className='flex w-full flex-col justify-center items-center p-4'>
									<div className='flex bg-[#070707] m-4 justify-center items-center rounded-full text-[120px] text-[#f8f8f8] w-[200px] h-[200px]'>
										<FontAwesomeIcon icon={faMoneyBillTrendUp} className='' />
									</div>
									<div className='flex justify-center w-full p-2 my-2'>
										<p className='font-display font-bold text-[36px]'>GIVT</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='hidden flex-col items-center w-full overflow-hidden '>
						<div className='relative flex flex-col items-center justify-start w-full '>
							<div className='flex justify-center items-center w-full'>
								<h2 className='font-display font-bold text-center md:text-[126px] lg:text-[192px]'>
									YOUR&nbsp;
									<span className='font-kepler font-thin italic  text-[1.1em]'>
										IMPACT
									</span>
								</h2>
							</div>
							<div id='yourImpactSection' className='w-full '>
								<div className='carousel-indicators absolute right-0 bottom-5 left-0 flex justify-center p-0 mb-4'>
									<button
										type='button'
										data-bs-target='#yourImpactSection'
										data-bs-slide-to='0'
										className='active'
										aria-current='true'
										aria-label='Slide 1'
									></button>
									<button
										type='button'
										data-bs-target='#yourImpactSection'
										data-bs-slide-to='1'
										aria-label='Slide 2'
									></button>
									<button
										type='button'
										data-bs-target='#yourImpactSection'
										data-bs-slide-to='2'
										aria-label='Slide 3'
									></button>
								</div>
								<div className='carousel-inner relative w-full overflow-hidden'>
									<div className='carousel-item active relative float-left w-full'>
										<div className='flex relative justify-center w-full '>
											<div className='flex justify-center '>
												<Image
													src={serve}
													className='flex w-[844px]'
													alt='...'
													// width={425}
													// height={425}
												/>
											</div>
										</div>
										<div className='carousel-caption text-center p-4 flex flex-col items-center'>
											<h5 className='font-display font-bold text-[#070707] text-[36px] py-4 uppercase'>
												Orange Park Food Pantry
											</h5>
											<div className='flex justify-center w-[375px]'>
												<p className='flex justify-center font-display font-normal text-[18px] text-[#070707]'>
													Our Orange Park location is making a tremendous impact
													in their local community through their weekly food
													pantry ministry – which served 95,312 Clay County
													residents this past year. Because of your generosity,
													not only were we able to meet the tangible needs, but
													they were also able to open a 4,000 square foot space
													dedicated to helping further their food pantry and
													outreach efforts.
												</p>
											</div>
										</div>
									</div>
									<div className='carousel-item relative float-left w-full'>
										<div className='flex justify-center '>
											<Image
												src={oneChild}
												className='block w-full'
												alt='...'
												width={425}
												height={425}
											/>
										</div>
										<div className='carousel-caption text-center p-4'>
											<h5 className='font-display font-bold text-[#070707] text-[36px] py-4'>
												OneChild
											</h5>
											<div className='w-[375px]'>
												<p className='font-display font-normal text-[18px] text-[#070707]'>
													Your generosity is helping the lives of thousands of
													children from our Celebration Zimbabwe location!
													Through partnership with OneChild, our congregation is
													sponsoring numerous kids in Zimbabwe and helping meet
													the physical, emotional, and spiritual needs of them
													and their families. If you are interested in
													contributing to this Kingdom impact, sponsor a child
													in need today.
												</p>
											</div>
										</div>
									</div>
									<div className='carousel-item relative float-left w-full'>
										<div className='flex justify-center '>
											<Image
												src={relief}
												className='block w-full'
												alt='...'
												width={425}
												height={425}
											/>
										</div>
										<div className='carousel-caption text-center p-4'>
											<h5 className='font-display font-bold text-[#070707] text-[36px] py-4'>
												Disaster Relief Efforts
											</h5>
											<div className='flex w-[375px] justify-center'>
												<p className='font-display font-normal text-[18px] text-[#070707]'>
													One of Celebration’s deepest desires is to operate as
													the hands and feet of Jesus, especially when people
													are in need the most. We partner with&nbsp;
													<a
														className='font-semibold cursor-pointer'
														href='https://convoyofhope.org'
														target='blank'
														rel='noopener noreferrer'
													>
														Convoy of Hope{' '}
													</a>
													on numerous occasions throughout the year to help meet
													tangible needs of those struck with natural disasters,
													war, or various other tragedies. To join the impact
													that these amazing partners are making daily, you can
													give here.
												</p>
											</div>
										</div>
									</div>
								</div>
								<button
									className='carousel-control-prev w-[50px] absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline'
									type='button'
									data-bs-target='#carouselExampleCaptions'
									data-bs-slide='prev'
								>
									<div className='flex relative p-2 max-w-[100px]'>
										<Image src={leftnav} alt='' />
									</div>
								</button>
								<button
									className='carousel-control-next w-[50px] absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline '
									type='button'
									data-bs-target='#carouselExampleCaptions'
									data-bs-slide='next'
								>
									<div className='flex relative p-2 max-w-[100px] rotate-180'>
										<Image src={rightnav} alt='' />
									</div>
								</button>
							</div>
						</div>
					</div>

					<div className='w-full h-[700px] overflow-hidden '>
						<div className='relative w-full'>
							<div className='absolute top-[20px] left-[20px] mix-blend-overlay z-30 '>
								<h1 className='font-display font-bold text-[#f8f8f8] md:text-[126px] lg:text-[192px]'>
									LEGACY&nbsp;
									<span className='font-kepler italic text-[1.1em]'>TEAM</span>
								</h1>
							</div>
							<div className='absolute top-[20px] left-[20px] z-0'>
								<h1 className='font-display font-bold text-[#070707] md:text-[126px] lg:text-[192px]'>
									LEGACY&nbsp;
									<span className='font-kepler italic text-[1.1em]'>TEAM</span>
								</h1>
							</div>
						</div>

						<div className='relative flex justify-between mt-[150px] z-20 h-600px lg:h-[400px] '>
							<div className='flex flex-col items-start mt-8 p-8 gap-y-8 w-1/2'>
								<div>
									<p className='flex justify-center font-display font-normal text-left text-[20px] leading-7 text-[#7c7c7c] '>
										Our Legacy Team gives influence, resources, and time as a
										local church ministry expression to advance the cause of
										Christ. Each member prayerfully commits to give over and
										above their tithe to impact eternity for generations to
										come—to leave a legacy. If you have any questions or would
										like to be a part of the Legacy Team, please email Pastor
										Drew King.
									</p>
								</div>
								<div className='flex justify-start items-center '>
									<Link href='/'>
										<div className='flex items-center py-2 gap-x-4'>
											<div className='flex items-center'>
												<p className='font-display font-normal text-[24px]'>
													CONTACT&nbsp;US
												</p>
											</div>
											<div className='invert w-[88px]'>
												<Image src={arrow} alt='' />
											</div>
										</div>
									</Link>
								</div>
							</div>
							<div className='flex justify-end w-1/2'>
								<div className='flex w-3/4 h-[209px] lg:h-auto'>
									<Image src={legacy} alt='' />
								</div>
							</div>
						</div>
					</div>

					<div className='relative flex flex-col items-center w-full h-[600px] overflow-hidden '>
						<div className='flex justify-start items-center w-full '>
							<h2 className='font-display font-bold text-left md:text-[126px] lg:text-[192px]'>
								BEGIN&nbsp;TO
								<br />
								<span className='font-kepler font-thin italic  text-[1.1em]'>
									TITHE
								</span>
							</h2>
						</div>
						<div className='relative lg:absolute flex flex-col items-center right-0 lg:right-5 top-[0] lg:top-[225px] p-8 w-full lg:w-1/2 justify-end gap-y-8 '>
							<div className='flex w-full'>
								<p className='flex font-display font-normal text-left text-[20px] leading-7 text-[#7c7c7c]'>
									If tithing is new to you and you’re not sure where to get
									started, we’ve got you covered! We’re here to help set you up
									with a plan, and be a source of encouragement as you seek to
									honor God with your finances. <br />
									<br />
									This is your commitment to tithe 10% of your income for the
									next 8 weeks. Trusting God and putting Him first in your
									finances declares a blessing over your life.
								</p>
							</div>
							<div className='flex w-full justify-start items-center '>
								<Link href='/'>
									<div className='flex items-center py-2 gap-x-4'>
										<div className='flex items-center'>
											<p className='font-display font-normal text-[24px]'>
												START&nbsp;TITHING
											</p>
										</div>
										<div className='invert w-[88px]'>
											<Image src={arrow} alt='' />
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>

					<div className='relative flex items-center w-full overflow-hidden gap-x-16 '>
						<div className='flex flex-col w-3/5 gap-y-8 p-4 '>
							<div>
								<h3 className='font-display font-bold text-[44px]'>
									HAVE&nbsp;QUESTIONS?
								</h3>
							</div>
							<div>
								<p className='flex font-display font-normal text-left text-[22px] leading-7 text-[#7c7c7c]'>
									If you have additional questions concerning giving or
									donations, please call Celebration Church Giving Office at
									(904) 737-1121 or contact us.
								</p>
							</div>
						</div>
						<div className='flex flex-col w-2/5 gap-y-8 p-4 '>
							<div className='flex w-full justify-start items-center '>
								<Link href='/'>
									<div className='flex items-center py-2 gap-x-4'>
										<div className='flex items-center'>
											<p className='font-display font-normal text-[24px]'>
												GIVING&nbsp;FAQs
											</p>
										</div>
										<div className='invert w-[88px]'>
											<Image src={arrow} alt='' />
										</div>
									</div>
								</Link>
							</div>
							<div className='flex w-full justify-start items-center '>
								<Link href='/'>
									<div className='flex items-center py-2 gap-x-4'>
										<div className='flex items-center'>
											<p className='font-display font-normal text-[24px]'>
												CONTACT
											</p>
										</div>
										<div className='invert w-[88px]'>
											<Image src={arrow} alt='' />
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='hidden'>
				<Grid>
					<WeLoveSection>
						<div className='heading'>
							<div className='noEffect'>
								<h1>
									WE LOVE
									<br />
									<span>SO WE GIVE</span>
								</h1>
							</div>
							<div className='maskEffect'>
								<h1>
									WE LOVE
									<br />
									<span>SO WE GIVE</span>
								</h1>
							</div>
						</div>
						<div className='image'>
							<StyledImage
								src={GiveHero}
								alt='give'
								layout='fixed'
								height={587} // original: 783
								width={1059} // original: 1413
								priority
							/>
							<div className='buttonContainer'>
								<div className='givenowText'>
									<a>GIVE NOW</a>
								</div>
								<Link href={'/give'}>
									<div className='arrowGrid'>
										<StyledArrowImage
											src={arrow}
											width={106}
											height={52}
											layout='fixed'
											alt='arrow-button'
										/>
									</div>
								</Link>
							</div>
						</div>
					</WeLoveSection>
					<WhyWeGiveSection>
						<div className='heading'>
							<h2>
								WHY WE <span>GIVE</span>
							</h2>
						</div>
						<div className='paragraph'>
							<p>
								Here at Celebration, we believe that God calls us to partake in
								the act of generosity, and that tithing is an act of worship and
								obedience to Jesus. When you give back to the Lord through
								Celebration Church, we commit to you that your offering will sow
								into the expansion of His Kingdom as we seek to share the
								transformative power of the Gospel all around the world.
							</p>
						</div>
						<div className='button'>
							<div className='learnMore'>
								<button>
									<a>LEARN MORE</a>
									<Link href={'/give'}>
										<div className='arrowGrid'>
											<StyledArrowImage
												src={arrowdown}
												width={21}
												height={21}
												layout='fixed'
												alt='arrow-button'
											/>
										</div>
									</Link>
								</button>
							</div>
						</div>
					</WhyWeGiveSection>
					<YourImpactSection>
						<div className='heading'>
							<h2>
								YOUR <span>IMPACT</span>
							</h2>
						</div>
						<div className='slider'>
							<div className='leftnav'>
								<Image src={leftnav} alt='' />
							</div>
							<div className='media'>
								<Image src={media} alt='' />
							</div>
							<div className='text'>
								<h3>ORANGE PARK FOOD PANTRY</h3>
								<p>
									Our Orange Park location is making a tremendous impact in
									their local community through their weekly food pantry
									ministry – which served 95,312 Clay County residents this past
									year. Because of your generosity, not only were we able to
									meet the tangible needs, but they were also able to open a
									4,000 square foot space dedicated to helping further their
									food pantry and outreach efforts.
								</p>
							</div>
							<div className='rightnav'>
								<Image src={rightnav} alt='' />
							</div>
						</div>
						<div className='navigation'>
							<div className='button'>
								<Image src={navigation} alt='' />
							</div>
						</div>
					</YourImpactSection>
					<OnlineGivingSection>
						<div className='heading'>
							<h2>
								ONLINE <span>GIVING</span>
							</h2>
							<div className='ul'>
								<ul>
									<li>USA &#43;</li>
									<li>INTERNATIONAL &#43;</li>
									<li>TV MINISTRIES &#43;</li>
								</ul>
							</div>
							<Link href={'/'} alt='' passHref>
								<div className='givingLink'>
									<div className='text'>
										<button>
											<a>VIEW MY GIVING STATEMENT</a>
										</button>
									</div>
									<div className='arrowImage'>
										<Image
											src={darkArrowRight}
											alt='arrow-button'
											width={102}
											height={42}
											layout='fixed'
											objectFit='cover'
										/>
									</div>
								</div>
							</Link>
						</div>
					</OnlineGivingSection>
					<OtherWaysToGiveSection>
						<div className='heading'>
							<h2>
								OTHER WAYS <br />
								<span>TO GIVE</span>
							</h2>
						</div>
						<div className='giveIcons'>
							{/*
							<OtherWaysText>
								<APPText>APP</APPText>
							</OtherWaysText>
							<OtherWaysText>
								<CRYPTOText>CRYPTO</CRYPTOText>
							</OtherWaysText>
							<OtherWaysText>
								<BANKText>BANK</BANKText>
							</OtherWaysText>
							<OtherWaysText>
								<STOCKText>STOCK</STOCKText>
							</OtherWaysText> */}
							<div className='iconBg'>
								<div className='iconWrapper'>
									<div className='imageWrapper'>
										<Image src={piggyBank} alt='' />
									</div>
								</div>
							</div>
							<div className='iconBg'>
								<div className='iconWrapper'>
									<div className='imageWrapper'>
										<Image src={piggyBank} alt='' />
									</div>
								</div>
							</div>
							<div className='iconBg'>
								<div className='iconWrapper'>
									<div className='imageWrapper'>
										<Image src={piggyBank} alt='' />
									</div>
								</div>
							</div>
							<div className='iconBg'>
								<div className='iconWrapper'>
									<div className='imageWrapper'>
										<Image src={piggyBank} alt='' />
									</div>
								</div>
							</div>
							<div className='iconText'>
								<h3>APP</h3>
							</div>
							<div className='iconText'>
								<h3>CRYPTO</h3>
							</div>
							<div className='iconText'>
								<h3>BANK</h3>
							</div>
							<div className='iconText'>
								<h3>GIVT</h3>
							</div>
						</div>
					</OtherWaysToGiveSection>
					<LegacyTeamSection>
						<div className='heading'>
							<div className='noEffect'>
								<h2>
									LEGACY <span>TEAM</span>
								</h2>
							</div>
							<div className='maskEffect'>
								<h2>
									LEGACY <span>TEAM</span>
								</h2>
							</div>
							<div className='paragraph'>
								<p>
									Our Legacy Team gives influence, resources, and time as a
									local church ministry expression to advance the cause of
									Christ. Each member prayerfully commits to give over and above
									their tithe to impact eternity for generations to come—to
									leave a legacy. If you have any questions or would like to be
									a part of the Legacy Team, please email Pastor Drew King.
								</p>
								<div className='contactWrapper'>
									<Link href='mailto:info@celebrationchurch.com' passHref>
										<div className='contactUsLink'>
											<a>CONTACT US</a>
											<div>
												<Image
													src={darkArrowRight}
													alt='arrow-button'
													width={102}
													height={42}
													layout='fixed'
													objectFit='cover'
												/>
											</div>
										</div>
									</Link>
								</div>
							</div>
							<div className='legacyImageContainer'>
								<div className='absoluteImageContainer'>
									<Image src={legacy} alt='' />
								</div>
							</div>
						</div>
					</LegacyTeamSection>
					<BeginToTitheSection>
						<div className='heading'>
							<div className='headingWrapper'>
								<h2>
									BEGIN TO <br />
									<span>TITHE</span>
								</h2>
							</div>
							<div className='paragraph'>
								<p>
									If <strong>tithing</strong> is new to you and you’re not sure
									where to get started, we’ve got you covered!{' '}
									<strong>We’re here to help set you up with a plan</strong>,
									and be a source of encouragement as you seek to honor God with
									your finances. <br />
									<br />
									This is your commitment to tithe 10% of your income for the
									next 8 weeks. Trusting God and putting Him first in your
									finances declares a blessing over your life.
								</p>
								<div className='startTithingWrapper'>
									<Link href='/' passHref>
										<div className='startTithingLink'>
											<a>START TITHING</a>
											<div>
												<Image
													src={darkArrowRight}
													alt='arrow-button'
													width={102}
													height={42}
													layout='fixed'
													objectFit='cover'
												/>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</BeginToTitheSection>
					<HaveQuestionsSection>
						<div className='heading'>
							<div>
								<h3>HAVE QUESTIONS?</h3>
							</div>
							<div className='subText'>
								<p>
									If you have additional questions concerning giving or
									donations, please call Celebration Church Giving Office at
									(904) 737-1121 or contact us.
								</p>
								<div className='givingFaqsWrapper'>
									<Link href='mailto:info@celebrationchurch.com' passHref>
										<div className='givingFaqsLink'>
											<div className='text'>
												<a>GIVING FAQs</a>
											</div>
											<div className='arrow'>
												<Image
													src={darkArrowRight}
													alt='arrow-button'
													width={102}
													height={42}
													layout='fixed'
													objectFit='cover'
												/>
											</div>
										</div>
									</Link>
								</div>
								<div className='contactWrapper'>
									<Link href='mailto:info@celebrationchurch.com' passHref>
										<div className='contactLink'>
											<div className='text'>
												<a>CONTACT</a>
											</div>
											<div className='arrow'>
												<Image
													src={darkArrowRight}
													alt='arrow-button'
													width={102}
													height={42}
													layout='fixed'
													objectFit='cover'
												/>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</HaveQuestionsSection>
				</Grid>
			</div>
		</>
	);
}
