import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/arrow@1x.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
import followprayer from '/public/follow-prayer.png';
import followstage from '/public/follow-stage.png';

function HomeButtonSection() {
	const followData = [
		{
			imageLeft: followstage,
			imageRight: followprayer,
			width: 825,
			height: 634,
		},
	];

	return (
		<div className='flex bg-black h-[645px] w-full justify-center items-center'>
			{followData.map((follow, index) => (
				<div key={index} className='flex justify-between items-center'>
					<div className='flex group relative bg-red p-16 justify-center items-center'>
						<button className='absolute justify-center items-center z-20 '>
							<Link href='follow-jesus' passHref>
								<div className='relative group'>
									<div className='text-white text-[44px] py-2'>
										<FontAwesomeIcon icon={faCross} className='z-50' />
									</div>
									<div className='my-2 group-hover:my-8 transition-all'>
										<a className='font-display text-white text-[44px]'>
											I WANT TO
											<br />
											FOLLOW
											<br />
											JESUS
											<br />
										</a>
									</div>
									<div className='justify-center opacity-0 group-hover:opacity-100 transition-all w-full'>
										<Image src={arrow} alt='arrow' className='invert' />
									</div>
								</div>
							</Link>
						</button>
						<Link href='/follow-jesus' passHref>
							<button className='flex justify-center items-center border-2 border-white opacity-50 hover:opacity-100 hover:-skew-y-[0.5deg] transition-all'>
								<Image
									src={follow.imageLeft}
									alt='prayer request button'
									width={follow.width}
									height={follow.height}
									className='saturate-0 opacity-20 group-hover:saturate-[85%] group-hover:opacity-75 group-hover:scale-[105%] group-hover:-skew-y-[0.5deg] transition-all border-2 border-white'
								/>
							</button>
						</Link>
					</div>
					<div className='flex relative group bg-red p-16 justify-center items-center'>
						<button className='absolute justify-center items-center z-50'>
							<Link href='prayer-request' passHref alt='follow jesus'>
								<div className='relative group'>
									<div className='text-white text-[44px] py-2'>
										<FontAwesomeIcon icon={faPrayingHands} className='z-50' />
									</div>
									<div className='my-2 group-hover:my-8 transition-all'>
										<a className='font-display  text-white text-[44px]'>
											SUBMIT A<br />
											PRAYER
											<br />
											REQUEST
											<br />
										</a>
									</div>
									<div className='justify-center opacity-0 group-hover:opacity-100 transition-all w-full'>
										<Image src={arrow} alt='arrow' className='invert' />
									</div>
								</div>
							</Link>
						</button>
						<button className='flex justify-center items-center border-2 border-white opacity-50 hover:opacity-100 hover:skew-y-[0.5deg] transition-all'>
							<a
								href='https://my.celebration.org/portal/get_form.aspx?ID=6bc5f420-26f8-41f1-8149-9344dd2676e6&template=campus-jax&remembertemplate=true'
								target='_blank'
								rel='noreferrer'
							>
								<Image
									src={follow.imageRight}
									alt='prayer request button'
									width={follow.width}
									height={follow.height}
									className='saturate-0 opacity-20 group-hover:saturate-[85%] group-hover:opacity-75 group-hover:scale-[105%] group-hover:skew-y-[0.5deg] transition-all'
								/>
							</a>
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default HomeButtonSection;
