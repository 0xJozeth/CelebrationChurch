import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import stage from '/public/care-images/care_stage.png';
import telecare from '/public/care-images/care_telecare.png';
import arrow from '/public/arrow@1x.png';
import longArrow from '/public/ministries-images/arrow-long.svg';

import React from 'react';

function care() {
	return (
		<div className='flex justify-center w-[100vw]'>
			<div className='flex flex-col items-center w-full max-w-[325px] p-8 mb-12 gap-y-8'>
				<div className='relative w-full h-[670px] mb-[64px]'>
					<div className='absolute top-[20px] left-[20px] mix-blend-overlay z-30 '>
						<h1 className='font-display font-bold text-[#f8f8f8]   text-[44px]'>
							SUPPORTING&nbsp;YOU
							<br />
							ON&nbsp;YOUR
							<br />
							PATH&nbsp;TO
							<br />
							<span className='font-kepler italic text-[1.1em]'>WHOLENESS</span>
						</h1>
					</div>
					<div className='absolute top-[20px] left-[20px] z-0'>
						<h1 className='font-display font-bold text-[#070707] text-[44px]'>
							SUPPORTING&nbsp;YOU
							<br />
							ON&nbsp;YOUR
							<br />
							PATH&nbsp;TO
							<br />
							<br />
							<span className='font-kepler italic text-[1.1em]'>WHOLENESS</span>
						</h1>
					</div>
					<div className='flex justify-end items-end h-[275px] w-full  p-4 z-20'>
						<div className='flex w-[280px]'>
							<Image src={stage} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default care;
