import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import MeetPastors from '/public/MeetPastors.png';
import arrow from '/public/arrow@1x.png';
import longArrow from '/public/arrow-long.svg';
import Arc from '/public/partner-ARC.png';
import City from '/public/partner-city-for-the-nations.png';
import Convoy from '/public/partner-convoy-of-hope.png';
import OneHope from '/public/partner-one-hope.png';
import baptism from '/public/baptism.png';

const Grid = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, auto-fit);
	grid-auto-rows: min-content;
	width: 100%;
	background: #f8f8f8;
	justify-self: center;
	justify-content: center;

	/* position: relative; */
	/* place-items: center;	 */
	/* justify-self: center; */
	/* justify-self: center; */
	/* justify-items: center; */

	h2 {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 500;
		font-size: 8vw;
		&.StyledHeadingSpan {
			font-family: 'kepler-std-display', serif;
			font-style: italic;
			font-size: 8vw;
			font-weight: 500;
			justify-content: center;
		}
		span {
			font-family: 'kepler-std-display', serif;
			font-size: 8.5vw;
			font-style: italic;
		}
		p {
			font-family: 'neue-haas-grotesk-display';
			font-weight: 400;
			font-size: 1.5vw;
			color: rgba(0, 0, 0, 0.5);
		}
	}
`;

const HeaderSection = styled.div`
	display: grid;
	justify-self: center;
	margin-block: 5vw;

	div {
		&.paragraphGrid {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			grid-template-areas: '. text .';
			height: min-content;
			gap: 2vw;
			/* margin-block: 5vw; */

			p {
				font-family: 'neue-haas-grotesk-display';
				font-weight: 400;
				font-size: 1.5vw;
				color: rgba(0, 0, 0, 0.5);
			}
		}

		&.meetOurPastors {
		}
		h2 {
			font-family: 'neue-haas-grotesk-display';
			font-weight: 600;
			font-size: 10vw;
			text-align: center;
			span {
				font-family: 'kepler-std-display', serif;
				font-size: 12.5vw;
				font-weight: 400;
				font-style: italic;
			}
		}

		p {
			grid-area: text;
			font-family: 'neue-haas-grotesk-display';
			font-weight: 400;
			font-size: 1vw;
		}
	}
`;

const VideoSection = styled.div`
	display: grid;
	justify-content: center;

	div {
		justify-content: center;
		width: 100%;

		iframe {
			&.iframeContainer {
				background-color: #070707;
				padding: 0.5em;
				/* justify-self: center; */
				/* width: min-content; */
			}
		}
	}
