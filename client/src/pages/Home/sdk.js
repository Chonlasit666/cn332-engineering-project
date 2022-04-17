import { postUser, postFeature, } from '../../utils/sdk';

const data = {
    id : 3 ,
    title: "mos",
    description: "labro",
    completed: true,
  };

export const logout = () => postUser('auth/logout/', {});

export const todo = (sample) => postUser('users/test/', sample )

export const updatetodo = () => postUser('users/update/', data )
 