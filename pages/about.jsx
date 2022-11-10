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

function about() {
	return (
		<>
			<div
				className='flex flex-col 
                mx-auto items-center justify-center
                max-w-[375px] md:max-w-[575px] lg:max-w-[1024px] xl:max-w-[1440px]
                w-full 
                gap-y-4
                lg:gap-y-20'
			>
				<div
					className='relative 
                w-[316px] h-[176px]
                md:w-[575px] md:h-[323px]
                lg:w-[1024px] lg:h-[575px]
                xl:w-[1440px] xl:h-[806px]


                items-center justify-center 
                overflow-hidden
'
				>
					<iframe
						className='absolute top-0 left-0 right-0 bottom-0
                        w-[326px] h-[176px]
                        md:w-[575px] md:h-[323px]
                        lg:w-[1024px] lg:h-[575px]
                        xl:w-[1440px] xl:h-[810px]


'
						src='https://player.vimeo.com/video/690554345?h=da3c6ace3a&controls=1&badge=0&autoplay=0&muted=1&loop=1&autopause=0&player_id=0&app_id=58479'
						frameBorder='0'
						// width='1280'
						// height='720'
						placeholder='blur'
					></iframe>
				</div>
				<div className='flex flex-col md:flex-row mx-auto my-12 items-center'>
					<h1 className='font-display text-[54px] md:text-[110px] lg:text-[196px] font-bold'>
						MEET OUR
						<br />
						<span className='font-kepler italic text-[62px] md:text-[126px] lg:text-[252px] font-semibold'>
							PASTORS
						</span>
					</h1>
				</div>
				<div
					className='relative flex flex-col mx-auto mb-12 
                max-w-[375px] 
                md:max-w-[575px] lg:max-w-[1024px] 
                font-display text-[#7C7C7C] 
                text-[18px] md:text-[24px] lg:text-[42px]
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
				<div className='flex mx-auto'>
					<WeHaveAGrace />
				</div>
				<div className='relative flex flex-col items-start min-w-[326px] min-h-[396px] px-4'>
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
				<div
					className='relative flex flex-col mx-auto my-12 mb-12 max-w-[375px] md:max-w-[575px] font-display text-[#7C7C7C] 
                                text-[18px] md:text-[24px] lg:text-[30px]
'
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
				<div className='flex flex-col px-8 items-start min-w-[375px] gap-y-12'>
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
				<div className='flex min-w-375px my-12'>
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
				<div className='flex mx-auto justify-center items-center my-4'>
					<PartnersCarousel />
				</div>
				<div className='flex min-h-[51px] max-w-[256px] justify-center items-center mx-auto my-4 overflow-hidden'>
					<Link href={'visit'}>
						<button className='flex items-center border-2 border-solid border-[#070707] p-4 gap-x-4 mx-auto'>
							<div className='flex min-w-[126px]'>
								<a className='font-display text-[18px]'>COME VISIT US</a>
							</div>
							<div className='flex min-h-[36px] max-w-[144px]'>
								<Image src={longArrow} alt='' />
							</div>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default about;
