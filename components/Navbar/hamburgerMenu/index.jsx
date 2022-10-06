import React, { useState } from 'react';
import styled from 'styled-components';
import MenuToggle from './menuToggle';

const HamburgerMenuContainer = styled.div`
	// position: relative;
	// display: flex;
	// justify-content: flex-end;
	// align-items: center;
	// margin-top: 0.5rem;
	// margin-inline: 1rem;
	// padding: 0.25rem;
	outline: 5px solid green;
`;

const MenuToggleWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	/* margin-inline: 10em; */
	/* background: red; */
	/* z-index: 999; */

	// @media screen and (max-width: 768px) {
	// 	transition: 0.8s all ease;
	// 	grid-column: 3;
	// }

	// outline: 5px solid green;
`;

export const HamburgerMenu = (props) => {
	const [isOpen, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!isOpen);
	};

	return (
		// <HamburgerMenuContainer>
		<>
			<MenuToggleWrapper>
				<MenuToggle
					toggle={toggleMenu}
					isOpen={isOpen}
					onClick={props.handleClick}
				/>
			</MenuToggleWrapper>
		</>
		// </HamburgerMenuContainer>
	);
};
