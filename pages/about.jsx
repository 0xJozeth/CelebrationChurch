import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import MeetPastors from '/public/MeetPastors.png';
import arrow from '/public/arrow@1x.png';
import longArrow from '/public/arrow-long.svg';
import baptism from '/public/baptism.png';

import React, { useState, useEffect } from 'react';
import WeHaveAGrace from '../components/HomepageComponents/SectionWeHaveAGrace/WeHaveAGrace';
import PartnersCarousel from '../components/PartnersCarousel/partnersCarousel';
import PartnersCarouselMobile from '../components/PartnersCarousel/partnersCarouselMobile';

import { arc } from '/public/ARC.png';

function About() {
	const [isMuted, setIsMuted] = useState(false);

	const handleIsMuted = () => {
		setIsMuted(!isMuted);
	};

	return (
		<>
			<div
				className='flex flex-col 
                mx-auto items-center justify-center w-[100vw]
            md:max-w-[575px] lg:max-w-[1024px] xl:max-w-[1440px] gap-y-4 
				lg:gap-y-20'
			>
				<div
					onClick={handleIsMuted}
					className='relative 
                w-[350px] h-[280px]
                md:w-[575px] md:h-[323px]
                lg:w-[1024px] lg:h-[575px]
                xl:w-[1440px] xl:h-[806px]


                items-center justify-center 
                overflow-hidden'
				>
					<video
						src='/welcome-comp.webm'
						autoPlay
						loop
						muted={isMuted ? false : true}
						style={{
							width: '1440px',
							height: '806px',
							border: '4px solid black',
						}}
					></video>
				</div>
				<div className='flex flex-col md:flex-row mx-auto items-center'>
					<h1 className='font-display text-[54px] md:text-[110px] lg:text-[192px] font-bold'>
						MEET OUR
						<br />
						<span className='font-kepler italic text-[1.1em] font-semibold'>
							PASTORS
						</span>
					</h1>
				</div>
				<div
					className='relative flex flex-col mx-auto mb-12 
                max-w-[375px] 
                md:max-w-[575px] lg:max-w-[1024px] 
                font-display text-[#7C7C7C] 
				leading-relaxed 
                text-[18px] md:text-[24px] lg:text-[24px]
                '
				>
					<div className='flex flex-col px-8 mx-auto gap-y-4'>
						<p>
							<strong>
								Pastors Tim and Jen Timberlake serve as the Senior Pastors of
								Celebration Church.
							</strong>{' '}
							Their heart is for God’s people and equipping them with the tools
							to transform their lives from the inside out.
						</p>

						<p>
							They are both gifted communicators and teachers who have the
							ability to touch and impact people from various walks of life
							through the Gospel of Jesus.
						</p>

						<p>
							Both Pastors Tim and Jen feel most alive when they are pouring
							back into others, and they seek to glorify God through their lives
							and family.
						</p>
					</div>
				</div>
				<div className='flex mx-auto -mt-[80px] md:-mt-[0px]'>
					<WeHaveAGrace />
				</div>
				<div className='relative flex lg:hidden flex-col items-start min-w-[326px] min-h-[396px] px-4'>
					<div className='flex absolute top-0 right-0 z-[3] mix-blend-overlay'>
						<h2 className='font-display font-bold text-[48px] text-[#f8f8f8]'>
							WHAT WE&nbsp;
							<br />
							<span className='font-kepler text-[50px] md:text-[110px] lg:text-[196px] italic'>
								BELIEVE
							</span>
						</h2>
					</div>
					<div className='absolute top-8 left-0 w-[264px] h-[275px] z-[2]'>
						<Image className='' src={baptism} alt='' />
					</div>
					<div className='flex absolute top-0 right-0 z-[1]'>
						<h2 className='font-display font-bold text-[48px]'>
							WHAT WE&nbsp;
							<br />
							<span className='font-kepler text-[50px] md:text-[110px] lg:text-[196px] italic'>
								BELIEVE
							</span>
						</h2>
					</div>
				</div>
				<div className='hidden lg:flex relative w-full h-[1200px] '>
					<div className='flex relative w-full gap-x-8'>
						<div className='relative flex top-0 left-0 z-20 w-full overflow-hidden'>
							<Image className='' src={baptism} alt='' objectFit='cover' />
						</div>
						<div className='relative w-[1226px] '>
							<div className='w-full lg:h-[250px] xl:h-[400px] '>
								<div className='flex absolute top-0 -left-[160px] mix-blend-overlay z-30'>
									<h2 className='font-display font-bold xl:text-[192px] lg:text-[126px] text-[#f8f8f8]'>
										WHAT&nbsp;WE&nbsp;
										<br />
										<span className='font-kepler text-[1.1em] italic'>
											BELIEVE
										</span>
									</h2>
								</div>
								<div className='flex absolute top-0 -left-[160px] z-10'>
									<h2 className='font-display font-bold xl:text-[192px] lg:text-[126px]'>
										WHAT&nbsp;WE&nbsp;
										<br />
										<span className='font-kepler text-[1.1em] italic'>
											BELIEVE
										</span>
									</h2>
								</div>
							</div>
							<div
								className='relative flex flex-col mx-auto my-12 mb-12 max-w-[375px] md:max-w-[575px] font-display text-[#7C7C7C] 
                                text-[18px] md:text-[24px] lg:text-[24px] leading-relaxed'
							>
								<div className='flex flex-col px-8 mx-auto gap-y-4'>
									<p>
										At Celebration Church, we stand firm in the ways of Christ,
										the values of the kingdom of God, and the teachings of the
										Bible.{' '}
									</p>
									<p>
										As such, we acknowledge scripture as the inspired word of
										God, written through humanity, to provide a worldview
										through a relationship in which the church can function as
										an expression of the kingdom.
									</p>
									<p>
										Click the link below to access the specifics of what we
										believe at Celebration Church as it relates to topics such
										as the trinity, Jesus, the Bible, and our role as the
										church.
									</p>
								</div>
								<div className='flex flex-col px-8 items-start min-w-[375px] my-12 gap-y-12'>
									<Link href='/' passHref>
										<div className='flex gap-x-4 cursor-pointer'>
											<a className='font-display capitalize text-[36px] gap-x-2'>
												READ MORE
											</a>
											<div className='flex w-[102px] h-[42] '>
												<Image src={arrow} alt='arrow' />
											</div>
										</div>
									</Link>
									<Link href='/' passHref>
										<div className='flex gap-x-4'>
											<a className='font-display capitalize text-[36px] gap-x-2'>
												FOLLOW JESUS
											</a>
											<div className='flex w-[102px] h-[42] '>
												<Image src={arrow} alt='arrow' />
											</div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className='relative flex md:hidden flex-col mx-auto my-12 mb-12 -mt-[15px] max-w-[375px] md:max-w-[575px] font-display text-[#7C7C7C] 
                                text-[18px] md:text-[24px] lg:text-[24px]'
				>
					<div className='flex flex-col px-8 mx-auto gap-y-4'>
						<p>
							At Celebration Church, we stand firm in the ways of Christ, the
							values of the kingdom of God, and the teachings of the Bible.{' '}
						</p>
						<p>
							As such, we acknowledge scripture as the inspired word of God,
							written through humanity, to provide a worldview through a
							relationship in which the church can function as an expression of
							the kingdom.
						</p>
						<p>
							Click the link below to access the specifics of what we believe at
							Celebration Church as it relates to topics such as the trinity,
							Jesus, the Bible, and our role as the church.
						</p>
					</div>
				</div>
				<div className='flex md:hidden flex-col px-8 items-start min-w-[375px] gap-y-12'>
					<Link href='/' passHref>
						<div className='flex gap-x-4'>
							<a className='font-display capitalize text-[22px] gap-x-2'>
								READ MORE
							</a>
							<div className='flex w-[49px] h-[20] '>
								<Image src={arrow} alt='arrow' />
							</div>
						</div>
					</Link>
					<Link href='/' passHref>
						<div className='flex gap-x-4'>
							<a className='font-display capitalize text-[22px] gap-x-2'>
								FOLLOW JESUS
							</a>
							<div className='flex w-[49px] h-[20] '>
								<Image src={arrow} alt='arrow' />
							</div>
						</div>
					</Link>
				</div>
				<div className='hidden md:flex min-w-375px my-12'>
					<h1 className='font-display text-[54px] md:text-[110px] lg:text-[196px] font-bold text-center'>
						OUR&nbsp;
						<br />
						MINISTRY&nbsp;
						<br />
						<span className='font-kepler text-[58px] md:text-[110px] lg:text-[196px] italic'>
							PARTNERS
						</span>
					</h1>
				</div>
				<div className='hidden md:flex mx-auto justify-center items-center my-4'></div>
				<div className='flex md:hidden mx-auto justify-center items-center my-4'>
					{/* <PartnersCarouselMobile /> */}
				</div>
				<div
					className='flex w-full min-h-[51px] lg:h-[200px]
				max-w-[256px] md:max-w-[1440px]
				 justify-center items-center mx-auto my-8 mb-[200px] overflow-hidden'
				>
					<Link href={'visit'}>
						<button className='flex justify-center items-center border-2 border-solid border-[#070707] w-full h-full p-4 gap-x-4 lg:gap-x-[140px] md:px-[50px] mx-auto'>
							<div className='flex min-w-[126px]'>
								<a className='font-display text-[18px] md:text-[44px] lg:text-[90px]'>
									COME&nbsp;VISIT&nbsp;US
								</a>
							</div>
							<div className='flex min-h-[36px] max-w-[144px] w-[300px] lg:max-w-[444px]'>
								<Image src={longArrow} alt='' />
							</div>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default About;
