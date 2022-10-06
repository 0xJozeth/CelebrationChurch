import { redirect } from 'next/dist/server/api-utils';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import MeetPastors from '/public/MeetPastors.png';
import arrow from '/public/link-arrow.svg';
import Arc from '/public/partner-ARC.png';
import City from '/public/partner-city-for-the-nations.png';
import Convoy from '/public/partner-convoy-of-hope.png';
import OneHope from '/public/partner-one-hope.png';

import baptism from '/public/baptism.png';

const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, auto-fit);
	grid-auto-rows: min-content;
	width: 100vw;
	background: salmon;
	justify-content: center;

	/* position: relative; */
	/* place-items: center;	 */
	/* justify-self: center; */
	/* justify-self: center; */
	/* justify-items: center; */
`;

const Hero = styled.div`
	justify-self: center;
	margin: 0;
	padding: 0;
	/* align-items: center; */
	margin: 2em;
	padding: 2em;
	/* grid-template-rows: auto 1fr auto; */
`;

const Heading = styled.div`
	// // outline: 3px dotted teal;
	display: grid;
	color: #070707;

	font-size: 8vw;
	font-weight: 900;
	font-family: 'neue-haas-grotesk-text', sans-serif;
	line-height: 1.1em;
	width: 100%;
	margin-top: 0.25em;
	place-items: center;
`;

const HeadingGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const StyledHeadingSpan = styled.div`
	font-family: 'kepler-std-display', serif;
	font-style: italic;
	font-size: 8vw;
	font-weight: 500;
	justify-content: center;
`;

const MaskContainer = styled.div`
	position: relative;
	display: flex;

	color: rgba(255, 255, 255, 1);

	flex-direction: column;
	// flex: 1;
	// justify-content: space-between;
	// align-items: center;
	// height: 1280px;
	width: auto;

	// margin-top: 5rem;
	// margin-bottom: 10rem;
	margin-left: -8em;
	// padding-inline: 1rem;
	font-family: 'neue-haas-grotesk-display';
	font-weight: 800;
	// font-size: 8em;
	// line-height: 12.5rem;
	// letter-spacing: -0.75rem;
	// outline: 5px solid blue;
	z-index: 0;

	// @media screeen and (max-width: 768px) {
	// 	font-size: 3rem;
	// 	display: none;
	// 	transition: 0.8s all ease;
	// }
`;

const MaskChild = styled.div`
	position: relative;
	flex-direction: column;
	// display: inline-flex;
	// width: 100%;
	z-index: -30;
	color: rgba(0, 0, 0, 1);

	// SVG IMPORT PROPERTIES
	// font-size: 256px;
	// font-family: NHaasGroteskDSPro-75Bd, Neue Haas Grotesk Display Pro;
`;

const MaskChildEffect = styled.div`
	position: absolute;
	display: inline-flex;
	top: 0px;
	left: -500px;
	width: 100%;
	opacity: 1;
	color: rgba(255, 255, 255, 1);
	mix-blend-mode: overlay;
	z-index: 30;
	pointer-events: none;

	// SVG IMPORT PROPERTIES
	// font-size: 256px;
	// font-family: NHaasGroteskDSPro-75Bd, Neue Haas Grotesk Display Pro;
`;

const MaskSpan = styled.span`
	display: inline-flex;

	font-family: 'kepler-std-display', serif;
	font-style: italic;
	font-weight: 500;
`;

const StyledImage = styled(Image)`
	display: flex;
	justify-content: center;
	place-items: center;
	// width: clamp(1);
`;

const StyledParagraph = styled.div`
	margin-top: 4em;

	color: rgba(0, 0, 0, 0.55);
	font-weight: 400;
	font-family: 'neue-haas-grotesk-display';
	font-size: 1.45vw;
	letter-spacing: 0;
	line-height: 2rem;
	width: 50%;
	z-index: 10;
`;
const StyledParagraphBelieve = styled.div`
	margin-top: 4em;

	color: rgba(0, 0, 0, 0.55);
	font-weight: 400;
	font-family: 'neue-haas-grotesk-display';
	font-size: 1.45vw;
	letter-spacing: 0;
	line-height: 2rem;
	width: 60%;
	z-index: 10;
