import axios from "axios";
import { API_SERVER_ADDRESS } from "./env";

const apiAddress = API_SERVER_ADDRESS + "Course/";
export function getAllProducts() {
  return axios.get(apiAddress);
}
export function getAllTeacher() {
  return axios.get(apiAddress + "teachers");
}
export function getLimitTeachers() {
  return axios.get(apiAddress + "teachers" + "?items_limit=8");
}

export function getProducts() {
  return axios.get(apiAddress + "?items_limit=10");
}

export function getProductById(id) {
  return axios.get(apiAddress + id + "?suggest_limit=1");
}
