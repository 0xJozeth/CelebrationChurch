import styled from 'styled-components';
import Header from '/components/Header.js';
import Headercopy from '/pages/Headercopy.js';
import Footer from '/components/Footer/Footer.js';

import styles from '/components/layout.module.css';

import ToggleMenu from '/components/Navbar/ToggleMenu.js';

export default function Layout({ children }) {
	// const styles = {
	// 	// display: 'flex',
	// 	// flexDirection: 'column', // 🎩💫 Toggle this and /index.js' display: flex for horizontal scrolling!
	// 	// 	overflow: 'hidden',
	// };

	const Grid = styled.div`
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: min-content;
		grid-template-areas: 'header' 'main' 'footer';
		overflow: hidden;
	`;

	return (
		<>
			<Grid>
				{/* <ToggleMenu /> */}
				<Header />
				{children}
				<Footer />
			</Grid>
		</>
	);
}
