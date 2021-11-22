import React from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title';

import chairImg from '../../assets/images/chair.png';
import datacyImg from '../../assets/images/datacy.png';
import eriyadaImg from '../../assets/images/eriyada.png';

import './styles.css';

const Projects = ({ isDesktop, isMobile }) => {
	return (
		<section id='projects'>
			<Container>
				<div className='project-wrapper'>
					<Title title='Projects' />
					{/* 3d chair */}
					<Row>
						<Col lg={4} sm={12}>
							<Fade
								left={isDesktop}
								bottom={isMobile}
								duration={1000}
								delay={500}
								distance='30px'
							>
								<div className='project-wrapper-text'>
									<h3 className='project-wrapper-text-title'>
										Customizable 3d chair
									</h3>
									<div>
										<p>
											Personal project, developed a customizable 3d chair using
											three.js and react to learn new and interesting
											technologies.
										</p>
									</div>
									<a
										target='_blank'
										rel='noopener noreferrer'
										className='cta-btn cta-btn--hero'
										href='https://syedaqibhussain.github.io/3d-projects/'
									>
										See Live
									</a>
								</div>
							</Fade>
						</Col>
						<Col lg={8} sm={12}>
							<Fade
								right={isDesktop}
								bottom={isMobile}
								duration={1000}
								delay={1000}
								distance='30px'
							>
								<div className='project-wrapper-image'>
									<a
										href='https://syedaqibhussain.github.io/3d-projects/'
										target='_blank'
										aria-label='Project Link'
										rel='noopener noreferrer'
									>
										<Tilt
											options={{
												reverse: false,
												max: 8,
												perspective: 1000,
												scale: 1,
												speed: 300,
												transition: true,
												axis: null,
												reset: true,
												easing: 'cubic-bezier(.03,.98,.52,.99)',
											}}
										>
											<div data-tilt className='thumbnail rounded'>
												<img
													src={chairImg}
													className='project-image'
													alt='project'
												/>
											</div>
										</Tilt>
									</a>
								</div>
							</Fade>
						</Col>
					</Row>
					{/* Datacy */}
					<Row>
						<Col lg={4} sm={12}>
							<Fade
								left={isDesktop}
								bottom={isMobile}
								duration={1000}
								delay={500}
								distance='30px'
							>
								<div className='project-wrapper-text'>
									<h3 className='project-wrapper-text-title'>Datacy</h3>
									<div>
										<p>
											Developed the website and two web applications and a
											chrome browser extension as the only frontend developer
											and also helped with the backend.
										</p>
									</div>
									<a
										target='_blank'
										rel='noopener noreferrer'
										className='cta-btn cta-btn--hero'
										href='https://datacy.com/'
									>
										See Live
									</a>
								</div>
							</Fade>
						</Col>
						<Col lg={8} sm={12}>
							<Fade
								right={isDesktop}
								bottom={isMobile}
								duration={1000}
								delay={1000}
								distance='30px'
							>
								<div className='project-wrapper-image'>
									<a
										href='https://datacy.com/'
										target='_blank'
										aria-label='Project Link'
										rel='noopener noreferrer'
									>
										<Tilt
											options={{
												reverse: false,
												max: 8,
												perspective: 1000,
												scale: 1,
												speed: 300,
												transition: true,
												axis: null,
												reset: true,
												easing: 'cubic-bezier(.03,.98,.52,.99)',
											}}
										>
											<div data-tilt className='thumbnail rounded'>
												<img
													src={datacyImg}
													className='project-image'
													alt='project'
												/>
											</div>
										</Tilt>
									</a>
								</div>
							</Fade>
						</Col>
					</Row>
					{/* Eriyada */}
					<Row>
						<Col lg={4} sm={12}>
							<Fade
								left={isDesktop}
								bottom={isMobile}
								duration={1000}
								delay={500}
								distance='30px'
							>
								<div className='project-wrapper-text'>
									<h3 className='project-wrapper-text-title'>Eriyada</h3>
									<div>
										<p>
											Helped develop a web application and apps for IOS and
											android, and managed a small team.
										</p>
									</div>
									<a
										target='_blank'
										rel='noopener noreferrer'
										className='cta-btn cta-btn--hero'
										href='https://www.eriyada.com/eriyada-board/'
									>
										See Live
									</a>
								</div>
							</Fade>
						</Col>
						<Col lg={8} sm={12}>
							<Fade
								right={isDesktop}
								bottom={isMobile}
								duration={1000}
								delay={1000}
								distance='30px'
							>
								<div className='project-wrapper-image'>
									<a
										href='https://www.eriyada.com/eriyada-board/'
										target='_blank'
										aria-label='Project Link'
										rel='noopener noreferrer'
									>
										<Tilt
											options={{
												reverse: false,
												max: 8,
												perspective: 1000,
												scale: 1,
												speed: 300,
												transition: true,
												axis: null,
												reset: true,
												easing: 'cubic-bezier(.03,.98,.52,.99)',
											}}
										>
											<div data-tilt className='thumbnail rounded'>
												<img
													src={eriyadaImg}
													className='project-image'
													alt='project'
												/>
											</div>
										</Tilt>
									</a>
								</div>
							</Fade>
						</Col>
					</Row>
				</div>
			</Container>
		</section>
	);
};

export default Projects;
