import axios from "axios";

// import axios from ''
const API = axios.create({ baseURL: "http://localhost:4000" });

export const follow = ({id, token}) => {
  console.log("token",token);
 return  API.post(`/follow/${id}`," ",{ headers: {"Authorization" : `${token}`} });
};



// export const sharePost = (data, token) => {
//   return API.post("/posts", data, { headers: { Authorization: `${token}` } });
// };
