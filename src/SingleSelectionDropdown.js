import React from 'react';
import { Dropdown } from 'semantic-ui-react'



class SingleSelectionDropdown extends React.Component {

  render() {
    return (
        <Dropdown
          className="single-drop"
          onChange={this.props.onChange}
          placeholder={this.props.filterType}
          selection
          options={this.props.filterOptions || []}
        />
    );
  }
}


export default SingleSelectionDropdown;
