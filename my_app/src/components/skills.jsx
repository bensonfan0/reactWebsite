import React, { Component } from 'react';
import './CSS/skills.css';
import { Container, Table } from 'react-bootstrap';

export default class Skills extends Component {
    render() {
        return (
            <Container fluid className='skills-container'>
                <Table striped bordered hover variant="light" size="sm">
                    <thead>
                        <tr className='skill-title'>
                            <th>
                                Languages
                            </th>
                            <th>
                                Technologies
                            </th>
                            <th>
                                Tools
                            </th>
                        </tr>
                    </thead>
                    <tbody className='skills'>
                        <tr>
                            <td>C/C++</td>
                            <td>Node.js</td>
                            <td>Visual Studio Code</td>
                        </tr>
                        <tr>
                            <td>Java 8</td>
                            <td>ReactJS</td>
                            <td>Git Version Control</td>
                        </tr>
                        <tr>
                            <td>JavaScript ES6</td>
                            <td>JUnit 6</td>
                            <td>Intellij IDEA</td>
                        </tr>
                        <tr>
                            <td>HTML</td>
                            <td>GBD</td>
                            <td>Xcode</td>
                        </tr>
                        <tr>
                            <td>Assembly</td>
                        </tr>
                        <tr>
                            <td>SQL</td>
                        </tr>
                        <tr>
                            <td>CSS</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        )
    }

    
}