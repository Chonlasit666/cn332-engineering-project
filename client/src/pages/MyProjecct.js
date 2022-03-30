import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Style.css';
import { Link } from "react-router-dom";


export default class Myproject extends Component {
    render() {
        return (
            <div>
                <h1>My Project</h1>
                <Container>
                    <div>
                        <Row className="row">
                            <Col className="column">
                                <Link as={Link} to={"/Projectdetail"}>
                                    <Button variant="secondary" className='button'>Project Detail</Button>{' '}
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    <Link as={Link} to={"/Createproject"}>
                        <Button variant="secondary" className='button'>Create Project</Button>{' '}
                    </Link>
                </Container>

            </div>
        )
    }
}