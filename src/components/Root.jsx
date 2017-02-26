import React from 'react';
import FontAwesome from 'react-fontawesome';
import NavBar from './NavBar.jsx';
import Home from './Home.jsx';
import PostView from './PostView.jsx';
import Blog from './Blog.jsx';
import Projects from './Projects.jsx';

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
  }

  render() {
    var pageContent = {
      home: <Home handlePageChange={this.handlePageChange}/>,
      blog: <Blog handlePageChange={this.handlePageChange}/>,
      projects: <Projects handlePageChange={this.handlePageChange}/>,
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
    minHeight: '100%',  //this caused the margin top to break
    width: '100%',
    flex: '1 auto',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'whitesmoke',
  },
};
