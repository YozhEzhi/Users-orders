import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const SearchBar = props => (
  <div className="form-group">
    <AutoComplete
      dataSource={props.users}
      dataSourceConfig={{ text: 'name', value: 'id' }}
      filter={AutoComplete.fuzzyFilter}
      floatingLabelText="Search people..."
      fullWidth
      hintText={`Example: ${props.users[0].name}`}
      maxSearchResults={10}
      onNewRequest={user => props.onFilter(user)}
      onUpdateInput={term => props.onInput(term)}
    />
  </div>
);

SearchBar.propTypes = {
  onFilter: React.PropTypes.func.isRequired,
  onInput: React.PropTypes.func.isRequired,
  users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default SearchBar;
