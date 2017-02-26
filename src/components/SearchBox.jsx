import React from 'react';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.props.handleSearchSubmit(this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    event.preventDefault();
  }

  render() {
    return (
      <form style={styles.searchForm} onSubmit={this.handleSubmit} action={void(0)}>
        <input
          style={styles.searchInput}
          type="search"
          placeholder="search..."
          value={this.state.value}
          onChange={this.handleChange}
          />
      </form>
    );
  }
}

const styles = {
  searchForm: {
    width: '16em',
    marginBottom: '0',
  },
  searchInput: {
    width: '100%',
    padding: '8px 15px',
    boxSizing: 'border-box',
    border: '1px solid silver',
    borderRadius: '4px',
    // backgroundColor: '#333333',
    backgroundColor: 'whitesmoke',
    color: 'white',
    fontSize: '15px',
  },
};

export default SearchBox;
