
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


const updateProfile = (sample) => putUser("users/testPUT/", sample);


const Profile = () => {
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
                    /* const data = {
                        avatar: url,

                    };
                    post_Project(data) */


                });
            }

        );


    };





    return (

        <Container>
            <Row>
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
            </Row>
        </Container>


    )
}

export default Profile;