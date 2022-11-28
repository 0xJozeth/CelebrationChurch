//IMPORT RESOURCES
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

//IMPORT
import { motion } from 'framer-motion';

//IMPORT ARROW IMAGES
import longArrow from '/public/arrow-long.svg';
import arrow from '/public/arrow@1x-white.svg';
import darkArrowRight from '/public/darkArrowRight.svg';
import arrowdown from '/public/arrow-down.svg';
import leftnav from '/public/navleft.svg';
import rightnav from '/public/navleft.svg';

//IMPORT IMAGES
import GiveHero from '/public/give-hero.png';

//IMPORT ICONS
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { SiBitcoin } from 'react-icons/si';

export default function GiveDesktop() {
	return (
		<>
			<div className='flex justify-center w-[100vw] bg-red-400'>
				<div className='flex flex-col w-full max-w-[1440px] p-8 bg-purple-300'>
					<div className='w-full h-[700px] overflow-hidden bg-blue-300'>
						<div className='relative w-full'>
							<div className='absolute top-[20px] left-[20px] mix-blend-overlay z-30 '>
								<h1 className='font-display font-bold text-[#f8f8f8] md:text-[126px] lg:text-[192px]'>
									LOREM&nbsp;IPSUM
									<br />
									<span className='font-kepler italic text-[1.1em]'>
										LOREM&nbsp;IPSUM
									</span>
								</h1>
							</div>
							<div className='absolute top-[20px] left-[20px] z-0'>
								<h1 className='font-display font-bold text-[#070707] md:text-[126px] lg:text-[192px]'>
									LOREM&nbsp;IPSUM
									<br />
									<span className='font-kepler italic text-[1.1em]'>
										LOREM&nbsp;IPSUM
									</span>
								</h1>
							</div>
						</div>
						<div className='flex justify-end items-end mt-[100px] z-20'>
							<div className='flex w-3/4'>
								<Image src={GiveHero} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
