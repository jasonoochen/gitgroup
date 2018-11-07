export class Project {
  id;
  name;
  owner_id;
  repositories;
  collaborators;

  constructor(id, name, owner_id, repositories, collaborators) {
    this.id = id;
    this.name = name;
    this.owner_id = owner_id;
    this.repositories = repositories;
    this.collaborators = collaborators;
  }
}
