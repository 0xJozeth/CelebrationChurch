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

function PartnersCarouselMobile() {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		<>
			<div
				className='embla overflow-hidden w-full mx-auto justify-center'
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
								objectFit='contain'
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
								objectFit='contain'
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
								objectFit='contain'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full max-w-none'
								src={OneHope}
								alt=''
								width={140}
								height={52}
								objectFit='contain'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={p42}
								alt=''
								width={122}
								height={50}
								objectFit='contain'
							/>
						</div>
					</div>
					<div className='embla__slide relative min-w-fit'>
						<div className='embla__slide__inner relative overflow-hidden mx-4'>
							<Image
								className='absolute top-1/2 left-1/2 w-auto min-h-full min-w-fit max-w-none'
								src={reaching}
								alt=''
								width={112}
								height={56}
								objectFit='contain'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PartnersCarouselMobile;
