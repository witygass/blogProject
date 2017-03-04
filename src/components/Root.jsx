import React from 'react';
import FontAwesome from 'react-fontawesome';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import PostView from './PostView.jsx';
import Blog from './Blog.jsx';
import Projects from './Projects.jsx';
import About from './About.jsx';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      searchValue: '',
      selectedPost: '',
    };
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleSearchSubmit(searchValue) {
    this.setState({searchValue});
  }

  handlePageChange(page) {
    var selectedPost = arguments[1] || '';
    this.setState({selectedPost}, this.setState({page}));
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    //write a blog post about this stupid small-gong moment.. could not figure out why top margin was not showing..
    // it was there, but page was scrolled down, decided it's a good idea to scroll to top on page change
  }

  render() {
    var pageContent = {
      home: <Home handlePageChange={this.handlePageChange} childrenStyles={childrenStyles}/>,
      blog: <Blog handlePageChange={this.handlePageChange} childrenStyles={childrenStyles}/>,
      projects: <Projects handlePageChange={this.handlePageChange} childrenStyles={childrenStyles}/>,
      about: <About handlePageChange={this.handlePageChange} childrenStyles={childrenStyles}/>,
      postView: <PostView handlePageChange={this.handlePageChange} selectedPost={this.state.selectedPost} childrenStyles={childrenStyles}/>,
    };

    return (
        <div className={'applicationContainer'} style={styles.container}>
          <NavBar
            handlePageChange={this.handlePageChange}
            handleSearchSubmit={this.handleSearchSubmit}
            />
          <div className={'contentContainer'} style={styles.contentContainer}>
            {pageContent[this.state.page]}
          </div>
        </div>
    );
  }
}

export default Root;

const styles = {
  container: {
  },
  contentContainer: {
    marginTop: '3em',
    minHeight: 'calc(100% - 3em)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: 'whitesmoke',
  },
};

const childrenStyles = {
  boxContainer: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: '1px solid lightgrey',
    // borderRadius: '4px',
    width: '90%',
    marginTop: '1em',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 6px 0 rgba(0, 0, 0, 0.13)',
  },
};
