import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { IssueService } from "../services/issueService";
import Column from "./column";

class Kanban extends Component {
  state = {
    toDo: []
  };

  componentDidMount = async () => {};
  componentWillReceiveProps = async nextProps => {
    if (JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) {
      const issueService = new IssueService();
      const projectId = nextProps.match.params.project_id;
      if (nextProps.user) {
        const username = nextProps.user.name;
        let issues = await issueService.getAllIssues(username, projectId);
        let toDo = this.state.toDo;
        toDo.push(...issues.data);
        this.setState({ toDo });
      }
    }
  };

  onDragEnd = result => {
    //TODO: reorder column
  };

  render() {
    let { toDo } = this.state;
    const todoCol = {
      id: "todo",
      title: "To Do"
    };
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Column column={todoCol} tasks={toDo} />
      </DragDropContext>
    );
  }
}

export default Kanban;
