import axios from "axios";
const paymentLink = "http://api.learningpage.ir/payment/checkout-course/";
const checkParticipant =
  "http://api.learningpage.ircheck-participant/course/check-participant/";
export function getCheckParticipant(id, token) {
  return axios.get(checkParticipant + id, token);
}
export function getPaymentLink(id, token) {
  return axios.get(paymentLink + id, token);
}
