import { useContext, useEffect, useState } from "react";

import { getUser, getFeature } from "../utils/sdk";
import { UserContext } from "../components";

const getMe = () => getUser("users/me");
const getProject = () => getFeature("projects");

export const useUserRequired = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      getMe().then((resp) => setUser(resp.data));
    }
  }, [user, setUser]);
};
