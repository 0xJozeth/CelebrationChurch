import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/arrow@1x-white.svg';
import legacy from '/public/give-legacy.png';
import { motion } from 'framer-motion';

const LegacyTeamSection = () => {
	return (
		<div className='w-full h-[700px] overflow-hidden '>
			<div className='relative w-full'>
				<div className='absolute top-[20px] left-[20px] mix-blend-overlay z-30 '>
					<h1 className='font-display font-bold text-[#f8f8f8] md:text-[126px] lg:text-[192px]'>
						LEGACY&nbsp;
						<span className='font-kepler italic text-[1.1em]'>TEAM</span>
					</h1>
				</div>
				<div className='absolute top-[20px] left-[20px] z-0'>
					<h1 className='font-display font-bold text-[#070707] md:text-[126px] lg:text-[192px]'>
						LEGACY&nbsp;
						<span className='font-kepler italic text-[1.1em]'>TEAM</span>
					</h1>
				</div>
			</div>

			<div className='relative flex justify-between mt-[150px] z-20 h-600px lg:h-[400px] '>
				<div className='flex flex-col items-start mt-8 p-8 gap-y-8 w-1/2'>
					<div className='mt-14'>
						<p className='flex justify-center font-display font-normal text-left text-[24px] leading-relaxed text-[#7c7c7c] '>
							Our Legacy Team gives influence, resources, and time as a local
							church ministry expression to advance the cause of Christ. Each
							member prayerfully commits to give over and above their tithe to
							impact eternity for generations to come—to leave a legacy. If you
							have any questions or would like to be a part of the Legacy Team,
							please email Pastor Drew King.
						</p>
					</div>
					<div className='flex justify-start items-center '>
						<a href='mailto:dking@celebration.org'>
							<motion.div
								whileHover={{ scale: 1.1 }}
								className='flex items-center py-2 gap-x-4'
							>
								<div className='flex items-center'>
									<p className='font-display font-normal text-[24px]'>
										CONTACT&nbsp;US
									</p>
								</div>
								<div className='invert w-[88px]'>
									<Image src={arrow} alt='' />
								</div>
							</motion.div>
						</a>
					</div>
				</div>
				<div className='flex justify-end w-1/2'>
					<div className='flex w-3/4 h-[209px] lg:h-auto'>
						<Image src={legacy} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default LegacyTeamSection;
