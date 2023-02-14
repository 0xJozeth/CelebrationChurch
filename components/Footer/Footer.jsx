import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import cclogo from '/public/celebration-logo@1x.png';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import arrow from '/public/arrow@1x.png';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

//IMPORT REACT COOKIE CONSENT PLUGIN
import CookieConsent from 'react-cookie-consent';

///
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAppStoreIos,
	faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';

const sections = [
	{
		title: 'CONNECT',
		links: [
			{ text: 'About', href: '/about' },
			{ text: 'Visit', href: '/visit' },
			{ text: 'Care', href: '/care' },
			{
				text: 'Prayer Request',
				href: 'https://my.celebration.org/portal/get_form.aspx?ID=6bc5f420-26f8-41f1-8149-9344dd2676e6&template=campus-jax&remembertemplate=true ',
			},
		],
	},
	{
		title: 'MEDIA',
		links: [
			{
				text: 'Watch',
				href: 'https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I',
			},
			{ text: 'Celebration Everywhere', href: '/celebration-everywhere' },
			{ text: 'Worship', href: '/worship' },
		],
	},
	{
		title: 'RESOURCES',
		links: [
			{ text: 'Give', href: '/give' },
			{ text: 'Bible Reading Plan', href: '/bible-reading-plan' },
			{ text: 'FAQs', href: '/faqs' },
			{ text: '', href: '' },

			// { text: 'Shop', href: '/shop' },
		],
	},
	{
		title: 'OPPORTUNITIES',
		links: [
			{
				text: 'Jobs',
				href: 'https://www.linkedin.com/company/celebration-church/jobs/',
			},
			{ text: 'SEU Jacksonville', href: 'https://seujacksonville.org' },
		],
	},
	{
		title: 'DOWNLOAD OUR APP',
		links: [
			{
				text: 'Apple Store',
				href: 'https://apps.apple.com/us/app/the-celebration-app/id1210190693',
			},
			{
				text: 'Google Play Store',
				href: 'https://play.google.com/store/apps/details?id=com.echurchapps.celebrationchapp&hl=en_US&gl=US',
			},
		],
	},
];

const copyright = [
	{
		text: `© ${new Date().getFullYear()} Celebration Church. All Rights Reserved`,
		href: '',
	},
	{
		text: 'Terms Of Use',
		href: '',
	},
	{
		text: 'Privacy Policy',
		href: '',
	},
];

const social = [
	{ type: 'facebook', href: 'https://www.facebook.com/celebration.org' },
	{ type: 'instagram', href: 'https://www.instagram.com/celebration_org/' },
	{ type: 'twitter', href: 'https://twitter.com/celebration_org' },
	{
		type: 'youtube',
		href: 'https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I',
	},
	{ type: 'email', href: 'mailto:info@celebration.org' },
];

