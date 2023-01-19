import Navbar from '../Navbar/Navbar';
import Footer from '/components/Footer/Footer';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className='overflow-hidden'>{children}</div>
			<Footer />
		</>
	);
}
