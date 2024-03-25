import imageF from '../Photo/icon-facebook.png';
import imageI from '../Photo/icon-instagram.png';
import imageY from '../Photo/icon-youtube.png';
import './Footer.css'
const Footer = ()=>{

	return(
		<div>
			<div className='footer-container'>
				<div className='fototer-left'>
					<h4 className='footer-title'>Contact</h4>
					<div className='footer-link'>
						<p>363 Penn Ave, Newmarket</p>
						<p>E-mail contact@s.qsssim.com</p>
						<p>+1 437 2311537</p>
					</div>
				</div>
				
				<div className='footer-center'>
				<h4 className='footer-title'>Service</h4>
				<div className='footer-link'>
					<p>Home</p>
					<p>Shop</p>
					<p>Shipping</p>
					<p>Legal&Privacy</p>
				</div>
				</div>
				

				<div className='footer-right'>
					<h4 className='Footer-title'>Sosial media</h4>
					<span>
						<img className='footer-icon' src={imageF} alt ="icon"/>
						</span>
						<span>
						<img className='footer-icon'src={imageI} alt ="icon"/>
						</span>
						<span>
						<img className='footer-icon'src={imageY} alt ="icon"/>
						</span>
				</div>
		

				
				

			</div>
			<div className='footer-botom'>
				<p>Developed by Reyhana Musayeva

For educational purposes</p></div>
		</div>
	)




}
export default Footer;























// import React from "react";
// import {
// 	Box,
// 	FooterContainer,
// 	Row,
// 	Column,
// 	FooterLink,
// 	Heading,
// } from "./FooterStyle.js";
// import './Footer.css'
// import imageF from '../Photo/icon-facebook.png';
// import imageI from '../Photo/icon-instagram.png';
// import imageY from '../Photo/icon-youtube.png';


// const Footer = () => {
// 	return (
// 		<Box>
// 			<FooterContainer >
				
// 				<Row>

// 					<Column >
// 						<Heading>About Us</Heading>
// 						<FooterLink href="#">
// 							Aim
// 						</FooterLink>
// 						<FooterLink href="#">
// 							Vision
// 						</FooterLink>
// 						<FooterLink href="#">
// 							Testimonials
// 						</FooterLink>
// 						</Column>
// 					<Column>
// 						<Heading>Services</Heading>
// 						<FooterLink href="#">
// 							Shop
// 						</FooterLink>
// 						<FooterLink href="#">
// 							Shipping
// 						</FooterLink>
// 						<FooterLink href="#">
// 							Legal&Privacy
// 						</FooterLink>
						
// 					</Column>
// 					<Column>
					
// 						<Heading>Social Media</Heading>
// 						<div className="div">
// 						<FooterLink href="#">
// 							<span>
// 								<img src={imageF} alt="icon" width="30px"/>
// 							</span>
							
// 						</FooterLink>
// 						<FooterLink href="#">
							
// 							<span>
// 								<img src={imageI} alt="icon" width="30px"/>
// 							</span>
						
// 						</FooterLink>
// 						<FooterLink href="#">
// 						<span>
// 								<img src={imageY} alt="icon"width="30px" />
// 							</span>
// 						</FooterLink>
// 						</div>
// 					</Column>
// 				</Row>
// 			</FooterContainer>
// 		</Box>
// 	);
// };
// export default Footer;
