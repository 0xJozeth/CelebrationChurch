import Link from 'next/link';
import { useState } from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { MdEmail, MdMenuBook } from 'react-icons/md';
import { motion } from 'framer-motion';
import * as menuData from '/components/Navbar/data.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faYoutube,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
	faEnvelope,
	faMail,
	faVoicemail,
} from '@fortawesome/free-solid-svg-icons';

const SocialMenubar = (props) => {
	const [nav, setNav] = useState(false);

	function handleToggle() {
		setNav(!nav);
	}

	const closeMenu = () => {
		props.setIsOpen(false);
	};

	return (
		<div
			className={'flex items-end gap-x-8 text-[#f8f8f8] text-[24px] z-100'}
			onClick={handleToggle}
		>
			{menuData.socialData.map((link, linkIndex) => (
				<span key={linkIndex} className='icon'>
					<motion.a
						href={link.href}
						target='_blank'
						rel='noopener noreferrer'
						className='block my-4 font-display font-semibold leading-tight text-[#f8f8f8]'
						initial='hidden'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => {
							closeMenu();
						}}
					>
						{/* {menuData.socialData.map((link, linkIndex) => ( */}
						{/* <a key={linkIndex} className=' text-[#f8f8f8]'> */}
						<span className='tems-center text-[24px] text-[#f8f8f8]'>
							<FontAwesomeIcon
								icon={
									link.href === 'https://www.facebook.com/celebration.org'
										? faFacebook
										: link.href === 'https://www.instagram.com/celebration_org/'
										? faInstagram
										: link.href === 'https://twitter.com/celebration_org'
										? faTwitter
										: link.href ===
										  'https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I '
										? faYoutube
										: link.href === 'mailto:info@celebration.org'
										? faEnvelope
										: null
								}
							/>
						</span>
					</motion.a>
				</span>
			))}

			{/* <span className='flex'>
						<motion.a
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'
							className='block my-4 font-display font-semibold leading-tight text-[#f8f8f8]'
							initial='hidden'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => {
								closeMenu();
							}}
						>
							<a className='text-[#f8f8f8] '>
								<BsInstagram />
							</a>
						</motion.a>
					</span>
					<span className='flex'>
						<motion.a
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'
							className='block my-4 font-display font-semibold leading-tight text-[#f8f8f8]'
							initial='hidden'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => {
								closeMenu();
							}}
						>
							<a className='text-[#f8f8f8]'>
								<BsTwitter />
							</a>
						</motion.a>
					</span>
					<span className='flex'>
						<motion.a
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'
							className='block my-4 font-display font-semibold leading-tight text-[#f8f8f8]'
							initial='hidden'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => {
								closeMenu();
							}}
						>
							<a className='text-[#f8f8f8]'>
								<BsYoutube />
							</a>
						</motion.a>
					</span>
					<span className='flex'>
						<motion.a
							href={link.href}
							target='_blank'
							rel='noopener noreferrer'
							className='block my-4 font-display font-semibold leading-tight text-[#f8f8f8]'
							initial='hidden'
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							onClick={() => {
								closeMenu();
							}}
						>
							<a className='text-[#f8f8f8]'>
								<MdEmail />
							</a>
						</motion.a>
					</span> */}
		</div>
	);
};

export default SocialMenubar;