`;

const StyledParagraph = styled.div``;

const BelieveSection = styled.div`
	/* position: relative; */
	/* position: absolute; // 💫 */
	/* top: -0em; */
	/* left: 4.5em; */
	/* z-index: 0; */
	/* grid-auto-rows: min-content; */

	/*
	display: grid;
	column-gap: 2vw;
	grid-template-columns: repeat(2, 1fr);
	grid-template-areas: 'image text' 'image paragraph';
	grid-template-rows: repeat(2, minmax(auto-fit, 200px)); */

	div {
		&.gridContainer {
			/* position: relative; */

			display: grid;
			grid-template-columns: max-content 1fr;
			grid-template-areas: 'image text' 'image paragraph' '. links';
			grid-template-rows: min-content auto 1fr;

			/* grid-column: image / span text; */
			grid-row: 1;
			justify-self: center;
			z-index: 0;
		}

		h2 {
			font-size: 10vw;
			font-weight: 600;

			span {
				font-size: 12.5vw;
				/* letter-spacing: 0.5vw; */
				font-weight: 400;
			}
		}

		&.noEffect {
			position: relative;

			grid-column: 1 / span 4;
			margin-left: 35%;
			/* grid-column: 2; */
			grid-row: 1;

			justify-self: start;

			color: rgba(0, 0, 0, 1);

			z-index: 1;
		}

		&.maskEffect {
			grid-column: 1 / span 4;
			margin-left: 35%;
			/* grid-column: 2; */
			grid-row: 1;

			justify-self: start;

			color: rgba(255, 255, 255, 1);

			mix-blend-mode: overlay;

			z-index: 99;
		}

		&.BelieveParagraph {
			grid-area: paragraph;
			grid-row: 2;
			justify-self: center;
			width: 100%;
			padding-inline: 5vw;
			margin-block: 2vw;

			p {
				/* margin-top: 4em; */
				color: rgba(0, 0, 0, 0.55);
				font-weight: 400;
				font-family: 'neue-haas-grotesk-display';
				font-size: 1.45vw;
				letter-spacing: 0;
				line-height: 2rem;
				width: 75%;
				/* z-index: 10; */
			}
		}

		&.links {
			display: grid;
			grid-template-columns: max-content 1fr;
			grid-auto-rows: min-content;
			align-items: center;

			row-gap: 2vw;
			column-gap: 2vw;

			grid-area: links;
			padding-inline: 5vw;
			font-family: 'neue-haas-grotesk-display';
			width: 100%;
			margin-block: 2vw;

			a {
				text-decoration: none;
				font-size: 1.45vw;
				color: #070707;
			}
		}

		&.image {
			grid-area: image;
			grid-row: 1 / span 4;
			justify-self: start;
			z-index: 2;
			width: 100%;
			margin: auto;
		}

		/* &.noEffect {
				position: relative;
				color: rgba(0, 0, 0, 1);

				z-index: 1;
				opacity: 0;
			}
			&.maskEffect {
				top: 0;
				left: 0;
				color: red;
				color: rgba(255, 255, 255, 1);
				mix-blend-mode: overlay;
				z-index: 3;
				opacity: 0;
			} */
	}
`;

const StyledLinkContainer = styled.div`
	display: flex;

	align-items: center;
	justify-content: flex-start;
	grid-template-columns: minmax(5em, 40%) 1fr;
	margin-top: 2em;

	cursor: pointer;
	// outline: 3px dotted teal;
`;

const StyledArrowImage = styled(Image)`
	cursor: pointer;
`;

const MinistrySection = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 1fr max-content 1fr;
	grid-template-areas: '. heading .';
	margin-block: 5vw;

	div {
		&.ministry {
			grid-area: heading;
		}
		h2 {
			font-weight: 600;

			font-size: 10vw;
			text-align: left;
		}
		span {
			font-weight: 400;
			font-size: 12.5vw;
		}
	}
`;

const PartnersLogos = styled.div`
	display: grid;
	grid-template-columns: 0.5fr repeat(4, 1fr) 0.5fr;
	grid-template-areas: '. arc city convoy onehope .';
	column-gap: 2vw;
	margin-block: 2.5vw;

	div {
		align-self: center;
		justify-self: center;

		&.arc {
			grid-area: arc;
		}
		&.city {
			grid-area: city;
		}
		&.convoy {
			grid-area: convoy;
		}
		&.onehope {
			grid-area: onehope;
		}
	}
`;

const StyledPartnerImage = styled(Image)``;

const ComeVisitButton = styled.div`
	display: grid;
	grid-template-columns: 0.5fr 2fr 0.5fr;
	grid-template-areas: '. button .';

	div {
		grid-area: button;

		display: grid;
		grid-template-columns: 1fr min-content;

		cursor: pointer;

		&.comeVisitButton {
			width: 100%;
			padding: 2vw;
			outline: 2.5px solid #070707;
			align-items: center;
			margin-block: 15vw;
		}

		h2 {
			place-items: center;
			justify-content: center;
			font-size: 5vw;
			width: 100%;
		}
	}
`;

