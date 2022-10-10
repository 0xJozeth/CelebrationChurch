import styled from 'styled-components';
import Header from '/components/Header2.js'; // '/components/Header.js';
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
		max-width: fit-content;

		div {
			&.header {
				grid-area: header;
			}
			&.main {
				grid-area: main;
			}
			&.footer {
				grid-area: footer;
			}
		}
	`;

	return (
		<>
			<ToggleMenu />
			<Grid>
				{/* <ToggleMenu /> */}
				<div className='header'>
					<Header />
				</div>
				<div className='main'>{children}</div>
				<div className='footer'>
					<Footer />
				</div>
			</Grid>
		</>
	);
}
