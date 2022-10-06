import styled from 'styled-components';

export const Grid = styled.div`
	outline: 5px solid blue;
`;

export const Row = styled.div`
	display: flex;
	outline: 5px dotted blue;
`;

const media = {
	xs: (styles) => `
		@media only screen and (max-width: 480px) {
			${styles}
		}
		`,
};

export const Col = styled.div`
	outline: 10px dotted green;
	flex: ${(props) => props.size};
	${(props) => props.collapse && media[props.collapse](`display: none`)};
`;
