import React, { Component, useState } from 'react'
import { Navbar, Nav, NavDropdown, Button, Form, Container, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, } from "react-router-dom";

import Calendar from 'react-calendar';



const MiniProfile = (props) => {

    const [value, onChange] = useState(new Date());
    return (
        <Container>
            <h5>
                {props.profile.first_name} {props.profile.last_name}
                <span style={{ float: "right" }}>
                    <Nav.Link href="Profile">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-arrow-up-right-square-fill"
                            viewBox="0 0 16 16"
                            onClick="Profile_Next()"
                        >
                            <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                        </svg>
                    </Nav.Link>
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
            <p>
                <span>ครูที่ปรึกษา: </span> <span>สมศักดิ์ ศักดินา</span>
            </p>
        </Container>
    )
}




export default MiniProfile;