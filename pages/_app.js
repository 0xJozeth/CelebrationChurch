import { useEffect } from 'react';
import Head from 'next/head';
import { Container } from 'next/app';
import Layout from '/components/Layout/layout.js';
import '../styles/globals.css';
import Script from 'next/script';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import '@fortawesome/fontawesome-svg-core/styles.css';
// config.autoAddCss = false;

// import your fontawesome library
import '/components/FontAwesome/fontawesome.js';

import '/sass/main.scss';

function App({ Component, pageProps, router }) {
	// NOTE: This useEffect is essential for tw-elements to run properly
	useEffect(() => {
		const use = async () => {
			(await import('tw-elements')).default;
		};
		use();
	}, []);

	return (
		<AnimatePresence>
			<Layout>
				<motion.div
					key={router.route}
					initial='pageInitial'
					animate='pageAnimate'
					variants={{
						pageInitial: {
							opacity: 0,
							y: '5vh',
						},
						pageAnimate: {
							opacity: 1,
							y: '0',
							transition: {
								delay: 0.4,
							},
						},
					}}
				>
					<Head>
						<title>
							Celebration Church | Jacksonville, FL Church | Pastor Tim
							Timberlake&nbsp;&amp;&nbsp;Jen Timberlake
						</title>
						<meta
							name='viewport'
							content='width=device-width, initial-scale=1 maximum-scale=1'
						/>
					</Head>
					<Script async src='/node_modules/tw-elements/dist/js/index.min.js' />

					<Component {...pageProps} />
				</motion.div>
			</Layout>
		</AnimatePresence>
	);
}

export default App;
