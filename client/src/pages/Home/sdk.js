import { post } from '../../utils/sdk';

const data = {
    id : 3 ,
    title: "mos",
    description: "labro",
    completed: true,
  };

export const logout = () => post('auth/logout/', {});

export const todo = (sample) => post('users/test/', sample )

export const updatetodo = () => post('users/update/', data )
