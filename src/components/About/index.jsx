import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title';

import profileImg from '../../assets/images/me.jpg';

import './styles.css';

const About = ({ isDesktop, isMobile }) => {
	return (
		<section id='about'>
			<Container>
				<Title title='About Me' />
				<Row className='about-wrapper'>
					<Col md={6} sm={12}>
						<Fade bottom duration={1000} delay={600} distance='30px'>
							<div className='about-wrapper-image'>
								<img
									src={profileImg}
									className='rounded shadow-lg about-image'
									alt='about'
								/>
							</div>
						</Fade>
					</Col>
					<Col md={6} sm={12}>
						<Fade
							left={isDesktop}
							bottom={isMobile}
							duration={1000}
							delay={1000}
							distance='30px'
						>
							<div className='about-wrapper-info'>
								<p className='about-wrapper-info-text'>
									I am experienced in HTML5, CSS3, SASS, JavaScript, React.js,
									Redux, React Native, GraphQL, Apollo, Three.js, REST API
									integration, D3.js, Node.js, Express.js, Firebase, JSON,
									MongoDB, NPM, Git, GitHub, Azure DevOps and Trello.
								</p>
								<p className='about-wrapper-info-text'>
									I thrive in learning new technologies, adapt easily, have
									strong analytical and problem-solving skills and take feedback
									positively for continuous improvements, and am also available
									for remote work.
								</p>
								<p className='about-wrapper-info-text'>
									I am self-motivated and have worked in agile software
									development and also have experience in leading other
									developers to deliver better output as team while learning
									from them simultaneously.
								</p>
								<span className='d-flex mt-3'>
									<a
										target='_blank'
										rel='noopener noreferrer'
										className='cta-btn cta-btn--resume'
										href='https://github.com/SyedAqibHussain/portfolio/raw/master/src/assets/CV.pdf'
									>
										Resume
									</a>
								</span>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default About;
