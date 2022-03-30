import React, { Component } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import './Style.css';

export default class Createproject extends Component {


    render() {
        return (
            <div>
                <br />
                <Container>
                    <Row className="row"> 
                        <Col className="column" md="3" >
                        
                        <br />
                        <Button variant="warning" className='button'>Upload Profile</Button>{' '}
                        </Col>
                        <Col className="column" >
                        <Form.Control type="text" placeholder="Title" />
                        <Form.Control type="text" placeholder="Markdown (tag)" />
                        <br />
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Control type="file" multiple />
                        </Form.Group>
                        
                        <Form.Select>
                        <option>Status</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </Form.Select>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col className="column" md="6">Requirment Context
                        <br />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        
                        </Col>
                        
                            
                        <Col className="column" >Detail
                        <br />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <div>
                <Button type="submit" variant="secondary" className='button'>Create Project</Button>{' '}
                </div>
                
            </div>
        )
    }
}