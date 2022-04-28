
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import React, { useContext, useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUser, getFeature, postUserm, putUser } from "../../utils/sdk";


import { storage } from '../../utils/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


import { LOGIN_URL } from "../../config/urls";
import { useUserRequired } from "../../utils/hooks";
import { MiniProfile, Schedule, UserContext } from "../../components";

import { logout, todo, updatetodo } from "../../pages/Home/sdk";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const updateProfile = (sample) => putUser("users/testPUT/", sample);


const Profile = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useUserRequired();

    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState("");



    const history = useHistory();
    const { user, setUser } = useContext(UserContext);


    const handleLogout = useCallback(() => {
        logout().then(() => {
            setUser(null);
            history.push(LOGIN_URL);
        });
    }, [setUser, history]);

    if (!user) {
        return (
            <h1>hello</h1>
        );
    }

    console.log(user);

    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
    };

    const uploadFiles = async (file) => {
        //
        if (!file) return;
        const sotrageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);

                    const profileData = {
                        first_name: user.first_name,
                        last_name: user.last_name,
                        status: user.status,
                        avatar: downloadURL,
                        faculty: user.faculty,
                        email: user.email,

                    };

                    console.log(profileData.avatar)
                    console.log(profileData)
                    updateProfile(profileData)
                    window.location.reload()
                    /* const data = {
                        avatar: url,

                    };
                    post_Project(data) */


                });
            }

        );


    };





    return (


        <Container style={{ backgroundColor: "#fafafa" }
        }>

            <Row style={{ marginTop: "15px" }
            }>
                <Col className="col-4 column " xs="12" md="4" sm="12" style={{

                }}>
                    <div className="profile-img text-center ">

                        <img src={user.avatar} alt="Logo" style={{ width: "200px", minWidth: "200px", }} />
                        <hr></hr>
                        <form onSubmit={formHandler} >

                            <input type="file" className="input" />
                            <button type="submit">Upload</button>
                        </form>






                    </div>
                </Col >
                <Col className="col-12 column " xs="12" md="8" sm="12" style={{

                }}>
                    <div class="profile-header ">

                        <Col class=" text-sm-center text-xs-center text-md-start " >
                            <hr></hr>
                            <h5 style={{ width: "auto", display: "inline-block", textAlign: "center" }}>
                                {user.first_name} {user.last_name}
                                <hr></hr>
                            </h5>
                            <h6>
                                <span> {user.faculty} </span>

                            </h6>

                            <h6>
                                <span> โครงงานที่ทำอยู่ :</span>
                                <span> Data science </span>
                            </h6>
                            <p><span>ครูที่ปรึกษา: </span> <span>สมศักดิ์ ศักดินา</span></p>

                            <p class="proile-rating">GPA : <span>3.05</span>
                            </p>
                        </Col>


                        {/* คณะ */}

                    </div>
                </Col >
                <Row>
                    <Col className="column " md="4" sm="12">
                        <hr></hr>
                        <div class="profile-work">
                            <Box sx={{ width: '100%', typography: 'body1' }}>

                                <h5 style={{ textAlign: "center" }}>
                                    aaaaaaaaaa

                                </h5>
                            </Box>
                        </div>

                    </Col>

                    <Col className="column " md="8">
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Item One" value="1" />
                                        <Tab label="Item Two" value="2" />

                                    </TabList>
                                </Box>
                                <TabPanel value="1"><Row>
                                    <div class="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Kshiti123</p>
                                    </div>
                                </Row>
                                    <Row>
                                        <div class="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Kshiti Ghelani</p>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div class="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>kshitighelani@gmail.com</p>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div class="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>123 456 7890</p>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div class="col-md-6">
                                            <label>Profession</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Web Developer and Designer</p>
                                        </div>
                                    </Row></TabPanel>
                                <TabPanel value="2"><div class="row">
                                    <div class="col-md-6">
                                        <label>Experience</label>
                                    </div>
                                    <div class="col-md-6">
                                        <p>Expert</p>
                                    </div>
                                </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div class="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label>Your Bio</label><br />
                                            <p>Your detail description</p>
                                        </div>
                                    </div></TabPanel>

                            </TabContext>
                        </Box>

                    </Col>

                </Row>
            </Row >
        </Container >


    )
}

export default Profile;