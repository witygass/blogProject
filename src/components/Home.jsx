import React from 'react';
import HeaderBox from './HeaderBox.jsx';
import TagBox from './TagBox.jsx';
import PostEntry from './PostEntry.jsx';
import AboutBox from './AboutBox.jsx';
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
          <TagBox styles={childrenBoxStyles} />
        </div>
        <div style={styles.middleColumn}>
          <HeaderBox text={'Recent Posts'} />
          {
            myPosts.map((post) =>
              <PostEntry key={post.id} post={post} styles={childrenBoxStyles} />
            )
          }
        </div>
        <div style={styles.rightColumn}>
          <HeaderBox text={'About'}/>
          <AboutBox styles={childrenBoxStyles} />
        </div>
      </div>
    );
  }
}

export default Home;

const styles = {
  container: {
    display: 'inline-flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minHeight: '100%',
    width: '100%',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '20%',
    minWidth: '15em',
    margin: '0em 1em',
  },
  middleColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '55%',
    minWidth: '30em',
    margin: '0em 1em',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '25%',
    margin: '0em 1em',
  },
};

const childrenBoxStyles = {
  boxContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: '1px solid lightgrey',
    borderRadius: '4px',
    width: '85%',
    minHeight: '11em',
    marginBottom: '1.5em',
    padding: '1em',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19)',
  },
  backgroundDiv: {
    height: '5em',
    backgoundImage: './',
  },
  details: {
    flexShrink: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  summary: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};
