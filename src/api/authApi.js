import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });

//login api request
export const logIn = (data, navigate, setWarning) =>
  API.post("/accounts/login", {
    userName: data.userName,
    password: data.password,
  })
    .then((res) => {
      if (res.data.statusCode == 200) {

        localStorage.setItem("loginUser", JSON.stringify(res?.data));

        navigate("/homePage");
      } else if (res.data.statusCode == 404) {
        console.log();
        setWarning("Sorry, your password was incorrect. Please double-check your password.")
      } else {
        console.log(res.data);
      }


    })
    .catch((err) => {
      console.log(err);
    });

//register
export const register = (data, navigate, setWarning) => {
  API.post("/accounts/register", {
    email: data.email,
    userName: data.userName,
    name: data.name,
    password: data.password,
  })
    .then((res) => {
      if (res.data.statusCode === 200) {
        console.log("res", res.data.data.user);
        navigate("/accounts/emailsignup/addbirthdate", { state: { user: res.data.data.user } })
      } else if (res.data.statusCode === 403) {
        setWarning(`${res.data.message}`)
      } else {
        console.log("nill");
      }
    })
    .catch((err) => console.log(err));
};

//send verification code
export const sendCodeAndAddBirthday = (data, navigate) => {
  console.log("data from navigation", data);
  API.post(`accounts/signUp/${data.id}`, {
    dateOfBirth: data.dateOfBirth,
    userName: data.userName
  })
    .then((res) => {
      console.log("dtaa->", res);
      if (res.data.statusCode === 200) {
        localStorage.setItem("SignUpUser", JSON.stringify(res?.data))
        navigate("/accounts/emailsignup/codeveified")
      } else if (res.data.statusCode === 500) {
        alert("Server Error")
      }
    })
    .catch((err) => { console.log(err) });
};


export const confirVerificaionCode = (data, navigate) => {
  console.log(data);
  API.put(`/verified/${data.id}`, data).then((res) => {
    console.log(res.data);
  }).catch((err) => console.log(err))
}