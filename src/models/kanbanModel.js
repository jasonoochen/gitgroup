//----------------------------------------------------------------------------
// Kanban Class
//----------------------------------------------------------------------------

export class Kanban {
  id;
  name;
  state;
  due;
  projectId;
  columns;
  cards;

  constructor(id, name, state, due, projectId, columns, cards) {
    this.id = id;
    this.name = name;
    if (state && state !== "open" && state !== "close")
      throw new RangeError("The state is neither 'close' nor 'open'");
    this.state = state;
    this.due = due;
    this.projectId = projectId;

    this.columns = [];
    for (let column of columns) {
      this.columns.push(column);
    }

    this.cards = [];
    for (let card of cards) {
      this.cards.push(card);
    }
  }
}
