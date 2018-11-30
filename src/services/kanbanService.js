import http from "./httpService";
import { backendApi } from "../config.json";

export class KanbanService {
  kanbanHttp;

  constructor() {
    this.kanbanHttp = http.create({
      baseURL: backendApi + "/kanban",
      headers: {
        Authorization: localStorage.getItem("access_token")
      }
    });
  }

  async createNewKanban(kanbanData) {
    await this.kanbanHttp.post("/new", {
      name: kanbanData.name,
      due: kanbanData.due,
      projectId: kanbanData.projectId
    });
  }

  async getKanbansOfProject(projectId) {
    return await this.kanbanHttp.get(`/${projectId}`);
  }

  async getKanbanById(kanbanId) {
    return await this.kanbanHttp.get(`/kanban_id/${kanbanId}`);
  }
}
