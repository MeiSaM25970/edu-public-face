import axios from "axios";
import { API_SERVER_ADDRESS } from "./env";

const apiAddress = API_SERVER_ADDRESS + "Course/";
export function getAllProducts(type) {
  return axios.get(API_SERVER_ADDRESS + "Course" + type);
}
export function getAllTeacher() {
  return axios.get(apiAddress + "teachers");
}
export function getLimitTeachers() {
  return axios.get(apiAddress + "teachers?items_limit=8");
}

export function getProducts(type) {
  return axios.get(apiAddress + "?items_limit=12" + type);
}

export function getProductById(id) {
  return axios.get(apiAddress + id + "?suggest_limit=9");
}
export function getCourses(page, count, type) {
  return axios.get(apiAddress + "?page=" + page + "&pageSize=" + count + type);
}

export function getPolicies() {
  return axios.get("/assets/rules.txt");
}

export function getHelp() {
  return axios.get("/assets/help.txt");
}
export function getPricing() {
  return axios.get(API_SERVER_ADDRESS + "pricing");
}
export function getTeacher(id) {
  return axios.get(apiAddress + "teacher-details/" + id);
}
export function getNotification() {
  return axios.get(API_SERVER_ADDRESS + "notification");
}
export function uploadResume(data) {
  return axios.post(API_SERVER_ADDRESS + "job-request/upload-resume", data);
}
export function addITC(data) {
  return axios.post(API_SERVER_ADDRESS + "job-request/add", data);
}
export function fetchExam() {
  return axios.get(API_SERVER_ADDRESS + "exam");
}
export function fetchExamById(id) {
  return axios.get(API_SERVER_ADDRESS + "exam/info/" + id);
}
export function participantExam(examId, token) {
  return axios.get(API_SERVER_ADDRESS + "exam/check-participant/" + examId, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
