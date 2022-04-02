

import { Navbar, Container, Nav, NavDropdown, Col, Row, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Profile_Picture from "../components/profile/Profile_Picture";
import Profile_Picture_Detail from "../components/profile/Profile_Picture_Detail";
import Profile_Picture_Detail_Under from "../components/profile/Profile_Picture_Detail_Under";

function Profile() {
    return (
        <div className="container emp-profile">
            <Row>
                <Profile_Picture></Profile_Picture>

                <Profile_Picture_Detail></Profile_Picture_Detail>
            </Row>
            <Profile_Picture_Detail_Under></Profile_Picture_Detail_Under>
        </div >
    );
}
export default Profile;
