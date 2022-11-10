import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/link-arrow.svg';
import { useInView, useAnimation, motion } from 'framer-motion';
import {
	StyledContainer,
	Grid,
	MaskContainer,
	WelcomeToCelebrationText,
	WelcomeToCelebrationTextMask,
	MaskSpan,
	MotionMaskContainer,
	MotionWelcomeToCelebrationText,
	MotionWelcomeToCelebrationTextMask,
	MotionMaskSpan,
	StyledParagraph,
	HeaderLinkContainer,
	LinkButtonText,
	ArrowBtn,
	StyledVideoContainer,
} from '/components/HomepageComponents/HeroComponent/Hero.styled.js';
import { CgArrowLongRight } from 'react-icons/cg';
import Banner from '/components/Banner/Banner.js';
import { useRef, useEffect } from 'react';

export default function Hero() {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const animation = useAnimation();

	useEffect(() => {
		console.log('use effect hook, isInView = ', isInView);
	}, [isInView]);
	if (isInView) {
		animation.start({
			x: 0,
			opacity: 1,
			delay: 2000,
			transition: { type: 'spring', duration: 1, bounce: 0.3 },
		});
	}
	if (!isInView) {
		animation.start({ x: '100vw', opacity: 0 });
	}

	return (
		<>
			<Grid>
				<MotionMaskContainer>
					<MotionWelcomeToCelebrationText>
						<Banner />
						{/* WELCOME <br /> <MaskSpan>TO</MaskSpan>
						<br />
						CELEBRATION */}
					</MotionWelcomeToCelebrationText>
					<MotionWelcomeToCelebrationTextMask>
						<Banner />
						{/* <Banner /> */}
						{/* WELCOME <br /> <MaskSpan>TO</MaskSpan>
						<br />
						CELEBRATION */}
					</MotionWelcomeToCelebrationTextMask>
				</MotionMaskContainer>
				<StyledParagraph>
					We’re so glad you’re here! At Celebration Church, we prioritize Jesus’
					mission to spread the gospel. We are a global house comprised of many
					rooms around the world, with headquarters residing in Jacksonville,
					Florida. We’d love to connect with you online or at a location near
					you!
					<HeaderLinkContainer>
						<Link
							href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
							passHref
						>
							<LinkButtonText>WATCH THE LATEST MESSAGE</LinkButtonText>
						</Link>
						<ArrowBtn>
							<CgArrowLongRight size={'2em'} />
						</ArrowBtn>
					</HeaderLinkContainer>
				</StyledParagraph>
				<StyledVideoContainer ref={ref}>
					<motion.div className='videoWrapper' animate={animation}>
						<iframe
							src='https://player.vimeo.com/video/744290982?h=26579d8c5a&controls=0&badge=0&autoplay=1&muted=1&loop=1&autopause=0&player_id=0&app_id=58479'
							frameBorder='0'
							width={810}
							height={1438}
							placeholder={'blur'}
							priority
						></iframe>
					</motion.div>
				</StyledVideoContainer>
			</Grid>
		</>
	);
}
