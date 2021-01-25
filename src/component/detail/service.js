import axios from "axios";
import { API_SERVER_ADDRESS } from "../../env";
const paymentLink = API_SERVER_ADDRESS + "payment/checkout/";
const checkParticipant = API_SERVER_ADDRESS + "course/check-participant/";
export function getCheckParticipant(id, token) {
  return axios.get(checkParticipant + id, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}
export function getPaymentLink(type, id, token) {
  //type only course or exam
  return axios.post(
    paymentLink + `?${type}Id=` + id,
    {},
    {
      headers: { Authorization: "Bearer " + token },
    }
  );
}
