import Navbar from '../Navbar/Navbar';
import Footer from '/components/Footer/Footer';

export default function Layout({ children }) {
	console.log('children', children);
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
