import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import arrow from '/public/arrow@1x-white.svg';
import darkArrowRight from '/public/darkArrowRight.svg';
import arrowdown from '/public/arrow-down.svg';
import leftnav from '/public/navleft.svg';
import rightnav from '/public/navleft.svg';
import media from '/public/yourimpact.png';
import navigation from '/public/navigationbar-demo.svg';
import legacy from '/public/give-legacy.png';
import { SiBitcoin } from 'react-icons/si';
// import { FaPiggyBank, FaTicketAlt } from 'react-icons/Fa';
import { MdOutlinePhoneAndroid } from 'react-icons/md';

import { motion } from 'framer-motion';
import GiveHero from '/public/give-hero.png';
import HaveQuestionsComponent from './give2';

import longArrow from '/public/arrow-long.svg';

const Grid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 1fr;

	grid-template-rows: repeat(8, minmax(auto-fit, 1fr));

	h1,
	h2 {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 600;
		font-size: 12.5vw;
		text-align: left;
	}

	h3 {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 600;
		font-size: 2.75vw;
		text-align: left;
	}

	span {
		font-family: 'kepler-std-display', serif;
		font-size: 13.5vw;
		font-weight: 400;
		font-style: italic;
	}

	p {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 400;
		font-size: clamp(1.25rem, 1.5vw, 1.75vw);
		line-height: clamp(2rem, 1.5rem, 1.75rem);
		text-align: center;
		line-height: 2vw;
	}

	a {
		font-family: 'neue-haas-grotesk-display';
		font-weight: 400;
		font-size: 1.75vw;
	}
`;

const WeLoveSection = styled.div`
	/* width: 100%; */
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: max-content 1fr;
	grid-template-areas: 'text image' 'text button';
	column-gap: 5vw;

	div {
		margin-block: 2vw;
		&.heading {
			position: relative;
			grid-column: text / span image;
			grid-row: 1;
			justify-self: start;

			margin-left: 5vw;
		}

		&.image {
			display: grid;
			grid-template-columns: 1fr;

			position: relative;

			grid-column: image;
			grid-row: image;
			justify-self: end;
			margin-top: 10vw;

			z-index: 1;
		}

		&.buttonContainer {
			//positioning//
			position: absolute;
			bottom: 0;
			right: 0;

			display: grid;
			grid-template-columns: 2fr 1fr;
			grid-template-areas: 'text arrow';

			grid-column: image;
			grid-row: 1;

			/* height: min-content; */
			/* margin-bottom: 7.5vw; */

			align-self: end;
			justify-self: end;

			margin-right: 2.5vw;
			margin-bottom: 2.5vw;

			/* outline: 3px solid #f8f8f8;
			*/
			border: 0.2vw solid #f8f8f8;
			padding: 0.5vw 2vw 0.5vw 2vw;

			align-self: center;

			transform: scale(0.5);

			z-index: 100;

			a {
				font-family: 'neue-haas-grotesk-display';
				color: #f8f8f8;
				font-size: 3vw;
			}
		}

		&.givenowText {
			grid-area: text;
			align-self: center;
		}

		&.arrowGrid {
			grid-area: arrow;
			align-self: center;
			padding: 0.5vw;
		}

		/* h1 {
			font-family: 'neue-haas-grotesk-display';
			font-weight: 600;
			font-size: 12.5vw;
			text-align: left;
		} */

		&.noEffect {
			width: max-content;
		}

		&.maskEffect {
			position: absolute;
			width: max-content;

			top: 0;
			left: 0;
			color: rgba(255, 255, 255, 1);
			mix-blend-mode: overlay;

			z-index: 99;
		}
	}
`;

const StyledArrowImage = styled(Image)`
	cursor: pointer;
	color: hsl(0, 0%, 97%);
`;

// const GiveWrapper = styled.div`
// 	display: grid;
// 	place-items: center;
// 	margin: 0 0 15em 0;
// `;

const StyledImage = styled(Image)`
	display: grid;
	width: 50%;
`;

