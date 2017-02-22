import React from 'react';

var PostEntry = (props) => {
  return (
    <div className={'postEntry'} style={styles.postContainer}>
      <div style={styles.details}>
        {props.post.date}
      </div>
      <div style={styles.details}>
        {props.post.image}
      </div>
      <div style={styles.details}>
        {props.post.title}
      </div>
      <div style={styles.summary}>
        {props.post.body}
      </div>
    </div>
  );
};

export default PostEntry;

const styles = {
  postContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: '1px solid lightgrey',
    borderRadius: '4px',
    width: '85%',
    minHeight: '11em',
    marginBottom: '1.5em',
    padding: '1em',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 4px 18px 0 rgba(0, 0, 0, 0.19)',
  },
  details: {
    flexShrink: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  summary: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};
