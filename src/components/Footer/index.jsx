import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

import './styles.css';

const Footer = () => {
	return (
		<footer className='footer navbar-static-bottom'>
			<Container>
				<span className='back-to-top'>
					<Link to='hero' duration={1000}>
						<i className='fa fa-angle-up fa-2x' aria-hidden='true' />
					</Link>
				</span>
				<div className='social-links'>
					<a
						href='https://www.linkedin.com/in/aqib-hussain-syed-0a2010106/'
						rel='noopener noreferrer'
						target='_blank'
						aria-label='linkedin'
					>
						<i className='fa fa-brands fa-linkedin' />
					</a>
					<a
						href='https://github.com/SyedAqibHussain'
						rel='noopener noreferrer'
						target='_blank'
						aria-label='github'
					>
						<i className='fa fa-brands fa-github' />
					</a>
				</div>
				<hr />
				<p className='footer-text'>
					© {new Date().getFullYear()} - Developed by{' '}
					<a
						href='https://github.com/SyedAqibHussain'
						target='_blank'
						rel='noopener noreferrer'
					>
						Syed Aqib Hussain
					</a>
				</p>
			</Container>
		</footer>
	);
};

export default Footer;
