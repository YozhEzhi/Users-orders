import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import Thumbnail from './components/Thumbnail';
import Toolbar from './components/Toolbar';
import UserList from './components/UserList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedByName: null,
      sortedByAge: null,
      users: null,
      searchData: null,
      selectedUser: null,
    };

    this.getData('./data.json');
    this.selectUser = this.selectUser.bind(this);
    this.filter = this.filter.bind(this);
    this.sortByAge = this.sortByAge.bind(this);
    this.sortByName = this.sortByName.bind(this);
  }

  getData(data) {
    fetch(data)
      .then(response => response.json())
      .then(json => this.setState({
        users: json,
        searchData: json,
        selectedUser: json[0],
      }))
      .catch(error => console.error(error));
  }

  filter(term) {
    const data = [...this.state.searchData];
    const users = data.filter(item => item.name.toLowerCase().includes(term));

    this.setState({
      sortedByName: 'asc',
      users,
      selectedUser: users[0],
    });
  }

  sortUsers(usersArr, param, reversed) {
    const sortedUsers = usersArr.sort((a, b) => (a[param] > b[param]) ? 1 : -1);
    return reversed ? sortedUsers.reverse() : sortedUsers;
  }

  sortByName() {
    const reversed = (this.state.sortedByName === 'asc');
    const sorting = reversed ? 'desc' : 'asc';
    const users = this.sortUsers([...this.state.users], 'name', reversed);

    this.setState({
      sortedByName: sorting,
      users,
      selectedUser: users[0],
    });
  }

  sortByAge() {
    const reversed = (this.state.sortedByAge === 'asc');
    const sorting = reversed ? 'desc' : 'asc';
    const users = this.sortUsers([...this.state.users], 'age', reversed);

    this.setState({
      sortedByAge: sorting,
      users,
      selectedUser: users[0],
    });
  }

  selectUser(selectedUser) {
    this.setState({ selectedUser });
  }

  render() {
    if (!this.state.users) return (<h3>Loading...</h3>);

    return (
      <div className="container app">
        <SearchBar onFilter={this.filter} />

        <div className="toolbar">
          <Toolbar
            icoClass={this.state.sortedByName}
            onSortByName={this.sortByName}
            onSortByAge={this.sortByAge}
          />
        </div>

        <div className="row">
          <div className="col-sm-4">
            <Thumbnail user={this.state.selectedUser} />
          </div>

          <div className="col-sm-8">
            <UserList
              onUserSelect={this.selectUser}
              users={this.state.users}
              selectedUser={this.state.selectedUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
