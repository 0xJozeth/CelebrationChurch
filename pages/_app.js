import Head from 'next/head';
import { Container } from 'next/app';
import Layout from '/components/Layout/layout.js';
import '../styles/globals.css';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import '@fortawesome/fontawesome-svg-core/styles.css';
// config.autoAddCss = false;

// import your fontawesome library
import '/components/FontAwesome/fontawesome.js';

import '/sass/main.scss';

function App({ Component, pageProps, router }) {
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
					<Component {...pageProps} />
				</motion.div>
			</Layout>
		</AnimatePresence>
	);
}

export default App;
