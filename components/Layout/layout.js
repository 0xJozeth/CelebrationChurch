import React, { useState, useEffect } from 'react';

import Header from '/components/Header/Header.js';
import Footer from '/components/Footer/Footer.js';
import App from '../Header/Navbar.jsx';

import ToggleMenu from '/components/Navbar/ToggleMenu.js';

export default function Layout({ children }) {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<>
			{/* <Header /> */}
			<App
				/* This is for the navbar */ navbarOpen={navbarOpen}
				setNavbarOpen={setNavbarOpen}
			/>
			<ToggleMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
			{children}
			<Footer />
		</>
	);
}
