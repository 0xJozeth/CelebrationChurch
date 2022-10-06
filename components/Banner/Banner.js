import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// VARIANTS

const banner = {
	animate: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1,
		},
	},
};

const letterAni = {
	initial: { y: 400 },
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1,
		},
	},
};

const Banner = () => {
	const [playMarquee, setPlayMarquee] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setPlayMarquee(true);
		}, 2000);
	}, []);
	return (
		<motion.div className='banner' variants={banner}>
			<BannerRowTop title={'WELCOME'} />
			<BannerRowCenter title={'TO'} />
			<BannerRowBottom title={'CELEBRATION'} playMarquee={playMarquee} />
			{/* <BannerRowBottom title={'CELEBRATION'} playMarquee={playMarquee} /> */}
		</motion.div>
	);
};

const AnimatedLetters = ({ title, disabled }) => (
	<motion.span
		className='row-title'
		variants={disabled ? null : banner}
		initial='initial'
		animate='animate'
	>
		{React.Children.toArray(
			[...title].map((letter) => (
				<motion.span
					key={letter.id}
					className='row-letter'
					variants={disabled ? null : letterAni}
				>
					{letter}
				</motion.span>
			))
		)}
	</motion.span>
);

const BannerRowTop = ({ title }) => {
	return (
		<div className={'banner-row'}>
			<div className='row-col'>
				<AnimatedLetters title={title} />
			</div>
		</div>
	);
};

const BannerRowCenter = ({ title, playMarquee }) => {
	return (
		<div className={`banner-row italic ${playMarquee && 'animate'}`}>
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1 }}
				className='marquee__inner'
			>
				<span>
					<AnimatedLetters title={title} />
				</span>
			</motion.div>
		</div>
	);
};

const BannerRowBottom = ({ title, playMarquee }) => {
	return (
		<div className={`banner-row celebration ${playMarquee && 'animate'}`}>
			<motion.div
				initial={{ y: 310 }}
				animate={{ y: 0 }}
				transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
				className='marquee__inner'
			>
				<AnimatedLetters title={title} />
				{/* <AnimatedLetters title={title} />
				<AnimatedLetters title={title} disabled />
				<AnimatedLetters title={title} disabled /> */}
			</motion.div>
		</div>
	);
};

export default Banner;
