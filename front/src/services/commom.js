import axios from 'axios';

{/*const commom = axios.create({ baseURL: 'http://localhost:8080',
    headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token")
    }
});*/}
const commom = axios.create({
    baseURL: "http://back-endserver-production.up.railway.app"
  });
  commom.interceptors.request.use(async config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

export default commom;