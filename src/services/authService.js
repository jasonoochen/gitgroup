import http from "./httpService";
import { gitgroupBackendApi } from "../config.json";

const api = gitgroupBackendApi + "/api/auth";

export function login(email, password) {
  return http.post(api, {
    email: email,
    password: password
  });
}
