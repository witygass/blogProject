import React from 'react';
import ResponseBox from './ResponseBox.jsx';
// import { Parallax, Background} from 'react-parallax';

class PostView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={'postViewContainer'}>
        <div style={{display: 'flex', flexDirection: 'column', height: '35%', justifyContent: 'center', overflow: 'hidden'}}>
          <img src={this.props.selectedPost.image} style={{width: '100%'}}/>
        </div>
        <div style={styles.container}>
          <div style={styles.leftColumn}>
          </div>
          <div style={styles.middleColumn}>
            <div style={styles.postBody}>
              {this.props.selectedPost.body}
              <ResponseBox />
            </div>
          </div>
          <div style={styles.rightColumn}>
          </div>
        </div>
      </div>
    );
  }
}


export default PostView;

const styles = {
  container: {
    // marginTop: '1em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: '65%',
    width: '100%',
    backgroundColor: 'white',
    // paddingBottom: '2em',
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
    flex: '2',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: '1',
  },
  postBody: {
    marginTop: '5px',
    backgroundColor: 'white',
    flex: '1',
    lineHeight: '1.75em',
    // boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 4px 6px 0 rgba(0, 0, 0, 0.13)',
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
