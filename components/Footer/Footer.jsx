import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import cclogo from '/public/celebration-logo@1x.png';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

//IMPORT REACT COOKIE CONSENT PLUGIN
import CookieConsent from 'react-cookie-consent';

export default function Footer() {
	return (
		<>
			<div className='flex md:hidden flex-col mx-auto pt-12 p-8 gap-y-8 border border-solid border-[#070707]'>
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
								<Link href='/watch' passHref>
									<a>Watch</a>
								</Link>
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

					<div className='flex flex-col min-w-[162px]'>
						<h6 className='font-bold text-[12px] my-4'>OPPORTUNITIES</h6>
						<ul className='flex flex-col text-[16px] gap-y-2'>
							<li>
								<Link href='/jobs' passHref>
									<a>Jobs</a>
								</Link>
							</li>
							<li>
								<Link href='/seu-jacksonville' passHref>
									<a>SEU Jacksonville</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='flex flex-col justify-between font-display mb-4'>
					<h6 className='font-bold text-[12px] my-4'>DOWNLOAD OUR APP</h6>
					<div className='columns-2'>
						<div className='flex'>
							<ul className='flex flex-col text-[16px] gap-y-2'>
								<li>
									<Link
										href='https://apps.apple.com/us/app/the-celebration-app/id1210190693'
										passHref
									>
										<a>Apple App Store</a>
									</Link>
								</li>
							</ul>
						</div>
						<div className='flex'>
							<ul>
								<li>
									<Link
										href='https://play.google.com/store/apps/details?id=com.echurchapps.celebrationchapp&hl=en_US&gl=US'
										passHref
									>
										<a>Google Play Store</a>
									</Link>
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
								<Link href='/watch' passHref>
									<a>Watch</a>
								</Link>
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
							<li>
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
								<Link href='/jobs' passHref>
									<a>Jobs</a>
								</Link>
							</li>
							<li>
								<Link href='/seu-jacksonville' passHref>
									<a>SEU Jacksonville</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className='flex flex-col font-display'>
						<h6 className='font-bold text-[12px] my-4'>DOWNLOAD OUR APP</h6>
						<ul className='flex flex-col text-[16px] gap-y-2'>
							<li>
								<Link
									href='https://apps.apple.com/us/app/the-celebration-app/id1210190693'
									passHref
								>
									<a>Apple App Store</a>
								</Link>
							</li>
							<li>
								<Link
									href='https://play.google.com/store/apps/details?id=com.echurchapps.celebrationchapp&hl=en_US&gl=US'
									passHref
								>
									<a>Google Play Store</a>
								</Link>
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
						<p className='uppercase text-[10px] font-display'>
							<Link href={'#'}>
								<a className='text-[#7C7C7C] hover:text-[#070707]'>
									Privacy Policy
								</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
			<div>
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
			</div>
		</>
	);
}
