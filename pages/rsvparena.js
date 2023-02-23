import React, { useEffect } from 'react';

function Rsvparena() {
	useEffect(() => {
		const fetchScript = async () => {
			try {
				const response = await fetch(
					'https://celebration.rsvp.blackpulp.com/app/rsvp.js',
					{
						mode: 'no-cors',
					}
				);
				console.log('response', response);
				const script = await response.text();

				const rsvpElement = document.getElementById('rsvp4-1');
				if (rsvpElement) {
					rsvpElement.innerHTML = `<script>${script}</script>`;
					const rsvpConfig = {
						maxReservations: 6,
						filters: { Congregation_ID: '4,1' },
					};
					const rsvpScript = rsvpElement.querySelector('script');
					if (rsvpScript) {
						rsvpScript.addEventListener('load', () => {
							if (typeof rsvp !== 'undefined') {
								try {
									rsvp.init(rsvpElement, rsvpConfig);
								} catch (error) {
									console.error('Failed to initialize rsvp', error);
								}
							} else {
								console.warn('Could not find rsvp object');
							}
						});
					} else {
						console.warn('Could not find rsvp script');
					}
				} else {
					console.warn('Could not find rsvpElement');
				}
			} catch (error) {
				console.error('Failed to fetch rsvp script', error);
			}
		};

		fetchScript();
	}, []);
	return (
		<>
			<h3>Arena</h3>
			<hr />
			<div id='rsvp4-1'>
				<h3>Loading Worship Times...</h3>
			</div>
			<mpp-event-details
				returnurl='https://celebrationjax.org/events/'
				checkouturl='https://celebrationjax.org/index.php/checkouttest/'
				opportunityfinderwidgettargeturl='https://celebrationjax.org/serve-opps/'
			/>
		</>
	);
}

export default Rsvparena;
