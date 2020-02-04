import { POST_USERS } from "../constant";

const initialState = {
  user: [],
  isLoading: false,
  error: false
}
export const user = (state = initialState, action) => {
  switch (action.type) {
    case POST_USERS:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}