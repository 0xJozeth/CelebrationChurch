import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import longArrow from '/public/arrow-long.svg';

const data = [{ label: 'FIND A LOCATION', href: 'visit' }];

function FullWidthButton() {
	return (
		<>
			{data.map((d, i) => (
				<motion.div
					key={i}
					whileHover={{ scale: 1.1 }}
					className='flex w-full min-h-[51px] lg:h-[200px]
				max-w-[256px] md:max-w-[1440px]
				 justify-center items-center mx-auto my-[100px] overflow-hidden'
				>
					<Link href={d.href}>
						<button className='flex justify-center items-center border-2 border-solid border-[#070707] w-full h-full p-4 gap-x-4 lg:gap-x-[140px] md:px-[50px] mx-auto'>
							<div className='flex min-w-[126px]'>
								<a className='font-display text-[18px] md:text-[44px] lg:text-[90px]'>
									{d.label}
								</a>
							</div>
							<div className='flex min-h-[36px] max-w-[144px] w-[300px] lg:max-w-[444px]'>
								<Image src={longArrow} alt='' />
							</div>
						</button>
					</Link>
				</motion.div>
			))}
		</>
	);
}

export default FullWidthButton;
