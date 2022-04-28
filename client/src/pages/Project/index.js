
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

/* must contain 
        progress manage,
        project detail,

        have 2 type permission
        1. owner -> add progress
        2. advisor -> comment progress
        3. visiter -> none of above


*/

//const updateProfile = (sample) => putUser("users/testPUT/", sample);
const get_project = (project_id) => getFeature("posts/1/");


const Project = () => {

    useUserRequired();

    const [progress, setProgress] = useState(0);
    const [project, setProject] = useState();
    const [url, setUrl] = useState("");

    const history = useHistory();
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        console.log("call useEff")
        get_project(3).then((resp) => {
            setProject(resp.data);

        });
    }, []);

    //console.log(project.id)
    console.log(project)



    return (

        <Container>
            project
           {/*  <Row>
                <Col className="col-4column bg-white" md="4">
                    <div className="profile-img">
                        <Image src={user.avatar} a00lt="Logo" />

                        <form onSubmit={formHandler}>
                            <input type="file" className="input" />
                            <button type="submit">Upload</button>
                        </form>
                        <hr />


                    </div>
                </Col >
            </Row> */}
        </Container>


    )
}

export default Project;