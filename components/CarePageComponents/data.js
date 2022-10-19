import Link from 'next/link';
import Image from 'next/image';

const containerData = (props) => {
	const data = [
		{
			heading: 'heading1',
			paragraph: 'lorem ipsum stuff 1',
			link: 'Click here for 1',
			id: '1',
		},
		{
			heading: 'heading2',
			paragraph: 'lorem ipsum stuff 2',
			link: 'Click here for 2',
			id: '2',
		},
		{
			heading: 'heading3',
			paragraph: 'lorem ipsum stuff 3',
			link: 'Click here for 3',
			id: '3',
		},
	];

	const { heading, paragraph, link, id } = props;
	return (
		<div className='rowContainer'>
			<Image src={image1} alt='' />
			<div className='contentGrid'>
				<h2>STUFF GOES HERE</h2>
				<p>
					Here at Celebration, our heart is to equip you and your family with a
					safe space to grow your relationship with Jesus while cultivating the
					type of community that stewards God’s intention for fellowship with
					one another. We believe that true life change happens in real,
					authentic relationships! At each Celebration location, we have various
					ministries available for all different age ranges that help create
					these places for growth and community!
				</p>
				<Link href='/'>
					<div>
						<a>ClICK HERE FOR MORE</a>
						<Image src={arrow} alt='' />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default containerData;
