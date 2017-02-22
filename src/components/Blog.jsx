import React from 'react';
import HeaderBox from './HeaderBox.jsx';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div style={styles.blogContainer}>
        <HeaderBox text={'hello this is this blog page'} />
      </div>
    );
  }
}

const styles = {
  blogContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
};

export default Blog;
