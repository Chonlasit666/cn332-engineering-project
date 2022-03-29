import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import axios from "axios";
import './googleLogin.css';


/**
 * 
 * @param {*} accesstoken This is the accesstoken of the user obtained from Google
 */

 let googleLogin = async (accesstoken) => {
  let res = await axios.post(
    "http://localhost:8000/rest-auth/google/",
    {
      access_token: accesstoken,
      
    }
  );
  console.log(res);
  return await res.status;
};





export default class Login extends Component {
  
  render() {
    const responseGoogle = async(response) => {
      let googleResponse  = await googleLogin(response.accessToken)
      console.log(googleResponse);
      console.log(response);
    }
  

    return (
      <div className="Login">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>



        <GoogleLogin
          clientId="814359987215-0bhsf7s2msapugffv3klrcv2sjg03avi.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />

      </div>
    );
  }
}