// const HeroWrapper = styled.div`
// 	display: grid;
// 	// grid-template-columns: minmax(150px, 50%) 1fr;
// 	// grid-template-columns: 2fr 1fr;
// 	margin-top: 5em;
// 	margin-bottom: 5em;
// 	margin-left: -20em;
// 	// outline: 3px dotted teal;
// `;

// const MaskContainer = styled.div`
// 	position: relative;

// 	display: grid;
// 	grid-column: span 1;
// 	// justify-self: start;

// 	font-family: 'neue-haas-grotesk-display';
// 	font-weight: 800;
// 	font-size: 12em;
// 	line-height: 12rem;
// `;

// const MaskChild = styled.div`
// 	position: relative;
// 	// display: grid;
// 	// place-self: end;
// 	// justify-items: stretch;
// `;

// const MaskChildEffect = styled.div`
// 	position: absolute;
// 	// display: inline-flex;
// 	top: 0px;
// 	left: 0px;
// 	// width: 100%;
// 	opacity: 1;
// 	color: rgba(255, 255, 255, 1);
// 	mix-blend-mode: overlay;
// 	z-index: 30;
// 	pointer-events: none;
// `;

// const MaskSpan = styled.span`
// 	// display: inline-flex;

// 	font-family: 'kepler-std-display', serif;
// 	font-style: italic;
// 	font-weight: 500;
// 	font-size: 1.15em;
// 	padding-inline: 0.15em;
// `;

// const StyledVideoContainer = styled.div`
// 	position: absolute;

// 	padding-right: 5em;

// 	top: 20em;
// 	left: 32.5em;

// 	display: grid; // 💫
// 	justify-self: end; // 💫
// 	place-items: center; // 💫
// `;

// const GiveNowButton = styled.button`
// 	position: absolute;
// 	display: flex;
// 	align-items: center;
// 	color: #f8f8f8;
// 	font-size: 3em;
// 	top: 8em;
// 	right: 5em;
// 	border-radius: 5px;
// 	padding: 0.5em 2em 0.5em 2em;
// 	z-index: 50;
// 	background: transparent;
// 	font-family: 'neue-haas-grotesk-display';

// 	outline: 2px solid #f8f8f8;
// 	border: none;
// `;

const WhyWeGiveSection = styled.div`
	display: grid;

	grid-template-columns: 1fr;
	grid-template-rows: min-content repeat(2, 1fr);
	grid-template-areas: 'headingArea' 'paragraphArea' 'buttonArea';
	margin-inline: 5vw;

	div {
		&.heading {
			grid-area: headingArea;
			text-align: center;
			justify-self: center;
			margin-block: 3vw;
		}
		&.paragraph {
			grid-area: paragraphArea;
			margin-block: 1.5vw;
			margin-inline: 3vw;
		}

		&.button {
			display: grid;
			grid-area: buttonArea;
			grid-template-columns: repeat(5, 1fr);
			grid-template-areas: '. . button . .';
			margin-block: 1.5vw;
			button {
				border: none;
				background-color: rgba(0, 0, 0, 0);
			}
			a {
			}
		}
		&.learnMore {
			grid-area: button;

			justify-self: center;
		}
	}
`;

// const WhyWeGiveHeading = styled.div``;

// const WhyWeGiveTextSection = styled.div``;

// const StyledParagraph = styled.div`
// 	color: rgba(0, 0, 0, 0.55);

// 	align-items: center;
// 	margin-top: 1.5em;
// 	margin-inline: 2em;
// 	padding-inline: 6em;

// 	font-weight: 500;
// 	font-family: 'neue-haas-grotesk-display';
// 	font-style: italic;
// 	font-size: 1.75rem;
// 	letter-spacing: 0;
// 	line-height: 2rem;
// `;

// const LegacyStyledParagraph = styled.div`
// 	display: grid;
// 	// align-self: start;
// 	color: rgba(0, 0, 0, 0.55);

// 	// align-items: center;
// 	// margin-top: 1.5em;
// 	// margin-left: 0em;
// 	margin-right: 20em;
// 	// padding-inline: 12em;

