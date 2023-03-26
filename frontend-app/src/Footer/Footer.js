import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="footer-area">
           
            <div className="footer-area-link">
                <div className="footer-area-link-area">
                    
                <span>INNOVA</span>
                        <p>Home</p>
                        <p>Product</p>
                        <p>Contact Us</p>
                    
                        
                </div>
                <div className="footer-area-link-area">
                    <span>HELP</span>
                    
                        <p>Terms</p>
                        <p>Lincence</p>
                        <p>Privacy & Policy</p>
                    
                </div>
                <div className="footer-area-link-area">
                    <span>OUR COMMUNITY</span>
                
                        <p>About Us</p>
                        <p>Features</p>
                        <p>Service</p>
                    
                </div>
            </div>
            <div className="footer-end">
                &copy; {new Date().getFullYear()}: Powered by Innova Computer Solutions
            </div>
        </div>

    )
}

export default Footer