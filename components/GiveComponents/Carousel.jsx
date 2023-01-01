import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';

import leftnav from '/public/navleft.svg';
import rightnav from '/public/navleft.svg';

import serve from '/public/serve.png';
import oneChild from '/public/oneChild.png';
import relief from '/public/DisasterReliefEfforts.png';

import { motion, AnimatePresence } from 'framer-motion';

const Carousel = (props) => {
	// State to track the current image
	const [currentImage, setCurrentImage] = useState(0);

	// List of images to display in the carousel

	const images = useMemo(
		() => [
			{
				src: serve,
				alt: 'Image 1',
				heading: 'Orange Park Food Pantry',
				paragraph:
					'Our Orange Park location is making a tremendous impact in their local community through their weekly food pantry ministry – which served 95,312 Clay County residents this past year. Because of your generosity, not only were we able to meet the tangible needs, but they were also able to open a 4,000 square foot space dedicated to helping further their food pantry and outreach efforts.',
				link: 'Partner With Us',
			},
			{
				src: oneChild,
				alt: 'ONECHILD',
				heading: 'ONECHILD',
				paragraph:
					'Your generosity is helping the lives of thousands of children from our Celebration Zimbabwe location! Through partnership with OneChild, our congregation is sponsoring numerous kids in Zimbabwe and helping meet the physical, emotional, and spiritual needs of them and their families. If you are interested in contributing to this Kingdom impact, sponsor a child in need today.',
				link: 'Partner With Us',
			},
			{
				src: relief,
				alt: 'DISASTER RELIEF EFFORTS',
				heading: 'DISASTER RELIEF EFFORTS',
				paragraph:
					'One of Celebration’s deepest desires is to operate as the hands and feet of Jesus, especially when people are in need the most. We partner with Convoy of Hope on numerous occasions throughout the year to help meet tangible needs of those struck with natural disasters, war, or various other tragedies. To join the impact that these amazing partners are making daily, you can give here.',
				link: 'Partner With Us',
			},
			// Add more images here...
		],
		[]
	);

	// Use the useMemo hook to memoize the images array
	const imagesMemo = useMemo(() => images, [images]);
	// Function to go to the previous image
	const goToPreviousImage = () => {
		// If the current image is the first image, go to the last image
		if (currentImage === 0) {
			setCurrentImage(imagesMemo.length - 1);
		} else {
			setCurrentImage(currentImage - 1);
		}
	};

	// Function to go to the next image
	const goToNextImage = () => {
		// If the current image is the last image, go to the first image
		if (currentImage === imagesMemo.length - 1) {
			setCurrentImage(0);
		} else {
			setCurrentImage(currentImage + 1);
		}
	};

	useEffect(() => {
		// Function to go to the next image after a specified interval
		const goToNextImage = () => {
			// If the current image is the last image, go to the first image
			if (currentImage === imagesMemo.length - 1) {
				setCurrentImage(0);
			} else {
				setCurrentImage(currentImage + 1);
			}
		};

		// // Set a interval to go to the next image every 5 seconds
		const interval = setInterval(goToNextImage, 10000);

		// // Clear the interval when the component is unmounted
		return () => clearInterval(interval);
	}, [currentImage, imagesMemo.length]);

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
		},
	};

	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<>
			<div className='flex w-full h-full'>
				<button onClick={goToPreviousImage} className='w-[10%] px-2 py-1'>
					<Image src={leftnav} alt='previous image' />
				</button>
				<motion.div
					variants={container}
					initial='hidden'
					animate='show'
					className='flex justify-center p-4 '
				>
					<div className=' flex w-2/5 p-4 '>
						<animatePresence>
							<motion.div
								key={currentImage}
								variants={item}
								initial={{ opacity: 0, x: '100%' }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: '-100%' }}
								transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
								className=''
							>
								<Image
									src={images[currentImage].src}
									className='w-1/2 p-8'
									alt={images[currentImage].alt}
								/>
							</motion.div>
						</animatePresence>
					</div>
					<div className='w-1/2 px-8 mx-4 pt-16 '>
						<animatePresence>
							<motion.h1
								key={currentImage}
								variants={item}
								initial={{ opacity: 0, x: '100%' }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: '-100%' }}
								transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
								className='font-display font-bold text-[#070707] text-[54px] py-4 pb-8 uppercase'
							>
								{images[currentImage].heading}
							</motion.h1>
						</animatePresence>
						<animatePresence>
							<motion.p
								key={currentImage}
								variants={item}
								initial={{ opacity: 0, x: '100%' }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: '-100%' }}
								transition={{ ease: 'easeInOut', duration: 1, delay: 0.6 }}
								className='flexjustify-center font-display font-normal text-left text-[20px] leading-7 text-[#7c7c7c]'
							>
								{images[currentImage].paragraph}
							</motion.p>
						</animatePresence>
					</div>
				</motion.div>
				<button
					onClick={goToNextImage}
					className='w-[10%] px-2 py-1 rotate-180'
				>
					<Image src={rightnav} alt='next image' />
				</button>
			</div>
		</>
	);
};

export default Carousel;
