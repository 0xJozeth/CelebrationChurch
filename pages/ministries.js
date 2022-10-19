import Data from '/components/CarePageComponents/data.js';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import image1 from '/public/ministries-images/image1.png';
import image2 from '/public/ministries-images/image2.png';
import image3 from '/public/ministries-images/image3.png';
import image4 from '/public/ministries-images/image4.png';
import arrow from '/public/arrow@1x.png';
import longArrow from '/public/ministries-images/arrow-long.svg';

import ckids from '/public/ministries-images/ministries_ckids.png';
import celebrationYouth from '/public/ministries-images/ministries_celebration_youth.png';
import youngAdults from '/public/ministries-images/ministries_cya.png';
import celebrationWorship from '/public/ministries-images/ministries_worship.png';

import containerData from '../components/CarePageComponents/data';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	/* grid-template-columns: 1fr max-content; */
	grid-template-rows: repeat(auto, fit-content);
	/* grid-template-areas: 'collage text'; */
	margin-inline: 2.5%;

	div {
		&.collage {
			/* grid-area: collage; */
			grid-column: 1 / span 2;
			grid-row: 1;
			display: grid;
			grid-template: repeat(28, 1fr) / repeat(28, 1fr);

			margin-top: 5%;
			width: 50%;

			div {
				&.image1 {
					grid-column: 1 / span 14;
					grid-row: 1 / span 14;
					z-index: 0;
				}

				&.image2 {
					grid-column: 5 / span 20;
					grid-row: 5 / span 14;
					z-index: 2;
				}
				&.image3 {
					grid-column: 3 / span 16;
					grid-row: 14 / span 22;
					z-index: 4;
				}
				&.image4 {
					grid-column: 14 / span 20;
					grid-row: 17 / span 28;
					z-index: 4;
				}
			}
		}
		&.imageContainer {
			background-color: blanchedalmond;
			/* width: 100%; */
			/* padding-inline: 5%; */
			align-items: center;
		}
		&.text {
			grid-column: 1 / span 2;
			grid-row: 1;
			display: grid;
			width: 50%;

			margin-right: 7.5%;
			justify-self: end;

			h2 {
				&.maskEffect {
					grid-column: 1;
					grid-row: 1;
					color: rgba(255, 255, 255, 1);
					mix-blend-mode: overlay;
					z-index: 99;
				}
				&.noEffect {
					grid-column: 1;
					grid-row: 1;
					z-index: 1;
				}
			}
			p {
				margin-block: 3vw;
				width: 50%;
				margin-left: 25%;
				justify-self: center;
			}
		}
		&.rowContainer {
			display: grid;
			grid-template-columns: 1fr 1fr;

			margin-block: 3vw;

			column-gap: 5%;
			width: 100%;

			div {
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
				&.findLocationButton {
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
`;

export default function care() {
	return (
		<Grid>
			<div className='rowContainer'>
				<div className='collage'>
					<div className='image1'>
						<Image
							src={image1}
							alt='image-1'
							// width={587}
							// height={429}
							objectFit='contain'
							layout='intrinsic'
						/>
					</div>
					<div className='image2'>
						<Image
							src={image2}
							alt='image-2'
							// width={630}
							// height={380}
							objectFit='contain'
							layout='intrinsic'
						/>
					</div>
					<div className='image3'>
						<Image
							src={image3}
							alt='image-3'
							// width={439}
							// height={323}
							objectFit='contain'
							layout='intrinsic'
						/>
					</div>
					<div className='image4'>
						<Image
							src={image4}
							alt='image-4'
							// width={584}
							// height={394}
							objectFit='contain'
							layout='intrinsic'
						/>
					</div>
				</div>
				<div className='text'>
					<h2 className='maskEffect'>
						THERES <br />
						A PLACE <br />
						<span>FOR YOU</span>
					</h2>
					<h2 className='noEffect'>
						THERES <br />
						A PLACE <br />
						<span>FOR YOU</span>
					</h2>
					<p>
						Here at Celebration, our heart is to equip you and your family with
						a safe space to grow your relationship with Jesus while cultivating
						the type of community that stewards God’s intention for fellowship
						with one another. We believe that true life change happens in real,
						authentic relationships! At each Celebration location, we have
						various ministries available for all different age ranges that help
						create these places for growth and community!
					</p>
				</div>
			</div>
			<div className='rowContainer'>
				<Image src={ckids} alt='' />
				<div className='contentGrid'>
					<h3>CKIDS</h3>
					<p>
						At Celebration, we believe that children are a heritage from the
						Lord and should be trained to be “Like arrows in the hand of a
						warrior…” (Psalms 127:4). Because of that, our cKids services
						utilize curriculums that will teach your kids the Word of God in a
						creative, fun, and age-appropriate way. <br /> <br /> We value
						safety as a top priority and have crafted engaging environments that
						will help your child grow in wisdom, stature, and in favor with both
						God and man. <br /> <br />
						If you are a new parent to Celebration and would like more
						additional information about the cKids services at your specific
						location &nbsp;
						<strong>download our app.</strong>
					</p>
					<Link href='https://apps.apple.com/us/app/the-celebration-app/id1210190693'>
						<div className='linkContainer'>
							<a>FIND CKIDS NEAR YOU</a>
							<Image src={arrow} alt='' />
						</div>
					</Link>
				</div>
			</div>
			<div className='rowContainer'>
				<Image src={celebrationYouth} alt='' />
				<div className='contentGrid'>
					<h3>CELEBRATION YOUTH</h3>
					<p>
						Celebration Youth is our Middle and High School ministry for
						students! With weekly gatherings and events happening throughout the
						year, Celebration Youth’s heart is to steward and sow into the next
						generation through relationship and community. <br />
						<br />
						For more specific information on the events happening at your local
						location, &nbsp;
						<strong>visit the Celebration App.</strong>
					</p>
					<Link href='https://apps.apple.com/us/app/the-celebration-app/id1210190693'>
						<div className='linkContainer'>
							<a>GET CONNECTED</a>
							<Image src={arrow} alt='' />
						</div>
					</Link>
				</div>
			</div>
			<div className='rowContainer'>
				<Image src={youngAdults} alt='' />
				<div className='contentGrid'>
					<h3>CELEBRATION YOUTH</h3>
					<p>
						Celebration Young Adults is designed to serve the Young Adults
						community of Celebration Church through worship gatherings, small
						communities, and other fellowship opportunities. At CYA, we believe
						that we can go further together! <br />
						<br />
						If you’d like to get more information on events, small groups, and
						more for your Celebration location &nbsp;
						<strong>download other Celebration App.</strong>
					</p>
					<Link href='https://apps.apple.com/us/app/the-celebration-app/id1210190693'>
						<div className='linkContainer'>
							<a>GET CONNECTED</a>
							<Image src={arrow} alt='' />
						</div>
					</Link>
				</div>
			</div>
			<div className='rowContainer'>
				<Image src={celebrationWorship} alt='' />
				<div className='contentGrid'>
					<h3>CELEBRATION WORSHIP</h3>
					<p>
						Celebration Worship is the worship expression of Celebration Church.
						It’s made up of a dedicated team of worshippers whose heart and
						desire is to usher in the presence of God so that people can
						experience a touch from our Heavenly Father. At Celebration, we
						believe that as we come together as a people, we get to experience
						God’s sacred space, and worship plays a pivotal part in this.
					</p>
					<Link href='https://worship.celebration.org/'>
						<div className='linkContainer'>
							<a>GET CONNECTED</a>
							<Image src={arrow} alt='' />
						</div>
					</Link>
				</div>
			</div>
			<div className='rowContainer'>
				<div className='findLocationButton'>
					<Link href='visit'>
						<div className='linkContainer'>
							<a>FIND LOCATION</a>
							<Image src={longArrow} alt='' />
						</div>
					</Link>
				</div>
			</div>
		</Grid>
	);
}
