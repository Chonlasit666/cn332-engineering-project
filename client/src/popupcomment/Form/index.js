import React, { useContext, useCallback, useState, useEffect, setState, useRef } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import TagsInput from '../Tag'
import { getFeature, postFeature } from "../../utils/sdk";
export const Form = ({ onSubmit }) => {

    let { id } = useParams();

    const comment_POST = (data) => postFeature("comments/", data);

    const [postForm, setPostForm] = useState({});

    const handleCreatePost = (event) => {



        event.preventDefault();
        console.log(event.target[0].value)
        const data = {
            body: event.target[0].value,
            post: id,
        };
        console.log("-----------", data);
        comment_POST(data)
        window.location.reload();
    }


    return (
        <form onSubmit={handleCreatePost}  >
            <div className="form-group">
                <label htmlFor="name">ข้อความที่จะตอบ</label>
                <input className="form-control" id="body" placeholder="ตอบกลับ" />

            </div>

            <div className="form-group">
                <button className="form-control btn btn-primary" type="sumbit">
                    Submit
                </button>
            </div>
        </form >

    );

};
export default Form;
