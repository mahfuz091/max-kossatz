import axios from "axios";

const instance = axios.create({
  baseURL: "http://52.57.27.16:8000",
});

export default instance;
