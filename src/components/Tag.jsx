import React from 'react';

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
    this.toggleTag = this.toggleTag.bind(this);
  }

  toggleTag() {
    this.props.toggleTagSelection(this.props.tagKey); //toggle from parent; add to object
    var toggled = !this.state.toggled;
    this.setState({toggled});
  }

  render() {
    var tagContainerStyle = this.state.toggled ? styles.contentContainerToggled : styles.contentContainer;
    return (
      <div className={'tag'}>
        <div style={tagContainerStyle} onClick={this.toggleTag}>
          {this.props.tagKey} ({this.props.value })
        </div>
      </div>
    );
  }
}

export default Tag;

const styles = {
  contentContainer: {
    fontSize: '14px',
    margin: '2px 3px',
    padding: '3px 6px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'burlywood',
    borderRadius: '3px',
    color: 'white',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.15), 0 3px 5px 0 rgba(0, 0, 0, 0.13)',
  },
  contentContainerToggled: {
    fontSize: '14px',
    margin: '2px 3px',
    padding: '3px 6px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: 'rosybrown',
    borderRadius: '2px',
    color: 'white',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 3px 5px 0 rgba(0, 0, 0, 0.13)',
  },
};
