import axios from "axios";
const apiAddress = "http://api.learningpage.ir/payment/checkout-course/";
export function getCheckParticipant(id, token) {
  return axios.get(apiAddress + id, token);
}
