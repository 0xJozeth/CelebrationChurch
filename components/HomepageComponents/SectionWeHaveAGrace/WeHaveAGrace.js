import { useEffect, useRef } from 'react';

import styled from 'styled-components';
import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';
import Link from 'next/link';
import arrow from '/public/link-arrow.svg';

import Place from '/public/ministries-homepage@1x.png';
import { useInView } from 'framer-motion';

import Banner from '/components/Banner/GraceBanner.js';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;

	margin-block: 3vw;

	div {
		&.mainContainer {
			display: grid;
			grid-template-columns: 1fr;
			grid-auto-rows: fit-content;
			place-self: center;
		}

		&.grace {
			justify-content: center;
			width: min-content;
			margin-right: 3vw;

			h2 {
				width: min-content;
				font-family: 'kepler-std-display';
				font-size: 18.5vw;
				-webkit-text-fill-color: transparent;
				-webkit-text-stroke: 1px;
				letter-spacing: 1vw;
			}
		}
	}

	h1,
	h2,
	h3 {
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

export default function WeHaveAGrace() {
	return (
		<>
			<Grid>
				<div className='mainContainer'>
					<div>
						<h2>WE HAVE A</h2>
					</div>
					<div className='grace'>
						<h2>GRACE</h2>
						{/* <h2>
							<Banner />
						</h2> */}
					</div>
					<div>
						<h3>FOR</h3>
					</div>
				</div>
			</Grid>
		</>
	);
}
