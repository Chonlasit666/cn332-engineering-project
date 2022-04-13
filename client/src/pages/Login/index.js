import React, { useEffect, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";

import { GoogleLogin } from "react-google-login";
import GoogleButton from "react-google-button";

import { HOME_URL } from "../../config/urls";
import { notifyError } from "../../utils/notifications";
import { UserContext, Layout } from "../../components";

import { validateTokenAndObtainSession } from "../../pages/Login/sdk";
import styles from "./Login.module.css";

const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_BASE_BACKEND_URL } = process.env;

const Login = () => {
  const history = useHistory();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const queryParams = new URLSearchParams(history.location.search);

    const error = queryParams.get("error");

    if (error) {
      notifyError(error);
      history.replace({ search: null });
    }
  }, [history]);

  const handleUserInit = useCallback(
    (resp) => {
      if (resp.ok) {
        setUser(resp.data);
        history.push(HOME_URL);
      } else {
        notifyError(resp.data[0]);
      }
    },
    [history, setUser]
  );

  const onGoogleLoginSuccess = useCallback(
    (response) => {
      const idToken = response.tokenId;
      const data = {
        email: response.profileObj.email,
        first_name: response.profileObj.givenName,
        last_name: response.profileObj.familyName,
      };

      validateTokenAndObtainSession({ data, idToken })
        .then(handleUserInit)
        .catch(notifyError);
    },
    [handleUserInit]
  );

  return (
    <Layout className={styles.content}>
      <h1 className={styles.pageHeader}>Welcome to our Demo App!</h1>

      <h2 className={styles.btnHeader}>Client-side flow:</h2>
      <GoogleLogin
        render={(renderProps) => <GoogleButton {...renderProps} />}
        clientId={REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={onGoogleLoginSuccess}
        onFailure={({ details }) => notifyError(details)}
      />

    </Layout>
  );
};

export default Login;
