import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'


const Project = () => {

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
                <div>
                    <Button variant="secondary" className='button'>Edit</Button>{' '}
                </div>
            </Container>


        </div>
    )
}

export default Project;