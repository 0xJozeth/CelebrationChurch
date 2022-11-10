import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//IMPORT PARTNER IMAGES
import Arc from '/public/partner-ARC.png';
import City from '/public/partner-city-for-the-nations.png';
import Convoy from '/public/partner-convoy-of-hope.png';
import OneHope from '/public/partner-one-hope.png';

//IMPORT SWIPER CAROUSEL
// Import Swiper JS core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Navigation,
	Pagination,
	Autoplay,
	EffectFade,
	Scrollbar,
} from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// const swiper = new Swiper('.swiper', {
// 	// configure Swiper to use modules
// 	modules: [Navigation, Pagination],
// });

function PartnersCarousel() {
	return (
		<>
			<div className='flex max-w-[390px] mx-auto bg-red-700 min-h-[200px] justify-center items-center'>
				<Swiper
					modules={[Navigation, Pagination, EffectFade, Autoplay]}
					navigation
					effect={'fade'}
					speed={800}
					loop
					slidesPerView={3}
					autoplay={true} //{{ delay: 1000 }}
					pagination={{ clickable: true }}
					spaceBetween={30}
					className='flex w-full'
				>
					<SwiperSlide className='w-full h-full'>
						<Image
							className=''
							src={Arc}
							alt=''
							width={136}
							height={56}
							objectFit='cover'
						/>
					</SwiperSlide>
					<SwiperSlide className='w-full h-full'>
						<Image
							className=''
							src={City}
							alt=''
							width={73}
							height={71}
							objectFit='cover'
						/>
					</SwiperSlide>
					<SwiperSlide className='w-full h-full'>
						<Image
							className=''
							src={Convoy}
							alt=''
							width={136}
							height={56}
							objectFit='cover'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}

export default PartnersCarousel;
