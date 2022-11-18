import styled from 'styled-components';
import Image from 'next/image';
import arrow from '/public/link-arrow.svg';
import { CgArrowLongRight } from 'react-icons/cg';
import GroupImage from '/public/microsoftteams-image@1x.png';
import Link from 'next/link';
import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Grid = styled.div`
	display: grid;

	grid-template-columns: 1fr 1fr;
	grid-template-areas: 'image text' 'image link';

	div {
		&.image {
			position: relative;

			grid-column: image;
			grid-row: 1;

			z-index: 2;
		}

		&.maskContainer {
			position: relative;
			grid-column: image / span text;
			justify-self: end;
			align-self: center;
			margin-right: 2.5vw;

			width: 50%;
			grid-row: 1;
		}
		&.noEffect {
			position: relative;
			grid-column: image / span text;

			z-index: 1;
		}
		&.maskEffect {
			position: absolute;
			top: 0;
			grid-column: image / span text;

			color: rgba(255, 255, 255, 1);
			mix-blend-mode: overlay;

			z-index: 3;
		}
		&.linkContainer {
			grid-column: 2;
			display: grid;
			grid-template-columns: 3fr 1fr;
			align-items: center;
			width: max-content;
			justify-self: center;
			z-index: 3;
			cursor: pointer;

			div {
				&.text {
					justify-self: end;
				}
				&.arrow {
					transform: scale(0.5);
					justify-self: start;
				}
			}
		}
	}

	h1,
	h2 {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 800;
		font-size: 114px;
		line-height: auto;
		span {
			font-family: 'kepler-std-display', serif;
			font-size: 1.1em;
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

export default function FindALocation() {
	// const { ref, inView } = useInView();
	// const animation = useAnimation();

	// useEffect(() => {
	// 	console.log('use effect hook, inView = ', inView);
	// }, [inView]);
	// if (inView) {
	// 	animation.start({
	// 		x: 0,
	// 		opacity: 1,
	// 		delay: 2000,
	// 		transition: { type: 'spring', duration: 1, bounce: 0.3 },
	// 	});
	// }
	// if (!inView) {
	// 	animation.start({ x: '-100vw', opacity: 0 });
	// }

	return (
		<>
			<Grid className='mt-[100px]'>
				<div className='image '>
					<Image
						src={GroupImage}
						alt='find-a-location'
						layout='responsive'
						objectFit='contain'
					/>
				</div>

				<div className='maskContainer'>
					<div className='noEffect'>
						<h2>
							FIND A <span>LOCATION</span> NEAR YOU
						</h2>
					</div>
					<div className='maskEffect'>
						<h2>
							FIND A <span>LOCATION</span> NEAR YOU
						</h2>
					</div>
				</div>
				<Link href='visit' passHref>
					<div className='linkContainer'>
						<div className='text'>
							<p>COME VISIT US</p>
						</div>
						<div className='arrow'>
							<Image src={arrow} alt='come-visit-us-arrow' />
						</div>
					</div>
				</Link>
			</Grid>
		</>
	);
}
