
import { Container, Row, Col, Button, Image, ListGroup, ListGroupItem } from 'react-bootstrap'
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
import { memo } from 'react';
import { textAlign, unstable_getThemeValue } from '@mui/system';

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
const get_review = (review_id) => getFeature(`reviews/${review_id}`)
const get_projects = () => getFeature(`project/projectadviserall/`)
const get_myproject = () => getFeature('project/projectownerall/')


const post_prog = (data) => postFeature("progress/", data);
const post_review = (data) => postFeature("reviews/", data);
const getSearchedProfile = (id) => getFeature(`search/profile/?search=${id}`)



const Project = () => {


    useUserRequired();

    const [project, setProject] = useState({});
    const [projects, setProjects] = useState([]);
    const [projectTeacher, setProjectTeacher] = useState([]);
    const [projectStudent, setProjectStudent] = useState([]);

    const [posts, setPosts] = useState();
    const [url, setUrl] = useState("");
    const [isTeacher, setIsTeacher] = useState(false);
    const [step, setStep] = useState(0);


    const history = useHistory();
    const { user, setUser } = useContext(UserContext);


    useEffect(() => {

        /* if (projects.length === 1) {
            get_project(projects[0].id).then((resp) => {
                setProject(resp.data);

            });
        } */

        if (!user !== true) {
            console.log("fffffffffffffffffffff")
            console.log(user.status)
            console.log("fffffffffffffffffffff")
            if (user.status === 'Professor' || user.status === 'P') {
                console.log("i'm P")
                setIsTeacher(true);
                get_projects().then((resp) => {
                    setProjects(resp.data);

                });
                setStep(1)

            } else if (user.status === 'Student' || user.status === 'S') {
                console.log("i'm S")
                setIsTeacher(false)
                get_myproject().then((resp) => {
                    setProject(resp.data[0]);

                });


            }
        }

    }, [user, isTeacher]);

    const handleOnClick = (test) => {
        console.log(test)

        if (step !== 1) {
            setStep(1);
            /* get_project(id).then((resp) => {
                setProject(resp.data);

            }); */
        } else {
            console.log("i'm in setp 0")
            setStep(0);
        }

    }

    const changeProject = (id) => {
        console.log("hello " + id)
        get_project(id).then((resp) => {
            setProject(resp.data);

        });
        getSearchedProfile(project.adviser).then((resp) => {
            setProjectTeacher(resp.data)

        });
        getSearchedProfile(project.owner).then((resp) => {
            setProjectStudent(resp.data)

        });
        
        setStep(0);
    }

    console.log("f u")
    console.log(projects)
    console.log("f u")

    console.log("project")
    console.log(project)

    switch (step) {
        case 0:
            if (project.owner !== undefined && project.adviser !== undefined) {
                return (
                    <Container>


                        <Row md="6">
                            <Col md="8">

                                <h1>Project Detail</h1>
                                {isTeacher ? <Button onClick={handleOnClick}>select project</Button> : <></>}

                                <Label>
                                    Owner: {(projectStudent.length !== 0)?projectStudent[0].first_name:user.first_name} <br></br>
                                    Adviser : {(projectTeacher.length !== 0)?projectTeacher[0].first_name:user.first_name} <br></br>
                                    status: {project.status} <br></br>
                                    project detail: {project.Detail} <br></br>
                                </Label>

                                <Prog progs={project.progress} isTeacher={isTeacher} />
                            </Col>

                            <Col md="2">
                                {isTeacher ?
                                    <></> :
                                    <ProgressForm user={user} project={project} />
                                }

                            </Col>

                        </Row>


                    </Container>


                )
            } else {
                return(
                    <></>
                )
            }


        case 1:

            return (
                /* ตรงนี้จะเป็นที่แสดง project ทั้งหทดของ อาจารย์ 
                    และเมื่อทำการเลือกจะเป็นการเปลี่ยน step กลับไปที่ 0 พร้อมกับ pk ของ 
                    project ที่เลือกและจะได้ทำเรื่องต่างๆได้เช่น การให้ review กับ prog ที่นักศึกษาให้มา

                 */
                <Container>
                    <h1>select a project</h1>
                    <>
                        if u r teacher this page will display all project u have
                    </>

                    <ListGroup>
                        {projects.map((p, index) => {
                            return (
                                <ListGroupItem onClick={() => {
                                    changeProject(p.id);
                                }}>
                                    <Label>id:{p.id} title:{p.title} owenr:{p.owner} adviser:{p.adviser}</Label>


                                </ListGroupItem>

                            )
                        })}

                    </ListGroup>
                </Container >
            )



    }


}

