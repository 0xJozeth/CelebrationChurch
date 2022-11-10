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

// const Grid = styled.div`
// 	display: grid;
// 	grid-template-columns: 1fr;

// 	margin-block: 3vw;

// 	div {
// 		&.mainContainer {
// 			display: grid;
// 			grid-template-columns: 1fr;
// 			grid-auto-rows: fit-content;
// 			place-self: center;
// 		}

// 		&.grace {
// 			justify-content: center;
// 			width: min-content;
// 			margin-right: 3vw;

// 			h2 {
// 				font-family: 'kepler-std-display';
// 				font-size: 18.5vw;
// 				-webkit-text-fill-color: transparent;
// 				-webkit-text-stroke: 1px;
// 				letter-spacing: 1vw;
// 			}
// 		}
// 	}
// `;

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

	/* @media screen and (min-width: 1024px) {
		min-width: 400px;
		position: absolute;
		top: 0;
		right: 100px;
	} */
`;

// min-w-[390px]
// 				md:min-w-[575px]
// 				lg:min-w-[1024px]
// 				2xl:min-w-[1536px]

export default function WeHaveAGrace() {
	return (
		<>
			<div
				className='flex flex-col items-center
				mx-auto 
				mt-2
				md:mt-16
				md:pt-0
				pt-16
				w-full

				min-w-[390px]
				md:min-w-[575px]
				lg:min-w-[1024px]
				xl:min-w-[1440px]
				4k:min-w-[2560px]

				min-h-[290px]
				md:min-h-[575px]
				lg:min-h-[780px]
				xl:min-h-[1024px]
			'
			>
				<div className='w-full lg:flex lg:flex-col lg:items-center'>
					<div className='flex'>
						<h2
							className='font-display 
						text-[46px] md:text-[72px] lg:text-[136px] xl:text-[180px]
						font-bold'
						>
							WE HAVE A
						</h2>
					</div>
					<div
						className='flex mx-auto
							max-w-[390px]
							md:max-w-[575px]
							lg:max-w-[1024px]
							2xl:max-w-[1536px]
							min-w-full
							justify-center'
					>
						<div
							className='
							text-[92px]
							md:text-[170px]
							lg:text-[306px]
							xl:text-[344px]
'
						>
							<Grace>GRACE</Grace>
						</div>
					</div>
					<div
						className='flex 
					justify-center items-start 
					md:relative 
					lg:min-w-[1024px]
					xl:min-w-[1440px]
					'
					>
						<h3
							className='flex font-display 
							min-h-[96px]
						text-[46px] md:text-[64px] lg:text-[126px]
						
						font-bold 
						my-1
						md:my-3
						lg:my-4
						mx-2 
						'
						>
							FOR &nbsp;
						</h3>
						<div
							className='flex justify-start my-4 px-2 w-full 
						min-w-[260px]
						md:max-w-[482px]
						lg:min-w-[596px] lg:max-w-[635px]

						'
						>
							<Typed
								className='font-kepler italic uppercase
								text-[36px] md:text-[58px] lg:text-[98px] xl:text-[144px]
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
