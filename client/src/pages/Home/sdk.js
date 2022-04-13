import { post } from '../../utils/sdk';

const data = {
    title: "ayaya",
    description: "test",
    completed: true,
  };

export const logout = () => post('auth/logout/', {});

export const todo = (sample) => post('users/test/', sample )
