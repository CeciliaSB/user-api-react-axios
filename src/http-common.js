import axios from "axios";

export default axios.create({
  baseURL: "https://randomuser.me/api/?results=15",
  headers: {
    "Content-type": "application/json"
  }
});