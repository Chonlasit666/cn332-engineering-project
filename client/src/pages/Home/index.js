import React, { useContext, useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUser, getFeature, postUser } from "../../utils/sdk";

import {
  Navbar,
  Nav,
  NavDropdown,
  Col,
  Row,
  Image,
  Button,
  Tabs,
} from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Box, Container, Grid } from "@mui/material";

import { LOGIN_URL } from "../../config/urls";
import { useUserRequired } from "../../utils/hooks";
import { MiniProfile, Schedule, UserContext } from "../../components";

import { logout, todo, updatetodo } from "../../pages/Home/sdk";
import styles from "./Home.module.css";
import "../../App.css";



const getProject = () => getUser("users/testget/");
const updateProfile = (sample) => postUser("users/updateProfile/", sample);

const profileData = {
  first_name: "adadad",
  last_name: "last",
  email: "temp@email.com",
  /* avatar: '',
  status: 'Student',
  faculty: '', */
};




const Home = () => {
  useUserRequired();

  const [sample, setSample] = useState([])
  console.log("sample bF")
  useEffect(() => {
    getProject().then((resp) => {
      setSample(resp.data);
      //console.log(resp.data);
    });
  }, []);
  console.log("this is obj1" + sample.obj1);

  /* ตรงนี้ตอนแก้แสดงผลproflie
  var x = useTestRequired();
  console.log("----------");
  console.log(x);
  */

  const history = useHistory();
  const { user, setUser } = useContext(UserContext);

  //todo form
  const [inputs, setInputs] = useState({});
  const [check, setCheck] = useState(false);

  const handleupdateTodo = useCallback(() => {
    updatetodo();
  }, [setUser, history]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(inputs.description);
    setInputs((values) => ({ ...values, [name]: value }));
    console.log("after change" + inputs.description);
  };

  const handleCheck = () => {
    console.log(check);
    setCheck(!check);
  };

  const handleTodo = (event) => {
    event.preventDefault();
    const data = {
      title: inputs.title,
      description: inputs.description,
      completed: check,
    };
    console.log(inputs.description);
    todo(data);
  };

  const handleLogout = useCallback(() => {
    logout().then(() => {
      setUser(null);
      history.push(LOGIN_URL);
    });
  }, [setUser, history]);

  const handleupdateProfile = useCallback(() => {
    console.log(profileData)
    updateProfile(profileData)
  }, []);

  if (!user) {
    return (
      <h1>Loading UWU...</h1>
    );
  }

  //console.log(user);

  return (
    <Container className="py-4" style={{ backgroundColor: "#ECECEC" }}>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <h1> Hello! {user.first_name}</h1>
        <button onClick={handleupdateTodo}>Test</button>
        <button
          class="btn btn-primary me-md-2"
          type="button"
          onClick={handleLogout}
        >
          LOGOUT
        </button>
        <button class="btn btn-primary" type="button" onClick={handleTodo}>
          TEST!!
        </button>
        <button
          class="btn btn-primary"
          type="button"
          onClick={handleupdateProfile}
        >
          {" "}
          don't click this{" "}
        </button>
      </div>

      <Row>
        <Col className="col-12" md="8">
          <Row>
            <Col
              className="col-12 rounded"
              md="8"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <Row className="h-100">
                <Col className="text-center my-auto" md="4">
                  <div className="profile-img" style={{ width: "auto" }}>
                  <Image src={user.avatar} a00lt="Logo" />
                  </div>
                </Col>
                <Col className="col-12 my-auto text-center pt-2 " md="8">
                  <MiniProfile profile={user} />
                </Col>
              </Row>
            </Col>
            <Col
              md="3"
              className="text-center m-md-auto rounded pt-2"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <h5>
                ชื่อโครงงาน
                <span style={{ float: "right" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-right-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z" />
                  </svg>
                </span>
              </h5>

              <h6>
                หมายเหตุ : ถ้ายังไม่มีโครงงาน
                จะขึ้นมายังไม่มีโครงงานที่กำลังทำอยู่
              </h6>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="col-12" md="4">
              <Col
                className="col-12 rounded text-center"
                md="12"
                style={{ backgroundColor: "#FFFFFF" }}
              >

                <Schedule />

              </Col>
            </Col>
            <Col className="col-12" md="4">
              <Col
                className="col-12 rounded text-center"
                md="12"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <h5>Update Project</h5>
                {/* Update Project */}
                <h6>
                  Project here Project here Project here Project here Project
                  here Project here Project here Project here Project here
                  Project here Project here Project hereProject hereProject
                  hereProject here
                </h6>
              </Col>
            </Col>
            <Col className="col-12  " md="4">
              <Col
                className="col-12 rounded text-center"
                md="12"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <h5>Contacts</h5>
                {/*Contacts */}
                <h6>
                  Contact here Contact here Contact here Contact here Contact
                  here Contact here Contact here Contact here Contact here
                  Contact here Contact here Contact here Contact here Contact
                  here Contact here Contact here Contact here
                </h6>
              </Col>
            </Col>
          </Row>
        </Col>

        <Col
          className="col-12 pt-2 "
          md="4"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <Col>
            <h6 className="text-center">Dashboard</h6>
          </Col>
        </Col>
      </Row>
      <form onSubmit={handleTodo}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
          />
        </label>

        <br></br>

        <label>
          Description:
          <input
            type="text"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          />
        </label>

        <br></br>

        <div class="form-check">
          <input
            class="form-check-input"
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
    </Container>
  );
};

export default Home;
