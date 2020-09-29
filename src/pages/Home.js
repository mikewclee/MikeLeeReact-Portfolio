import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


function Home() {
    return (
        <div>
            <Hero backgroundImage="https://imgur.com/VM8Y3MM">
                <h1>MICHAEL LEE <br></br> Full Stack Developer</h1>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome To The Matrix!</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;