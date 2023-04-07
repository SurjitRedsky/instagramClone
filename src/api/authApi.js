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
      // console.log(res.data);
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

        navigate("/accounts/emailssignup/addbirthdate",{state:{user:res.data.user}})
      }else{
        setWarning(`${res.data.message}`)
      }
    })
    .catch((err) => console.log(err));
};

//send verification code
export const sendCodeAndAddBirthday = (data, navigate) => {
  console.log("data->",data);
  API.post(`accounts/signUp/${data.id}`, {
    dateOfBirth: data.dateOfBirth,
    email:data.email
  })
    .then((res) => {
      console.log("dtaa->", res.data);
    })
    .catch((err) => console.log(err));
};
