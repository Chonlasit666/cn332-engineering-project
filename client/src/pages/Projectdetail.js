import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Style.css';

export default class Projectdetail extends Component {
    render() {
        return (
            <div>
                <br></br>
                <Container>
                    <Row className="row"> 
                        <Col className="column" md="6" >
                        Name:
                        <br></br>
                        Status:
                        </Col>
                        <Col className="column" >Variable width content</Col>
                    </Row>
                    <Row className="row">
                        <Col className="column" >Project Requirment</Col>
                        <Col className="column" >Detail:</Col>
                    </Row>
                    <Row className="row">
                        <Col className="column" xs lg="6">1 of 3</Col>
                    </Row>
                </Container>
                <div>
                <Button variant="secondary" className='button'>Edit</Button>{' '}
                </div>
                
            </div>
        )
    }
}