export default function Footer() {
	return (
		<>
			{/* DESKTOP FOOTER */}

			<div className='hidden md:flex w-full justify-center mx-auto border-solid border-t-[1px] border-[#080808] font-display'>
				<div className='flex w-full justify-between px-36 py-24'>
					<div className='flex h-full justify-center items-center'>
						<Image src={cclogo} alt='' width={84} height={84} />
					</div>
					{sections.map((section, i) => (
						<div key={i} className='flex font-display justify-between'>
							<div className='flex flex-col relative group'>
								<h6 className='font-bold text-[12px] my-4 text-[#080808] group-hover:opacity-40 transition-all'>
									{section.title}
								</h6>
								<ul className='flex flex-col text-[16px] gap-y-6'>
									{section.links.map((link, i) => (
										<motion.li key={i} whileHover={{ scale: 1.1 }}>
											<Link href={link.href} passHref>
												<a>{link.text}</a>
											</Link>
										</motion.li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='hidden md:flex w-full border-solid border-t-[1px] border-[#070707] font-display '>
				<div className='flex w-full justify-start px-36 items-center py-2'>
					{copyright.map((data, i) => (
						<div key={i} className='flex p-2'>
							<p className='uppercase text-[10px] font-display'>{data.text}</p>
						</div>
					))}
				</div>
				<div className='flex w-full justify-end px-36 py-2'>
					{social.map((data, i) => (
						<motion.button
							whileHover={{ scale: 1.1 }}
							key={i}
							className='flex items-center bg-[#070707] p-2 rounded-[50%] mx-2'
						>
							<a href={data.href} target='_blank' rel='noopener noreferrer'>
								{data.type === 'facebook' ? (
									<BsFacebook className='text-[#f8f8f8] h-5 w-5' />
								) : data.type === 'instagram' ? (
									<BsInstagram className='text-[#f8f8f8] h-5 w-5' />
								) : data.type === 'twitter' ? (
									<BsTwitter className='text-[#f8f8f8] h-5 w-5' />
								) : data.type === 'youtube' ? (
									<BsYoutube className='text-[#f8f8f8] h-5 w-5' />
								) : data.type === 'email' ? (
									<MdEmail className='text-[#f8f8f8] h-5 w-5' />
								) : null}
							</a>
						</motion.button>
					))}
				</div>
			</div>

			{/* MOBILE MENU FOOTER */}
			<div className='flex flex-col md:hidden w-screen mx-auto border-solid border-t-[1px] border-[#080808] font-display mb-16'>
				<div className='flex flex-col w-full max-w-[355px] mx-auto'>
					<div className='flex h-full justify-start py-4 items-center'>
						<Image src={cclogo} alt='' width={64} height={64} />
					</div>
					<div className='flex w-full justify-between'>
						<div className='flex flex-col justify-start w-full'>
							{sections.map((section, i) => (
								<div
									key={i}
									className='flex flex-col w-full font-display justify-between'
								>
									{section.title == 'CONNECT' || section.title == 'MEDIA' ? (
										<div className='flex flex-col w-full py-4 relative group'>
											<h6 className='font-bold text-[12px] my-4 text-[#080808] transition-all'>
												{section.title}
												{console.log('section', section)}
											</h6>
											<ul className='flex flex-col text-[16px] gap-y-6'>
												{section.links.map((link, i) => (
													<motion.li key={i} whileHover={{ scale: 1.1 }}>
														{console.log('link', section.links)}
														<Link href={link.href} passHref>
															<a>{link.text}</a>
														</Link>
													</motion.li>
												))}
											</ul>
										</div>
									) : null}
								</div>
							))}
						</div>
						<div className='flex flex-col justify-start w-full'>
							{sections.map((section, i) => (
								<div key={i} className='flex font-display justify-between'>
									{section.title == 'RESOURCES' ||
									section.title == 'OPPORTUNITIES' ? (
										<div className='flex flex-col py-4 relative group'>
											<h6 className='font-bold text-[12px] my-4 text-[#080808] transition-all'>
												{section.title}
												{console.log('section', section)}
											</h6>
											<ul className='flex flex-col text-[16px] gap-y-6'>
												{section.links.map((link, i) => (
													<motion.li key={i} whileHover={{ scale: 1.1 }}>
														{console.log('link', section.links)}
														<Link href={link.href} passHref>
															<a>{link.text}</a>
														</Link>
													</motion.li>
												))}
											</ul>
										</div>
									) : null}
								</div>
							))}
						</div>
					</div>
					<div className='flex flex-col'>
						{sections.map((section, i) => (
							<div key={i} className='flex w-full font-display justify-between'>
								{section.title == 'DOWNLOAD OUR APP' ? (
									<div className='flex flex-col w-full py-4 relative group'>
										<h6 className='font-bold text-[12px] my-4 text-[#080808] transition-all'>
											{section.title}
											{console.log('section', section)}
										</h6>
										<ul className='flex justify-between w-full text-[16px] gap-y-6'>
											{section.links.map((link, i) => (
												<motion.li
													className='flex justify-between w-full mx-auto'
													key={i}
													whileHover={{ scale: 1.1 }}
												>
													{console.log('link', section.links)}
													<Link href={link.href} passHref>
														<a>{link.text}</a>
													</Link>
												</motion.li>
											))}
										</ul>
									</div>
								) : null}
							</div>
						))}
					</div>
				</div>
				<div className='flex flex-col md:hidden w-full border-solid border-t-[1px] border-[#070707] font-display '>
					<div className='flex w-full justify-center py-8'>
						{social.map((data, i) => (
							<motion.button
								whileHover={{ scale: 1.1 }}
								key={i}
								className='flex items-center bg-[#070707] p-2 rounded-[50%] mx-4 h-9'
							>
								<a href={data.href} target='_blank' rel='noopener noreferrer'>
									{data.type === 'facebook' ? (
										<BsFacebook className='text-[#f8f8f8] h-5 w-5' />
									) : data.type === 'instagram' ? (
										<BsInstagram className='text-[#f8f8f8] h-5 w-5' />
									) : data.type === 'twitter' ? (
										<BsTwitter className='text-[#f8f8f8] h-5 w-5' />
									) : data.type === 'youtube' ? (
										<BsYoutube className='text-[#f8f8f8] h-5 w-5' />
									) : data.type === 'email' ? (
										<MdEmail className='text-[#f8f8f8] h-5 w-5' />
									) : null}
								</a>
							</motion.button>
						))}
					</div>
				</div>
				<div className='flex w-full justify-start items-center py-2'>
					{copyright.map((data, i) => (
						<div key={i} className='flex p-2'>
							<p className='uppercase text-[10px] text-center font-display'>
								{data.text}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* <div className='flex md:hidden flex-col mx-auto pt-12 p-8 gap-y-8 border border-solid border-[#070707]'>
				<div className='max-w-[58px] max-h-[58px]'>
					<Image src={cclogo} alt='' />
				</div>

				<div className='flex font-display justify-between lg:min-w-[494px]'>
					<div className='flex flex-col'>
						<h6 className='font-bold text-[12px] my-4'>CONNECT</h6>
						<ul className='flex flex-col text-[16px] gap-y-2'>
							<li>
								<Link href='/about' passHref>
									<a>About</a>
								</Link>
							</li>
							<li>
								<Link href='/visit' passHref>
									<a>Visit</a>
								</Link>
							</li>
							<li>
								<Link href='/care' passHref>
									<a>Care</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex flex-col'>
						<h6 className='font-bold text-[12px] my-4'>MEDIA</h6>
						<ul className='flex flex-col text-[16px] gap-y-2'>
							<li>
								<a href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'>
									Watch
								</a>
							</li>
							<li>
								<Link href='/celebration-everywhere' passHref>
									<a>Celebration Everywhere</a>
								</Link>
							</li>
							<li>
								<Link href='/worship' passHref>
									<a>Worship</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='flex font-display justify-between'>
					<div className='flex flex-col'>
						<h6 className='font-bold text-[12px] my-4'>RESOURCES</h6>
						<ul className='flex flex-col text-[16px] gap-y-2'>
							<li>
								<Link href='/give' passHref>
									<a>Give</a>
								</Link>
							</li>
							<li>
								<Link href='/bible-reading-plan' passHref>
									<a>Bible Reading Plan</a>
								</Link>
							</li>
							<li>
								<Link href='/shop' passHref>
									<a>Shop</a>
								</Link>
							</li>
						</ul>
					</div>

					<div className='flex flex-col min-w-[162px]'>
						<h6 className='font-bold text-[12px] my-4'>OPPORTUNITIES</h6>
						<ul className='flex flex-col text-[16px] gap-y-2'>
							<li>
								<a
									href='https://www.linkedin.com/company/celebration-church/jobs/'
									target='_blank'
									rel='noreferrer'
								>
									Jobs
								</a>
							</li>
							<li>
								<a href='/seu-jacksonville'>SEU Jacksonville</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='flex flex-col justify-between font-display mb-4'>
					<h6 className='font-bold text-[12px] my-4'>DOWNLOAD OUR APP</h6>
					<div className='columns-2'>
						<div className='flex justify-start items-centerh-[20px]'>
							<ul className='flex flex-col text-[14px] gap-y-1'>
								<li className='cursor-pointer'>
									<a
										href='https://apps.apple.com/us/app/the-celebration-app/id1210190693'
										target='_blank'
										rel='noreferrer'
									>
										<div className='flex justify-between'>
											<div className='flex h-full'>Apple App Store</div>
											<div className='flex px-4 h-full'>
												<FontAwesomeIcon icon={faAppStoreIos} />
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
						<div className='flex justify-start items-center h-[20px]'>
							<ul className='flex flex-col text-[14px] gap-y-1'>
								<li className='cursor-pointer'>
									<a
										href='https://play.google.com/store/apps/details?id=com.echurchapps.celebrationchapp&hl=en_US&gl=US'
										target='_blank'
										rel='noreferrer'
									>
										<div className='flex justify-between h-full'>
											<div className='flex'>Google Play Store</div>
											<div className='flex px-4 h-full'>
												<FontAwesomeIcon icon={faGooglePlay} />
											</div>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='hidden md:flex mx-auto pt-12 p-8 gap-y-8 border border-solid border-[#070707]  font-display'>
				<div className='flex mx-auto w-full justify-evenly lg:max-w-[1440px]'>
					<div className='flex fex-col max-w-[58px] max-h-[58px]'>
						<Image src={cclogo} alt='' />
					</div>
					<div className='flex flex-col'>
						<h6 className='font-bold text-[12px] my-4'>CONNECT</h6>
						<ul className='flex flex-col text-[16px] gap-y-2'>
							<li>
								<Link href='/about' passHref>
									<a>About</a>
								</Link>
							</li>
							<li>
								<Link href='/visit' passHref>
									<a>Visit</a>
								</Link>
							</li>
							<li>
								<Link href='/care' passHref>
									<a>Care</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex flex-col'>
						<h6 className='font-bold text-[12px] my-4'>MEDIA</h6>
						<ul className='flex flex-col text-[16px] gap-y-2'>
							<li>
								<a href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'>
									Watch
								</a>
							</li>
							<li>
								<Link href='/celebration-everywhere' passHref>
									<a>Celebration Everywhere</a>
								</Link>
							</li>
							<li>
								<Link href='/worship' passHref>
									<a>Worship</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex flex-col'>
						<h6 className='font-bold text-[12px] my-4'>RESOURCES</h6>
						<ul className='flex flex-col text-[16px] gap-y-2'>
							<li>
								<Link href='/give' passHref>
									<a>Give</a>
								</Link>
							</li>
							<li>
								<Link href='/bible-reading-plan' passHref>
									<a>Bible Reading Plan</a>
								</Link>
							</li>
							{/* <li>
								<Link href='/cKids-Online' passHref>
									<a>cKids Online</a>
								</Link>
							</li> 
							<li>
								<Link href='/shop' passHref>
									<a>Shop</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex flex-col'>
						<h6 className='font-bold text-[12px] my-4'>OPPORTUNITIES</h6>
						<ul className='flex flex-col text-[16px] gap-y-2'>
							<li>
								<a
									href='https://www.linkedin.com/company/celebration-church/jobs/'
									target='_blank'
									rel='noreferrer'
								>
									Jobs
								</a>
							</li>
							<li>
								<a
									href='https://seujacksonville.org'
									target='_blank'
									rel='noreferrer'
								>
									SEU Jacksonville
								</a>
							</li>
						</ul>
					</div>
					<div className='flex flex-col font-display'>
						<h6 className='font-bold text-[12px] my-4'>DOWNLOAD OUR APP</h6>
						<ul className='flex flex-col text-[16px] gap-y-2'>
							<li className='cursor-pointer'>
								<a
									href='https://apps.apple.com/us/app/the-celebration-app/id1210190693'
									target='_blank'
									rel='noreferrer'
								>
									<div className='flex justify-start items-center'>
										<div className='flex'>Apple App Store</div>

										<div className='flex mx-4 h-6 w-14'>
											<Image
												src={arrow}
												// height={22}
												// width={50}
												alt='watch-the-latest-message'
											/>
										</div>
									</div>
								</a>
							</li>
							<li className='cursor-pointer'>
								<a
									href='https://play.google.com/store/apps/details?id=com.echurchapps.celebrationchapp&hl=en_US&gl=US'
									target='_blank'
									rel='noreferrer'
								>
									<div className='flex justify-start'>
										<div className='flex'>Google Play Store</div>
										<div className='flex mx-4 h-6 w-14'>
											<Image
												src={arrow}
												// height={22}
												// width={50}
												alt='watch-the-latest-message'
											/>
										</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='flex px-12 p-6 mx-auto justify-between items-center max-w-[390px] md:max-w-md lg:max-w-lg 2xl:max-w-2xl '>
				<div className='bg-[#070707] p-2 rounded-[50%]'>
					<a
						href='https://www.facebook.com/celebration.org'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsFacebook className='text-[#f8f8f8] h-5 w-5' />
					</a>
				</div>
				<div className='bg-[#070707] p-2 rounded-[50%]'>
					<a
						href='https://www.instagram.com/celebration_org/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsInstagram className='text-[#f8f8f8] h-5 w-5' />
					</a>
				</div>
				<div className='bg-[#070707] p-2 rounded-[50%]'>
					<a
						href='https://twitter.com/celebration_org'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsTwitter className='text-[#f8f8f8] h-5 w-5' />
					</a>
				</div>
				<div className='bg-[#070707] p-2 rounded-[50%]'>
					<a
						href='https://www.youtube.com/user/CelebrationWeb'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsYoutube className='text-[#f8f8f8] h-5 w-5' />
					</a>
				</div>
				<div className='bg-[#070707] p-2 rounded-[50%]'>
					<a href='mailto:info@celebration.org'>
						<MdEmail
							className='text-[#f8f8f8] h-5 w-5'
							target='_blank'
							rel='noopener noreferrer'
						/>
					</a>
				</div>
			</div>
			<div className='flex flex-col mx-auto px-4 justify-between items-center mb-6 text-[#7C7C7C] gap-y-4'>
				<div className='flex p-2'>
					<p className='uppercase text-[10px] font-display'>
						© {new Date().getFullYear()} Celebration Church. All Rights Reserved
					</p>
				</div>

				<div className='flex mx-auto px-4 justify-between items-center w-[200px] '>
					<div>
						<p className='uppercase text-[10px] font-display'>
							<Link href={'#'}>
								<a className='text-[#7C7C7C] hover:text-[#070707]'>
									Terms of Use
								</a>
							</Link>
						</p>
					</div>
					<div>
						<p className='flex'>•</p>
					</div>
					<div>
						<div className='uppercase text-[10px] font-display'>
							<a
								href='https://s3.amazonaws.com/downloads.celebration.org/2018/downloads/Privacy+Policy+Final+2018.pdf'
								target='_blank'
								rel='noreferrer'
							>
								<p className='text-[#7C7C7C] hover:text-[#070707]'>
									Privacy Policy
								</p>
							</a>
						</div>
					</div>
				</div>
			</div> */}
			{/* <div>
				<CookieConsent
					// enableDeclineButton
					flipButtons
					//ACCEPT ON SCROLL//
					acceptOnScroll={true}
					acceptOnScrollPercentage={25}
					onAccept={(byScroll) => {
						// alert(`consent given. \n\n By scrolling? ${byScroll}`);
					}}
					// enableDeclineButton
					// onDecline={() => {
					// 	alert('nay!');
					// }}
					className='border border-solid border-[#070707]'
					style={{
						background: '#F8F8F8',
						border: '1px',
						borderStyle: 'solid',
						borderColor: '#7C7C7C',
					}}
					buttonStyle={{
						backgroundColor: '#070707',
						color: '#F8F8F8',
						fontSize: '13px',
						marginInline: '25px',
					}}
					declineButtonStyle={{
						backgroundColor: '#F8F8F8',
						color: '#070707',
						fontSize: '13px',
						marginInline: '25px',
					}}
					expires={150}
				>
					<div className='flex flex-col mx-4'>
						<p className='font-display text-[12px] text-[#7C7C7C] '>
							We use cookies on our website to give you the most relevant
							experience.&nbsp;
							<br />
						</p>
						<p
							className='font-display text-[12px] text-[#7C7C7C]'
							style={{ marginBlock: '14px', fontSize: '10px' }}
						>
							By clicking “I Accept”, you consent to the use of ALL the cookies.
						</p>
					</div>
				</CookieConsent>
			</div> */}
		</>
	);
}
