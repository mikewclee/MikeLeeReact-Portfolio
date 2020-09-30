import React from "react";

function About() {
    return (
        <div className="about">
            <div className="row aboutMeCaption">
                <h1>About Me:</h1>
                <h3>Hello, My name is Mike and I'm studying full-stack development at
                    <a href="https://bootcamp.cvn.columbia.edu/coding/" target="_blank"> Columbia University Coding Boot
                        Camp</a>.  I'm a creative problem solver and highly analytical IT professional with over ten
                    years of experience in corporate environment.</h3>
                <h3> I grew up in NYC and currently live in Brooklyn. I graduated from NYU with an engineering degree.  In my spare time, I enjoy basketball, fitness, cooking, traveling, and playing poker.</h3>
                <a href="mailto:mikewclee@gmail.com" target="_top"> Email </a> <br></br>
                <a href="https://github.com/mikewclee" target="_blank"> Github </a> <br></br>
                <a href="https://www.linkedin.com/in/mikewlee" target="_blank"> Linkedin </a> <br></br>
                <a href="https://drive.google.com/file/d/1RMweKw1hTn0gNDMqabP-g_gdsKphMvjM/view?usp=sharing"> View Resume</a>
            </div>
        </div>
    );
}

export default About;