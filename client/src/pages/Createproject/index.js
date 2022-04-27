import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Createproject = () => {

  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console(name)
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: formData.title,
      body: formData.description,

    };
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
        <Form onSubmit={handleSubmit}>
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
            /* onSubmit={handleSubmit} */
          >
            Create Project
          </Button>
        </Form>

      </Container>
    </div>
  );
}

export default Createproject;
