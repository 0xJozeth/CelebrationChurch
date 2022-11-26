import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//IMPORT PARTNER IMAGES
import Arc from '/public/partner-ARC.png';
import City from '/public/partner-city-for-the-nations.png';
import Convoy from '/public/partner-convoy-of-hope.png';
import OneHope from '/public/partner-one-hope.png';
import p42 from '/public/P42logo-black.png';
import reaching from '/public/REACHING-A-GENERATION-LOGO_white-1160x274.png';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

// export const EmblaCarousel = () => {
// 	const [emblaRef] = useEmblaCarousel();

// 	return (
// 		<div className='embla' ref={emblaRef}>
// 			<div className='embla__container'>
// 				<div className='embla__slide'>Slide 1</div>
// 				<div className='embla__slide'>Slide 2</div>
// 				<div className='embla__slide'>Slide 3</div>
// 			</div>
// 		</div>
// 	);
// };

// grow-0 shrink-0 basis-full

const options = { delay: 500 };
const autoplay = Autoplay(options);

function PartnersCarousel() {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		<>
			<div
				className='embla flex md:hidden overflow-hidden w-full mx-auto justify-center bg-red-400 md:h-[250px]'
				ref={emblaRef}
			>
				<div className='embla__container flex items-center gap-x-[64px]'>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={Arc}
								alt=''
								width={136}
								height={56}
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={City}
								alt=''
								width={73}
								height={71}
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={Convoy}
								alt=''
								width={136}
								height={56}
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={OneHope}
								alt=''
								width={136}
								height={56}
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={p42}
								alt=''
								width={270}
								height={56}
								objectFit='contain'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={reaching}
								alt=''
								width={270}
								height={56}
								objectFit='contain'
							/>
						</div>
					</div>
				</div>
			</div>

			<div
				className='embla md:flex hidden overflow-hidden w-full mx-auto justify-center'
				ref={emblaRef}
			>
				<div className='embla__container flex items-center gap-x-[200px] mx-auto'>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden '>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={Arc}
								alt=''
								width={260}
								height={115}
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={City}
								alt=''
								width={214}
								height={207}
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={Convoy}
								alt=''
								width={396}
								height={163}
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={OneHope}
								alt=''
								width={340}
								height={92}
								objectFit='cover'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={p42}
								alt=''
								width={342}
								height={120}
								objectFit='contain'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden mx-[100px]'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={reaching}
								alt=''
								width={312}
								height={96}
								objectFit='contain'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PartnersCarousel;
