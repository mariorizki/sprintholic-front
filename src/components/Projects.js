import React, { Component } from 'react';

class Projects extends Component {
  state = {
    projects: [
      {
        name: 'Sprintholic',
        description: 'Sprintholic Web Admin',
        teams: [],
        startDate: '',
        endDate: '',
        projectOwner: [],
        stakeholder: [],
        sprintMaster: ''
      }
    ]
  };
  render() {
    return <div>{this.state.projects[0].name}</div>;
  }
}

export default Projects;
