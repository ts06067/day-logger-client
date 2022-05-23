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
  return api.get(`/api/logsets/${date}`).then(fetchData);
};

export const createLoggedDataSetAPIMethod = (lds) => {
  return api.post("/api/logsets", lds).then(checkStatus).then(fetchData);
};

export const updateLoggedDataSetAPIMethod = (lds, date) => {
  const dateStr = dateTo8DStr(date);

  return api.put("/");
};

export const loginAPIMethod = () => {
  return api.post("/api/login", {
    email: "ts06067@daum.net",
    password: "123456",
  });
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
