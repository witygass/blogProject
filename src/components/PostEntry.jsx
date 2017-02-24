import React from 'react';

var PostEntry = (props) => {
  return (
    <div className={'postEntry'} style={props.styles.boxContainer}>
      <div style={styles.contentContainer}>
        <div style={styles.imageBox}>
          <img src={props.post.image} style={styles.image} />
        </div>
        <div style={styles.header}>
          <div style={styles.title}>
            {props.post.title}
          </div>
          <div style={styles.date}>
            {props.post.date}
          </div>
        </div>
        <div style={styles.summary}>
          <p style={styles.summaryParagraph}>
            {props.post.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostEntry;

const styles = {
  contentContainer: {
    margin: '1em 2em',
  },
  imageBox: {
    maxHeight: '5em',
    overflow: 'hidden',
  },
  image: {
    height: '5em',
  },
  details: {
    flexShrink: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontWeight: '100',
  },
  summary: {
    // lineHeight: '1.3em',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
  },
  summaryParagraph: {
    lineHeight: '1.3em',
    height: '10.2em',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};
