import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import embrace from '/public/embrace.png';
import telecare from '/public/care-images/care_telecare.png';
import arrow from '/public/arrow@1x.png';
import longArrow from '/public/ministries-images/arrow-long.svg';
import { motion } from 'framer-motion';

function CareDesktop() {
	return (
		<>
			<div className='flex flex-col items-center gap-y-16 '>
				<div className='flex flex-col h-[1300px] max-w-[1440px] w-full'>
					<div className='flex w-full mx-auto'>
						<div className='absolute top-[100px] w-full z-20'>
							<Image src={embrace} alt='' width={750} height={1118} />
						</div>
						<div className='flex relative flex-col items-center w-full'>
							<div className='absolute left-0 mix-blend-overlay z-30'>
								<h1 className='font-display font-bold text-[192px] text-[#f8f8f8]'>
									YOUR PATH TO <br />
									<span className='flex justify-end font-kepler italic text-[1.1em]'>
										WHOLENESS
									</span>
								</h1>
							</div>
							<div className='flex justify-start w-full z-10'>
								<h1 className='font-display font-bold text-[192px]'>
									YOUR PATH TO <br />
									<span className='flex justify-end font-kepler italic text-[1.1em]'>
										WHOLENESS
									</span>
								</h1>
							</div>
							<div className='flex flex-col relative left-[375px] w-[550px] mt-8 my-[80px] z-30'>
								<p className='font-display text-[24px] leading-relaxed text-[#7c7c7c]'>
									Our Care Ministry supports and guides individuals, couples,
									and families with life-giving care as they navigate through
									change in every season of life. Our experienced pastors and
									highly-trained Care Partners are available to listen, help you
									identify potential solutions, and access practical resources
									to move you towards wholeness.
								</p>
								<div className='flex flex-col my-[80px] gap-y-[24px] z-30'>
									<motion.div
										whileHover={{ scale: 1.1 }}
										className='flex justify-start items-center gap-x-8'
									>
										<button>
											<a
												href='https://celebration.wufoo.com/forms/r1y73bnj1r5g2sn/'
												target='_blank'
												rel='noopener noreferrer'
												className='font-display font-normal text-[36px]'
											>
												CONTACT CARE
											</a>
										</button>
										<div>
											<Image src={arrow} alt='arrow' />
										</div>
									</motion.div>
									<motion.div
										whileHover={{ scale: 1.1 }}
										className='flex justify-start items-center gap-x-8'
									>
										<button>
											<a
												href='https://s3.amazonaws.com/downloads.celebration.org/2022/webdownloads/care_guide_dec.2021.pdf'
												target='_blank'
												rel='noopener noreferrer'
												className='font-display font-normal text-[36px]'
											>
												CARE GUIDE
											</a>
										</button>
										<div>
											<Image src={arrow} alt='arrow' />
										</div>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='flex w-full gap-8'>
					<div className='flex flex-col gap-y-8 px-16 max-w-[905px]'>
						<div className='font-display font-bold text-[48px]'>TELECARE</div>
						<div className='flex justify-center '>
							<p className='font-display text-[24px] leading-relaxed text-[#7c7c7c]'>
								We partner with Honey Lake Clinic to provide individual and
								group therapy with licensed Christian therapists for those that
								are struggling to reclaim their lives and achieve their God
								given potential. We envision Honey Lake Clinic as a refuge for
								those in need of Freedom and mental health care. For those that
								are seeking to walk in wholeness for themselves and their
								family, register below.
							</p>
						</div>

						<motion.div
							whileHover={{ scale: 1.1 }}
							className='flex justify-start items-center w-max gap-x-4'
						>
							<div>
								<a
									href='https://podio.com/webforms/25046911/1842022'
									className='cursor-pointer font-display font-normal text-[36px] uppercase'
								>
									INDIVIDUAL THERAPY{' '}
								</a>
							</div>
							<div className='w-16'>
								<Image src={arrow} alt='' />
							</div>
						</motion.div>
					</div>
					<div className='flex'>
						<Image src={telecare} alt='' objectFit='cover' />
					</div>
				</div>

				<div className='flex justify-center items-center w-full mx-auto my-16 mb-32'>
					<div className='flex min-h-[152px] max-w-[256px] md:max-w-full w-full justify-center items-center mx-auto my-4 overflow-hidden '>
						<Link href={'follow-jesus'}>
							<button className='flex h-[152px] w-full justify-around items-center border-2 border-solid border-[#070707] p-4 gap-x-4 mx-[80px]'>
								<div className='flex min-w-[126px]'>
									<a className='font-display text-[36px] md:text-[44px] lg:text-[64px] xl:text-[88px] '>
										FOLLOW JESUS
									</a>
								</div>
								<div className='flex min-h-[36px] max-w-[150px] md:max-w-[150px] lg:max-w-[250px] xl:max-w-[350px]'>
									<Image src={longArrow} alt='' />
								</div>
							</button>
						</Link>
					</div>
				</div>
			</div>
			{/* <div className='hidden'>
				<Grid>
					<div className='rowContainer'>
						<div className='imageContainer'>
							<Image src={stage} alt='' />
						</div>
						<div className='text'>
							<h1 className='maskEffect'>
								SUPPORTING <br />
								YOU ON YOUR <br />
								PATH TO <br />
								<span>WHOLENESS</span>
							</h1>
							<h1 className='noEffect'>
								SUPPORTING <br />
								YOU ON YOUR <br />
								PATH TO <br />
								<span>WHOLENESS</span>
							</h1>
							<div className='paragraph'>
								<p>
									Our Care Ministry supports and guides individuals, couples,
									and families with life-giving care as they navigate through
									change in every season of life. Our experienced pastors and
									highly-trained Care Partners are available to listen, help you
									identify potential solutions, and access practical resources
									to move you towards wholeness.
								</p>
								<div className='linkContainer'>
									<a
										href='https://celebration.wufoo.com/forms/r1y73bnj1r5g2sn/'
										target='_blank'
										rel='noopener noreferrer'
									>
										CONTACT CARE
									</a>
									<Image src={arrow} alt='arrow' />
								</div>
								<div className='linkContainer'>
									<a
										href='https://s3.amazonaws.com/downloads.celebration.org/2022/webdownloads/care_guide_dec.2021.pdf'
										target='_blank'
										rel='noopener noreferrer'
									>
										CARE GUIDE
									</a>
									<Image src={arrow} alt='arrow' />
								</div>
							</div>
						</div>
					</div>
					<div className='rowContainer'>
						<div className='imageWrapper'>
							<Image src={telecare} alt='' />
						</div>
						<div className='contentGrid'>
							<h3>TELECARE</h3>
							<p>
								We partner with Honey Lake Clinic to provide individual and
								group therapy with licensed Christian therapists for those that
								are struggling to reclaim their lives and achieve their God
								given potential. We envision Honey Lake Clinic as a refuge for
								those in need of Freedom and mental health care. For those that
								are seeking to walk in wholeness for themselves and their
								family, register below.
							</p>
							<div className='linkContainer'>
								<a
									href='https://podio.com/webforms/25046911/1842022'
									target='_blank'
									rel='noopener noreferrer'
								>
									INDIVIDUAL THERAPY
								</a>
								<Image src={arrow} alt='' />
							</div>
						</div>
					</div>
					<div className='rowContainer'>
						<div className='followJesusButton'>
							<Link href='visit'>
								<div className='linkContainer'>
									<a>FOLLOW JESUS</a>
									<Image src={longArrow} alt='' />
								</div>
							</Link>
						</div>
					</div>
				</Grid>
			</div> */}
		</>
	);
}

export default CareDesktop;
