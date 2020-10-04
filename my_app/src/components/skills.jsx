import React, { Component } from 'react';
import './skills.css';
import { Container, Row, Col } from 'react-bootstrap';

export default class Skills extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm>
                        <div>
                            <h1 className='skill-title'>
                                Languages
                            </h1>
                            <ul className='skills'>
                                <li>C/C++</li>
                                <li>Java 8</li>
                                <li>JavaScript ES6</li>
                                <li>HTML</li>
                                <li>SQL</li>
                                <li>Assembly</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm>
                        <div>
                            <h1 className='skill-title'>
                                Technologies
                            </h1>
                            <ul className='skills'>
                                <li>Node.js</li>
                                <li>Reactjs 6</li>
                                <li>GBD</li>
                                <li>JUnit 6</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm>
                        <div>
                            <h1 className='skill-title'>
                                Tools
                            </h1>
                            <ul className='skills'>
                                <li>Visual Studio Code</li>
                                <li>Git Version Control</li>
                                <li>Intellij</li>
                                <li>Xcode</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

    
}