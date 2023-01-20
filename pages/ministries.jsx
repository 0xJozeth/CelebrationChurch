import Data from '/components/CarePageComponents/data.js';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import collage from '/public/ministries-collage.png';
import circle from '/public/small-black-circle.svg';

import image1 from '/public/ministries-images/image1.png';
import image2 from '/public/ministries-images/image2.png';
import image3 from '/public/ministries-images/image3.png';
import image4 from '/public/ministries-images/image4.png';
import arrow from '/public/arrow@1x.png';
import longArrow from '/public/ministries-images/arrow-long.svg';

import ckids from '/public/ministries-images/ministries_ckids.png';
import celebrationYouth from '/public/ministries-images/ministries_celebration_youth.png';
import youngAdults from '/public/ministries-images/ministries_cya.png';
import celebrationWorship from '/public/ministries-images/ministries_worship.png';

import containerData from '../components/CarePageComponents/data';

import React from 'react';
import { data } from 'autoprefixer';

const ministriesData = [
	{
		id: 1,
		image: ckids,
		heading: 'pls complile',
		description: 'TEST TEXT LALALALA',
		linkText: 'STUFF OoOo LOOK CLICK HERE',
		href: 'https://google.com',
	},
	{
		id: 2,
		image: ckids,
		heading: 'NEW',
		description: 'AHHHHHH',
		linkText: 'Bye buddy I hope you find your dad!',
		href: 'https://google.com',
	},
	{
		id: 3,
		image: celebrationYouth,
		heading: 'NEW',
		description: 'AHHHHHH',
		linkText: 'Bye buddy I hope you find your dad!',
		href: 'https://google.com',
	},
];
function ministries() {
	console.log('ministriesData', ministriesData);
	return (
		<>
			{/* MOBILE START */}
			<div className='flex md:hidden justify-center w-[100vw]'>
				<div className='flex flex-col items-center w-full max-w-[475px] p-8 mb-12 gap-y-4'>
					<div className='relative w-full h-[486px] mb-[64px]'>
						<div className='absolute top-[20px] left-[20px] mix-blend-overlay z-30 '>
							<h1 className='font-display font-bold text-[#f8f8f8]   text-[44px]'>
								THERES A PLACE&nbsp;
								<br />
								<span className='font-kepler italic text-[1.1em]'>FOR YOU</span>
							</h1>
						</div>
						<div className='absolute top-[20px] left-[20px] z-0'>
							<h1 className='font-display font-bold text-[#070707] text-[44px]'>
								THERES A PLACE&nbsp;
								<br />
								<span className='font-kepler italic text-[1.1em]'>FOR YOU</span>
							</h1>
						</div>
						<div className='flex justify-end items-end h-[275px] w-full  p-4 z-20'>
							<div className='flex w-[280px]'>
								<Image src={image2} alt='' />
							</div>
						</div>
						<div className='flex w-full'>
							<p className='font-display text-[16px] text-[#7c7c7c]'>
								At Celebration, we believe that children are a heritage from the
								Lord and should be trained to be “Like arrows in the hand of a
								warrior…” (Psalms 127:4). Because of that, our cKids services
								utilize curriculums that will teach your kids the Word of God in
								a creative, fun, and age-appropriate way. We value safety as a
								top priority and have crafted engaging environments that will
								help your child grow in wisdom, stature, and in favor with both
								God and man. If you are a new parent to Celebration and would
								like more additional information about the cKids services at
								your specific location download our app.
							</p>
						</div>
					</div>
					<div className='flex justify-center w-full'>
						<div className='flex flex-col gap-y-4 w-full'>
							<div className='flex w-full'>
								<Image src={ckids} alt='' />
							</div>
							<div className='flex w-full'>
								<h4 className='font-display font-semibold text-[24px] text-[#070707]'>
									CELEBRATION YOUTH
								</h4>
							</div>
							<div className='flex w-full'>
								<p className='font-display text-[16px] text-[#7c7c7c]'>
									At Celebration, we believe that children are a heritage from
									the Lord and should be trained to be “Like arrows in the hand
									of a warrior…” (Psalms 127:4). Because of that, our cKids
									services utilize curriculums that will teach your kids the
									Word of God in a creative, fun, and age-appropriate way. We
									value safety as a top priority and have crafted engaging
									environments that will help your child grow in wisdom,
									stature, and in favor with both God and man. If you are a new
									parent to Celebration and would like more additional
									information about the cKids services at your specific location
									download our app.
								</p>
							</div>
							<div className='flex justify-start items-center gap-x-4'>
								<div className='flex justify-start items-center'>
									<p className='font-display font-normal text-[19px]'>
										FIND&nbsp;CKIDS&nbsp;NEAR&nbsp;YOU
									</p>
								</div>
								<div className='flex w-14 items-center'>
									<Image src={arrow} alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-center w-full'>
						<div className='flex flex-col gap-y-4 w-full'>
							<div className='flex w-full'>
								<Image src={celebrationYouth} alt='' />
							</div>
							<div className='flex w-full'>
								<h4 className='font-display font-semibold text-[24px] text-[#070707]'>
									CELEBRATION YOUNG ADULTS
								</h4>
							</div>
							<div className='flex w-full'>
								<p className='font-display text-[16px] text-[#7c7c7c]'>
									Celebration Youth is our Middle and High School ministry for
									students! With weekly gatherings and events happening
									throughout the year, Celebration Youth’s heart is to steward
									and sow into the next generation through relationship and
									community. For more specific information on the events
									happening at your local location, visit the Celebration App.
								</p>
							</div>
							<div className='flex justify-start items-center gap-x-4'>
								<div className='flex justify-start items-center'>
									<p className='font-display font-normal text-[19px]'>
										GET&nbsp;CONNECTED
									</p>
								</div>
								<div className='flex w-14 items-center'>
									<Image src={arrow} alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-center w-full'>
						<div className='flex flex-col gap-y-4 w-full'>
							<div className='flex w-full'>
								<Image src={youngAdults} alt='' />
							</div>
							<div className='flex w-full'>
								<h4 className='font-display font-semibold text-[24px] text-[#070707]'>
									CELEBRATION WORSHIP
								</h4>
							</div>
							<div className='flex w-full'>
								<p className='font-display text-[16px] text-[#7c7c7c]'>
									Celebration Young Adults is designed to serve the Young Adults
									community of Celebration Church through worship gatherings,
									small communities, and other fellowship opportunities. At CYA,
									we believe that we can go further together! If you’d like to
									get more information on events, small groups, and more for
									your Celebration location download other Celebration App.
								</p>
							</div>
							<div className='flex justify-start items-center gap-x-4'>
								<div className='flex justify-start items-center'>
									<p className='font-display font-normal text-[19px]'>
										GET&nbsp;CONNECTED
									</p>
								</div>
								<div className='flex w-14 items-center'>
									<Image src={arrow} alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='flex justify-center w-full'>
						<div className='flex flex-col gap-y-4 w-full'>
							<div className='flex w-full'>
								<Image src={celebrationWorship} alt='' />
							</div>
							<div className='flex w-full'>
								<h4 className='font-display font-semibold text-[24px] text-[#070707]'>
									CELEBRATION WORSHIP
								</h4>
							</div>
							<div className='flex w-full'>
								<p className='font-display text-[16px] text-[#7c7c7c]'>
									Celebration Worship is the worship expression of Celebration
									Church. It’s made up of a dedicated team of worshippers whose
									heart and desire is to usher in the presence of God so that
									people can experience a touch from our Heavenly Father. At
									Celebration, we believe that as we come together as a people,
									we get to experience God’s sacred space, and worship plays a
									pivotal part in this.
								</p>
							</div>
							<div className='flex justify-start items-center gap-x-4'>
								<div className='flex justify-start items-center'>
									<p className='font-display font-normal text-[19px]'>
										GET&nbsp;CONNECTED
									</p>
								</div>
								<div className='flex w-14 items-center'>
									<Image src={arrow} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* MOBILE END */}
			{/* DESKTOP START */}
			<div className='hidden md:flex flex-col items-center w-[100vw]'>
				<div className='flex flex-col items-center w-full max-w-[1728px] mx-auto'>
					<div className='flex w-full'>
						<div className='flex flex-col w-full'>
							<div className='relative w-full z-20'>
								<Image src={collage} alt='' />
							</div>
							<div className='flex items-center justify-end my-2'>
								<div className='flex w-[584px] justify-between'>
									<div className='flex p-2 mx-2'>
										<p className='font-display font-normal text-[#070707] text-[16px]'>
											CKIDS
										</p>
									</div>
									<div className='flex mx-2 w-[8px]'>
										<Image src={circle} alt='' />
									</div>
									<div className='flex p-2 mx-2'>
										<p className='font-display font-normal text-[#070707] text-[16px]'>
											YOUTH
										</p>
									</div>
									<div className='flex mx-2 w-[8px]'>
										<Image src={circle} alt='' />
									</div>
									<div className='flex p-2 mx-2'>
										<p className='font-display font-normal text-[#070707] text-[16px]'>
											YOUNG ADULTS
										</p>
									</div>
									<div className='flex mx-2 w-[8px]'>
										<Image src={circle} alt='' />
									</div>
									<div className='flex p-2 mx-2'>
										<p className='font-display font-normal text-[#070707] text-[16px]'>
											WORSHIP
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='relative flex flex-col top-[0px] -left-[150px] font-display font-bold text-[192px]'>
							<div className='absolute top-0 left-0 text-[#f8f8f8] mix-blend-overlay z-30'>
								THERE&#39;S
								<br />
								A&nbsp;PLACE
								<br />
								<span className='font-kepler italic font-thin text-[1.1em] '>
									FOR&nbsp;YOU
								</span>
							</div>
							<div className='relative z-0'>
								THERE&#39;S
								<br />
								A&nbsp;PLACE
								<br />
								<span className='font-kepler italic font-thin text-[1.1em] '>
									FOR&nbsp;YOU
								</span>
							</div>
							<div className='flex relative left-[200px] p-8 w-[579px]'>
								<p className='font-display font-normal text-[30px] text-[#7c7c7c]'>
									Here at Celebration, our heart is to equip you and your family
									with a safe space to grow your relationship with Jesus while
									cultivating the type of community that stewards God’s
									intention for fellowship with one another. <br />
									<br /> We believe that true life change happens in real,
									authentic relationships! At each Celebration location, we have
									various ministries available for all different age ranges that
									help create these places for growth and community!
								</p>
							</div>
						</div>
					</div>

					{/* MAPPING SECTION */}
					<div className='flex gap-x-16 w-full py-[100px]'>
						<div className='flex flex-col w-full gap-y-16 my-4 '>
							{ministriesData.map((minsitryData, index) => (
								<div key={index} className='flex w-full gap-8'>
									<div className='flex'>
										<Image
											// src={ckids}
											src={minsitryData.image}
											alt=''
											objectFit='cover'
											width={600}
											height={500}
										/>
									</div>
									<div className='flex flex-col gap-y-8 px-16 max-w-[905px]'>
										<div className='font-display font-bold text-[48px]'>
											{minsitryData.heading}
											{/* CKIDS */}
										</div>
										<div className='flex justify-center '>
											{minsitryData.description}
											{/* <p className='font-display text-[24px] text-[#7c7c7c]'>
												At Celebration, we believe that children are a heritage
												from the Lord and should be trained to be “Like arrows
												in the hand of a warrior…” (Psalms 127:4). Because of
												that, our cKids services utilize curriculums that will
												teach your kids the Word of God in a creative, fun, and
												age-appropriate way. <br />
												<br />
												We value safety as a top priority and have crafted
												engaging environments that will help your child grow in
												wisdom, stature, and in favor with both God and man.
												<br />
												<br /> If you are a new parent to Celebration and would
												like more additional information about the cKids
												services at your specific location{' '}
												<a href='' className='font-semibold text-[#7c7c7c]'>
													download our app.
												</a>
											</p> */}
										</div>
										<div>
											<Link href={'minsitryData.href'}>
												<div className='flex justify-start items-center gap-x-4'>
													<div>
														<a className='cursor-pointer font-display font-normal text-[26px] uppercase'>
															{/* Find ckids near you */}
															{minsitryData.linkText}
														</a>
													</div>
													<div className='w-16'>
														<Image src={arrow} alt='' />
													</div>
												</div>
											</Link>
										</div>
									</div>
								</div>
							))}
							{/* <div className='flex w-full gap-8'>
								<div className='flex'>
									<Image src={celebrationYouth} alt='' objectFit='cover' />
								</div>
								<div className='flex flex-col gap-y-8 px-16 max-w-[905px]'>
									<div className='font-display font-bold text-[48px]'>
										CELEBRATION YOUTH
									</div>
									<div className='flex justify-center '>
										<p className='font-display text-[24px] text-[#7c7c7c]'>
											Celebration Youth is our Middle and High School ministry
											for students! With weekly gatherings and events happening
											throughout the year, Celebration Youth’s heart is to
											steward and sow into the next generation through
											relationship and community.
											<br />
											<br /> For more specific information on the events
											happening at your local location,
											<a href='' className='font-semibold text-[#7c7c7c]'>
												visit the Celebration App.
											</a>
										</p>
									</div>
									<div>
										<Link href=''>
											<div className='flex justify-start items-center gap-x-4'>
												<div>
													<a className='cursor-pointer font-display font-normal text-[26px] uppercase'>
														GET CONNECTED{' '}
													</a>
												</div>
												<div className='w-16'>
													<Image src={arrow} alt='' />
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							<div className='flex w-full gap-8'>
								<div className='flex'>
									<Image src={youngAdults} alt='' objectFit='cover' />
								</div>
								<div className='flex flex-col gap-y-8 px-16 max-w-[905px]'>
									<div className='font-display font-bold text-[48px]'>
										CELEBRATION YOUNG ADULTS
									</div>
									<div className='flex justify-center '>
										<p className='font-display text-[24px] text-[#7c7c7c]'>
											Celebration Young Adults is designed to serve the Young
											Adults community of Celebration Church through worship
											gatherings, small communities, and other fellowship
											opportunities. At CYA, we believe that we can go further
											together!
											<br />
											<br /> If you’d like to get more information on events,
											small groups, and more for your Celebration location,{' '}
											<a href='' className='font-semibold text-[#7c7c7c]'>
												download our other Celebration App.
											</a>
										</p>
									</div>
									<div>
										<Link href=''>
											<div className='flex justify-start items-center gap-x-4'>
												<div>
													<a className='cursor-pointer font-display font-normal text-[26px] uppercase'>
														GET CONNECTED{' '}
													</a>
												</div>
												<div className='w-16'>
													<Image src={arrow} alt='' />
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							<div className='flex w-full gap-8'>
								<div className='flex'>
									<Image src={celebrationWorship} alt='' objectFit='cover' />
								</div>
								<div className='flex flex-col gap-y-8 px-16 max-w-[905px]'>
									<div className='font-display font-bold text-[48px]'>
										CELEBRATION WORSHIP{' '}
									</div>
									<div className='flex justify-center '>
										<p className='font-display text-[24px] text-[#7c7c7c]'>
											Celebration Worship is the worship expression of
											Celebration Church. It’s made up of a dedicated team of
											worshippers whose heart and desire is to usher in the
											presence of God so that people can experience a touch from
											our Heavenly Father. At Celebration, we believe that as we
											come together as a people, we get to experience God’s
											sacred space, and worship plays a pivotal part in this.
										</p>
									</div>
									<div>
										<Link href=''>
											<div className='flex justify-start items-center gap-x-4'>
												<div>
													<a className='cursor-pointer font-display font-normal text-[26px] uppercase'>
														GET CONNECTED{' '}
													</a>
												</div>
												<div className='w-16'>
													<Image src={arrow} alt='' />
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div> */}
							{/* <div className='flex w-full gap-x-16 container '>
								<div className='flex w-[1050px]'>
									<Image src={celebrationYouth} alt='' />
								</div>
								<div className='flex flex-col gap-y-8'>
									<div className='font-display font-bold text-[48px]'>
										CELEBRATION YOUTH
									</div>
									<div className='flex w-[905px]'>
										<p className='font-display text-[24px] text-[#7c7c7c]'>
											Celebration Youth is our Middle and High School ministry
											for students! With weekly gatherings and events happening
											throughout the year, Celebration Youth’s heart is to
											steward and sow into the next generation through
											relationship and community.
											<br />
											<br /> For more specific information on the events
											happening at your local location,
											<a href='' className='font-semibold text-[#7c7c7c]'>
												visit the Celebration App.
											</a>
										</p>
									</div>
									<div>
										<Link href=''>
											<div className='flex justify-start items-center gap-x-4'>
												<div>
													<a className='font-display font-normal text-[26px] uppercase'>
														GET CONNECTED{' '}
													</a>
												</div>
												<div className='w-16'>
													<Image src={arrow} alt='' />
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							<div className='flex w-full gap-x-16 container '>
								<div className='flex w-[1050px]'>
									<Image src={youngAdults} alt='' />
								</div>
								<div className='flex flex-col gap-y-8'>
									<div className='font-display font-bold text-[48px]'>
										CELEBRATION YOUNG ADULTS
									</div>
									<div className='flex w-[905px]'>
										<p className='font-display text-[24px] text-[#7c7c7c]'>
											Celebration Young Adults is designed to serve the Young
											Adults community of Celebration Church through worship
											gatherings, small communities, and other fellowship
											opportunities. At CYA, we believe that we can go further
											together!
											<br />
											<br /> If you’d like to get more information on events,
											small groups, and more for your Celebration location,{' '}
											<a href='' className='font-semibold text-[#7c7c7c]'>
												download our other Celebration App.
											</a>
										</p>
									</div>
									<div>
										<Link href=''>
											<div className='flex justify-start items-center gap-x-4'>
												<div>
													<a className='font-display font-normal text-[26px] uppercase'>
														GET CONNECTED
													</a>
												</div>
												<div className='w-16'>
													<Image src={arrow} alt='' />
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
							<div className='flex w-full gap-x-16 container '>
								<div className='flex w-[1050px]'>
									<Image src={celebrationWorship} alt='' />
								</div>
								<div className='flex flex-col gap-y-8'>
									<div className='font-display font-bold text-[48px]'>
										CELEBRATION WORSHIP
									</div>
									<div className='flex w-[905px]'>
										<p className='font-display text-[24px] text-[#7c7c7c]'>
											At Celebration, we believe that children are a heritage
											from the Lord and should be trained to be “Like arrows in
											the hand of a warrior…” (Psalms 127:4). Because of that,
											our cKids services utilize curriculums that will teach
											your kids the Word of God in a creative, fun, and
											age-appropriate way. <br />
											<br />
											We value safety as a top priority and have crafted
											engaging environments that will help your child grow in
											wisdom, stature, and in favor with both God and man.
											<br />
											<br /> If you are a new parent to Celebration and would
											like more additional information about the cKids services
											at your specific location{' '}
											<a href='' className='font-semibold text-[#7c7c7c]'>
												download our app.
											</a>
										</p>
									</div>
									<div>
										<Link href=''>
											<div className='flex justify-start items-center gap-x-4'>
												<div>
													<a className='font-display font-normal text-[26px] uppercase'>
														GET CONNECTED
													</a>
												</div>
												<div className='w-16'>
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
			</div>
			{/* DESKTOP END */}
		</>
	);
}

export default ministries;
