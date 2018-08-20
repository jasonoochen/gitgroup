import http from "./httpService";
import { gitgroupBackendApi } from "../config.json";

const api = gitgroupBackendApi + "/api/users";

export function register(user) {
  return http.post(api, {
    email: user.email,
    name: user.name,
    password: user.password
  });
}
