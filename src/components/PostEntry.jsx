import React from 'react';
import Tag from './Tag.jsx';
import moment from 'moment';

var height = '10px';

var PostEntry = (props) => {
  return (
    <div className={'postEntry'} style={props.styles.boxContainer} onClick={props.handlePageChange}>
      <div style={styles.contentContainer}>
        <div style={styles.imageBox}>
          <img src={props.post.image} style={styles.image} />
        </div>
        <div style={styles.details}>
          <div style={styles.header}>
            <div style={styles.title}>
              {props.post.title}
            </div>
            <div style={styles.date}>
              { moment(props.post.date, 'YYYYMMDD').fromNow() }
            </div>
          </div>
          <div style={styles.summaryBox}>
            {props.post.body}
          </div>
          <div style={styles.readMore}>
            <div className={'navBarOption'}>
              Read More...
            </div>
          </div>
          <div style={styles.tagBox}>
            tags: {props.post.tags.map((tag) => <span key={tag} style={styles.tags}>{tag + ' '}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostEntry;

const styles = {
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    margin: '1em 1em',
    height: '25em',
  },
  imageBox: {
    flex: '1',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  image: {
    position: 'relative',
    width: '100%',
  },
  details: {
    marginTop: '8px',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    paddingBottom: '5px',
    borderBottom: '1px solid darkgrey',
  },
  title: {
    color: 'black',
    fontSize: '18px',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  date: {
    flexWrap: 'nowrap',
    fontSize: '12px',
    color: 'silver',
    fontWeight: '100',
  },
  summaryBox: {
    fontSize: '15px',
    lineHeight: '1.2em',
    height: '6.01em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: 'grey',
  },
  readMore: {
    fontSize: '12px',
    color: 'silver',
  },
  tagBox: {
    fontSize: '14px',
    justifySelf: 'flex-end',
  },
  tags: {
    color: 'mediumaquamarine'
  },
};
