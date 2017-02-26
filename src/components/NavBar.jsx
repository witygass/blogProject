import React from 'react';
import FontAwesome from 'react-fontawesome';
import SearchBox from './SearchBox.jsx';

// var Link = function() {
// add this for the links so that on focus will stay black
//   return (
//     <div></div>
//   );
// };

var NavBar = (props) => {
  const menuOptions = ['home', 'blog', 'projects', 'about'];
  const socialOptions = [{logo: 'linkedin', url: 'http://www.linkedin.com/in/tylergassman'}, {logo: 'facebook', url: 'http://www.facebook.com/sincerely.tyler'}, {logo: 'github', url: 'http://www.github.com/witygass'}, {logo: 'angellist', url: 'http://www.angel.co/witygass'}];

  var linkToMedia = (url) => {
    window.open(url);
  };

  var handlePageChange = (page) => {
    props.handlePageChange(page);
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        {menuOptions.map((page) => <div onClick={handlePageChange.bind(null, page)} className={'navBarOption'} style={styles.menuOption} key={page}>{page}</div> )}
      </div>
      <div style={styles.middle}>
        mySite
      </div>
      <div style={styles.right}>
        {socialOptions.map((social) =>
          <div className={'navBarOption'} style={styles.socialButton} key={social.logo}>
            <FontAwesome
              className={social.logo}
              name={social.logo}
              size='2x'
              onClick={linkToMedia.bind(null, social.url)}
              />
          </div>)
        }
        <div id={'searchBox'} className={'navBarOption'} style={styles.searchField}>
          <SearchBox
            handleSearchSubmit={props.handleSearchSubmit}
            />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

const styles = {
  container: {
    position: 'fixed',
    zIndex: '1',
    top: '0',
    width: '100%',
    height: '3em',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    color: 'darkgrey',
    // boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 3px 5px 0 rgba(0, 0, 0, 0.13)',
    borderBottom: '1px solid gainsboro',
  },
  left: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  middle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    verticalAlign: 'middle',
    lineHeight: '150%',
    fontWeight: '500',
    fontSize: '30px',
  },
  right: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
  menuOption: {
    width: '6em',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '3em',
  },
  socialButton: {
    display: 'flex',
    flexDirection: 'row',
    width: '3em',
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '3em',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchField: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5px',
    marginLeft: '5px',
  },
};
