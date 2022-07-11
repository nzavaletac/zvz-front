import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const postMessage = async (objMessage) => {
  const result = await axios.post(
    `${URL_BACKEND}/messages`,
    JSON.stringify(objMessage),
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  return result.data;
};
