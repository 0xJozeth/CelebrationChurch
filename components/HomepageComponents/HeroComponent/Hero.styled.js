import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Grid = styled.div`
	display: grid;
	/* height: 100vh; */
	grid-template-columns: repeat(auto-fit, minmax(400px, 50%));
	/* width: auto-fit; */

	// margin: 1em;
	/* margin-bottom: 22.5em; */

	/* grid-template: 1fr 1fr / 50% 1fr; */

	grid-template-areas:
		'text video'
		'paragraph video';

	@media only screen and (max-width: 576px) {
		display: grid;

		grid-template-columns: 1fr;
		grid-template-rows: 0.25fr 2fr 10%;
		grid-template-areas: 'text' 'video' 'link';

		margin-bottom: 5em;
		margin-inline: -1em;
	}
`;

export const MotionMaskContainer = styled.div`
	position: relative;

	grid-area: text;
	grid-column: span 2/3;

	color: rgba(255, 255, 255, 1);
	text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);

	// font-family: 'neue-haas-grotesk-display';
	font-weight: 800;
	font-size: 10vw;
	line-height: 0.25em;
`;

export const MotionWelcomeToCelebrationText = styled(motion.div)`
	z-index: 1;
	color: rgba(0, 0, 0, 1);
	// margin-inline: 0.25em;
	justify-self: end;

	/* @media only screen and (max-width: 1440px) {
		font-size: 75%;
		// text-align: center;
		/* justify-self: center; */
	/* } */
	/* @media only screen and (max-width: 576px) { */
	/* font-size: 25%; */
	// text-align: center;
	/* justify-self: center; */
	/* } */
`;

export const MotionWelcomeToCelebrationTextMask = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 1;
	color: rgba(255, 255, 255, 1);

	mix-blend-mode: overlay;
	z-index: 3;
	pointer-events: none;
	// margin-inline: 0.25em;

	// grid-column: span 3/3;
	justify-self: end;

	/* @media only screen and (max-width: 1440px) {
		font-size: 75%;
		// text-align: center;
		/* justify-self: center; */
	/* } */
	/* @media only screen and (max-width: 576px) { */
	/* font-size: 25%; */
	// text-align: center;
	/* justify-self: center; */
	/* } */
`;

export const MotionMaskSpan = styled.span`
	display: inline-flex;

	font-family: 'kepler-std-display', serif;
	font-style: italic;
	font-weight: 400;
`;

export const MaskContainer = styled.div`
	position: relative;

	grid-area: text;
	grid-column: span 2/3;

	color: rgba(255, 255, 255, 1);

	font-family: 'neue-haas-grotesk-display';
	font-weight: 800;
	font-size: 12em;
	line-height: 0.85em;

	@media only screen and (max-width: 576px) {
		font-size: 3em;
		text-align: center;
		justify-self: center;
	}
`;

export const WelcomeToCelebrationText = styled(motion.div)`
	z-index: 1;
	color: rgba(0, 0, 0, 1);

	margin-inline: 0.25em;
	z-index: 1;
`;

export const WelcomeToCelebrationTextMask = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	opacity: 1;
	color: rgba(255, 255, 255, 1);

	mix-blend-mode: overlay;
	z-index: 3;
	pointer-events: none;
	margin-inline: 0.25em;
`;

export const MaskSpan = styled.span`
	display: inline-flex;

	font-family: 'kepler-std-display', serif;
	font-style: italic;
	font-weight: 400;
`;

export const StyledParagraph = styled.div`
	grid-area: paragraph;

	width: 75%;
	justify-self: center;

	margin-inline: 2em;
	margin-top: 6em;

	font-family: 'neue-haas-grotesk-display';

	font-weight: 500;
	font-size: 1.75vw;
	line-height: 2rem;
	color: rgba(0, 0, 0, 0.55);

	@media only screen and (max-width: 576px) {
		grid-area: link;
		font-size: 1.25em;
		margin-top: 1em;
		align-self: start;
	}
`;

export const HeaderLinkContainer = styled.div`
	display: flex;

	height: 3rem;
	margin: auto;
	align-items: center;
	justify-content: space-evenly;
	cursor: pointer;
	margin-bottom: 2rem;
	margin-top: 4rem;

	@media only screen and (max-width: 576px) {
		font-size: 1em;
		// margin-top: -2em;
		// align-items: start;
	}
`;

export const LinkButtonText = styled.div`
	display: flex;
	justify-content: flex-start;
	font-family: 'neue-haas-grotesk-display';
	color: #000;
	font-weight: 500;
	font-size: 2vw;
	line-height: 100%;
	text-decoration: none;

	@media only screen and (max-width: 576px) {
		font-size: 1em;
		margin-top: -2em;
		align-self: start;
	}
`;

export const ArrowBtn = styled.div`
	color: #070707;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media only screen and (max-width: 576px) {
		font-size: 1em;
		margin-top: -2.5em;
		align-self: start;
	}
`;

export const StyledVideoContainer = styled.div`
	grid-area: video;
	// margin-left: -13.5em;
	padding: 0;
	z-index: 2;

	height: auto;
	width: 50vw;
	justify-self: end;

	@media only screen and (max-width: 576px) {
		// grid-area: video;

		grid-row: span 2/3;
		// margin-top: -6.5em;

		// height: 75vh;
		// width: 100%;

		align-self: start;
		margin-top: 15%;
	}
`;
