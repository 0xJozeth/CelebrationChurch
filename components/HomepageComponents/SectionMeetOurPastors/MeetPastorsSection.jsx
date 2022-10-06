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
	grid-template: 1fr 1fr / 1fr 1fr;

	grid-template-areas: 'text image' 'paragraph image';

	height: 75%;
	width: 100%;

	margin-top: 20em;

	grid-gap: 15px;

	@media (max-width: 576px) {
		grid-template-rows: revert-layer;
		grid-template-columns: unset;
		grid-template-areas: 'text' 'image' 'paragraph';
		margin-top: revert;
	}
`;

const StyledImage = styled.div`
	grid-area: image;

	align-self: center;
	z-index: 2;

	@media (max-width: 576px) {
		justify-self: end;
		width: 90%;
	}
`;

const MaskContainer = styled.div`
	position: relative;
	font-family: 'neue-haas-grotesk-display';
	font-weight: 800;
	font-size: 12vw;
	line-height: 0.9em;

	grid-area: text;

	justify-self: center;
	grid-column: span 2/3;

	margin-left: -3em;

	@media (max-width: 576px) {
		font-size: 4em;
		grid-column: revert;
		margin: 0.1em 0.1em -1.5em 0.1em;
		justify-self: start;
		align-self: start;
	}
`;

const MeetOurPastorsText = styled.div`
	color: rgba(0, 0, 0, 1);

	z-index: 1;
`;

const MeetOurPastorsTextMask = styled.div`
	position: absolute;

	top: 0;
	left: 0;

	color: rgba(255, 255, 255, 1);

	mix-blend-mode: overlay;

	z-index: 3;
`;

const MaskSpan = styled.span`
	display: inline-flex;

	font-family: 'kepler-std-display', serif;
	font-style: italic;
	font-weight: 400;
	// line-height: 1em;
	font-size: 1.1em;
`;

const LearnMoreLinkText = styled.div`
	text-decoration: none;
	font-size: 0.25em;
	font-family: 'neue-haas-grotesk-display';
	color: #070707;
	font-weight: 500;
	font-size: 2.5rem;
	display: grid;
	grid-area: linktext;
	place-items: center;

	margin-right: 0.25em;
	justify-content: end;

	@media only screen and (max-width: 576px) {
		font-size: 1.5em;
	}
`;

const ArrowLink = styled.div`
	grid-area: arrow;
	display: grid;
	// place-items: center;
	// justify-self: start;
	place-self: center stretch;

	margin-left: 0.25em;
	justify-content: start;

	@media only screen and (max-width: 576px) {
		transform: scale(0.75);
		justify-content: end;
	}
`;

const Styleda = styled.a`
	// display: flex;
	// justify-content: center;
	align-items: center;
`;

const StyledParagraph = styled.div`
	justify-self: center;
	color: rgba(0, 0, 0, 0.55);
	font-weight: 500;
	font-family: 'neue-haas-grotesk-display';
	font-size: 2vw;
	letter-spacing: 0;
	width: 65%;

	// line-height: 2rem;
	// min-width: 20%;
	// z-index: 10;
	// outline: 5px dotted yellow;

	@media (max-width: 576px) {
		font-size: 1.25em;
		width: 90%;
		justify-self: center;
	}
`;
export default function MeetPastors() {
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
			delay: 0,
			transition: { type: 'spring', duration: 1, bounce: 0.3 },
		});
	}
	if (!isInView) {
		animation.start({ x: '100vw', opacity: 0 });
	}

	return (
		<>
			<Grid>
				<StyledImage ref={ref}>
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
				</StyledParagraph>
			</Grid>
		</>
	);
}
