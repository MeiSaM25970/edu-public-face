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
export function getPricing() {
  return axios.get(API_SERVER_ADDRESS + "pricing");
}
// export function getTeacher(id) {
//   return axios.get(apiAddress + "teachers/" + id);
// }
export function getTeacher(id) {
  return Promise.resolve({ status: 200, data: data });
}
const data = {
  teacher: {
    _id: "5f34ed7a39f4a81f6cf2f36a",
    firstName: "طاها",
    lastName: "نجفی",
    description: "1234",
    imageAddress:
      "uploads/users/0.68597865567708535edb8dbdf1b4a41a306aac19download.png",
  },
  courses: [
    {
      _id: "5f3f89b5b6b4c13f3c623186",
      title: "test akhar",
      imageAddress:
        "uploads/courses/0.069503264677325045edb8dbdf1b4a41a306aac19download.png",
      price: 0,
      isExpired: false,
      isOffline: true,
      schedules: [],
    },
    {
      _id: "5f3f89b5b6b4c13f3c623187",
      title: "test akhar 2",
      imageAddress:
        "uploads/courses/0.069503264677325045edb8dbdf1b4a41a306aac19download.png",
      price: 0,
      isExpired: false,
      isOffline: true,
      schedules: [],
    },
    {
      _id: "5f3e8ce47b9f003dc4c12b4e",
      title: "test 50",
      imageAddress:
        "uploads/courses/0.0305016667651514255edb8dbdf1b4a41a306aac19download.png",
      price: 1500000,
      isExpired: true,
      isOffline: false,
      schedules: [
        {
          done: true,
          canStart: false,
          _id: "5f3f6c66b6b4c13f3c6230fd",
          date: "2020/08/21",
          time: "12:00 pm",
          period: "1.5",
          scheduleSkyId: 444410,
          courseId: "5f3e8ce47b9f003dc4c12b4e",
        },
      ],
    },
    {
      _id: "5f3f6b58b6b4c13f3c6230ed",
      title: "test 60",
      imageAddress:
        "uploads/courses/0.313747736938815755edb8dbdf1b4a41a306aac19download.png",
      price: 0,
      isExpired: true,
      isOffline: false,
      schedules: [
        {
          done: true,
          canStart: false,
          _id: "5f3f6b6eb6b4c13f3c6230f2",
          date: "2020/08/21",
          time: "07:00 pm",
          period: "1.5",
          scheduleSkyId: 444857,
          courseId: "5f3f6b58b6b4c13f3c6230ed",
        },
      ],
    },
    {
      _id: "5f3f89b5b6b4c13f3c623188",
      title: "test akhar3",
      imageAddress:
        "uploads/courses/0.069503264677325045edb8dbdf1b4a41a306aac19download.png",
      price: 0,
      isExpired: false,
      isOffline: false,
      schedules: [],
    },
  ],
};
