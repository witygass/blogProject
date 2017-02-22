import React from 'react';
import HeaderBox from './HeaderBox.jsx';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={styles.projectsContainer}>
        <HeaderBox text={'hello this is this projects page'} />
      </div>
    );
  }
}

const styles = {
  projectsContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

export default Projects;
