import React, { useContext, useCallback, useState, useEffect, setState, useRef } from "react";

import TagsInput from '../Tag'
import { getFeature, postFeature } from "../../utils/sdk";
export const Form = ({ onSubmit }) => {

    const getPost = () => getFeature("posts/");

    const post_POST = (data) => postFeature("create_post/", data);
    const [tagsparent, setTagsparent] = React.useState("");

    const selectedTags = tags => {

        console.log(tags);
    };
    const onGetValve = (tags) => {

        setTagsparent(tags);


    };


    const handleSubmit = (event) => {



    };




    const [postForm, setPostForm] = useState({});

    const handleCreatePost = (event) => {

        console.log("testnotevent")
        console.log(event)

        event.preventDefault();
        const data = {
            title: event.target[0].value,
            body: event.target[1].value,
            tags: tagsparent,

        };
        console.log(data);
        post_POST(data).then(() => {
            getPost().then((resp) => {
                setPostForm(resp.data);

            });
            console.log("created")
            console.log(data)

        });
        window.location.reload()


    }
    const handleKeyDown = (event, callback) => {
        if (event.key === 'Enter' && event.shiftKey === false) {
            event.preventDefault();

        }
    };


    return (
        <form onSubmit={handleCreatePost} onKeyDown={e => { handleKeyDown(e, handleSubmit) }} >
            <div className="form-group">
                <label htmlFor="name">Title</label>
                <input className="form-control" id="title" placeholder="ใส่หัวข้อ" />

            </div>
            <div className="form-group">
                <label htmlFor="email">รายละเอียดโพสต์</label>
                <input
                    type="text"
                    className="form-control"
                    id="body"
                    placeholder="ใส่รายละเอียด"
                />
            </div>




            <TagsInput selectedTags={selectedTags} tags={['YEAR3', 'NORMAL']} onGetValve={onGetValve} />





            <div className="form-group">
                <button className="form-control btn btn-primary" type="sumbit">
                    Submit
                </button>
            </div>
        </form >

    );

};
export default Form;
