import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import stage from '/public/care-images/care_stage.png';
import telecare from '/public/care-images/care_telecare.png';
import arrow from '/public/arrow@1x.png';
import longArrow from '/public/ministries-images/arrow-long.svg';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(auto, fit-content);

	margin-inline: 2.5%;
	justify-self: center;

	div {
		&.rowContainer {
			display: grid;
			grid-template-columns: 1fr 1fr;

			margin-block: 3vw;

			column-gap: 5%;
			/* width: 100%; */

			div {
				&.imageWrapper {
					padding-inline: 3vw;
				}
				&.text {
					display: grid;
					grid-template-columns: 1fr;
					grid-column: 2;
					grid-row: 1;
					margin-right: 3vw;

					width: max-content;

					div {
						&.paragraph {
							width: 30vw;
							justify-self: end;

							div {
								&.linkContainer {
									display: flex;
									font-family: 'neue-haas-grotesk-display';
									align-items: center;
									justify-content: start;
									padding-block: 3vw;
									column-gap: 1vw;

									a {
										cursor: pointer;
										font-size: clamp(1.5rem, 1.5vw, 3rem);
									}
								}
							}
						}
					}

					h1 {
						&.maskEffect {
							grid-column: 1;
							grid-row: 1;
							color: rgba(255, 255, 255, 1);
							mix-blend-mode: overlay;

							width: fit-content;
							z-index: 99;
						}
						&.noEffect {
							grid-column: 1;
							grid-row: 1;
							width: fit-content;
							z-index: 1;
						}
					}
					p {
						margin-block: 3vw;
						justify-self: center;
						z-index: 5;
					}
				}
				&.imageContainer {
					display: grid;

					margin-top: 16vw;
					grid-column: 1 / span 2;

					align-self: center;
					width: max-content;

					grid-row: 1;
					z-index: 2;
				}
				&.contentGrid {
					display: grid;
					row-gap: 3vw;

					div {
						&.linkContainer {
							display: flex;
							font-family: 'neue-haas-grotesk-display';
							align-items: center;
							column-gap: 1vw;

							a {
								cursor: pointer;
								font-size: clamp(1.5rem, 1.5vw, 3rem);
							}
						}
					}
				}
				&.followJesusButton {
					grid-column: 1 / span 2;
					outline: 2px solid #070707;
					font-size: clamp(4rem, 8vw, 8rem);
					width: 100%;
					cursor: pointer;

					div {
						&.linkContainer {
							display: flex;
							font-family: 'neue-haas-grotesk-display';
							align-items: center;
							justify-content: space-evenly;
							padding-block: 3vw;
							/* column-gap: 6vw; */
						}
					}
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
	h3 {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 700;
		font-size: clamp(3.25rem, 4vw, 4.25rem);
		line-height: auto;
	}

	p {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 500;
		font-size: clamp(1rem, 1.25vw, 2rem);
		line-height: 2rem;
		color: #7c7c7c;

		strong {
			text-decoration: bold;
			font-weight: 800;
		}
	}
	a {
		color: #070707;
		text-decoration: none;
	}
`;

function care() {
	return (
		<Grid>
			<div className='rowContainer'>
				<div className='imageContainer'>
					<Image src={stage} alt='' />
				</div>
				<div className='text'>
					<h1 className='maskEffect'>
						SUPPORTING <br />
						YOU ON YOUR <br />
						PATH TO <br />
						<span>WHOLENESS</span>
					</h1>
					<h1 className='noEffect'>
						SUPPORTING <br />
						YOU ON YOUR <br />
						PATH TO <br />
						<span>WHOLENESS</span>
					</h1>
					<div className='paragraph'>
						<p>
							Our Care Ministry supports and guides individuals, couples, and
							families with life-giving care as they navigate through change in
							every season of life. Our experienced pastors and highly-trained
							Care Partners are available to listen, help you identify potential
							solutions, and access practical resources to move you towards
							wholeness.
						</p>
						<div className='linkContainer'>
							<a
								href='https://celebration.wufoo.com/forms/r1y73bnj1r5g2sn/'
								target='_blank'
								rel='noopener noreferrer'
							>
								CONTACT CARE
							</a>
							<Image src={arrow} alt='arrow' />
						</div>

						<div className='linkContainer'>
							<a
								href='https://s3.amazonaws.com/downloads.celebration.org/2022/webdownloads/care_guide_dec.2021.pdf'
								target='_blank'
								rel='noopener noreferrer'
							>
								CARE GUIDE
							</a>
							<Image src={arrow} alt='arrow' />
						</div>
					</div>
				</div>
			</div>
			<div className='rowContainer'>
				<div className='imageWrapper'>
					<Image src={telecare} alt='' />
				</div>
				<div className='contentGrid'>
					<h3>TELECARE</h3>
					<p>
						We partner with Honey Lake Clinic to provide individual and group
						therapy with licensed Christian therapists for those that are
						struggling to reclaim their lives and achieve their God given
						potential. We envision Honey Lake Clinic as a refuge for those in
						need of Freedom and mental health care. For those that are seeking
						to walk in wholeness for themselves and their family, register
						below.
					</p>
					<div className='linkContainer'>
						<a
							href='https://podio.com/webforms/25046911/1842022'
							target='_blank'
							rel='noopener noreferrer'
						>
							INDIVIDUAL THERAPY
						</a>
						<Image src={arrow} alt='' />
					</div>
				</div>
			</div>
			<div className='rowContainer'>
				<div className='followJesusButton'>
					<Link href='visit'>
						<div className='linkContainer'>
							<a>FOLLOW JESUS</a>
							<Image src={longArrow} alt='' />
						</div>
					</Link>
				</div>
			</div>
		</Grid>
	);
}

export default care;
