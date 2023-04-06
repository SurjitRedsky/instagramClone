import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });

//login api request
export const logIn = (data, navigate) =>
  API.post("/accounts/login", {
    userName: data.userName,
    password: data.password,
  })
    .then((res) => {
      localStorage.setItem("loginUser", JSON.stringify(res?.data));
      console.log(res.data);
      navigate("/home");
    })
    .catch((err) => {
      console.log(err);
    });

//register
export const register = (data, navigate,setWarning) => {
  API.post("/accounts/register", {
    email: data.email,
    userName: data.userName,
    name: data.name,
    password: data.password,
  })
    .then((res) => {
      if(res.data.statusCode == 200){
        localStorage.setItem("SignUpUser", JSON.stringify(res?.data))
        console.log("signUpres=>", res.data)
        navigate("/accounts/emailssignup/addbirthdate")
      }else{
        setWarning(`${res.data.message}`)
      }
    })
    .catch((err) => console.log(err));
};

//send verification code
export const sendCodeAndAddBirthday = (data, navigate) => {
  API.put("/signUp/:data", {
    dateOfBirth: data.dateOfBirth,
  })
    .then((res) => {
      console.log("dtaa->", res.data);
    })
    .catch((err) => console.log(err));
};