// 	font-weight: 500;
// 	font-family: 'neue-haas-grotesk-display';
// 	font-style: italic;
// 	font-size: 1.75rem;
// 	letter-spacing: 0;
// 	line-height: 2rem;

// 	width: 40%;

// 	// outline: 3px dotted teal;
// `;

// const LinkButtonText = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;

// 	text-decoration: none;
// 	align-items: center;

// 	font-family: 'neue-haas-grotesk-display';
// 	font-weight: 400;
// 	font-size: 0.15em;
// 	// width: 100%;
// 	// max-width: 10em;
// 	// margin-inline: 2rem;
// 	// // outline: 3px dotted teal;
// `;

// const ArrowBtnRotate = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	margin-top: -2.5em;
// 	transform: rotate(-270deg) scale(0.5);
// 	// // outline: 3px dotted salmon;
// 	max-width: 2.5em;
// `;

const YourImpactSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-areas: 'heading' 'slide' 'navigation';
	margin-inline: 2.5vw;

	div {
		justify-self: center;

		&.heading {
			grid-area: heading;
			justify-self: center;
		}

		&.slider {
			grid-area: slide;
			justify-self: center;

			display: grid;
			grid-template-columns: 0.05fr 1fr 1fr 0.05fr;
			column-gap: 2vw;
			grid-template-areas: 'leftnav media text rightnav';
			margin-block: 2.5vw;
			margin-inline: 2.5vw;

			div {
				&.leftnav {
					grid-area: leftnav;
					align-self: center;
					/* margin-right: 1.5vw; */
					width: 100%;
				}

				&.media {
					grid-area: media;
				}
				&.text {
					display: grid;
					grid-template-columns: 1fr;
					grid-auto-rows: min-content;
					grid-area: text;

					h3 {
						margin-inline: 3vw;
					}

					p {
						margin-block: 3vw;
						margin-inline: 3vw;
						text-align: left;
					}
				}
				&.rightnav {
					/* padding-inline: 1vw; */
					grid-area: rightnav;
					transform: rotate(180deg);
					align-self: center;
					/* margin-left: 1.5vw; */
					width: 100%;
				}
			}
		}

		&.navigation {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-template-areas: '. . button . .';
			margin-block: 1.5vw;
			justify-self: center;
			grid-area: navigation;
			column-gap: 5vw;

			div {
				&.button {
					grid-area: button;
				}
			}
		}
	}
`;

// const YourImpactHeading = styled.div``;

const OnlineGivingSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	margin-block: 3vw;
	margin-inline: 3vw;

	div {
		&.heading {
			display: grid;
			grid-template-columns: 1fr;
			margin-block: 3vw;
			justify-self: center;
		}

		&.ul {
			display: grid;
			margin-block: 3vw;
			grid-template-columns: max-content;
			justify-self: center;
		}

		&.givingLink {
			display: grid;
			grid-template-columns: 1fr min-content;
			grid-template-areas: 'text arrow';
			column-gap: 1.5vw;
			margin-inline: 3vw;
			justify-self: center;
			align-items: center;
			/* position: relative; */

			&.text {
				grid-area: text;
			}

			button {
				border: none;
				background-color: rgba(0, 0, 0, 0);
				font-family: 'neue-haas-grotesk-display';

				cursor: pointer;

				a {
					font-size: 2.5vw;
				}
			}
		}

		&.arrowImage {
			grid-area: arrow;
			/* position: relative; */
			/* position: relative; */
		}

		ul {
			justify-content: center;
			font-family: 'neue-haas-grotesk-display';
			font-weight: 400;
			font-size: 5vw;

			li {
				margin-block: 2.5vw;
			}
		}
	}
`;

// const OnlineGivingHeading = styled.div``;

// const SelectLocationSection = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	padding: 2em;
// 	// // outline: 3px dotted red;
// 	width: 100vw;

// 	font-family: 'neue-haas-grotesk-display';
// 	font-weight: 800;
// 	font-size: 4rem;
// 	line-height: 8rem;
// `;

// const LocationAccordian = styled.div`
// 	// // outline: 3px dotted blue;
// `;

// const Styledul = styled.div`
// 	text-decoration: none;
// 	font-weight: 600;
// `;

