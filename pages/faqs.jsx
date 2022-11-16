import React from 'react';

function FAQs() {
	return (
		<>
			<div className='flex flex-col items-center w-[100vw] '>
				<div className='flex flex-col w-full max-w-[1440px] p-16'>
					<div className='flex w-full justify-start items-center my-4'>
						<h1 className='font-display font-semibold text-[54px] text-[#070707]'>
							FAQs
						</h1>
					</div>
					<div className='flex flex-col gap-y-8 my-4'>
						<div>
							<h2 className='font-display font-semibold text-[32px] text-[#070707] uppercase'>
								Why should I give?
							</h2>
						</div>
						<div>
							<p className='font-display font-normal text-[18px] text-[#7C7C7C]'>
								Trusting God and putting Him first in your finances declares a
								blessing over your life. God tells us to test him in bringing
								the whole tithe and see if He will not “throw open the
								floodgates of heaven and pour out so much blessing that there
								will not be room enough to store it” (Malachi 3:10).
								<br />
								<br />
								Your giving at Celebration Church will allow us to reach others
								and increase their awareness of the Good News, the Gospel of
								Jesus Christ.{' '}
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-y-8 my-4'>
						<div>
							<h2 className='font-display font-semibold text-[32px] text-[#070707] uppercase'>
								HOW DO I KNOW THAT MY GIVING IS BEING USED FOR KINGDOM PURPOSES?
							</h2>
						</div>
						<div>
							<p className='font-display font-normal text-[18px] text-[#7C7C7C]'>
								Celebration Church has multiple checks and balances in place to
								ensure that your giving is allocated specifically towards
								Kingdom work. We are accredited by the Evangelical Counsel for
								Financial Accountability and we take part in an annual voluntary
								audit.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-y-8 my-4'>
						<div>
							<h2 className='font-display font-semibold text-[32px] text-[#070707] uppercase'>
								WHERE CAN I GET INFORMATION ON FINANCIAL AND PRACTICAL CARE?
							</h2>
						</div>
						<div>
							<p className='font-display font-normal text-[18px] text-[#7C7C7C]'>
								Financial and practical care is available to all of our members.
								You can read more details and apply for care here. You can also
								contact our Care team at care@celebration.org or at (904)737-
								1121.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-y-8 my-4'>
						<div>
							<h2 className='font-display font-semibold text-[32px] text-[#070707] uppercase'>
								HOW SECURE IS MY ONLINE OR MOBILE GIVING?
							</h2>
						</div>
						<div>
							<p className='font-display font-normal text-[18px] text-[#7C7C7C]'>
								Celebration Church partners with echurch powered by Pushpay to
								offer convenient giving options. Pushpay engages the highest
								industry standards of security in data storage, identity
								verification, and extensive monitoring of system activity.
								Celebration Church is and will continue to be PCI compliant.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-y-8 my-4'>
						<div>
							<h2 className='font-display font-semibold text-[32px] text-[#070707] uppercase'>
								I ACCIDENTALLY SUBMITTED A TITHE TWICE. HOW DO I CORRECT THIS
								ERROR?
							</h2>
						</div>
						<div>
							<p className='font-display font-normal text-[18px] text-[#7C7C7C]'>
								Please contact us at giving@celebration.org or at (904)737-1121
								and we will be happy to assist you.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-y-8 my-4'>
						<div>
							<h2 className='font-display font-semibold text-[32px] text-[#070707] uppercase'>
								WHAT DO I DO IF MY TITHE/OFFERING CHECK HAS NOT CLEARED?
							</h2>
						</div>
						<div>
							<p className='font-display font-normal text-[18px] text-[#7C7C7C]'>
								The standard processing time for a tithe/offering check is 3-5
								business days. However, you may always contact us at
								giving@celebration.org or at 904-737-1121 should you have any
								concerns about your giving.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-y-8 my-4'>
						<div>
							<h2 className='font-display font-semibold text-[32px] text-[#070707] uppercase'>
								WHAT IS THE BEST WAY TO GIVE TO A SPECIFIC MISSION TRIP?
							</h2>
						</div>
						<div>
							<div>
								<p className='font-display font-normal text-[18px] text-[#7C7C7C]'>
									There are three ways to donate to one of our mission trips:{' '}
								</p>
								<br />
								<br />
								<ol>
									<li className='font-display font-normal text-[18px] text-[#7C7C7C]'>
										1. Go to the missions page on our website or on the
										Celebration App and select the trip you would like to donate
										to.
									</li>{' '}
									<br />
									<br />
									<li className='font-display font-normal text-[18px] text-[#7C7C7C]'>
										2. Give using the unique mission trip URL provided by the
										mission team member you are donating to.
									</li>{' '}
									<br />
									<br />
									<li className='font-display font-normal text-[18px] text-[#7C7C7C]'>
										3. Fill out a giving envelope with the team member’s trip
										information and place in the offering box during any of our
										weekly services.
									</li>
								</ol>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-y-8 my-4'>
						<div>
							<h2 className='font-display font-semibold text-[32px] text-[#070707] uppercase'>
								HOW CAN I GET A COPY OF THE ANNUAL AUDITED FINANCIALS?
							</h2>
						</div>
						<div>
							<p className='font-display font-normal text-[18px] text-[#7C7C7C]'>
								Send an email to{' '}
								<a
									href='mailto:giving@celebration.org'
									target='_blank'
									rel='noopener noreferrer'
								>
									giving@celebration.org
								</a>{' '}
								and our team will send you a copy.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default FAQs;
