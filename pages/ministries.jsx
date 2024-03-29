import Data from '/components/CarePageComponents/data.js';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import collage from '/public/ministries-hero.png';
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
import freedom from '/public/ministries_freedom.png';
import serving from '/public/ministries_serving.png';
import sisterhood from '/public/ministries_sisterhood.png';
import smallgroups from '/public/ministries_smallgroups.png';

import React from 'react';
import FullWidthButton from '../components/FullWidthButton';
import { motion } from 'framer-motion';

const ministriesData = [
	{
		image: ckids,
		heading: 'CKIDS',
		description:
			'At Celebration, we believe that children are a heritage from the Lord and should be trained to be “Like arrows in the hand of a warrior…” (Psalms 127:4). Because of that, our cKids services utilize curriculums that will teach your kids the Word of God in a creative, fun, and age-appropriate way. We value safety as a top priority and have crafted engaging environments that will help your child grow in wisdom, stature, and in favor with both God and man. If you are a new parent to Celebration and would like more additional information about the cKids services at your specific location',
	},
	{
		image: celebrationYouth,
		heading: 'CELEBRATION YOUTH',
		description:
			'Celebration Youth is our Middle and High School ministry for students! With weekly gatherings and events happening throughout the year, Celebration Youth’s heart is to steward and sow into the next generation through relationship and community. For more specific information on the events happening at your local location, visit the Celebration App.',
	},
	{
		image: youngAdults,
		heading: 'CELEBRATION YOUNG ADULTS',
		description:
			'Celebration Young Adults is designed to serve the YoungAdults community of Celebration Church through worship gatherings, small communities, and other fellowship opportunities. At CYA, we believe that we can go further together! If you’d like to get more information on events, small groups, and more for your Celebration location, download our other Celebration App.',
	},
	{
		image: celebrationWorship,
		heading: 'CELEBRATION WORSHIP',
		description:
			'At Celebration, we believe that children are a heritage from the Lord and should be trained to be “Like arrows in the hand of a warrior…” (Psalms 127:4). Because of that,our cKids services utilize curriculums that will teach your kids the Word of God in a creative, fun, and age-appropriate way. We value safety as a top priority and have crafted engaging environments that will help your child grow in wisdom, stature, and in favor with both God and man. If you are a new parent to Celebration and would like more additional information about the cKids services at your specific location download our app.',
	},
	{
		image: freedom,
		heading: 'FREEDOM',
		description:
			'Our freedom group ministry is designed to help you find freedom through Biblical truth and community support with guidance from the Holy Spirit. These groups provide a safe and confidential space to share struggles, receive prayer, and learn practical tools to overcome obstacles. We believe in the power of community and the truth of the Word of God to bring true and lasting freedom. Join a group today and start your journey to freedom.',
	},
	{
		image: smallgroups,
		heading: 'SMALL GROUPS',
		description:
			'Our groups ministry offers an opportunity for you to connect and grow in your faith through fellowship, Bible study, and prayer. Groups meet regularly for a time of sharing, learning, and encouragement in a supportive environment. Groups are also opportunities to build deeper relationships with others in the church and to serve the community. Join a group today and take the next step in your spiritual journey.',
	},
	{
		image: serving,
		heading: 'SERVING TEAMS',
		description:
			'Our serve teams ministry provides an opportunity for you to put your faith into action by serving others in the church and the community. With a variety of teams to choose from, such as connect teams, greeting teams, children’s ministry, and outreach, there is something for everyone. Not only do these teams provide a way to serve others, but they also offer opportunities for growth, leadership, and building relationships within the church. Join a serve team today!',
	},
	{
		image: sisterhood,
		heading: 'SISTERHOOD',
		description:
			'Sisterhood is a community where women can come together to share their lives and support one another as they navigate through the joys and challenges of everyday life with the power of the Holy Spirit. We offer various opportunities for fellowship, Bible study, and mentorship. In the Fall of each year, we also gather at Sisterhood Conference to preach the gospel and gather as women to seek after God together. Join us today and take the next step in your spiritual journey.',
	},
];