export default function About() {
	return (
		<>
			<Grid>
				<VideoSection>
					<div>
						<iframe
							className='iframeContainer'
							src='https://player.vimeo.com/video/690554345?h=da3c6ace3a&controls=1&badge=0&autoplay=0&muted=1&loop=1&autopause=0&player_id=0&app_id=58479'
							frameBorder='0'
							width='1280'
							height='720'
							placeholder='blur'
							priority='true'
						></iframe>
					</div>
				</VideoSection>

				<HeaderSection>
					<div className='meetOurPastors'>
						<h2>
							MEET OUR <br />
							<span>PASTORS</span>
						</h2>
					</div>

					<div className='paragraphGrid'>
						<p>
							Pastors Tim and Jen Timberlake serve as the Senior Pastors of
							Celebration Church. Their heart is for God’s people and equipping
							them with the tools to transform their lives from the inside out.
							They are both gifted communicators and teachers who have the
							ability to touch and impact people from various walks of life
							through the Gospel of Jesus. Both Pastors Tim and Jen feel most
							alive when they are pouring back into others, and they seek to
							glorify God through their lives and family.
						</p>
					</div>
				</HeaderSection>

				<BelieveSection>
					<div className='gridContainer'>
						<div className='maskEffect'>
							<h2>
								WHAT WE <br />
								<span className='StyledHeadingSpan'>BELIEVE</span>
							</h2>
						</div>
						<div className='image'>
							<Image src={baptism} layout='intrinsic' alt='baptism' />
						</div>
						<div className='noEffect'>
							<h2>
								WHAT WE <br />
								<span className='StyledHeadingSpan'>BELIEVE</span>
							</h2>
						</div>
						<div className='BelieveParagraph'>
							<p>
								At Celebration Church, we stand firm in the ways of Christ, the
								values of the kingdom of God, and the teachings of the Bible. As
								such, we acknowledge scripture as the inspired word of God,
								written through humanity, to provide a worldview through a
								relationship in which the church can function as an expression
								of the kingdom.
								<br />
								<br />
								Click the link below to access the specifics of what we believe
								at Celebration Church as it relates to topics such as the
								trinity, Jesus, the Bible, and our role as the church.
							</p>
						</div>
						<div className='links'>
							<Link href='/read-more' passHref>
								<a>READ MORE</a>
							</Link>
							<Link href='/read-more' passHref>
								<StyledArrowImage
									src={arrow}
									width={102}
									height={42}
									layout='fixed'
									alt='arrow-button'
								/>
							</Link>
							<Link href='/follow-jesus' passHref>
								<a>FOLLOW JESUS</a>
							</Link>
							<Link href='/follow-jesus' passHref>
								<StyledArrowImage
									src={arrow}
									width={102}
									height={42}
									layout='fixed'
									alt='arrow-button'
								/>
							</Link>
						</div>
					</div>
				</BelieveSection>
				<MinistrySection>
					<div className='ministry'>
						<h2>
							OUR MINISTRY
							<br />
							<span>PARTNERS</span>
						</h2>
					</div>
				</MinistrySection>
				<PartnersLogos>
					<div className='arc'>
						<StyledPartnerImage src={Arc} alt='follow-jesus-arrow' />
					</div>
					<div className='city'>
						<StyledPartnerImage src={City} alt='follow-jesus-arrow' />
					</div>
					<div className='convoy'>
						<StyledPartnerImage src={Convoy} alt='follow-jesus-arrow' />
					</div>
					<div className='onehope'>
						<StyledPartnerImage src={OneHope} alt='follow-jesus-arrow' />
					</div>
				</PartnersLogos>
				<ComeVisitButton>
					<div className={'comeVisitButton'}>
						<Link href={'/visit'}>
							<h2>COME VISIT US</h2>
						</Link>

						<Link href={'/visit'}>
							<StyledArrowImage
								src={longArrow}
								width={483}
								height={42}
								layout='fixed'
								alt='arrow-button'
							/>
						</Link>
					</div>
				</ComeVisitButton>
			</Grid>
		</>
	);
}
