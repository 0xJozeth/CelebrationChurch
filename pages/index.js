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
import HomeDesktop from './HomeDesktop';

const Home = () => {
	return (
		<>
			<div className='block md:hidden'>
				<HeroTW />
			</div>
			<div className='hidden md:block'>
				{/* <GridIndex>
						<Hero />
						<FindALocation />
						<WeHaveAGrace />
						<TheresAPlace />
						<MeetPastors />
						<FollowJesusSection />
						<WhatsNewSection />
					</GridIndex> */}
				<HomeDesktop />
			</div>
		</>
	);
};
export default Home;
