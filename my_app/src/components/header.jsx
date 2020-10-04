import React, { Component } from 'react';
import './CSS/header.css';
import {Row, Col, Container} from 'react-bootstrap';

// this export here is because of ES6 and how javascript works

const logoHeaderStyle = {
    color: 'white',
    fontSize: 36,
};


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
                    <nav id="main-menu">
                        <Row>
                            <Col>
                                <a href = "mailto: benson.fan0@gmail.com"><i className="fa fa-envelope-square" style={logoHeaderStyle}></i></a>
                                <p className='sub-title'>benson.fan0@gmail.com</p>
                            </Col>
                            <Col>
                                <a href="https://github.com/bensonfan0" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" style={logoHeaderStyle}></i></a>
                                <p className="sub-title">github.com/bensonfan0</p>
                            </Col>
                            <Col>
                                <i className="fa fa-phone" style={logoHeaderStyle}></i>
                                <p className='sub-title'>778 - 869 - 1632</p>
                            </Col>
                        </Row>
                    </nav>
                </div>
            </Container>
        )
    }

    
}