import Head from 'next/head';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Hero from '/components/HomepageComponents/HeroComponent/Hero2.js';
import FindALocation from '/components/HomepageComponents/SectionFindALocation/FindALocation2.js';
import TheresAPlace from '/components/HomepageComponents/SectionTheresAPlace/TheresAPlace2.js';
import MeetPastors from '/components/HomepageComponents/SectionMeetOurPastors/MeetPastorsSection2.js';
import FollowJesusSection from '/components/HomepageComponents/SectionFollowJesusButton/FollowJesusSection.js';
import WhatsNewSection from '/components/HomepageComponents/SectionWhatsNew/WhatsNewSection2.js';
import WeHaveAGrace from '/components/HomepageComponents/SectionWeHaveAGrace/WeHaveAGrace.js';

const GridIndex = styled.div`
	display: grid;
	grid-template-rows: repeat(6, 1fr);
	grid-template-areas: 'hero' 'find' 'wehaveagrace' 'theresaplace' 'meetpastors' 'followjesus' 'whatsnew';
	grid-template-rows: min-content;
	row-gap: 5vw;
	align-items: center;
	place-items: center;
	width: 100%;

	// overflow: hidden;
	// display: flex; // 🎩💫
`;

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	// // Create a function that updates the state
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Head>
				<title>
					Celebration Church | Jacksonville, FL Church | Pastor Tim Timberlake
					&amp; Jen Timberlake
				</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<GridIndex>
				<Hero />
				<FindALocation />
				<WeHaveAGrace />
				<TheresAPlace />
				<MeetPastors />
				<FollowJesusSection />
				<WhatsNewSection />
			</GridIndex>
		</>
	);
};
export default Home;
