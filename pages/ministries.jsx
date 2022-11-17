import Data from '/components/CarePageComponents/data.js';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

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

function ministries() {
	return (
		<>
			<div>
				<div className='flex flex-col items-center w-[100vw]'>
					<div className='relative w-full max-w-[325px]'>
						<div className='absolute top-0 left-0 mix-blend-overlay z-30 '>
							<h1 className='font-display font-bold text-[#f8f8f8]   text-[44px]'>
								THERES A PLACE&nbsp;
								<br />
								<span className='font-kepler italic text-[1.1em]'>FOR YOU</span>
							</h1>
						</div>
						<div className='absolute top-0 left-0 z-0'>
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
					</div>
				</div>
			</div>
		</>
	);
}

export default ministries;
