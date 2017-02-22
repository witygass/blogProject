import React from 'react';
import HeaderBox from './HeaderBox.jsx';
import PostEntry from './PostEntry.jsx';
import myPosts from '../dummyData.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={'homePageContainer'} style={styles.container}>
        <div style={styles.leftColumn}>
          <HeaderBox text={'Tags'} />
        </div>
        <div style={styles.middleColumn}>
          <HeaderBox text={'Recent Posts'} />
          {
            myPosts.map((post) =>
              <PostEntry key={post.id} post={post} />
            )
          }
        </div>
        <div style={styles.rightColumn}>
          <HeaderBox text={'About'}/>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    minHeight: '100%',
    width: '100%',
  },
  leftColumn: {
    // flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    // borderRight: '1px solid black',
    width: '19%',
    marginLeft: '1%',
  },
  middleColumn: {
    // flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderRight: '1px solid black',
    width: '55%',
  },
  rightColumn: {
    // flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '24%',
  },
};

export default Home;
