import axios from "axios";

import { dateTo8DStr } from "../utils/helper";

//global
const api = axios.create({
  withCredentials: true,
});

export const getQuestionSetAPIMethod = () => {
  return api.get("/api/questionsets").then(checkStatus).then(fetchData);
};

export const createQuestionSetAPIMethod = (qs) => {
  return api.post("/api/questionsets", qs).then(checkStatus).then(checkStatus);
};

export const getLoggedDataSetAPIMethod = (date) => {
  const dateStr = dateTo8DStr(date);
  return api.get(`/api/logsets/${dateStr}`).then(checkStatus).then(fetchData);
};

export const createLoggedDataSetAPIMethod = (lds) => {
  return api.post("/api/logsets", lds).then(checkStatus).then(fetchData);
};

export const updateLoggedDataSetAPIMethod = (lds, date) => {
  const dateStr = dateTo8DStr(date);
  return api
    .put(`/api/logsets/${dateStr}`, lds)
    .then(checkStatus)
    .then(fetchData);
};

export const getUserAPIMethod = () => {
  return api.get("/api/users").then(checkStatus).then(fetchData);
};

export const updateUserAPIMethod = (user) => {
  return api.put("/api/users", user).then(checkStatus).then(fetchData);
};

export const registerAPIMethod = (user) => {
  return api.post("/api/register", user).then(checkStatus).then(fetchData);
};

export const loginAPIMethod = (user) => {
  return api.post("/api/login", user).then(checkStatus).then(fetchData);
};

export const logoutAPIMethod = () => {
  return api.post("/api/logout", {});
};

function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    const error = new Error(`${res.statusText}`);
    error.status = res.statusText;
    error.res = res;
    throw error;
  }
}

function fetchData(res) {
  return res.data;
}
