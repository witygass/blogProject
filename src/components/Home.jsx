import React from 'react';
import NavBar from './NavBar.jsx';
import FontAwesome from 'react-fontawesome';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <NavBar/>
        <div style={styles.contentContainer}>
        </div>
      </div>
    );
  }
}

export default Home;

const styles = {
  container: {
    backgroundColor: 'cadetblue'
  },
  contentContainer: {
    height: '100%',
    flex: 1,
    // display: 'inline-flex',
    backgroundColor: 'mistyrose',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imgDiv: {
    height: 100,
    width: 400
  },
  image: {
    height: 100,
    // width: 500
  }
};
