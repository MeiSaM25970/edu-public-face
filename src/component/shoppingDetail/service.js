import axios from "axios";
import { API_SERVER_ADDRESS } from "../../env";
const paymentLink = API_SERVER_ADDRESS + "payment/checkout-course/";
const checkParticipant = API_SERVER_ADDRESS + "course/check-participant/";
export function getCheckParticipant(id, token) {
  return axios.get(checkParticipant + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
export function getPaymentLink(id, token) {
  return axios.post(
    paymentLink + id,
    {},
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
}
