import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import matrix from '../assets/images/matrix.jpg'

function Home() {
    return (
        <div>
            <Hero backgroundImage={ matrix }>
                <h1> MICHAEL LEE <br></br>   Full Stack Developer</h1>
            </Hero>
            <Container style={{ marginTop: 70 }}>
                <Row>
                    <Col size="md-12">
                        <h1>Welcome!</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;