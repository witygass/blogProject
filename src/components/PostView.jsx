import React from 'react';
import { Parallax } from 'react-parallax';

class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={'postViewContainer'}>
        <Parallax bgImage={this.props.selectedPost.image} bgWidth={'100%'} strength={200}>
          <br/>
          <div style={styles.container}>
            <div style={styles.leftColumn}>
            </div>
            <div style={styles.middleColumn}>
              <div style={styles.postBody}>
                {this.props.selectedPost.body}
              </div>
            </div>
            <div style={styles.rightColumn}>
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}

// <div className={'postViewContainer'} style={styles.container}>
// </div>

export default PostView;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '100%',
    width: '100%',
    paddingBottom: '2em',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flex: '1',
  },
  middleColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flex: '3',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: '1',
  },
  postBody: {
    backgroundColor: 'rgba(255,255,255,.9) ',
    flex: '1',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 6px 0 rgba(0, 0, 0, 0.13)',
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
