import React from 'react';

var PostEntry = (props) => {
  return (
    <div className={'postEntry'} style={props.styles.boxContainer}>
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
  details: {
    flexShrink: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  summary: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};
