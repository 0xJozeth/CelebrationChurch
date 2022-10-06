import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import styles from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import CcSmallLogo from '/public/celebration-logo@1x.png';

const FooterWrapper = styled.div`
	// position: relative;
	// display: flex;
	// align-items: center;
	// justify-content: center;
	// background: #f8f8f8;
	// position: relative;
	// width: 100%;
	// height: auto;
	// color: #000;
	// margin: 1rem;
	// margin-top: 10rem;
	z-index: 99;
	// outline: 5px solid blue;
`;

const FooterSection = styled.div`
	overflow: hidden;

	display: flex;
	box-sizing: border-box;

	background: #f8f8f8;
	color: #070707;
	// outline: 1px solid #070707;
	// align-items: flex-start;
	justify-content: space-evenly;

	width: 100%;
	margin: auto;
	padding: 3rem;
	height: auto;
	z-index: 99;
	// outline: 5px solid yellow;
`;

const FooterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 15rem;
	padding-right: 6em;
	padding-top: 1em;
	// outline: 5px dotted green;
`;
const FooterImage = styled.div`
	display: flex;
`;

const ConnectColumn = styled.div`
	font-family: 'neue-haas-grotesk-display';
	// width: 98px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	// align-items: space-between;
	min-height: 147px;
	line-height: auto;
	// outline: 5px solid salmon;
`;
const MediaColumn = styled.div`
	font-family: 'neue-haas-grotesk-display';
	// width: 205px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	min-height: 147px;
	// outline: 5px solid teal;
`;
const ResourcesColumn = styled.div`
	font-family: 'neue-haas-grotesk-display'
	// width: 205px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	min-height: 147px;
	// outline: 5px solid teal;
	`;
const OpportunitesColumn = styled.div`
	font-family: 'neue-haas-grotesk-display'
	// width: 205px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	min-height: 147px;
	// outline: 5px solid teal;
	`;
const DownloadAppColumn = styled.div`
	font-family: 'neue-haas-grotesk-display'
	// width: 205px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	min-height: 147px;
	// outline: 5px solid teal;
	`;
const ColumnHeader = styled.div`
	font-family: 'neue-haas-grotesk-display';
	font-style: normal;
	font-weight: 700;
	font-size: small;
	line-height: 3em;

	// outline: 5px solid teal;
`;
const ColumnLink = styled.a`
	// white-space: nowrap;
	// min-height: 25px;
	display: flex;
	justify-content: flex-start;
	text-decoration: none;
	color: #070707;
	font-family: 'neue-haas-grotesk-display';
	font-style: normal;
	font-weight: 400;
	line-height: 2em;
	margin: 1em;
	padding: 0;
	cursor: pointer;
	// outline: 5px solid teal;
`;

const CopyrightWrapper = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 50rem;
`;

const CopyrightSection = styled.div`
	background: transparent;
	margin: 5rem;
	justify-content: space-between;
	display: flex;
	gap: 1em;
`;

//---ADDITIONAL IMPORTS--//
const ImageWrapper = styled.div`
	background: transparent;
	display: flex;
`;

const StyledImage = styled.div`
	margin-right: 50px;
`;

const CopyrightStyledLinks = styled.p`
	font-family: 'neue-haas-grotesk-display';
	font-weight: 200;
	cursor: pointer;
`;

export default function Footer() {
	return (
		<>
			{/* <FooterWrapper> */}
			<FooterSection>
				{/* <FooterContainer> */}
				<FooterImage>
					<ImageWrapper className={styles.ImageWrapper}>
						<motion.div
							whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
							initial='hidden'
							animate='visible'
							variants={{
								hidden: {
									scale: 0.8,
									opacity: 0,
									x: -100,
								},
								visible: {
									scale: 1,
									opacity: 1,
									x: 0,
									transition: {
										duration: 0.4,
										delay: 0.4,
									},
								},
							}}
						>
							<StyledImage
								src={CcSmallLogo}
								alt='Celebration-church-logo'
								width={112}
								height={113}
								// layout='intrinsic'
								//or use object-fit='cover' if intrinsic causes errors
							/>
						</motion.div>
					</ImageWrapper>
				</FooterImage>
				<ConnectColumn>
					<ColumnHeader>CONNECT</ColumnHeader>

					<Link href='/about' passHref>
						<ColumnLink>About</ColumnLink>
					</Link>

					<Link href='/visit' passHref>
						<ColumnLink>Visit</ColumnLink>
					</Link>

					<Link href='/care' passHref>
						<ColumnLink>Care</ColumnLink>
					</Link>
				</ConnectColumn>
				<MediaColumn>
					<ColumnHeader>MEDIA</ColumnHeader>

					<Link href='/celebration-eveywhere' passHref>
						<ColumnLink>Celebration Everywhere</ColumnLink>
					</Link>

					<Link href='/worship' passHref>
						<ColumnLink>Worship</ColumnLink>
					</Link>
				</MediaColumn>
				<ResourcesColumn>
					<ColumnHeader>RESOURCES</ColumnHeader>
					<Link href='/give' passHref>
						<ColumnLink>Give</ColumnLink>
					</Link>
					<Link href='/bible-reading-plan' passHref>
						<ColumnLink>Bible Reading Plan</ColumnLink>
					</Link>
					<Link href='/ckids-online' passHref>
						<ColumnLink>cKids Online</ColumnLink>
					</Link>
					<Link href='/shop' passHref>
						<ColumnLink>Shop</ColumnLink>
					</Link>
				</ResourcesColumn>
				<OpportunitesColumn>
					<ColumnHeader>OPPORTUNITIES</ColumnHeader>
					<ColumnLink>Jobs</ColumnLink>
					<ColumnLink>SEU Jacksonville</ColumnLink>
				</OpportunitesColumn>
				<DownloadAppColumn>
					<ColumnHeader>DOWNLOAD OUR APP</ColumnHeader>
					<ColumnLink>Apple App Store</ColumnLink>
					<ColumnLink>Google Play Store</ColumnLink>
				</DownloadAppColumn>
				{/* </FooterContainer> */}
				{/* <CopyrightWrapper> */}
				{/* <CopyrightSection> */}
				{/* </CopyrightSection> */}
				{/* <CopyrightStyledLinks> */}
				{/* Celebration Copyright 2022 */}
				{/* </CopyrightStyledLinks> */}
				{/* <p> • </p> */}
				{/* <CopyrightStyledLinks href='/terms' passHref> */}
				{/* Terms of Use */}
				{/* </CopyrightStyledLinks> */}
				{/* <p> • </p> */}
				{/* <CopyrightStyledLinks href='/privacy' passHref> */}
				{/* Privacy Policy */}
				{/* </CopyrightStyledLinks> */}
				{/* </CopyrightWrapper> */}
			</FooterSection>
			{/* </FooterWrapper> */}
		</>
	);
}
