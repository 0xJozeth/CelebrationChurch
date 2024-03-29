import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import stage from '/public/care-images/care_stage.png';
import telecare from '/public/care-images/care_telecare.png';
import pastorTim from '/public/care-images/follow-jesus-images/pastorTim.png';
import arrow from '/public/arrow@1x.png';
import longArrow from '/public/ministries-images/arrow-long.svg';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Grid = styled.div`
	display: none;
	@media screen and (min-width: 768px) {
		display: grid;
	}
	grid-template-columns: 1fr;
	grid-template-rows: repeat(auto, fit-content);

	margin-inline: 2.5%;
	justify-self: center;

	div {
		&.mainContainer {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		}
		&.imageContainer {
			grid-column: 1;
			padding-inline: 3vw;
			div {
				&.imageWrapper {
					margin-block: 3vw;
					min-width: 350px;
				}
			}
		}
		&.followJesusContent {
			display: grid;
			grid-column: 2;
			padding-inline: 3vw;
			align-items: space-evenly;

			h1 {
				margin-block: 3vw;
			}

			p {
				margin-block: 3vw;
			}
		}
		div {
			&.linkContainer {
				display: flex;
				font-family: 'neue-haas-grotesk-display';
				align-items: center;
				column-gap: 1vw;

				a {
					cursor: pointer;
					font-size: clamp(1.5rem, 1.5vw, 3rem);
				}
			}
		}
		&.quoteAttribution {
			margin-block: 3vw;
			p {
				font-family: 'neue-haas-grotesk-display';
				font-weight: 500;
				font-size: clamp(1rem, 1.75vw, 2rem);
				line-height: 2rem;
				color: #7c7c7c;
			}
		}

		&.buttonSectionGrid {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: fit-content;
			margin-inline: 6vw;
			margin-block: 6vw;

			div {
				&.buttonLinks {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					grid-template-rows: 1fr;

					div {
						&.livingWordButton {
							grid-column: 1;
						}
						&.downloadAppButton {
							grid-column: 3;
						}
					}
				}
			}
		}

		&.rowContainer {
			display: grid;
			grid-template-columns: 1fr 1fr;

			margin-block: 3vw;

			column-gap: 5%;

			div {
				&.plugInButton {
					grid-column: 1 / span 2;
					outline: 2px solid #070707;

					cursor: pointer;

					a {
						font-size: clamp(4rem, 8vw, 8rem);
					}

					div {
						&.linkContainer {
							display: flex;
							font-family: 'neue-haas-grotesk-display';
							align-items: center;
							justify-content: space-evenly;
							padding-block: 3vw;
							/* column-gap: 6vw; */
						}
					}
				}
			}
		}
	}
	h1,
	h2 {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 800;
		font-size: clamp(8rem, 10vw, 12.5rem);
		line-height: auto;
		span {
			font-family: 'kepler-std-display', serif;
			font-size: auto;
			font-weight: 400;
			font-style: italic;
		}
	}
	h3 {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 700;
		font-size: clamp(3.25rem, 4vw, 4.25rem);
		line-height: auto;

		span {
			font-weight: 100;
			font-size: clamp(3.25rem, 1.75vw, 4.25rem);
		}
	}

	p {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 500;
		font-size: clamp(1rem, 1.25vw, 2rem);
		line-height: 2rem;
		color: #7c7c7c;

		strong {
			text-decoration: bold;
			font-weight: 800;
		}
	}
	q {
		font-family: 'kepler-std-display', serif;
		font-style: italic;
		font-weight: 500;
		font-size: clamp(2rem, 1.75vw, 3.25rem);
		line-height: auto;
	}
`;

