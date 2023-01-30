import Link from 'next/link';
import React from 'react';

function FAQs() {
	const data = [
		{
			question: 'What are the service times at Celebration Church?',
			paragraph: (
				<>
					Services time varies among each of our locations. Be sure to check
					your location-specific website under our{' '}
					<button className='inline-block'>
						<Link href='/visit'>
							<a>Visit</a>
						</Link>
					</button>{' '}
					page to find the service times of your local congregation. Remember to
					continually check Celebration Church’s website and social media for
					any changes or special events.
				</>
			),
		},
		{
			question: 'Are visitors welcome?',
			paragraph: (
				<>
					Absolutely! We would love for you to visit! Whether youre new to the
					area or just looking for a new church home, we would be honored to
					have you.
				</>
			),
		},
		{
			question: 'What do you have for children?',
			paragraph: (
				<>
					We have a vibrant children’s ministry that offers Sunday gatherings
					and special events for your children. Our Nursery/Preschool ministry
					is made available for children aged newborn-PreK, and our CKids
					experience is tailored for elementary-aged students. Our locations
					also include options for youth and young adults. For more information
					on these ministries, please visit your location-specific website at
					our{' '}
					<button className='inline-block'>
						<Link href='/visit'>
							<a>Visit</a>
						</Link>
					</button>{' '}
					page.
				</>
			),
		},
		{
			question: 'What is the format of your service experiences?',
			paragraph: (
				<>
					Our services include dynamic worship through music, prayer, and a
					Bible-centered message.
				</>
			),
		},
		{
			question: 'How do I become a member of the church?',
			paragraph: (
				<>
					Attend one of our Welcome to Church Parties to learn more about our
					church and what it means to become a member. Please visit your
					location-specific website, that you can find at on our{' '}
					<button className='inline-block'>
						<Link href='/visit'>
							<a>Visit</a>
						</Link>
					</button>{' '}
					page, for dates and specialized next steps!
				</>
			),
		},
		{
			question: 'Are there any membership requirements?',
			paragraph: (
				<>
					Everyone is welcome to attend our services and participate in our
					community, regardless of membership status. We’d love to host you!
				</>
			),
		},
		{
			question: 'Are there online services available?',
			paragraph: (
				<>
					We live stream all Sunday services live at 8:45am EST at our{' '}
					<button className='inline-block'>
						<a href='https://www.youtube.com/user/CelebrationWeb'>Watch</a>
					</button>{' '}
					page.
				</>
			),
		},
		{
			question: 'Is there parking available?',
			paragraph: <>We have ample parking available at each of our locations.</>,
		},
		{
			question: 'Is the church handicap accessible?',
			paragraph: (
				<>
					Yes, our facilities are fully accessible to those with disabilities,
					including handicapped parking.
				</>
			),
		},
		{
			question: 'How can I give?',
			paragraph: (
				<>
					You can view all of your different ways to give by clicking{' '}
					<button className='inline-block'>
						<Link href='/give'>
							<a>here</a>
						</Link>
					</button>{' '}
					.
				</>
			),
		},
		{
			question: 'Are there any additional services or small groups available?',
			paragraph: (
				<>
					We offer a variety of events and activities, such as small groups,
					aged-specific groups, gender-specific groups, Bible studies, worship
					nights, and conferences. Please check your location-specific website,
					by visiting our{' '}
					<button className='inline-block'>
						<Link href='/visit'>
							<a>Visit</a>
						</Link>
					</button>{' '}
					page, for more information!
				</>
			),
		},
		{
			question: 'How can I get involved in the church?',
			paragraph: (
				<>
					There are many ways to get involved at Celebration Church, such as
					joining a small group, serving on a team, or participating in one of
					our many events and activities. Visit the Ministries page of your
					location-specific website or visit us at our Connect space in the
					lobby of each of our service experiences for your next steps. We would
					love for you to get involved and become part of our community!
				</>
			),
		},
		{
			question: 'How can I request prayer?',
			paragraph: (
				<>
					You can request prayer by speaking with one of our pastors or leaders
					at any of our locations. You can also submit a prayer request online
					by clicking{' '}
					<button className='inline-block'>
						<a href='https://my.celebration.org/portal/get_form.aspx?ID=6bc5f420-26f8-41f1-8149-9344dd2676e6&template=campus-jax&remembertemplate=true'>
							here
						</a>
					</button>{' '}
					.
				</>
			),
		},
		{
			question: 'What are your core theological beliefs?',
			paragraph: (
				<>
					An in-depth listing of what we believe at Celebration Church can be
					found{' '}
					<button className='inline-block'>
						<Link href='/about'>
							<a>here</a>
						</Link>
					</button>{' '}
					. <br /> (Spoiler Alert: It’s all about Jesus!)
				</>
			),
		},
	];
	return (
		<>
			<div className='flex flex-col items-center w-[100vw] '>
				<div className='flex flex-col w-full max-w-[768px] p-8'>
					<div className='flex w-full justify-center md:justify-start items-center my-4 mb-16'>
						<h1 className='font-display font-semibold text-[74px] md:text-[140px] text-[#070707]'>
							<span className='font-kepler italic text-[1.1em]'>FAQs</span>
						</h1>
					</div>
					{data.map((faq, index) => (
						<div key={index} className='flex flex-col gap-y-4 mb-8'>
							<div className='mt-2'>
								<h2 className='font-display font-semibold text-[20px] md:text-[26px] text-[#070707] uppercase'>
									{faq.question}
								</h2>
							</div>
							<div>
								<p className='font-display font-normal text-[18px] text-[#7C7C7C] leading-relaxed'>
									{faq.paragraph}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default FAQs;
