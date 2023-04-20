import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

//get user 
export const getUser=(token)=>{
  return API.get(`/user/currentUser`,{ headers: {"Authorization" : `${token}`} });
}


//getAllUsers
export const getAllUsers=(token)=>{
  return API.get(`/user`,{ headers: {"Authorization" : `${token}`} })
}