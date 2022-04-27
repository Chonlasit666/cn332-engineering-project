import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { postFeature } from "../../utils/sdk";

const create_project = (data) => postFeature('create_project/', data)

const Createproject = () => {

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    console.log(formData)
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: formData.title,
      owner: formData.owner,
      adviser: formData.adviser,
      status: formData.status,
      Facility: formData.Facility,
      File_url: formData.File_url,
      detail: formData.Detail,

    };
    console.log(data)
    create_project(data);
    console.log("in submit");
    /* post_POST(data).then(() => {
      getPost().then((resp) => {
        setSamplePost(resp.data);

      });
    }); */

  };

  const show = () => {
    console.log("inshow")
  }
  return (
    <div>
      <br />
      <Container>
        {/* <Form onSubmit={handleSubmit}>
          <Row className="row">
            <Col className="column" md="3">
              <br />
              <Button variant="warning" className="button">
                Upload Profile
              </Button>
            </Col>
            <Col className="column">
              {formData.title}
              <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
              <Form.Control type="text" placeholder="Markdown (tag)" />
              <br />
              <Form.Group controlId="formFileMultiple" className="mb-3">
                <Form.Control type="file" multiple />
              </Form.Group>

              <Form.Select>
                <option>Status</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="row">
            <Col className="column" md="6">
              Requirment Context
              <br />
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Col>

            <Col className="column">
              Detail
              <br />
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Col>
          </Row>
          <Button
            type="submit"
            variant="secondary"
            className="button d-md-flex justify-content-md-end"
            
          >
            Create Project
          </Button>
        </Form> */}
        <form onSubmit={handleSubmit}>
          <label>Event Name:
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
            />
          </label>

          <br></br>

          <label>Location:
            <input
              type="text"
              name="status"
              value={formData.status || ""}
              onChange={handleChange}
            />
          </label>

          <br></br>

          <label>owner:
            <input
              type="text"
              name="owner"
              value={formData.owner || ""}
              onChange={handleChange}
            />
          </label>
          <br></br>

          <label> adviser:
            <input
              type="text"
              name="adviser"
              value={formData.adviser || ""}
              onChange={handleChange}
            />

          </label>

          <br></br>

          <label> facility:
            <input
              type="text"
              name="Facility"
              value={formData.Facility || ""}
              onChange={handleChange}
            />
          </label>

          <br></br>

          <label> File_url:
            <input
              type="text"
              name="File_url"
              value={formData.File_url || ""}
              onChange={handleChange}
            />
          </label>
          
          <br></br>

          <label> Detail:
            <input
              type="text"
              name="Detail"
              value={formData.Detail || ""}
              onChange={handleChange}
            />
          </label>

          <input type="submit" />
        </form>

      </Container>
    </div>
  );
}

export default Createproject;
