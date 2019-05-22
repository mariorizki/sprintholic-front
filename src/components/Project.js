import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #eee;
  width: 500px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 40px;
  cursor: pointer;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.9);
  }
`;

const ProjectName = styled.p`
  font-size: 20px;
  margin-left: 20px;
  font-weight: bold;
`;

const ProjectDetails = styled.p`
  margin-left: 10px;
  font-size: 20px;
  padding: 10px;
  margin-top: -15px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 20px 0;
  padding: 15px;
  background: #6dcc84;
  border: none;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  width: 199px;
  transition: 0.5s;
  color: white;
  cursor: pointer;

  &:hover {
    background: hsla(145, 50%, 72%, 1);
  }
`;

class Project extends Component {
  state = { showDetails: false };

  toggleDetailsHandler = () => {
    const doesShow = this.state.showDetails;
    this.setState({ showDetails: !doesShow });
  };

  render() {
    let details = null;

    if (this.state.showDetails) {
      details = (
        <div>
          <ProjectDetails>
            Description : {this.props.project.description}
          </ProjectDetails>
          <ProjectDetails>
            Team:{' '}
            {this.props.project.teams.map((team, index) => {
              return index === this.props.project.teams.length - 1
                ? team + '.'
                : team + ', ';
            })}
          </ProjectDetails>
          <ProjectDetails>
            Start Date: {this.props.project.startDate}
          </ProjectDetails>
          <ProjectDetails>
            End Date: {this.props.project.endDate}
          </ProjectDetails>
          <ProjectDetails>
            Project Owner:{' '}
            {this.props.project.projectOwner.map((p, index) => {
              return index === this.props.project.projectOwner.length - 1
                ? p + '.'
                : p + ', ';
            })}
          </ProjectDetails>
          <ProjectDetails>
            Stakeholder:{' '}
            {this.props.project.stakeholder.map((p, index) => {
              return index === this.props.project.stakeholder.length - 1
                ? p + '.'
                : p + ', ';
            })}
          </ProjectDetails>
          <ButtonDiv>
            <Button>Sprint List</Button>
          </ButtonDiv>
        </div>
      );
    }

    return (
      <StyledDiv onClick={this.toggleDetailsHandler}>
        <ProjectName>{this.props.project.name}</ProjectName>
        {details}
      </StyledDiv>
    );
  }
}

export default Project;
