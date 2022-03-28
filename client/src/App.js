import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import googleLogin from "./services/googleLogin"
import './App.css';

class App extends Component {

  render() {


    const responseGoogle = async(response) => {
      let googleResponse  = await googleLogin(response.accessToken)
      console.log(googleResponse);
      console.log(response);
    }

    return (
      <div className="App">
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

export default App;