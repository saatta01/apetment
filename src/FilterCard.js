import React from 'react';

class FilterCard extends React.Component {

  render() {
    return (
      <form>
        <div className="card">
          <div className="content">
            <div className="header">
              {this.props.children}
            </div>
          </div>
          <div className="extra content">
              <div className="ui inverted basic button" onClick={this.props.onClick}>Search</div>
          </div>
        </div>
      </form>
    );
  }
}


export default FilterCard;
