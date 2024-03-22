import axios from "axios";


const baseURL = `http://${import.meta.env.VITE_SERVER_IP}:${import.meta.env.VITE_SERVER_PORT}/worksync`

console.log(baseURL);

const axiosInstance = axios.create({
    baseURL
})

export default axiosInstance;