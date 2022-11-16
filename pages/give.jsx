import React, { useState, useEffect, useRef } from 'react';
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
import { SiBitcoin } from 'react-icons/si';

import piggyBank from '/public/give-images/piggy-bank.svg';
import { MdOutlinePhoneAndroid } from 'react-icons/md';

import { motion } from 'framer-motion';
import GiveHeroMobile from '/public/GiveHeroMobile.png';

import longArrow from '/public/arrow-long.svg';

function give() {
	return (
		<div
			className='flex flex-col w-[100vw]
		   bg-blue-300 px-4 mx-auto gap-y-8
			md:bg-purple-300 md:max-w-[768px] md:w-[100vw]
			lg:bg-green-300 lg:max-w-[1024px] lg:w-[100vw]
			xl:bg-red-300 xl:max-w-[1440px] xl:w-[100vw]
            items-center'
		>
			<div className='relative flex flex-col items-center justify-start w-full'>
				<div className='flex w-full justify-center pr-[90px] z-30 mix-blend-overlay'>
					<h1 className='font-display font-bold text-[44px] text-[#f8f8f8] '>
						WE&nbsp;LOVE&nbsp;
						<br />
						<span className='font-kepler italic text-[1.1em]'>
							SO&nbsp;WE&nbsp;GIVE
						</span>
					</h1>
				</div>
				<div className='relative z-20 mt-[-65px]'>
					<Image src={GiveHeroMobile} alt='give-hero' />
					<div className='flex items-center absolute z-40 bottom-[140px] right-[20px] border-2 border-solid border-[#f8f8f8] p-2 rounded-[4px] w-auto gap-x-2'>
						<div className='flex justify-center items-center p-2 '>
							<button className='font-display text-[20px] text-[#f8f8f8]'>
								GIVE NOW
							</button>
						</div>
						<div className='flex w-[120px]'>
							<Image src={arrow} alt='' />
						</div>
					</div>
				</div>
				<div className='flex w-full justify-center pr-[90px] absolute z-10'>
					<h1 className='font-display font-bold text-[44px]'>
						WE&nbsp;LOVE&nbsp;
						<br />
						<span className='font-kepler italic text-[1.1em]'>
							SO&nbsp;WE&nbsp;GIVE
						</span>
					</h1>
				</div>
			</div>
			<div className='relative flex flex-col items-center justify-start w-full'>
				<div className='font-display font-bold text-[44px] text-center'>
					WHY&nbsp;WE&nbsp;
					<br />
					<span className='font-kepler italic text-[1.1em]'>GIVE</span>
				</div>
				<div className='flex flex-col max-w-[355px] p-2 gap-y-4'>
					<div>
						<p className='font-display text-[18px] text-[#7C7C7C]'>
							Here at Celebration, we believe that God calls us to partake in
							the act of generosity, and that tithing is an act of worship and
							obedience to Jesus.
						</p>
					</div>
					<div>
						<p className='font-display text-[18px] text-[#7C7C7C]'>
							When you give back to the Lord through Celebration Church, we
							commit to you that your offering will sow into the expansion of
							His Kingdom as we seek to share the transformative power of the
							Gospel all around the world.
						</p>
					</div>
				</div>
				<div className='flex flex-col items-center justify-center h-20 w-full my-2 bg-red-200'>
					<div className='flex flex-col items-center gap-y-4'>
						<div className='text-[19px]'>
							<button className='font-display uppercase'>Learn More</button>
						</div>
						<div className='flex flex-col items-center justify-center w-[28px] bg-blue-500'>
							<Image src={arrowdown} alt='' />
						</div>
					</div>
				</div>
			</div>
			<div className='relative flex flex-col items-center justify-start w-full bg-green-500'>
				<div className='font-display font-bold text-[44px] text-center'>
					YOUR
					<br />
					<span className='font-kepler italic text-[1.1em]'>IMPACT</span>
				</div>
				<div className='flex justify-between w-full'>
					<div className='flex p-2 w-[100px]'>
						<Image src={leftnav} alt='' />
					</div>
					<div>
						<Image src={media} alt='' />
					</div>
					<div className='flex p-2 w-[100px] rotate-180'>
						<Image src={rightnav} alt='' />
					</div>
				</div>
				<div className='flex justify-center items-center w-[154px] my-4'>
					<Image src={navigation} alt='' />
				</div>
			</div>
			<div className='relative flex flex-col items-center justify-start w-full'>
				ONLINE GIVING
			</div>
			<div className='relative flex flex-col items-center justify-start w-full'>
				OTHER WAYS TO GIVE
			</div>
			<div className='relative flex flex-col items-center justify-start w-full'>
				TEAM LEGACY
			</div>
			<div className='relative flex flex-col items-center justify-start w-full'>
				BEGIN TO TITHE
			</div>
			<div className='relative flex flex-col items-center justify-start w-full'>
				HAVE QUESTIONS
			</div>
			<div className='relative flex flex-col items-center justify-start w-full'></div>
		</div>
	);
}

export default give;
