import React from 'react';
import Background from './images/catHome.jpg';

let mastheadStyle = {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  zIndex: '0'
};


class Masthead extends React.Component {

  render() {
    return (
      <div className="intro ui inverted vertical mastehead center aligned segment" style={mastheadStyle}>
        <div className="background-overlay">
          <div className="header-text ui text container">
            <h1 className="ui inverted header">{this.props.headerTitle}</h1>
            <h2>{this.props.headerSmall}</h2>
            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Masthead;
