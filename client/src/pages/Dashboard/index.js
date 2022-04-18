import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import React, { useContext, useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getFeature , postFeature} from "../../utils/sdk";

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
const post_POST = (data) => postFeature("create_post/" , data);

const Dashboard = () => {
  const [samplePost, setSamplePost] = useState([])
  const [inputs, setInputs] = useState({});
  useEffect(()=> {
    getPost().then((resp) => {
      setSamplePost(resp.data);
      
    });
  },[]);

  /* let i = 0;
  while ( i < samplePost.length) {
    console.log("i  = " + i)
    console.log( "this is post" + samplePost[i].title);
    i++;
    
  } */

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(inputs.description);
    setInputs((values) => ({ ...values, [name]: value }));
    console.log("after change" + inputs.description);
  };

  const handleCreatePost = (event) => {
    event.preventDefault();
    const data = {
      title: inputs.title,
      body: inputs.description,
      
    };
    console.log(inputs.description);
    post_POST(data);
  };
  
  return (
    <Container className='justify-content-md-center'>
      <ListGroup as="ol" numbered>
      {samplePost.map((post,index)=>(
        
        <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        key={index}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{post.title}</div>
          {post.body}
        </div>
        <Badge bg="primary" pill>
          no comment xD
        </Badge>
      </ListGroup.Item>
      )
         
         
     )}
    </ListGroup>
    <form onSubmit={handleCreatePost}>
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

        <input type="submit" />
      </form>
    </Container>
    
  );
}


export default Dashboard;
