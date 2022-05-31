import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import React, { useContext, useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getFeature, postFeature } from "../../utils/sdk";
import { Comment } from "../../components";
import { Label } from "reactstrap";

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



const getProjects = () => getFeature("create_project/");
const getSearchedProjects = (title) => getFeature(`search/projects/?search=${title}`)
const getSearchedProfile = (id) => getFeature(`search/profile/?search=${id}`)


const Documents = () => {

  let history = useHistory();

  const [samplePost, setSamplePost] = useState([])
  const [inputs, setInputs] = useState({});
  const [searchedProjects, setSearchedProjects] = useState([])
  const [searchForm, setSearchForm] = useState({ title: "" })

  useEffect(() => {
    console.log("call useEff")
    getSearchedProjects(searchForm.title).then((resp) => {
      setSearchedProjects(resp.data);

    });
    console.log(samplePost)
  }, [searchForm]);

  const handleSearchForm = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSearchForm((values) => ({ ...values, [name]: value }));
    console.log("title")
    console.log(searchForm.title)
    console.log("title")
  }


  return (
    <Container className='justify-content-md-center'>
      <h1>Searched projects</h1>
      <Row>
        <Col md="7">
          <ListGroup as="ol" numbered>
            {searchedProjects.map((project, index) => (

              <ProjectCard project={project}></ProjectCard>

            )
            )}
          </ListGroup>
        </Col>

        <Col md="3">
          <Label>Search :
            <input
              type="text"
              name="title"
              value={searchForm.title || ""}
              onChange={handleSearchForm}
            />
          </Label>
        </Col>
      </Row>


    </Container>

  );
}


export default Documents;

const ProjectCard = (props) => {

  var project = props.project
  console.log(project)
  var owner = project.owner
  var professor = project.adviser

  const [searchedOwner, setSearchedOwner] = useState([])
  const [searchedProfessor, setSearchedProfessor] = useState([])

  useEffect(() => {
    console.log("call useEff")
    getSearchedProfile(owner).then((resp) => {
      setSearchedOwner(resp.data);

    });

    getSearchedProfile(professor[0]).then((resp) => {
      setSearchedProfessor(resp.data);

    });
  }, [])

  return (
    <>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start justify-content-end"
      >
        <div className="ms-2 me-auto">
          {/* 'id','title','status','owner','adviser','Facility','File_url','Detail' */}
          <div className="fw-bold">{project.title}</div>
          <label>this is status {project.status}</label><br></br>
          {(searchedProfessor.length > 0) ?
            <><label>this is adviser {searchedProfessor[0].first_name} {searchedProfessor[0].last_name}</label><br></br></> :
            <></>
          }
          {(searchedOwner.length > 0) ?
            <>{searchedOwner.map((profile, index) => (
              <>
                <label>this is owner {profile.first_name} {profile.last_name}</label><br></br>
              </>
            ))}
            </> :
            <></>
          }

          <label>Facility: {project.Facility}</label><br></br>
          <label>file:     {project.File_url}</label><br></br>
          <label>Detail:   {project.Detail}</label><br></br>

        </div>

      </ListGroup.Item></>
  )
}
