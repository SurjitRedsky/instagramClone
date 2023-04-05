import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });
export const logIn = (data, navigate) =>
  API.post("/accounts/login", {
    userName: data.userName,
    password: data.password,
  })
    .then((res) => {
      // localStorage.setItem("loginUser", JSON.stringify(res?.data));

      console.log("res->", res.data);
      navigate("/home")
    })
    .catch((err) => {
      console.log(err);
    });
