import React from 'react';
import HeaderBox from './HeaderBox.jsx';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={styles.projectsContainer}>
        <HeaderBox text={'hello this is this about page'} />
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

export default About;