// const Styledli = styled.div`
// 	text-decoration: none;
// 	font-weight: 400;
// 	font-size: 1.25em;
// 	line-height: 1em;
// 	height: auto;

// 	cursor: pointer;
// 	margin: 0.5em 0 0.5em 0;
// 	// outline: 3px dotted teal;
// `;

const OtherWaysToGiveSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content;
	margin-block: 3vw;
	margin-inline: 3vw;

	div {
		&.heading {
			display: grid;
			grid-template-columns: 1fr;
			margin-block: 3vw;
			justify-self: center;
		}

		&.iconText {
			margin-block: 1.5vw;
			justify-self: center;
			h3 {
				font-weight: 600;
				font-size: 3vw;
			}
		}

		&.giveIcons {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(2, 1fr);

			column-gap: 3vw;
			row-gap: 3vw;
			place-self: center;

			div {
				&.iconBg {
					background-color: #070707;
					border-radius: 8vw;
					justify-self: center;
				}

				&.iconWrapper {
					display: grid;
					place-self: center;
					font-size: 12.5vw;
					margin: 2vw;

					filter: invert(1);
				}
			}
		}

		&.ul {
			display: grid;
			margin-block: 3vw;
			grid-template-columns: max-content;
			justify-self: center;
		}
	}
`;

// const OtherWaysToGiveHeading = styled.div``;

// const OtherWaysIconsSection = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	width: 100%;
// 	place-items: center;

// 	margin-top: 0.5em;
// 	margin-top: 0.5em;
// 	filter: invert(1);
// `;

// const IconsBg = styled.div`
// 	position: relative;
// 	display: flex;
// 	flex-direction: column;
// 	background-color: #f8f8f8;
// 	border-radius: 1em;
// 	padding: 0.15em;

// 	font-family: 'neue-haas-grotesk-display';
// 	font-weight: 400;
// 	font-size: 1em;

// 	// z-index: ;
// 	// outline: 3px dotted salmon;
// `;

const LegacyTeamSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content;
	margin-block: 3vw;
	margin-inline: 3vw;
	width: auto;

	div {
		width: max-content;
		&.heading {
			position: relative;
			display: grid;
			grid-template-columns: 1fr;
			margin-block: 3vw;

			justify-self: center;
			width: 100%;
		}
		&.noEffect {
			position: absolute;
			z-index: 1;
		}
		&.maskEffect {
			position: absolute;
			top: 0;
			left: 0;
			color: rgba(255, 255, 255, 1);
			mix-blend-mode: overlay;
			z-index: 3;
		}
		&.legacyImageContainer {
			justify-self: end;

			margin-top: 10vw;
			grid-row: 1 / span 2;
			z-index: 2;

			div {
				&.absoluteImageContainer {
					/* position: absolute; */
					/* top: 10vw; */
					/* right: 0; */
				}
			}
		}

		&.paragraph {
			grid: display;
			grid-template-columns: 1fr;
			grid-auto-rows: min-content;
			margin-bottom: 5vw;
			width: 100%;
			grid-row: 2;
			padding-inline: 5vw;

			p {
				text-align: start;
			}
		}

		&.contactWrapper {
			display: grid;
			justify-self: center;
			/* width: 100%; */
		}

		&.contactUsLink {
			display: grid;
			grid-template-columns: max-content min-content;
			column-gap: 2vw;
			margin-block: 2vw;
			align-items: center;
			justify-self: center;
			cursor: pointer;
		}
	}
`;

// const LegacyTeamHeading = styled.div``;

// const OtherWaysText = styled.div`
// 	position: relative;
// 	display: flex;
// 	font-family: 'neue-haas-grotesk-display';
// 	font-weight: 700;
// 	font-size: 0.2em;
// `;

// const APPText = styled.div`
// 	position: absolute;
// 	top: -1.5em;
// 	left: -13.75em;
// `;

// const CRYPTOText = styled.div`
// 	position: absolute;
// 	top: -1.5em;
// 	left: -6.2em;
// `;

// const BANKText = styled.div`
// 	position: absolute;
// 	top: -1.5em;
// 	left: 3em;
// `;

