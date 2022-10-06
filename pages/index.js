import Head from 'next/head';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Hero from '/components/HomepageComponents/HeroComponent/Hero.js';
import FindALocation from '/components/HomepageComponents/SectionFindALocation/FindALocation.js';
import TheresAPlace from '/components/HomepageComponents/SectionTheresAPlace/TheresAPlace.jsx';
import MeetPastors from '/components/HomepageComponents/SectionMeetOurPastors/MeetPastorsSection.jsx';
import FollowJesusSection from '/components/HomepageComponents/SectionFollowJesusButton/FollowJesusSection.js';
import WhatsNewSection from '/components/HomepageComponents/SectionWhatsNew/WhatsNewSection.js';

const GridIndex = styled.div`
	display: grid;
	grid-template-rows: repeat(5, 1fr);
	grid-template-areas: 'hero' 'find' 'theresaplace' 'meetpastors' 'followjesus' 'whatsnew';
	grid-template-rows: min-content;
	row-gap: 5em;
	align-items: center;
	// place-items: center;
	// overflow: hidden;
	// display: flex; // 🎩💫
	width: 100%;
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
				<TheresAPlace />
				<MeetPastors />
				<FollowJesusSection />
				<WhatsNewSection />
			</GridIndex>
		</>
	);
};
export default Home;
