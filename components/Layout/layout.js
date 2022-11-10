import Footer from '/components/Footer/Footer';

import Navbar from '../Header/Navbar';

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<div className='overflow-hidden'>{children}</div>
			<Footer />
		</>
	);
}
