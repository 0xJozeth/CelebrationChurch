//IMPORT REACT SPECIFICS
import React, { useState, useEffect } from 'react';

// IMPORT NEXTJS SPECIFICS
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// IMPORT STYLING
import styled from 'styled-components';

// IMPORT SECTION MODULES
import Hero from '/components/HomepageComponents/HeroComponent/Hero2.js';
import FindALocation from '/components/HomepageComponents/SectionFindALocation/FindALocation2.js';
import TheresAPlace from '/components/HomepageComponents/SectionTheresAPlace/TheresAPlace2.js';
import MeetPastors from '/components/HomepageComponents/SectionMeetOurPastors/MeetPastorsSection2.js';
import FollowJesusSection from '/components/HomepageComponents/SectionFollowJesusButton/FollowJesusSection.js';
import WhatsNewSection from '/components/HomepageComponents/SectionWhatsNew/WhatsNewSection2.js';
import WeHaveAGrace from '/components/HomepageComponents/SectionWeHaveAGrace/WeHaveAGrace.js';

// TAILWIND STUFF
import HeroTW from '/components/HomepageComponents/HeroComponent/Hero-tw.jsx';

const GridIndex = styled.div`
	display: grid;
	grid-template-rows: repeat(6, 1fr);
	grid-template-areas: 'hero' 'find' 'wehaveagrace' 'theresaplace' 'meetpastors' 'followjesus' 'whatsnew';
	grid-template-rows: min-content;
	row-gap: 5vw;
	align-items: center;
	place-items: center;
	/* width: 100%; */

	// overflow: hidden;
	// display: flex; // 🎩💫
`;

const Home = () => {
	return (
		<>
			<Head>
				<title>
					Celebration Church | Jacksonville, FL Church | Pastor Tim Timberlake
					&amp; Jen Timberlake
				</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			{/* <GridIndex> */}
			{/* <Hero /> */}
			{/* <FindALocation /> */}
			{/* <WeHaveAGrace /> */}
			{/* <TheresAPlace /> */}
			{/* <MeetPastors /> */}
			{/* <FollowJesusSection /> */}
			{/* <WhatsNewSection /> */}
			{/* </GridIndex> */}
			<main>
				<HeroTW />
			</main>
			{/* <FindALocation /> */}
		</>
	);
};
export default Home;
