import React from 'react';

class ResponseBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='Write a response...'>
          </input>
        </form>
      </div>
    );
  }
}

export default ResponseBox;

const styles = {

};
