import http from "./httpService";
import { backendApi } from "../config.json";

export class IssueService {
  issueHttp;

  constructor() {
    this.issueHttp = http.create({
      baseURL: backendApi + "/issues",
      headers: {
        Authorization: localStorage.getItem("access_token")
      }
    });
  }

  async getAllIssues(username, projectId) {
    return await this.issueHttp.get(
      "/project_issues/" + username + "/" + projectId
    );
  }
}
