import Link from 'next/link';
import Image from 'next/image';
import arrow from '/public/link-arrow.svg';
import { useInView, useAnimation, motion } from 'framer-motion';
import {
	StyledContainer,
	MaskContainer,
	WelcomeToCelebrationText,
	WelcomeToCelebrationTextMask,
	M,
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

import styled from 'styled-components';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: max-content 1fr;
	grid-template-areas: 'text video';

	margin-inline: 3vw;

	div {
		&.noEffect {
			display: grid;

			top: 0;
			left: 0;

			grid-column: text / span video;
			grid-row: 1;

			z-index: 1;
		}
		&.maskEffect {
			color: rgba(255, 255, 255, 1);
			mix-blend-mode: overlay;
			grid-column: text / span video;
			grid-row: 1;
			z-index: 3;
		}
		&.paragraph {
			grid-column: text;
			grid-row: 2;
			margin-left: 3vw;
			width: 100%;

			/* margin-inline: 3vw; */
			margin-block: 3vw;
		}

		&.linkContainer {
			display: grid;
			grid-template-columns: max-content 1fr;

			align-items: center;

			margin-block: 3vw;
			cursor: pointer;

			div {
				&.arrowContainer {
					width: fit-content;
					transform: scale(0.5);
					height: auto;
				}
			}

			p {
				color: #070707;
				font-size: clamp(1rem, 1.5vw, 2rem);
			}
		}

		&.responsive-iframe {
			grid-column: video;
			grid-row: 1 / span 2;
			padding-top: 56.25%;
			position: relative;

			max-width: 100%;
			width: auto;

			justify-self: end;
			z-index: 2;
			cursor: pointer;

			iframe {
				position: absolute;
				top: 0;
				right: 0;
				height: 100%;
			}
		}
	}

	h1 {
		font-weight: 800;
		font-size: clamp(7rem, 10vw, 12rem);
		line-height: 0.25em;
	}

	p {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 500;
		font-size: clamp(1rem, 3vw, 2rem);
		line-height: 2rem;
		color: rgba(0, 0, 0, 0.55);
	}
`;

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
				<div className='noEffect'>
					<h1>
						<Banner />
					</h1>
				</div>
				<div className='maskEffect'>
					<h1>
						<Banner />
					</h1>
				</div>

				<div className='paragraph'>
					<p>
						We’re so glad you’re here! At Celebration Church, we prioritize
						Jesus’ mission to spread the gospel. We are a global house comprised
						of many rooms around the world, with headquarters residing in
						Jacksonville, Florida. We’d love to connect with you online or at a
						location near you!
					</p>

					<Link
						href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'
						passHref
					>
						<div className='linkContainer'>
							<p>WATCH THE LATEST MESSAGE</p>
							<div className='arrowContainer'>
								<Image src={arrow} alt='watch-the-latest-message' />
							</div>
						</div>
					</Link>
				</div>

				<div className='responsive-iframe'>
					<iframe
						src='https://player.vimeo.com/video/744290982?h=26579d8c5a&controls=0&badge=0&autoplay=1&muted=1&loop=1&autopause=0&player_id=0&app_id=58479'
						frameBorder='0'
						width={810}
						height={1438}
						placeholder={'blur'}
						priority='true'
					></iframe>
				</div>
			</Grid>
		</>
	);
}
