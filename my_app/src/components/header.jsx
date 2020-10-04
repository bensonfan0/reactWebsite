import React, { Component } from 'react';
import './header.css';
import {Row, Col, Container} from 'react-bootstrap';

// this export here is because of ES6 and how javascript works

const info = (
    <h>
        3rd year CS major BSc | benson.fan0@gmail.com | github/bensonfan0 | 778.869.1632
    </h>
)

const currSchool = (
    <p>
        University of British Columbia
    </p>
)


export default class Header extends Component {
    render() {
        return (
            <Container>
                <div className='header'>
                    <Row>
                        <h1 className='my-beautiful-name'>
                        Benson Fan
                        </h1>
                    </Row>
                    <Row>
                        <Col>
                            <h className='sub-title'>
                                <Row>BSc Computer Science 3rd year</Row>
                            </h>
                        </Col>
                        <Col>
                            <span className="email"><i className="icon-mail"></i>benson.fan0@gmail.com</span>
                        </Col>
                        <Col>
                        <li><a href="https://github.com/bensonfan0" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                        </Col>
                        <Col>
                            <h className='sub-title'>
                                778.869.1632
                            </h>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }

    
}