const Prog = (props) => {

    const [progress, setProgress] = useState([]);
    const [getValue, setGetValue] = useState(true);
    var prog_list = props.progs
    var isTeacher = props.isTeacher

    function test(prog) {

        for (var p in prog) {
            //console.log("hi")
            //console.log(p)
            //console.log(prog[p])

            get_prog(parseInt(prog[p])).then((resp) => {
                //console.log("datas")
                //console.log(resp.data)
                setProgress(prev => [...prev, (resp.data)]);
            });
        }

    }
    useEffect(() => {
        test(prog_list)
        setGetValue(prev => !prev)
    }, [prog_list])

    return (
        <>
            <h1>progress</h1>
            <ListGroup>
                {
                    progress.map((p, index) => {
                        return (
                            <>
                                <ListGroupItem>
                                    <Row>
                                        <Col md="7">
                                            <h3>Title: {p.title}</h3>
                                            detail: {p.description} owner: {p.owner} timestamp: {p.timestamp}

                                            <h3>Review</h3>
                                            <ListGroup>
                                                {p.review.map((r, index) => {
                                                    return (
                                                        <Review id={r}></Review>
                                                    )
                                                })}
                                            </ListGroup>
                                        </Col>
                                        <Col md="2">
                                            {isTeacher ?
                                                <ReviewForm id={p.id} /> : <></>
                                            }

                                        </Col>

                                    </Row>

                                </ListGroupItem>
                            </>
                        )
                    }
                    )
                }
            </ListGroup>
        </>
    )
}

const Review = (props) => {
    var review_id = props.id
    const [review, setReview] = useState({})

    useEffect(() => {
        get_review(review_id).then((resp) => {
            setReview(resp.data);

        });
    }, [])

    return (
        <>
            <ListGroupItem>
                detail: {review.comments} status: {review.status} by {review.owner} timestamp: {review.timestamp}
            </ListGroupItem>
        </>
    )
}



const ProgressForm = (props) => {

    const [progress, setProgress] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProgress((values) => ({ ...values, [name]: value }));
    };

    const handleCreateProgress = (event) => {
        event.preventDefault();

        const data = {
            owner: props.user.id,
            project: props.project.id,
            title: progress.title,
            description: progress.description,
            review: [],

        };

        post_prog(data);
        console.log("create progress done")

    };
    return (
        <>
            <form onSubmit={handleCreateProgress}>
                <h1>Update Progress</h1>
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
                        type="textfield"
                        name="description"
                        size=""
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
    var prog_id = props.id

    useUserRequired();
    const { user, setUser } = useContext(UserContext);
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
            owner: user.id,
            progress: prog_id,
            status: review.status,
            comments: review.comments,

        };
        console.log(data)
        post_review(data);
        console.log("create done")

    };
    return (
        <>
            review form
            <form onSubmit={handleCreateProgress}>

                <Label>
                    comment:
                    <input
                        type="text"
                        name="comments"
                        onChange={handleChange}
                    />
                </Label>
                <Label>
                    status:
                    <select name="status" value={review.status || ""} onChange={handleChange}>
                        <option value="Unknown">Unknown</option>
                        <option value='A'>Approved</option>
                        <option value='R'>Rejected</option>
                    </select>
                </Label>
                <input type="submit" />
            </form>

        </>
    );
}

export default Project;