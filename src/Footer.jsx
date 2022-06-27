import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faMapMarker } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <div>
        
<footer style={{backgroundColor:'#009270'}} class="footer-distributed">

			<div class="footer-left">

				<h3>Website<span>blog</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>
{/* 
				<p class="footer-company-name">Company Name © 2015</p> */}
			</div>

			<div class="footer-center">

				<div>
                <FontAwesomeIcon style={{fontSize:'24px',color:'#fff'}} icon={faMapMarker} />

					<p style={{color:'#fff',marginLeft:'15px'}}><span>444 abc street Tag Mahal</span> Agra, India</p>
				</div>

				<div style={{marginTop:'10px'}}>
                <FontAwesomeIcon style={{fontSize:'24px',color:'#fff'}} icon={faPhone} />

					<p style={{color:'#fff',marginLeft:'15px'}}>+91.000 0000000</p>
				</div>

                <div style={{marginTop:'13px'}}>
                <FontAwesomeIcon style={{fontSize:'24px',color:'#fff'}} icon={faEnvelope} />
					
					<p ><a href="mailto:support@company.com" style={{color:'#fff',marginLeft:'15px'}}>info@websiteblog.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p style={{color:'#fff'}} class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				{/* <div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div> */}

			</div>

		</footer>
        <hr  />
        
        <div style={{marginBottom:'-15px'}}>
        <p style={{backgroundColor:'#009270',color:'#fff',paddingBottom:'20px',paddingTop:'10px'}} >Copyright © 2022 Website Blog - All Rights Reserved By E-Solution</p>
        </div>
    </div>
  )
}

export default Footer