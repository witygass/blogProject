import React from 'react';

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
        <div>
          <img src='./images/appPreview.jpg' style={styles.image}></img>
        </div>
      </div>
    );
  }
}
export default Home;

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 100
    // width: 500
  }
};
