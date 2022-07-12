import axios from "axios";

export const api = axios.create({
  baseURL: "https://technical-test-aldenivan.herokuapp.com/api/users",
});
