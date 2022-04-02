
import { Navbar, Container, Nav, NavDropdown, Col, Row, Image, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

import { useState } from "react";

import { storage } from './firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


function Profile_Picture() {
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState("");

    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
    };

    const uploadFiles = async (file) => {
        //
        if (!file) return;
        const sotrageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                    setUrl(url => downloadURL);

                });
            }
        );
    };



    return (
        <Col className="col-4column bg-white" md="4">
            <div className="profile-img">
                <Image src={url || "https://play-lh.googleusercontent.com/kTkV3EWtNTDVCzRnUdbI5KdXm6Io-IM4Fb3mDcmX9-EOCEXJxnAxaph_leEn6m61E0I"} a00lt="Logo" />

                <form onSubmit={formHandler}>
                    <input type="file" className="input" />
                    <button type="submit">Upload</button>
                </form>
                <hr />


            </div>
        </Col >
    )
}
export default Profile_Picture;