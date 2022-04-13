import { useContext, useEffect, useState } from "react";

import { get, getTest } from "../utils/sdk";
import { UserContext } from "../components";

const getMe = () => get("users/me");
// how to create get method
const getTestconsole = () => getTest("users/testget");

export const useTestRequired = () => {
  const [users ,  setusers] = useState();

  useEffect(() => {
    getTestconsole().then(data => setusers(data))

  }, []);
  return users;

};

export const useUserRequired = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      getMe().then((resp) => setUser(resp.data));
    }
  }, [user, setUser]);
};
