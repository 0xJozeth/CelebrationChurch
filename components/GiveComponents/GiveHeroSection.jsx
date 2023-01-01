import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/arrow@1x-white.svg';
import GiveHero from '/public/give-hero.png';

const GiveHeroSection = () => {
	return (
		<div className='w-full md:h-[500px] lg:h-[700px] overflow-hidden '>
			<div className='relative w-full'>
				<div className='absolute top-[20px] left-[20px] mix-blend-overlay z-30 '>
					<h1 className='font-display font-bold text-[#f8f8f8] md:text-[126px] lg:text-[192px]'>
						WE&nbsp;LOVE
						<br />
						<span className='font-kepler italic text-[1.1em]'>
							SO&nbsp;WE&nbsp;GIVE
						</span>
					</h1>
				</div>
				<div className='absolute top-[20px] left-[20px] z-0'>
					<h1 className='font-display font-bold text-[#070707] md:text-[126px] lg:text-[192px]'>
						WE&nbsp;LOVE
						<br />
						<span className='font-kepler italic text-[1.1em]'>
							SO&nbsp;WE&nbsp;GIVE
						</span>
					</h1>
				</div>
			</div>
			<div className='relative flex justify-end items-end mt-[100px] z-20 '>
				<div className='flex w-3/4'>
					<Image src={GiveHero} alt='' />
				</div>
				<div className='absolute flex bottom-8 right-8 z-100 border-2 border-solid border-[#f8f8f8] p-4 md:w-[275px] lg:w-[350px] gap-x-2 cursor-pointer'>
					<Link href='give'>
						<div className='flex justify-center items-center'>
							<div className='flex justify-center items-center p-2'>
								<a className='font-display md:text-[24px] lg:text-[44px] text-[#f8f8f8]'>
									GIVE&nbsp;NOW
								</a>
							</div>
							<div className='flex w-[80px]'>
								<Image src={arrow} alt='' />
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default GiveHeroSection;
