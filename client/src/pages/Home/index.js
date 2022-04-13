import React, { useContext, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { post } from '../../utils/sdk';

import { Navbar, Nav, NavDropdown, Col, Row, Image, Button, Tabs, } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Box, Container, Grid } from '@mui/material';

import { LOGIN_URL } from '../../config/urls';
import { useUserRequired , useTestRequired } from '../../utils/hooks';
import { UserContext  } from '../../components';

import { logout, todo } from '../../pages/Home/sdk';
import styles from './Home.module.css';
import "../../App.css";

const Home = () => {
  useUserRequired();
  var x = useTestRequired();
  console.log("----------");
  console.log(x);
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  const [inputs, setInputs] = useState({});

  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(inputs.description)
    setInputs(values => ({ ...values, [name]: value }))
    console.log("after change" + inputs.description)
  }

  const shandleCheck = (e) => {
    console.log("in handle check")
    console.log(check)
    const prev = e.target.value;
    setCheck(!(prev));
  }
  const handleCheck = () => {
    console.log(check)
    setCheck(!check)
  }


  const handleTodo = (event) => {
    event.preventDefault();
    const data = {
      title: inputs.title,
      description: inputs.description,
      completed: check,
    };
    console.log(inputs.description)
    todo(data);
  };

  const handleLogout = useCallback(() => {
    logout().then(() => {
      setUser(null);
      history.push(LOGIN_URL);
    });
  }, [setUser, history]);

  if (!user) {
    return null;
  }

  return (

    <Container className="py-4" style={{ backgroundColor: '#ECECEC' }}>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <h1> Hello! {user.name} {x.obj1}</h1>
        <button class="btn btn-primary me-md-2" type="button" onClick={handleLogout}>LOGOUT</button>
        <button class="btn btn-primary" type="button" onClick={handleTodo}>TEST!!</button>
        <button class="btn btn-primary" type="button" href="https://www.youtube.com/watch?v=4ebas1ZvyVI"> don't click this </button>
      </div>



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
      <form onSubmit={handleTodo}>
        <label>Title:
          <input
            type="text"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
          />
        </label>

        <br></br>

        <label>Description:
          <input
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          />
        </label>

        <br></br>

        <div class="form-check">
          <input class="form-check-input" 
                type="checkbox"
                value=""
                id="flexCheckChecked"
                onChange={handleCheck}
                />
            <label class="form-check-label" for="flexCheckChecked">
              Checked checkbox
            </label>
        </div>

        <br></br>

        <input type="submit" />
      </form>
    </Container >

  );
};

export default Home;
