import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; 
import {TiSocialLinkedinCircular} from "react-icons/ti";
import {AiFillTwitterCircle} from "react-icons/ai";
import {ImMail4}from "react-icons/im";
function Footer() {
    return (
        <div className="footer">
        <div class="line"></div>
        <br />
            <div className="container">
            

                <div className="row justify-content-center">
                    <div className="col-3" align="center">
                        <h5>AROUND THE WEB</h5>
                        <div >
                            <a href="https://facebook.com"><FaFacebook size="30px" color="white" hover="true" className="icons" /></a>
                            &nbsp;
                            <a href="https://instagram.com"><FaInstagram size="30px" color="white" hover="true"/></a>
                            &nbsp;
                            <a href ="https://twitter.com"><AiFillTwitterCircle size="30px" color="white" hover="true" className="icons" /></a>
                            &nbsp;
                            <a href ="https://LinkedIn.com"><TiSocialLinkedinCircular size="40px" color="white" hover="true" className="icons" /></a>
                            &nbsp;
                            <a href ="https://Gmail.com"><ImMail4 size="30px" color="white" hover="true" className="icons" /></a>
                            
                            
                        </div>
                    </div>
                    <div className="col-6 " align="center">
                        <div className="logo"></div>
                        <div>
                            <h4>Welcome to Stocker</h4>
                            <p>Stocker is a <b>stock analaysis and screening tool</b> to see information of list companies in a very easy way. </p>
                        </div>
                    </div>
                    <div className="col-3 " align="center">
                        <h5>ABOUT</h5>
                        <div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
