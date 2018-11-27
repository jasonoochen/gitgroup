export class Project {
  id;
  name;
  owner_id;
  description;
  repositories;
  collaborators;

  constructor(id, name, owner_id, description, repositories, collaborators) {
    this.id = id;
    this.name = name;
    this.owner_id = owner_id;
    this.description = description;
    this.repositories = repositories;
    this.collaborators = collaborators;
  }
}
