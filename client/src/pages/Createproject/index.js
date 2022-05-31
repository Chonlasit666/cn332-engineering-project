import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { getFeature, postFeature } from "../../utils/sdk";
import { getUser } from "../../utils/sdk";
import { useUserRequired } from "../../utils/hooks";
import { UserContext } from "../../components";


const create_project = (data) => postFeature('create_project/', data)
const get_profile = () => getUser('users/me/');
const get_professor = () => getFeature('professor/');
const get_student = () => getFeature('student/');


const Createproject = () => {
  useUserRequired();

  const { user, setUser } = useContext(UserContext);

  //var professer = ["", 1, 2, 3, 4, 5]

  const [professor, setProfessor] = useState([])
  const [student, setStudent] = useState([])
  const [formData, setFormData] = useState({});
  const [prof, setProf] = useState([]);


  useEffect(() => {
    console.log("call useEff")
    get_profile().then((resp) => {
      setProf(resp.data);

    });
    get_professor().then((resp) => {
      setProfessor(resp.data);

    });
    get_student().then((resp) => {
      setStudent(resp.data);

    });

  }, []);

  console.log(student)

  const handleChange = (event) => {
    console.log(formData)
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log("formDARTA")
    console.log(formData.adviser)

    event.preventDefault();
    const data = {
      title: formData.title,
      owner: formData.owner,
      adviser: [formData.adviser],
      status: formData.status,
      Facility: formData.Facility,
      File_url: formData.File_url,
      detail: formData.Detail,
      progress: [],

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


    <Container className='justify-content-md-center'>
      {/* requirement
        ที่กรอกฟอร์มสำหรับ adviser ต้องเป็น option
        โดยที่เราจะดึง profile ของอาจารย์ทั้งหมดออกมา
      */}
      <h1>create project</h1>

      <form onSubmit={handleSubmit}>
        <label>title:
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
          />
        </label>

        <br></br>

        <label>status:
          <input
            type="text"
            name="status"
            value={formData.status || ""}
            onChange={handleChange}
          />
        </label>

        <br></br>

        <label>
          adviser:
          <select name="adviser" value={formData.value} onChange={handleChange}>
            {professor.map((p, index) => {
              return (
                <>
                  <option value={p.id} >{p.first_name} {p.last_name}</option>
                </>
              )
            })}
          </select>
        </label>
        <br></br>

        <label>
          owner:
          <select name="owner" value={formData.value} onChange={handleChange}>
            {student.map((p, index) => {
              return (
                <>
                  <option value={p.id} >{p.first_name} {p.last_name}</option>
                </>
              )
            })}
          </select>
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

  );
}

export default Createproject;
