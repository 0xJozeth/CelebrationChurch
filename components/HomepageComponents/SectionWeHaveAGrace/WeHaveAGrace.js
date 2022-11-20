import { useEffect, useRef } from 'react';

import styled from 'styled-components';
import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';
import Link from 'next/link';
import arrow from '/public/link-arrow.svg';

import Place from '/public/ministries-homepage@1x.png';
import { useInView } from 'framer-motion';

import Banner from '/components/Banner/GraceBanner.js';

import Typed from 'react-typed';

const Grace = styled.h2`
	font-family: 'kepler-std-display';
	font-weight: 900;
	/* font-size: clamp(115px, 18.5vw, 360px); */
	-webkit-text-fill-color: transparent;
	-webkit-text-stroke: 1.5px;

	letter-spacing: 1vw;
`;

const For = styled.div`
	h3 {
		font-size: clamp(36px, 18.5vw, 42px);
	}
`;

export default function WeHaveAGrace() {
	return (
		<>
			<div
				className='flex flex-col items-start
				mx-auto p-4
				w-[100vw]'
			>
				<div
					className='flex flex-col
					justify-start items-center
					w-full

				lg:items-center 
				'
				>
					<div className='flex'>
						<h2
							className='font-display 
						text-[58px] md:text-[96px] lg:text-[136px] xl:text-[180px]
						font-bold'
						>
							WE&nbsp;HAVE&nbsp;A
						</h2>
					</div>
					<div className='flex mx-auto max-w-[390px] md:max-w-[575px] lg:max-w-[1024px] 2xl:max-w-[1536px] min-w-full justify-center'>
						<div
							className=' 
							text-[96px]
							md:text-[170px]
							lg:text-[306px]
							xl:text-[344px]'
						>
							<Grace>GRACE</Grace>
						</div>
					</div>
					<div
						className='flex mx-auto
					justify-center w-full items-start 
					md:relative md:h-[600px]
					lg:min-w-[1024px] xl:min-w-[1440px] '
					>
						<h3
							className='flex font-display 
							min-h-[96px]
						text-[24px] md:text-[96px] lg:text-[126px]
						
						font-bold 
						my-[2px]
						md:my-3
						lg:my-4
						mx-2 
						'
						>
							FOR &nbsp;
						</h3>
						<div
							className='flex justify-start md:my-4 px-1 md:px-4 w-full 
						min-w-[200px]
						md:max-w-[482px]
						lg:min-w-[596px] lg:max-w-[635px]

						'
						>
							<Typed
								className='font-kepler italic uppercase
								text-[28px] md:text-[136px] lg:text-[114x] xl:text-[144px]
								'
								strings={[
									'Gathering.',
									'Small Groups.',
									'Serving the generations.',
									'Generosity.',
									'Growing.',
									'Creativity.',
									'Worship.',
									'Diversity.',
								]}
								typeSpeed={35} //70
								backDelay={2400} //2400
								backSpeed={45} //70
								loop
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
