import React from 'react';

var AboutBox = function(props) {
  var fixedStyle = {};
  for (var key in props.styles.boxContainer) { fixedStyle[key] = props.styles.boxContainer[key]; }
  fixedStyle.position = 'fixed';
  fixedStyle.width = '20em';
  // props.styles.boxContainer.position = 'fixed'; // write blog post about the results of this action
  // props.styles.boxContainer.width = '20em'; // write blog post about the results of this action

  return (
    <div id={'aboutContainer'} style={fixedStyle}>
      <div style={styles.imageContainer}>
        <img src='./images/profilePicture.jpg' style={styles.profileImage} />
      </div>
      <div style={styles.detailsContainer}>
        <div style={styles.aboutHeader}>
          About me
        </div>
        <div style={styles.aboutSummary}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundImage: 'url("./images/bridge_left.jpg")',
    backgrounPosition: 'top',
    backgroundSize: 'cover',
    width: '100%',
    borderBottom: '2px solid #7beab8',
  },
  profileImage: {
    position: 'relative',
    top: '5em',
    height: '10em',
    width: '10em',
    borderRadius: '10em',
    border: '2px solid white',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 12px 0 rgba(0, 0, 0, 0.19)',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: '10em',
    marginTop: '5em',
  },
  aboutHeader: {
    marginTop: '5px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#1cb06d',
    width: '60%',
    textAlign: 'center',
    borderBottom: '1px solid gainsboro',
    lineHeight: '2em'
  },
  aboutSummary: {
    // marginTop: '7px',
    margin: '0% 12%',
  },
};

export default AboutBox;
