import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import matrix from '../assets/images/matrix.jpg';
import "../components/style.css";

function Home() {
    return (
        <div className="mainPage">
            <Hero backgroundImage={ matrix }>
                <h1> MICHAEL LEE </h1> 
                <h2>Full Stack Developer <br></br>
                <a href="https://github.com/mikewclee" target="_blank"> Github </a> <br></br>
                <a href="https://www.linkedin.com/in/mikewclee/" target="_blank"> Linkedin </a> <br></br>
                </h2>
            </Hero>
            <Container style={{ marginTop: 100 }}>

            </Container>
        </div>
    );
}

export default Home;