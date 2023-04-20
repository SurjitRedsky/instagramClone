import axios from "axios";


const API = axios.create({ baseURL: "http://localhost:4000" });


export const getPosts=()=>{
  return API.get(`/posts`)
}