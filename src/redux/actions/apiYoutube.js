import { GET_VIDEOS_YOUTUBE } from '../constant';
import axios from "axios";

export const getVideos = () => {

  const myKey = 'AIzaSyAS0cr9moOC_mjNrNWYAp6Ljd0UylxkskI'

  return {
    type: GET_VIDEOS_YOUTUBE,
    payload: axios(
      {
        method: "GET",
        url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=javascript&key=${myKey}&maxResults=9`
      }
    )
  }
}