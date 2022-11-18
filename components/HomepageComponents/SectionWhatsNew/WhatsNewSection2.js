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
	grid-template: auto 1fr / 1fr 1fr;
	grid-template-areas: 'text image';
	justify-content: space-between;

	place-self: center;
	width: 100%;
	div {
		&.heading {
			grid-area: text;

			display: grid;
			grid-column: 1 / span 2;

			margin: 3vw;
			margin-left: 6vw;

			li {
				display: grid;
				column-gap: 1vw;
				row-gap: 3vw;
				grid-template-columns: max-content 1fr;
				align-self: center;
			}
			a {
				font-size: clamp(1rem, 3vw, 2rem);
			}

			h2 {
				&.maskEffect {
					grid-column: 1;
					grid-row: 1;
					color: rgba(255, 255, 255, 1);
					mix-blend-mode: overlay;
					z-index: 3;
				}
				&.noEffect {
					grid-column: 1;

					grid-row: 1;
					z-index: 1;
				}
			}
		}
		&.image {
			grid-area: image;
			grid-row: 1;
			justify-self: start;
			z-index: 2;
			margin-top: 1vw;
		}
		ul {
			display: grid;
			row-gap: 3vw;
			padding: 1vw;

			place-self: start;
			width: fit-content;

			li {
				cursor: pointer;

				a {
					font-family: 'neue-haas-grotesk-display';
					font-weight: 500;
					font-size: clamp(1rem, 1vw, 2rem);
					line-height: 2rem;
					color: rgba(0, 0, 0, 1);
					align-self: center;
				}
			}
		}
	}

	h1,
	h2 {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 800;
		font-size: clamp(8rem, 10vw, 12.5rem);
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
			<Grid className='mb-[125px]'>
				<div className='heading'>
					<h2 className='maskEffect'>
						WHATS &nbsp;
						<span>NEW</span>
					</h2>
					<h2 className='noEffect'>
						WHATS &nbsp;
						<span>NEW</span>
					</h2>
					{/* </div> */}
					{/* <div className='linkContainer'> */}
					<ul>
						<Link href='new-series' passHref>
							<li>
								<a>NEW SERIES</a>
								<Image src={arrow} alt='arrow' />
							</li>
						</Link>
						<Link href='conferences' passHref>
							<li>
								<a>CONFERENCES</a>
								<Image src={arrow} alt='arrow' />
							</li>
						</Link>
						<Link href='groups' passHref>
							<li>
								<a>GROUPS</a>
								<Image src={arrow} alt='arrow' />
							</li>
						</Link>
					</ul>
				</div>
				<div className='image'>
					<Image src={whatsnew} alt='whats-new' />
				</div>
			</Grid>
		</>
	);
};

export default WhatsNewSection;