// const STOCKText = styled.div`
// 	position: absolute;
// 	top: -1.5em;
// 	left: 11.25em;
// `;

// const LegacyImageContainer = styled.div`
// 	position: absolute;
// 	justify-content: flex-start;
// 	// outline: 3px dotted salmon;

// 	// padding-right: 5em;

// 	top: 5em;
// 	right: -5em;

// 	display: grid; // 💫
// 	// justify-self: end; // 💫
// 	// place-items: center; // 💫
// `;

// const ContactLinkContainer = styled.div`
// 	color: #070707;
// 	display: flex;
// 	font-size: 7em;
// 	font-weight: 400;
// 	font-style: normal;
// 	justify-content: space-between;
// 	width: 50%;
// 	margin-top: 0.25em;
// 	cursor: pointer;

// 	// align-items: center;
// 	// grid-template-columns: minmax(5em, 40%) 1fr;

// 	// outline: 3px dotted teal;
// `;

// const ArrowBtn = styled.div`
// 	display: flex;
// 	padding-inline: 0.25em;
// 	width: 20%;
// 	align-items: center;
// 	// justify-content: center;
// 	// margin-top: -2.5em;
// 	// transform: rotate(-270deg) scale(0.5);
// 	// outline: 3px dotted salmon;
// 	// max-width: 2.5em;
// `;

const BeginToTitheSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content;
	margin-block: 3vw;
	margin-inline: 3vw;
	width: auto;

	div {
		width: max-content;
		&.heading {
			position: relative;
			display: grid;
			grid-template-columns: 1fr 1fr;
			margin-block: 3vw;

			justify-self: center;
			width: 100%;
		}
		&.headingWrapper {
			grid-column: 1 / span 2;
			grid-row: 1;
		}
		&.paragraph {
			grid-column: 1 / span 2;
			grid-row: 1 / span 2;
			width: 50%;
			justify-self: end;
			margin-right: 7.5vw;

			padding: 1.5vw;

			margin-top: 15vw;

			p {
				text-align: start;
			}
		}
		&.startTithingWrapper {
			display: grid;
			justify-self: center;
			/* width: 100%; */
		}

		&.startTithingLink {
			display: grid;
			grid-template-columns: max-content min-content;
			column-gap: 2vw;
			margin-block: 2vw;
			align-items: center;
			justify-self: center;
			cursor: pointer;
		}
	}
`;

// const BeginToTitheHeading = styled.div`
// 	display: flex;
// 	// grid-column: span 1;
// 	justify-content: flex-start;

// 	font-family: 'neue-haas-grotesk-display';
// 	font-weight: 800;
// 	font-size: 12em;
// 	line-height: 12rem;
// 	// outline: 3px dotted teal;
// `;

// const BeginToTitheParagraph = styled.div`
// 	position: absolute;

// 	top: 8em;
// 	right: -8em;
// 	// diplay: grid;
// 	// align-self: start;
// 	color: rgba(0, 0, 0, 0.55);

// 	// align-items: center;
// 	// margin-top: 1.5em;
// 	// margin-left: 0em;
// 	margin-right: 20em;
// 	// padding-inline: 12em;

// 	font-weight: 500;
// 	font-family: 'neue-haas-grotesk-display';
// 	font-style: italic;
// 	font-size: 1.75rem;
// 	letter-spacing: 0;
// 	line-height: 2rem;

// 	width: 40%;

// 	// outline: 3px dotted teal;
// `;

// const TithingLinkContainer = styled.div`
// 	color: #070707;
// 	display: flex;
// 	font-size: 7em;
// 	font-family: 'neue-haas-grotesk-display';
// 	font-style: normal;
// 	font-weight: 100;
// 	justify-content: flex-start;
// 	width: 60%;
// 	margin-top: 0.25em;
// 	cursor: pointer;

// 	// align-items: center;
// 	// grid-template-columns: minmax(5em, 40%) 1fr;

// 	// outline: 3px dotted teal;
// `;

