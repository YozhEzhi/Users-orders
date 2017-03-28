import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: 'Search people...',
      term: '',
    };

    this.colors = [
      'Red',
      'Orange',
      'Yellow',
      'Green',
      'Blue',
      'Purple',
      'Black',
      'White',
    ];

    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest(term) {
    this.props.onFilter(term);
  }

  render() {
    return (
      <div className="form-group">
        <AutoComplete
          dataSource={this.colors}
          filter={AutoComplete.caseInsensitiveFilter}
          floatingLabelText={this.state.placeholder}
          fullWidth
          onNewRequest={this.handleRequest}
          openOnFocus
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  onFilter: React.PropTypes.func.isRequired,
  users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default SearchBar;
