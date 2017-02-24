import React from 'react';
import Tag from './Tag.jsx';

var TagBox = function(props) {
  var tags = props.tags;



  return (
    <div style={props.styles.boxContainer}>
      <div style={styles.contentContainer}>
        { Object.keys(tags).map((key) => <Tag key={key} tagKey={key} value={tags[key]} toggleTagSelection={props.toggleTagSelection} />) }
      </div>
    </div>
  );
};

export default TagBox;

const styles = {
  contentContainer: {
    margin: '1em 1em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
};
