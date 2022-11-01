import styled from 'styled-components';
import { CgArrowLongRight } from 'react-icons/cg';
import { useAnimation, useInView, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

import Link from 'next/link';

const MainContainer = styled.div`
	display: grid;
	/* margin: 2em; */
	width: 100%;
	height: 100%;
	place-items: center;
	place-self: center;
`;
const ContentContainer = styled.div`
	display: grid;

	margin-block: 4em;
	margin-inline: 4em;
	grid-template-columns: 1fr 1fr;
	/* grid-column: 1 / span 2; */
	cursor: pointer;
	/* height: 50%; */
	width: 75%;

	align-content: center;
	/* place-self: center; */
	justify-self: center;
	place-items: center;
	outline: 2px solid #070707;
`;

const FollowJesusBtn = styled.div`
	grid-column: 1 / span 2;
	justify-content: center;
	align-items: center;
	font-family: 'neue-haas-grotesk-display';
	font-weight: 400;
	font-size: 4.5vw;
	letter-spacing: 0.15rem;
`;

const FollowJesusText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ArrowBtn = styled.div`
	transform: scaleX(1.25);
	transform: scaley(0.75);
	margin-inline: 1em;
`;

export default function FollowJesusSection() {
	const ref = useRef();
	const animation = useAnimation();
	const isInView = useInView(ref);

	useEffect(() => {
		// console.log('use effect hook, isInView = ', isInView);
	}, [isInView]);
	if (isInView) {
		animation.start({
			x: 0,
			y: 0,
			opacity: 1,
			delay: 0,
			transition: { type: 'spring', duration: 1, bounce: 0.15 },
		});
	}
	if (!isInView) {
		animation.start({ x: '-100vw', opacity: 0 });
	}

	return (
		<>
			<MainContainer>
				<Link href='/follow' passHref>
					<ContentContainer>
						<FollowJesusBtn ref={ref}>
							<motion.div
								animate={animation}
								whileHover={{
									scale: 1.08,
									transition: { duration: 0.15 },
								}}
								// initial='hidden'
								// animate='visible'
								// variants={{
								// 	hidden: {
								// 		scale: 0.8,
								// 		opacity: 0,
								// 		y: 25,
								// 	},
								// 	visible: {
								// 		scale: 1,
								// 		opacity: 1,
								// 		y: 0,
								// 		transition: {
								// 			delay: 0.05,
								// 		},
								// 	},
								// }}
							>
								<FollowJesusText>
									FOLLOW JESUS
									<ArrowBtn>
										<CgArrowLongRight size={'6vw'} />
									</ArrowBtn>
								</FollowJesusText>
							</motion.div>
						</FollowJesusBtn>
					</ContentContainer>
				</Link>
			</MainContainer>
		</>
	);
}
