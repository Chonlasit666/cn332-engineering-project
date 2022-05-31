
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import React, { useContext, useCallback, useState, useEffect, } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUser, getFeature, postUserm, putUser, getProfileView } from "../../utils/sdk";


import { storage } from '../../utils/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


import { LOGIN_URL } from "../../config/urls";
import { useUserRequired } from "../../utils/hooks";
import { MiniProfile, Schedule, UserContext } from "../../components";

import { logout, todo, updatetodo } from "../../pages/Home/sdk";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const getProfile = (id) => getProfileView(`users/getProfileView/${id}/`);

const ProfileView = () => {
    let { id } = useParams();
    const [prog, setProg] = useState({})

    useEffect(() => {
        console.log("call useEff")
        getProfile(id).then((resp) => {
            setProg(resp.data);

        });

    }, []);



    return (


        <h1>
            {id}
            {prog.first_name}
            ssssss
        </h1>


    )
}

export default ProfileView;