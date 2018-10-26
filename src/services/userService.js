import http from "./httpService";
import { backendApi } from "../config.json";
import { User } from "./../models/userModel";

export class UserService {
  userHttp;
  name;
  id;

  constructor() {
    this.userHttp = http.create({
      baseURL: backendApi
    });
  }

  async getUser() {
    const response = await this.userHttp.get("/user");
    const data = response.data;
    const user = new User(data.id, data.name);
    return user;
  }
}

// export function register(user) {
//   return http.post(api, {
//     email: user.email,
//     name: user.name,
//     password: user.password
//   });
// }