// const TithingArrowBtn = styled.div`
// 	display: flex;
// 	padding-inline: 0.25em;
// 	// width: 30%;
// 	align-items: center;
// 	transform: scale(0.75);
// 	justify-content: flex-start;
// 	// margin-top: -2.5em;
// 	// transform: rotate(-270deg) scale(0.5);
// 	// outline: 3px dotted salmon;
// 	// max-width: 2.5em;
// `;

const HaveQuestionsSection = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content;
	margin-block: 3vw;
	margin-inline: 3vw;
	width: auto;

	div {
		/* width: max-content; */
		&.heading {
			position: relative;
			display: grid;
			/* grid-template-columns: 2fr 1fr; */
			margin-block: 3vw;

			justify-self: center;
			width: 100%;
		}

		&.subText {
			display: grid;
			margin-block: 1.5vw;
			grid-row: 2;
			grid-template-columns: 1fr 1fr;
			column-gap: 3vw;
			align-items: center;

			p {
				text-align: start;
				width: fit-content;
			}
		}
		&.givingFaqsWrapper,
		.contactWrapper {
			display: grid;
			/* justify-self: center; */
			width: fit-content;
			grid-column: 2;
		}

		&.givingFaqsLink,
		.contactLink {
			display: grid;
			grid-template-columns: 1fr 1fr;
			column-gap: 2vw;
			margin-block: 2vw;
			align-items: center;
			justify-self: center;
			cursor: pointer;

			div {
				&.text {
					grid-column: 1;
				}
				&.arrow {
					grid-column: 2;
				}
			}
		}
	}
`;

// const HeadingGrid = styled.div`
// 	diplay: flex;
// 	flex-direction: row;
// 	// justify-content: center;
// 	// align-items: center;
// 	outline: 3px dotted plum;
// `;

// const HaveQuestionsHeading = styled.div`
// 	display: flex;
// 	// grid-column: span 1;
// 	justify-content: flex-start;

// 	font-family: 'neue-haas-grotesk-display';
// 	font-weight: 800;
// 	font-size: 3.25em;
// 	line-height: 12rem;
// 	outline: 3px dotted teal;
// `;

// const HaveQuestionsParagraph = styled.div`
// 	// position: absolute;
// 	// display: flex;
// 	// flex: 1;

// 	color: rgba(0, 0, 0, 0.55);
// 	// top: 8em;
// 	// right: -8em;

// 	// margin-right: 20em;

// 	// align-self: start;
// 	// align-items: center;
// 	// margin-top: 1.5em;
// 	// margin-left: 0em;
// 	// padding-inline: 12em;

// 	font-weight: 500;
// 	font-family: 'neue-haas-grotesk-display';
// 	font-style: italic;
// 	font-size: 1.75rem;
// 	letter-spacing: 0;
// 	line-height: 2rem;

// 	width: 55%;

// 	outline: 3px dotted teal;
// `;

// const QuestionsLinkWrapper = styled.div`
// 	position: absolute;
// 	top: 11em;
// 	right: 20em;
// 	font-size: 1.3em;
// 	font-weight: 700;
// `;

// const QuestionsLinkContainer = styled.div`
// 	color: #070707;
// 	display: flex;
// 	font-size: 7em;
// 	font-family: 'neue-haas-grotesk-display';
// 	font-style: normal;
// 	font-weight: 100;
// 	justify-content: flex-start;
// 	width: 60%;
// 	margin-top: 0.25em;
// 	cursor: pointer;

// 	// align-items: center;
// 	// grid-template-columns: minmax(5em, 40%) 1fr;

// 	outline: 3px dotted gold;
// `;

