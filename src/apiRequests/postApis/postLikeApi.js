import axios from "axios";

const API = axios.create({baseURL:"http://localhost:4000" })

export const postLike=({postId,token} )=>{
  console.log("data-->",postId,token);
  return API.put(`/likePost/${postId}`," ",{headers:{"Authorization":`${token}`}})
}