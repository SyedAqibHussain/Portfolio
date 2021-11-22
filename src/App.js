import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';

function App() {
	const [isDesktop, setIsDesktop] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (window.innerWidth > 769) {
			setIsDesktop(true);
			setIsMobile(false);
		} else {
			setIsMobile(true);
			setIsDesktop(false);
		}
	}, []);
	return (
		<>
			<Hero isDesktop={isDesktop} isMobile={isMobile} />
			<About isDesktop={isDesktop} isMobile={isMobile} />
			<Projects isDesktop={isDesktop} isMobile={isMobile} />
			<Footer />
		</>
	);
}

export default App;
