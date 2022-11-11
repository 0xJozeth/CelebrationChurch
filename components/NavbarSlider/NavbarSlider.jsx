import React, { useState, useEffect, useRef } from 'react';
import arrow from '/public/link-arrow.svg';
import Link from 'next/link';

import Typed from 'react-typed';

//IMPORT EMBLA CAROUSEL
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export function NavbarSlider() {
	const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	const [nav, setNav] = useState(false);
	const [logoMobile, setLogoMobile] = useState(false);

	const handleToggle = () => {
		setNav(!nav);
	};

	useEffect(() => {
		console.log('The setNav function is now ', nav);
	}, [nav]);

	return (
		<div
			className='fixed bg-[#070707] font-display opacity-[100%] top-0 left-0 right-0 bottom-0 w-full h-full min-h-[300px] z-50 overflow-hidden flex'
			ref={emblaRef}
		>
			<div className='flex flex-col font-bold text-[44px] mt-20 md:mt-24 p-[24px] gap-y-4relative min-w-fit '>
				<div className='relative overflow-hidden'>
					<ul className='flex flex-col gap-y-4' onClick={handleToggle}>
						<li className='about'>
							<Link href='/about' passHref={true}>
								<a className='text-[#f8f8f8]'>ABOUT</a>
							</Link>
						</li>
						<li className='visit'>
							<Link href='/visit' passHref={true}>
								<a className='text-[#f8f8f8]'>VISIT</a>
							</Link>
						</li>
						<li className='give'>
							<Link href='/give' passHref={true}>
								<a className='text-[#f8f8f8]'>GIVE</a>
							</Link>
						</li>
						<li className='watch'>
							<Link href='/watch' passHref>
								<a className='text-[#f8f8f8]'>WATCH</a>
							</Link>
						</li>
					</ul>
					<ul
						className='font-light flex flex-col gap-y-4'
						onClick={handleToggle}
					>
						<li className='ministries'>
							<Link href='/ministries' passHref>
								<a className='text-[#f8f8f8]'>MINISTRIES</a>
							</Link>
						</li>
						<li className='care'>
							<Link href='/care' passHref>
								<a className='text-[#f8f8f8]'>CARE</a>
							</Link>
						</li>
						<li className='follow-jesus'>
							<Link href='/follow-jesus' passHref>
								<a className='text-[#f8f8f8]'>FOLLOW JESUS</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default NavbarSlider;
