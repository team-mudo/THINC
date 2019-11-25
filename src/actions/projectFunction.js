import axios from "axios";
import { ROOT_URL, CLASS } from "../actions";

export const GETMYCLASS = "getmyclass";
export const MAKECLASS = "makeclass";
export const DELETECLASS = "deleteclass";

const URL = `${ROOT_URL}/${CLASS}`;

// 수업 정보 GET
export function getMyClass(token) {
  const request = axios
    .post(`${URL}/myClass`, { token })
    .then(response => {
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: GETMYCLASS,
    payload: request
  };
}

// 수업 생성
export function makeClass(info) {
  const request = axios
    .post(`${URL}/create`, info)
    .then(response => {
      return response.data;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: MAKECLASS,
    payload: request
  };
}

// 수업 삭제
export function delClass(token, cid, data) {
  const request = axios
    .post(`${URL}/remove`, { token, cid })
    .then(response => {
      return response.data.result;
    })
    .catch(response => {
      console.log(response);
    });
  return {
    type: DELETECLASS,
    payload: data
  };
}