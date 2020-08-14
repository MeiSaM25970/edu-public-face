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
  return axios.get(apiAddress + "?items_limit=12");
}

export function getProductById(id) {
  return axios.get(apiAddress + id + "?suggest_limit=9");
}
export function getCourses(page, count) {
  return axios.get(apiAddress + "?page=" + page + "&pageSize=" + count);
}

export function getPolicies() {
  return axios.get("/assets/rules.txt");
}

export function getHelp() {
  return axios.get("/assets/help.txt");
}
