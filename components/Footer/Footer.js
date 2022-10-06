import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import cclogo from '/public/celebration-logo@1x.png';

const Grid = styled.div`
	display: grid;
	place-items: center;
	outline: 1px solid #070707;
	margin-block: 2em;
	padding: 2em;
`;

const FooterWrapper = styled.div`
	display: grid;
	grid-column-gap: 2.5%;
	grid-template-columns: repeat(6, 1fr);
	grid-template-areas: 'image connect media resources opportunities download';
	width: 100%;
	height: 100%;
`;

const ImageSection = styled.div`
	margin: 3.5em;
	justify-self: center;
`;

const StyledImage = styled(Image)`
	grid-area: image;
`;

const ConnectSection = styled.div`
	grid-area: connect;
	justify-self: center;
	align-items: space-between;

	height: 100%;
`;

const MediaSection = styled.div`
	grid-area: media;
	justify-self: center;
`;
const ResourcesSection = styled.div`
	grid-area: resources;
	justify-self: center;
`;
const OpportunitiesSection = styled.div`
	grid-area: opportunities;
	justify-self: center;
`;
const DownloadSection = styled.div`
	grid-area: download;
	justify-self: center;
`;

const ColumnHeader = styled.div`
	font-family: 'neue-haas-grotesk-display';
	font-style: normal;
	font-weight: 700;
	font-size: small;
	line-height: 3em;
`;

const ColumnLink = styled.a`
	color: #070707;
	font-family: 'neue-haas-grotesk-display';
	font-style: normal;
	font-weight: 500;
	line-height: 5em;

	text-decoration: none;
	cursor: pointer;
`;

export default function Footer() {
	return (
		<Grid>
			<FooterWrapper>
				<ImageSection>
					<StyledImage src={cclogo} alt='' />
				</ImageSection>
				<ConnectSection>
					<ColumnHeader>CONNECT</ColumnHeader>
					<ul>
						<li>
							<Link href='/about' passHref>
								<ColumnLink>About</ColumnLink>
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link href='/visit' passHref>
								<ColumnLink>Visit</ColumnLink>
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link href='/care' passHref>
								<ColumnLink>Care</ColumnLink>
							</Link>
						</li>
					</ul>
				</ConnectSection>
				<MediaSection>
					<ColumnHeader>MEDIA</ColumnHeader>
					<ul>
						<li>
							<Link href='/celebration-everywhere' passHref>
								<ColumnLink>Celebration Everywhere</ColumnLink>
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link href='/worship' passHref>
								<ColumnLink>Worship</ColumnLink>
							</Link>
						</li>
					</ul>
				</MediaSection>
				<ResourcesSection>
					<ColumnHeader>RESOURCES</ColumnHeader>
					<ul>
						<li>
							<Link href='/give' passHref>
								<ColumnLink>Give</ColumnLink>
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link href='/bible-reading-plan' passHref>
								<ColumnLink>Bible Reading Plan</ColumnLink>
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link href='/cKids-Online' passHref>
								<ColumnLink>cKids Online</ColumnLink>
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link href='/shop' passHref>
								<ColumnLink>Shop</ColumnLink>
							</Link>
						</li>
					</ul>
				</ResourcesSection>
				<OpportunitiesSection>
					<ColumnHeader>OPPORTUNITIES</ColumnHeader>
					<ul>
						<li>
							<Link href='/jobs' passHref>
								<ColumnLink>Jobs</ColumnLink>
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link href='/seu-jacksonville' passHref>
								<ColumnLink>SEU Jacksonville</ColumnLink>
							</Link>
						</li>
					</ul>
				</OpportunitiesSection>
				<DownloadSection>
					<ColumnHeader>DOWNLOAD</ColumnHeader>
					<ul>
						<li>
							<Link
								href='https://apps.apple.com/us/app/the-celebration-app/id1210190693'
								passHref
							>
								<ColumnLink>Apple App Store</ColumnLink>
							</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link
								href='https://play.google.com/store/apps/details?id=com.echurchapps.celebrationchapp&hl=en_US&gl=US'
								passHref
							>
								<ColumnLink>Google Play Store</ColumnLink>
							</Link>
						</li>
					</ul>
				</DownloadSection>
			</FooterWrapper>
		</Grid>
	);
}
