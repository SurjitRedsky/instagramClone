import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });

//get current user 
export const getUser=(token)=>{
  return API.get(`/user/currentUser`,{ headers: {"Authorization" : `${token}`} });
}

//get user 
export const getUserById=(id,token)=>{
  console.log("dataApiIntegration -->",id,token);
  return API.get(`/user/${id}` ,{ headers: {"Authorization" : `${token}`} } )
}

//getAllUsers
export const getAllUsers=(token)=>{
  return API.get(`/user`,{ headers: {"Authorization" : `${token}`} })
}



