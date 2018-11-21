import http from "./httpService";
import config from "../config.json";

export function login(email, password) {
  // return http.post(api, {
  //   email: email,
  //   password: password
  // });
}

export class Auth {
  authApi;

  constructor() {
    const url = config.backendApi;
    this.authApi = http.create({
      baseURL: url
    });
  }

  async githubAuth() {
    const auth = await this.authApi.get("/user/auth");
    window.location = auth.data;
  }
}
