import styled, { css } from 'styled-components';
import {
	KeyframesAnimateEnterFrames,
	KeyframesAnimateEnter1Frames,
	KeyframesAnimateEnter4Frames,
	TitleMain,
	Neuehaasgroteskdisplaypro75BoldBlac,
	Neuehaasgroteskdisplaypro55romanNor7,
	Neuehaasgroteskdisplaypro75BoldBlac7,
	Border3pxBlack,
	NeuehaasgroteskdisplayproMediumBlac,
	TitleAccent,
	Neuehaasgroteskdisplaypro55romanNor3,
} from '../../styledMixins';
import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
// import CcLogo from '/public/cc-logo@1x.png';

//---BEGINNING OF ANIMA NAVBAR--//

function App() {
	return <NavbarSection {...navbarSectionData} />;
}

export default App;

function NavbarSection(props) {
	const {
		navbarLinkAbout,
		navbarDivider3,
		navbarLinkVisit,
		navbarDivider2,
		navbarLinkWatch,
		navbarDivider1,
		navbarLinkGive,
		ccLogo,
		line1,
		line3,
		ccLogoProps,
	} = props;

	return (
		<Navbar>
			<CcLogo src={ccLogoProps.src} />
			<NavbarLinkAbout className='animate-enter3'>
				{navbarLinkAbout}
			</NavbarLinkAbout>
			<NavbarLinkText3>{navbarDivider3}</NavbarLinkText3>
			<NavbarLinkVisit className='animate-enter2'>
				{navbarLinkVisit}
			</NavbarLinkVisit>
			<NavbarLinkText2>{navbarDivider2}</NavbarLinkText2>
			<NavbarLinkWatch className='animate-enter1'>
				{navbarLinkWatch}
			</NavbarLinkWatch>
			<NavbarLinkText1>{navbarDivider1}</NavbarLinkText1>
			<NavbarLinkPlace className='animate-enter'>
				{navbarLinkGive}
			</NavbarLinkPlace>
			<BurgerMenu>
				<Line1 src={ccLogo} />
				<Line3 src={line1} />
				<Line3 src={line3} />
			</BurgerMenu>
		</Navbar>
	);
}

const Navbar = styled.div`
	${Neuehaasgroteskdisplaypro75BoldBlac}
	height: 93px;
	position: relative;
	display: flex;
	align-items: center;
	min-width: 1822px;
`;

const NavbarLinkAbout = styled.div`
	color: black;
	min-height: 38px;
	margin-left: 255px;
	margin-top: 13px;
	min-width: 105px;
	letter-spacing: 0;
	line-height: 30px;
	white-space: nowrap;
	opacity: 0;
	transform: translate(0, 25px);

	&.animate-enter3 {
		animation: animate-enter3-frames 0.4s ease 0s 1 normal forwards;
		opacity: 0;
		transform: translate(0, 25px);
	}
`;

const NavbarLinkText3 = styled.div`
	min-height: 38px;
	margin-left: 45px;
	margin-top: 13px;
	min-width: 15px;
	letter-spacing: 0;
	line-height: 30px;
	white-space: nowrap;
`;

const NavbarLinkVisit = styled.div`
	min-height: 38px;
	margin-left: 48px;
	margin-top: 13px;
	min-width: 76px;
	letter-spacing: 0;
	line-height: 30px;
	white-space: nowrap;
	opacity: 0;
	transform: translate(0, 25px);

	&.animate-enter2 {
		animation: animate-enter2-frames 0.8s ease 0s 1 normal forwards;
		opacity: 0;
		transform: translate(0, 25px);
	}
`;

const NavbarLinkText2 = styled.div`
	min-height: 38px;
	margin-left: 43px;
	margin-top: 13px;
	min-width: 15px;
	letter-spacing: 0;
	line-height: 30px;
	white-space: nowrap;
`;

const NavbarLinkWatch = styled.div`
	min-height: 38px;
	margin-left: 46px;
	margin-top: 13px;
	min-width: 107px;
	letter-spacing: 0;
	line-height: 30px;
	white-space: nowrap;
	opacity: 0;
	transform: translate(0, 25px);

	&.animate-enter1 {
		animation: animate-enter1-frames 1.2s ease 0s 1 normal forwards;
		opacity: 0;
		transform: translate(0, 25px);
	}
`;

const NavbarLinkText1 = styled.div`
	min-height: 38px;
	margin-left: 41px;
	margin-top: 13px;
	min-width: 15px;
	letter-spacing: 0;
	line-height: 30px;
	white-space: nowrap;
`;

const NavbarLinkPlace = styled.div`
	min-height: 38px;
	margin-left: 55px;
	margin-top: 13px;
	min-width: 71px;
	letter-spacing: 0;
	line-height: 30px;
	white-space: nowrap;
	opacity: 0;
	transform: translate(0, 25px);

	&.animate-enter {
		animation: animate-enter-frames 1.6s ease 0s 1 normal forwards;
		opacity: 0;
		transform: translate(0, 25px);
	}
`;

const BurgerMenu = styled.div`
	width: 59px;
	margin-left: 492px;
	margin-bottom: 1px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	min-height: 38px;
`;

const Line1 = styled.img`
	width: 59px;
	height: 3px;
	object-fit: cover;
`;

const Line3 = styled.img`
	width: 59px;
	height: 3px;
	margin-top: 16px;
	object-fit: cover;
`;

function CcLogo(props) {
	const { src } = props;

	return (
		<Image
			className='animate-enter4'
			src='/public/cc-logo@1x.png'
			width={222}
			height={62}
			alt=''
		/>
	);
}

const CcLogo1 = styled.img`
	width: 334px;
	height: 93px;
	object-fit: cover;
	display: block;
	opacity: 0;

	&.animate-enter4 {
		display: block;
		animation: animate-enter4-frames 0.6s ease-in 0.6s 1 normal forwards;
		opacity: 0;
	}
`;

const ccLogoData = {
	src: 'public/cc-logo@1x.png',
};

const navbarSectionData = {
	navbarLinkAbout: 'ABOUT',
	navbarDivider3: '/',
	navbarLinkVisit: 'VISIT',
	navbarDivider2: '/',
	navbarLinkWatch: 'WATCH',
	navbarDivider1: '/',
	navbarLinkGive: 'GIVE',
	ccLogo: 'line-1.png',
	line1: 'line-1.png',
	line3: 'line-1.png',
	ccLogoProps: ccLogoData,
};

//--END OF ANIMA NAVBAR--//
