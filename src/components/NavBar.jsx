import React from 'react';
import FontAwesome from 'react-fontawesome';

var NavBar = function(props) {
  var menuOptions = ['home', 'blog', 'projects'];
  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <div className={'navBarOption'} style={styles.menuOption}>
          home
        </div>
        <div className={'navBarOption'} style={styles.menuOption}>
          blog
        </div>
        <div className={'navBarOption'} style={styles.menuOption}>
          projects
        </div>
      </div>
      <div style={styles.right}>
        <div className={'navBarOption'} style={styles.socialButton}>
          <FontAwesome
            className='linkedin'
            name='linkedin'
            size='2x'
            />
        </div>
        <div className={'navBarOption'} style={styles.socialButton}>
          <FontAwesome
            className='facebook'
            name='facebook'
            size='2x'
            />
        </div>
        <div className={'navBarOption'} style={styles.socialButton}>
          <FontAwesome
            className='github'
            name='github'
            size='2x'
            />
        </div>
        <div className={'navBarOption'} style={styles.searchField}>
          <form style={styles.searchForm}>
            <input
              style={styles.searchInput}
              type="text"
              placeholder="search..."
              />
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '3em',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  left: {
    color: 'silver',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  right: {
    color: 'silver',
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
  searchForm: {
    width: '15em',
    marginBottom: 0,
  },
  searchInput: {
    width: '100%',
    padding: '8px 15px',
    boxSizing: 'border-box',
    border: '1px solid silver',
    borderRadius: '4px',
    backgroundColor: 'whitesmoke',
    fontSize: '15',
  },
};

export default NavBar;
