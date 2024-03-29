import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { render } from 'node-sass';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	//--------------For styled-components only------------//
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link href='https://use.typekit.net/ezq3zbz.css' rel='stylesheet' />
				</Head>
				<body>
					<Script src='/node_modules/tw-elements/dist/js/index.min.js' />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
