import './HomePage.css'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide'
import Flash from 'react-reveal/Flash';
import Jump from 'react-reveal/Jump'
import { Zoom } from 'react-reveal';
import {Button, Card } from 'react-bootstrap';
import chevron from './chevron.png'
import engn from './engineer.jpeg'
import { Link } from 'react-router-dom';

const HomePage = () => {    
	
	const name = ['A', 'm', 'v', 'i', 's', 't', 'o', 'n'];

	return(
	<div>
		<Zoom out>
			<div style={{opacity:'20%'}} className='box1'/>
		</Zoom>
		<Zoom out delay={200}>
			<div className='box2'/>
		</Zoom>

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
						<Fade top delay="400"> Living well starts here </Fade>
					</div>
					
					<Fade delay={1000}>
						<Jump delay={1500} duration={2000} forever top>
							<img style={{width:'3vw', marginTop:'30vh', marginBottom:'2vh'}} src={chevron}/>
						</Jump>
						<p> Learn More </p>
					</Fade>
					
					<div className='colorbar'/>
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
								<p> At Amviston, we believe in wholesome wellness, empowering individuals to take care of their health through natural and holistic solutions for the body, soul, and mind.
Our mission is to help individuals live life to the full, every day.
With a strong portfolio of customized healthcare products, we try to address the root cause of your health issues and offer resources, medical kits, and solutions that are designed to help you be in your best possible health.  </p>
							</div>
		{//<Button variant='outline-dark' size='lg'> Learn More </Button>
			}
						</Fade>
					</div>
					
					<div className='about-right'>
						<img src={engn}/>
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
									<p style={{fontSize: "1.4rem"}}>  

W innovate healthcare with advanced engineering services, including medical device design, custom software, and systems integration. Trust our expertise to enhance patient care and streamline operations.
		</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Fade>
			
					<Fade top delay = {600}>
						<Card className="content-cards" style={{borderRadius: "20px"}}>
							<Card.Body>
								<Card.Title> <p style={{fontSize: "1.8rem", fontWeight:"bold"}}> Professional public solutions </p> </Card.Title>
								<Card.Text>
									<p style={{fontSize: "1.4rem"}}> We provide professional public solutions that enhance community health and well-being. Our expertise ensures effective, compliant services that address public health needs and improve overall quality of life. 
									</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Fade>

			
					<Fade top delay = {400}>
						<Card className="content-cards" style={{borderRadius: "20px"}}>
							<Card.Body>
								<Card.Title> <p style={{fontSize: "1.8rem", fontWeight:"bold"}}> Medical devices and systems </p>  </Card.Title>
								<Card.Text>
									<p style={{fontSize: "1.4rem"}}> We excel in creating innovative medical devices and systems. Our expertise ensures top-quality, compliant solutions that improve patient care and streamline healthcare operations.</p>
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
					<Button style={{width: "20vw", minWidth: "200px"}} variant='outline-dark' size='lg'  to={"@mailto:info@amviston.com"}> Email info@amviston.com </Button>
				</Slide>
			</div>
		</div>
	</div>
	)   
}


export default HomePage