`;

const StyledSection = styled.div`
	display: grid;
	grid-template-columns: minmax(150px, 25%) 2fr;

	margin-top: 2em;

	${(props) =>
		props.red &&
		css`
			color: red;
		`}
`;

const StyledContainerLeft = styled.div`
	background: salmon;
`;

const StyledContainerRight = styled.div`
	background: teal;
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	place-items: center;
`;

const BelieveSection = styled.div`
	position: relative;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-columns: minmax(15em, 40%) 1fr;
`;

const BelieveMedia = styled.div`
	position: relative;

	z-index: 0;
`;

const BelieveText = styled.div``;

const HeadingAbsolute = styled.div`
	/* position: relative; */
	/* position: absolute; // 💫 */
	/* top: -0em; */
	/* left: 4.5em; */
	/* z-index: 0; */

	div {
		h2 {
			font-family: 'neue-haas-grotesk-display';
			font-weight: 500;
			font-size: 8vw;
			&.noEffect {
				position: relative;
				/* color: rgba(0, 0, 0, 1); */
				color: red;
				z-index: 1;
				opacity: 0;
			}
			&.maskEffect {
				position: absolute;
				top: 0;
				left: 0;
				color: red;
				/* color: rgba(255, 255, 255, 1); */
				mix-blend-mode: overlay;
				z-index: 3;
				opacity: 0;
			}
			&.StyledHeadingSpan {
				font-family: 'kepler-std-display', serif;
				font-style: italic;
				font-size: 8vw;
				font-weight: 500;
				justify-content: center;
			}
		}
		&.image {
		}
		&.StyledParagraphBelieve {
			margin-top: 4em;

			color: rgba(0, 0, 0, 0.55);
			font-weight: 400;
			font-family: 'neue-haas-grotesk-display';
			font-size: 1.45vw;
			letter-spacing: 0;
			line-height: 2rem;
			width: 50%;
			z-index: 10;
		}
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
const LinkButtonText = styled.div`
	// display: flex;
	// justify-content: flex-end;
	font-family: 'neue-haas-grotesk-display';
	color: #000;
	font-weight: 600;
	// font-size: 2rem;
	// margin-inline: 2rem;
	// outline: 3px dotted salmon;
`;
const ArrowBtn = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 15%;
	// outline: 3px dotted orange;
	margin-inline: 2em;
`;

const OurMinistrySection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	margin-top: 5em;
`;

const PartnersWrapper = styled.div`
	display: flex;
	margin-top: 5em;
`;

const PartnersGrid = styled.div`
	display: grid;
	column-gap: 10vw;
	grid-template-columns: repeat(4, 1fr);
	justify-content: space-around;
	align-items: center;
	width: 80%;

	// margin-inline: 5em;
	// margin-top: 5em;
	// margin-bottom: 15em;
	margin: 10em;
	padding: 10em;

	// outline: 3px dotted teal;
`;

const StyledPartnerImage = styled.div`
	// display: flex;
	height: 115px;
	width: 216px;
`;

const StyledVideoContainer = styled.div`
	/* background: #070707; */
	padding-top: 0.2em;
	padding-inline: 0.2em;
	// box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.085);
	outline: 0.5em solid rgba(0, 0, 0, 1);
`;

const ComeVisitSection = styled.div`
	display: grid;
	// grid-template-columns: minmax(150px, 95%) 1fr;

	place-items: center;

	width: 100vw;

	// margin-top: 15em;

	padding-bottom: 15em;
	// outline: 3px dotted teal;
`;

const ComeVisitButton = styled.div`
	display: flex;

	// margin: 3em;
	padding: 2.5em 5em;
	width: 80%;

	cursor: pointer;

	outline: 2px solid #070707;
`;

const ComeVisitText = styled.div`
	font-family: 'neue-haas-grotesk-display';
	font-weight: 400;
	font-size: 2.5vw;
	// width: 100%;
	padding-inline: 7.5em;
	// outline: 3px dotted teal;
`;

export default function About() {
	return (
		<>
			<Grid>
				<Hero>
					<StyledVideoContainer>
						<iframe
							src='https://player.vimeo.com/video/690554345?h=da3c6ace3a&controls=1&badge=0&autoplay=0&muted=1&loop=1&autopause=0&player_id=0&app_id=58479'
							frameBorder='0'
							width='1280'
							height='720'
							placeholder='blur'
							priority='true'
						></iframe>
					</StyledVideoContainer>
				</Hero>
				<TextWrapper>
					<Heading>
						MEET OUR <StyledHeadingSpan>PASTORS</StyledHeadingSpan>
					</Heading>
					<StyledParagraph>
						Pastors Tim and Jen Timberlake serve as the Senior Pastors of
						Celebration Church. Their heart is for God’s people and equipping
						them with the tools to transform their lives from the inside out.
						They are both gifted communicators and teachers who have the ability
						to touch and impact people from various walks of life through the
						Gospel of Jesus. Both Pastors Tim and Jen feel most alive when they
						are pouring back into others, and they seek to glorify God through
						their lives and family.
					</StyledParagraph>
				</TextWrapper>
				{/* <BelieveSection> */}
				{/* <Heading> */}
				<HeadingGrid>
					<div className='noEffect'>
						<h2 className='StyledHeadingSpan'>
							BELIEVE WHAT WE <br />
						</h2>
					</div>
					<div className='maskEffect'>
						<h2>
							WHAT WE <br />
							<h2 className='StyledHeadingSpan'>BELIEVE</h2>
						</h2>
					</div>
					<div className='image'>
						<StyledImage src={baptism} alt='baptism' />
					</div>
					<div className='StyledParagraphBelieve'>
						At Celebration Church, we stand firm in the ways of Christ, the
						values of the kingdom of God, and the teachings of the Bible. As
						such, we acknowledge scripture as the inspired word of God, written
						through humanity, to provide a worldview through a relationship in
						which the church can function as an expression of the kingdom.
						<br />
						<br />
						Click the link below to access the specifics of what we believe at
						Celebration Church as it relates to topics such as the trinity,
						Jesus, the Bible, and our role as the church.
					</div>
					<StyledLinkContainer>
						<Link href='/believe' passHref>
							<LinkButtonText>
								<a>READ MORE</a>
							</LinkButtonText>
						</Link>
						<ArrowBtn>
							<Image src={arrow} alt='believe-arrow' />
						</ArrowBtn>
					</StyledLinkContainer>
					<StyledLinkContainer>
						<Link href='/follow' passHref>
							<LinkButtonText>
								<a>FOLLOW JESUS</a>
							</LinkButtonText>
						</Link>
						<ArrowBtn>
							<Image src={arrow} alt='follow-jesus-arrow' />
						</ArrowBtn>
					</StyledLinkContainer>
				</HeadingGrid>
				{/* </Heading> */}
				{/* </BelieveSection> */}
				{/* <OurMinistrySection>
					<Heading>
						OUR MINISTRY
						<StyledHeadingSpan>PARTNERS</StyledHeadingSpan>
					</Heading>
				</OurMinistrySection> */}

				{/* <PartnersWrapper> */}
				<PartnersGrid>
					<StyledPartnerImage>
						<Image src={Arc} alt='follow-jesus-arrow' />
					</StyledPartnerImage>
					<StyledPartnerImage>
						<Image src={City} alt='follow-jesus-arrow' />
					</StyledPartnerImage>
					<StyledPartnerImage>
						<Image src={Convoy} alt='follow-jesus-arrow' />
					</StyledPartnerImage>
					<StyledPartnerImage>
						<Image src={OneHope} alt='follow-jesus-arrow' />
					</StyledPartnerImage>
				</PartnersGrid>
				{/* </PartnersWrapper> */}
				<ComeVisitSection>
					<ComeVisitButton>
						<ComeVisitText>
							<h2>COME VISIT US</h2>
						</ComeVisitText>
						<ArrowBtn>
							<Image src={arrow} alt='follow-jesus-arrow' />
						</ArrowBtn>
					</ComeVisitButton>
				</ComeVisitSection>
			</Grid>
		</>
	);
}
