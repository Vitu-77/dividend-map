import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();

		const page = renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />)
		);

		const styleTags = sheet.getStyleElement();

		return { ...page, styleTags };
	}

	render() {
		return (
			<html>
				<Head>
					{this.props.styleTags}
					<meta
						name='viewport'
						content='initial-scale=1.0, width=device-width'
					/>
				</Head>
				<body style={{ height: '100%' }}>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
