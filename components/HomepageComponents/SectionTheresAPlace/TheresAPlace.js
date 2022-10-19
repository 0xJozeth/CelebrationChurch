import { useEffect, useRef } from 'react';

import styled from 'styled-components';
import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';
import Link from 'next/link';
import { CgArrowLongRight } from 'react-icons/cg';
import Place from '/public/ministries-homepage@1x.png';
import { useInView } from 'framer-motion';
import {arrow} from  

const Grid = styled.div`
	display: grid;
	grid-template: 2fr min-content 0.25fr / 1fr 5%;
	grid-template-areas: 'image .' 'text text' 'linktext arrow';

	/* height: 75vh; */
	width: 100%;

	grid-gap: auto;

	@media (max-width: 576px) {
		height: auto;
		display: grid;

		grid-template-columns: revert;
		grid-template-rows: revert;

		grid-template: 1fr auto 0.2fr / 1fr;

		grid-template-areas:
			'sidelink image .'
			'. text .'
			'. link link';
	}
`;

const TheresAPlaceHeadingText = styled.div`
	color: rgba(0, 0, 0, 1);

	z-index: 1;
`;

const TheresAPlaceHeadingTextMask = styled.div`
	position: absolute;

	top: 0;
	left: 0;

	color: rgba(255, 255, 255, 1);
	mix-blend-mode: overlay;

	z-index: 3;
`;

const StyledImage = styled.div`
	position: relative;
	grid-area: image;
	align-self: center;
	z-index: 2;
	grid-column: 1 / span 2;

	@media only screen and (max-width: 576px) {
		align-self: revert;
		grid-area: image;
		height: 100%;
		width: 100%;
	}

	p {
		position: absolute;

		font-family: 'neue-haas-grotesk-display';
		font-size: 1.25vw;
		font-weight: 600;
		color: #f8f8f8;
		writing-mode: vertical-lr;
		text-transform: uppercase;
		/* text-orientation: mixed; */

		top: 10%;
		left: 1.5%;
	}
`;

const MaskContainer = styled.div`
	position: relative;
	font-family: 'neue-haas-grotesk-display';
	font-weight: 800;
	font-size: 10vw;
	line-height: 0.9em;

	grid-area: text;
	justify-self: start;

	margin-top: -0.5em;
	margin-left: 0.75em;

	@media only screen and (max-width: 576px) {
		grid-area: text;
		font-size: 4em;
		height: 100%;
		width: 100%;
		align-self: center;
		justify-self: center;
		margin-inline: 1em;
		margin-bottom: 0.25em;

		margin-top: -0.5em;
	}
`;

const MaskSpan = styled.span`
	display: inline-flex;

	font-family: 'kepler-std-display', serif;
	font-style: italic;
	font-weight: 400;
	// line-height: 1em;
	font-size: 1.1em;
`;

const LinkContainer = styled.div`
	display: grid;

	// place-items: center;
	/* grid-area: linktext; */
	height: 100%;
	width: 100%;
	z-index: 99;
	cursor: pointer;
	grid-template-areas: 'text arrow';
	grid-template-columns: 1fr 10%;
	/* grid-column: 2 / span 3; */

	@media only screen and (max-width: 576px) {
		// grid-template-columns: revert;
		// grid-template-rows: revert;
		// transform: scale(0.75);
		// justify-self: end;

		grid-area: link;

		grid-template: 1fr / 1fr 0.25fr;

		grid-template-areas: 'linktext arrow';
		grid-column: span 2/3;

		// justify-items: end;
	}
`;

const LearnMoreLinkText = styled.div`
	text-decoration: none;
	font-size: 0.25em;
	font-family: 'neue-haas-grotesk-display';
	color: #070707;
	font-weight: 500;
	font-size: 2.5vw;

	display: grid;
	/* grid-area: linktext; */
	place-items: center;

	margin-right: 0.25em;
	justify-content: end;

	@media only screen and (max-width: 576px) {
		font-size: 1.25em;
		width: 100%;

		// text-align: center;
	}
`;

const ArrowLink = styled.div`
	display: grid;
	grid-area: arrow;

	place-items: center;
	justify-self: start;
	// place-self: center stretch;

	margin-left: 0.25em;
	justify-content: end;

	div {
		&.arrow-btn {
			grid-area: arrow;
		}
	}

	@media only screen and (max-width: 576px) {
		transform: scale(0.75);
		place-self: revert;
		justify-self: center;
		align-self: center;
	}
`;

const Styleda = styled.a`
	// display: flex;
	// justify-content: center;
	align-items: center;
`;

export default function TheresAPlace() {
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
		animation.start({ x: '-100vw', opacity: 0 });
	}

	return (
		<>
			<Grid>
				<StyledImage ref={ref}>
					<motion.div animate={animation}>
						<Image src={Place} alt='' />
						<p>ckids / youth / young adults / worship</p>
					</motion.div>
				</StyledImage>
				<MaskContainer>
					<TheresAPlaceHeadingText>
						THERE’S A PLACE
						<MaskSpan>&nbsp;FOR YOU</MaskSpan>
					</TheresAPlaceHeadingText>
					<TheresAPlaceHeadingTextMask>
						THERE’S A PLACE
						<MaskSpan>&nbsp;FOR YOU</MaskSpan>
					</TheresAPlaceHeadingTextMask>
				</MaskContainer>
				<LinkContainer>
					<LearnMoreLinkText>
						<Link href='/ministries' passHref>
							<motion.div
								whileHover={{
									scale: 1.08,
									transition: { duration: 0.15 },
								}}
								initial='hidden'
								animate='visible'
								variants={{
									hidden: {
										scale: 0.8,
										opacity: 0,
										y: 25,
									},
									visible: {
										scale: 1,
										opacity: 1,
										y: 0,
										transition: {
											delay: 0.05,
										},
									},
								}}
							>
								<Styleda>LEARN MORE ABOUT OUR MINISTRIES</Styleda>
							</motion.div>
						</Link>
					</LearnMoreLinkText>
					<ArrowLink>
						<Link href='/ministries' passHref>
							<motion.div
								whileHover={{
									scale: 1.08,
									transition: { duration: 0.15 },
								}}
								initial='hidden'
								animate='visible'
								variants={{
									hidden: {
										scale: 0.8,
										opacity: 0,
										y: 25,
									},
									visible: {
										scale: 1,
										opacity: 1,
										y: 0,
										transition: {
											delay: 0.05,
										},
									},
								}}
							>
								<div className='arrow-btn'>
									<CgArrowLongRight size={'3.5em'} />
								</div>
							</motion.div>
						</Link>
					</ArrowLink>
				</LinkContainer>
			</Grid>
		</>
	);
}
