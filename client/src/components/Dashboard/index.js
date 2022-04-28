import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import React, { useContext, useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getFeature, postFeature } from "../../utils/sdk";
import { Comment } from "../../components";

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
//import "bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";


const getPost = () => getFeature("posts/");

const Dashboard = () => {
    let history = useHistory();

    const [samplePost, setSamplePost] = useState([])
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        console.log("call useEff")
        getPost().then((resp) => {
            setSamplePost(resp.data);


        });
    }, []);
    const samplePost_reversed = [...samplePost].reverse();

    console.log(samplePost_reversed)




    return (

        <Row>
            {samplePost_reversed.slice(0, 2).map((post, index) => (
                <Col>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start justify-content-end"
                        key={index}
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{post.title}</div>
                            <label>{post.body}</label><br></br>
                            <label>{post.owner}</label><br></br>
                            <label>this is id {post.id}</label>
                            <label>this is comments {post.comments}</label>

                            <Badge bg="primary" pill>
                                no commentsssssssss xD
                            </Badge>

                            <Comment comments={post.comments} />
                        </div>



                    </ListGroup.Item>


                </Col>
            ))
            }
        </Row>

    );
}


export default Dashboard;
