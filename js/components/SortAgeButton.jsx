import React, { Component } from 'react';

class SortAgeButton extends Component {
  constructor(props) {
    super(props);

    this.icoDefaultClass = 'asc';
    this.state = {
      iconClass: props.icoClass || this.icoDefaultClass,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSortByAge();
    this.setState({
      iconClass: this.props.icoClass || this.icoDefaultClass,
    });
  }

  render() {
    return (
      <button className="btn btn-default" onClick={this.handleClick}>
        <i className={`icon fa fa-sort-numeric-${this.state.iconClass}`} /> Sort by age
      </button>
    );
  }
}

SortAgeButton.propTypes = {
  icoClass: React.PropTypes.string,
  onSortByAge: React.PropTypes.func.isRequired,
};

SortAgeButton.defaultProps = {
  icoClass: 'asc',
};

export default SortAgeButton;
