import { GET_VIDEOS_YOUTUBE } from "../constant";

const initialState = {
  data: [],
  isLoading: false,
  error: false
}


export const video = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_VIDEOS_YOUTUBE}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_VIDEOS_YOUTUBE}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data.items,
        isLoading: false
      };
    case `${GET_VIDEOS_YOUTUBE}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
}