import React, { Component, useState } from 'react'
import { Navbar, Nav, NavDropdown, Button, Form, Container, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, } from "react-router-dom";

import Calendar from 'react-calendar';



const Schedule = () => {
    const [value, onChange] = useState(new Date());
    return (
        <Container>
        <Button>click me fuck u</Button>
        {/* <h5>Schedule</h5>

        <h6>
            Schedule here Schedule here Schedule here Schedule here
            Schedule here Schedule here Schedule here Schedule here
            Schedule here Schedule here Schedule here Schedule here
            Schedule here Schedule here Schedule here Schedule here
            Schedule here Schedule here Schedule here
        </h6> */}
        <Calendar  value={value} />
    </Container>
    )
}
    



export default Schedule;