// import styles from './home.module.css';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import arrow from '/public/link-arrow.svg';
import whatsnew from '/public/home-whatsnew@1x.png';
import { CgArrowLongRight } from 'react-icons/cg';

import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// IMPORTED STUFF

const Grid = styled.div`
	display: grid;
	width: 100%;
	height: 100%;

	place-items: center;

	padding: 2em;

	// background: violet;
`;

const ContentGrid = styled.div`
	display: grid;
	margin: 6em;
	width: 100%;

	grid-template-columns: 1fr 1fr;
	grid-template-areas:
		'header image'
		'links image';

	margin-block: 4em;
	padding-block: 2em;

	padding-inline: 4em;

	height: 100%;
	width: 100%;
	// background: teal;
`;

export const MaskContainer = styled.div`
	position: relative;

	grid-area: header;

	justify-self: start;
	align-self: center;

	grid-column: 1 / span 2;

	font-size: 10vw;
	line-height: 0.9em;

	font-family: 'neue-haas-grotesk-display';
	font-weight: 800;
	color: rgba(255, 255, 255, 1);

	@media only screen and (max-width: 576px) {
		grid-row: span 2/3;
		font-size: 3.5em;

		margin-top: -1.25em;
		margin-inline: 0.25em;
		justify-self: end;
		align-self: start;
	}
`;

export const WhatsNewText = styled.div`
	width: 100%;
	color: rgba(0, 0, 0, 1);
	z-index: 1;
`;

export const WhatsNewTextMask = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	opacity: 1;
	color: rgba(255, 255, 255, 1);
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

const ImageWrapper = styled(motion.div)`
	grid-area: image;
	align-self: center;
	justify-self: end;
`;

const StyledImage = styled(Image)`
	width: 100%;
	height: 100%;
`;

const LinkContainer = styled.div`
	grid-area: links;

	display: flex;
	flex-direction: column;

	justify-self: center;

	font-family: 'neue-haas-grotesk-display';
	color: #070707;
	font-weight: 400;
	font-size: 3vw;
	line-height: 7.5rem;
	letter-spacing: 0.05rem;
	text-decoration: none;
`;

const SectionLink = styled.a`
	text-decoration: none;
	cursor: pointer;
`;

const WhatsNewSection = () => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		// console.log('use effect hook, inView = ', inView);
	}, [inView]);
	if (inView) {
		animation.start({
			x: 0,
			opacity: 1,
			delay: 10000,
			transition: { type: 'spring', duration: 1, bounce: 0.3 },
		});
	}
	if (!inView) {
		animation.start({ x: '100vw', opacity: 0 });
	}
	return (
		<>
			<Grid>
				<ContentGrid ref={ref}>
					<MaskContainer>
						<WhatsNewText>
							WHAT&#39;S&nbsp;<MaskSpan>NEW</MaskSpan>
						</WhatsNewText>
						<WhatsNewTextMask>
							WHAT&#39;S&nbsp;<MaskSpan>NEW</MaskSpan>
						</WhatsNewTextMask>
					</MaskContainer>
					<ImageWrapper animate={animation}>
						<StyledImage
							src={whatsnew}
							objectFit='cover'
							layout='intrinsic'
							alt=''
						/>
					</ImageWrapper>
					<LinkContainer>
						<ul>
							<Link href='/new-series' passHref>
								<li>
									<SectionLink>
										NEW SERIES
										<CgArrowLongRight />
									</SectionLink>
								</li>
							</Link>
							<Link href='/conferences' passHref>
								<li>
									<SectionLink>
										CONFERENCES
										<CgArrowLongRight />
									</SectionLink>
								</li>
							</Link>
							<Link href='/groups' passHref>
								<li>
									<SectionLink>
										GROUPS
										<CgArrowLongRight />
									</SectionLink>
								</li>
							</Link>
						</ul>
					</LinkContainer>
				</ContentGrid>
			</Grid>
		</>
	);
};

export default WhatsNewSection;
