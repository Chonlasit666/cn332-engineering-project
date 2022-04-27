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



const getProjects = () => getFeature("projects/");


const Documents = () => {

  let history = useHistory();

  const [samplePost, setSamplePost] = useState([])
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    console.log("call useEff")
    getProjects().then((resp) => {
      setSamplePost(resp.data);

    });
    console.log(samplePost)
  }, []);

  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(inputs.description);
    setInputs((values) => ({ ...values, [name]: value }));
    console.log("after change" + inputs.description);
  };

  return (
    <Container className='justify-content-md-center'>
      this is doc
      <ListGroup as="ol" numbered>
        {samplePost.map((post, index) => (

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

            </div>

          </ListGroup.Item>
        )


        )}
      </ListGroup>

    </Container>

  );
}


export default Documents;
