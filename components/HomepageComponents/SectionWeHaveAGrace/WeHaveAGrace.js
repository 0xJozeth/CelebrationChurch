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

export default function WeHaveAGrace() {
	return (
		<>
			<div className='hidden md:flex flex-col items-start mx-auto p-4 w-full md:h-[700px] lg:h-[900px] '>
				<div className='relative flex flex-col items-center w-full'>
					<div className='flex w-full justify-center'>
						<h2 className='font-display text-[46px] md:text-[88px] lg:text-[136px] xl:text-[180px] font-bold'>
							WE&nbsp;HAVE&nbsp;A
						</h2>
					</div>
					<div className='flex mx-auto max-w-[390px] md:max-w-[575px] lg:max-w-[1024px] 2xl:max-w-[1536px] min-w-full justify-center'>
						<div className='text-[82px] md:text-[170px] lg:text-[306px] xl:text-[344px]'>
							<Grace>GRACE</Grace>
						</div>
					</div>
					<div className='flex relative lg:flex-col mx-auto justify-center lg:justify-start lg:items-end w-full md:relative md:h-[300px] lg:min-w-[1024px] xl:min-w-[1440px]'>
						<div className='flex font-display min-h-[96px] text-[24px] md:text-[96px] lg:text-[96px] font-bold my-[2px] md:my-3 lg:my-0 md:w-full md:justify-start md:pl-[15%]'>
							<h3 className=''>FOR &nbsp;</h3>
						</div>
						<div
							className='absolute md:my-4 px-1 md:px-4 
						w-full min-w-[200px] md:max-w-[482px] lg:min-w-[596px] lg:max-w-[900px]
						  md:top-[120px] lg:top-[100px] xl:-top-[35px]
						  md:bottom-[120px] lg:bottom-[100px] xl:-bottom-[35px]
						  md:left-[100px] 
						  lg:right-[100px] 
						  xl:left-[450px]  

						  md:h-[325px]'
						>
							<Typed
								className='font-kepler italic uppercase
									text-[28px] md:text-[96px] lg:text-[114x] xl:text-[144px]'
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
								typeSpeed={35}
								backDelay={2400}
								backSpeed={45}
								loop
							/>
						</div>
					</div>
				</div>
			</div>

			<div className='md:hidden flex w-[100vw] justify-center my-[40px] '>
				<div className='grid grid-rows-3 justify-center place-items-center  '>
					<div className='flex justify-center items-end p-2'>
						<h2 className='font-display text-[48px] font-bold'>
							WE&nbsp;HAVE&nbsp;A
						</h2>
					</div>
					<div className='flex justify-center '>
						<div className='w-full text-[88px] m-0 p-0'>
							<Grace>GRACE</Grace>
						</div>
					</div>
					<div className='flex justify-center'>
						<div className='grid grid-cols-minmax2 gap-0'>
							<div className='flex justify-end p-2'>
								<h3 className='font-display font-bold text-[28px]'>
									FOR&nbsp;
								</h3>
							</div>
							<div className='flex p-2'>
								<Typed
									className='font-kepler italic uppercase text-[28px]'
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
			</div>
		</>
	);
}
