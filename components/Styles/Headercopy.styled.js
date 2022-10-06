import styled from 'styled-components';

export const Nav = styled.nav`
	background-color: red;
	// height: 80px;
	// margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1rem;
	top: 0;

	// outline: 5px solid gold;

	@media screeen and (max-width: 380px) {
		grid-template-columns: 1fr 1fr;
	}
`;

export const NavContainer = styled.div`
	max-width: 100vw;
	background: #f8f8f8;

	display: grid;
	justify-content: space-between;
	height: 12vh;
	align-items: center;
	position: sticky;
	padding: 0.25em;
	z-index: 999;
	margin-inline: 3em;
	grid-template-columns: auto 1fr;
	grid-template-areas: 'logo navlinks menu';

	@media only screeen and (min-width: 768px) {
		max-width: 100vw;

		display: grid;
		justify-content: space-between;
		height: 12vh;
		align-items: center;
		position: sticky;
		padding: 0.25em;
		z-index: 999;
		margin: 1em;

		grid-template-columns: 40% 60%;
		grid-template-areas: 'logo menu';
	}

	// 🎩 KEEP ALL PROPERTIES ABOVE 🪄 //
`;

// export const NavWrapper = styled.div`
// 	// position: absolute;
// 	display: flex;

// 	justify-content: space-between;
// 	align-items: center;
// 	height: 4rem;
// 	width: 100%;

// 	// outline: 5px solid yellow;
// `;

export const LinkWrapper = styled.ul`
	grid-area: navlinks;

	// position: relative;
	display: flex;
	justify-content: space-around;
	align-items: center;

	padding: auto;
	margin: auto;

	width: fit-content;
	// background: plum;
	// outline: 5px solid plum;

	@media screen and (max-width: 768px) {
		display: none;
		transition: 0.8s all ease;
	}
`;

export const Styledul = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
	list-style-type: none;
`;

export const Styledli = styled.li`
	// display: flex;
	justify-content: space-evenly;

	align-items: center;
	list-style-type: none;

	padding: 0.25rem;
	// outline: 5px solid orange;
`;

export const Styleda = styled.a`
	display: flex;
	text-decoration: none;
	margin-inline: auto;
	padding: auto;

	color: #070707;
	font-family: 'neue-haas-grotesk-display';
	font-weight: 700;
	font-size: 100%;
	cursor: pointer;
	// outline: 5px solid teal;

		@media screen and (max-width: 1280px) {
	font-size: 65%;
		transition: 0.8s all ease;
`;

// export const StyledImage = styled.div`
// 	background-image: url(${CcLogo});
// 	object-fit: cover;
// 	width: 2rem;
// 	height: 2rem;
// 	margin-right: 50px;
// `;

export const ImageWrapper = styled.div`
	// // outline: 5px solid blue;
	grid-area: logo;

	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0.25rem;
	// margin: 2rem;
	object-fit: cover;
	// outline: 5px solid salmon;
`;

export const LinkItem = styled.a`
	margin: 1rem;
	// // outline: 5px solid teal;
`;

export const StyledDivider = styled.p`
	color: #000;
	text-decoration: none;
	padding: 0rem 2rem;
	font-family: 'neue-haas-grotesk-display';
	font-weight: 700;
	font-size: 1.75rem;
	cursor: default;
`;

export const BurgerWrapper = styled.button`
	grid-area: menu;

	// display: flex;
	// justify-content: flex-end;
	// align-items: center;
	// width: 25%;
	margin-inline: 1rem;
	padding: 0;
	border: none;

	@media screen and (max-width: 768px) {
		transition: 0.8s all ease;
		grid-column: 3;
	}

	// outline: 5px solid violet;
`;
