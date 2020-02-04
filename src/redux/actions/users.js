import { POST_USERS } from '../constant';

export const postData = users => {
  const data = localStorage.getItem('user')
  return {
    type: POST_USERS,
    payload: data
  };
}; 