import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './footer-new.css'; 

function Footer() {
  return (
    <footer>
            <div class="footer-content">
            <div class="footer-txt">
                <h1>IEDC GECT</h1>
                <p>Government Engineering College<br></br>Thrissur - 680009, Kerala<br></br>India</p>
                <p><b>Email</b>: iedc@gectcr.ac.in</p>
            </div>
            <div class="footer-img">
                <img src="/images/IEDCLogo.png"/>
            </div>
        </div>
            <div class="footer-copyright">
                © Copyright <b>IEDC GECT</b>. All Rights Reserved
            </div>
        </footer>
  );
}

export default Footer;
