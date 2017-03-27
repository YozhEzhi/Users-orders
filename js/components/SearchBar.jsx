import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: 'Search people by name...',
      term: '',
    };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onFilter(term);
  }

  render() {
    return (
      <div className="form-group">
        <input
          className="search-bar form-control"
          placeholder={this.state.placeholder}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onFilter: React.PropTypes.func.isRequired,
};

export default SearchBar;
