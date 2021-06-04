import React from "react";
import { FaGithub } from "react-icons/fa";
import '../home.css';
import ParticlesBg from 'particles-bg';

const About = () => {
    return (
    <div>
        <ParticlesBg color="#FFFFFF" type="cobweb" bg={true} />
        <div className="col-12 xs-6 md-12">
        <div className="home">
        <h1>
            Hey, I am
            <br /> <span>Lakshya Khetan.</span> <br />
            <h2>
            A developer/coder/decoder .
            <p>I develop mobile-apps, webapps and backend.</p>
            </h2>
            <a href="https://github.com/shaitan2741" target="_blank">
            <button type="button " class="ui grey secondary huge button">
                <FaGithub /> &nbsp; MyGithub ?
            </button>
            </a>
        </h1>
        </div>
        </div>
        </div>
    );
    };

export default About;