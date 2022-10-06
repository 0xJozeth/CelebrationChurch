import Link from 'next/link';
import {
	Nav,
	NavContainer,
	NavWrapper,
	StyledHeader,
	ImageWrapper,
	LinkWrapper,
	Styledul,
	Styledli,
	Styleda,
	StyledDivider,
	BurgerWrapper,
} from '../components/Styles/Headercopy.styled';
import CcLogo from '/public/cc-logo@1x.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HamburgerMenu } from '../components/Navbar/hamburgerMenu';
import { RiArrowRightUpLine } from 'react-icons/ri';

export default function Headercopy() {
	return (
		// <Nav>
		<NavContainer>
			{/* <NavWrapper> */}
			{/* LOGO START */}
			<ImageWrapper>
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
					<Link href='/' passHref>
						<Image
							src={CcLogo}
							alt='Celebration-church-logo'
							width={222}
							height={62}
							layout='fixed'
							priority
							//or use object-fit='cover' if intrinsic causes errors
						/>
					</Link>
					{/* </Styleda>
						</Styledli> */}
				</motion.div>
			</ImageWrapper>
			{/* LOGO END */}
			{/* MENU ITEMS START*/}
			<LinkWrapper>
				{/* <Styledul> */}
				<motion.div
					whileHover={{
						scale: 1.08,
						transition: { duration: 0.15 },
					}}
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
							y: 25,
						},
						visible: {
							scale: 1,
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.05,
							},
						},
					}}
				>
					<Styledli>
						<Styleda href='/about'>ABOUT</Styleda>
					</Styledli>
				</motion.div>
				<StyledDivider>/</StyledDivider>
				<motion.div
					whileHover={{
						scale: 1.08,
						transition: { duration: 0.15 },
					}}
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
							y: 25,
						},
						visible: {
							scale: 1,
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.05,
							},
						},
					}}
				>
					<Styledli>
						<Styleda href='/visit'>VISIT</Styleda>
					</Styledli>
				</motion.div>
				<StyledDivider>/</StyledDivider>
				<motion.div
					whileHover={{
						scale: 1.08,
						transition: { duration: 0.15 },
					}}
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
							y: 25,
						},
						visible: {
							scale: 1,
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.05,
							},
						},
					}}
				>
					<Styledli>
						<Styleda href='https://youtube.com/playlist?list=PL_rUYhs8Fc5KUuzbEc6pqA1IsAtoM6Z1I'>
							WATCH
							<RiArrowRightUpLine />
						</Styleda>
					</Styledli>
				</motion.div>
				<StyledDivider>/</StyledDivider>
				<motion.div
					whileHover={{
						scale: 1.08,
						transition: { duration: 0.15 },
					}}
					initial='hidden'
					animate='visible'
					variants={{
						hidden: {
							scale: 0.8,
							opacity: 0,
							y: 25,
						},
						visible: {
							scale: 1,
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.05,
							},
						},
					}}
				>
					<Styledli>
						<Styleda href='/give'>GIVE</Styleda>
					</Styledli>
				</motion.div>
				{/* </Styledul> */}
			</LinkWrapper>
			{/* MENU ITEMS END */}
			{/* HAMBURGER MENU START */}
			{/* <BurgerWrapper> */}
			<motion.div
				whileHover={{
					scale: 1.08,
					transition: { duration: 0.15 },
				}}
				initial='hidden'
				animate='visible'
				variants={{
					hidden: {
						scale: 0.8,
						opacity: 0,
						y: 25,
					},
					visible: {
						scale: 1,
						opacity: 1,
						y: 0,
						transition: {
							delay: 0.05,
						},
					},
				}}
			>
				{/* <Styledli>
					<Styleda> */}
				<HamburgerMenu />
				{/* </Styleda>
				</Styledli> */}
			</motion.div>
			{/* </BurgerWrapper> */}
			{/* HAMBURGER MENU END */}
			{/* </NavWrapper> */}
		</NavContainer>
		// </Nav>
	);
}
