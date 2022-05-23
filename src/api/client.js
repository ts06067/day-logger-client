import axios from "axios";

//global
const api = axios.create({
  withCredentials: true,
});

export const getQuestionSetAPIMethod = () => {
  return api
    .get("/api/questionsets")
    .then(checkStatus)
    .then((res) => res.data);
};

export const createQuestionSetAPIMethod = (qs) => {
  return api.post("/api/questionsets", qs).then(checkStatus);
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
