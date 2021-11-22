import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import './styles.css';

function Hero({ isDesktop, isMobile }) {
	return (
		<section id='hero' className='jumbotron'>
			<Container>
				<Fade
					left={isDesktop}
					bottom={isMobile}
					duration={1000}
					delay={500}
					distance='30px'
				>
					<h1 className='hero-title'>
						Hi, my name is
						<span className='text-color-main'> Syed Aqib Hussain</span>
						<br />
						I'm a Full-Stack Developer.
					</h1>
				</Fade>
				<Fade
					left={isDesktop}
					bottom={isMobile}
					duration={1000}
					delay={1000}
					distance='30px'
				>
					<p className='hero-cta'>
						<span className='cta-btn cta-btn--hero'>
							<Link to='about' duration={500}>
								Know more
							</Link>
						</span>
					</p>
				</Fade>
			</Container>
		</section>
	);
}

export default Hero;
