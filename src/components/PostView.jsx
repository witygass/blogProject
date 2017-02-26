import React from 'react';

class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log('postview opening');
    return (
      <div className={'postViewContainer'} style={styles.container}>
        <div style={styles.leftColumn}>
        </div>
        <div style={styles.middleColumn}>
          {this.props.selectedPost.title}
        </div>
        <div style={styles.rightColumn}>
        </div>
      </div>
    );
  }
}

export default PostView;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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

const childrenBoxStyles = {
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
