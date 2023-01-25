import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import arrow from '/public/link-arrow.svg';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsFillArrowRightCircleFill, BsClockFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';

import React, { useEffect, useState } from 'react';
// import VisitDesktop from './visit-deprecated';

function VisitTW(props) {
	console.log('props:', props);
	const [usa, setUsa] = useState(false);
	const [international, setInternational] = useState(false);
	const [global, setGlobal] = useState(false);

	const handleUsa = () => {
		setUsa(!usa);
	};
	const handleInternational = () => {
		setInternational(!international);
	};
	const handleGlobal = () => {
		setGlobal(!global);
	};

	useEffect(() => {
		console.log('The usa useState is set to:', usa);
	});
	useEffect(() => {
		console.log('The international useState is set to:', international);
	});
	useEffect(() => {
		console.log('The global useState is set to:', global);
	});

	return (
		<>
			<div className='block md:hidden'>
				<div className='flex flex-col md:flex-row gap-4 sm:max-w-[768px!important] md:max-w-[1990px!important] mx-auto items-center md:justify-start px-12'>
					<div
						className='md:flex md:relative z-[2] md:order-1 md:w-full md:min-h-[626px]
					lg:min-h-[900px]'
					>
						<iframe
							className='md:absolute h-[307px] w-[375px]
							md:h-[626px] md:w-[665px]
							lg:h-[900px] lg:w-[1100px]
							md:right-0'
							src='https://player.vimeo.com/video/688965998?h=9fc6981331&amp;&controls=0&badge=0&autoplay=1&muted=1&loop=1&autopause=0&amp;player_id=0&amp;app_id=58479'
							frameBorder='0'
							allowFullScreen
							priority
						></iframe>
					</div>
					<div className='relative md:absolute flex flex-col mx-auto mt-[-40px] md:mt-0'>
						<div className='top-0 left-0 z-[1]'>
							<h1 className='font-display text-[54px] md:text-[110px] lg:text-[196px] font-bold'>
								WE’RE SO <br />
								<span className='font-kepler italic text-[62px] md:text-[126px] lg:text-[252px] font-semibold'>
									GLAD
								</span>
								<br />
								YOU’RE HERE
							</h1>
						</div>
						<div className='absolute top-0 left-0 mix-blend-overlay text-[white] z-[3]'>
							<h1 className='font-display text-[54px] md:text-[110px] lg:text-[196px] font-bold'>
								WE’RE SO <br />
								<span className='font-kepler italic text-[62px] md:text-[126px] lg:text-[252px] font-semibold'>
									GLAD
								</span>
								<br />
								YOU’RE HERE
							</h1>
						</div>
					</div>
				</div>
				<div
					className='
				flex flex-col gap-4
				max-w-[298px!important] md:max-w-[1024px!important]
				mx-auto
				my-12 lg:my-24
				'
				>
					<div className='flex flex-col justify-start max-w-[298px!important] md:max-w-[1024px!important] md:mx-auto'>
						<h2 className='font-display text-[24px] md:text-[48px] lg:text-[82px] font-bold my-4 p-4'>
							SELECT A LOCATION
						</h2>
						{/* </div> */}
						<div
							className='flex flex-col md:flex-row
						justify-start
						max-w-[298px!important] md:max-w-[1024px!important]
						lg:w-[828.39px] lg:p-4
						mx-auto'
						>
							<ul
								className='flex flex-col items-start
				
							font-display text-[20px] md:text-[40px] lg:text-[68px] gap-y-4'
							>
								<ul
									className='flex text-[28px] md:text-[56px] items-center'
									onClick={handleUsa}
								>
									<div
										className={
											usa
												? 'flex underline underline-offset-2 font-semibold bg-[#070707] text-[#f8f8f8] p-2'
												: 'flex underline-offset-2 p-2'
										}
									>
										USA
									</div>
									&nbsp;
									<li className={usa ? 'list-none hidden' : 'list-none block'}>
										&#43;
									</li>
									<li className={usa ? 'list-none block' : 'list-none hidden'}>
										&#45;
									</li>
								</ul>
								<div
									className={
										usa
											? ' w-full delay-200 translate-y-0 opacity-100 duration-300 flex flex-col gap-x-20'
											: ' w-full delay-0 translate-y-[-100vh] opacity-25 hidden'
									}
								>
									<ul className='flex flex-col gap-y-4 ml-12'>
										<li className='flex items-center'>
											<a
												className='flex relative hover:bg-black hover:text-white ease-in items-center cursor-pointer'
												href='https://celebrationjax.org/'
												target='_blank'
												rel='noopener noreferrer'
											>
												JACKSONVILLE
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href='https://celebrationsfl.org/'
												target='_blank'
												rel='noopener noreferrer'
											>
												SOUTH FLORIDA
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href='http://celebrationorl.org/'
												target='_blank'
												rel='noopener noreferrer'
											>
												ORLANDO
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href='https://celebrationchurchdc.org/'
												target='_blank'
												rel='noopener noreferrer'
											>
												WASHINGTON, D.C.
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href='http://www.christianfaithcenternc.com/'
												target='_blank'
												rel='noopener noreferrer'
											>
												CFC CREEDMOOR
											</a>
										</li>
									</ul>
								</div>
								<ul
									className='flex items-center text-[28px] md:text-[56px]'
									onClick={handleInternational}
								>
									<div
										className={
											international
												? 'flex underline underline-offset-2 font-semibold bg-[#070707] text-[#f8f8f8] p-2'
												: 'flex underline-offset-2 p-2'
										}
									>
										INTERNATIONAL
									</div>{' '}
									&nbsp;
									<li
										className={
											international ? 'list-none hidden' : 'list-none block'
										}
									>
										&#43;
									</li>
									<li
										className={
											international ? 'list-none block' : 'list-none hidden'
										}
									>
										&#45;
									</li>
								</ul>
								<div
									className={
										international
											? ' w-full delay-200 translate-y-0 opacity-100 duration-300 flex flex-col gap-x-20'
											: ' w-full delay-0 translate-y-[-100vh] opacity-25 hidden'
									}
								>
									<ul className='flex flex-col gap-y-4 ml-12'>
										{/* <li className='flex items-center'>
											<a className='flex relative hover:bg-black hover:text-white ease-in items-center cursor-pointer'>
												THE LIGHTHOUSE ANTWERP, BELGIUM
											</a>
										</li> */}
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in'
												href='https://www.celebrationchurch.nl/'
												target='_blank'
												rel='noopener noreferrer'
											>
												NETHERLANDS
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href='https://celebrationparis.org/'
												target='_blank'
												rel='noopener noreferrer'
											>
												FRANCE
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href='https://celebrationmokopane.org/'
												target='_blank'
												rel='noopener noreferrer'
											>
												SOUTH AFRICA
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href=''
												target='_blank'
												rel='noopener noreferrer'
											>
												ZIMBABWE
											</a>
										</li>
									</ul>
								</div>
							</ul>
						</div>
					</div>
				</div>
				<div className='flex mx-auto justify-center lg:justify-start lg:w-[1990px] lg:max-w-[1990px!important] lg:p-12'>
					<h1 className='font-display font-bold text-[#070707 text-[54px] md:text-[108px] lg:text-[183px]'>
						REACH OUT&nbsp;
						<br />
						<span className='flex font-kepler italic font-semibold text-[62px] md:text-[124px] lg:text-[210px] justify-around'>
							TO US
						</span>
					</h1>
				</div>
				<div className='lg:flex lg:px-12 lg:m-4 lg:items-start gap-x-12 lg:mx-auto lg:justify-center'>
					<div className='flex flex-col mx-auto lg:mx-0 my-12 lg:my-4 max-w-[298px] md:max-w-[1024px!important] lg:max-w-[496px!important]'>
						<div className='flex flex-col max-w-[298px] md:max-w-[1024px!important] md:w-[496px] mx-auto'>
							<h3 className='flex lg:hidden font-display text-[24px] md:text-[48px] font-semibold my-4 lg:my-0'>
								MAILING ADDRESS
							</h3>
							<h3 className='hidden lg:flex font-display text-[64px] font-semibold my-4 lg:my-0'>
								MAILING&nbsp;
								<br />
								ADDRESS
							</h3>
							<div className='flex my-4 gap-x-4'>
								<div className='flex md:hidden items-start mt-4'>
									<MdEmail size={30} />
								</div>
								<div className='hidden md:flex items-start mt-4'>
									<MdEmail size={44} />
								</div>
								<h4 className='flex font-display text-[24px] md:text-[48px] font-light my-4'>
									Celebration Church&nbsp;
									<br />
									P. O. Box 551341&nbsp;
									<br />
									Jacksonville, FL&nbsp;
									<br />
									32255
								</h4>
							</div>
						</div>
					</div>
					<div className='flex flex-col my-4 lg:max-w-[496px!important]'>
						<div className='flex flex-col max-w-[298px] md:max-w-[1024px!important] md:w-[496px] mx-auto'>
							<div className='flex flex-col max-w-[298px] md:max-w-[1024px!important] md:min-w-[496px] mx-auto'>
								<h3 className='flex lg:hidden font-display text-[24px] md:text-[48px] lg:text-[64px] font-semibold'>
									CENTRAL OFFICES
								</h3>
								<h3 className='hidden lg:flex font-display text-[24px] md:text-[48px] lg:text-[64px] font-semibold'>
									CENTRAL&nbsp;
									<br />
									OFFICES
								</h3>
							</div>
							<div className='flex flex-col mx-auto md:px-4 max-w-[298px] md:w-[496px] md:max-w-[575px!important]'>
								<div className='flex my-4 gap-x-4'>
									<div className='flex md:hidden items-start mt-4'>
										<IoLocationSharp size={30} />
									</div>
									<div className='hidden md:flex items-start mt-4'>
										<IoLocationSharp size={52} />
									</div>
									<h4 className='flex font-display text-[24px] md:text-[48px] md:w-[496px] md:max-w-[575px] font-light my-4 cursor-pointer'>
										<a
											href='https://www.google.com/search?q=celebration+church&oq=celebration+church&aqs=chrome..69i57j69i61j69i60.3396j0j1&sourceid=chrome&ie=UTF-8#'
											target='_blank'
											rel='noopener noreferrer'
										>
											9555-1 R G&nbsp;
											<br />
											Skinner Pkwy&nbsp;
											<br />
											Jacksonville, FL&nbsp;
											<br />
											32256
										</a>
									</h4>
								</div>
							</div>
							<div className='flex gap-x-4 items-center'>
								<div className='flex md:hidden items-start mt-4'>
									<FaPhoneAlt size={22} />
								</div>
								<div className='hidden md:flex items-start p-4'>
									<FaPhoneAlt size={36} />
								</div>
								<div className='flex font-display text-[24px] md:text-[48px] font-light my-4'>
									<h4 className='cursor-pointer'>
										<a href='tel:+9047371121'>(904) 737-1121</a>
									</h4>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col my-12 lg:my-4 lg:max-w-[496px!important]'>
						<div className='flex flex-col max-w-[298px] md:max-w-[1024px!important] md:w-[496px]  mx-auto'>
							<h3 className='flex lg:hidden font-display text-[24px] md:text-[48px] lg:text-[64px] font-semibold cursor-pointer'>
								<a
									href='https://www.google.com/search?q=celebration+church&oq=celebration+church&aqs=chrome..69i57j69i61j69i60.3396j0j1&sourceid=chrome&ie=UTF-8#loh=true'
									target='_blank'
									rel='noopener noreferrer'
								>
									HOURS OF OPERATION
								</a>
							</h3>
							<h3 className='hidden lg:flex font-display text-[24px] md:text-[48px] lg:text-[64px] font-semibold cursor-pointer'>
								<a
									href='https://www.google.com/search?q=celebration+church&oq=celebration+church&aqs=chrome..69i57j69i61j69i60.3396j0j1&sourceid=chrome&ie=UTF-8#loh=true'
									target='_blank'
									rel='noopener noreferrer'
								>
									HOURS OF&nbsp;
									<br />
									OPERATION
								</a>
							</h3>
						</div>
						<div className='flex my-4 lg:mx-4 gap-x-4 md:gap-x-18 max-w-[298px] md:max-w-[1024px!important] md:w-[496px] mx-auto'>
							<div className='flex md:hidden items-start mt-4'>
								<BsClockFill size={30} />
							</div>
							<div className='hidden md:flex items-start mt-4'>
								<BsClockFill size={44} />
							</div>
							<h4 className='flex flex-col font-display text-[24px] md:text-[48px] font-light my-4'>
								<ul className='flex flex-col gap-y-4'>
									<div>
										<li className='font-semibold'>Monday–Thursday</li>
										<li>9AM to 5PM</li>
									</div>
									<div>
										<li className='font-semibold'>Friday</li>
										Closed
									</div>
									<div>
										<li className='font-semibold'>Sunday</li>
										9AM to 1PM
									</div>
								</ul>
							</h4>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden md:flex md:flex-col items-center w-[100vw] gap-y-16 p-16'>
				<div className='flex max-w-[1440px] w-full h-[900px] overflow-hidden'>
					<div className='flex w-full relative '>
						<div className='relative top-[200px] lg:top-0 left-0 mix-blend-overlay z-30'>
							<h1 className='font-display font-bold text-[98px] lg:text-[192px] text-[#f8f8f8]'>
								WE’RE&nbsp;SO <br />
								<span className='font-kepler italic font-thin text-[1.1em]'>
									GLAD <br />
								</span>
								YOU’RE&nbsp;HERE
							</h1>
						</div>
						<div className='absolute top-[200px] lg:top-0 left-0  z-10 '>
							<h1 className='font-display font-bold text-[98px] lg:text-[192px] text-[#070707]'>
								WE’RE&nbsp;SO <br />
								<span className='font-kepler italic font-thin text-[1.1em]'>
									GLAD <br />
								</span>
								YOU’RE&nbsp;HERE
							</h1>
						</div>
						<div className='absolute bottom-[50px] left-[150px]'>
							<div>
								<Link href='#select'>
									<div className='flex flex-col gap-4 items-center'>
										<div>
											<a className='font-display text-[26px]'>COME VISIT US</a>
										</div>
										<div className='flex rotate-90 w-8 '>
											<Image src={arrow} alt='' />
										</div>
									</div>
								</Link>
							</div>
						</div>
						<div className='absolute top-0 right-0 z-20'>
							<div className='container'>
								<iframe
									src='https://player.vimeo.com/video/688965998?h=9fc6981331&amp;&controls=0&badge=0&autoplay=1&muted=1&loop=1&autopause=0&amp;player_id=0&amp;app_id=58479'
									frameBorder='0'
									allowFullScreen
									height='720'
									width='880'
								></iframe>
							</div>
						</div>
					</div>
				</div>
				<div
					className='
				flex flex-col gap-4
				max-w-[298px!important] md:max-w-[1024px!important]
				mx-auto
				my-12 lg:my-24
				'
				>
					<div className='flex flex-col justify-start max-w-[298px!important] md:max-w-[1024px!important] md:mx-auto'>
						<h2 className='font-display text-[24px] md:text-[48px] lg:text-[82px] font-bold my-4 p-4'>
							SELECT A LOCATION
						</h2>
						{/* </div> */}
						<div
							className='flex flex-col md:flex-row
						justify-start
						max-w-[298px!important] md:max-w-[1024px!important]
						lg:w-[828.39px] lg:p-4
						mx-auto'
						>
							<ul
								className='flex flex-col items-start
				
							font-display text-[20px] md:text-[40px] lg:text-[68px] gap-y-4'
							>
								<ul
									className='flex text-[28px] md:text-[56px] items-center'
									onClick={handleUsa}
								>
									<div
										className={
											usa
												? 'flex underline underline-offset-2 font-semibold bg-[#070707] text-[#f8f8f8] p-2'
												: 'flex underline-offset-2 p-2'
										}
									>
										USA
									</div>
									&nbsp;
									<li className={usa ? 'list-none hidden' : 'list-none block'}>
										&#43;
									</li>
									<li className={usa ? 'list-none block' : 'list-none hidden'}>
										&#45;
									</li>
								</ul>
								<div
									className={
										usa
											? ' w-full delay-200 translate-y-0 opacity-100 duration-300 flex flex-col gap-x-20'
											: ' w-full delay-0 translate-y-[-100vh] opacity-25 hidden'
									}
								>
									<ul className='flex flex-col gap-y-4 ml-12'>
										<li className='flex items-center'>
											<a
												className='flex relative hover:bg-black hover:text-white ease-in items-center cursor-pointer'
												href='https://celebrationjax.org/'
												target='_blank'
												rel='noopener noreferrer'
											>
												JACKSONVILLE
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href='https://celebrationsfl.org/'
												target='_blank'
												rel='noopener noreferrer'
											>
												SOUTH FLORIDA
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href='http://celebrationorl.org/'
												target='_blank'
												rel='noopener noreferrer'
											>
												ORLANDO
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href='http://metrochurch.com/'
												target='_blank'
												rel='noopener noreferrer'
											>
												WASHINGTON, D.C.
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href='http://www.christianfaithcenternc.com/'
												target='_blank'
												rel='noopener noreferrer'
											>
												CFC CREEDMOOR
											</a>
										</li>
									</ul>
								</div>
								<ul
									className='flex items-center text-[28px] md:text-[56px]'
									onClick={handleInternational}
								>
									<div
										className={
											international
												? 'flex underline underline-offset-2 font-semibold bg-[#070707] text-[#f8f8f8] p-2'
												: 'flex underline-offset-2 p-2'
										}
									>
										INTERNATIONAL
									</div>{' '}
									&nbsp;
									<li
										className={
											international ? 'list-none hidden' : 'list-none block'
										}
									>
										&#43;
									</li>
									<li
										className={
											international ? 'list-none block' : 'list-none hidden'
										}
									>
										&#45;
									</li>
								</ul>
								<div
									className={
										international
											? ' w-full delay-200 translate-y-0 opacity-100 duration-300 flex flex-col gap-x-20'
											: ' w-full delay-0 translate-y-[-100vh] opacity-25 hidden'
									}
								>
									<ul className='flex flex-col gap-y-4 ml-12'>
										{/* <li className='flex items-center'>
											<a className='flex relative hover:bg-black hover:text-white ease-in items-center cursor-pointer'>
												THE LIGHTHOUSE ANTWERP, BELGIUM
											</a>
										</li> */}
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in'
												href=''
												target='_blank'
												rel='noopener noreferrer'
											>
												NETHERLANDS
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href=''
												target='_blank'
												rel='noopener noreferrer'
											>
												FRANCE
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href=''
												target='_blank'
												rel='noopener noreferrer'
											>
												SOUTH AFRICA
											</a>
										</li>
										<li>
											<a
												className='hover:bg-black hover:text-white ease-in cursor-pointer'
												href=''
												target='_blank'
												rel='noopener noreferrer'
											>
												ZIMBABWE
											</a>
										</li>
									</ul>
								</div>
							</ul>
						</div>
					</div>
				</div>

				<div className='flex flex-col p-8'>
					<div className='flex mx-auto w-full justify-center mb-[150px]'>
						<h1 className='font-display font-bold text-[#070707 text-[54px] md:text-[108px] lg:text-[192px]'>
							REACH OUT&nbsp;
							<br />
							<span className='flex font-kepler italic font-semibold text-[1.1em] justify-around'>
								TO US
							</span>
						</h1>
					</div>
					<div className='lg:flex lg:px-12 lg:m-4 lg:items-start gap-x-12 lg:mx-auto lg: mt-[100px] lg:justify-center'>
						<div className='flex flex-col mx-auto lg:mx-0 my-12 lg:my-4 max-w-[298px] md:max-w-[1024px!important] lg:max-w-[496px!important]'>
							<div className='flex flex-col max-w-[298px] md:max-w-[1024px!important] md:w-[496px] mx-auto'>
								<h3 className='flex lg:hidden font-display text-[24px] md:text-[48px] font-semibold my-4 lg:my-0'>
									MAILING ADDRESS
								</h3>
								<h3 className='hidden lg:flex font-display text-[64px] font-semibold my-4 lg:my-0'>
									MAILING&nbsp;
									<br />
									ADDRESS
								</h3>
								<div className='flex my-4 gap-x-4'>
									<div className='flex md:hidden items-start mt-4'>
										<MdEmail size={30} />
									</div>
									<div className='hidden md:flex items-start mt-4'>
										<MdEmail size={44} />
									</div>
									<h4 className='flex font-display text-[24px] md:text-[48px] font-light my-4'>
										Celebration Church&nbsp;
										<br />
										P. O. Box 551341&nbsp;
										<br />
										Jacksonville, FL&nbsp;
										<br />
										32255
									</h4>
								</div>
							</div>
						</div>
						<div className='flex flex-col my-4 lg:max-w-[496px!important]'>
							<div className='flex flex-col max-w-[298px] md:max-w-[1024px!important] md:w-[496px] mx-auto'>
								<div className='flex flex-col max-w-[298px] md:max-w-[1024px!important] md:min-w-[496px] mx-auto'>
									<h3 className='flex lg:hidden font-display text-[24px] md:text-[48px] lg:text-[64px] font-semibold'>
										CENTRAL OFFICES
									</h3>
									<h3 className='hidden lg:flex font-display text-[24px] md:text-[48px] lg:text-[64px] font-semibold'>
										CENTRAL&nbsp;
										<br />
										OFFICES
									</h3>
								</div>
								<div className='flex flex-col mx-auto md:px-4 max-w-[298px] md:w-[496px] md:max-w-[575px!important]'>
									<div className='flex my-4 gap-x-4'>
										<div className='flex md:hidden items-start mt-4'>
											<IoLocationSharp size={30} />
										</div>
										<div className='hidden md:flex items-start mt-4'>
											<IoLocationSharp size={52} />
										</div>
										<h4 className='flex font-display text-[24px] md:text-[48px] md:w-[496px] md:max-w-[575px] font-light my-4 cursor-pointer'>
											<a
												href='https://www.google.com/search?q=celebration+church&oq=celebration+church&aqs=chrome..69i57j69i61j69i60.3396j0j1&sourceid=chrome&ie=UTF-8#'
												target='_blank'
												rel='noopener noreferrer'
											>
												9555-1 R G&nbsp;
												<br />
												Skinner Pkwy&nbsp;
												<br />
												Jacksonville, FL&nbsp;
												<br />
												32256
											</a>
										</h4>
									</div>
								</div>
								<div className='flex gap-x-4 items-center'>
									<div className='flex flex-col gap-y-8 font-display text-[24px] md:text-[48px] font-light my-4'>
										<div className='flex items-center'>
											<div className='flex md:hidden items-start mt-4'>
												<FaPhoneAlt size={22} />
											</div>
											<div className='hidden md:flex items-start p-4'>
												<FaPhoneAlt size={36} />
											</div>
											<h4 className='cursor-pointer'>
												<a href='tel:+9047371121'>(904) 737-1121</a>
											</h4>
										</div>
										<div className='flex items-center'>
											<div className='flex md:hidden items-start mt-4'>
												{/* <FaPhoneAlt size={22} /> */}
												<FontAwesomeIcon size={22} icon={faAt} />
											</div>
											<div className='hidden md:flex items-start p-4'>
												{/* <FaPhoneAlt size={36} /> */}
												<FontAwesomeIcon size={36} icon={faAt} />
											</div>
											<h4 className='cursor-pointer'>
												<a href='mailto:info@celebration.org'>
													info@celebration.org
												</a>
											</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='flex flex-col my-12 lg:my-4 lg:max-w-[496px!important]'>
							<div className='flex flex-col max-w-[298px] md:max-w-[1024px!important] md:w-[496px]  mx-auto'>
								<h3 className='flex lg:hidden font-display text-[24px] md:text-[48px] lg:text-[64px] font-semibold cursor-pointer'>
									<a
										href='https://www.google.com/search?q=celebration+church&oq=celebration+church&aqs=chrome..69i57j69i61j69i60.3396j0j1&sourceid=chrome&ie=UTF-8#loh=true'
										target='_blank'
										rel='noopener noreferrer'
									>
										HOURS OF OPERATION
									</a>
								</h3>
								<h3 className='hidden lg:flex font-display text-[24px] md:text-[48px] lg:text-[64px] font-semibold cursor-pointer'>
									<a
										href='https://www.google.com/search?q=celebration+church&oq=celebration+church&aqs=chrome..69i57j69i61j69i60.3396j0j1&sourceid=chrome&ie=UTF-8#loh=true'
										target='_blank'
										rel='noopener noreferrer'
									>
										HOURS OF&nbsp;
										<br />
										OPERATION
									</a>
								</h3>
							</div>
							<div className='flex my-4 lg:mx-4 gap-x-4 md:gap-x-18 max-w-[298px] md:max-w-[1024px!important] md:w-[496px] mx-auto'>
								<div className='flex md:hidden items-start mt-4'>
									<BsClockFill size={30} />
								</div>
								<div className='hidden md:flex items-start mt-4'>
									<BsClockFill size={44} />
								</div>
								<h4 className='flex flex-col font-display text-[24px] md:text-[48px] font-light my-4'>
									<ul className='flex flex-col gap-y-4'>
										<div>
											<li className='font-semibold'>Monday–Thursday</li>
											<li>9AM to 5PM</li>
										</div>
										<div>
											<li className='font-semibold'>Friday</li>
											Closed
										</div>
										<div>
											<li className='font-semibold'>Sunday</li>
											9AM to 1PM
										</div>
									</ul>
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default VisitTW;
