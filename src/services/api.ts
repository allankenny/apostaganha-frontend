import axios from "axios";

export const Api = axios.create({
  baseURL: "https://apostaganha-backend.herokuapp.com",
})