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
      home: <Home handlePageChange={this.handlePageChange}/>,
      blog: <Blog handlePageChange={this.handlePageChange}/>,
      projects: <Projects handlePageChange={this.handlePageChange}/>,
      about: <About handlePageChange={this.handlePageChange}/>,
      postView: <PostView selectedPost={this.state.selectedPost}/>,
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
    minHeight: 'calc(100% - 10em)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
};
