import './HomePage.css'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'
import Flash from 'react-reveal/Flash';
import Jump from 'react-reveal/Jump'

import {Button, Card } from 'react-bootstrap';
import chevron from './chevron.png'

const HomePage = () => {    
	
	const name = ['A', 'm', 'v', 'i', 's', 't', 'o', 'n'];

	return(
	<div>
		<div className="home-wrapper">
			<div className="home-carousel">
				<div className="title-wrapper" style={{backgroundColor: "transparent", top: "20vh"}}>
					<div class="title" 
							style={{position: "relative", 
									wordWrap: "break-word", 
									backgroundColor: "transparent", 
									fontWeight:"bold", display:'flex', 
									flexDirection:'row', justifyContent:'center'}}>

							{
								name.map((letter, key) => {
									return (
										<Slide delay={key*100} top duration={500}>
											<p style={{paddingRight:'0.2vw', margin:'0'}}>{letter}</p> 
										</Slide>
									)
								})
							}
					</div>
					
					<div class="subtitle" style={{position: "relative", wordWrap: "break-word", backgroundColor: "transparent"}}>
						<Fade top delay="400"> Creating novel Engineering and Medical solutions </Fade>
					</div>
					
					<Fade delay={1000}>
						<Jump delay={1500} duration={2000} forever top>
							<img style={{width:'3vw', marginTop:'30vh', marginBottom:'2vh'}} src={chevron}/>
						</Jump>
						<p> Learn More </p>
					</Fade>
				</div>



				
					{//<img src={Logo}/>
					}
			</div>

			<div className="about-wrapper">
				<div className='about-top'>
					<div className="about-left" >
						<Fade left delay={100}>
							<div className="about-title">
								<p>  What we do </p>
							</div>
						</Fade>
						<Fade left delay={400}>
							<div className="about-content">
								<p> Amviston was founded on a vision to develop innovative systems and solutions that promotes wellbeing of people of 
all ages, using environment friendly sustainable methods, while minimizing impact to our environment. We work on 
identifying needs of the society in a wholistic approach and take steps to find optimized solutions by exploring newer 
frontiers of science and technology. </p>
							</div>
							<Button variant='outline-dark' size='lg'> Learn More </Button>
						</Fade>
					</div>
				</div>

				<Fade top>
					<div className='line'></div>
				</Fade>
			</div>



			<div className = "approach-wrapper  " style = {{paddingLeft: "12vw", display: "flex", width: "100vw", flexDirection: "column", paddingTop: "25vh", paddingBottom: "20vh", backgroundColor: "#ffffff"}}>
				<Fade top>
					<h1 style = {{fontSize: "3rem", fontWeight: "bold", textAlign: "left", backgroundColor: "transparent", marginBottom: "15vh"}}> Areas of Expertise </h1>
				</Fade>

				<div className = "cards">
					<Fade top delay = {200}>
						<Card className="content-cards" style={{borderRadius: "20px"}}>
							<Card.Body>
								<Card.Title> <p style={{fontSize: "1.8rem", fontWeight:"bold"}}> Engineering Services </p> </Card.Title>
								<Card.Text>
									<p style={{fontSize: "1.4rem"}}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr </p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Fade>
					
					<Fade top delay = {400}>
						<Card className="content-cards" style={{borderRadius: "20px"}}>
							<Card.Body>
								<Card.Title> <p style={{fontSize: "1.8rem", fontWeight:"bold"}}> Medical devices and systems </p>  </Card.Title>
								<Card.Text>
									<p style={{fontSize: "1.4rem"}}> o laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null u fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culp</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Fade>
					
					<Fade top delay = {600}>
						<Card className="content-cards" style={{borderRadius: "20px"}}>
							<Card.Body>
								<Card.Title> <p style={{fontSize: "1.8rem", fontWeight:"bold"}}> Professional public solutions </p> </Card.Title>
								<Card.Text>
									<p style={{fontSize: "1.4rem"}}> u fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Fade>

				</div>  
			</div>

			<div className='interested-wrapper' style={{
				width: "100vw",
				paddingBottom: "10vh",
				backgroundColor: "#ffffff",
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			}}>
				<Flash>
					<h1 style={{ fontWeight: "bold", textAlign:"center", letterSpacing: "1px", marginBottom: "5vh"}}>
						Interested? Contact us! 
					</h1>
				</Flash>

				<Slide left>
					<Button style={{width: "20vw", minWidth: "200px"}} variant='outline-dark' size='lg' > Click Here ⇒ </Button>
				</Slide>
			</div>
		</div>
	</div>
	)   
}


export default HomePage
