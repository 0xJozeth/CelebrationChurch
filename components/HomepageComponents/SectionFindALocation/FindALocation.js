import styled from 'styled-components';
import Image from 'next/image';
import { CgArrowLongRight } from 'react-icons/cg';
import GroupImage from '/public/microsoftteams-image@1x.png';
import Link from 'next/link';
import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Grid = styled.div`
	display: grid;
	grid-template: min-content 0.5fr / 1fr 1fr;

	grid-template-areas: 'image text' '. link';
	grid-area: find;
	grid-gap: 1%;

	height: 75%;
	width: 100%;

	margin-top: 20em;
	margin-bottom: 10em;

	z-index: 3;

	@media only screen and (max-width: 576px) {
		display: grid;

		place-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: 0.3fr min-content 0.1fr;
		grid-template-areas: 'text' 'image' 'link';

		height: revert;

		margin-top: 25em;
		margin-bottom: 5em;
	}

	@media only screen and (max-width: 960px) {
	}

	@media only screen and (max-width: 1440px) {
	}
`;

const StyledImage = styled.div`
	grid-area: image;

	padding: 0;
	margin: 0;

	align-self: center;
	z-index: 2;

	@media only screen and (max-width: 576px) {
		height: 100%;
		width: 90%;
		justify-self: start;
	}
`;

export const MaskContainer = styled.div`
	position: relative;

	grid-area: text;

	justify-self: center;
	grid-column: span 2/3;

	font-size: 10vw;

	line-height: 0.9em;
	margin-right: -3.75em;

	// min-height: 100%;
	margin-top: 0.5em;

	color: rgba(255, 255, 255, 1);

	font-family: 'neue-haas-grotesk-display';
	font-weight: 800;

	@media only screen and (max-width: 576px) {
		grid-row: span 2/3;
		font-size: 3.5em;

		margin-top: -1.25em;
		margin-inline: 0.25em;
		justify-self: end;
		align-self: start;
	}
`;

export const FindALocationText = styled.div`
	width: 100%;
	color: rgba(0, 0, 0, 1);
	z-index: 1;
`;

export const FindALocationTextMask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	opacity: 1;
	color: rgba(255, 255, 255, 1);
	text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
	mix-blend-mode: overlay;
	pointer-events: none;
	z-index: 3;
`;

export const MaskSpan = styled.span`
	display: inline-flex;

	font-family: 'kepler-std-display', serif;
	font-style: italic;
	font-weight: 600;
	font-size: 1.1em;
`;

const Styleda = styled.a`
	// display: flex;
	// justify-content: center;
	align-items: center;
`;

const LinkContainer = styled.div`
	display: grid;
	grid-template-areas: 'text arrow';
	// place-items: center;
	grid-area: link;
	height: 100%;
	z-index: 99;
	cursor: pointer;

	@media only screen and (max-width: 576px) {
		transform: scale(0.75);
		justify-self: end;

		align-self: center;
	}
`;

const ComeVisitUsText = styled.div`
	text-decoration: none;
	font-size: 0.25em;
	font-family: 'neue-haas-grotesk-display';
	color: #070707;
	font-weight: 500;
	font-size: 2.5vw;
	display: grid;
	place-items: center;

	margin-right: 0.25em;
	justify-content: end;

	@media only screen and (max-width: 576px) {
		font-size: 2.25em;
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

export default function FindALocation() {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		// console.log('use effect hook, inView = ', inView);
	}, [inView]);
	if (inView) {
		animation.start({
			x: 0,
			opacity: 1,
			delay: 2000,
			transition: { type: 'spring', duration: 1, bounce: 0.3 },
		});
	}
	if (!inView) {
		animation.start({ x: '-100vw', opacity: 0 });
	}

	return (
		<>
			<Grid>
				<StyledImage ref={ref}>
					<motion.div animate={animation}>
						<Image src={GroupImage} alt='group' />
					</motion.div>
				</StyledImage>

				<MaskContainer animate={animation}>
					<FindALocationText>
						FIND A <br />
						<MaskSpan>LOCATION</MaskSpan> <br />
						NEAR YOU
					</FindALocationText>
					<FindALocationTextMask>
						FIND A <br />
						<MaskSpan>LOCATION</MaskSpan>
						<br /> NEAR YOU
					</FindALocationTextMask>
				</MaskContainer>

				<LinkContainer>
					<ComeVisitUsText>
						<Link href='/visit'>
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
								<Styleda>COME VISIT US</Styleda>
							</motion.div>
						</Link>
					</ComeVisitUsText>

					<ArrowLink>
						<Link href='/visit'>
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
								<CgArrowLongRight size={'3.5vw'} />
							</motion.div>
						</Link>
					</ArrowLink>
				</LinkContainer>
			</Grid>
		</>
	);
}
