import styled from 'styled-components';

export const Nav = styled.nav`
	position: relative;
	background-color: #f8f8f8;
	// height: 80px;
	// margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;

	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 999;

	// outline: 5px solid gold;

	@media screeen and (max-width: 1280px) {
		// transition: 0.8s all ease;
	}
`;

export const NavContainer = styled.div`
	// position: relative;
	// box-sizing: border-box;
	display: flex;
	// flex: 1 1 0%;

	align-items: center;
	justify-content: space-around;
	// padding: 1em;
	// margin: 50%;

	padding-inline: 2em;
	// margin: 1em; // 👈 must be reset

	height: 12vh;
	// min-height: 80%;

	width: 100vw;

	// overflow: hidden;

	// outline: 5px solid red;

	// background: #070707;
	// display: flex;
	// position: relative;
	// height: 7.5rem;
	// align-items: center;
	// justify-content: center;
	// margin: auto;
	// padding: 1rem;

	// TUT BELOW

	// display: flex;
	// justify-content: space-between;
	// height: 80px;
	// z-index: 1;
	// width: 100%;
	// padding: 0 24px;
	// max-width: 1100px;

	@media screen and (max-width: 1280px) {
		transition: 0.8s all ease;
	}
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
	// position: relative;
	display: flex;
	justify-content: space-around;
	align-items: center;

	padding: auto;
	margin: auto;

	width: fit-content;
	// background: plum;
	// outline: 5px solid plum;

	@media screen and (max-width: 1280px) {
		// display: none;
		width: 40%;
		transition: 0.8s all ease;

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
	// display: flex;
	// justify-content: flex-end;
	// align-items: center;
	// width: 25%;
	margin-inline: 1rem;
	padding: 0;
	border: none;
	// outline: 5px solid violet;
`;
