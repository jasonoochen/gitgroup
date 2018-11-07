import { Project } from "./projectModel";

export class User {
  id;
  name;
  projects;

  constructor(id, name, projects) {
    this.id = id;
    this.name = name;
    this.projects = [];
    for (let project of projects) {
      const projectObj = {
        id: project.id,
        name: project.name,
        owner_id: project.owner_id
      };
      this.projects.push(projectObj);
    }
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
}
