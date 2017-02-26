import React from 'react';

var HeaderBox = (props) => {
  return (
    <div style={styles.headerContainer}>
      {props.text}
    </div>
  );
};

export default HeaderBox;

const styles = {
  headerContainer: {
    height: '1em',
    width: '90%',
    backgroundColor: '#7beab8',
    border: '1px solid #7beab8',
    // borderRadius: '4px',
    lineHeight: '1em',
    verticalAlign: 'middle',
    textAlign: 'center',
    marginTop: '1em',
    padding: '8px 0em',
    color: 'white',
    fontWeight: '900',
    fontSize: '20px',
    // boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 3px 5px 0 rgba(0, 0, 0, 0.13)',
  },
};
