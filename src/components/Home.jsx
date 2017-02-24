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
      selectedTags: [],
      filteredPosts: myPosts,
    };
    this.toggleTagSelection = this.toggleTagSelection.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
  }

  collectTags() {
    var tagList = {};
    for (let i = 0; i < myPosts.length; i++) {
      for (let j = 0; j < myPosts[i]['tags'].length; j++) {
        tagList[myPosts[i]['tags'][j]] = tagList[myPosts[i]['tags'][j]] + 1 || 1;
      }
    }
    return tagList;
  }

  toggleTagSelection(tagName) {
    var selectedTags = Array.from(this.state.selectedTags);
    var toggledTagIndex = selectedTags.indexOf(tagName);
    if (toggledTagIndex === -1) {
      selectedTags.push(tagName);
    } else {
      selectedTags.splice(toggledTagIndex, toggledTagIndex + 1);
    }
    this.setState({selectedTags}, this.filterPosts);
  }

  filterPosts() {
    //still not quite working... why does post 5 show.. does not contain 'sad'
    var filteredPosts = Array.from(myPosts);
    var selectedTags = this.state.selectedTags;
    if (this.state.selectedTags.length !== 0) {
      for (let i = filteredPosts.length - 1; i >= 0; i--) {
        for (let j = 0; j < selectedTags.length; j++) {
          if (filteredPosts[i]['tags'].indexOf(selectedTags[j]) === -1) {
            // console.log(filteredPosts[i]);
            console.log(i, filteredPosts.splice(i, 1));
            break;
          }
        }
      }
    }
    // console.log(filteredPosts);
    this.setState({filteredPosts});
  }

  render() {
    return (
      <div className={'homePageContainer'} style={styles.container}>
        <div style={styles.leftColumn}>
          <HeaderBox text={'Tags'} />
          <TagBox styles={childrenBoxStyles} tags={this.collectTags()} toggleTagSelection={this.toggleTagSelection} />
        </div>
        <div style={styles.middleColumn}>
          <HeaderBox text={'Recent Posts'} />
          {
            this.state.filteredPosts.map((post) =>
              <PostEntry key={post.id} post={post} styles={childrenBoxStyles} />
            )
          }
        </div>
        <div style={styles.rightColumn}>
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
    justifyContent: 'space-around',
    alignItems: 'stretch',
    minHeight: '100%',
    width: '100%',
    paddingBottom: '2em',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '20%',
    minWidth: '15em',
    // marginLeft: '1em',
  },
  middleColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '55%',
    minWidth: '30em',
    // marginLeft: '1em',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    minWidth: '20em',
    maxWidth: '25em',
    marginRight: '2em',
  },
};

const childrenBoxStyles = {
  boxContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: '1px solid lightgrey',
    // borderRadius: '4px',
    width: '90%',
    minHeight: '10em',
    marginTop: '1em',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19)',
  },
};
