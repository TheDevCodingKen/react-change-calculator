import React from 'react';

export class Header extends React.Component {

  render() {
    return (
      <div className='headerContainer'>
        <header>
          <h1 style={ { color: 'white' } }>Change Calculator</h1>
        </header>
        <hr style={ { color: 'white' } } />
      </div>
    );
  }
}

export default Header;
