import React, { Component } from 'react';
import styled from 'styled-components';
import Project from './Project';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SearchBar = styled.input`
  border-radius: 10px;
  box-sizing: border-box;
  display: block;
  font-size: 20px;
  padding: 10px;

  outline: 0;
  border-bottom: 1px solid #fff;
`;

class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: 'Sprintholic',
        description: 'Sprintholic Web Admin',
        teams: [
          'Dytha Noviyanti Kusumadewi Putri',
          'Iswahyudi',
          'Kus Pramono',
          'Mario Rizki'
        ],
        startDate: '5-7-2019',
        endDate: '5-31-2019',
        projectOwner: ['Kus Pramono', 'Mochamad Zikri Salam Adias'],
        stakeholder: ['Mochamad Zikri Salam Adias'],
        sprintMaster: 'Mario Rizki'
      },
      {
        id: 2,
        name: 'Eventholic',
        description: 'Eventholic Mobile App',
        teams: [
          'Dytha Noviyanti Kusumadewi Putri',
          'Iswahyudi',
          'Kus Pramono',
          'Mario Rizki'
        ],
        startDate: '5-7-2019',
        endDate: '5-31-2019',
        projectOwner: ['Kus Pramono', 'Mochamad Zikri Salam Adias'],
        stakeholder: ['Mochamad Zikri Salam Adias'],
        sprintMaster: 'Mario Rizki'
      },
      {
        id: 3,
        name: 'Kerjaholic',
        description: 'Kerjaholic mobile app',
        teams: [
          'Dytha Noviyanti Kusumadewi Putri',
          'Iswahyudi',
          'Kus Pramono',
          'Mario Rizki'
        ],
        startDate: '5-7-2019',
        endDate: '5-31-2019',
        projectOwner: ['Kus Pramono', 'Mochamad Zikri Salam Adias'],
        stakeholder: ['Mochamad Zikri Salam Adias'],
        sprintMaster: 'Mario Rizki'
      }
    ]
  };
  render() {
    return (
      <Container>
        <h2>Project List</h2>
        <SearchBar type="text" placeholder="search project" />
        {this.state.projects.map(project => {
          return <Project project={project} key={project.id} />;
        })}
      </Container>
    );
  }
}

export default Projects;