function Followjesus() {
	const [isMuted, setIsMuted] = useState(false);

	const handleIsMuted = () => {
		setIsMuted(!isMuted);
	};
	return (
		<>
			<Grid>
				<div className='mainContainer'>
					<div className='imageContainer'>
						<div style={{ padding: '125% 0 0 0', position: 'relative' }}>
							<iframe
								src='https://player.vimeo.com/video/796387628?h=0c9d927a0a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
								frameBorder='0'
								allow='autoplay; fullscreen; picture-in-picture'
								allowFullScreen
								style={{
									position: 'absolute',
									top: '0',
									left: '0',
									width: '100%',
									height: '100%',
								}}
								title='Celebration - Follow Jesus'
							></iframe>
						</div>
						{/* <div onClick={handleIsMuted} className='imageWrapper'> */}
						{/* <Image src={pastorTim} alt='pastor-tim-sitting-in-a-chair' /> */}
						{/* <video
								src='/followJesus-comp.webm'
								autoPlay
								loop
								muted={isMuted ? false : true}
								style={{ width: '1080px', height: '998px' }}
							></video> */}
						{/* </div> */}
					</div>
					<div className='followJesusContent'>
						<div>
							<h1>
								FOLLOW <br />
								<span>JESUS</span>
							</h1>
						</div>
						<div>
							<h3>WHO IS JESUS?</h3>
						</div>

						<div>
							<p className='font-display text-[24px] text-[#7C7C7C]'>
								The gospel centers around the incredible truth that Jesus came
								to earth as Immanuel, our King among us. The “good news” of this
								story is that the life and work of our King not only atoned for
								the sins of God’s people, but it also gave us the hope of
								eternity with Him.
								<br />
								<br />
								Christ walked the earth over 2,000 years ago, His ministry—as
								both fully man and fully God—provided a new reality for God’s
								people and all of creation. Sacrificing himself for humankind,
								Jesus offers a new way of living—a restoration of God’s original
								intent, God’s family ruling and reigning alongside Jesus for all
								of eternity.
								<br />
								<br />
								Through Jesus, the world can genuinely grasp peace, hope, and
								love as it ought to be and as God desires. When you choose to
								accept Jesus into your heart, you are declaring loyalty and
								making a decision to live your life for Him in everything you
								do. <br />
								<br />
								Because of Jesus’ sacrifice, we get the opportunity and access
								to everything God intends for His people. As imagers of Christ,
								we can step into this incredible way of life offered by King
								Jesus as expressions of the kingdom of God.
							</p>
						</div>
						<div className='blockQuote'>
							<q>
								“If anyone would come after me, let him deny himself and take up
								his cross and follow me.”
							</q>
						</div>
						<div className='quoteAttribution'>
							<p>- MATTHEW 16:24</p>
						</div>
						{/* <div>
							<motion.div whileHover={{ scale: 1.1 }} className='linkContainer'>
								<a
									href='https://my.celebration.org/portal/Opportunity_detail.aspx?ID=8971&template=campus-jax&remembertemplate=true'
									target='_blank'
									rel='noopener noreferrer'
								>
									I GAVE MY LIFE TO JESUS
								</a>
								<Image src={arrow} alt='' />
							</motion.div>
						</div> */}
					</div>
				</div>
				{/* <div className='buttonSectionGrid'>
					<div className='whatNow'>
						<h3>WHAT NOW?</h3>
					</div>
					<div className='rowContainer'>
						<div className='plugInButton'>
							<Link href='visit'>
								<div className='linkContainer'>
									<a>NEXT STEPS</a>
									<Image src={longArrow} alt='' />
								</div>
							</Link>
						</div>
					</div>
					<div className='buttonLinks'>
						<div className='livingWordButton'>
							<Link href='visit'>
								<div className='linkContainer'>
									<a>THE LIVING WORD</a>
									<Image src={arrow} alt='' />
								</div>
							</Link>
						</div>
						<div className='downloadAppButton'>
							<Link href='visit'>
								<div className='linkContainer'>
									<a>DOWNLOAD OUR APP</a>
									<Image src={arrow} alt='' />
								</div>
							</Link>
						</div>
					</div>
				</div> */}
			</Grid>

			<div className='block md:hidden w-[100vw]'>
				<div className='grid grid-cols-1 w-full p-2 mx-auto'>
					<div style={{ padding: '125% 0 0 0', position: 'relative' }}>
						<iframe
							src='https://player.vimeo.com/video/796387628?h=0c9d927a0a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
							frameBorder='0'
							allow='autoplay; fullscreen; picture-in-picture'
							allowFullScreen
							style={{
								position: 'absolute',
								top: '0',
								left: '0',
								width: '100%',
								height: '100%',
							}}
							title='Celebration - Follow Jesus'
						></iframe>
					</div>
					<div className='flex flex-col w-full p-4 font-display text-[24px] text-[#7C7C7C]'>
						<div className='flex flex-col'>
							<div>
								<h1 className='font-display font-bold text-[48px] text-[#070707]'>
									FOLLOW
								</h1>
							</div>
							<div>
								<h1 className='font-display font-bold text-[48px] text-[#070707]'>
									<span className='font-kepler italic text-[1.1em]'>JESUS</span>
								</h1>
							</div>
						</div>
						<div className='flex my-2 py-2'>
							<h3 className='font-display font-bold text-[20px]'>
								WHO IS JESUS?
							</h3>
						</div>

						<div className='flex'>
							<p className='text-[18px] text-[#7C7C7C] leading-relaxed'>
								The gospel centers around the incredible truth that Jesus came
								to earth as Immanuel, our King among us. The “good news” of this
								story is that the life and work of our King not only atoned for
								the sins of God’s people, but it also gave us the hope of
								eternity with Him.
								<br />
								<br />
								Christ walked the earth over 2,000 years ago, His ministry—as
								both fully man and fully God—provided a new reality for God’s
								people and all of creation. Sacrificing himself for humankind,
								Jesus offers a new way of living—a restoration of God’s original
								intent, God’s family ruling and reigning alongside Jesus for all
								of eternity.
								<br />
								<br />
								Through Jesus, the world can genuinely grasp peace, hope, and
								love as it ought to be and as God desires. When you choose to
								accept Jesus into your heart, you are declaring loyalty and
								making a decision to live your life for Him in everything you
								do. <br />
								<br />
								Because of Jesus’ sacrifice, we get the opportunity and access
								to everything God intends for His people. As imagers of Christ,
								we can step into this incredible way of life offered by King
								Jesus as expressions of the kingdom of God.
							</p>
						</div>
						{/* <div className='flex my-4 py-2'>
							<Link href='https://worship.celebration.org/'>
								<div className='flex w-full items-center gap-x-2'>
									<div className='flex w-auto'>
										<a className='font-display text-[20px]'>
											I&nbsp;GAVE&nbsp;MY&nbsp;LIFE&nbsp;TO&nbsp;JESUS
										</a>
									</div>
									<div className='flex w-10 h-full'>
										<Image src={arrow} alt='' />
									</div>
								</div>
							</Link>	
						</div> */}
						<div className='flex justify-center items-center my-4 py-2'>
							<q className='font-kepler italic text-[24px] leading-relaxed'>
								“If anyone would come after me, let him deny himself and take up
								his cross and follow me.”{' '}
								<span className='font-display font-thin text-[16px]'>
									- MATTHEW 16:24
								</span>
							</q>
						</div>
						{/* <div className='flex w-full justify-start items-center my-2 py-2'>
							<h3 className='font-display font-bold text-[20px]'>WHAT NOW?</h3>
						</div>
						<div className=''>
							<div className=''>
								<div className='flex border-2 border-solid border-[#070707] p-4'>
									<Link href='visit'>
										<div className='flex w-full justify-start items-center gap-x-2'>
											<div>
												<a className='font-display text-[24px] whitespace-nowrap'>
													NEXT STEPS
												</a>
											</div>
											<div className='flex w-full h-full'>
												<Image src={longArrow} alt='' />
											</div>
										</div>
									</Link>
								</div>
							</div>
							<div className=''>
								<div className='flex my-4 py-2'>
									<Link href='https://worship.celebration.org/'>
										<div className='flex w-full items-center gap-x-2'>
											<div className='flex w-auto'>
												<a className='font-display text-[20px]'>
													THE&nbsp;LIVING&nbsp;WORD
												</a>
											</div>
											<div className='flex w-10 h-full'>
												<Image src={arrow} alt='' />
											</div>
										</div>
									</Link>
								</div>
								<div className='flex my-4 py-2'>
									<Link href='https://worship.celebration.org/'>
										<div className='flex w-full items-center gap-x-2'>
											<div className='flex w-auto'>
												<a className='font-display text-[20px]'>
													DOWNLOAD&nbsp;OUR&nbsp;APP
												</a>
											</div>
											<div className='flex w-10 h-full'>
												<Image src={arrow} alt='' />
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default Followjesus;
