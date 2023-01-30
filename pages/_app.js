import Head from 'next/head';
import App, { Container } from 'next/app';
import Layout from '/components/Layout/layout.js';
import '../styles/globals.css';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
//IMPORT FORTAWESOME
import '/components/FontAwesome/fontawesome.js';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import '/sass/main.scss';

//FONT AWESOME CONFIG
config.autoAddCss = false;
library.add(fas);

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}
	// NOTE: This useEffect is essential for tw-elements to run properly.
	// componentDidMount() {
	// 	const use = async () => {
	// 		(await import('tw-elements')).default;
	// 	};
	// 	use();
	// }

	render() {
		const { Component, pageProps, router } = this.props;
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
						<Component {...pageProps} />
					</motion.div>
				</Layout>
			</AnimatePresence>
		);
	}
}

export default MyApp;
