import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import stage from '/public/care-images/care_stage.png';
import telecare from '/public/care-images/care_telecare.png';
import arrow from '/public/arrow@1x.png';
import longArrow from '/public/ministries-images/arrow-long.svg';

import CareDesktop from '/pages/care-desktop.jsx';

function care() {
	return (
		<>
			<div className='md:hidden flex justify-center w-[100vw] bg-green-200'>
				<div className='flex flex-col items-center w-full gap-y-8 bg-red-200'>
					<div className='relative w-full bg-blue-200'>
						<div className='absolute top-[20px] left-[20px] mix-blend-overlay z-30 '>
							<h1 className='font-display font-bold text-[#f8f8f8]   text-[44px]'>
								SUPPORTING
								<br />
								YOU&nbsp;ON&nbsp;YOUR
								<br />
								PATH&nbsp;TO
								<br />
								<span className='font-kepler italic text-[1.1em]'>
									WHOLENESS
								</span>
							</h1>
						</div>
						<div className='absolute top-[20px] left-[20px] z-0'>
							<h1 className='font-display font-bold text-[#070707] text-[44px]'>
								SUPPORTING
								<br />
								YOU&nbsp;ON&nbsp;YOUR
								<br />
								PATH&nbsp;TO
								<br />
								<span className='font-kepler italic text-[1.1em]'>
									WHOLENESS
								</span>
							</h1>
						</div>
						<div className='flex justify-end items-end p-4 mt-16 z-20 bg-purple-300'>
							<div className='flex w-[187.5px]'>
								<Image src={stage} alt='' />
							</div>
						</div>
					</div>
					<div className='flex p-4'>
						<p className='font-display text-[18px] text-[#7c7c7c]'>
							Our Care Ministry supports and guides individuals, couples, and
							families with life-giving care as they navigate through change in
							every season of life. Our experienced pastors and highly-trained
							Care Partners are available to listen, help you identify potential
							solutions, and access practical resources to move you towards
							wholeness.
						</p>
					</div>
					<div className='flex flex-col w-full p-4 items-center'>
						<div className='flex w-full justify-start gap-x-4'>
							<div className='flex items-center'>
								<a
									className='font-display font-semibold text-[20px]'
									href='https://podio.com/webforms/25046911/1842022'
									target='_blank'
									rel='noopener noreferrer'
								>
									CONTACT&nbsp;CARE
								</a>
							</div>
							<div className='w-16 '>
								<Image src={arrow} alt='' />
							</div>
						</div>
						<div className='flex w-full justify-start gap-x-4'>
							<div className='flex justify-center items-center'>
								<a
									className='font-display font-semibold text-[20px]'
									href='https://podio.com/webforms/25046911/1842022'
									target='_blank'
									rel='noopener noreferrer'
								>
									CARE&nbsp;GUIDE
								</a>
							</div>
							<div className='w-16 '>
								<Image src={arrow} alt='' />
							</div>
						</div>
					</div>
					<div className='flex flex-col w-full p-4 items-center'>
						<div className=''>
							<Image src={telecare} alt='' />
						</div>
						<div className='flex flex-col gap-y-4 mt-4'>
							<h3 className='font-display text-[20px] font-bold'>TELECARE</h3>
							<p className='font-display text-[18px] text-[#7c7c7c]'>
								We partner with Honey Lake Clinic to provide individual and
								group therapy with licensed Christian therapists for those that
								are struggling to reclaim their lives and achieve their God
								given potential. We envision Honey Lake Clinic as a refuge for
								those in need of Freedom and mental health care. For those that
								are seeking to walk in wholeness for themselves and their
								family, register below.
							</p>
							<div className='flex items-center justify-start gap-x-4'>
								<div>
									<a
										className='font-display font-semibold text-[20px]'
										href='https://podio.com/webforms/25046911/1842022'
										target='_blank'
										rel='noopener noreferrer'
									>
										INDIVIDUAL THERAPY
									</a>
								</div>
								<div className='w-16'>
									<Image src={arrow} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden md:block'>
				<CareDesktop />
			</div>
		</>
	);
}

export default care;
