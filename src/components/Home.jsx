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
    var filteredPosts = Array.from(myPosts);
    var selectedTags = this.state.selectedTags;
    if (this.state.selectedTags.length !== 0) {
      for (let i = filteredPosts.length - 1; i >= 0; i--) {
        for (let j = 0; j < selectedTags.length; j++) {
          if (filteredPosts[i]['tags'].indexOf(selectedTags[j]) === -1) {
            filteredPosts.splice(i, 1);
            break;
          }
        }
      }
    }
    this.setState({filteredPosts});
  }

  render() {
    return (
      <div className={'homePageContainer'} style={styles.container}>
        <div style={styles.leftColumn}>
          <HeaderBox text={'Tags'} />
          <TagBox styles={this.props.childrenStyles} tags={this.collectTags()} toggleTagSelection={this.toggleTagSelection} />
        </div>
        <div style={styles.middleColumn}>
          <HeaderBox text={'Recent Posts'} />
          {
            this.state.filteredPosts.map((post) =>
              <PostEntry key={post.id} post={post} styles={this.props.childrenStyles} handlePageChange={this.props.handlePageChange.bind(null, 'postView', post)}/>
            )
          }
        </div>
        <div style={styles.rightColumn}>
          <AboutBox styles={this.props.childrenStyles} />
        </div>
      </div>
    );
  }
}

export default Home;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    // minHeight: '100%',
    width: '100%',
    paddingBottom: '2em',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '18em',
    minWidth: '15em',
  },
  middleColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '55%',
    minWidth: '33em',
    maxWidth: '40em',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '18em',
    // minWidth: '18em',
    marginRight: '2em',
  },
};
