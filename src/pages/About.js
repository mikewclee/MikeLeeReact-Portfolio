import React from "react";
import "../components/style.css";

function About() {
    return (
        <div className="about">

            <div className="aboutMeCaption">
                <h1>About Me:</h1>
                <h3>Hello, My name is Mike and I'm a full-stack developer with a certificate from
                    <a href="https://bootcamp.cvn.columbia.edu/coding/" target="_blank"> Columbia University Coding Boot
                        Camp</a>.  I'm a creative problem solver and highly motivated IT professional with over ten
                    years of experience in corporate environment.<br></br>
                I grew up in NYC and currently live in Brooklyn. I graduated from NYU with an engineering degree.  In my spare time, I enjoy basketball, fitness, cooking, traveling, and playing poker.
                </h3><br></br>
                <div>
                    <a href="mailto:mikewclee@gmail.com" target="_top"> Email </a> <br></br>
                    <a href="https://github.com/mikewclee" target="_blank"> Github </a> <br></br>
                    <a href="https://www.linkedin.com/in/mikewclee" target="_blank"> Linkedin </a> <br></br>
                    <a href="https://drive.google.com/file/d/1RMweKw1hTn0gNDMqabP-g_gdsKphMvjM/view?usp=sharing"> View Resume</a>
                </div>

            </div>
        </div>
    );
}

export default About;