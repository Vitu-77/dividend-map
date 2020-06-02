import Head from 'next/head';
import Link from 'next/link';
import Axios from 'axios';

export default ({ fox }) => {
	return (
		<>
			<Link href='/company/1234'>link</Link>
			<img src={fox.image} />
		</>
	);
};

export const getStaticProps = async () => {
	const fox = await Axios.get('https://randomfox.ca/floof/');

	return {
		props: { fox: fox.data },
	};
};

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};
