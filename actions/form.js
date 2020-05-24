import fetch from "isomorphic-fetch";
import { API } from "../config";

export const submitFormEndPoint = (data) => {
    return fetch(`${API}/contact`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(resp => {return resp.json()})
      .catch(err => console.log(err));
};