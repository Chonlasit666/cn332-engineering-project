

import React, { useContext, useCallback, useState, useEffect, } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { getUser, getFeature, postUserm, putUser, getProfileView, getPostView } from "../../utils/sdk";
import { Containers } from '../../popupcomment/Containers';

import {
    Navbar,
    Nav,
    NavDropdown,
    Col,
    Row,
    Image,
    Button,
    Tabs,
    Container,
} from "react-bootstrap";
import { storage } from '../../utils/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


import { LOGIN_URL } from "../../config/urls";
import { useUserRequired } from "../../utils/hooks";
import { MiniProfile, Schedule, UserContext } from "../../components";

import { logout, todo, updatetodo } from "../../pages/Home/sdk";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import "../PostView/app.css"

const getPost = (id) => getPostView(`getPostView/${id}/`);
const getComment = (id) => getComment(`getCommentView/${id}/`)
const PostView = () => {
    let { id } = useParams();
    const [prog, setProg] = useState([])
    const [commentlist, setCommentlist] = useState([])
    const triggerText = "ตอบโพสต์";

    // const getComment = (data) => {
    //     data.map((post_1, index) => ((
    //         console.log(post_1.comments)

    //         for (const [key, value] of Object.entries(post_1.comments)) {
    //             console.log(`${key}: ${value}`);
    //         }
    //     )
    //     )
    //     )


    // }

    useEffect(() => {
        console.log("call useEff")
        getPost(id).then((resp) => {
            setProg(resp.data);
            // getComment(resp.data)
        });

    }, []);


    console.log(prog[0])
    return (
        <Container>




            {prog.map((post_1, index) => (
                <Row>
                    <Col xs="5" sm="6" md="5" lg="4" >
                        <div className="Main_post_owner">

                            {post_1.options.map((post_2, index2) => (
                                // <div className="post_avatar" style={{ backgroundImage: `url(${post_2.avatar})` }}
                                // />
                                <div className="post_owner">

                                    <div className="post_avatar" style={{ backgroundImage: `url(${post_2.avatar})` }} />


                                    <div className="post_name" >
                                        <Link className="name" to={`/ProfileView/${post_1.id}`}>
                                            <span className="first_name">
                                                {post_2.first_name}
                                            </span>
                                        </Link>
                                        <Link className="name" to={`/ProfileView/${post_1.id}`}>
                                            <span className="last_name">

                                                {post_2.last_name}
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            ))}




                        </div>
                    </Col>
                    <Col className="topic" sm="6">
                        <div className="title_name">
                            {post_1.title}
                        </div>
                        <div className="title_create">
                            <div className="create_name">
                                <span>เวลาสร้างโพสต์   </span>
                                {post_1.created}
                            </div>
                        </div>
                        <hr></hr>
                        <div className="tags_topic">
                            {post_1.tags.map((tag, index) => (
                                <li className="d-inline tag-name"
                                    value={tag}>
                                    {tag}
                                </li>

                            ))}


                        </div>
                        <hr></hr>
                        <div className="body_main">

                            <div className="body">
                                {post_1.body}
                            </div>
                        </div>




                        <span></span></Col>
                </Row >





            ))
            }
            <Row>
                <Col>
                    {prog.map((post_1, index) => (
                        <div>
                            <hr></hr>
                            {post_1.commentDetail.map((comment, index2) => (

                                <div>

                                    <div className="comment_head">
                                        <span>
                                            {comment.owner}
                                        </span>
                                        <span className="comment_create">

                                            {comment.created}

                                        </span>

                                    </div>

                                    <div className="comment_body">
                                        {comment.body}
                                    </div>
                                    <hr></hr>
                                </div>
                            )
                            )}

                        </div>


                    ))
                    }

                </Col>


            </Row>
            <Col>
                <div className="create_comment">
                    <Containers triggerText={triggerText} ></Containers>
                </div>
            </Col>
            <Col>
            </Col>

        </Container >
    )
}

export default PostView;