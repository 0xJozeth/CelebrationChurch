import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import arrow from '/public/arrow@1x-white.svg';
import arrowdown from '/public/arrow-down.svg';
import { motion } from 'framer-motion';
import GiveHero from '/public/give-hero.png';
import givt from '/public/Givt_Logo.png';

import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
	faArrowLeft,
	faPiggyBank,
	faMobile,
	faMoneyBillTrendUp,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Carousel from '../components/GiveComponents/Carousel';
import OnlineGivingDropdown from '../components/GiveComponents/OnlineGivingDropdown';
import GiveHeroSection from '../components/GiveComponents/GiveHeroSection';
import LegacyTeamSection from '../components/GiveComponents/LegacyTeamSection';

export default function GiveDesktop({ id }) {
	const [darken, setDarken] = useState(false);

	const [modalOpen, setModalOpen] = useState(false);
	const [modalIndex, setModalIndex] = useState(null);

	const handleModalOpen = (index) => {
		setModalOpen(!modalOpen);
		setModalIndex(index);
		setDarken(true);
		document.body.classList.add('modal-open');
	};

	const handleModalClose = () => {
		setModalOpen(false);
		setDarken(false);
		document.body.classList.remove('modal-open');
	};

	const modalData = [
		{
			icon: faMobile,
			text: 'APP',
			title: 'The Celebration App',
			paragraph:
				'This method is the easiest and most user friendly. To download the app text “Celebration” to (833) 399-7200 and follow the prompts OR you can search for “The Celebration App” in your iTunes or Google Play Store.',
			linkOneTitle: 'Download via the App Store',
			linkOne: 'https://apps.apple.com/us/app/the-celebration-app/id1210190693',
			linkTwoTitle: 'Download via the Google Playstore',
			linkTwo:
				'https://play.google.com/store/apps/details?id=com.echurchapps.celebrationchapp&hl=en_US&gl=US&pli=1',
		},
		{
			icon: faBitcoin,
			text: 'CRYPTO',
			title: 'Cryptocurrency',
			paragraph:
				'You can use this method if you would like to make a donation of cryptocurrency to Celebration Church. To do this, simply click the button below and provide your donation details.',
			linkOneTitle: 'Give via Cryptocurrency',
			linkOne: 'https://platform.engiven.com/give/97/widget/88',
			linkTwoTitle: null,
			linkTwo: null,
		},
		{
			icon: faPiggyBank,
			text: 'BANK',
			title: 'Personal Banking',
			paragraph:
				'Give using your bank’s bill payment feature to issue donations directly to Celebration Church. To do this, log into your personal bank account and follow its instructions for adding Celebration Church as a new payee. Enter your donation amount and be sure to specify in the memo if you would like to give to a specific Celebration Church location.',
			linkOneTitle: null,
			linkOne: null,
			linkTwoTitle: null,
			linkTwo: null,
		},
		{
			icon: faMoneyBillTrendUp,
			text: 'GIVT',
			title: 'GIVT',
			paragraph:
				'You can now give anonymously through Givt. Givt is a standard way of digital giving that you can access by simply clicking the button below.',
			linkOneTitle: 'Give via GIVT',
			linkOne:
				'https://api.givt.app/givt?code=NjFmN2VkMDE1NTUzMDgyMmMwMDAuYzAwMDAwMDAwMDAx',
			linkTwoTitle: null,
			linkTwo: null,
		},
	];

	return (
		<>
			<div className='flex justify-center w-[100vw]'>
				<div className='flex flex-col w-full max-w-[1440px] p-8 gap-y-[50px] mb-[80px] '>
					{/* <GiveHeroSection /> */}
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
								<div className='flex justify-center items-center'>
									<div className='flex justify-center items-center p-2'>
										<a
											className='font-display md:text-[24px] lg:text-[44px] text-[#f8f8f8]'
											href='#onlineGiving'
										>
											GIVE&nbsp;NOW
										</a>
									</div>
									<div className='flex w-[80px]'>
										<Image src={arrow} alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col items-center w-full overflow-hidden'>
						<div className='flex justify-center items-center w-full'>
							<h2 className='font-display font-bold text-center md:text-[126px] lg:text-[192px]'>
								WHY&nbsp;WE{' '}
								<span className='font-kepler font-thin italic text-[1.1em]'>
									GIVE
								</span>
							</h2>
						</div>
						<div className='flex justify-center p-8 mx-8'>
							<p className='font-display md:text-[18px] lg:text-[24px] leading-relaxed'>
								Here at Celebration, we believe that God calls us to partake in
								the act of generosity, and that tithing is an act of worship and
								obedience to Jesus. When you give back to the Lord through
								Celebration Church, we commit to you that your offering will sow
								into the expansion of His Kingdom as we seek to share the
								transformative power of the Gospel all around the world.
							</p>
						</div>
						{/* <div className='flex'>
							<Link href={'#onlinegiving'}>
								<div className='flex p-2 '>
									<button className='flex flex-col w-auto items-center gap-2'>
										<div className='flex'>
											<a className='font-display text-[24px] lg:text-[34px]'>
												LEARN MORE
											</a>
										</div>
										<div className='flex lg:hidden justify-center items-center'>
											<Image
												src={arrowdown}
												width={21}
												height={21}
												layout='fixed'
												alt='arrow-button-for-online-giving-section'
											/>
										</div>
										<div className='hidden lg:flex justify-center items-center'>
											<Image
												src={arrowdown}
												width={42}
												height={42}
												layout='fixed'
												alt='arrow-button-for-online-giving-section'
											/>
										</div>
									</button>
								</div>
							</Link>
						</div> */}
					</div>
					<div className='flex flex-col items-center w-full overflow-hidden mb-16 '>
						<div className='relative flex flex-col items-center justify-start w-full gap-16 '>
							<div className='flex justify-center items-center w-full my-16'>
								<h2 className='font-display font-bold text-center md:text-[126px] lg:text-[192px]'>
									YOUR{' '}
									<span className='font-kepler font-thin italic  text-[1.1em]'>
										IMPACT
									</span>
								</h2>
							</div>

							{/* CAROUSEL SECTION */}
							<Carousel />
						</div>
					</div>

					{/* ONLINE GIVING SECTION */}
					<div id='onlineGiving'>
						<OnlineGivingDropdown />
					</div>

					<div className='flex flex-col items-center w-full overflow-hidden z-[997] '>
						<div className='flex justify-center items-center w-full'>
							<h2 className='font-display font-bold text-left md:text-[126px] lg:text-[192px]'>
								OTHER&nbsp;WAYS
								<br />
								<span className='font-kepler font-thin italic  text-[1.1em]'>
									TO&nbsp;GIVE
								</span>
							</h2>
						</div>
						{modalOpen ? (
							<GiveModal
								modalData={modalData}
								setModalOpen={setModalOpen}
								modalIndex={modalIndex}
								setDarken={setDarken}
								handleModalClose={handleModalClose}
							/>
						) : (
							<div className='flex justify-center items-center w-full'>
								<div className='flex justify-center items-center p-4 gap-x-8 w-full'>
									<div className='flex flex-col justify-center items-center w-full p-4'>
										<div
											onClick={() => handleModalOpen(0)}
											className='flex bg-[#070707] m-4 justify-center items-center rounded-full text-[120px] text-[#f8f8f8] w-[200px] h-[200px] cursor-pointer hover:scale-110 transition-all'
										>
											<FontAwesomeIcon
												icon={faMobile}
												className='hover:-rotate-3 transition-all'
											/>
										</div>
										<div className='flex justify-center w-full p-2 my-2'>
											<p className='font-display font-bold text-[36px]'>APP</p>
										</div>
									</div>
									<div className='flex flex-col justify-center items-center w-full p-4'>
										<div
											onClick={() => handleModalOpen(1)}
											className='flex bg-[#070707] m-4 justify-center items-center rounded-full text-[120px] text-[#f8f8f8] w-[200px] h-[200px] cursor-pointer hover:scale-110 transition-all'
										>
											<FontAwesomeIcon
												icon={faBitcoin}
												className='hover:-rotate-3 transition-all'
											/>
										</div>
										<div className='flex justify-center w-full p-2 my-2'>
											<p className='font-display font-bold text-[36px]'>
												CRYPTO
											</p>
										</div>
									</div>
									<div className='flex w-full flex-col justify-center items-center p-4'>
										<div
											onClick={() => handleModalOpen(2)}
											className='flex bg-[#070707] m-4 justify-center items-center rounded-full text-[120px] text-[#f8f8f8] w-[200px] h-[200px] cursor-pointer hover:scale-110 transition-all'
										>
											<FontAwesomeIcon
												icon={faPiggyBank}
												className='hover:-rotate-3 transition-all'
											/>
										</div>
										<div className='flex justify-center w-full p-2 my-2'>
											<p className='font-display font-bold text-[36px]'>BANK</p>
										</div>
									</div>
									<div className='flex w-full flex-col justify-center items-center p-4'>
										<div
											onClick={() => handleModalOpen(3)}
											className='flex bg-[#070707] m-4 p-4 justify-center items-center rounded-full text-[120px] text-[#f8f8f8] w-[200px] h-[200px] cursor-pointer hover:scale-110 transition-all'
										>
											<Image
												src={givt}
												alt=''
												className='hover:-rotate-3 transition-all'
											/>
										</div>
										<div className='flex justify-center w-full p-2 my-2'>
											<p className='font-display font-bold text-[36px]'>GIVT</p>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>

					<LegacyTeamSection />

					<div className='relative flex flex-col items-center w-full h-[600px] overflow-hidden '>
						<div className='flex justify-start items-center w-full '>
							<h2 className='font-display font-bold text-left md:text-[126px] lg:text-[192px]'>
								BEGIN&nbsp;TO
								<br />
								<span className='font-kepler font-thin italic  text-[1.1em]'>
									TITHE
								</span>
							</h2>
						</div>
						<div className='relative lg:absolute flex flex-col items-center right-0 lg:right-5 top-[0] lg:top-[225px] p-8 w-full lg:w-1/2 justify-end gap-y-8 '>
							<div className='flex w-full'>
								<p className='flex font-display font-normal text-left text-[24px] leading-relaxed text-[#7c7c7c]'>
									If tithing is new to you and you’re not sure where to get
									started, we’ve got you covered! We’re here to help set you up
									with a plan, and be a source of encouragement as you seek to
									honor God with your finances. <br />
									<br />
									This is your commitment to tithe 10% of your income for the
									next 8 weeks. Trusting God and putting Him first in your
									finances declares a blessing over your life.
								</p>
							</div>
							<div className='flex w-full justify-start items-center '>
								<Link href='/'>
									<div className='flex items-center py-2 gap-x-4'>
										<div className='flex items-center'>
											<p className='font-display font-normal text-[24px]'>
												START&nbsp;TITHING
											</p>
										</div>
										<div className='invert w-[88px]'>
											<Image src={arrow} alt='' />
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>

					<div className='relative flex items-center w-full overflow-hidden gap-x-16'>
						<div className='flex flex-col w-3/5 gap-y-8 p-4 '>
							<div>
								<h3 className='font-display font-bold text-[44px]'>
									HAVE&nbsp;QUESTIONS?
								</h3>
							</div>
							<div>
								<p className='flex font-display text-left text-[24px] leading-relaxed text-[#7c7c7c]'>
									If you have additional questions concerning giving or
									donations, please call Celebration Church Giving Office at
									(904) 737-1121 or contact us.
								</p>
							</div>
						</div>
						<div className='flex flex-col w-2/5 gap-y-8 p-4 '>
							<div className='flex w-full justify-start items-center '>
								<motion.button
									whileHover={{ scale: 1.1 }}
									className='flex items-center py-2 gap-x-4'
								>
									<Link href='givingfaqs' passHref>
										<div className='flex items-center py-2 gap-x-4'>
											<div className='flex items-center'>
												<a className='font-display font-normal text-[24px]'>
													GIVING&nbsp;FAQs
												</a>
											</div>
											<div className='invert w-[88px]'>
												<Image src={arrow} alt='' />
											</div>
										</div>
									</Link>
								</motion.button>
							</div>
							<div className='flex w-full justify-start items-center '>
								<a
									href='mailto:giving@celebration.org'
									target='_blank'
									rel='noopener noreferrer'
								>
									<motion.button
										whileHover={{ scale: 1.1 }}
										className='flex items-center py-2 gap-x-4'
									>
										<div className='flex items-center'>
											<p className='font-display font-normal text-[24px]'>
												CONTACT
											</p>
										</div>
										<div className='invert w-[88px]'>
											<Image src={arrow} alt='' />
										</div>
									</motion.button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const GiveModal = ({
	modalData,
	setModalOpen,
	modalIndex,
	setDarken,
	handleModalClose,
}) => {
	try {
		return (
			<>
				{modalData.map(
					(data, index) =>
						index === modalIndex && (
							<div
								key={index}
								className='fixed flex mx-auto w-[85vw] h-[50vw] z-[999] p-16 bg-[#070707]'
							>
								<div className='flex w-full h-full p-8'>
									{/* BACK BUTTON AN ICON (LEFT COLUMN) */}
									<div className='flex-col w-2/5 justify-between items-center'>
										<div
											onClick={handleModalClose}
											className='flex w-min h-min  p-4 justify-center items-center gap-4 cursor-pointer'
										>
											<div className='flex justify-center items-center text-[18px] invert'>
												<FontAwesomeIcon icon={faArrowLeft} className='' />
											</div>
											<p className='text-white font-display text-[22px] hover:text-[24px] transition-all'>
												BACK
											</p>
										</div>
										<div className='flex flex-col justify-center items-center w-full my-16 p-4'>
											<div className='flex bg-[#f8f8f8] m-4 justify-center items-center rounded-full text-[120px] text-[#070707] w-[200px] h-[200px] cursor-pointer hover:scale-110 transition-all'>
												<FontAwesomeIcon
													icon={data.icon}
													className='hover:-rotate-3 transition-all'
												/>
											</div>
											<div className='flex justify-center w-full p-2 my-2'>
												<p className='font-display font-bold text-[36px]'>
													{data.text}
												</p>
											</div>
										</div>
									</div>
									{/* CONTENT (RIGHT COLUMN) */}
									<div className='flex-col w-3/5'>
										<div className='flex flex-col w-full h-full justify-evenly p-16'>
											<h3 className='text-white uppercase font-bold font-display text-[40px] w-full'>
												{data.title}
											</h3>
											<div className='flex w-full justify-start items-center'>
												<p className='text-white font-display text-[24px] leading-relaxed'>
													{data.paragraph}
												</p>
											</div>
											{/* MODAL LINKS */}
											<>
												<div className='flex justify-start items-center '>
													<a
														href={data.linkOne}
														target='_blank'
														rel='noopener noreferrer'
													>
														<div className='flex items-center py-2 gap-x-4'>
															<div className='flex items-center'>
																<p className='font-display font-normal text-[24px] text-white'>
																	{data.linkOneTitle}
																</p>
															</div>
															{data.linkOneTitle !== undefined &&
																data.linkOneTitle !== null && (
																	<div className='w-[88px]'>
																		<Image src={arrow} alt='' />
																	</div>
																)}
														</div>
													</a>
												</div>

												{/* THIS IS A CONDITIONALLY RENDERED SECOND LINK IF THERES CONTENT */}
												{data.linkTwo !== undefined &&
													data.linkTwo !== null && (
														<div className='flex justify-start items-center '>
															<a
																href={data.linkTwo}
																target='_blank'
																rel='noopener noreferrer'
															>
																<div className='flex items-center py-2 gap-x-4'>
																	<div className='flex items-center'>
																		<p className='font-display font-normal text-[24px] text-white'>
																			{data.linkTwoTitle}
																		</p>
																	</div>
																	<div className='w-[88px]'>
																		<Image src={arrow} alt='' />
																	</div>
																</div>
															</a>
														</div>
													)}
											</>
											{/* END MODAL LINKS */}
										</div>
									</div>
								</div>
							</div>
						)
				)}
			</>
		);
	} catch (error) {
		console.error(error);
	}
};
