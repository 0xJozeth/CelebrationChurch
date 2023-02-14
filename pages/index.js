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
import HeroMobile from '/components/HomepageComponents/HeroComponent/Hero-mobile.jsx';
import HomeDesktop from '../components/HomepageComponents/HeroComponent/HomeDesktop';
import HomeTablet from '../components/HomepageComponents/HeroComponent/HomeTablet';

const Home = () => {
	return (
		<>
			<div className='block md:hidden'>
				<HeroMobile />
			</div>
			{/* <div className='hidden md:block lg:hidden'>
				<HomeTablet />
			</div> */}
			<div className='hidden md:block'>
				<HomeDesktop />
			</div>
		</>
	);
};
export default Home;
