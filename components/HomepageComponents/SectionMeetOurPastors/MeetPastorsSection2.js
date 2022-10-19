// import styles from './home.module.css';
import styled from 'styled-components';
import Image from 'next/image';
import arrow from '/public/link-arrow.svg';
import TimAndJen from '/public/pastor-tim-and-jen-timberlake@1x.png';

import Link from 'next/link';
import VideoPlaceholder from '/public/home-page-video-2@1x.png';
import { Container } from '/components/Styles/Container.styled.js';
import { useAnimation, useInView, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Grid = styled.div`
	display: grid;
	grid-template: auto 1fr / 1fr max-content;

	grid-template-areas: 'text image' 'paragraph image';

	div {
		&.heading {
			grid-area: text;

			display: grid;
			grid-column: 1 / span 2;

			margin: 3vw;
			margin-left: 6vw;

			h2 {
				&.maskEffect {
					grid-column: 1;
					grid-row: 1 / span 2;
					color: rgba(255, 255, 255, 1);
					mix-blend-mode: overlay;
					z-index: 3;
				}
				&.noEffect {
					grid-column: 1;
					/* color: rgba(0, 0, 0, 1); */

					grid-row: 1 / span 2;
					z-index: 1;
				}
			}
		}

		&.image {
			grid-area: image;
			z-index: 2;
		}
		&.paragraph {
			width: fit-content;
			padding-inline: 6vw;
		}
	}

	h1,
	h2 {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 800;
		font-size: 10vw;
		line-height: auto;
		span {
			font-family: 'kepler-std-display', serif;
			font-size: auto;
			font-weight: 400;
			font-style: italic;
		}
	}

	p {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 500;
		font-size: clamp(1rem, 1vw, 2rem);
		line-height: 2rem;
		color: rgba(0, 0, 0, 1);
	}
`;

export default function MeetPastors() {
	// const ref = useRef(null);
	// const isInView = useInView(ref);
	// const animation = useAnimation();

	// useEffect(() => {
	// 	console.log('use effect hook, isInView = ', isInView);
	// }, [isInView]);
	// if (isInView) {
	// 	animation.start({
	// 		x: 0,
	// 		opacity: 1,
	// 		delay: 0,
	// 		transition: { type: 'spring', duration: 1, bounce: 0.3 },
	// 	});
	// }
	// if (!isInView) {
	// 	animation.start({ x: '100vw', opacity: 0 });
	// }

	return (
		<>
			<Grid>
				<div className='heading'>
					<h2 className='maskEffect'>
						MEET OUR <br />
						<span>PASTORS</span>
					</h2>
					<h2 className='noEffect'>
						MEET OUR <br />
						<span>PASTORS</span>
					</h2>
				</div>

				<div className='image'>
					<Image src={TimAndJen} alt='' />
				</div>

				<div className='paragraph'>
					<p>
						Tim and Jen Timberlake serve as the Senior Pastors of Celebration
						Church. <br />
						<br />
						Pastors Tim and Jen have a heart for God’s people and equipping them
						with the tools to transform their lives from the inside out. They
						feel most alive when they are pouring back into others, and they
						seek to glorify God through their lives and family.
					</p>
				</div>

				{/* <StyledImage ref={ref}>
					<motion.div animate={animation}>
						<Image src={TimAndJen} alt='' />
					</motion.div>
				</StyledImage>
				<MaskContainer>
					<MeetOurPastorsText>
						MEET OUR <br />
						<MaskSpan>PASTORS</MaskSpan>
					</MeetOurPastorsText>
					<MeetOurPastorsTextMask>
						MEET OUR <br />
						<MaskSpan>PASTORS</MaskSpan>
					</MeetOurPastorsTextMask>
				</MaskContainer>
				<StyledParagraph>
					<p>
						Tim and Jen Timberlake serve as the Senior Pastors of Celebration
						Church. <br />
						<br />
						Pastors Tim and Jen have a heart for God’s people and equipping them
						with the tools to transform their lives from the inside out. They
						feel most alive when they are pouring back into others, and they
						seek to glorify God through their lives and family.
					</p>
				</StyledParagraph> */}
			</Grid>
		</>
	);
}
