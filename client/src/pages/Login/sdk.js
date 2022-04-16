import { postUser, } from "../../utils/sdk";

export const validateTokenAndObtainSession = ({ data, idToken }) => {
  const headers = {
    Authorization: idToken,
    "Content-Type": "application/json",
  };

  return postUser("users/init/", data, { headers });
};
