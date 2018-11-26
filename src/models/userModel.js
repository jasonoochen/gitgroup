import { Project } from "./projectModel";

export class User {
  id;
  name;
  projects;
  repositories;

  constructor(id, name, projects, repositories) {
    this.id = id;
    this.name = name;
    this.projects = [];
    this.repositories = [];
    for (let project of projects) {
      const projectObj = {
        id: project.id,
        name: project.name,
        owner_id: project.owner_id
      };
      this.projects.push(projectObj);
    }
    for (let repository of repositories) {
      const repositoryObj = {
        repository_id: repository.repository_id,
        name: repository.name,
        owner_id: repository.owner_id,
        description: repository.description,
        _url: repository._url
      };
      this.repositories.push(repositoryObj);
    }
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
}
