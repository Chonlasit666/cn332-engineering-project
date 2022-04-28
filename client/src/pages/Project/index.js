
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import React, { useContext, useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUser, getFeature, postUserm, putUser, postFeature } from "../../utils/sdk";


import { storage } from '../../utils/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


import { LOGIN_URL } from "../../config/urls";
import { useUserRequired } from "../../utils/hooks";
import { MiniProfile, Schedule, UserContext } from "../../components";

import { logout, todo, updatetodo } from "../../pages/Home/sdk";
import { Label } from 'reactstrap';

/* must contain 
        progress manage,
        project detail,

        have 2 type permission
        1. owner -> add progress
        2. advisor -> comment progress
        3. visiter -> none of above


        require
        ต้องการให้ project สามารถส่ง id ของ progress ของ project ทั้งหมดนี้มาได้ทุกอันมาได้
        ต้องการให้เวลาส่ง progression สามารถส่ง id review ของ progress มาได้


*/

//const updateProfile = (sample) => putUser("users/testPUT/", sample);
const get_project = (project_id) => getFeature(`project/${project_id}/`);
const get_prog = (prog_id) => getFeature(`progress/${prog_id}/`);
const get_posts = (postsId) => getFeature(`posts/${postsId}`)

const post_prog = (data) => postFeature("progress/", data);
const post_review = (data) => postFeature("reviews/", data);



const Project = () => {

    useUserRequired();

    const [progress, setProgress] = useState({});
    const [project, setProject] = useState({});

    const [posts, setPosts] = useState();
    const [url, setUrl] = useState("");

    const history = useHistory();
    const { user, setUser } = useContext(UserContext);

    //console.log(user)

    //console.log(project)

    useEffect(() => {
        console.log("call useEff")
        get_project(1).then((resp) => {
            setProject(resp.data);

        

        });

        get_prog(1).then((resp) => {
            setProgress(resp.data);
        });
    }, []);

    //console.log(project.id)
    //console.log(project)
    console.log("proggggggg")
    console.log(progress)
    console.log("proggggggg")

    return (

        <Container>

            <Label>project id: {project.id}</Label>
            <Label>project owner id: {project.owner}</Label>
            <Label>project adviser id: {project.adviser}</Label>
            <Label>project status: {project.status}</Label>
            <Label>project detail: {project.Detail}</Label>
            <Col>
                <ProgressForm user={user} project={project}>

                </ProgressForm>
                <ReviewForm></ReviewForm>

            </Col>
            
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

            {/* progress 
                owner
                project
                title
                descrip
                timp
            */}

        </Container>


    )
}

const ProgressForm = (props) => {

    const [progress, setProgress] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(inputs.description);
        setProgress((values) => ({ ...values, [name]: value }));
        //console.log("after change" + inputs.description);
    };

    const handleCreateProgress = (event) => {
        event.preventDefault();

        const data = {
            owner: props.user.id,
            project: props.project.id,
            title: progress.title,
            description: progress.description,

        };
        console.log(data)
        post_prog(data);
        console.log("create done")

    };
    return (
        <>
            {/* progress 
                owner
                project
                title
                descrip
                timp
            */}
            <form onSubmit={handleCreateProgress}>
                <h1>Prog form</h1>
                <Label>Title:

                    <input
                        type="text"
                        name="title"
                        value={progress.title || ""}
                        onChange={handleChange}
                    />
                </Label>

                <Label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={progress.description || ""}
                        onChange={handleChange}
                    />
                </Label>
                <input type="submit" />
            </form>

        </>
    );
}

const ReviewForm = (props) => {

    const [review, setReview] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(inputs.description);
        setReview((values) => ({ ...values, [name]: value }));
        //console.log("after change" + inputs.description);
    };

    const handleCreateProgress = (event) => {
        event.preventDefault();

        const data = {
            owner: props.user.id,
            progreess: props.progress.id,
            status: review.status,
            comment: review.comment,

        };
        console.log(data)
        post_review(data);
        console.log("create done")

    };
    return (
        <>
            <h1>review form</h1>
            <form onSubmit={handleCreateProgress}>
                progress form
                <Label>status:

                    <input
                        type="text"
                        name="status"
                        value={review.status || ""}
                        onChange={handleChange}
                    />
                </Label>

                <Label>
                    comment:
                    <input
                        type="text"
                        name="comment"
                        value={review.comment || ""}
                        onChange={handleChange}
                    />
                </Label>
                <input type="submit" />
            </form>

        </>
    );
}

export default Project;