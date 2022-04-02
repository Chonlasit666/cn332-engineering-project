
import { Navbar, Container, Nav, NavDropdown, Col, Row, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function Profile_Picture_Detail() {
    return (
        <Col className="col-12 column bg-white" md="8" sm="12" style={{

        }}>
            <div class="profile-head">
                {/* name */}
                <h5>
                    AYAYA AYAYA
                </h5>
                {/* คณะ */}
                <h6>
                    <span> วิศวกรรมคอมพิวเตอร์ </span>
                    <span> ปีที่ 3 </span>
                </h6>
                <hr></hr>
                <p>
                    <span> โครงงานที่ทำอยู่ :</span>
                    <span> Data science </span>
                </p>
                <p><span>ครูที่ปรึกษา: </span> <span>สมศักดิ์ ศักดินา</span></p>

                <p class="proile-rating">GPA : <span>3.05</span>
                </p>




            </div>
        </Col >

    )
}
export default Profile_Picture_Detail;