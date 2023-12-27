import axios from "axios";
import env from "react-dotenv";


const msmartAxios = axios.create({
    baseURL: process.env.REACT_APP_MSMART
})

const mbotAxios = axios.create({
    baseURL: process.env.REACT_APP_MBOT
})

export {msmartAxios, mbotAxios}

export default axios.create({
    baseURL: process.env.REACT_APP_SERVER
});


