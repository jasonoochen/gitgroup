export class User {
  id;
  name;

  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
}
