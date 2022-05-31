import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import React, { useContext, useCallback, useState, useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
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
import "../Dashboard/App.css";
import { Label } from "reactstrap";



const getPost = () => getFeature("posts/");
const getPost_tags = (tags) => getFeature(`posts/tags/${tags}`);
const post_POST = (data) => postFeature("create_post/", data);
const getComment = () => getFeature("comments/<int:pk>/");

const DashboardTags = () => {

    let { tags } = useParams();


    let history = useHistory();

    const [samplePost, setSamplePost] = useState([])
    const [inputs, setInputs] = useState({});

    useEffect(() => {

        getPost_tags(tags).then((resp) => {
            setSamplePost(resp.data);



        });
    }, []);
    console.log(samplePost)

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
        console.log(data);
        post_POST(data).then(() => {
            getPost().then((resp) => {
                setSamplePost(resp.data);


            });
        });


    };

    function lower(obj) {
        var i = 0;
        for (var prop in obj) {
            var test_first_name = (((obj[prop].options)[i]).first_name);
            var test_last_name = (((obj[prop].options)[i]).last_name);

            (((obj[prop].options)[i]).first_name) = test_first_name.charAt(0).toUpperCase() + test_first_name.slice(1).toLowerCase();
            (((obj[prop].options)[i]).last_name) = test_last_name.charAt(0).toUpperCase() + test_last_name.slice(1).toLowerCase();



        }
        i++;
    }



    lower(samplePost);

    function testclick() {

    }

    // const convertTextToLowerCase = () => {
    //   // To convert Lower Case
    //   let lowerCaseText = defaultText.toLowerCase();
    //   setDefaultText(lowerCaseText);
    // };









    return (
        <body style={{ backgroundColor: "#edf1f5" }}>
            <Container >
                <div className="home">
                    <div className="feed_warp">
                        <div className="testtags">

                        </div>


                        {samplePost.map((post, index) =>

                        (
                            <div className="dashboard_bar">



                                {
                                    post.options.map((post_1, index) => (

                                        <div className="activity-entry ">

                                            <div className="wrap">
                                                <div className="list">

                                                    <div className="dashboard_pic" style={{ backgroundImage: `url(${post_1.avatar})` }}
                                                    />
                                                    <div className="details">
                                                        <Link className="name" to={`/ProfileView/${post_1.id}`}>

                                                            <span className="first_name">
                                                                {post_1.first_name}
                                                            </span>
                                                            <span className="last_name">
                                                                {post_1.last_name}
                                                            </span>

                                                        </Link>
                                                        <Link to={`/PostView/${post.id}`}>
                                                            <div className="comment_title">
                                                                {post.title}
                                                            </div>
                                                        </Link>
                                                        <div className="tags_body">
                                                            {post.tags.map((tag, index) => (


                                                                <Link key={`${tag}-index`} onClick={() => { window.location.href = `/DashboardView/tags/${tag}` }}
                                                                >

                                                                    <li className="d-inline tag-name"
                                                                        value={tag}>
                                                                        {tag}
                                                                    </li>
                                                                </Link>

                                                            ))}
                                                        </div>


                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    )
                                    )
                                }





                            </div>
                        )
                        )
                        }






                    </div>
                </div>
            </Container >

        </body >
    );
}


export default DashboardTags;