export default function Give() {
	return (
		<>
			<Grid>
				<WeLoveSection>
					<div className='heading'>
						<div className='noEffect'>
							<h1>
								WE LOVE
								<br />
								<span>SO WE GIVE</span>
							</h1>
						</div>
						<div className='maskEffect'>
							<h1>
								WE LOVE
								<br />
								<span>SO WE GIVE</span>
							</h1>
						</div>
					</div>
					<div className='image'>
						<StyledImage
							src={GiveHero}
							alt='give'
							layout='fixed'
							height={587} // original: 783
							width={1059} // original: 1413
						/>

						<div className='buttonContainer'>
							<div className='givenowText'>
								<a>GIVE NOW</a>
							</div>
							<Link href={'/give'}>
								<div className='arrowGrid'>
									<StyledArrowImage
										src={arrow}
										width={106}
										height={52}
										layout='fixed'
										alt='arrow-button'
									/>
								</div>
							</Link>
						</div>
					</div>
				</WeLoveSection>

				<WhyWeGiveSection>
					<div className='heading'>
						<h2>
							WHY WE <span>GIVE</span>
						</h2>
					</div>
					<div className='paragraph'>
						<p>
							Here at Celebration, we believe that God calls us to partake in
							the act of generosity, and that tithing is an act of worship and
							obedience to Jesus. When you give back to the Lord through
							Celebration Church, we commit to you that your offering will sow
							into the expansion of His Kingdom as we seek to share the
							transformative power of the Gospel all around the world.
						</p>
					</div>
					<div className='button'>
						<div className='learnMore'>
							<button>
								<a>LEARN MORE</a>
								<Link href={'/give'}>
									<div className='arrowGrid'>
										<StyledArrowImage
											src={arrowdown}
											width={21}
											height={21}
											layout='fixed'
											alt='arrow-button'
										/>
									</div>
								</Link>
							</button>
						</div>
					</div>
				</WhyWeGiveSection>

				<YourImpactSection>
					<div className='heading'>
						<h2>
							YOUR <span>IMPACT</span>
						</h2>
					</div>
					<div className='slider'>
						<div className='leftnav'>
							<Image src={leftnav} alt='' />
						</div>
						<div className='media'>
							<Image src={media} alt='' />
						</div>
						<div className='text'>
							<h3>ORANGE PARK FOOD PANTRY</h3>
							<p>
								Our Orange Park location is making a tremendous impact in their
								local community through their weekly food pantry ministry –
								which served 95,312 Clay County residents this past year.
								Because of your generosity, not only were we able to meet the
								tangible needs, but they were also able to open a 4,000 square
								foot space dedicated to helping further their food pantry and
								outreach efforts.
							</p>
						</div>
						<div className='rightnav'>
							<Image src={rightnav} alt='' />
						</div>
					</div>
					<div className='navigation'>
						<div className='button'>
							<Image src={navigation} alt='' />
						</div>
					</div>
				</YourImpactSection>

				<OnlineGivingSection>
					<div className='heading'>
						<h2>
							ONLINE <span>GIVING</span>
						</h2>

						<div className='ul'>
							<ul>
								<li>USA &#43;</li>
								<li>INTERNATIONAL &#43;</li>
								<li>TV MINISTRIES &#43;</li>
							</ul>
						</div>

						<Link href={'/'} alt='' passHref>
							<div className='givingLink'>
								<div className='text'>
									<button>
										<a>VIEW MY GIVING STATEMENT</a>
									</button>
								</div>

								<div classNme='arrowImage'>
									<Image
										src={darkArrowRight}
										alt='arrow-button'
										width={102}
										height={42}
										layout='fixed'
										objectFit='cover'
									/>
								</div>
							</div>
						</Link>
					</div>
				</OnlineGivingSection>

				<OtherWaysToGiveSection>
					<div className='heading'>
						<h2>
							OTHER WAYS <br />
							<span>TO GIVE</span>
						</h2>
					</div>
					<div className='giveIcons'>
						{/* 
						<OtherWaysText>
							<APPText>APP</APPText>
						</OtherWaysText>
						<OtherWaysText>
							<CRYPTOText>CRYPTO</CRYPTOText>
						</OtherWaysText>
						<OtherWaysText>
							<BANKText>BANK</BANKText>
						</OtherWaysText>
						<OtherWaysText>
							<STOCKText>STOCK</STOCKText>
						</OtherWaysText> */}
						<div className='iconBg'>
							<div className='iconWrapper'>
								<MdOutlinePhoneAndroid />
							</div>
						</div>

						<div className='iconBg'>
							<div className='iconWrapper'>
								<SiBitcoin />
							</div>
						</div>
						<div className='iconBg'>
							<div className='iconWrapper'>{/* <FaPiggyBank /> */}</div>
						</div>
						<div className='iconBg'>
							<div className='iconWrapper'>{/* <FaTicketAlt /> */}</div>
						</div>
						<div className='iconText'>
							<h3>APP</h3>
						</div>
						<div className='iconText'>
							<h3>CRYPTO</h3>
						</div>
						<div className='iconText'>
							<h3>BANK</h3>
						</div>
						<div className='iconText'>
							<h3>STOCK</h3>
						</div>
					</div>
				</OtherWaysToGiveSection>

				<LegacyTeamSection>
					<div className='heading'>
						<div className='noEffect'>
							<h2>
								LEGACY <span>TEAM</span>
							</h2>
						</div>
						<div className='maskEffect'>
							<h2>
								LEGACY <span>TEAM</span>
							</h2>
						</div>
						<div className='paragraph'>
							<p>
								Our Legacy Team gives influence, resources, and time as a local
								church ministry expression to advance the cause of Christ. Each
								member prayerfully commits to give over and above their tithe to
								impact eternity for generations to come—to leave a legacy. If
								you have any questions or would like to be a part of the Legacy
								Team, please email Pastor Drew King.
							</p>
							<div className='contactWrapper'>
								<Link href='mailto:info@celebrationchurch.com' passHref>
									<div className='contactUsLink'>
										<a>CONTACT US</a>
										<div>
											<Image
												src={darkArrowRight}
												alt='arrow-button'
												width={102}
												height={42}
												layout='fixed'
												objectFit='cover'
											/>
										</div>
									</div>
								</Link>
							</div>
						</div>
						<div className='legacyImageContainer'>
							<div className='absoluteImageContainer'>
								<Image src={legacy} alt='' />
							</div>
						</div>
					</div>
				</LegacyTeamSection>

				<BeginToTitheSection>
					<div className='heading'>
						<div className='headingWrapper'>
							<h2>
								BEGIN TO <br />
								<span>TITHE</span>
							</h2>
						</div>
						<div className='paragraph'>
							<p>
								If <strong>tithing</strong> is new to you and you’re not sure
								where to get started, we’ve got you covered!{' '}
								<strong>We’re here to help set you up with a plan</strong>, and
								be a source of encouragement as you seek to honor God with your
								finances. <br />
								<br />
								This is your commitment to tithe 10% of your income for the next
								8 weeks. Trusting God and putting Him first in your finances
								declares a blessing over your life.
							</p>
							<div className='startTithingWrapper'>
								<Link href='/' passHref>
									<div className='startTithingLink'>
										<a>START TITHING</a>
										<div>
											<Image
												src={darkArrowRight}
												alt='arrow-button'
												width={102}
												height={42}
												layout='fixed'
												objectFit='cover'
											/>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</BeginToTitheSection>

				<HaveQuestionsSection>
					<div className='heading'>
						<div>
							<h3>HAVE QUESTIONS?</h3>
						</div>
						<div className='subText'>
							<p>
								If you have additional questions concerning giving or donations,
								please call Celebration Church Giving Office at (904) 737-1121
								or contact us.
							</p>
							<div className='givingFaqsWrapper'>
								<Link href='mailto:info@celebrationchurch.com' passHref>
									<div className='givingFaqsLink'>
										<div className='text'>
											<a>GIVING FAQs</a>
										</div>
										<div className='arrow'>
											<Image
												src={darkArrowRight}
												alt='arrow-button'
												width={102}
												height={42}
												layout='fixed'
												objectFit='cover'
											/>
										</div>
									</div>
								</Link>
							</div>
							<div className='contactWrapper'>
								<Link href='mailto:info@celebrationchurch.com' passHref>
									<div className='contactLink'>
										<div className='text'>
											<a>CONTACT</a>
										</div>
										<div className='arrow'>
											<Image
												src={darkArrowRight}
												alt='arrow-button'
												width={102}
												height={42}
												layout='fixed'
												objectFit='cover'
											/>
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</HaveQuestionsSection>
			</Grid>
		</>
	);
}
