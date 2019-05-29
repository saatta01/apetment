import React from 'react';
import Pluralize from 'pluralize';

class Results extends React.Component {

  render() {
    const city = this.props.chosenCity.charAt(0).toUpperCase() + this.props.chosenCity.slice(1);
    const pets = Pluralize(this.props.chosenPet);
    return (
        <div className="results-div">
          <div className="selection">Showing apartments in <u>{city}</u> that allow <u>{pets}</u></div>
          <div className="content apartment-results">
            <div className="ui cards">{this.props.children}</div>
          </div>
        </div>
    );
  }
}

export default Results;
