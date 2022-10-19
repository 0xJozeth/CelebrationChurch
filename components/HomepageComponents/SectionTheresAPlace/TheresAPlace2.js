import { useEffect, useRef } from 'react';

import styled from 'styled-components';
import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';
import Link from 'next/link';
import arrow from '/public/link-arrow.svg';

import Place from '/public/ministries-homepage@1x.png';
import { useInView } from 'framer-motion';

const Grid = styled.div`
	position: relative;
	display: grid;
	/* grid-template: 2fr repeat(2, fit-content) / 0.25fr fit-content 1fr; */
	grid-template-columns: 1fr 1fr;
	/* grid-template-areas: 'sidetext image .' 'sidetext text text' 'sidetext text link'; */

	div {
		&.image {
			position: relative;
			/* grid-column: 1 / span 3; */
			grid-row: 1;
			z-index: 1;
			p {
				position: absolute;
				top: 3vw;
				/* background-color: #070707; */

				font-family: 'neue-haas-grotesk-display';
				font-size: clamp(1em, 1.25vw, 1.25em);
				font-weight: 600;
				color: #f8f8f8;
				writing-mode: vertical-lr;
				text-transform: uppercase;

				margin-left: 1.5vw;
			}
		}
		/* &.sidetext {
			grid-column: 1;
			grid-row: 1;
			align-self: center;
			z-index: 2;
		} */
		&.heading {
			position: relative;
			grid-column: 1 / span 3;
			justify-self: end;

			grid-row: 2;
			/* place-self: center; */
			margin-inline: 3vw;
			margin-top: -3vw;

			/* z-index: 3; */

			h2 {
				z-index: 1;
				&.mask {
					position: absolute;
					top: 0;
					left: 0;

					color: rgba(255, 255, 255, 1);
					mix-blend-mode: overlay;
					z-index: 4;
				}
			}
		}
		&.linkContainer {
			grid-column: 2;
			grid-row: 3;
			justify-self: end;

			display: grid;
			grid-template-columns: 1fr max-content;
			align-items: center;
			justify-self: start;
			/* width: min-content; */
			cursor: pointer;
			div {
				&.arrow {
					width: fit-content;
					transform: scale(0.5);
				}
			}
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
		font-size: clamp(1rem, 3vw, 2rem);
		line-height: 2rem;
		color: rgba(0, 0, 0, 1);
	}
`;

export default function TheresAPlace() {
	return (
		<>
			<Grid>
				<div className='image'>
					<Image src={Place} alt='' />
					<p>ckids / youth / young adults / worship</p>
				</div>

				<div className='heading'>
					<h2>
						THERES A PLACE <br />
						<span>FOR YOU</span>
					</h2>
					<h2 className='mask'>
						THERES A PLACE <br />
						<span>FOR YOU</span>
					</h2>
				</div>

				<Link href='/' alt=''>
					<div className='linkContainer'>
						<div>
							<p>LEARN MORE ABOUT OUR MINISTRIES</p>
						</div>
						<div className='arrow'>
							<Image src={arrow} alt='' />
						</div>
					</div>
				</Link>
			</Grid>
		</>
	);
}
