import React from 'react';
import './Footer.css';
import { FacebookOutlined,TwitterOutlined,InstagramOutlined,LinkedinOutlined } from '@ant-design/icons';

function AFooter() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="https://i.gifer.com/3IsP.gif" alt="Logo" />
        <div className="footer-copy logo"><span>INNOVA</span></div>
      </div>
      <ul className="footer-social">
        <li><a href="#"><FacebookOutlined/></a></li>
        <li><a href="#"><TwitterOutlined/></a></li>
        <li><a href="#"><InstagramOutlined/></a></li>
        <li><a href="#"><LinkedinOutlined/></a></li>
      </ul>
      <div className="footer-copy">
        &copy; 2023 <span>INNOVA Computer Solution</span>. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
}

export default AFooter;
