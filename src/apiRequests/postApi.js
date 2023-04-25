import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const getPosts = () => {
  return API.get(`/posts`);
};

//upload image on firebase
export const createUrl = (file) => {
  return API.post("/posts/image", {file}, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })    
}


// upload file 
export const uploadFile = (formData)=>{
// return API.post("/upload", {file}, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// })    


return API.post('/upload', formData, {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})

}





