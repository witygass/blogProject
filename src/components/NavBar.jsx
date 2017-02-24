import React from 'react';
import FontAwesome from 'react-fontawesome';
import SearchBox from './SearchBox.jsx';

var NavBar = function(props) {
  const menuOptions = ['home', 'blog', 'projects'];
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
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    color: 'silver',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    borderBottom: '2px solid #7beab8',
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
    width: '7em',
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
