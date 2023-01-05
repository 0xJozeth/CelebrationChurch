import Link from 'next/link';
import { useState } from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { MdEmail, MdMenuBook } from 'react-icons/md';

const SocialMenubar = () => {
	function handleToggle() {
		setNav(!nav);
	}

	return (
		<div
			className={'flex items-end gap-x-8 text-[#f8f8f8] text-[24px] z-100'}
			onClick={handleToggle}
		>
			<span className='icon'>
				<Link href='/' passHref>
					<a className=' text-[#f8f8f8]'>
						<BsFacebook />
					</a>
				</Link>
			</span>
			<span className='flex'>
				<Link href='/' passHref>
					<a className='text-[#f8f8f8] '>
						<BsInstagram />
					</a>
				</Link>
			</span>
			<span className='flex'>
				<Link href='/' passHref>
					<a className='text-[#f8f8f8]'>
						<BsTwitter />
					</a>
				</Link>
			</span>
			<span className='flex'>
				<Link href='/' passHref>
					<a className='text-[#f8f8f8]'>
						<BsYoutube />
					</a>
				</Link>
			</span>
			<span className='flex'>
				<Link href='/' passHref>
					<a className='text-[#f8f8f8]'>
						<MdEmail />
					</a>
				</Link>
			</span>
		</div>
	);
};

export default SocialMenubar;
