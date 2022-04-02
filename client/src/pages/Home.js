

import { Navbar, Nav, NavDropdown, Col, Row, Image, Button, Tabs, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Box, Container, Grid } from '@mui/material';


function Home() {
    return (
        <Container className="py-4" style={{ backgroundColor: '#ECECEC' }}>
            <Row>
                <Col className="col-12" md="8">
                    <Row>

                        <Col className="col-12 rounded" md="8" style={{ backgroundColor: '#FFFFFF' }}>

                            <Row className="h-100">
                                <Col className="text-center my-auto" md="4"  >
                                    <div className="profile-img" style={{ width: "auto" }}>
                                        <Image src={"https://play-lh.googleusercontent.com/kTkV3EWtNTDVCzRnUdbI5KdXm6Io-IM4Fb3mDcmX9-EOCEXJxnAxaph_leEn6m61E0I"} a00lt="Logo" />

                                    </div>
                                </Col>
                                <Col className="col-12 my-auto text-center pt-2 " md="8" >
                                    <h5>
                                        AYAYA AYAYA
                                        <span style={{ float: "right" }}>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16" >
                                                <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                            </svg>
                                        </span>
                                    </h5>
                                    {/* คณะ */}
                                    <h6>
                                        <span> วิศวกรรมคอมพิวเตอร์ </span>
                                        <span> ปีที่ 3 </span>
                                    </h6>

                                    <p>
                                        <span> โครงงานที่ทำอยู่ :</span>
                                        <span> Data science </span>
                                    </p>
                                    <p><span>ครูที่ปรึกษา: </span> <span>สมศักดิ์ ศักดินา</span></p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md="3" className="text-center m-md-auto rounded pt-2" style={{ backgroundColor: '#FFFFFF' }}>
                            <h5 >
                                ชื่อโครงงาน

                                <span style={{ float: "right" }}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16" >
                                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                                    </svg>
                                </span>
                            </h5>

                            <h6>
                                หมายเหตุ : ถ้ายังไม่มีโครงงาน จะขึ้นมายังไม่มีโครงงานที่กำลังทำอยู่
                            </h6>




                        </Col>
                    </Row>
                    <Row className="mt-4">

                        <Col className="col-12" md="4">
                            <Col className="col-12 rounded text-center" md="12" style={{ backgroundColor: '#FFFFFF' }}>
                                <h5>
                                    Schedule

                                </h5>

                                {/* Schedule */}
                                <h6>
                                    Schedule here
                                    Schedule here  Schedule here
                                    Schedule here
                                    Schedule here
                                    Schedule here
                                    Schedule here
                                    Schedule here
                                    Schedule here
                                    Schedule here
                                    Schedule here
                                    Schedule here
                                    Schedule here  Schedule here  Schedule here  Schedule here  Schedule here  Schedule here  Schedule here
                                </h6>
                            </Col>
                        </Col>
                        <Col className="col-12" md="4" >
                            <Col className="col-12 rounded text-center" md="12" style={{ backgroundColor: '#FFFFFF' }}>
                                <h5>
                                    Update Project
                                </h5>
                                {/* Update Project */}
                                <h6>
                                    Project here
                                    Project here
                                    Project here
                                    Project here
                                    Project here
                                    Project here
                                    Project here
                                    Project here
                                    Project here
                                    Project here
                                    Project here

                                    Project hereProject hereProject hereProject here

                                </h6>
                            </Col>
                        </Col>
                        <Col className="col-12  " md="4" >
                            <Col className="col-12 rounded text-center" md="12" style={{ backgroundColor: '#FFFFFF' }}>
                                <h5>
                                    Contacts
                                </h5>
                                {/*Contacts */}
                                <h6>

                                    Contact here Contact here Contact here Contact here Contact here Contact here Contact here Contact here Contact here Contact here Contact here Contact here Contact here
                                    Contact here Contact here Contact here Contact here
                                </h6>
                            </Col>

                        </Col>

                    </Row>
                </Col>


                <Col className="col-12 pt-2 " md="4" style={{ backgroundColor: '#FFFFFF' }}>
                    <Col>
                        <h6 className="text-center">
                            Dashboard
                        </h6>
                    </Col>
                </Col>
            </Row >
        </Container >





    );
}
export default Home;
