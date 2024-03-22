import axios from "axios";


const baseURL = `${import.meta.env.VITE_SERVER_IP}:${import.meta.env.VITE_SERVER_IP}/worksync`

const axiosInstance = axios.create({
    baseURL
})

export default axiosInstance;