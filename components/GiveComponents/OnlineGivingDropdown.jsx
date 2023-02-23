import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import arrow from '/public/arrow@1x-white.svg';
import { motion } from 'framer-motion';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OnlineGivingDropdown = () => {
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

	return (
		<div className='flex flex-col items-center w-full overflow-hidden '>
			<div className='flex justify-center items-center w-full'>
				<h2 className='font-display font-bold text-center md:text-[126px] lg:text-[192px]'>
					ONLINE{' '}
					<span className='font-kepler font-thin italic  text-[1.1em]'>
						GIVING
					</span>
				</h2>
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
							<motion.ul
								whileHover={{ scale: 1.1 }}
								className='flex text-[28px] md:text-[56px] items-center'
								onClick={handleUsa}
							>
								<div
									className={
										usa
											? 'flex underline underline-offset-2 font-semibold bg-[#070707] text-[#f8f8f8] p-2 cursor-pointer'
											: 'flex underline-offset-2 p-2 cursor-pointer'
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
							</motion.ul>
							<div
								whileHover={{ scale: 1.1 }}
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
											href='https://pushpay.com/g/celebrationarena'
											target='_blank'
											rel='noopener noreferrer'
										>
											JACKSONVILLE
										</a>
									</li>
									<li>
										<a
											className='hover:bg-black hover:text-white ease-in cursor-pointer'
											href='https://pushpay.com/g/celebrationorangepark'
											target='_blank'
											rel='noopener noreferrer'
										>
											ORANGE PARK
										</a>
									</li>
									<li>
										<a
											className='hover:bg-black hover:text-white ease-in cursor-pointer'
											href='https://pushpay.com/g/celebrationftl'
											target='_blank'
											rel='noopener noreferrer'
										>
											SOUTH FLORIDA
										</a>
									</li>
									<li>
										<a
											className='hover:bg-black hover:text-white ease-in cursor-pointer'
											href='https://pushpay.com/g/celebrationdt?src=hpp'
											target='_blank'
											rel='noopener noreferrer'
										>
											ORLANDO
										</a>
									</li>
									<li>
										<a
											className='hover:bg-black hover:text-white ease-in cursor-pointer'
											href='https://pushpay.com/g/celebrationchurchdc'
											target='_blank'
											rel='noopener noreferrer'
										>
											WASHINGTON, D.C.
										</a>
									</li>
									<li>
										<a
											className='hover:bg-black hover:text-white ease-in cursor-pointer'
											href='http://www.christianfaithcenternc.com/give'
											target='_blank'
											rel='noopener noreferrer'
										>
											CFC CREEDMOOR
										</a>
									</li>
								</ul>
							</div>
							<motion.div
								whileHover={{ scale: 1.1 }}
								className='flex items-center text-[28px] md:text-[56px]'
							>
								<a
									href='https://pushpay.com/g/ccglobal?src=hpp'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center'
								>
									<div className='flex text-[#070707] p-2 cursor-pointer'>
										INTERNATIONAL
									</div>{' '}
									&nbsp;
									{/* <li className='text-[24px]'>
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									</li> */}
								</a>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.1 }}
								className='flex items-center text-[28px] md:text-[56px]'
							>
								<a
									href='https://pushpay.com/g/cconline?r=monthly'
									target='_blank'
									rel='noopener noreferrer'
									className='flex items-center'
								>
									<div className='flex text-[#070707] p-2 cursor-pointer'>
										CHURCH ONLINE
									</div>{' '}
									&nbsp;
									{/* <li className='text-[24px]'>
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									</li> */}
								</a>
							</motion.div>
							<ul
								className='flex text-[28px] md:text-[56px]'
								onClick={handleGlobal}
							>
								<motion.div
									whileHover={{ scale: 1.1 }}
									className='flex items-center underline-offset-2 p-2 cursor-pointer'
								>
									<a
										href='https://timtimberlake.tv/partner/'
										target='_blank'
										rel='noreferrer'
									>
										TV&nbsp;MINISTRY
									</a>
									&nbsp;
									<li className='text-[24px]'>
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									</li>
								</motion.div>{' '}
							</ul>
						</ul>
					</div>
				</div>
			</div>
			<motion.div
				whileHover={{ scale: 1.1 }}
				className='flex justify-start items-center '
			>
				<Link href='/'>
					<div className='flex items-center py-2 gap-x-4'>
						<div className='flex items-center'>
							<p className='font-display font-normal text-[24px]'>
								VIEW&nbsp;MY&nbsp;GIVING&nbsp;STATEMENT
							</p>
						</div>
						<div className='invert w-[88px]'>
							<Image src={arrow} alt='' />
						</div>
					</div>
				</Link>
			</motion.div>
		</div>
	);
};

export default OnlineGivingDropdown;
