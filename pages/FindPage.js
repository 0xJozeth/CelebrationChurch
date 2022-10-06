import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import VideoPlaceholder from '/public/home-page-video-2@1x.png';
import Image from 'next/image';
import arrow from '/public/link-arrow.svg';
import { Container } from '/components/Styles/Container.styled.js';
import GroupImage from '/public/microsoftteams-image@1x.png';

// NEW COMPONENTS //

const StyledSection = styled.div`
	display: flex;
	justify-content: center;
	margin: 0;
	padding: 0;
	margin-top: 15em;
	// position: absolute;
	// align-items: center;
	// padding: 0.5rem;
	// outline: 5px solid green;
`;

const StyledContainer = styled.div`
	position: relative;
	display: flex;
	flex: 1 1 0%;
	justify-content: center;
	width: 100%;
	height: 100%;
	// padding-inline: 2rem;
	z-index: 2;

	// overflow: hidden;

	// margin-inline: 2rem;
	// margin-inline: auto;
	// margin-top: 2rem;
	// margin-bottom: 2rem;
	// background: salmon;
	// outline: 5px dotted black;
`;

const MaskContainer = styled.div`
	position: relative;
	display: flex;

	color: rgba(255, 255, 255, 1);

	flex-direction: column;
	// flex: 1;
	justify-content: space-between;
	align-items: center;
	height: 1280px;
	width: auto;

	margin-top: 5rem;
	margin-bottom: 10rem;
	margin-right: -42rem;
	// padding-inline: 1rem;
	font-family: 'neue-haas-grotesk-display';
	font-weight: 800;
	font-size: 6.5em;
	line-height: 8.5rem;
	letter-spacing: -0.75rem;
	// outline: 5px solid blue;
	z-index: 2;

	@media screeen and (max-width: 768px) {
		font-size: 5em;
		display: none;
		transition: 0.8s all ease;
	}
`;

const MaskChild = styled.div`
	position: relative;
	display: inline-flex;
	width: 100%;
	z-index: -30;
	color: rgba(0, 0, 0, 1);
`;

const MaskChildEffect = styled.div`
	position: absolute;
	display: inline-flex;
	top: 0px;
	left: 0px;
	width: 100%;
	opacity: 1;
	color: rgba(255, 255, 255, 1);
	mix-blend-mode: overlay;
	z-index: 30;
	pointer-events: none;
	mix-blend-mode: overlay;
`;
const MaskSpan = styled.span`
	display: inline-flex;

	font-family: 'kepler-std-display', serif;
	font-style: italic;
	font-weight: 400;
	line-height: 1em;
	font-size: 1.15em;
`;

const FlexWrapper = styled.div`
display: flex
justify-content: center;
align-items: center;
`;

const StyledParagraph2 = styled.div`
	// color: #000;
	// padding-inline-end: 10px;
	// margin-top: 5rem;
	// margin-bottom: 5rem;
	position: absolute;
	top: 50rem;
	left: 2rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-inline: 2rem;
	padding-inline: 2rem;

	color: rgba(0, 0, 0, 0.55);
	font-weight: 500;
	font-family: 'neue-haas-grotesk-display';
	font-style: italic;
	font-size: 1.75rem;
	letter-spacing: 0;
	line-height: 2rem;
	min-width: 20%;
	width: 35%;
	z-index: 10;
	// outline: 5px dotted yellow;
`;

const HeaderLinkContainer2 = styled.div`
	// outline: 5px solid red;
	position: absolute;
	left: 15rem;
	top: -15rem;
	display: flex;
	width: 85%;
	height: 3rem;
	margin: auto;
	padding-inline: 0.25em;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	margin-bottom: 2rem;
	margin-top: 4rem;
	// outline: 5px dotted teal;
`;

const LinkButtonText2 = styled.div`
	display: flex;
	justify-content: flex-end;
	font-family: 'neue-haas-grotesk-display';
	color: #000;
	font-weight: 500;
	font-size: 2rem;
	line-height: 100%;
	text-decoration: none;
	margin-left: 1em;
`;

const ArrowBtn2 = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	width: 25%;
	// outline: 5px solid plum;
`;

const VideoWrapper2 = styled.div`
	// oveflow: hidden;
	// display: flex;
	// justify-content: flex-end;
	// outline: 5px solid plum;
`;

const StyledVideoContainer = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	// flex: 1;
	// align-items: center;
	height: 844px;
	width: 844px;

	bottom: 3.2em;
	right: 8.35em;
	// margin-top: 8rem;
	margin-bottom: 8rem;
	z-index: 0;
	overflow: hidden;
	// outline: 5px solid teal;

	// inset: 0px;
	// box-sizing: border-box;
	// padding: 0px;
	// border: none;
	// margin: auto;
	// display: block;
	// width: 0px;
	// height: 0px;
	// min-width: 100%;
	// max-width: 100%;
	// min-height: 100%;
	// max-height: 100%;
	// object-fit: cover;
`;

const VideoContainer = styled.div`
	// height: auto;
	// width: 33vw;
	// height: 100vw;
	// filter: invert(0);
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: 100%;
	// outline: 10px dotted purple;
`;

export default function FindALocation() {
	return (
		<>
			{/* HERO SECTION START */}
			<StyledSection>
				{/* FLEX CONTAINER START */}
				<StyledContainer>
					<MaskContainer>
						<MaskChild>
							<h1>
								FIND A <br />
								<MaskSpan>LOCATION</MaskSpan>
								<br /> NEAR YOU
							</h1>
						</MaskChild>
						<MaskChildEffect>
							<h1>
								FIND A <br />
								<MaskSpan>LOCATION</MaskSpan>
								<br /> NEAR YOU
							</h1>
						</MaskChildEffect>
						{/* </MaskContainer> */}
						<StyledParagraph2>
							<HeaderLinkContainer2>
								<Link href='/visit' passHref>
									<LinkButtonText2>
										<a>COME VISIT US</a>
									</LinkButtonText2>
								</Link>
								<ArrowBtn2>
									<Image
										src={arrow}
										// width={100}
										// height={25}
										alt='watch-the-latest-message-arrow'
									/>
								</ArrowBtn2>
							</HeaderLinkContainer2>
						</StyledParagraph2>
						<StyledVideoContainer>
							<Image src={GroupImage} width={844} height={698} alt='' />
						</StyledVideoContainer>
					</MaskContainer>
				</StyledContainer>
				{/* FLEX CONTAINER END */}
			</StyledSection>
			{/* HERO SECTION END */}
		</>
	);
}