function ministries() {
	return (
		<>
			{/* MOBILE START */}
			<div className='flex md:hidden justify-center w-screen'>
				<div className='flex flex-col items-center w-full max-w-[355px] p-4 gap-y-12'>
					<div className='relative w-full h-auto pt-16'>
						<div className='absolute -top-2 left-0 mix-blend-overlay z-30 '>
							<h1 className='font-display font-bold text-[#f8f8f8] text-[48px]'>
								THERES
								<br />A PLACE
								<br />
								<span className='font-kepler italic text-[1.1em]'>FOR YOU</span>
							</h1>
						</div>
						<div className='absolute -top-2 left-0 z-0'>
							<h1 className='font-display font-bold text-[#070707] text-[48px]'>
								THERES
								<br />A PLACE
								<br />
								<span className='font-kepler italic text-[1.1em]'>FOR YOU</span>
							</h1>
						</div>
						<div className='flex justify-end z-20'>
							<Image src={image2} width={266} height={143} alt='' />
						</div>
						<div className='flex w-full py-4'>
							<p className='font-display text-[16px] text-[#7c7c7c] leading-relaxed'>
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
								<p className='font-display text-[16px] text-[#7c7c7c] leading-relaxed'>
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
								<p className='font-display text-[16px] text-[#7c7c7c] leading-relaxed'>
									Celebration Youth is our Middle and High School ministry for
									students! With weekly gatherings and events happening
									throughout the year, Celebration Youth’s heart is to steward
									and sow into the next generation through relationship and
									community. For more specific information on the events
									happening at your local location, visit the Celebration App.
								</p>
							</div>
							{/* <div className='flex justify-start items-center gap-x-4'>
								<div className='flex justify-start items-center'>
									<p className='font-display font-normal text-[19px]'>
										GET&nbsp;CONNECTED
									</p>
								</div>
								<div className='flex w-14 items-center'>
									<Image src={arrow} alt='' />
								</div>
							</div> */}
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
								<p className='font-display text-[16px] text-[#7c7c7c] leading-relaxed'>
									Celebration Young Adults is designed to serve the Young Adults
									community of Celebration Church through worship gatherings,
									small communities, and other fellowship opportunities. At CYA,
									we believe that we can go further together! If you’d like to
									get more information on events, small groups, and more for
									your Celebration location download other Celebration App.
								</p>
							</div>
							{/* <div className='flex justify-start items-center gap-x-4'>
								<div className='flex justify-start items-center'>
									<p className='font-display font-normal text-[19px]'>
										GET&nbsp;CONNECTED
									</p>
								</div>
								<div className='flex w-14 items-center'>
									<Image src={arrow} alt='' />
								</div>
							</div> */}
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
								<p className='font-display text-[16px] text-[#7c7c7c] leading-relaxed'>
									Celebration Worship is the worship expression of Celebration
									Church. It’s made up of a dedicated team of worshippers whose
									heart and desire is to usher in the presence of God so that
									people can experience a touch from our Heavenly Father. At
									Celebration, we believe that as we come together as a people,
									we get to experience God’s sacred space, and worship plays a
									pivotal part in this.
								</p>
							</div>
							{/* <div className='flex justify-start items-center gap-x-4'>
								<div className='flex justify-start items-center'>
									<p className='font-display font-normal text-[19px]'>
										GET&nbsp;CONNECTED
									</p>
								</div>
								<div className='flex w-14 items-center'>
									<Image src={arrow} alt='' />
								</div>
							</div> */}
						</div>
					</div>
					<div className='flex justify-center w-full'>
						<div className='flex flex-col gap-y-4 w-full'>
							<div className='flex w-full'>
								<Image src={freedom} alt='' />
							</div>
							<div className='flex w-full'>
								<h4 className='font-display font-semibold text-[24px] text-[#070707]'>
									FREEDOM
								</h4>
							</div>
							<div className='flex w-full'>
								<p className='font-display text-[16px] text-[#7c7c7c] leading-relaxed'>
									Our freedom group ministry is designed to help you find
									freedom through Biblical truth and community support with
									guidance from the Holy Spirit. These groups provide a safe and
									confidential space to share struggles, receive prayer, and
									learn practical tools to overcome obstacles. We believe in the
									power of community and the truth of the Word of God to bring
									true and lasting freedom. Join a group today and start your
									journey to freedom.
								</p>
							</div>
							{/* <div className='flex justify-start items-center gap-x-4'>
								<div className='flex justify-start items-center'>
									<p className='font-display font-normal text-[19px]'>
										GET&nbsp;CONNECTED
									</p>
								</div>
								<div className='flex w-14 items-center'>
									<Image src={arrow} alt='' />
								</div>
							</div> */}
						</div>
					</div>
					<div className='flex justify-center w-full'>
						<div className='flex flex-col gap-y-4 w-full'>
							<div className='flex w-full'>
								<Image src={smallgroups} alt='' />
							</div>
							<div className='flex w-full'>
								<h4 className='font-display font-semibold text-[24px] text-[#070707]'>
									SMALL GROUPS
								</h4>
							</div>
							<div className='flex w-full'>
								<p className='font-display text-[16px] text-[#7c7c7c] leading-relaxed'>
									Our groups ministry offers an opportunity for you to connect
									and grow in your faith through fellowship, Bible study, and
									prayer. Groups meet regularly for a time of sharing, learning,
									and encouragement in a supportive environment. Groups are also
									opportunities to build deeper relationships with others in the
									church and to serve the community. Join a group today and take
									the next step in your spiritual journey.
								</p>
							</div>
							{/* <div className='flex justify-start items-center gap-x-4'>
								<div className='flex justify-start items-center'>
									<p className='font-display font-normal text-[19px]'>
										GET&nbsp;CONNECTED
									</p>
								</div>
								<div className='flex w-14 items-center'>
									<Image src={arrow} alt='' />
								</div>
							</div> */}
						</div>
					</div>
					<div className='flex justify-center w-full'>
						<div className='flex flex-col gap-y-4 w-full'>
							<div className='flex w-full'>
								<Image src={serving} alt='' />
							</div>
							<div className='flex w-full'>
								<h4 className='font-display font-semibold text-[24px] text-[#070707]'>
									SERVING TEAMS
								</h4>
							</div>
							<div className='flex w-full'>
								<p className='font-display text-[16px] text-[#7c7c7c] leading-relaxed'>
									Our serve teams ministry provides an opportunity for you to
									put your faith into action by serving others in the church and
									the community. With a variety of teams to choose from, such as
									connect teams, greeting teams, children’s ministry, and
									outreach, there is something for everyone. Not only do these
									teams provide a way to serve others, but they also offer
									opportunities for growth, leadership, and building
									relationships within the church. Join a serve team today!
								</p>
							</div>
							{/* <div className='flex justify-start items-center gap-x-4'>
								<div className='flex justify-start items-center'>
									<p className='font-display font-normal text-[19px]'>
										GET&nbsp;CONNECTED
									</p>
								</div>
								<div className='flex w-14 items-center'>
									<Image src={arrow} alt='' />
								</div>
							</div> */}
						</div>
					</div>
					<div className='flex justify-center w-full'>
						<div className='flex flex-col gap-y-4 w-full'>
							<div className='flex w-full'>
								<Image src={sisterhood} alt='' />
							</div>
							<div className='flex w-full'>
								<h4 className='font-display font-semibold text-[24px] text-[#070707]'>
									SISTERHOOD
								</h4>
							</div>
							<div className='flex w-full'>
								<p className='font-display text-[16px] text-[#7c7c7c] leading-relaxed'>
									Sisterhood is a community where women can come together to
									share their lives and support one another as they navigate
									through the joys and challenges of everyday life with the
									power of the Holy Spirit. We offer various opportunities for
									fellowship, Bible study, and mentorship. In the Fall of each
									year, we also gather at Sisterhood Conference to preach the
									gospel and gather as women to seek after God together. Join us
									today and take the next step in your spiritual journey.
								</p>
							</div>
							{/* <div className='flex justify-start items-center gap-x-4'>
								<div className='flex justify-start items-center'>
									<p className='font-display font-normal text-[19px]'>
										GET&nbsp;CONNECTED
									</p>
								</div>
								<div className='flex w-14 items-center'>
									<Image src={arrow} alt='' />
								</div>
							</div> */}
						</div>
					</div>
					<Link href='visit'>
						<button className='flex justify-center items-center border-2 border-solid border-[#070707] w-full h-full p-4 gap-x-4 lg:gap-x-[140px] md:px-[50px] mx-auto'>
							<div className='flex min-w-[126px]'>
								<a className='font-display text-[24px] md:text-[44px] lg:text-[90px]'>
									FIND&nbsp;A&nbsp;LOCATION
								</a>
							</div>
							<div className='flex min-h-[36px]'>
								<Image src={longArrow} width={90} alt='' />
							</div>
						</button>
					</Link>
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

							{/* <div className='flex items-center justify-end my-2'>
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
							</div> */}
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
							<div className='flex relative left-[200px] p-8 w-[579px] mb-32'>
								<p className='font-display font-normal text-[26px] text-[#7c7c7c] leading-relaxed'>
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
					<div className='flex w-full '>
						<div className='flex flex-col w-full gap-36  mx-auto'>
							{ministriesData.map((minsitryData, index) => (
								<div key={index} className='flex w-full  mx-auto'>
									<div className='flex pl-24'>
										<Image
											src={minsitryData.image}
											alt=''
											objectFit='cover'
											width={750}
											height={500}
										/>
									</div>
									<div className='flex flex-col px-16 gap-y-4 max-w-[900px] mx-auto'>
										<div className='font-display font-bold text-[48px]'>
											{minsitryData.heading}
										</div>
										<div className='flex justify-center pr-16'>
											<p className='font-display font-normal text-[26px] text-[#7c7c7c] leading-relaxed'>
												{minsitryData.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div>
						<FullWidthButton />
					</div>
				</div>
			</div>
			{/* DESKTOP END */}
		</>
	);
}

export default ministries;
